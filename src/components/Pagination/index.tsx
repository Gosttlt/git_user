import Button from 'components/Button'
import s from './style.module.css'

interface IPaginationProps {
  pages: number[]
  currentPage: number
  pageSwitcherHandler: (page: number) => void
}

const Pagination: React.FC<IPaginationProps> = ({
  pageSwitcherHandler,
  currentPage,
  pages,
}) => {
  return (
    <div className={s.wrapper}>
      <Button
        disabled={currentPage === 1 ? true : false}
        onClick={() => pageSwitcherHandler(currentPage - 1)}
      >
        Prev
      </Button>
      {pages.map(page => (
        <Button
          key={page}
          disabled={currentPage === page ? true : false}
          onClick={() => pageSwitcherHandler(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        disabled={currentPage === pages.length ? true : false}
        onClick={() => pageSwitcherHandler(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
