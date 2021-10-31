import React from 'react'
import s from './style.module.css'
import Pagination from 'components/Pagination'
import Users from 'routes/UsersRoute/Users'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import {
  getCurrentPage,
  getError,
  getTotalPages,
} from 'store/usersReducer/selectors'
import { setCurrentPageNumber } from 'store/usersReducer'
import Typography from 'components/Typography'

const UsersRoute: React.FC = () => {
  const dispatch = useAppDispatch()
  const pages = useAppSelector(getTotalPages)
  const currentPage = useAppSelector(getCurrentPage)
  const setCurrentPageNumberHandler = (page: number) => {
    dispatch(setCurrentPageNumber(page))
  }
  const error = useAppSelector(getError)

  if (error)
    return (
      <Typography type='error' size='large' weight='bolder'>
        {error}
      </Typography>
    )

  return (
    <div className={s.container}>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        pageSwitcherHandler={setCurrentPageNumberHandler}
      />
      <Users />
    </div>
  )
}

export default UsersRoute
