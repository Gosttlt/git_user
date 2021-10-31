import Container from 'components/Container'
import Header from 'components/Header'
import Preloader from 'components/Preloader'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from 'routes'
import './App.css'
import 'normalize.css'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Preloader />}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </Container>
    </>
  )
}

export default App
