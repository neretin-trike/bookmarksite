import React from 'react';
import Button from '../views/Button';

class CloseButtonContainer extends React.Component<any> {
  clickHandle() {
    alert();
  }
  render() {
    return <Button name="Закрыть" clickHandle={this.clickHandle}/>
  }
}

export default CloseButtonContainer;