import { Box, Text, Link, StyledOcticon, Checkbox } from '@primer/react'
import { CommentIcon, MortarBoardIcon } from '@primer/octicons-react'

function Playground() {
    return (
        <Box
            sx={{
                bg: 'canvas.default',
                p: 6,
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '30px 1fr auto auto auto auto',
                    bg: 'grey',
                    width: '100%',
                    maxWidth: 1400,
                    mx: 'auto',
                }}
            >
                <Row />
            </Box>
        </Box>
    )
}

function Row() {
    return (
        <Box sx={{ display: 'contents' }}>
            <Box
                sx={{
                    gridColumn: 1,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Checkbox value="default" />
            </Box>
            <Box sx={{ gridColumn: 2, px: 5 }}>
                ActionMenu: Selected items use checkboxes instead of checkmarks
                #3838
            </Box>
            <Box sx={{ gridColumn: 3, px: 5 }}>
                <StyledOcticon
                    icon={MortarBoardIcon}
                    size={16}
                    sx={{ mr: 1, color: 'attention.fg' }}
                />
                124
            </Box>
            <Box sx={{ gridColumn: 4, px: 5 }}>
                <StyledOcticon
                    icon={MortarBoardIcon}
                    size={16}
                    sx={{ mr: 1, color: 'attention.fg' }}
                />
                1
            </Box>
            <Box sx={{ gridColumn: 5, px: 5 }}>
                <StyledOcticon
                    icon={MortarBoardIcon}
                    size={16}
                    sx={{ mr: 1, color: 'attention.fg' }}
                />
                145
            </Box>
        </Box>
    )
}

export default Playground
