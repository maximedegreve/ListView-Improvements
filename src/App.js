import { ThemeProvider, BaseStyles } from '@primer/react'
import { Leva } from 'leva'

import ColorModeSwitcher from './ColorModeSwitcher'
import LayoutBoilerplate from './LayoutBoilerplate'

function App() {
    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <Leva hideTitleBar />
                <LayoutBoilerplate />
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
