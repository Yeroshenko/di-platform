import { Navigate, useRoutes } from 'react-router-dom'

import { ROUTES } from 'shared/constants'

import * as dashboard from './Dashboard'

export const Router = () =>
    useRoutes([{ element: <Navigate to={ROUTES.PATH_AFTER_LOGIN} replace />, index: true }, ...dashboard.routes])
