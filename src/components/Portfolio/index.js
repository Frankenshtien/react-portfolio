import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

function Portfolio() {
  const projects = [
    {
      title: "Run Buddy",
      description:
        "This was very first proper webpage I built. It's far from perfect, and I simply followed instructions to get it right, but it is still cool to look at. It was made using just HTML and CSS.",
      link: "https://frankenshtien.github.io/run-buddy/",
      photo: "run-buddy.png",
    },
    {
      title: "Eats 'n' Such",
      description:
        "This was my first group project. We had just recently learned to call third party APIs. We used this new skill to create an app that show you restaurants and breweries near your location.",
      link: "https://msteele77.github.io/Eats-n-such/#",
      photo: "eats-n-such.png",
    },
    {
      title: "ReadMe Generator",
      description:
        "This was a very cool project. It was one of the first proper CLI application that I made. It ask a series of questions about, then generates a README.MD file for the given project. Not only has it been useful, but it taught me the power of a CLI.",
      link: "https://github.com/Frankenshtien/readme-generator",
      photo: "readme-generator.jpg",
    },
    {
      title: "Landmark Tracker",
      description:
        "This was my second group project and currently one of the things I'm most proud of. It allows you to create an account to post landmarks near you, and see landmarks other users have posted.",
      link: "https://infinite-basin-15382.herokuapp.com/",
      photo: "landmark_tracker.jpg",
    },
    {
      title: "Food Festival",
      description:
        "This was my first introduction to PWAs. It was a project that gave us an existing webpage, had us optimize it, create offline functionality, the finally make it an installable PWA.",
      link: "https://frankenshtien.github.io/food-festival/",
      photo: "food-festival.jpg",
    },
    {
      title: "React Portfolio",
      description:
        "It may be odd to feature your portfolio on your portfolio, but I feel inclined to. This is my second project using React, and it is by far the project that I'm most proud of. To me, it really feels like a modern web app, especially when viewed on mobile.",
      link: "",
      photo: "portfolio.jpg",
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
