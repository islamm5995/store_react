import React from 'react';
import { Table, Button } from 'antd';

const Cart = ({ cartItems, onCheckout }) => {
  const columns = [
    { title: 'Product', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  ];

  const dataSource = cartItems.map((item, index) => ({
    key: index,
    ...item,
  }));

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Button type="primary" onClick={onCheckout} style={{ marginTop: 16 }}>
        
      </Button>
    </>
  );
};

export default Cart;
