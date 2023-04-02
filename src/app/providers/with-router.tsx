import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingScreen } from 'shared/ui/LoadingScreen'

export const withRouter = (component: () => ReactNode) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>{component()}</Suspense>
        </BrowserRouter>
    )
