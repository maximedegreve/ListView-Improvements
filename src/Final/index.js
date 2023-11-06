import { useState, useEffect } from 'react'
import { Box, SegmentedControl } from '@primer/react'
import Compact from './Compact'
import Default from './Default'

function Final() {
    const [selectedMode, setSelectedMode] = useState(0)
    const [fetchedData, setFetchedData] = useState(null);

console.log(fetchedData)
  useEffect(() => {
    fetch("https://api.github.com/repos/primer/react/issues", {
      method: "GET"
    })
      .then((response) => 
        
        response.json())
      .then((data) => {
        if(data){
            setFetchedData(data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

    return (
        <Box sx={{ width: '100%', maxWidth: 1400 }}>
            <Box sx={{ pb: 4 }}>
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
            <Box
                as="ul"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: [
                        'auto 1fr auto',
                        'auto 1fr auto',
                        selectedMode === 0 ? '1fr auto auto auto' : '1fr max(20%) auto auto',
                        selectedMode === 0 ? '1fr auto auto auto' : '1fr max(30%) auto auto',
                    ],

                    mx: 'auto',
                    borderColor: 'border.default',
                    borderRadius: 2,
                    borderWidth: 1,
                    overflow: 'hidden',
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
                        return (<Compact
                            state={item.state}
                            title={item.title}
                            hash={item.number}
                            totalComments={item.comments}
                            totalPullRequests={item.pull_request ? 1 : 0}
                            avatars={item.assignees}
                            labels={item.labels}
                        />)
                    }
                })}
            </Box>
        </Box>
    )
}

export default Final
