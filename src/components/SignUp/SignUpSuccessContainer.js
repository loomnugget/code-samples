import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUser } from '../../selectors/userSelectors';
import SignUpSuccess from './SignUpSuccess';

const mapStateToProps = (state, ownProps) => {
  return {
    user: getUser(state, ownProps.userId)
  };
};

const SignUpSuccessContainer = connect(mapStateToProps, null)(SignUpSuccess);

SignUpSuccessContainer.propTypes = {
  userId: PropTypes.number.isRequired
};

export default SignUpSuccessContainer;
