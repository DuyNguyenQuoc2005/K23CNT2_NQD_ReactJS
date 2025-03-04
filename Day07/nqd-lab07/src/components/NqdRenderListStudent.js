import React, { Component } from 'react'

class NqdRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nqdStudents: [
                { nqdId: "NTU01", nqdName: 'Nguyễn Quốc Duy', nqdAge: 20, nqdClass:"K23CNT2" },
                { nqdId: "NTU02", nqdName: 'Nguyễn Đức Thành', nqdAge: 21, nqdClass:"K23CNT2" },
                { nqdId: "NTU03", nqdName: 'Nguyễn Huy Thông', nqdAge: 22, nqdClass:"K23CNT2" },
            ]
        }
    } render() {
        let nqdElement = this.state.nqdStudents.map((nqdItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{nqdItem.nqdId}</td>
                        <td>{nqdItem.nqdName}</td>
                        <td>{nqdItem.nqdAge}</td>
                        <td>{nqdItem.nqdClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>nqdId</th>
                            <th>nqdName</th>
                            <th>nqdAge</th>
                            <th>nqdClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nqdElement}
                    </tbody>
                </table>
            </div>
        );
  }
}

export default NqdRenderListStudent;