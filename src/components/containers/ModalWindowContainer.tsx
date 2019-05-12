import React from 'react';
import ModalWindow from '../views/ModalWindow';

class ModalWindowContainer extends React.Component<any> {
  render() {
    let isShow = true;

    return (
        <ModalWindow isModalWindowShow={isShow} />
    )
  }
}

export default ModalWindowContainer;