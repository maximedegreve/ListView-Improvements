import {
    Box,
    Avatar,
    StyledOcticon,
    Checkbox,
    AvatarStack,
} from '@primer/react'
import Labels from './Labels'
import { CommentIcon, GitPullRequestIcon } from '@primer/octicons-react'

function Playground() {
    return (
        <Box
            sx={{
                bg: 'canvas.default',
                p: 6,
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns:
                        'auto 1fr minmax(auto, 30%) auto auto auto auto',
                    bg: 'red',
                    width: '100%',
                    maxWidth: 1400,
                    mx: 'auto',
                    borderColor: 'border.default',
                    borderRadius: 2,
                    borderWidth: 1,
                    overflow: 'hidden',
                    borderStyle: 'solid',
                    boxShadow: 'shadow.small',
                }}
            >
                <Row
                    title="ActionMenu: Selected items use checkboxes instead of checkmarks and update it even more
                #3838"
                    totalComments={15}
                    totalPullRequests={1}
                />
                <Row
                    title="ActionMenu: Selected items use checkboxes instead of checkmarks
                #3838"
                    totalComments={1}
                    totalPullRequests={14}
                />
                <Row
                    title="ActionMenu: Selected items use checkboxes instead of checkmarks
                #3838"
                    totalComments={15}
                    totalPullRequests={1}
                />
                <Row
                    title="ActionMenu: Selected items use checkboxes instead of checkmarks
                #3838"
                    totalComments={1}
                    totalPullRequests={14}
                />
            </Box>
        </Box>
    )
}

function Row({ title, totalComments, totalPullRequests }) {
    return (
        <Box
            sx={{
                display: 'contents',

                '>div': {
                    bg: 'canvas.default',
                    overflow: 'hidden',
                },

                ':not(:last-child) >div': {
                    borderBottomColor: 'border.subtle',
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                },

                ':hover >div': {
                    bg: 'canvas.subtle',
                },
            }}
        >
            <Box
                sx={{
                    gridColumn: 1,
                    px: 3,
                    py: 3,
                }}
            >
                <Box sx={{ pt: '2px' }}>
                    <Checkbox value="default" />
                </Box>
            </Box>
            <Box
                sx={{
                    gridColumn: 2,
                    pr: 3,
                    py: 3,
                    fontWeight: 'semibold',
                    fontSize: 2,
                }}
            >
                {title}
                <Box
                    sx={{
                        fontSize: 0,
                        fontWeight: 'normal',
                        color: 'fg.muted',
                        pt: 1,
                    }}
                >
                    maximedegreve opened 2 days ago
                </Box>
            </Box>

            <Box sx={{ gridColumn: 3, pr: 4, py: 3 }}>
                <Labels
                    labels={[
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                        { name: 'boom' },
                    ]}
                />
            </Box>
            <Box
                sx={{
                    gridColumn: 4,
                    pr: 5,
                    py: 3,
                }}
            >
                <Box
                    sx={{
                        height: 20,
                        fontSize: 0,
                        display: 'flex',
                        alignItems: 'center',
                        color: 'fg.muted',
                        fontWeight: 'semibold',
                    }}
                >
                    <StyledOcticon
                        icon={CommentIcon}
                        size={16}
                        sx={{ mr: 2, color: 'fg.muted' }}
                    />
                    {totalComments}
                </Box>
            </Box>
            <Box
                sx={{
                    gridColumn: 5,
                    pr: 5,
                    py: 3,
                }}
            >
                <Box
                    sx={{
                        height: 20,
                        fontSize: 0,
                        color: 'fg.muted',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 'semibold',
                    }}
                >
                    <StyledOcticon
                        icon={GitPullRequestIcon}
                        size={16}
                        sx={{ mr: 2, color: 'fg.muted' }}
                    />
                    {totalPullRequests}
                </Box>
            </Box>
            <Box sx={{ gridColumn: 6, pr: 3, py: 3 }}>
                <AvatarStack
                    disableExpand={true}
                    size={{ narrow: 20, regular: 20, wide: 20 }}
                >
                    <Avatar
                        alt="Primer logo"
                        src="https://avatars.githubusercontent.com/primer"
                    />
                    <Avatar
                        alt="GitHub logo"
                        src="https://avatars.githubusercontent.com/github"
                    />
                    <Avatar
                        alt="Atom logo"
                        src="https://avatars.githubusercontent.com/atom"
                    />
                    <Avatar
                        alt="GitHub Desktop logo"
                        src="https://avatars.githubusercontent.com/desktop"
                    />
                </AvatarStack>
            </Box>
        </Box>
    )
}

export default Playground
