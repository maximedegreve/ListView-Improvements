import {
    useRef,
    useLayoutEffect,
    useState,
    useEffect,
    useCallback,
} from 'react'
import clsx from 'clsx'
import { Box, Token, Tooltip, Link, Label as PrimerLabel } from '@primer/react'

export default function Labels({ labels }) {
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

    return (
        <Box
            sx={{
                display: ['none', 'none', 'flex', 'flex', 'flex'],
                flexShrink: 1,
                alignItems: 'flex-start',

                gap: 1,
                height: '100%',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexShrink: 1,
                    alignItems: 'center',
                    gap: 1,
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                    height: '100%',
                    justifyContent: 'flex-end',
                }}
                ref={labelRef}
            >
                {labels.map((label, index) => {
                    const hidden = index > lastVisibleLabelIndex
                    const { name, variant } = label
                    return (
                        <Link key={index} muted>
                            <PrimerLabel
                                variant={variant}
                                className={clsx({ 'sr-only': hidden })}
                            >
                                {name}
                            </PrimerLabel>
                        </Link>
                    )
                })}
            </Box>
            {truncatedLabelCount > 0 && (
                <Tooltip
                    align="right"
                    direction="sw"
                    text={labels.map((label) => label.name).join(', ')}
                    sx={{ display: 'flex' }}
                >
                    <Token text={`+${truncatedLabelCount}`} />
                </Tooltip>
            )}
        </Box>
    )
}
