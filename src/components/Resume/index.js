import React from "react";
import { Jumbotron } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Jumbotron>
        <h1>Resume.</h1>
        <h3>
          <a href="Resume.pdf" download>
            Download
          </a>{" "}
          my resume to check it out!
        </h3>
      </Jumbotron>
    </div>
  );
}

export default Resume;
