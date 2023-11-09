import { Box } from '@primer/react'

export default function Branch({ children }) {
    return (
        <Box
            sx={{
                height: 18,
                bg: 'accent.subtle',
                color: 'accent.fg',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                fontFamily: 'monospace',
                fontSize: '11px',
                fontWeight: 'semibold',
                borderRadius: 1,
                lineHeight: '20px',
                px: 1,
            }}
        >
            {children}
        </Box>
    )
}
