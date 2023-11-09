import { Box, Avatar, Checkbox, AvatarStack, Link } from '@primer/react'
import { CommentIcon, GitPullRequestIcon } from '@primer/octicons-react'

import Labels from '../NewLabels'
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
    repoName,
    branch,
    hash,
    showLabels,
    showBranch,
    state,
    showRepo,
}) {
    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                px: 3,
                position: 'relative',
                gridTemplateColumns: 'subgrid',
                gridColumn: ['1/4', '1/4', '1/5'],
                gap: 2,
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
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
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
                        height: '100%',
                    }}
                >
                    <StateIcon state={state} />
                </Box>
                <Box
                    sx={{
                        py: '12px',
                        fontWeight: 'regular',
                        fontSize: 1,
                        maxWidth: '100%',
                        width: '100%',
                        minWidth: 0,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            maxWidth: '100%',
                            flexDirection: 'column',
                        }}
                    >
                        {(showRepo || showBranch) && (
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

                        <Box
                            sx={{
                                display: 'flex',
                                overflow: 'hidden',
                                maxWidth: '100%',
                                width: '100%',
                            }}
                        >
                            <Box sx={{ display: 'flex', overflow: 'hidden' }}>
                                <Link
                                    sx={{
                                        color: 'fg.default',
                                        whiteSpace: 'nowrap',
                                        display: 'block',
                                        overflow: 'hidden',
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
                            </Box>
                            {showLabels && labels && (
                                <Box
                                    sx={{
                                        display: ['none', 'none', 'flex'],
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        px: 2,
                                    }}
                                >
                                    <Labels labels={labels || []} />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: 1,
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
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    px: 1,
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
                    pointerEvents: 'none',
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    pl: 3,
                }}
            >
                <Box
                    sx={{
                        pointerEvents: 'none',
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
        </Box>
    )
}

export default Row
