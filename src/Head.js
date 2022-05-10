/* eslint-disable */
import React from 'react';
import './Head.css'

function Head() {
  var logo = '리액트 페이지'

  return (
    <div className="Head">
      <div className="logo"><h1>{logo}</h1></div>
      <header className='topNav'>
        <span style={{backgroundColor:"skyblue"}}><a href='/home'>홈</a></span>|
        <span style={{backgroundColor:"pink"}}><a href='/login'>로그인</a></span>|
        <span style={{backgroundColor:"yellow"}}>회원가입</span>|
        <span style={{backgroundColor:"lightgreen"}}>안내</span>
      </header>
    </div>
  );
}



export default Head;
