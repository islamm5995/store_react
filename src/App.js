import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const { Header, Content } = Layout;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex(item => item.id === product.id);
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
  };

  const handleCompleteOrder = () => {
    console.log('Order confirmed!');
    setCartItems([]);
  };

  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Products</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/cart">Cart</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onCheckout={handleCheckout} />} />
            <Route path="/checkout" element={<Checkout onComplete={handleCompleteOrder} />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
