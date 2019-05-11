import React from 'react';
import Button from '../views/Button';

class ToggleButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="подробнее" clickHandle={this.clickHandle}/>
  }
}

export default ToggleButtonContainer;