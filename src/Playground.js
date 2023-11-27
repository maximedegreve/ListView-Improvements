import { Box, Link } from '@primer/react'
import TableV0 from './TableV0'
import Final from './Final'
import TableV0b from './TableV0b'
import TableV0aNoLabels from './TableV0aNoLabels'
import TableV1 from './TableV1'
import TableV2 from './TableV2'
import TableV3 from './TableV3'
import TableV4 from './TableV4'
import API from './API'

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
            <API />
            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pt: 8,
                    color: 'fg.default',
                    fontSize: 3,
                    fontWeight: 'semibold',
                    width: '100%',
                }}
            >
                Favourite
            </Box>

            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 5,
                    pt: 2,
                    color: 'fg.muted',
                    fontSize: 1,
                    lineHeight: 1.8,
                    width: '100%',
                }}
            >
                This two examples have been chosen based on{' '}
                <Link href="https://docs.google.com/spreadsheets/d/1sRfFfJmXquH427z87iVoW_hb-wnGuDE9DpuyxKj6_sQ/edit#gid=0">
                    customer feedback
                </Link>{' '}
                and{' '}
                <Link href="https://github.slack.com/archives/C01G0NX0X43/p1699008178196839">
                    internal feedback
                </Link>
                .
            </Box>

            <Final />

            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 6,
                    pt: 8,
                    color: 'fg.default',
                    fontSize: 3,
                    fontWeight: 'semibold',
                    width: '100%',
                }}
            >
                Old explorations
            </Box>

            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    color: 'fg.muted',
                    fontSize: 1,
                    width: '100%',
                }}
            >
                Example 0y: No labels
            </Box>
            <TableV0aNoLabels />

            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    color: 'fg.muted',
                    fontSize: 1,
                    pt: 8,
                    width: '100%',
                }}
            >
                Example 0: No gaps 😍 (requires 0 values) (subgrid css)
            </Box>
            <TableV0 />
            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    pt: 8,
                    color: 'fg.muted',
                    fontSize: 1,
                    width: '100%',
                }}
            >
                Example 0b: Gaps ☹️ (existing behaviour) (label below title)
                (subgrid css)
            </Box>
            <TableV0b />
            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    pt: 8,
                    color: 'fg.muted',
                    fontSize: 1,
                    width: '100%',
                }}
            >
                Example 1: No gaps 😍 (requires 0 values) (display:contents)
            </Box>
            <TableV1 />
            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    pt: 8,
                    color: 'fg.muted',
                    fontSize: 1,
                    width: '100%',
                }}
            >
                Example 2: Gaps ☹️ (hidden 0 values) (subgrid css)
            </Box>
            <TableV2 />
            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    pt: 8,
                    color: 'fg.muted',
                    fontSize: 1,
                    width: '100%',
                }}
            >
                Example 3: No grid ☹️ (hidden 0 values) (display:contents)
            </Box>
            <TableV3 />
            <Box
                sx={{
                    maxWidth: 1400,
                    textAlign: 'left',
                    pb: 3,
                    pt: 8,
                    color: 'fg.muted',
                    fontSize: 1,
                    width: '100%',
                }}
            >
                Example 4: No gaps 😍 (requires 0 values - faded)
                (display:contents)
            </Box>
            <TableV4 />
        </Box>
    )
}

export default Playground
