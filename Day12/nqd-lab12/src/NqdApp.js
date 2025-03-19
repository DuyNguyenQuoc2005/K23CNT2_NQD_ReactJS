import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NqdNavNar from './components/NqdNavNar'
import NqdHome from './components/NqdHome'
import NqdAbout from './components/NqdAbout'
import NqdContact from './components/NqdContact'
import NqdListUser from './components/NqdListUser'
import NqdFormUser from './components/NqdFormUser'
export default function NqdApp() {
  const listUser = [
    { id: "001", nqdFullName: 'Nguyễn Quốc Duy', nqdUserName: "YUD", nqdPass: "123455" },
    { id: "002", nqdFullName: 'Dương Ngọc Nhi', nqdUserName: "Nhyy", nqdPass: "098765" },
    { id: "003", nqdFullName: 'Trần Trí Tài', nqdUserName: "Toài", nqdPass: "567812" },
  ]

  const [nqdUsers, setNqdUsers] = useState(listUser)

  const nqdHandleAdd = (nqdParam) => {
    console.log("nqdHandleAdd", nqdParam);

    setNqdUsers(prev => {
      return [...prev, nqdParam]
    })
  }


  return (
    <div className='container border mt-3'>
      <h1>React Router Dom - Demo - [Nguyễn Quốc Duy - K23CNT2]</h1>
      <hr />
      <Router>
        <NqdNavNar />
        <Routes>
          <Route path='/' element={<NqdHome />} />
          <Route path='/about' element={<NqdAbout />} />
          <Route path='/contact' element={<NqdContact />} />
          <Route path='/list-user' element={<NqdListUser renderNqdUsers={nqdUsers} />} />
          <Route path='/create-user' element={<NqdFormUser onNqdAddNew={nqdHandleAdd} />} />
        </Routes>
      </Router>
    </div>
  )
}
