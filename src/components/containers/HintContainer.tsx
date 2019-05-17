import { connect } from "react-redux";

import Hint from "../views/Hint";

interface IStateProps {
  error: string
}

const mapStateToProps = (state) => {
  let { validationErrors } = state.modalWindowState;

  return {
    error: validationErrors as string
  };
}

export default connect<IStateProps>(mapStateToProps)(Hint);