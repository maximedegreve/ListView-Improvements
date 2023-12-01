import { CounterLabel, Box } from '@primer/react'

/**
 * Represents a single categorical section filter. Used to allow a user to filter the ListView's list items to only
 * show those matching this filter.
 */
export const SectionFilterLink = ({
    href,
    title,
    count,
    isSelected = false,
    isLoading = false,
    sx: externalLinkSx = {},
    ...rest
}) => {
    let counterLabelSx
    if (typeof count !== 'undefined') {
        counterLabelSx = {
            ml: 2,
            lineHeight: '18px',
            py: 0,
            bg: 'neutral.muted',
            fontSize: 0,
            px: '6px',
            color: !isSelected ? 'fg.muted' : 'fg.default',
            display: 'inline-block',
            fontWeight: 'semibold',
            minWidth: 20,
            textAlign: 'center',
        }
        if (isLoading) {
            counterLabelSx.color = 'transparent'
        }
    }

    return (
        <Box
            as="a"
            href={href}
            sx={{
                color: isSelected ? 'fg.default' : 'fg.muted',
                fontWeight: isSelected ? 'bold' : 'normal',
                fontSize: 1,
                px: 2,
                py: 0,
                borderRadius: 2,
                textAlign: 'center',
                lineHeight: '30px',
                display: 'flex',
                textDecoration: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                transition: 'background .12s ease-out',
                '&:hover:not([disabled])': {
                    bg: 'actionListItem.default.hoverBg',
                    textDecoration: 'none',
                },
                '&:active:not([disabled])': {
                    bg: 'actionListItem.default.active',
                    borderColor: 'btn.activeBorder',
                },
            }}
            aria-current={isSelected ? 'true' : undefined}
            {...rest}
        >
            <Box sx={{ display: 'block' }}>{title}</Box>
            {typeof count !== 'undefined' && (
                <CounterLabel sx={counterLabelSx}>{count}</CounterLabel>
            )}
        </Box>
    )
}
