import {
    Box,
    Avatar,
    StyledOcticon,
    Checkbox,
    AvatarStack,
    Link,
} from '@primer/react'
import Labels from '../Labels'
import StatusButton from '../StatusButton'
import {
    CommentIcon,
    GitPullRequestIcon,
    IssueOpenedIcon,
} from '@primer/octicons-react'

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
                gap: 3,
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
                    maxWidth: '100%',
                    overflow: 'hidden',
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
                        maxWidth: '100%',
                        minWidth: 0,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            maxWidth: '100%',
                        }}
                    >
                        <Link
                            sx={{
                                color: 'fg.default',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                display: 'block',
                                textOverflow: 'ellipsis',
                                maxWidth: '100%',
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
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '100%',
                            }}
                        >
                            {' '}
                            · primer/react
                        </Box>
                        
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    gridColumn: 2,
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: 1,
                }}
            >
                <Labels labels={labels || []} />
            </Box>
            <Box
                sx={{
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: 1,

                }}
            >
                <StatusButton count={totalComments} icon={CommentIcon} label={`${totalComments} ${totalComments === 1 ? "comment" : "comments"}`} />
            </Box>
            <Box
                sx={{
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: 1,


                }}
            >
                <StatusButton count={totalPullRequests} icon={GitPullRequestIcon} label={`${totalPullRequests} ${totalPullRequests === 1 ? "linked pull request" : "linked pull requests"}`} />
            </Box>
            <Box
                sx={{
                    pointerEvents: 'none',
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    pl: 1,

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


export default Row
