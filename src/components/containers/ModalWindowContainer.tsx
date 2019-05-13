import React from 'react';
import ModalWindow from '../views/ModalWindow';
import { connect } from 'react-redux';

class ModalWindowContainer extends React.Component<any> {
  render() {
    return this.props.isModalWindowShow && <ModalWindow title={this.props.addFormTitle}/>
  }
}

interface IStateProps {
  isModalWindowShow: boolean,
  addFormTitle: string
}
function mapStateToProps(state) {
  return {
    isModalWindowShow: state.isModalWindowShow as boolean,
    addFormTitle: state.addFormTitle as string,
  };
}

export default connect<IStateProps>(mapStateToProps)(ModalWindowContainer);