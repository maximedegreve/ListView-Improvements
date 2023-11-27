import { Box } from '@primer/react'

export const SectionFilters = ({ links }) => {
    if (links.length < 1) return null

    return (
        <div>
            <Box
                as="ul"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    listStyleType: 'none',
                }}
                className="list-style-none"
            >
                {links.map((sectionFilterLink, index) => (
                    <li key={`section-filter-${index}`}>{sectionFilterLink}</li>
                ))}
            </Box>
        </div>
    )
}
