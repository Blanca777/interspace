import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle/>
    <IconfontStyle />
  </Fragment>,
  document.getElementById('root')
);
