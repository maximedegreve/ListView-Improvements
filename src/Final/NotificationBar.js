import { Box } from '@primer/react'

export default function NotificationBar({ unseen }) {
    if (!unseen) {
        return null
    }
    return (
        <Box
            sx={{
                position: 'absolute',
                width: 3,
                bg: 'accent.fg',
                left: 0,
                bottom: -0.5,
                top: -0.5,
            }}
        ></Box>
    )
}
