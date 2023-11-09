import { Box, Avatar, Checkbox, AvatarStack, Link } from '@primer/react'
import { CommentIcon, GitPullRequestIcon } from '@primer/octicons-react'

import Labels from '../Labels'
import StatusButton from '../StatusButton'
import StateIcon from './StateIcon'
import EmptyAvatar from './EmptyAvatar'
import Branch from './Branch'

function Row({
    title,
    totalComments,
    totalPullRequests,
    labels,
    avatars,
    hash,
    user,
    repoName,
    showLabels,
    showBranch,
    state,
    showRepo,
    branch,
}) {
    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                px: 3,
                gridTemplateColumns: 'subgrid',
                gridColumn: ['1/3', '1/3', '1/5'],
                gap: 5,
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
                        pt: '15px',
                    }}
                >
                    <Box>
                        <Checkbox value="default" />
                    </Box>
                </Box>

                <Box
                    sx={{
                        pt: '12px',
                    }}
                >
                    <StateIcon state={state} />
                </Box>

                <Box sx={{ py: '12px', fontWeight: 'semibold', fontSize: 2 }}>
                    {(showRepo ||
                        showBranch) && (
                            <Box sx={{ display: 'flex', pb: 1 }}>
                                {showRepo && (
                                    <Box
                                        sx={{
                                            fontSize: 0,
                                            fontWeight: 'normal',
                                            display: 'block',
                                            color: 'fg.muted',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        {repoName}
                                    </Box>
                                )}
                                {branch && (
                                    <Box
                                        sx={{
                                            pl: showRepo ? 1 : 0,
                                            display: 'flex',
                                        }}
                                    >
                                        <Branch>{branch}</Branch>
                                    </Box>
                                )}
                            </Box>
                        )}
                    <Box>
                        <Link
                            sx={{ color: 'fg.default', pr: 2 }}
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

                        {showLabels && labels?.length > 0 && (
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    verticalAlign: 'text-top',
                                }}
                            >
                                <Labels mobile labels={labels || []} />
                            </Box>
                        )}
                    </Box>

                    <Box
                        sx={{
                            fontSize: 0,
                            fontWeight: 'normal',
                            color: 'fg.muted',
                            pt: 1,
                        }}
                    >
                        {user.login} opened 2 days ago
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    gridColumn: 2,
                    py: 3,
                    display: ['none', 'none', 'block'],
                }}
            >
                <StatusButton
                    count={totalComments}
                    icon={CommentIcon}
                    label={`${totalComments} ${
                        totalComments === 1 ? 'comment' : 'comments'
                    }`}
                />
            </Box>
            <Box
                sx={{
                    gridColumn: 3,
                    py: 3,
                    display: ['none', 'none', 'block'],
                }}
            >
                <StatusButton
                    count={totalPullRequests}
                    icon={GitPullRequestIcon}
                    label={`${totalPullRequests} ${
                        totalPullRequests === 1
                            ? 'linked pull request'
                            : 'linked pull requests'
                    }`}
                />
            </Box>
            <Box
                sx={{
                    py: 3,
                    pl: 1,
                    pr: 2,
                    pointerEvents: 'none',
                    mt: '3px',
                }}
            >
                {avatars.length === 0 ? (
                    <EmptyAvatar size={20} />
                ) : (
                    <AvatarStack
                        disableExpand={true}
                        alignRight
                        size={{ narrow: 20, regular: 20, wide: 20 }}
                    >
                        {avatars.map((a) => (
                            <Avatar alt={a.login} src={a.avatar_url} />
                        ))}
                    </AvatarStack>
                )}
            </Box>
        </Box>
    )
}

export default Row
