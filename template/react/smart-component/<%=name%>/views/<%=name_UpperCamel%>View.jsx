import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import './<%=name_UpperCamel%>View.less';

const <%=name_UpperCamel%>View = ({ amount, onAdd, onMinus }) => (
  <div className="<%=name%>">
    <Button icon="plus" onClick={() => onAdd()} />
    <span className="amount">{amount}</span>
    <Button icon="minus" onClick={() => onMinus()} />
  </div>
);

<%=name_UpperCamel%>View.propTypes = {
  amount: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
};

export default <%=name_UpperCamel%>View;
