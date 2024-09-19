import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ImageAuth from "../../Assets/Projects/ImageAuth.jpeg";
import Blockchain from "../../Assets/Projects/Blockchain.jpg";
import literacy from "../../Assets/Projects/LiteracyApp.png";
import raffle from "../../Assets/Projects/raffle.jpg";
import nft from "../../Assets/Projects/nft.webp";
import mina from "../../Assets/Projects/Cover image.jpg"
import Zkattest from "../../Assets/Projects/ZkAttestify.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently showcasing web3 and
          web2 projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mina}
              isBlog={false}
              title="ZkBattleship Game"
              description="A Web3 version of the classic Battleships game, leveraging zero-knowledge proofs (ZKPs) for secure and private gameplay. Built with a decentralized stack including zknoid SDK, o1js, and React, this project demonstrates innovative use of zk-SNARKs to ensure fairness and privacy in online gaming. Players can enjoy a familiar game with the added benefits of blockchain technology, experiencing verifiable gameplay without compromising sensitive information."
              ghLink="https://github.com/Shivannsh/Image-Authentication-Model-in-Rust-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zkattest}
              isBlog={false}
              title="ZkAttestify"
              description="ZKAttestify:A project for the Ethereum Attestation Service (EAS) that enhances data privacy and authentication using zero-knowledge proofs, using RISC0 ZKVM and Bonsai, that allows users to upload private attested data in JSON format and generate verifiable proofs. These proofs can then be validated by a RISC0 Verifier Contract."
              ghLink="https://github.com/Shivannsh/Image-Authentication-Model-in-Rust-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageAuth}
              isBlog={false}
              title="Image-Authentication Model In Rust"
              description="This project is an implementation of an image authentication scheme using blockchain and Merkle tree mechanisms, developed in Rust. It is based on the research paper 'An Image Authentication Scheme Using Merkle Tree Mechanisms' by Gaurav Malav and A. K. Sarje, published in Future Internet."
              ghLink="https://github.com/Shivannsh/Image-Authentication-Model-in-Rust-"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blockchain}
              isBlog={false}
              title="Blockchain Implementation in Rust"
              description="In this project, I have developed a blockchain system using Rust. The implementation includes essential components of a blockchain, such as the creation and validation of blocks, transaction handling in blockchain network. "
              ghLink="https://github.com/Shivannsh/Blockchain-Implementation-in-Rust"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={literacy}
              isBlog={false}
              title="Literacy App"
              description="
Created a complete website as a part of hackathon organized by Telangana govt, to be implemented in
Schools of Telangana on trial basis to understand the study pattern of students upto class 10.
"
              ghLink="https://github.com/Shivannsh/LiteracyApp"
              demoLink="https://literacy-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raffle}
              isBlog={false}
              title="Decentralized Raffle System"
              description="Developed a decentralized crowdfunding platform on Ethereum using Solidity. The platform enables users to
fund the contract with ETH, which is then converted to USD using Chainlink price feeds to ensure a minimum funding amount. Implemented secure fund withdrawal mechanisms for the contract owner and optimized gas usage.
"
              ghLink="https://github.com/Shivannsh/foundry-smart-contract-lottery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="NFT Collection Implementation"
              description="Developed a collection of NFTs on Ethereum using Solidity. The project includes a basic NFT contract and
a dynamic NFT contract where the mood of the NFT can be flipped between HAPPY and SAD. Utilized OpenZeppelin contracts for ERC721 implementation and ensured efficient and secure minting and metadata management. Developed comprehensive test cases to ensure the functionality and reliability of the raffle contract."
              ghLink="https://github.com/Shivannsh/Foundry-NFTs"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
