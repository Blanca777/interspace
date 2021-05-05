import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont'
import App from './App';
import { ThemeProvider } from 'styled-components'
const theme ={
  color: "#f40"
}

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
      <IconfontStyle />
    </ThemeProvider>
  </Fragment>,
  document.getElementById('root')
);
