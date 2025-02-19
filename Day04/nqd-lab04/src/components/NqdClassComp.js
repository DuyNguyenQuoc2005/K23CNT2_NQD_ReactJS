import React, { Component } from 'react'

class NqdClassComp extends Component {
    constructor(){
        super();
        //KHởi tạo giá trị cho state
        this.state = {
            fullName: 'Nguyễn Quốc Duy',
            age: 20,
            address: 'Hà Nội',
            phone: '0123456789'
        }
    }
    //Hàm sử lý sự kiện
    changeInfo = (ev) => {
        //Cập nhật state
        this.setState({
            fullName: "Quốc Duy",

      });
    }
  render() {
    let users = this.props.renderUsers;
    console.log('====================================');
    console.log(users);
    console.log('====================================');
    return (
      <div className="alert alert-success">
            <h2>Trình bày dữ liệu từ state</h2>
            <p>Info state (fullName): {this.state.fullName}</p>
            <p>Info state (age): {this.state.age}</p>
            <p>Info state (phone): {this.state.phone}</p>

            <hr/>
            <button className="btn btn-primary" onClick={this.changeInfo}>Change Info</button>
            <hr/>
            <h3>Lấy Dữ Liệu Từ Props</h3>
            <p>Name: {this.props.renderName}</p>
            
            <p>FullName: { this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
            <p>Age: { this.props.renderUsers ?this.props.renderUsers.age:''}</p>
            <p>Phone: { this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
      </div>
    )
  }
}
export default NqdClassComp;