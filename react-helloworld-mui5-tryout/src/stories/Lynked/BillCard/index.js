import PropTypes from 'prop-types';
import React from 'react';
import BillCard from '../../../components/BillCard';

export const SBOutlineFood = ({
  primary,
  bar_olor,
  size,
  label,
  price,
  ...props
}) => {
  return <BillCard {...props} />;
};

SBOutlineFood.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['contained', 'outlined']),
};

SBOutlineFood.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
