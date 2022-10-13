import { usePagination, DOTS } from './usePagination';
function Pagination(props) {
  const {onPageChange, siblingCount = 1, currentPage, dataSize, pageSize} = props;



  const paginationRange = usePagination({
    dataSize,
    pageSize,
    currentPage,
    siblingCount,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];


  return (
    <ul className="pagination">
      {currentPage!==1 && <li className='page-item' onClick={onPrevious}>
        <a className='page-link'>&lt;</a>
      </li>}
      {paginationRange.map((pageNumber,i) => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className='page-item' key={i}>
            <a className='page-link'> &#8230;</a>
          </li>;
        }
		
        // Render our Page Pills
        return (
          <li className ={`page-item ${currentPage === pageNumber ? "active" : ""}`} key={i} onClick={() => onPageChange(pageNumber)}>
            <a className='page-link'>{pageNumber}</a>
          </li>
        );
      })}
      {currentPage!==lastPage && <li className='page-item' onClick={onNext}>
      <a className='page-link'>&gt;</a>
      </li>}
    </ul>
  );
};

export default Pagination;