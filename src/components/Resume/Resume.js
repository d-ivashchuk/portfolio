import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const StyledResume = styled.div`
  height: 200px;
  margin-bottom: 20px;
  h1 {
    text-align: center;
    color: white;
    padding: 0;
  }
`;
const wave = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(3);
  opacity: 0;
  transform-origin: center;
}
`;
const StyledPulse = styled.div`
  position: relative;
  top: 70px;
  background: rgba(255, 255, 255, 0.3);
  left: 50%;
  width: 25px;
  height: 25px;
  margin-left: -12px;
  margin-top: -12px;
  border-radius: 50%;
  &:before {
    position: absolute;
    background: white;
    margin-left: -12px;
    margin-top: -12px;
    width: 50px;
    height: 50px;
    content: '';
    display: block;
    border-radius: 50%;
    -webkit-backface-visibility: hidden;
    animation: ${wave} 3s infinite ease-out;
  }
  &:after {
    position: absolute;
    background: white;
    margin-left: -12px;
    margin-top: -12px;
    width: 50px;
    height: 50px;
    content: '';
    display: block;
    border-radius: 50%;
    -webkit-backface-visibility: hidden;
    opacity: 0;
    animation: ${wave} 3s 1.5s infinite ease-out;
  }
`;

const Resume = () => (
  <StyledResume>
    <h1>CV</h1>

    <a
      href="https://standardresume.co/divashchuk"
      target="_blank"
      rel="noopener noreferrer">
      <StyledPulse />
    </a>
  </StyledResume>
);

export default Resume;
