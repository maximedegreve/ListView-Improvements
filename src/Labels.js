import {
    useRef,
    useLayoutEffect,
    useState,
    useEffect,
    useCallback,
} from 'react'
import { Box, Token, Tooltip, Label as PrimerLabel } from '@primer/react'

export default function Labels({ labels, mobile, leftAligned = false }) {
    const [truncatedLabelCount, setTruncatedLabelCount] = useState(0)

    const lastVisibleLabelIndex = labels.length - truncatedLabelCount - 1

    const labelRef = useRef(null)

    const recalculatedTruncatedLabelCount = useCallback(() => {
        if (labelRef?.current) {
            const childLabels = Array.from(labelRef.current.children)

            const baseOffset = labelRef.current.offsetTop
            const breakIndex = childLabels.findIndex(
                (item) => item.offsetTop > baseOffset
            )
            setTruncatedLabelCount(
                breakIndex > 0 ? labels.length - breakIndex : 0
            )
        }
    }, [labels.length])

    useEffect(() => {
        // recalculate the truncated label count when the window is resized
        const curObserver = new ResizeObserver(() => {
            recalculatedTruncatedLabelCount()
        })

        if (labelRef?.current) {
            curObserver.observe(labelRef.current)
        }

        return () => {
            curObserver.disconnect()
        }
    }, [recalculatedTruncatedLabelCount])

    // using this to synchronize the rendering of the labels and the + badge
    useLayoutEffect(() => {
        recalculatedTruncatedLabelCount()
    }, [labels.length, recalculatedTruncatedLabelCount])

    if (labels.length === 0) {
        return null
    }

    if (mobile) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    rowGap: 2,
                    columnGap: 1,
                    height: '100%',
                }}
            >
                {labels.map((label, index) => {
                    return <ColoredLabel name={label.name} />
                })}
            </Box>
        )
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: leftAligned ? 'flex-start' : 'flex-end',
                alignItems: 'flex-start',
                gap: 1,
                height: '100%',
                maxHeight: 20,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                    justifyContent: leftAligned ? 'flex-start' : 'flex-end',

                    a: {
                        display: 'inline-flex',
                    },
                }}
                ref={labelRef}
            >
                {labels.map((label, index) => {
                    const hidden = index > lastVisibleLabelIndex
                    return (
                        <ColoredLabel
                            name={label.name}
                            sx={{
                                visibility: hidden ? 'hidden' : 'visible',
                            }}
                        />
                    )
                })}
            </Box>
            {truncatedLabelCount > 0 && (
                <Box>
                    <Tooltip
                        align={'right'}
                        direction="sw"
                        text={labels.map((label) => label.name).join(', ')}
                        sx={{ display: 'flex' }}
                    >
                        <Token text={`+${truncatedLabelCount}`} />
                    </Tooltip>
                </Box>
            )}
        </Box>
    )
}

function ColoredLabel({ name, sx }) {
    const variants = [
        'default',
        'primary',
        'secondary',
        'accent',
        'success',
        'attention',
        'severe',
        'danger',
        'done',
        'sponsors',
    ]
    const pickedValue = pickValueFromArray(variants, name)
    return (
        <PrimerLabel variant={pickedValue} sx={sx}>
            {name}
        </PrimerLabel>
    )
}

function pickValueFromArray(arr, randomString) {
    // Hash the string to an integer
    let hash = 0
    for (let i = 0; i < randomString.length; i++) {
        const char = randomString.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash |= 0 // Convert to 32-bit integer
    }

    // Use the hash to pick an index
    const index = Math.abs(hash) % arr.length

    return arr[index]
}