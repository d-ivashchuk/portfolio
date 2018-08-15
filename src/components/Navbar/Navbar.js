import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { shadow } from '../../styles/utils/shadow.js';
const StyledNavbar = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 70px;
  width: 100%;
  ${shadow};

  > li {
    width: 40px;
    margin-right: 20px;
  }
`;

const Navbar = () => (
  <Headroom>
    <StyledNavbar>
      <li>About</li>
      <li>Works</li>
      <li>Personal</li>
    </StyledNavbar>
  </Headroom>
);

export default Navbar;
