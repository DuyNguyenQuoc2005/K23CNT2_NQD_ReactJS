import logo from './logo.svg';
import './App.css';
import NqdJsxExpression from './components/NqdJsxExpression';
import NqdFuncComp from './components/NqdFuncComp';
import NqdClassComp from './components/NqdClassComp';

function NqdApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyễn Quốc Duy</h1>

      <NqdJsxExpression />

      <hr/>
      {/* Sử Dụng Function Comp */}
      <NqdFuncComp />

      {/* Sử Dụng Class Components */}
      <NqdClassComp />
    </div>
  );
}

export default NqdApp;
