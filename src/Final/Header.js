import { Box, Checkbox, Octicon } from '@primer/react'
import { TriangleDownIcon } from '@primer/octicons-react'
import { SectionFilterLink } from './SectionFilterLink'
import { SectionFilters } from './SectionFilters'

export default function Header({ children, selectable }) {
    return (
        <Box
            sx={{
                bg: 'canvas.subtle',
                borderColor: 'border.default',
                borderStyle: 'solid',
                borderTopWidth: 1,
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                display: 'flex',
                borderLeftWidth: 1,
                borderRightWidth: 1,
                pl: selectable ? 3 : '12px',
                pr: 2,
                py: 2,
                borderBottomWidth: 0,
            }}
        >
            {selectable && (
                <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
                    <Checkbox />
                </Box>
            )}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    fontSize: 1,
                    fontWeight: 'bold',
                    alignItems: 'center',
                }}
            >
                <SectionFilters
                    links={[
                        <SectionFilterLink
                            isSelected
                            count={20}
                            title="Open"
                        />,
                        <SectionFilterLink count={593} title="Closed" />,
                    ]}
                ></SectionFilters>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, pr: 3 }}>
                <FilterButton>Author</FilterButton>
                <FilterButton>Label</FilterButton>
                <FilterButton>Project</FilterButton>
                <FilterButton>Milestone</FilterButton>
                <FilterButton>Assignee</FilterButton>
                <FilterButton>Sort</FilterButton>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

function FilterButton({ children, onClick }) {
    return (
        <Box
            as="button"
            sx={{
                fontSize: 1,
                border: 0,
                padding: 0,
                cursor: 'pointer',
                bg: 'canvas.subtle',
                color: 'fg.muted',
                borderRadius: 2,
                fontWeight: 'regular',
                lineHeight: '30px',
                display: 'flex',
                alignItems: 'center',
                px: 2,
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
            onClick={onClick}
        >
            {children}
            <Octicon
                icon={TriangleDownIcon}
                size={16}
                color="fg.muted"
                sx={{ ml: 1 }}
            />
        </Box>
    )
}
