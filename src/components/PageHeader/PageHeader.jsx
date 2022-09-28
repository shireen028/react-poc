import React from 'react';
import { Container } from '../Container';
import { StyledLink, StyledPageHeader } from './elements';

export const PageHeader = ({ title }) => {
  return (
    <StyledPageHeader>
      <Container>
        <StyledLink>{title}</StyledLink>
      </Container>
    </StyledPageHeader>
  );
};
