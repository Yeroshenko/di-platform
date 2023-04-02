import { lazy } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from 'shared/constants'
import { Loadable } from 'shared/ui/Loadable'

const Layout = () => {
    return (
        <>
            <h1>With layout</h1>
            <Outlet />
        </>
    )
}

const PageOne = Loadable(lazy(() => import('./PageOne')))
const PageTwo = Loadable(lazy(() => import('./PageTwo')))

export const routes = [
    {
        path: ROUTES.PATH_DASHBOARD.root,
        element: <Layout />,
        children: [
            { element: <Navigate to={ROUTES.PATH_AFTER_LOGIN} replace />, index: true },
            { path: 'one', element: <PageOne /> },
            { path: 'two', element: <PageTwo /> },
        ],
    },
]
