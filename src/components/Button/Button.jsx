import React from 'react';
import { StyledButton } from './Button.styled';


const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};

export default Button;