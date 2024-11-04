import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import asiccProject from "../../Assets/asichtml.png"
import solanaProject from "../../Assets/solanaproject.png"
import customadminpannel from "../../Assets/azcorepannel.png"
import gameWebsite from "../../Assets/pswebsitelichking.png"
import gameLauncher from "../../Assets/gameLauncher.png"
import discordPy from "../../Assets/discordpy.png"
import firstEcom from "../../Assets/firstecomm.png"
import secondEcomm from "../../Assets/secondecom.png"
import WoWBotrImage from "../../Assets/discord_bot1.jpg"
import WoWAPImage from "../../Assets/discord_bot2.jpg"
import RageEventsImage from "../../Assets/discord_bot3.jpg"
import FirstportFolioImage from "../../Assets/image.png"
import WoWDocsImage from "../../Assets/WOWIMAGE.jpg"
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
              imgPath={chatify}
              isBlog={false}
              title="First Html Project"
              description="The Beginning of my Programming Adventures"
              ghLink="https://github.com/Moonsight91/First-HTML-Portolio"
              demoLink="https://moonslght.netlify.app/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solanaProject}
              isBlog={false}
              title="Solana Faucet"
              description="Solana Faucet Website"
              ghLink="https://github.com/Moonsight91/Solana-Faucet"
              demoLink="https://asiccsolfaucet.vercel.app/"              
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameWebsite}
              isBlog={false}
              title="WoW Custom Website"
              description="Custom Website Built by me using Nextjs to Register users with even more features coming"
              ghLink="https://github.com/Moonsight91/lichkingprojectprivateserver"
              demoLink="https://lichkingprojectprivateserver.vercel.app/"              
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
              imgPath={firstEcom}
              isBlog={false}
              title="Ecommerce Web Site 1"
              description="Learning How to use React, Tailwindcss, and Sanity"
              ghLink="https://github.com/Moonsight91/Tech-Ecommerce-Store"demoLink="https://tech-ecommerce-store.vercel.app/"             
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
                imgPath={WoWAPImage}
                isBlog={false}
                title="Custom WoW Server API"
                description="In development custom WoW Server API using Node.js"
                ghLink="https://github.com/AidanAli/WebApi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={WoWBotrImage}
                isBlog={false}
                title="CustomWoW Discord Bot"
                description="Built with the server in mind a discord bot that is integrated into the game using the
                in house built API"
                ghLink="https://github.com/AidanAli/DrenorProjectBot"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={RageEventsImage}
                isBlog={false}
                title="RageEvents"
                description="Self built discord bot for ArcheRage an MMORPG to keep track of ingame events and various
                community management functions"
                ghLink="https://github.com/AidanAli/RageEvents"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
