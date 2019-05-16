import React from 'react';
import ModalWindow from '../views/ModalWindow';
import { connect } from 'react-redux';


const ModalWindowContainer: React.FunctionComponent<any> = (props) => {
  return props.isModalWindowShow && <ModalWindow title={props.addFormTitle}/>
}

interface IStateProps {
  isModalWindowShow: boolean,
  addFormTitle: string
}
function mapStateToProps(state) {
  let {addFormValues, isModalWindowShow} = state.modalWindowState;
  return {
    isModalWindowShow: isModalWindowShow as boolean,
    addFormTitle: addFormValues.addFormTitle as string,
  };
}

export default connect<IStateProps>(mapStateToProps)(ModalWindowContainer);