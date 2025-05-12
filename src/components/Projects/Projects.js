import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import asiccProject from "../../Assets/asichtml.png"
import customadminpannel from "../../Assets/azcorepannel.png"
import gameLauncher from "../../Assets/gameLauncher.png"
import discordPy from "../../Assets/discordpy.png"
import firstEcom from "../../Assets/firstecomm.png"
import secondEcomm from "../../Assets/secondecom.png"
import WoWBotrImage from "../../Assets/discord_bot1.jpg"
import WoWAPImage from "../../Assets/discord_bot2.jpg"
import FirstportFolioImage from "../../Assets/image.png"
import WoWDocsImage from "../../Assets/WOWIMAGE.jpg"
import blogImage from "../../Assets/blog.png"
import Carnagestudios from "../../Assets/carnagestudos.png"
import NHFImage from "../../Assets/nhf.png"
import projectAurora from  "../../Assets/projectaurora.png"
import omniStudio from "../../Assets/omnistudio.png"
import reactAuthProject from "../../Assets/reactauth.png"
import ArcheRageV3 from "../../Assets/archeragev3.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectAurora}
              isBlog={false}
              title="Project Aurora"
              description="Un|Official Wiki / Player Support Website for ArcheRage"
              ghLink="https://github.com/omni-aa/ProjectAuroraFrontend"
              demoLink="https://aurora-aa.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={omniStudio}
                isBlog={false}
                title="Omni Game Studio"
                description="Using the Project Aurora as a base i've planned to develop this as my private game studio website
                with  user auth"
                ghLink="https://github.com/omni-aa/Omni-Studios-Frontend"
                demoLink="https://omni-studios-frontend-development.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={reactAuthProject}
                isBlog={false}
                title="React Authentication"
                description="Authentication solution built in react with Backend API using Express. and MailTrap"
                ghLink="https://github.com/omni-aa/AuthenticationProject/tree/master"
                demoLink="https://authentication-project-bgum.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asiccProject}
              isBlog={false}
              title="Asicc Community Website"
              description="Asicc Community Website"
              ghLink="https://github.com/Moonsight91/HTML-Asicc"
              demoLink="https://asicc.netlify.app/"
            />
          </Col>
          <Col>
            <ProjectCard
            imgPath={NHFImage}
            isBlog={false}
            title="No Hard Feelings"
            description="Gaming community website Built with react"
            ghLink="https://github.com/AidanAli/nohardfeelings"
            demoLink="https://nohardfeelings.vercel.app/"/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={blogImage}
                isBlog={false}
                title="Nextjs Blog/W Sanity CMS"
                description="Blog website build with nextjs an sanity cms to manage blog content"
                ghLink="https://github.com/AidanAli/blog"
                demoLink="https://blog-rho-nine-45.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={firstEcom}
                isBlog={false}
                title="Ecommerce Web Site 1"
                description="Learning How to use React, Tailwindcss, and Sanity"
                ghLink="https://github.com/Moonsight91/Tech-Ecommerce-Store"
                demoLink="https://tech-ecommerce-store.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={secondEcomm}
                isBlog={false}
                title="Ecommerce Web Site 2"
                description="Extended Learning On Learning React and other Technologies"
                ghLink="https://github.com/Moonsight91/ecommerce-store"
                demoLink="https://ecommerce-store-moonsight.vercel.app/"
            />
          </Col>

          <Col>
            <ProjectCard
            imgPath={Carnagestudios}
            isBlog={false}
            title="Carnage Studios Website"
            description="Built with Nextjs, a website dedicated to showing my published private server projects.
            World of warcraft, Tera. having a easy sign up system and a gamelist system to browse our list of games"
            ghLink="https://github.com/AidanAli/wotlktestwebsite"
            demoLink="https://carnagestudios.vercel.app/"/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={FirstportFolioImage}
                isBlog={false}
                title="First-Porfolio Website"
                description="First ever portfolio website i've made "
                ghLink="https://github.com/AidanAli/First-Portfolio"
                demoLink="https://asicc.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ArcheRageV3}
                isBlog={false}
                title="RageEventsV3"
                description="RageEvent Discord bot refactored with core system changes to events"
                ghLink="https://github.com/AidanAli/RageEvents"
                demoLink="https://camo.githubusercontent.com/c88eb031f7da75b756ef9750ab33d5f7bcfd0887884709c05e962702dd66bcf0/68747470733a2f2f692e6962622e636f2f376750706b62332f696d6167652e706e67"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={discordPy}
                isBlog={false}
                title="Discord Bot Project"
                description="Feature Rich Discord Bot for my Group of Friends"
                ghLink="https://github.com/Moonsight91/SynopsisBotFlawles"
                demoLink="https://github.com/Moonsight91/SynopsisBotFlawles"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={WoWAPImage}
                isBlog={false}
                title="Custom WoW Server API"
                description="In development custom WoW Server API using Node.js"
                ghLink="https://github.com/WoTLKAcoreDevelopment/BackendWebService "
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={WoWBotrImage}
                isBlog={false}
                title="CustomWoW Discord Bot"
                description="Built with the server in mind a discord bot that is integrated into the game using the
                in house built API"
                ghLink="https://github.com/AidanAli/Echoes-of-Azeroth-Bot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={WoWDocsImage}
                isBlog={false}
                title="WoWPS Developer Docs"
                description="Self made documentation for my small team of developers"
                ghLink="https://github.com/WoTLKAcoreDevelopment/dev-intro"
                demoLink="https://github.com/WoTLKAcoreDevelopment/dev-intro"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="World of Warcraft Server"
                description="Custom Azerothcore Private Sever for World of Warcraft Wrath of the Lich King"
                ghLink="https://github.com/WoTLKAcoreDevelopment/dev-intro"
                demoLink="https://github.com/WoTLKAcoreDevelopment/dev-intro"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customadminpannel}
              isBlog={false}
              title="Azerothcore Admin Tool"
              description="In-House Built Tool to moderate and manage the worldserver.exe authserver.exe and world state"
              ghLink="https://github.com/Moonsight91/AzerothcoreAdminApp"
              demoLink="https://github.com/Moonsight91/AzerothcoreAdminApp"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameLauncher}
              isBlog={false}
              title="Game Launcher"
              description="First Game Launcher Built for my Custom WoW Client"
              ghLink="https://github.com/Moonsight91/GameLauncher"
              demoLink="https://drive.google.com/file/d/1RCyGop79JAaYMpRwDnVp70QbxYMVFg4b/view?usp=sharing"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
