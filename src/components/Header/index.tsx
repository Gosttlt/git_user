import Container from 'components/Container'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from 'routes'
import s from './style.module.css'

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container>
        {routes.map((rout, i) => (
          <NavLink
            activeClassName={s.activeLink}
            key={i}
            className={s.link}
            exact
            to={rout.path}
          >
            {rout.name}
          </NavLink>
        ))}
      </Container>
    </header>
  )
}
export default Header
