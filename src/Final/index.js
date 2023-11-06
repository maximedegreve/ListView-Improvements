import { useState, useEffect } from 'react'
import { Box, SegmentedControl } from '@primer/react'
import Compact from './Compact'
import Default from './Default'

const data = [
    {
        title: "AvatarStack disableExpand and rightAlign don't work together",
        hash: 3884,
        totalComments: 0,
        totalPullRequests: 0,
        labels: [{ name: 'bug' }, { name: 'react' }],
        avatars: [
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/github',
            },
        ],
    },
    {
        title: 'ActionMenu: Selected items use checkboxes instead of checkmarks',
        hash: 3878,
        totalComments: 10,
        totalPullRequests: 0,
        labels: [
            { name: 'bug' },
            { name: 'component: ActionMenu' },
            { name: 'react' },
        ],
        avatars: [
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/github',
            },
        ],
    },
    {
        title: 'Update Tooltip v2 to use CSS Modules 💖',
        hash: 3767,
        totalComments: 0,
        totalPullRequests: 1,
        avatars: [
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/u/1446503?s=40&v=4',
            },
        ],
    },
    {
        title: 'TextInput action hover state is incorrect',
        hash: 3867,
        totalComments: 10,
        totalPullRequests: 0,
        labels: [
            { name: 'bug' },
            { name: 'component: TextInput' },
            { name: 'react' },
        ],
        avatars: [
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/u/68850280?s=64&v=4',
            },
        ],
    },
    {
        title: 'Data table pagination breaks when setting defaultPageIndex',
        hash: 3856,
        totalComments: 5,
        totalPullRequests: 1,
        labels: [
            { name: 'bug' },
            { name: 'component: DataTable' },
            { name: 'good first issue' },
            { name: 'react' },
            { name: 'size: sand' },
        ],
        avatars: [
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/u/431533?s=64&u=9e71f9aaba1bd41361ee043ef018165b723ffc3e&v=4',
            },
        ],
    },
    {
        title: 'Release Tracking',
        hash: 3858,
        totalComments: 5,
        totalPullRequests: 1,
        labels: [
            { name: 'bug' },
            { name: 'component: DataTable' },
            { name: 'good first issue' },
            { name: 'react' },
            { name: 'size: sand' },
        ],
        avatars: [
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/u/1863771?s=64&u=36c77cc9be0a64a196b503ce5e7fc335912d2bfa&v=4',
            },
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/u/980622?s=64&u=1c3bf339aa927382a4f123b7b3669f847b1535e4&v=4',
            },
            {
                alt: 'GitHub logo',
                src: 'https://avatars.githubusercontent.com/u/40274682?s=64&u=e86e9e13f63066ced355e03ed21e05f91915567a&v=4',
            },
        ],
    },
    {
        "title": "Enhance form validation on user settings",
        "hash": 6089,
        "totalComments": 9,
        "totalPullRequests": 0,
        "labels": [
            { "name": "good first issue" }
        ],
        "avatars": [
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/33445534?s=64&v=4"
            },
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/1234567?s=64&v=4"
            }
        ]
    },
    {
        "title": "Optimize database queries on the analytics page",
        "hash": 8793,
        "totalComments": 2,
        "totalPullRequests": 0,
        "labels": [
            { "name": "component: SearchBar" },
            { "name": "bug" },
            { "name": "component: Dropdown" }
        ],
        "avatars": [
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/33445534?s=64&v=4"
            },
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/1234567?s=64&v=4"
            }
        ]
    },
    {
        "title": "Implement feature toggle for new dashboard",
        "hash": 4791,
        "totalComments": 17,
        "totalPullRequests": 2,
        "labels": [
            { "name": "performance" },
            { "name": "size: large" }
        ],
        "avatars": [
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/33445534?s=64&v=4"
            }
        ]
    },
    {
        "title": "Optimize database queries on the analytics page",
        "hash": 4354,
        "totalComments": 10,
        "totalPullRequests": 5,
        "labels": [
            { "name": "size: small" },
            { "name": "size: large" }
        ],
        "avatars": [
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/8910112?s=64&v=4"
            },
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/33445534?s=64&v=4"
            },
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/1234567?s=64&v=4"
            }
        ]
    },
    {
        "title": "Dropdown menu not accessible with keyboard",
        "hash": 2544,
        "totalComments": 6,
        "totalPullRequests": 3,
        "labels": [
            { "name": "performance" },
            { "name": "enhancement" }
        ],
        "avatars": [
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/8910112?s=64&v=4"
            },
            {
                "alt": "User avatar",
                "src": "https://avatars.githubusercontent.com/u/33445534?s=64&v=4"
            },
            {
                "alt": "GitHub logo",
                "src": "https://avatars.githubusercontent.com/github"
            }
        ]
    }
]

function Final() {
    const [selectedMode, setSelectedMode] = useState(0)
    const [fetchedData, setFetchedData] = useState(null);

console.log(fetchedData)
  useEffect(() => {
    fetch("https://api.github.com/repos/primer/react/issues", {
      method: "GET"
    })
      .then((response) => {
        
        console.log(response)

        return response.json()})
      .then((data) => {

        console.log(data)

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
                        '1fr auto auto auto',
                        '1fr auto auto auto',
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
                {data.map((item) => {
                    if (selectedMode === 0) {
                        return (
                            <Default
                                title={item.title}
                                hash={item.hash}
                                totalComments={item.totalComments}
                                totalPullRequests={item.totalPullRequests}
                                avatars={item.avatars}
                                labels={item.labels}
                            />
                        )
                    } else {
                        return (<Compact
                            title={item.title}
                            hash={item.hash}
                            totalComments={item.totalComments}
                            totalPullRequests={item.totalPullRequests}
                            avatars={item.avatars}
                            labels={item.labels}
                        />)
                    }
                })}
            </Box>
        </Box>
    )
}

export default Final
