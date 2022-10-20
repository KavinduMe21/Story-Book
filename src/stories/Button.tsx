import React from 'react';
import './button.css';
import {Button as AntButton} from "antd";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'middle',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  console.log({size,primary});
  
  return (
    <AntButton
      size={size}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={{ backgroundColor }}
      {...props}
    >
      {label}
    </AntButton>
  );
};
