import React from 'react';
import Field from '../views/Field';

class CaptionFieldContainer extends React.Component<any> {
  changeHandle() {
    alert();
  }
  render() {
    return <Field placeholder="Название закладки" changeHandle={this.changeHandle}/>
  }
}

export default CaptionFieldContainer;