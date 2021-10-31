import Button from 'components/Button'
import Modal from 'components/Modal'
import React from 'react'
import { useAppDispatch } from 'store/hooks'
import { IUsers } from 'models/users'
import DetailsUser from '../DetailsUser'
import s from './style.module.css'
import { fetchDetalUser } from 'store/detalUserReducer/actions'

interface IUserProps {
  user: IUsers
}

const User: React.FC<IUserProps> = ({ user }) => {
  const dispatch = useAppDispatch()
  const modalButtonHandler = (userLogin: string) => {
    dispatch(fetchDetalUser(userLogin))
  }

  const modalButton = (
    <Button onClick={() => modalButtonHandler(user.login)}>Подробнее</Button>
  )

  return (
    <div className={s.userBox}>
      <img className={s.avatar} alt='avatar' src={user.avatar_url} />
      <div className={s.user_info}>
        <div className={s.login}>Login: {user.login}</div>
        <Modal button={modalButton}>
          <DetailsUser />
        </Modal>
      </div>
    </div>
  )
}

export default User
