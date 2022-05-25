import React, { useState, useMemo } from 'react';
import Pagination from '../components/Pagination';
import ReactiveTable from '../components/ReactiveTable';
import classes from './HomePage.module.css';
const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = props.pageSize;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, props.users, PageSize]);
  return (
    <div className={classes.MainContainer}>
      <div className={classes.OutScroll}>
        <ReactiveTable currentTableData={currentTableData} />
      </div>

      {/* Calls Pagination component which takes several props:
      currentPage : represents current active page,
      pageSize: represents maximum data visible in a page,
      onPageChange: callback function
      siblingCount: (optional) represents min number of page buttons. */}
      <Pagination
        className='pagination-bar'
        currentPage={currentPage}
        totalCount={props.users.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
export default HomePage;
