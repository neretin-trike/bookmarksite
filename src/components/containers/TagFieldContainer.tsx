import React from 'react';

import Field from '../views/Field';
import TagsArray from '../views/TagsArray';

class TagFieldContainer extends React.Component<any> {
  changeHandle() {
    alert();
  }
  render() {
    return (
        <Field placeholder="Имя тега" changeHandle={this.changeHandle}>
            <TagsArray array={this.props.array} tags={[]} />
        </Field>
    )
  }
}

export default TagFieldContainer;