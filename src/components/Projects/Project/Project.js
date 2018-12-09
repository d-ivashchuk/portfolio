import React from 'react';
import styled from 'styled-components';

import { shadow } from '../../../styles/utils/shadow.js';
import { SocialIcon } from 'react-social-icons';

const StyledProjectCard = styled.div`
  max-width: 300px;
  height: 300px;
  background: white;
  margin: auto;
  border-radius: 2px;
  ${shadow};
  > h2 {
    padding: 15px;
  }
  margin-bottom: 10px;
`;

const StyledDescription = styled.p`
  padding: 15px;
  color: #555;
  text-align: center;
`;
const StyledLiveLink = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ccc;
  text-decoration: none;
  transition:all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: red;
    cursor: pointer;
    transition:color 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    margin: 10px;
    margin: 5px;
    background:none;
    margin-right:5px;
    opacity:0.8;
    transition: all 0.4s ease 0s;
    &:hover{
      transition: all 0.4s ease 0s;
        transform:scale(1.1);
        opacity:1;
    }
  }
  img {
    margin: 10px;
  }
`;

const Project = props => {
  return (
    <StyledProjectCard>
      <h2>{props.title}</h2>
      <Wrapper>{props.children}</Wrapper>
      <StyledDescription>{props.description}</StyledDescription>
      <Wrapper>
        <SocialIcon url={props.github} />
        <StyledLiveLink href={props.live} target="_blank">
          live
        </StyledLiveLink>
      </Wrapper>
    </StyledProjectCard>
  );
};

export default Project;
