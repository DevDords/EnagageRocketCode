import React from 'react';
import classes from './ReactiveTable.module.css';
import TableUI from '../layouts/TableUI';
const ReactiveTable = (props) => {
  return (
    <div>
      <div className={`${classes.TableContainer}`}>
        <TableUI
          tableClass={classes.IndexTable}
          headers={['ID']}
          currentTableData={props.currentTableData}
          currentRowData={['id']}
        />
        <div className={classes.ScrollX}>
          <TableUI
            tableClass={classes.DefaultTable}
            headers={['GIVEN NAME', 'FAMILY NAME', 'EMAIL']}
            currentTableData={props.currentTableData}
            currentRowData={['first', 'last', 'email']}
          />
        </div>
      </div>
    </div>
  );
};

export default ReactiveTable;
