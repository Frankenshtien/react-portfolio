import React from "react";
import { Jumbotron } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Jumbotron>
        <h1>Resume</h1>
        <h3>
          <a
            href="https://docs.google.com/document/d/1XtV8QdVEKMykQSKjJ5c2M2b_kCR1dmsdWcKXQjA4jZI/edit?usp=sharing"
            download
            target="_blank"
          >
            Download
          </a>{" "}
          my resume to check it out!
        </h3>
      </Jumbotron>
    </div>
  );
}

export default Resume;
