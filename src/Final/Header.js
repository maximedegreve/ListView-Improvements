import { Box, Checkbox, Octicon } from '@primer/react'
import { ChevronDownIcon } from '@primer/octicons-react'
import { SectionFilterLink } from './SectionFilterLink'
import { SectionFilters } from './SectionFilters'

export default function Header({ children, totalItems, selectable }) {
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
                pl: 3,
                pr: '12px',
                py: '12px',
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
                        <SectionFilterLink isSelected count={2} title="Open" />,
                        <SectionFilterLink count={6} title="Closed" />,
                    ]}
                ></SectionFilters>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, pr: 3 }}>
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
                height: 32,
                display: 'flex',
                alignItems: 'center',
                py: 1,
                px: 2,
                ':hover': {
                    bg: 'btn.hoverBg',
                },
            }}
            onClick={onClick}
        >
            {children}
            <Octicon
                icon={ChevronDownIcon}
                size={16}
                color="fg.muted"
                sx={{ ml: 1 }}
            />
        </Box>
    )
}
