import { Box, Avatar, Checkbox, AvatarStack, Link } from '@primer/react'
import { CommentIcon, GitPullRequestIcon } from '@primer/octicons-react'

import Labels from '../Labels'
import StatusButton from '../StatusButton'
import StateIcon from './StateIcon'
import EmptyAvatar from './EmptyAvatar'

function Row({
    title,
    totalComments,
    totalPullRequests,
    labels,
    avatars,
    hash,
    state,
}) {
    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                px: 3,
                gridTemplateColumns: 'subgrid',
                gridColumn: ['1/4', '1/4', '1/6'],
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
                    <StateIcon state={state} />
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
                    display: ['none', 'none', 'flex'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: 2,
                }}
            >
                <Labels labels={labels || []} />
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
                    pl: 1,
                }}
            >
                <Box
                    sx={{
                        pl: 1,
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
