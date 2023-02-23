import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Layout.css";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="wrapper">
      <header>
        <div>
          <a class="Main_Logo" href="/">
            Bottle Shop
          </a>
        </div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Wine" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/categories/wine">
                    All Wine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categories/wine">
                    Red Wine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categories/wine">
                    White Wine
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/categories/wine">
                    Sparkling Wine
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/categories/cheeses">Cheeses</Nav.Link>
                <Nav.Link href="#">Q&A</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
            <Button variant="white" onClick={handleShow}>
              Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Bottle Shop <br />
                  로그인 해주세요.
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                계정정보 <hr />
                로그인 <br />
                회원가입 <br />
                주문조회
                <br />
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </header>
      <main className="main_content">{children}</main>
      <footer className="footer">
        <div className="contaier">
          <div className="row">
            <h2>Bottle Shop</h2>
            <ul className="list-unstyled">
              <li>
                대표번호: 051-100-1004 | 이메일: sulsajo@gmail.com | 대표자:
                손민하{" "}
              </li>
              <li>
                주소: 대한민국 부산 | 법인명: (주)술사조 | 사업자등록정보:
                2023-03-03-1500 | Author by Team4 | Copyright ⓒ 2023 Team4.All
                rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
