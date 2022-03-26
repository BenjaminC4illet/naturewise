import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ title, item1, item2, item3, item4, info, active, ...props }) => {
  return (
    <div className={['storybook-card', `storybook-card--${active}`].join(' ')} {...props}>
        <div className='cardHeader'>
          <p>{title}</p>
          <p>{info}</p>
        </div>
        <ul>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
          <li>{item4}</li>
        </ul>
    </div>
  );
};

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  /**
   * What background color to use
   */
};

Card.defaultProps = {
  active: false,
  title: 'Hello, world',
  onClick: undefined,
};
