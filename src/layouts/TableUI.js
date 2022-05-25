// Serves as a template for table
// Customized to call UserModal
import React, { useState } from 'react';
import UserModal from '../components/UserModal';

const TableUI = (props) => {
  const [popModal, setPopModal] = useState();
  const [userDetails, setUserDetails] = useState();
  const closeModalHandler = () => {
    setPopModal(null);
  };
  const showUserModalHandler = (event, user) => {
    setUserDetails({
      id: user.id,
      avatar: user.avatar,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    });
    setPopModal(true);
  };
  return (
    <React.Fragment>
      {popModal && (
        <UserModal userDetails={userDetails} onClear={closeModalHandler} />
      )}
      <table className={props.tableClass}>
        <thead>
          <tr>
            {props.headers.map((header, index) => {
              if (header !== 'GIVEN NAME' && header !== 'FAMILY NAME') {
                return <th key={index}>{header}</th>;
              } else {
                let headerString = header.replace(' ', '\u00A0');
                return <th key={index}>{headerString}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {props.currentTableData.map((user) => {
            return (
              <tr key={user.id}>
                {props.currentRowData.map((rowData) => {
                  if (rowData === 'id') return <td key={user.id}>{user.id}</td>;
                  if (rowData === 'first')
                    return <td key={user.first_name}>{user.first_name}</td>;
                  if (rowData === 'last')
                    return <td key={user.last_name}>{user.last_name}</td>;
                  if (rowData === 'email')
                    return (
                      <td
                        style={{ cursor: 'pointer' }}
                        key={user.email}
                        onClick={(event) => showUserModalHandler(event, user)}
                      >
                        {user.email}
                      </td>
                    );
                  return <></>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default TableUI;
