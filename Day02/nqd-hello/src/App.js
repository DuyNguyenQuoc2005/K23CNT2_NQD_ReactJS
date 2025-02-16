import React from 'react';
import './App.css';
import NqdCompInfor from './NqdCompInfor';

function App() {
  const userInfo = {
    hoVaTen: "Nguyễn Quốc Duy",
    maSinhVien: "2310900030",
    ngaySinh: "18/02/2005",
    dienThoai: "098165xxx",
    tenLop: "K23CNT2"
  };

  return (
    <div className="App">
      <header className="App-header">
        <NqdCompInfor 
          hoVaTen={userInfo.hoVaTen}
          maSinhVien={userInfo.maSinhVien}
          ngaySinh={userInfo.ngaySinh}
          dienThoai={userInfo.dienThoai}
          tenLop={userInfo.tenLop}
        />
      </header>
    </div>
  );
}

export default App;
