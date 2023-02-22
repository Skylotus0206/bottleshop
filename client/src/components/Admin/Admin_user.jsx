import "./Admin.css";
import React from "react";
import {
  Nav,
  Button,
  Form,
  InputGroup,
  ListGroup,
  Pagination,
} from "react-bootstrap";
import axios from "axios";

const api = require("../../API.json");

const Admin = () => {
  fetch(api.product)
    .then((response) => response.json())
    .then((data) => console.log(data));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const wine_type = e.target.wine_type.value;
    const origin = e.target.origin.value;
    const abv = e.target.abv.value;
    const image_path = e.target.image_path.value;

    axios.post(api.product, {
      name,
      type,
      price,
      description,
      wine_type,
      origin,
      abv,
      image_path,
    });
  };

  // 페이지 수를 정해주는거
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      {/* 네비게이션 바 */}
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/user">
        <Nav.Item>
          <Nav.Link href="/admin/product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/user">User</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Product 페이지 */}
      <form onSubmit={onSubmitHandler}>
        {/* 상단바 */}
        <div class="product_bar">
          <h2>User</h2>
          <InputGroup id="product_manager" size="sm" className="mb-2">
            <Form.Control id="product_searchbar" />
            <Button id="button">조회</Button>
            <Button id="button">저장</Button>
            <Button id="button">삭제</Button>
            <Button id="button" type="submit">
              추가
            </Button>
          </InputGroup>
        </div>

        {/* DB입력 부분 */}
        <div class="product_DB">
          <Form.Group className="mb-1">
            <Form.Label>User_Id</Form.Label>
            <Form.Control name="userId" type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="form_Type">
            <Form.Label>Domain</Form.Label>
            <Form.Select name="domain">
              <option></option>
              <option value="naver.com">Wine</option>
              <option value="gmail.com">Cheese</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-1" controlId="form_Price">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="form_Description">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="form_Wine_type">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" type="phone" placeholder="Number" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="form_Origin">
            <Form.Label>Birthday</Form.Label>
            <Form.Control name="birthday" type="date" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="form_Abv">
            <Form.Label>Auth_email</Form.Label>
            <Form.Control
              name="auth_email"
              type="boolean"
              placeholder="Boolean"
            />
          </Form.Group>
        </div>
      </form>

      {/* 리스트 */}
      <div id="product_list">
        <ListGroup>
          <ListGroup.Item action onClick>
            Test1
          </ListGroup.Item>
          <ListGroup.Item action onClick>
            Test2
          </ListGroup.Item>
          <ListGroup.Item action onClick>
            Test3
          </ListGroup.Item>
          <ListGroup.Item action onClick>
            Test4
          </ListGroup.Item>
          <ListGroup.Item action onClick>
            Test5
          </ListGroup.Item>
        </ListGroup>
        <Pagination id="page" size="sm">
          {items}
        </Pagination>
      </div>
    </>
  );
};

export default Admin;
