import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.length > 0 &&
          products.map((prod) => (
            <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={prod} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
