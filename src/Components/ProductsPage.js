import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import groceryProduct from "../ProductsData/ProductData.json";
import "../style/Component/ProductsPage.css";
import { Link } from "react-router-dom";
import useAddToCart from "../customHooks/useAddToCart";

export default function ProductsPage() {
  const [handleAddToCart] = useAddToCart();
  
  return (
    <div className="productsList mainpages">
      <Row>
        {groceryProduct.map((product, index) => {
          return (
            <Col key={index} xs="3">
              <Card>
                {product.images.map((images, index) => {
                  return (
                    <CardImg
                      key={index}
                      top
                      width="100%"
                      src={images}
                      alt={images.toString()}
                    />
                  );
                })}
                <CardBody>
                  <CardTitle tag="h5">{product.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {product.category}
                  </CardSubtitle>
                  <CardText className="price">₹ {product.price}</CardText>
                  <button
                    className="addtocartbtn"
                    onClick={() => handleAddToCart(index)}
                  >
                    Add To Cart
                  </button>
                  <Link
                    to={{
                      pathname: `product/${product.title}`,
                      query: { id: product.id },
                    }}
                  >
                    <CardText className="detailclass">View in Detail</CardText>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
