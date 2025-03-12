import React, { Component } from 'react'
import NqdMemberList from './components/NqdMemberList';
import NqdMemberApp from './components/NqdMemberApp';

class NqdApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nqd_Member: [
        {
          nqd_id: "2310900030",
          nqd_fullname: 'Nguyễn Quốc Duy',
          nqd_username: "Duy",
          nqd_password: '180205',
        },
        {
          nqd_id: "SV002",
          nqd_fullname: 'Nguyễn Duy Khánh',
          nqd_username: "Khánh",
          nqd_password: '123456',
        },
        {
          nqd_id: "SV003",
          nqd_fullname: 'Nguyễn Huy Thông',
          nqd_username: "Thông",
          nqd_password: '123456',
        }
      ],
      nqd_Member:"",
    }
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Nguyễn Quốc Duy - K23CNT2 - BaiThiGiuaKy</h1>
        <div className="row">
  <div className="col-lg-7 grid-margin stretch-card">
    <div className="card">
     <NqdMemberList renderNqdMember={this.state.nqd_Member}/>

    </div>
  </div>
  <div className="col-5 grid-margin">
    <NqdMemberApp />
  </div>
</div>  
      </div>
    )
  }
}

export default NqdApp;