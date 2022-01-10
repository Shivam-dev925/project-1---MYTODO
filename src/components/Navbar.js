import React from "react";
import { Navbar, Container, Form } from "react-bootstrap";
function NavbarContent(props) {
  return (
    <>
      <Navbar style={props.dark} expand="lg">
        <Container>
          <Navbar.Brand style={props.dark} href="#home">
            COUNTER
          </Navbar.Brand>
          <Navbar.Toggle style={props.dark} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
            style={props.dark}
          >
            <Form style={props.dark}>
              <Form.Check
                style={props.dark}
                onClick={props.toggle}
                type="switch"
                id="custom-switch"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarContent;
