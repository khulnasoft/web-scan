import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { StyledCard } from 'web-scan-live/components/Form/Card';
import Heading from 'web-scan-live/components/Form/Heading';
import colors from 'web-scan-live/styles/colors';

const Header = styled(StyledCard)`
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  width: 95vw;
`;

const Nav = (props: { children?: ReactNode}) => {
  return (
    <Header as="header">
    <Heading color={colors.primary} size="large">
      <img width="64" src="/web-scan.png" alt="Web Check Icon" />
      <Link to="/">Web Check</Link>
    </Heading>
      {props.children && props.children}
  </Header>
  );
};

export default Nav;
