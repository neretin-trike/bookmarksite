import React from 'react';
import Button from '../views/Button';

class AddButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="Добавить закладку" clickHandle={this.clickHandle}/>
  }
}

export default AddButtonContainer;