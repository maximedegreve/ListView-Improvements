import { Box, Avatar, Checkbox, AvatarStack, Link } from '@primer/react'
import { CommentIcon, GitPullRequestIcon } from '@primer/octicons-react'

import Labels from '../Labels'
import StatusButton from '../StatusButton'
import StateIcon from './StateIcon'
import EmptyAvatar from './EmptyAvatar'
import Branch from './Branch'
import Notification from './Notification'
import NotificationBar from './NotificationBar'
import IssueType from './IssueType'

function Row({
    title,
    totalComments,
    totalPullRequests,
    labels,
    avatars,
    branch,
    showLabels,
    notificationsType,
    unseen,
    hash,
    user,
    showBranch,
    issueType,
    repoName,
    selectable,
    state,
    showRepo,
}) {
    let leadingColumns = selectable ? 2 : 1

    const gridTemplateColumns = `repeat(${leadingColumns}, auto) minmax(50px, 1fr)`

    return (
        <Box
            as="li"
            sx={{
                display: 'grid',
                px: 3,
                position: 'relative',
                gridTemplateColumns: 'subgrid',
                gridColumn: ['1/3', '1/3', '1/5'],
                gap: [3, 3, 5],
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
                    gridTemplateColumns,
                    gap: 3,
                }}
            >
                {notificationsType === 'bar' && (
                    <NotificationBar unseen={unseen} />
                )}
                {selectable && (
                    <Box
                        sx={{
                            pt: '15px',
                        }}
                    >
                        <Box>
                            <Checkbox value="default" />
                        </Box>
                    </Box>
                )}

                <Box
                    sx={{
                        display: 'flex',
                        gap: [0, 0, 3],
                        justifyContent: ['flex-end', 'flex-end', 'flex-start'],
                        alignItems: ['center', 'center', 'flex-start'],
                        flexDirection: [
                            'column-reverse',
                            'column-reverse',
                            'row',
                        ],
                    }}
                >
                    {notificationsType === 'dot' && (
                        <Box
                            sx={{
                                display: !unseen
                                    ? ['none', 'none', 'flex']
                                    : 'flex',
                                pt: [2, 2, '21px'],
                            }}
                        >
                            <Notification unseen={unseen} />
                        </Box>
                    )}

                    <Box
                        sx={{
                            pt: '12px',
                        }}
                    >
                        <StateIcon state={state} />
                    </Box>
                </Box>

                <Box sx={{ py: '12px', fontWeight: 'bold', fontSize: 2 }}>
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
                            {showBranch && (
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

                    <IssueType type={issueType}>Feature</IssueType>
                    <Link
                        sx={{ color: 'fg.default', textUnderlineOffset: 3 }}
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
                            display:
                                showLabels && labels?.length > 0
                                    ? ['none', 'none', 'flex']
                                    : 'none',
                            columnGap: 1,
                            rowGap: 2,
                            py: 2,
                            flexWrap: 'wrap',
                        }}
                    >
                        {showLabels && labels?.length > 0 && (
                            <Labels mobile labels={labels || []} />
                        )}
                    </Box>

                    <Box
                        sx={{
                            display:
                                (showLabels && labels?.length > 0) ||
                                totalComments > 0 ||
                                totalPullRequests > 0
                                    ? ['flex', 'flex', 'none']
                                    : 'none',
                            columnGap: 1,
                            rowGap: 2,
                            py: 2,
                            flexWrap: 'wrap',
                        }}
                    >
                        {showLabels && labels?.length > 0 && (
                            <Labels mobile labels={labels || []} />
                        )}

                        <Box
                            sx={{
                                display:
                                    totalComments > 0
                                        ? ['flex', 'flex', 'none']
                                        : 'none',
                            }}
                        >
                            <StatusButton
                                count={totalComments}
                                icon={CommentIcon}
                                isMobile={true}
                                label={`${totalComments} ${
                                    totalComments === 1 ? 'comment' : 'comments'
                                }`}
                            />
                        </Box>

                        <Box
                            sx={{
                                display:
                                    totalPullRequests > 0
                                        ? ['flex', 'flex', 'none']
                                        : 'none',
                            }}
                        >
                            <StatusButton
                                count={totalPullRequests}
                                icon={GitPullRequestIcon}
                                isMobile={true}
                                label={`${totalPullRequests} ${
                                    totalPullRequests === 1
                                        ? 'linked pull request'
                                        : 'linked pull requests'
                                }`}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            fontSize: 0,
                            fontWeight: 'normal',
                            color: 'fg.muted',
                            pt:
                                totalComments > 0 ||
                                (showLabels && labels?.length > 0) ||
                                totalPullRequests > 0
                                    ? 0
                                    : 1,
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
