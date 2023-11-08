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
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [parentDimensions, setParentDimensions] = useState({
        width: 0,
        height: 0,
    })

    const labelRef = useRef(null)
    const parentRef = useRef(null)

    const recalculatedTruncatedLabelCount = useCallback(() => {
        if (labelRef.current && parentRef.current) {

            console.log("parent width")

            const parentWidth = parentDimensions.width
            console.log(parentWidth)
            let newTruncatedLabelCount = 0

            const childLabels = Array.from(labelRef.current.children)
            for (let label of childLabels) {
                console.log(`left: ${label.offsetLeft} width: ${label.offsetWidth}`)
                const labelMaxX = label.offsetLeft + label.offsetWidth
                if (labelMaxX > parentWidth) {
                    newTruncatedLabelCount++
                }
            }

            setTruncatedLabelCount(newTruncatedLabelCount)

            if(newTruncatedLabelCount === childLabels.length) {
                setDimensions({ width: 0, height: 0 })
                return;
            }


            const lastVisibleLabelIndex = labels.length - newTruncatedLabelCount - 1
console.log('last')
            console.log(lastVisibleLabelIndex)
            let widthSum = 0
            let heightSum = 0
            childLabels.forEach((child, index) => {
                if (child.offsetHeight > heightSum) {
                    heightSum = child.offsetHeight
                }


                if (index === lastVisibleLabelIndex ) {
                    widthSum = child.offsetLeft + child.offsetWidth
                    heightSum = 0 + child.offsetHeight
                }
            })

            setDimensions({ width: widthSum, height: heightSum })
        }
    }, [parentDimensions])

    useEffect(() => {
        // recalculate the truncated label count when the window is resized
        const curObserver = new ResizeObserver((entries) => {
            console.log('WINDOW RESIZED')
            console.log({
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height,
            })
            setParentDimensions({
                width: entries[0].contentRect.width,
                height: entries[0].contentRect.height,
            })
        })

        if (parentRef?.current) {
            curObserver.observe(parentRef.current)
        }

        return () => {
            curObserver.disconnect()
        }
    }, [setParentDimensions])

    // using this to synchronize the rendering of the labels and the + badge
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        recalculatedTruncatedLabelCount()
    }, [labels.length, recalculatedTruncatedLabelCount, parentDimensions])

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
                    return <ColoredLabel name={label.name} key={index} />
                })}
            </Box>
        )
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                height: '100%',
                width: '100%',
                flex: 1,
                position: 'relative',
            }}
            className="parent"
            ref={parentRef}
        >
            <Box
                className="labels-parent"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    width: `${dimensions.width}px`,
                    height: `${dimensions.height}px`,
                }}
            >
                <Box
                    className="labels"
                    sx={{
                        whiteSpace: 'nowrap',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        alignContent: 'center',
                        display: 'flex',
                        gap: 1,
                    }}
                    ref={labelRef}
                >
                    {labels.map((label, index) => (
                        <ColoredLabel name={label.name} />
                    ))}
                </Box>
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
