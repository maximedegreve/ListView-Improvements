import { ThemeProvider, BaseStyles } from '@primer/react'
import { Leva } from 'leva'

import Playground from './Playground'
import ColorModeSwitcher from './ColorModeSwitcher'

function App() {
    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <Leva hideTitleBar />
                <Playground />
                <ColorModeSwitcher />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
