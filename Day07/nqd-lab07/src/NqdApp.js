import React, { Component } from 'react'
import NqdLoginControl from './components/NqdLoginControl';
import NqdRenderList from './components/NqdRenderList';
import NqdRenderListStudent from './components/NqdRenderListStudent';

class NqdApp extends Component {
  render() {
    return (
      <div className='conrainer border mt-3'>
        <h1 className='text-center'>K23CNT2 - Nguyễn Quốc Duy - Render condition, List Key</h1>
        <hr/>
        <NqdLoginControl />
        <NqdRenderList />
        <NqdRenderListStudent />
      </div>
    )
  }
}

export default NqdApp;