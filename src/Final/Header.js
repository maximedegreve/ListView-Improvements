import { Box, Checkbox } from '@primer/react'

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
                pr: 2,
                py: 2,
                borderBottomWidth: 0,
            }}
        >
            {selectable && <Box sx={{display: 'flex', alignItems: 'center', pr: 3}}><Checkbox /></Box>}
            <Box sx={{flex: 1, display: 'flex', fontSize: 1, fontWeight: 'bold', alignItems: 'center'}}>{totalItems} items</Box>
            <Box>{children}</Box>
        </Box>
    )
}
