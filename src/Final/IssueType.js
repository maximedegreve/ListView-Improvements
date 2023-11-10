import { Box } from '@primer/react'

export default function IssueType({ children, type }) {
    if (type === 'none') {
        return null
    }

    if (type === 'custom') {
        return (
            <Box
                sx={{
                    display: 'inline-flex',
                    mr: 1,
                    color: 'fg.muted',
                    alignItems: 'center',
                    verticalAlign: 'text-top',
                    fontWeight: 'bold',
                    fontSize: 1,
                    lineHeight: 1,
                    height: '18px',
                    borderRadius: 3,
                }}
            >
                [{children}]
            </Box>
        )
    }

    return (
        <Box
            sx={{
                display: 'inline-flex',
                mr: 2,
                color: 'fg.muted',
                bg: 'canvas.subtle',
                alignItems: 'center',
                borderColor: 'border.subtle',
                borderWidth: 1,
                verticalAlign: 'text-top',
                borderStyle: 'solid',
                fontWeight: 'bold',
                fontSize: 0,
                px: '7px',
                lineHeight: 1,
                py: 0,
                height: '20px',
                borderRadius: 3,
            }}
        >
            {children}
        </Box>
    )
}
