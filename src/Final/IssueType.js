import { Box } from '@primer/react'

export default function IssueType({ children }) {
    return (
        <Box
            sx={{
                display: 'inline',
                mr: 2,
                color: 'fg.muted',
                bg: 'canvas.subtle',
                borderColor: 'border.subtle',
                borderWidth: 1,
                borderStyle: 'solid',
                fontWeight: 'bold',
                fontSize: 0,
                px: '7px',
                py: '2px',
                borderRadius: 3,
            }}
        >
            {children}
        </Box>
    )
}
