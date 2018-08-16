import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { shadow } from '../../styles/utils/shadow.js';

import { Link } from 'react-scroll';
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

  > a {
    width: 40px;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: #ccc;
    }
  }
`;

const Navbar = () => (
  <Headroom>
    <StyledNavbar>
      <Link to="about" smooth={true} offset={-10} duration={200} spy={true}>
        <li>About</li>
      </Link>

      <Link to="skills" smooth={true} offset={-25} duration={200} spy={true}>
        <li>Skills</li>
      </Link>

      <Link to="projects" smooth={true} offset={-5} duration={200} spy={true}>
        <li>Projects</li>
      </Link>
    </StyledNavbar>
  </Headroom>
);

export default Navbar;
