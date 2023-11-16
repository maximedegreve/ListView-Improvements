import { Box, Button } from '@primer/react'
import { useState } from 'react'

import styled, { keyframes, css } from 'styled-components'

const popAnimation = keyframes({
    from: {
        transform: 'scale(1, 1)',
    },

    '25%': {
        transform: 'scale(0.9, 1.1)',
    },

    '50%': {
        transform: 'scale(1.1, 0.9)',
    },

    '75%': {
        transform: 'scale(0.95, 1.05)',
    },

    to: {
        transform: 'scale(1, 1)',
    },
})

const Jellatine = styled(Box)`
    animation: ${(props) =>
        props.show
            ? css`
                  ${popAnimation} 0.3s
              `
            : ''};
`

function PopDialog() {
    const [showPopup, setShowPopup] = useState(false)

    const triggerPopup = () => {
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 500) // Hide after animation
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 30,
                bg: 'canvas.overlay',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={triggerPopup}
        >
            <Box
                sx={{
                    bg: 'canvas.default',
                    width: 300,
                    height: 300,
                    borderRadius: 2,
                    flexDirection: 'column',
                    display: 'flex',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'border.default',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: 1,
                    }}
                >
                    Content
                </Box>
                <Box
                    sx={{
                        p: 3,
                        bg: 'canvas.inset',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        borderTopWidth: 1,
                        display: 'flex',
                        gap: 2,
                        borderTopStyle: 'solid',
                        borderTopColor: 'border.default',
                    }}
                >
                    <Jellatine show={showPopup}>
                        <Button>Cancel</Button>
                    </Jellatine>
                    <Jellatine show={showPopup}>
                        <Button>Save</Button>
                    </Jellatine>
                </Box>
            </Box>
        </Box>
    )
}

export default PopDialog
