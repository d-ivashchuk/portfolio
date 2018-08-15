import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 660px;
  padding: 20px;
  background: white;
  margin: 0 auto 10px auto;

  h1 {
    color: grey;
  }
  p {
    color: #665;
  }
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  margin: 5px auto 20px auto;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  width: 50%;
`;

const About = () => (
  <Element name="about">
    <StyledAbout>
      <h1>About</h1>
      <StyledHr />
      <p>
        I am passionate developer from Ukraine who loves to work with modern
        technologies and learn something new everyday. Currently my main point
        of expertise is front-end development with a heavy focus on SPA built
        with React.js. I also learn back-end to be able to deliver full-stack
        products, at this moment I am fluent with Firebase.
      </p>
    </StyledAbout>
  </Element>
);

export default About;
