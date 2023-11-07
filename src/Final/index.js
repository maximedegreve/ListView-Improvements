import { useState, useEffect } from 'react'
import { Box, SegmentedControl, FormControl, Select } from '@primer/react'
import Compact from './Compact'
import CompactV2 from './CompactV2'
import Default from './Default'

const compactVersions = ['Version 1', 'Version 2']

const defaultVersions = ['Version 1']

function Final() {
    const [selectedMode, setSelectedMode] = useState(0)
    const [fetchedData, setFetchedData] = useState(null)
    const [selectedCompactVersion, setSelectedCompactVersion] = useState(0)
    const [selectedDefaultVersion, setSelectedDefaultVersion] = useState(0)

    useEffect(() => {
        fetch('https://api.github.com/repos/primer/react/issues', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setFetchedData(data)
                }
            })
            .catch((error) => console.log(error))
    }, [])

    console.log(selectedCompactVersion)

    return (
        <Box sx={{ width: '100%', maxWidth: 1400 }}>
            <Box sx={{ pb: 4, display: 'flex' }}>
                <Box sx={{ flex: 1 }}>
                    <SegmentedControl
                        aria-label="Mode"
                        onChange={(index) => setSelectedMode(index)}
                    >
                        <SegmentedControl.Button selected={selectedMode === 0}>
                            Default
                        </SegmentedControl.Button>
                        <SegmentedControl.Button selected={selectedMode === 1}>
                            Compact
                        </SegmentedControl.Button>
                    </SegmentedControl>
                </Box>

                {selectedMode === 0 && (
                    <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Select
                            onChange={(e) => {
                                setSelectedDefaultVersion(
                                    parseInt(e.target.value)
                                )
                            }}
                        >
                            {defaultVersions.map((version, index) => (
                                <Select.Option
                                    selected={index === selectedDefaultVersion}
                                    value={index}
                                >
                                    {version}
                                </Select.Option>
                            ))}
                        </Select>
                    </FormControl>
                )}

                {selectedMode === 1 && (
                    <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Select
                            onChange={(e) => {
                                setSelectedCompactVersion(
                                    parseInt(e.target.value)
                                )
                            }}
                        >
                            {compactVersions.map((version, index) => (
                                <Select.Option
                                    selected={index === selectedCompactVersion}
                                    value={index}
                                >
                                    {version}
                                </Select.Option>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </Box>
            <Box
                as="ul"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: [
                        'auto 1fr auto',
                        'auto 1fr auto',
                        selectedMode === 0
                            ? '1fr auto auto auto'
                            : '1fr auto auto',
                        selectedMode === 0
                            ? '1fr auto auto auto'
                            : '1fr auto auto',
                    ],

                    mx: 'auto',
                    borderColor: 'border.default',
                    borderRadius: 2,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    boxShadow: 'shadow.small',
                }}
            >
                {fetchedData?.map((item) => {
                    if (selectedMode === 0) {
                        return (
                            <Default
                                state={item.state}
                                title={item.title}
                                hash={item.number}
                                totalComments={item.comments}
                                totalPullRequests={item.pull_request ? 1 : 0}
                                avatars={item.assignees}
                                labels={item.labels}
                            />
                        )
                    } else {
                        if (selectedCompactVersion === 0) {
                            return (
                                <Compact
                                    state={item.state}
                                    title={item.title}
                                    hash={item.number}
                                    totalComments={item.comments}
                                    totalPullRequests={
                                        item.pull_request ? 1 : 0
                                    }
                                    avatars={item.assignees}
                                    labels={item.labels}
                                />
                            )
                        } else {
                            return (
                                <CompactV2
                                    state={item.state}
                                    title={item.title}
                                    hash={item.number}
                                    totalComments={item.comments}
                                    totalPullRequests={
                                        item.pull_request ? 1 : 0
                                    }
                                    avatars={item.assignees}
                                    labels={item.labels}
                                />
                            )
                        }
                    }
                })}
            </Box>
        </Box>
    )
}

export default Final
