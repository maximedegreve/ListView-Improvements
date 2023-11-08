import { useState, useEffect } from 'react'
import { Box, SegmentedControl} from '@primer/react'
import { useControls } from 'leva'

import Compact from './Compact'
import CompactV2 from './CompactV2'
import Default from './Default'

function Final() {
    const [selectedMode, setSelectedMode] = useState(0)
    const [fetchedData, setFetchedData] = useState(null)

    const { show_repo, compact_item, default_item, repo_name } = useControls({
        show_repo: false,
        repo_name: "maximedegreve/TinyFacesNFT-Vault",
        compact_item: {
            options: {
                'Version 2': 2,
                'Version 1': 1,
            },
        },
        default_item: {
            options: {
                'Version 1': 1,
            },
        },
    })

    console.log(default_item)

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
            </Box>
            <Box
                as="ul"
                sx={{
                    display: 'grid',
                    gridTemplateColumns:
                        selectedMode === 0
                            ? [
                                  'auto 1fr auto',
                                  'auto 1fr auto',
                                  '1fr auto auto auto',
                                  '1fr auto auto auto',
                              ]
                            : [
                                  'auto 1fr auto',
                                  'auto 1fr auto',
                                  '1fr auto auto auto',
                                  '1fr auto auto auto',
                              ],
                    mx: 'auto',
                    borderColor: 'border.default',
                    borderRadius: 2,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    boxShadow: 'shadow.small',
                }}
            >
                {fetchedData?.filter((t) => t.title === "ActionMenu: Selected items use checkboxes instead of checkmarks").map((item) => {
                    if (selectedMode === 0) {
                        return (
                            <Default
                                state={item.state}
                                title={item.title}
                                hash={item.number}
                                totalComments={item.comments}
                                totalPullRequests={item.pull_request ? 1 : 0}
                                avatars={item.assignees}
                                showRepo={show_repo}
                                repoName={repo_name}
                                labels={item.labels}
                            />
                        )
                    } else {
                        if (compact_item === 1) {
                            return (
                                <Compact
                                    state={item.state}
                                    title={item.title}
                                    hash={item.number}
                                    totalComments={item.comments}
                                    showRepo={show_repo}
                                    repoName={repo_name}
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
                                    repoName={repo_name}
                                    totalComments={item.comments}
                                    showRepo={show_repo}
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
