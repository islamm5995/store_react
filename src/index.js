import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import App from './App';

ReactDOM.render(
  <ConfigProvider theme={{}}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
