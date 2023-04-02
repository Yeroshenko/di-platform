import { ElementType, Suspense } from 'react'
import { LoadingScreen } from '../LoadingScreen'

export const Loadable =
    <P extends unknown = {}>(Component: ElementType) =>
    (props: P) =>
        (
            <Suspense fallback={<LoadingScreen />}>
                {/* @ts-ignore */}
                <Component {...props} />
            </Suspense>
        )
