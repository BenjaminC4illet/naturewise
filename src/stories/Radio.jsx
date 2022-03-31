import React from 'react';
import PropTypes from 'prop-types';
import './radio.css';

/**
 * Primary UI component for user interaction
 */
export const Radio = ({ label, active, id, checked, ...props }) => {
  const state = active ? 'storybook-radio--active' : 'storybook-radio--inactive';
  const status = checked ? 'storybook-radio--checked' : 'storybook-radio--unchecked';
  return (
    <div className={['storybook-radio', state, status].join(' ')} {...props}>
      <input type="radio" value={label} id={id} checked={checked}>
        </input><label for={id}>{label}</label>
    </div>
  );
};

Radio.propTypes = {

  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  checked: PropTypes.bool,

};

Radio.defaultProps = {
  onClick: undefined,
  checked: false,
  label: 'Option',
  id: 'Radio_Item',
  active: true
};
