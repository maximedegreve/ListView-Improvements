import { Box, StyledOcticon } from '@primer/react'

export default function StatusButton({ count, icon }) {
    return (
        <Box
            as="button"
            disabled={count === 0}
            onClick={() => alert("clicked")}
            sx={{
                fontSize: 0,
                color: count === 0 ? 'primer.fg.disabled' : 'fg.muted',
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
}
