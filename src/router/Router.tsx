import { Routes, Route } from 'react-router-dom'
import { Home, History } from '../pages'
import { DefaultLayout } from '../layouts';

const routesList = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/history',
    element: <History />
  }
]

export function Router() {
  const routeComponents = routesList.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        {routeComponents}
      </Route>
    </Routes>
  )
}