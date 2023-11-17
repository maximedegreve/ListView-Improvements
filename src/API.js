import React from 'react'
import { Box } from '@primer/react'

function Playground() {
    return (
        <ListView
            metaDataColumns={[
                [],
                [],
                ['auto', 'auto', 'auto'],
                ['auto', 'auto', 'auto'],
            ]}
        >
            <ListViewItem
                metaData={['🍐', '🍓', '🥝']}
                title="Delicious fruits"
            />
            <ListViewItem
                metaData={['🥓', '🍟', '🍗']}
                title="Deep fried shack"
            />
            <ListViewItem
                metaData={['🍧', '🍦', '🍨']}
                title="Deep fried shack"
            />
        </ListView>
    )
}

function ListView({ metaDataColumns, children }) {
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
                gridTemplateColumns: [
                    `1fr ${metaDataColumns[0]?.join(' ')}`,
                    `1fr ${metaDataColumns[1]?.join(' ')}`,
                    `1fr ${metaDataColumns[2]?.join(' ')}`,
                    `1fr ${metaDataColumns[3]?.join(' ')}`,
                ],
                li: {
                    gridTemplateColumns: 'subgrid',
                    gridColumn: [
                        `1/${Math.max(metaDataColumns[0]?.length, 1) + 2}`,
                        `1/${Math.max(metaDataColumns[1]?.length, 1) + 2}`,
                        `1/${Math.max(metaDataColumns[2]?.length, 1) + 2}`,
                        `1/${Math.max(metaDataColumns[3]?.length, 1) + 2}`,
                    ],
                },
                [`li .meta-data:nth-of-type(${
                    1 + metaDataColumns[0][0] != null
                })`]: {
                    bg: 'red',
                },
                [`li .meta-data:nth-of-type(${
                    1 + metaDataColumns[0][0] != null
                })`]: {
                    bg: 'red',
                },
                [`li .meta-data:nth-of-type(${
                    1 + metaDataColumns[0][0] != null
                })`]: {
                    bg: 'red',
                },
                [`li .meta-data:nth-of-type(${
                    1 + metaDataColumns[0][0] != null
                })`]: {
                    bg: 'red',
                },
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
            <Box>{title}</Box>
            {metaData.map((meta) => (
                <Box className="meta-data">{meta}</Box>
            ))}
        </Box>
    )
}

export default Playground
