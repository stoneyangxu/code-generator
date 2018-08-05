import * as ActionTypes from './actionTypes';

export default (state = { amount: 0 }, action) => {
  switch (action.type) {
    case ActionTypes.<%=name_Upper%>_ADD:
      return {
        amount: state.amount + 1,
      };
    case ActionTypes.<%=name_Upper%>_MINUS:
      return {
        amount: state.amount - 1,
      };
    default:
      return state;
  }
};
