import React from "react";
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";

function AboutMe() {
  return (
    <>
      <Jumbotron>
        <Container fluid>
          <h1>About Me</h1>
          <p>
            My name is Kyle Condie, and I am a full stack web developer. I'm
            fairly new to the industry, but I have always had a personal passion
            for technology. I became a barber fresh out of highschool, and spent
            six successful years in that industry. However, I realized that not
            only was I capped out financially, but I was losing passion for it,
            and knew it wasn't going to get me where I wanted to be in life. As
            I mentioned, I've always been passionate about technology, and as I
            drifted from barbering, I knew I wanted to turn that passion into a
            career. I've completed the full stack web development boot camp
            through the University of Utah, and followed various paths of self
            education. I've also designed, and build many web applications
            varying from simple to complex front ends, back ends, and a hand
            full of full stack applications working both alone and in a group.
            I'm confident with HTML5, CSS3 (libraries included), JavaScript,
            Node.js, Express.js, JQuery, React, MySQL with Sequelize, and
            MongoDB with Mongoose. Feel free to check out my live projects in my
            portfolio, or all my work on my GitHub!
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron>
        <h2>Top Skills</h2>
      </Jumbotron>
      <Container fluid>
        <Row className="justify-content-center">
          <Card style={{ width: "15rem", margin: "15px" }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/photos/javascript.png`).default}
            />
          </Card>

          <Card style={{ width: "15rem", margin: "15px" }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/photos/react.png`).default}
            />
          </Card>

          <Card style={{ width: "15rem", margin: "15px" }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/photos/node.png`).default}
            />
          </Card>

          <Card style={{ width: "15rem", margin: "15px" }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/photos/mongo.png`).default}
            />
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
