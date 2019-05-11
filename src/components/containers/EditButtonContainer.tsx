import React from 'react';
import Button from '../views/Button';

class EditButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="редактировать" clickHandle={this.clickHandle}/>
  }
}

export default EditButtonContainer;