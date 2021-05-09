import React, { useState } from "react";
import { Form, Button, Container, Row, Jumbotron } from "react-bootstrap";

function Contact() {
  //   const [formState, setFormState] = useState({
  //     formName: "",
  //     formEmail: "",
  //     formMessage: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormState({ ...formState, [e.target.id]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Submit Form", formState);
  //   };

  return (
    <Jumbotron>
      <h1>Contact</h1>
      <h3>
        <address>
          Feel free to reach out to me at{" "}
          <a href="mailto:barber.von.frankenshtien@gmail.com" target="_blank">
            barber.von.frankenshtien@gmail.com
          </a>
        </address>
      </h3>
    </Jumbotron>
    // <div>
    //   <Container fluid>
    //     <Row className="justify-content-md-center">
    //       <Form
    //         onSubmit={handleSubmit}
    //         style={{ width: "35rem", margin: "50px", paddingBottom: "15px" }}
    //       >
    //         <Form.Group controlId="formName" onBlur={handleChange}>
    //           <Form.Label>Name</Form.Label>
    //           <Form.Control
    //             type="text"
    //             placeholder="Enter your preferred name"
    //             required
    //           />
    //         </Form.Group>

    //         <Form.Group controlId="formEmail" onBlur={handleChange}>
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" required />
    //         </Form.Group>

    //         <Form.Group controlId="formMessage" onBlur={handleChange}>
    //           <Form.Label>Message</Form.Label>
    //           <Form.Control as="textarea" type="text" required />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //           Submit
    //         </Button>
    //       </Form>
    //     </Row>
    //   </Container>
    // </div>
  );
}

export default Contact;
