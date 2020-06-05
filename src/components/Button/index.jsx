import React from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

const Button = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
    <Ink />
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
