import React from 'react'

const HomeRoute = React.lazy(() => import('./HomeRoute'))
const UsersRoute = React.lazy(() => import('./UsersRoute'))

export type RoutsType = {
  name: string
  path: string
  component: React.FC
}

export const routes: RoutsType[] = [
  { path: '/', name: 'Home', component: HomeRoute },
  { path: '/users', name: 'Пользователи', component: UsersRoute },
]
