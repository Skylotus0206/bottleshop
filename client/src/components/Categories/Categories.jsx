import React from "react";
import "./Categories.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import main from "../images/main.png";
import wine from "../images/wine.png";
import cheeses from "../images/cheeses.png";
import Red1 from "../images/red1.png";
import White2 from "../images/white2.png";
import Champ1 from "../images/champ1.png";
import Cheeses1 from "../images/Parmesan.png";
import Cheeses2 from "../images/Ricotta1.png";
import Main_about1 from "../images/main_about_01.png";
import Main_about2 from "../images/main_about_02.png";
import Main_about3 from "../images/main_about_03.png";

const Categories = () => {
  return (
    <>
      <div>
        <Carousel className="banner">
          <Carousel.Item>
            <img className="d-block w-100" src={main} alt="First slide" />
            <Carousel.Caption>
              <h3>White Day Event!!</h3>
              <p>연인과 함께 특별한 날을 보내세요.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wine} alt="Second slide" />

            <Carousel.Caption>
              <h3>Wine is Special</h3>
              <p>Bottle Shop is Special</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={cheeses} alt="Third slide" />

            <Carousel.Caption>
              <h3>Bottle Shop = Cheeses Heaven</h3>
              <p>여러분은 나만의 Cheeses를 찾으셨나요?</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="BestItem">
          <p className="best_text">Best Item</p>
          <div className="best_item">
            <div className="Red1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Red1} />
                <Card.Body>
                  <Card.Title>BODEGA GARZON 'BALASTO'</Card.Title>
                  <Card.Text>200,000원</Card.Text>
                  <button type="button" class="btn btn-outline-info">
                    장바구니
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    구매하기
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="White2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={White2} />
                <Card.Body>
                  <Card.Title>FRIAS LADY OF DEAD</Card.Title>
                  <Card.Text>35,000원</Card.Text>
                  <button type="button" class="btn btn-outline-info">
                    장바구니
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    구매하기
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="Champ1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Champ1} />
                <Card.Body>
                  <Card.Title>BANROCK STATION MOSCATO</Card.Title>
                  <Card.Text>13,000원</Card.Text>
                  <button type="button" class="btn btn-outline-info">
                    장바구니
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    구매하기
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="Cheeses1">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Cheeses1} />
                <Card.Body>
                  <Card.Title>Parmesan Cheeses</Card.Title>
                  <Card.Text>58,000원</Card.Text>
                  <button type="button" class="btn btn-outline-info">
                    장바구니
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    구매하기
                  </button>
                </Card.Body>
              </Card>
            </div>
            <div className="Cheeses2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Cheeses2} />
                <Card.Body>
                  <Card.Title>Ricotta Cheeses</Card.Title>
                  <Card.Text>18,000원</Card.Text>
                  <button type="button" class="btn btn-outline-info">
                    장바구니
                  </button>
                  <button type="button" class="btn btn-outline-success">
                    구매하기
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="Main_about">
          <div className="about_1">
            <div>
              <img src={Main_about1} alt="about1" />
            </div>
            <div>
              <p>
                저희 Bottle Shop은 세계의 다양한 와인들을 <br />
                준비하여 여러분께 판매하고 있습니다.
              </p>
            </div>
          </div>
          <hr />
          <div className="about_2">
            <div>
              <p>
                저희 Bottle Shop은 합리적인 가격으로 <br />
                여러분께서 더 많은 와인을 접하시도록 <br />
                제공하고 있습니다.
              </p>
            </div>
            <div>
              <img src={Main_about2} alt="about2" />
            </div>
          </div>
          <hr />
          <div className="about_3">
            <div>
              <img src={Main_about3} alt="about3" />
            </div>
            <div>
              <p>
                당일주문 당일출고를 원칙으로 <br />
                빠른시간안에 상품을 받아보실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
