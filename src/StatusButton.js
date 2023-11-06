import { Box, StyledOcticon, Tooltip } from '@primer/react'

export default function StatusButton({ count, icon, label }) {
    const button = (
        <Box
            as="button"
            disabled={count === 0}
            onClick={() => alert('clicked')}
            sx={{
                fontSize: 0,
                color: 'fg.muted',
                opacity: count === 0 ? 0.5 : 1,
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'semibold',
                bg: 'transparent',
                border: 0,
                transition: 'background .12s ease-out',

                '&:active:not([disabled])': {
                    bg: 'actionListItem.default.active',
                    borderColor: 'btn.activeBorder',
                },
                ':hover:enabled': {
                    bg: 'actionListItem.default.hoverBg',
                    cursor: 'pointer',
                    color: 'fg.default',
                },
                px: 2,
                py: 1,
                borderRadius: 2,
            }}
        >
            <StyledOcticon
                icon={icon}
                size={16}
                sx={{
                    mr: 2,
                    color: count === 0 ? 'primer.fg.disabled' : 'fg.muted',
                }}
            />
            {count}
        </Box>
    )

    if (count === 0) {
        return button
    }
    return <Tooltip aria-label={label}>{button}</Tooltip>
}
