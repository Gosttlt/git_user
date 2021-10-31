import Typography from 'components/Typography'
import Preloader from 'components/Preloader'
import {
  getDetalUser,
  getError,
  getLoadingFlag,
} from 'store/detalUserReducer/selectors'
import { useAppSelector } from 'store/hooks'

import s from './style.module.css'

const DetailsUser: React.FC = () => {
  const user = useAppSelector(getDetalUser)
  const isLoading = useAppSelector(getLoadingFlag)
  const error = useAppSelector(getError)

  if (isLoading) return <Preloader />
  if (error)
    return (
      <Typography type='error' size='large' weight='bolder'>
        {error}
      </Typography>
    )

  return (
    <div className={s.wrapper}>
      <img className={s.avatar} src={user?.avatar_url} alt='detal_avatar' />
      <div className={s.info}>
        {user?.name && <div>Name: {user.name}</div>}
        {user?.location && <div>Location: {user.location}</div>}
        {user?.email && <div>Email: {user.email}</div>}
      </div>
    </div>
  )
}
export default DetailsUser
