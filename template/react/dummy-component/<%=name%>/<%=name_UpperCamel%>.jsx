import React from 'react';
import PropTypes from 'prop-types';

import './<%=name_UpperCamel%>.less';

const <%=name_UpperCamel%> = ({ text }) => (
  <div className="<%=name%>">
    {text}
  </div>
);

<%=name_UpperCamel%>.propTypes = {
  text: PropTypes.string.isRequired,
};

export default <%=name_UpperCamel%>;
