import { Box } from '@primer/react'

export default function Notification({ unseen }) {
    return (
        <Box
            sx={{
                bg: unseen ? 'accent.fg' : 'fg.muted',
                opacity: unseen ? 1 : 0.3,
                height: 8,
                width: 8,
                borderRadius: 2,
            }}
        />
    )
}
