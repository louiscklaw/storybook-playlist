import React from 'react';
import PropTypes from 'prop-types';
import MyButton from '../../components/MyButton';

/**
 * Primary UI component for user interaction
 */
export const TestMyButton = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <>
      <MyButton />
    </>
  );
};

TestMyButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TestMyButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
