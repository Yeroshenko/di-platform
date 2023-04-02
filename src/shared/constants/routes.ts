const path = (root: string, sublink: string) => `${root}${sublink}`

const ROOTS_DASHBOARD = '/dashboard'

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    one: path(ROOTS_DASHBOARD, '/one'),
    two: path(ROOTS_DASHBOARD, '/two'),
}

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.one
