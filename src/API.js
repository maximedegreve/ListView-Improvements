import React from 'react'
import { Box } from '@primer/react'

function Playground() {
    return (
        <ListView
            metaDataColumns={[
                {
                    narrow: false,
                    width: 'auto',
                    name: 'meta1',
                },
                {
                    narrow: false,
                    width: 'meta2',
                },
                {
                    narrow: false,
                    width: 'meta3',
                },
            ]}
        >
            <ListViewItem
                metaData={[<Box>🍐</Box>, <Box>🍓</Box>, <Box>🥝</Box>]}
            >
                Delicious fruits
            </ListViewItem>
            <ListViewItem
                metaData={[<Box>🥓</Box>, <Box>🍟</Box>, <Box>🍗</Box>]}
            >
                Deep fried shack
            </ListViewItem>
            <ListViewItem
                metaData={[<Box>🍧</Box>, <Box>🍦</Box>, <Box>🍨</Box>]}
            >
                <Box>Shaved coldness</Box>
            </ListViewItem>
        </ListView>
    )
}

function ListView({ metaDataColumns, children }) {
    const displayForItem = (index) => {
        const result = metaDataColumns.map((column, colIndex) => {
            console.log('columns: ', column)
            console.log('index: ', index)
            console.log('colIndex: ', colIndex)
            if (!column.narrow && index > colIndex) {
                return 'none'
            } else {
                return 'flex'
            }
        })
        console.log(result)
        return result
    }

    const columnsWide = metaDataColumns
        .map((column) => {
            return column.width
        })
        .join(' ')

    const columnsNarrow = metaDataColumns
        .map((column) => {
            if (!column.narrow) {
                return null
            } else {
                return column.width
            }
        })
        .join(' ')

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
                    `1fr ${columnsNarrow}`,
                    `1fr ${columnsNarrow}`,
                    `1fr ${columnsWide}`,
                ],
            }}
        >
            {React.Children.map(children, (row) => {
                const metaData = row.props.metaData.map((column, i) => (
                    <Box
                        sx={{
                            display: ['1fr', ...displayForItem(i)],
                        }}
                    >
                        {column}
                    </Box>
                ))
                return (
                    <ListViewItem {...row.props} metaData={metaData}>
                        {row.props.children}
                    </ListViewItem>
                )
            })}
        </Box>
    )
}

function ListViewItem({ children, metaData }) {
    return (
        <Box
            as="li"
            sx={{
                gridTemplateColumns: 'subgrid',
                display: 'grid',
                bg: 'canvas.inset',
                borderWidth: 1,
                borderColor: 'border.default',
                borderStyle: 'solid',
                p: 3,
                borderRadius: 2,
                gridColumn: ['1/3', '1/3', '1/5'],
            }}
        >
            {children}
            {metaData}
        </Box>
    )
}

export default Playground
