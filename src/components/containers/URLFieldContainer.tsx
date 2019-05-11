import React from 'react';

import Field from '../views/Field';

class URLFieldContainer extends React.Component<any> {
  changeHandle() {
    alert();
  }
  render() {
    return <Field placeholder="Адрес сайта" changeHandle={this.changeHandle} />
  }
}

export default URLFieldContainer;