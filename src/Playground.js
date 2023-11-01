import {
    Box,
} from '@primer/react'
import TableV1 from './TableV1'
import TableV2 from './TableV2'
import TableV3 from './TableV3'

function Playground() {
    return (

        <Box
            sx={{
                bg: 'canvas.default',
                px: 3,
                py: 8,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3,  color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 1: No gaps 👍</Box>
            <TableV1/>
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3, pt: 8, color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 2: Gaps 👎</Box>
            <TableV2/>
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3, pt: 8, color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 3: No grid 👎</Box>
            <TableV3/>
        </Box>
    )
}


export default Playground
