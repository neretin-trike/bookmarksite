import { connect } from 'react-redux';

import Hint from '../views/Hint';

interface IStateProps {
  error: string
}

function mapStateToProps(state) {
  return {
    error: state.validationErrors as string
  };
}

export default connect<IStateProps>(mapStateToProps)(Hint);