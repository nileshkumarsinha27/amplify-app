import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

/**
 * @description
 * Function to render the button component
 * @param {string} size the button size
 * @param {string} customClass the custom class name of the button
 * @param {string} href if it needs to function like an anchor tag
 * @param {string} value the button value
 * @returns {node} the button component
 */
const Button = ({ size = 'medium', customClass, href, value, ...props }) => {
  const classes = cx([`variant-${props.type}`, `size-${size}`, `${customClass}`]);
  return href ? (
    <div>
      <a className={classes} href={href} {...props}>
        {value}
      </a>
    </div>
  ) : (
    <button type={props.type} className={`${classes} button`} {...props} value={value}>
      {value}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  customClass: PropTypes.string,
  href: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};
Button.defaultProps = {
  type: 'default',
  customClass: '',
  href: '',
  size: 'medium',
};
export default Button;
