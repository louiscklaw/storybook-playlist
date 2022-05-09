import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';
import { Chip } from '@mui/material';

export const TestChip = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <>
      <Chip label={label} variant="outlined" />
    </>
  );
};

TestChip.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

TestChip.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
