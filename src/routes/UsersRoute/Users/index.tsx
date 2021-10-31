import Preloader from 'components/Preloader'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { fetchUsers } from 'store/usersReducer/actions'
import { getLoadingFlag, getUsersPortion } from 'store/usersReducer/selectors'
import s from './style.module.css'
import User from './User'

const Users: React.FC = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(getUsersPortion)
  const isLoading = useAppSelector(getLoadingFlag)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) return <Preloader />

  return (
    <div className={s.wrapper}>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Users
