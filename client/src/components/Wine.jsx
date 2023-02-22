import React from "react";
import "./Wine.css";
import Card from "react-bootstrap/Card";
import winemain from "./images/winebenner.png";
import Pagination from "./Pagination";
import LOUISLATOURSANTENAY from "./images/red wine/LOUIS LATOUR SANTENAY.png";
import GALANTAS from "./images/red wine/GALANTAS.png";

const Wine = () => {
  return (
    <>
      {/* wine페이지 메인이미지 */}
      <div className="wine_img">
        <img src={winemain} alt="wineimg" />
      </div>
      {/* wine페이지 Best Wine이미지 */}
      <h3 className="wine_text">Best Wine</h3>
      <div className="best_wine">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={LOUISLATOURSANTENAY} />
            <Card.Body>
              <Card.Title>LOUIS LATOUR SANTENAY</Card.Title>
              <Card.Text>75,000원</Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={GALANTAS} />
            <Card.Body>
              <Card.Title>GALANTAS</Card.Title>
              <Card.Text>75,000원</Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button type="button" class="btn btn-outline-info">
                장바구니
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <hr />
      <h3 className="wine_text">Wine</h3>
      <div>
        {/* wine페이지 Wine 1번째줄 */}
        <div className="wine_list1">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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
        {/* wine페이지 Wine 2번째줄 */}
        <div className="wine_list2">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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
        {/* wine페이지 Wine 3번째줄 */}
        <div className="wine_list3">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button type="button" class="btn btn-outline-info">
                  장바구니
                </button>
                <button type="button" class="btn btn-outline-success">
                  구매하기
                </button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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
      {/* wine페이지 다음페이지 넘기는 것. */}
      <div className="page_go">{Pagination}</div>
    </>
  );
};

export default Wine;
