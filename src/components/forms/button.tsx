//import React from 'react'
import styles from './button.module.css';
import PropTypes from 'prop-types';

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
