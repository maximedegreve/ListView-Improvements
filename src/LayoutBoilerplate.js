import React, { useState } from 'react'
import {
    Box,
    PageLayout,
    NavList,
    Text,
    Button,
    Octicon,
    FormControl,
    TextInput,
    CounterLabel,
    ActionMenu,
    ActionList,
    IconButton,
    UnderlineNav2 as UnderlineNav,
} from '@primer/react'

import { Dialog } from '@primer/react/drafts'
import {
    PersonIcon,
    TagIcon,
    KebabHorizontalIcon,
    ThreeBarsIcon,
    ChevronDownIcon,
    SearchIcon,
    MilestoneIcon,
    CodeIcon,
    IssueOpenedIcon,
    MarkGithubIcon,
    GitPullRequestIcon,
    CommentDiscussionIcon,
    EyeIcon,
    FilterIcon,
} from '@primer/octicons-react'
import Final from './Final'

function Playground() {
    const collectionTitle = 'Issues'
    const pageTitle = 'Assigned to you'
    return (
        <Box
            sx={{
                bg: 'canvas.default',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'stretch',
                alignItems: 'stretch',
                flexDirection: 'column',
            }}
        >
            <PageLayout
                containerWidth="full"
                padding="none"
                rowGap="none"
                columnGap="none"
            >
                <PageLayout.Pane
                    position="start"
                    padding="none"
                    divider="line"
                    hidden={{
                        narrow: true,
                        regular: false,
                        wide: false,
                    }}
                >
                    <Box sx={{ p: 2, py: 4 }}>
                        <Text sx={{ fontSize: 3, fontWeight: 'bold', px: 3 }}>
                            {collectionTitle}
                        </Text>
                        <Box sx={{ mt: 2 }}>
                            <Navigation />
                        </Box>
                    </Box>
                </PageLayout.Pane>
                <PageLayout.Header sx={{ bg: 'canvas.inset' }}>
                    <Box
                        sx={{
                            px: 3,
                            pt: 3,
                            pb: 2,
                            display: 'flex',
                            gap: 3,
                            alignItems: 'center',
                        }}
                    >
                        <IconButton icon={ThreeBarsIcon} />
                        <Octicon icon={MarkGithubIcon} size={32} />
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Text sx={{ fontSize: 1 }}>primer</Text>
                            <Text sx={{ fontSize: 1, color: 'fg.muted' }}>
                                /
                            </Text>
                            <Text sx={{ fontSize: 1, fontWeight: 'bold' }}>
                                react
                            </Text>
                        </Box>
                    </Box>
                    <UnderlineNav aria-label="Repository">
                        <UnderlineNav.Item icon={CodeIcon}>
                            Code
                        </UnderlineNav.Item>
                        <UnderlineNav.Item
                            aria-current="page"
                            icon={IssueOpenedIcon}
                            counter={30}
                        >
                            Issues
                        </UnderlineNav.Item>
                        <UnderlineNav.Item
                            icon={GitPullRequestIcon}
                            counter={3}
                        >
                            Pull Requests
                        </UnderlineNav.Item>
                        <UnderlineNav.Item icon={CommentDiscussionIcon}>
                            Discussions
                        </UnderlineNav.Item>
                        <UnderlineNav.Item icon={EyeIcon} counter={9}>
                            Actions
                        </UnderlineNav.Item>
                        <UnderlineNav.Item icon={EyeIcon} counter={7}>
                            Projects
                        </UnderlineNav.Item>
                    </UnderlineNav>
                </PageLayout.Header>
                <PageLayout.Content
                    padding="none"
                    sx={{ minHeight: '100vh', pt: 4 }}
                >
                    <Box
                        as="main"
                        sx={{ maxWidth: 1400, mx: 'auto', px: [0, 0, 2] }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                pb: 3,
                                pl: [2, 2, 4],
                                pr: [3, 3, 4],
                            }}
                        >
                            <Box sx={{ display: 'flex', flex: 1 }}>
                                <Box
                                    sx={{ display: ['block', 'block', 'none'] }}
                                >
                                    <MobileNavigationButton>
                                        {pageTitle}
                                    </MobileNavigationButton>
                                </Box>
                                <Text
                                    sx={{
                                        display: ['none', 'none', 'block'],
                                        fontSize: 3,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {pageTitle}
                                </Text>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="primary">New issue</Button>

                                <ActionMenu>
                                    <ActionMenu.Anchor>
                                        <IconButton
                                            icon={KebabHorizontalIcon}
                                        />
                                    </ActionMenu.Anchor>

                                    <ActionMenu.Overlay align="end">
                                        <ActionList>
                                            <ActionList.Item
                                                onSelect={() =>
                                                    alert('Workflows clicked')
                                                }
                                            >
                                                Manage labels
                                                <ActionList.LeadingVisual>
                                                    <TagIcon />
                                                </ActionList.LeadingVisual>
                                            </ActionList.Item>
                                            <ActionList.Item
                                                onSelect={() =>
                                                    alert('Workflows clicked')
                                                }
                                            >
                                                Manage milestones
                                                <ActionList.LeadingVisual>
                                                    <MilestoneIcon />
                                                </ActionList.LeadingVisual>
                                            </ActionList.Item>
                                        </ActionList>
                                    </ActionMenu.Overlay>
                                </ActionMenu>
                            </Box>
                        </Box>
                        <Box sx={{ px: [3, 3, 4] }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Box>
                                    <Button
                                        sx={{
                                            borderBottomRightRadius: 0,
                                            borderTopRightRadius: 0,
                                            boxShadow: 'none',
                                        }}
                                        leadingVisual={FilterIcon}
                                        trailingVisual={() => (
                                            <CounterLabel>2</CounterLabel>
                                        )}
                                    >
                                        Filter
                                    </Button>
                                </Box>
                                <Box as="form" sx={{ pb: 3, flex: 1 }}>
                                    <FormControl>
                                        <FormControl.Label visuallyHidden>
                                            Search
                                        </FormControl.Label>
                                        <TextInput
                                            sx={{
                                                borderBottomLeftRadius: 0,
                                                borderTopLeftRadius: 0,
                                                borderLeft: 0,
                                            }}
                                            value="assignee:@me is:issue is:open"
                                            block
                                            leadingVisual={SearchIcon}
                                            placeholder="Search or filter"
                                        />
                                    </FormControl>
                                </Box>
                            </Box>
                            <Final />
                        </Box>
                    </Box>
                </PageLayout.Content>
                <PageLayout.Footer
                    padding="normal"
                    aria-labelledby="footer-label"
                >
                    footer
                </PageLayout.Footer>
            </PageLayout>
        </Box>
    )
}

function MobileNavigationButton({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const onDialogClose = () => setIsOpen(false)
    return (
        <>
            <TitleButton onClick={() => setIsOpen(!isOpen)}>
                {children}
            </TitleButton>
            {isOpen && (
                <>
                    <Dialog
                        width="large"
                        height="auto"
                        title="Menu"
                        onClose={onDialogClose}
                    >
                        <Navigation />
                    </Dialog>
                </>
            )}
        </>
    )
}

function TitleButton({ children, onClick }) {
    return (
        <Box
            as="button"
            sx={{
                fontSize: 3,
                border: 0,
                padding: 0,
                cursor: 'pointer',
                bg: 'canvas.default',
                color: 'fg.default',
                borderRadius: 2,
                fontWeight: 'bold',
                height: 32,
                display: 'flex',
                alignItems: 'center',
                py: 1,
                px: 2,
                ':hover': {
                    bg: 'btn.hoverBg',
                },
            }}
            onClick={onClick}
        >
            {children}
            <Octicon
                icon={ChevronDownIcon}
                size={16}
                color="fg.muted"
                sx={{ ml: 1 }}
            />
        </Box>
    )
}

function Navigation() {
    return (
        <NavList>
            <NavList.Item href="#">
                <NavList.LeadingVisual>
                    <IssueOpenedIcon />
                </NavList.LeadingVisual>
                Open issues
            </NavList.Item>
            <NavList.Item href="#">
                <NavList.LeadingVisual>
                    <PersonIcon />
                </NavList.LeadingVisual>
                Your issues
            </NavList.Item>
            <NavList.Item href="#" aria-current="page">
                <NavList.LeadingVisual>
                    <TagIcon />
                </NavList.LeadingVisual>
                Assigned to you
            </NavList.Item>
            <NavList.Item href="#">
                <NavList.LeadingVisual>
                    <TagIcon />
                </NavList.LeadingVisual>
                Mentioning you
            </NavList.Item>
        </NavList>
    )
}

export default Playground
