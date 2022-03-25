import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, inactive, icon, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const state = inactive ? 'storybook-button--inactive' : 'storybook-button--active';
  const icons = icon ? 'storybook-button--icon' : 'storybook-button--plain'
  return (
    <button
      type="button"
      className={['storybook-button', mode, state, icons].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      <svg height="24px" width="24px" className='img'>
        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="3" fill='transparent' />
      </svg>
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // /**
  //  * Button contents
  //  */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  inactive: PropTypes.bool,

  icon: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: true,
  // size: 'medium',
  onClick: undefined,
  inactive: false,
  icon: false
};
