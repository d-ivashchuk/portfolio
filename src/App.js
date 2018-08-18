import React, { Component } from 'react';
import bg from './assets/bg.svg';
import Navbar from './components/Navbar/Navbar.js';
import About from './components/About/About.js';
import InfoCard from './components/InfoCard/InfoCard.js';
import Stack from './components/Stack/Stack.js';
import Projects from './components/Projects/Projects.js';
import Resume from './components/Resume/Resume.js';

import { injectGlobal } from 'styled-components';
import styled from 'styled-components';

injectGlobal`
  html{
    overflow-x: hidden;
  }
  *{
    margin:0;
    padding: 0;
  }
  body{
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizeLegibility;
   h1 {
    padding: 0 12px 0;
    width: 100%;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
   h2 {
    display: block;
    margin-top: 4px;
    border-radius: 2px;
    padding: 6px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #555;
  }
  }
`;

const StyledBackground = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledWrapper = styled.div`
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledBackground />
        <Navbar />
        <StyledWrapper>
          <InfoCard />
          <About />
          <Stack />
          <Projects />
          <Resume />
        </StyledWrapper>
      </React.Fragment>
    );
  }
}

export default App;
