import { IssueOpenedIcon, IssueClosedIcon } from '@primer/octicons-react'
import {
    StyledOcticon,
} from '@primer/react'

function StateIcon(state) {
    if (state == 'open') {
        return (
            <StyledOcticon
                icon={IssueClosedIcon}
                size={16}
                sx={{ color: 'done.fg' }}
            />
        )
    } else {
        return (
            <StyledOcticon
                icon={IssueOpenedIcon}
                size={16}
                sx={{ color: 'success.fg' }}
            />
        )
    }
}

export default StateIcon
