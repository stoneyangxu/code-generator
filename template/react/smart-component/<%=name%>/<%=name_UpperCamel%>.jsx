import { connect } from 'react-redux';
import <%=name_UpperCamel%>View from './views/<%=name_UpperCamel%>View';
import { add, minus } from './actions';

function mapStateToProps(state) {
  return {
    amount: state.<%=name%>.amount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => {
      dispatch(add());
    },
    onMinus: () => {
      dispatch(minus());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(<%=name_UpperCamel%>View);
