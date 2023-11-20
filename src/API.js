import React from 'react'
import { Box } from '@primer/react'

function Playground() {
    return (
        <ListView
            metaDataColumns={[
                [],
                [],
                [
                    { name: 'meta-1', width: 'auto' },
                    { name: 'meta-3', width: 'auto' },
                ],
                [
                    { name: 'meta-1', width: 'auto' },
                    { name: 'meta-2', width: 'auto' },
                    { name: 'meta-3', width: 'auto' },
                ],
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
                metaData={{ 'meta-1': '🍧', 'meta-2': '🍦' }}
                title="Shaving coldness"
            />
        </ListView>
    )
}

function ListView({ metaDataColumns, children }) {
    const generateDisplayArray = () => {
        const names = metaDataColumns
            .map((breakpoint) => breakpoint.map((col) => col.name))
            .flat()
        const uniqueNames = [...new Set(names)]

        let displays = {}
        for (var i = 0; i < uniqueNames.length; i++) {
            const name = uniqueNames[i]

            const displayValues = metaDataColumns
                .map((breakpoint) => {
                    const match = breakpoint.find((b) => b.name === name)
                    return match ? 'flex' : 'none'
                })
                .flat()

            displays[`li .${name}`] = {
                display: displayValues,
            }
        }

        console.log(displays)

        return displays
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
                gridTemplateAreas: '"title meta-1 meta-2 meta-3"',
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
                ...generateDisplayArray(),
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
