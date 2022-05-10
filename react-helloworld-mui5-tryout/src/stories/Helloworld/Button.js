import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <MuiButton type="button" {...props}>
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
