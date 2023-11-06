import { Box, StyledOcticon } from '@primer/react'
import { PersonIcon } from '@primer/octicons-react'

export default function EmptyAvatar({size = 20}) {
    return (
        <Box sx={{width: size, height: size, opacity: 0.3, borderRadius: size/2, borderColor: 'fg.muted', borderStyle: 'solid', borderWidth: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <StyledOcticon
                icon={PersonIcon}
                size={12}
                sx={{ color: 'fg.muted' }}
            />
        </Box>
    )
}
