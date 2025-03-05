import React, { Component } from 'react'
import NqdControl from './components/NqdControl';
import NqdStudentList from './components/NqdStudentList';
import NqdForm from './components/NqdForm';

class NqdApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nqdStudents: [
        {
          nqdId: "SV001",
          nqdStudentName: 'Nguyễn Quốc Duy',
          nqdAge: 20,
          nqdGender: 'Nam',
          nqdBirthday: '18/02/2005',
          nqdBirthPlace: 'Hà Nội',
          nqdAddress: '159 Hồng Mai',
        },
        {
          nqdId: "SV002",
          nqdStudentName: 'Nguyễn Duy Khánh',
          nqdAge: 20,
          nqdGender: 'Nam',
          nqdBirthday: '13/01/2005',
          nqdBirthPlace: 'Hạ Long',
          nqdAddress: 'Gầm Cầu',
        },
        {
          nqdId: "SV003",
          nqdStudentName: 'Nguyễn Huy Thông',
          nqdAge: 20,
          nqdGender: 'Nam',
          nqdBirthday: 'xx/xx/2005',
          nqdBirthPlace: 'Quảng Ninh',
          nqdAddress: 'Biệt Thự To Nhất QN',
        }
      ],
      nqdStudent:"",
    }
  }
  nqdHandleView = (nqdStudent)=>{
    this.setState({
      nqdStudent:nqdStudent,
    })
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Nguyễn Quốc Duy - K23CNT2 - MiniProject</h1>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <NqdControl />
              <NqdStudentList renderNqdStudents={this.state.nqdStudents} onNqdHandleView={this.nqdHandleView}/>
            </div>
          </div>
          <div className="col-5 grid-margin">
            <NqdForm renderNqdStudent = {this.state.nqdStudent}/>
          </div>
        </div>
      </div>
    )
  }
}

export default NqdApp;