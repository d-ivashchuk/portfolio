import React from "react";
import styled from "styled-components";
import Icon from "../Ui/Icon/Icon.js";
import Project from "./Project/Project.js";
import { Element } from "react-scroll";

import react from "../../assets/technologies/react-colored.svg";
import firebase from "../../assets/technologies/firebase-colored.svg";
import gatsby from "../../assets/technologies/gatsby-colored.svg";
import graphql from "../../assets/technologies/graphql.1.svg";

const StyledProjects = styled.div`
  max-width: 700px;
  margin: 0 auto 20px auto;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = () => (
  <Element name="projects">
    <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
      Projects
    </h1>
    <StyledProjects>
      <Project
        title="irreg.io"
        description="SPA written in react that helps to learn irregularities of languages"
        github="https://github.com/d-ivashchuk/irregio-react"
        live="https://d-ivashchuk.github.io/irregio-react"
      >
        <Icon src={react} height="50px" width="50px" />
      </Project>
      <Project
        title="personal blog"
        description="Gatsby blog with custom page transitions and graphCMS integration"
        github="https://github.com/d-ivashchuk/ivashchuk-blog/"
        live="https://d-ivashchuk.github.io/ivashchuk-blog/"
      >
        <Icon src={react} height="50px" width="50px" />
        <Icon src={gatsby} height="50px" width="50px" />
        <Icon src={graphql} height="50px" width="50px" />
      </Project>
      <Project
        title="pet-dashboard"
        description="SPA for storing data about pets and their health conditions. Features:
        authentication, real-time database, state-management by firease."
        github="http://github.com/d-ivashchuk/pet-dashboard"
        live="https://d-ivashchuk.github.io/pet-dashboard/"
        tech="react"
      >
        <Icon src={react} height="50px" width="50px" />
        <Icon src={firebase} height="50px" width="50px" />
      </Project>
      <Project
        title="clash"
        description="SPA for voting on popular brand duels on the web that offers minimalistic interface and real-time updates of current votes."
        github="http://github.com/d-ivashchuk/clash"
        live="https://d-ivashchuk.github.io/clash/"
        tech="react"
      >
        <Icon src={react} height="50px" width="50px" />
        <Icon src={firebase} height="50px" width="50px" />
      </Project>
      <Project
        title="firebase-app"
        description="SPA that I use to start a project with a firebase."
        github="http://github.com/d-ivashchuk/firebaseApp"
        live="https://d-ivashchuk.github.io/firebaseApp/"
      >
        <Icon src={react} height="50px" width="50px" />
        <Icon src={firebase} height="50px" width="50px" />
      </Project>

      <Project
        title="This portfolio"
        description="The code for the portfolio you are currently browsing!"
        github="https://github.com/d-ivashchuk/portfolio"
        live="https://d-ivashchuk.github.io/portfolio"
      >
        <Icon src={react} height="50px" width="50px" />
      </Project>
    </StyledProjects>
  </Element>
);

export default Projects;
