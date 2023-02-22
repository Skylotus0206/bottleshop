import "./Admin.css";
import { React, useEffect, useState } from "react";
import {
  Nav,
  Button,
  Form,
  InputGroup,
  Table,
  Pagination,
} from "react-bootstrap";

import axios from "axios";

// API 불러오기
const api = require("../../API.json");

const Admin = () => {
  // [GET] 데이터 불러오기
  const [dataList, setDataList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(api.product);
    setDataList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // [POST] 데이터 전송하기
  const db_post = async () => {
    const form = document.querySelectorAll(".product_DB > .mb-1");
    const name = form[0].lastChild.value;
    const type = form[1].lastChild.value;
    const price = form[2].lastChild.value;
    const description = form[3].lastChild.value;
    const wine_type = form[4].lastChild.value;
    const origin = form[5].lastChild.value;
    const abv = form[6].lastChild.value;
    const image_path = form[7].lastChild.value;

    // 이름 중복 방지
    let overlap = false;
    for (let data of dataList) {
      if (data.name === name) {
        alert("이름이 중복됩니다");
        overlap = true;
      }
    }
    if (overlap === false) {
      await axios.post(api.product, {
        name,
        type,
        price,
        description,
        wine_type,
        origin,
        abv,
        image_path,
      });
      fetchData(); // 리스트 새로고침
    }
  };

  // [DELETE] ID로 선택된 데이터 삭제
  const db_delete = async () => {
    const searchbar_value = document.querySelector("#product_searchbar").value;
    await axios.delete(`${api.product_delete}${searchbar_value}`);
    fetchData(); // 리스트 새로고침
  };

  // 페이지 수
  const dataList_length = dataList?.length;
  const page_number = parseInt(dataList_length / 5);
  let items = [];
  const [active, setActive] = useState(1);
  const page_onClick = (number) => setActive(number);

  for (let number = 1; number < page_number + 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          page_onClick(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  // 데이터를 입력하면 입력폼에 표시하는 코드
  const show = (data) => {
    const form = document.querySelectorAll(".product_DB > .mb-1");
    const searchbar = document.querySelector("#product_searchbar");
    searchbar.value = data._id;
    form[0].lastChild.value = data.name;
    form[1].lastChild.value = data.type;
    form[2].lastChild.value = data.price;
    form[3].lastChild.value = data.description;
    form[4].lastChild.value = data.wine_type;
    form[5].lastChild.value = data.origin;
    form[6].lastChild.value = data.abv;
    form[7].lastChild.value = data.image_path;
  };

  // 리스트 구현
  let list = [];
  dataList?.forEach((data, index) => {
    if (5 * (active - 1) <= index && index < 5 * active) {
      list.push(
        <tr
          key={index}
          onClick={() => {
            show(data);
          }}
        >
          <td>{data._id}</td>
          <td>{data.name}</td>
        </tr>
      );
    }
  });

  // 조회 기능
  const search = () => {
    const searchbar_value = document.querySelector("#product_searchbar").value;

    let search_fail = true;
    for (let data of dataList) {
      if (data._id === searchbar_value) {
        show(data);
        search_fail = false;
        break;
      }
    }
    if (search_fail) alert("일치하는 데이터가 없습니다.");
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <Nav id="nav_bar" variant="tabs" defaultActiveKey="/admin/product">
        <Nav.Item>
          <Nav.Link href="/admin/product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/user">User</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Product 페이지 */}
      <form>
        {/* 상단바 */}
        <div class="product_bar">
          <h2>Product</h2>
          <InputGroup id="product_manager" size="sm" className="mb-2">
            <Form.Control id="product_searchbar" placeholder="ID" />
            <Button id="button" onClick={search}>
              조회
            </Button>
            <Button id="button">저장</Button>
            <Button id="button" onClick={db_delete}>
              삭제
            </Button>
            <Button id="button" onClick={db_post}>
              추가
            </Button>
          </InputGroup>
        </div>

        {/* DB입력 부분 */}
        <div class="product_DB">
          <Form.Group className="mb-1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Type</Form.Label>
            <Form.Select>
              <option></option>
              <option value="Wine">Wine</option>
              <option value="Cheese">Cheese</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Number" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Wine_type</Form.Label>
            <Form.Select>
              <option></option>
              <option value="Red_Wine">Red</option>
              <option value="White_Wine">White</option>
              <option value="Sparkling">Sparkling</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Origin</Form.Label>
            <Form.Control type="text" placeholder="String" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Abv</Form.Label>
            <Form.Control type="text" placeholder="Number" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Image_path</Form.Label>
            <Form.Control type="text" placeholder="String" />
          </Form.Group>
        </div>
      </form>

      {/* 리스트 */}
      <div id="product_list">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
        <Pagination id="page" size="sm">
          {items}
        </Pagination>
      </div>
    </>
  );
};
export default Admin;
