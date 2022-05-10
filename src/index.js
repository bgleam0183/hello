import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './Head';
import Login from './Login';

const head = ReactDOM.createRoot(document.getElementById('head'));
const body = ReactDOM.createRoot(document.getElementById('body'));

var url = window.location.href;
var tmp = url.split('/');
url = tmp[tmp.length-1];

head.render(
  <React.StrictMode>
    <Head />
  </React.StrictMode>
);

if(url === 'login'){
  body.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  )
}