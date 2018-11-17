import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { shadow } from '../../styles/utils/shadow.js';

import { Link } from 'react-scroll';
const StyledNavbar = styled.ul`
  color: rgba(80, 89, 113, 0.7);
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
    font-size:18px;
    margin-right: 20px;
    cursor: pointer;
    background: linear-gradient(to bottom, transparent 62%, #FFEB3B 0) center center/0% 75% no-repeat;
    cursor: pointer;
    color: rgba(80, 89, 113, 0.7);
    transition: all .4s ease;
  &:hover {
    color: #007acc;
    background-size: 100% 100%;
    transition: all .4s ease;
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
