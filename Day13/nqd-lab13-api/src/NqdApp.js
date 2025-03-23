import React from 'react'
import NqdReadApiLocal from './components/NqdReadApiLocal';
import NqdReadMockAPI from './components/NqdReadMockAPI';
import NqdCreateMockAPI from './components/NqdCreateMockAPI';

function NqdApp() {
  return (
    <div className="container border my-3 p-3">
      <h1>ReactJS - API - Nguyễn Quốc Duy</h1>
      <hr />
      <NqdReadApiLocal />
      <hr/>
      <h2>Đọc dữ liệu từ MockApi (mockapi.io)</h2>
      <NqdReadMockAPI />

      <NqdCreateMockAPI />
    </div>
  )
}

export default NqdApp;