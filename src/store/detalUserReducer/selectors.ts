import { RootState } from 'store'

export const getDetalUser = (state: RootState) => state.detalUserReducer.user
export const getLoadingFlag = (state: RootState) =>
  state.detalUserReducer.isLoading
export const getError = (state: RootState) => state.detalUserReducer.error
