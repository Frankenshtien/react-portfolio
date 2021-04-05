import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

function Portfolio() {
  const projects = [
    {
      title: "Eats 'n' Such",
      description:
        "This was my first group project. We had just recently learned to call third party APIs. We used this new skill to create an app that show you restaurants and breweries near your location.",
      link: "https://msteele77.github.io/Eats-n-such/#",
      photo: "eats-n-such.png",
    },
    {
      title: "Landmark Tracker",
      description:
        "This was my first group project. We had just recently learned to call third party APIs. We used this new skill to create an app that show you restaurants and breweries near your location.",
      link: "https://infinite-basin-15382.herokuapp.com/",
      photo: "landmark_tracker.jpg",
    },
  ];

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center">
          {projects.map((project) => (
            <Card
              key={project.title}
              style={{ width: "35rem", margin: "25px" }}
            >
              <Card.Img
                variant="top"
                src={require(`../../assets/photos/${project.photo}`).default}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button href={project.link} target="_blank" variant="primary">
                  Check it out
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default Portfolio;
