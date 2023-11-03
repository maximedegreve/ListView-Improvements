import {
    Box,
    Avatar,
    StyledOcticon,
    Checkbox,
    AvatarStack,
    Link,
} from '@primer/react'
import Labels from './Labels'
import {
    CommentIcon,
    GitPullRequestIcon,
    IssueOpenedIcon,
} from '@primer/octicons-react'

function TableV1() {
    return (
        <Box
            as="ul"
            sx={{
                display: 'grid',
                gridTemplateColumns: [
                    'auto 1fr 0px auto',
                    'auto 1fr 0px auto',
                    '1fr max(20%) auto auto auto',
                    '1fr max(30%) auto auto auto',
                ],
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
                title="AvatarStack disableExpand and rightAlign don't work together"
                hash={3884}
                totalComments={0}
                totalPullRequests={0}
                labels={[{ name: 'bug' }, { name: 'react' }]}
                avatars={[
                    {
                        alt: 'GitHub logo',
                        src: 'https://avatars.githubusercontent.com/github',
                    },
                ]}
            />
            <Row
                title="ActionMenu: Selected items use checkboxes instead of checkmarks"
                hash={3878}
                totalComments={10}
                totalPullRequests={0}
                labels={[
                    { name: 'bug' },
                    { name: 'component: ActionMenu' },
                    { name: 'react' },
                ]}
                avatars={[
                    {
                        alt: 'GitHub logo',
                        src: 'https://avatars.githubusercontent.com/github',
                    },
                ]}
            />

            <Row
                title="TextInput action hover state is incorrect"
                hash={3867}
                totalComments={10}
                totalPullRequests={0}
                labels={[
                    { name: 'bug' },
                    { name: 'component: TextInput' },
                    { name: 'react' },
                ]}
                avatars={[
                    {
                        alt: 'GitHub logo',
                        src: 'https://avatars.githubusercontent.com/u/68850280?s=64&v=4',
                    },
                ]}
            />

            <Row
                title="Data table pagination breaks when setting defaultPageIndex"
                hash={3856}
                totalComments={5}
                totalPullRequests={1}
                labels={[
                    { name: 'bug' },
                    { name: 'component: DataTable' },
                    { name: 'good first issue' },
                    { name: 'react' },
                    { name: 'size: sand' },
                ]}
                avatars={[
                    {
                        alt: 'GitHub logo',
                        src: 'https://avatars.githubusercontent.com/u/431533?s=64&u=9e71f9aaba1bd41361ee043ef018165b723ffc3e&v=4',
                    },
                ]}
            />
            <Row
                title="Release Tracking"
                hash={3856}
                totalComments={5}
                totalPullRequests={1}
                labels={[
                    { name: 'bug' },
                    { name: 'release' },
                    { name: 'update' },
                    { name: 'react' },
                    { name: 'size: boulder' },
                    { name: 'warning' },
                    { name: 'deprecation' },
                ]}
                avatars={[
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
                ]}
            />
        </Box>
    )
}

function Row({
    title,
    totalComments,
    totalPullRequests,
    labels,
    avatars,
    hash,
}) {
    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                px: 3,
                gridTemplateColumns: 'subgrid',
                gridColumn: ['1/4', '1/4', '1/6'],
                bg: 'canvas.default',
                gap: 4,
                ':not(:last-child)': {
                    borderBottomColor: 'border.subtle',
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                },
                ':hover': {
                    bg: 'canvas.subtle',
                },
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto 1fr',
                    gap: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Checkbox value="default" sx={{ mt: 0 }} />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <StyledOcticon
                        icon={IssueOpenedIcon}
                        size={16}
                        sx={{ color: 'success.fg' }}
                    />
                </Box>
                <Box
                    sx={{
                        py: '12px',
                        fontWeight: 'regular',
                        fontSize: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Link
                            sx={{
                                color: 'fg.default',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                            href="https://github.com"
                        >
                            {title}{' '}
                            <Box
                                sx={{
                                    display: 'inline',
                                    color: 'fg.muted',
                                    fontWeight: 'normal',
                                }}
                            >
                                #{hash}
                            </Box>
                        </Link>
                        <Box
                            sx={{
                                fontSize: 0,
                                fontWeight: 'normal',
                                ml: 1,
                                display: 'inline-block',
                                color: 'fg.muted',
                            }}
                        >
                            {' '}
                            · primer/react
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: ['block', 'block', 'none'],
                            pt: 2,
                            pb: 1,
                        }}
                    >
                        <Labels mobile labels={labels || []} />
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    gridColumn: 2,
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <Labels labels={labels || []} />
            </Box>
            <Box
                sx={{
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <Box
                    sx={{
                        height: 20,
                        fontSize: 0,
                        display: 'flex',
                        alignItems: 'center',
                        color: 'fg.muted',
                        opacity: totalComments === 0  ? 0.5 : 1,
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
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-start',
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
                        opacity: totalPullRequests === 0  ? 0.5 : 1,
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
            <Box
                sx={{
                    pointerEvents: 'none',
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <AvatarStack
                    disableExpand={true}
                    alignRight
                    size={{ narrow: 18, regular: 18, wide: 18 }}
                >
                    {avatars &&
                        avatars.map((a) => <Avatar alt={a.alt} src={a.src} />)}
                </AvatarStack>
            </Box>
        </Box>
    )
}

export default TableV1
