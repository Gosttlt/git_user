import { IUsers } from 'models/users'

export const paginationPagesCreater = (
  array: IUsers[],
  portion: number
): number[] => {
  const pages = Math.ceil(array.length / portion)
  return Array(pages)
    .fill('')
    .map((e, i) => i + 1)
}

export const itemsPortionCreator = (
  array: IUsers[],
  portion: number,
  currentPage: number
) => {
  const fitstItemPage = (currentPage - 1) * portion
  const lastItemPage = currentPage * portion

  return array.slice(fitstItemPage, lastItemPage)
}
