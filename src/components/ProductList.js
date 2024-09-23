import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'antd';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const ProductList = ({ addToCart }) => {
  return (
    <Row gutter={16}>
      {products.map(product => (
        <Col key={product.id} span={8}>
          <Card title={product.name} bordered={false}>
            <p>Price: ${product.price}</p>
            <Button onClick={() => addToCart(product)}>Добавить в корзину</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
