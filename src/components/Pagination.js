import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/use-pagination';
import './Pagination.scss';
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  let lastPage = paginationRange[paginationRange.length - 1];
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  //Modified this file to add goLast and goFirst functions and add the double arrow functionalities in pagination.
  const goLast = () => {
    onPageChange(lastPage);
  };
  const goFirst = () => {
    onPageChange(1);
  };
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={goFirst}
      >
        <div className='arrow left' />
        <div className='arrow left' />
      </li>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className='arrow left' />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className='pagination-item dots'>&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className='arrow right' />
      </li>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={goLast}
      >
        <div className='arrow right' />
        <div className='arrow right' />
      </li>
    </ul>
  );
};

export default Pagination;
