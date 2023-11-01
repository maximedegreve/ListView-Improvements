import {
    Box,
} from '@primer/react'
import TableV0 from './TableV0'
import TableV1 from './TableV1'
import TableV2 from './TableV2'
import TableV3 from './TableV3'
import TableV4 from './TableV4'

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
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3,  color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 0: No gaps 😍 (requires 0 values) (subgrid css)</Box>
            <TableV0/>
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3, pt: 8,  color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 1: No gaps 😍 (requires 0 values) (display:contents)</Box>
            <TableV1/>
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3, pt: 8, color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 2: Gaps ☹️ (hidden 0 values)</Box>
            <TableV2/>
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3, pt: 8, color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 3: No grid ☹️ (hidden 0 values)</Box>
            <TableV3/>
            <Box sx={{maxWidth: 1400, textAlign: 'left', pb: 3, pt: 8, color: 'fg.muted', fontSize: 1, width: '100%'}}>Example 4: No gaps 😍 (requires 0 values - faded)</Box>
            <TableV4/>
        </Box>
    )
}


export default Playground
