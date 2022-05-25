import React from 'react';
import ReactDOM from 'react-dom';
import ModalUI from '../layouts/ModalUI';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClear}></div>;
};

const UserModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClear={props.onClear} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalUI
          user={props.userDetails}
          onClear={props.onClear}
          btnMessage={'Close'}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};
export default UserModal;
