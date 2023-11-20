import React from 'react'
import { Box } from '@primer/react'

function Playground() {
    return (
        <ListView
            metaDataColumns={[
                [],
                [{ name: 'react-node', width: 'min(200px)' }],
                [{ name: 'meta-1' }, { name: 'meta-3' }],
                [{ name: 'meta-1' }, { name: 'meta-2' }, { name: 'meta-3' }],
            ]}
        >
            <ListViewItem
                metaData={{ 'meta-1': '🍐', 'meta-2': '🍓', 'meta-3': '🥝' }}
                title="Delicious fruits"
            />
            <ListViewItem
                metaData={{ 'meta-1': '🥓', 'meta-3': '🍗' }}
                title="Deep fried shack"
            />
            <ListViewItem
                metaData={{
                    'meta-1': '🍧',
                    'meta-2': '🍦',
                    'react-node': (
                        <>
                            <Box sx={{ bg: 'red', width: '100%' }}>
                                react-node
                            </Box>
                        </>
                    ),
                }}
                title="Shaving coldness"
            />
        </ListView>
    )
}

function ListView({ metaDataColumns, children }) {
    const getColumnStyles = () => {
        const uniqueNames = new Set(
            metaDataColumns.flatMap((breakpoint) =>
                breakpoint.map((col) => col.name)
            )
        )

        return Array.from(uniqueNames).reduce((displays, name) => {
            displays[`li .${name}`] = {
                display: metaDataColumns.flatMap((breakpoint) =>
                    breakpoint.some((b) => b.name === name) ? 'flex' : 'none'
                ),
            }
            return displays
        }, {})
    }

    const getTemplateAreas = () => {
        return metaDataColumns.map((breakpoint) => {
            const areas = breakpoint.map((col) => col.name).join(' ')
            return `"title ${areas}"`
        })
    }

    return (
        <Box
            as="ul"
            sx={{
                bg: 'canvas.default',
                px: 3,
                py: 8,
                display: 'grid',
                rowGap: 3,
                columnGap: 5,
                width: '100%',
                maxWidth: 700,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gridTemplateAreas: getTemplateAreas(),
                gridTemplateColumns: metaDataColumns.map(
                    (breakpoint) =>
                        `1fr ${breakpoint
                            .map((col) => col.width ?? 'auto')
                            ?.join(' ')}`
                ),
                li: {
                    gridTemplateColumns: 'subgrid',
                    gridColumn: metaDataColumns
                        .map((breakpoint) => breakpoint.length)
                        .map((length) => {
                            return `1/${length === 0 ? 2 : length + 2}`
                        }),
                },
                'li .meta-data': {
                    display: 'none',
                },
                ...getColumnStyles(),
            }}
        >
            {children}
        </Box>
    )
}

function ListViewItem({ metaData, title }) {
    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                bg: 'canvas.inset',
                borderWidth: 1,
                borderColor: 'border.default',
                borderStyle: 'solid',
                p: 3,
                borderRadius: 2,
            }}
        >
            <Box sx={{ gridArea: 'title' }}>{title}</Box>
            {Object.keys(metaData).map((key) => (
                <Box className={`meta-data ${key}`} sx={{ gridArea: key }}>
                    {metaData[key]}
                </Box>
            ))}
        </Box>
    )
}

export default Playground
