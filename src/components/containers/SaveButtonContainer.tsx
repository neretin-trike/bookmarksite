import React from 'react';
import Button from '../views/Button';

class SaveButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="Сохранить" clickHandle={this.clickHandle}/>
  }
}

export default SaveButtonContainer;