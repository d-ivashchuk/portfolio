import React from 'react';
import styled from 'styled-components';
import profilePic from '../../assets/profile-picture.jpeg';
import { SocialIcon } from 'react-social-icons';

const StyledInfoCard = styled.div`
  margin: 10px auto 10px auto;
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 700px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(115, 7, 16, 0.2);
  @media (min-width: 470px) {
    max-height: 400px;
  }
`;
const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 2px;
  @media (min-width: 470px) {
    mix-blend-mode: overlay;
  }
`;
const StyledAvatar = styled.aside`
  background: url(${profilePic}) no-repeat top center/cover;
  filter: grayscale(70%);
  width: 100%;
  height: 50%;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
  @media (min-width: 470px) {
    width: 50%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
  }
`;
const StyledInfo = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 50%;

  @media (min-width: 470px) {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 56.25%;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  > a {
    margin: 5px;
  }
`;

const InfoCard = () => (
  <StyledInfoCard>
    <StyledBackground />
    <StyledAvatar />
    <StyledInfo>
      <h1>Dimitri</h1>
      <h1>Ivashchuk</h1>
      <h2>Front-end engineer</h2>
      <h2>Vienna, Austria</h2>
      <SocialWrapper>
        <SocialIcon url="http://twitter.com/ivashchukD" />
        <SocialIcon url="http://github.com/d-ivashchuk" />
        <SocialIcon url="https://stackoverflow.com/users/9318563/dimitry-ivashchuk?tab=profile" />
      </SocialWrapper>
    </StyledInfo>
  </StyledInfoCard>
);

export default InfoCard;
