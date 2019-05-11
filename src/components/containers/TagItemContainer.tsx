import React from 'react';
import TagItem from '../views/TagItem';

interface IProps {
    tag: {
        name: string,
        color: string,
    }
}

class TagItemContainer extends React.Component<IProps> {
  constructor(props) {
      super(props);

      this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle() {
    alert( Object.entries(this.props.tag));
  }
  render() {
    return <TagItem name={this.props.tag.name} color={this.props.tag.color} clickHandle={this.clickHandle}/>
  }
}

export default TagItemContainer;