import React from 'react';
import Button from '../views/Button';

class DeleteButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="удалить" clickHandle={this.clickHandle}/>
  }
}

export default DeleteButtonContainer;