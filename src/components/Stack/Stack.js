import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Icon from "../Ui/Icon/Icon.js";
import Hr from "../Ui/Hr/Hr.js";

import css from "../../assets/technologies/css3.svg";
import firebase from "../../assets/technologies/firebase.svg";
import git from "../../assets/technologies/git.svg";
import github from "../../assets/technologies/github.svg";
import html from "../../assets/technologies/html5.svg";
import javascript from "../../assets/technologies/javascript.svg";
import node from "../../assets/technologies/node-dot-js.svg";
import react from "../../assets/technologies/react.svg";
import redux from "../../assets/technologies/redux.svg";
import webpack from "../../assets/technologies/webpack.svg";
import gatsby from "../../assets/technologies/gatsby.svg";
import graphql from "../../assets/technologies/graphql.svg";
import npm from "../../assets/technologies/npm.svg";
import jest from "../../assets/technologies/jest.svg";
import vscode from "../../assets/technologies/vscode.svg";
import netlify from "../../assets/technologies/netlify.svg";
import docker from "../../assets/technologies/docker.svg";
import mongodb from "../../assets/technologies/mongodb.svg";

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding: 20px 0 20px 0;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const StyledStackDivision = styled.div`
  margin-bottom: 20px;
  > h1 {
    color: white !important;
    margin-bottom: 10px;
  }
  > img {
    margin: 5px;
  }
`;
const StyledTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  > img {
    margin: 5px;
  }
`;

const Stack = () => (
  <Element name="skills">
    <StyledStack>
      <StyledStackDivision>
        <h1>Front-end skills</h1>
        <Hr />
        <StyledTechnologies>
          <Icon src={html} height="70px" width="70px" />
          <Icon src={javascript} height="70px" width="70px" />
          <Icon src={css} height="70px" width="70px" />
          <Icon src={react} height="70px" width="70px" />
          <Icon src={redux} height="70px" width="70px" />
          <Icon src={gatsby} height="70px" width="70px" />
        </StyledTechnologies>
      </StyledStackDivision>
      <StyledStackDivision>
        <h1>Back-end skills</h1>
        <Hr />
        <StyledTechnologies>
          <Icon src={firebase} height="70px" width="70px" />
          <Icon src={node} height="70px" width="70px" />
          <Icon src={graphql} height="70px" width="70px" />
          <Icon src={mongodb} height="70px" width="70px" />
        </StyledTechnologies>
      </StyledStackDivision>
      <StyledStackDivision>
        <h1>Tools</h1>
        <Hr />
        <StyledTechnologies>
          <Icon src={npm} height="70px" width="70px" />
          <Icon src={webpack} height="70px" width="70px" />
          <Icon src={docker} height="70px" width="70px" />
          <Icon src={git} height="70px" width="70px" />
          <Icon src={github} height="70px" width="70px" />
          <Icon src={netlify} height="70px" width="70px" />
          <Icon src={jest} height="70px" width="70px" />
          <Icon src={vscode} height="70px" width="70px" />
        </StyledTechnologies>
      </StyledStackDivision>
    </StyledStack>
  </Element>
);

export default Stack;
