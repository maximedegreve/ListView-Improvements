import { Box, StyledOcticon, Tooltip } from '@primer/react'

export default function StatusButton({ count, icon, label, isMobile }) {
    const button = (
        <Box
            as="button"
            disabled={count === 0}
            onClick={() => alert('clicked')}
            sx={{
                fontSize: 0,
                color: 'fg.muted',
                opacity: count === 0 ? 0.3 : 1,
                display: 'flex',
                alignItems: 'center',
                bg: 'transparent',
                borderWidth: isMobile ? 1 : 0,
                borderStyle: 'solid',
                borderColor: 'border.subtle',
                transition: 'background .12s ease-out',
                '&:active:not([disabled])': {
                    bg: 'actionListItem.default.active',
                    borderColor: 'btn.activeBorder',
                },
                ':hover:enabled': {
                    bg: 'actionListItem.default.hoverBg',
                    cursor: 'pointer',
                },
                px: ['7px', '7px', 2],
                fontWeight: isMobile ? 'bold' : 'regular',
                py: isMobile ? 0 : 1,
                height: isMobile ? 20 : 'auto',
                borderRadius: isMobile ? 3 : 2,
            }}
        >
            <Box sx={{ display: isMobile ? 'flex' : 'none' }}>
                <StyledOcticon
                    icon={icon}
                    size={13}
                    sx={{
                        mr: 1,
                        color: 'fg.muted',
                    }}
                />
            </Box>

            <Box sx={{ display: isMobile ? 'none' : 'flex' }}>
                <StyledOcticon
                    icon={icon}
                    size={16}
                    sx={{
                        mr: 2,
                        color: 'fg.muted',
                    }}
                />
            </Box>

            {count}
        </Box>
    )

    if (count === 0) {
        return button
    }
    return <Tooltip aria-label={label}>{button}</Tooltip>
}
