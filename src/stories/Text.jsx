import React from 'react';
import PropTypes from 'prop-types';
import './text.css';

/**
 * Primary UI component for user interaction
 */
export const Text = ({ label, type, ...props }) => {
  return (
    <p
      className={['storybook-text', `storybook-text--${type}`, `${type}`].join(' ')}
      {...props}
    >
        {label}
    </p>
  );
};

Text.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['h1','h2','h3','h4']),
  /**
   * What background color to use
   */
};

Text.defaultProps = {
  type: 'h1',
  label: 'Hello, world',
};
