import React from "react";
import { Button as MuiButton, ButtonProps as Props } from '@mui/material';

export interface ButtonProps extends Props {
  
}

const Button = ({children, ...rest}: ButtonProps) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

Button.defaultProps = {
  variant: "contained",
};

export default Button;
