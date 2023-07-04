import React from 'react';
import { Typography as MuiTypography, TypographyProps as Props, styled } from '@mui/material';

export interface TypographyProps extends Props  {
  
}

const StyledTypography = styled(MuiTypography)(({ theme }) => ({
  fontWeight: 600,
  padding: 0,
  margin: 0,
  [theme.breakpoints.down('md')]: {
      width: '100%'    
  }
}));

const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => {
  return <StyledTypography {...rest}>{children}</StyledTypography>;
};

export default Typography;