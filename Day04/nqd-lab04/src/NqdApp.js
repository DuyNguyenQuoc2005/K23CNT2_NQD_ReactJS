import logo from './logo.svg';
import './App.css';
import NqdFuncComp from './components/NqdFuncComp';
import NqdFuncComp1 from './components/NqdFuncComp1';
import NqdClassComp from './components/NqdClassComp';

function NqdApp() {
  // Object
  const Users = {
    fullName: 'Nguyễn Duy Khánh',
    age:20,
    phone: '0123456789',
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props -State</h1>
      <hr/>
      <div className='alert alert-danger'>
        <NqdFuncComp name="Quốc Duy" address="Hà Nội" company="ĐH Nguyễn Trãi"/>
        <hr/>
        <NqdFuncComp name="Minh Hiển" address="Thanh Trì" company="ĐH Nguyễn Trãi"/>
      </div>
      <div className="alert alert-info">
        <NqdFuncComp1 renderInfo={Users}/>
      </div>
      <NqdClassComp/>
      {/* Chuyển Dữ Liệu Từ NqdApp -> Xuống NqdClassComp */}
      <NqdClassComp renderUser={Users} renderName="K23CNT2" />
    </div>
  );
}

export default NqdApp;
