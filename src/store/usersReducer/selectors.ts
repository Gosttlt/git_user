import { createSelector } from 'reselect'
import { RootState } from 'store'
import { itemsPortionCreator, paginationPagesCreater } from './selectorUtils'

const getUsers = (state: RootState) => state.userReducer.users
export const getLoadingFlag = (state: RootState) => state.userReducer.isLoading
export const getError = (state: RootState) => state.userReducer.error
export const getCurrentPage = (state: RootState) =>
  state.userReducer.currentPage
export const getPortionUsers = (state: RootState) =>
  state.userReducer.portionUsers

export const getTotalPages = createSelector(
  getUsers,
  getPortionUsers,
  paginationPagesCreater
)

export const getUsersPortion = createSelector(
  getUsers,
  getPortionUsers,
  getCurrentPage,
  itemsPortionCreator
)
