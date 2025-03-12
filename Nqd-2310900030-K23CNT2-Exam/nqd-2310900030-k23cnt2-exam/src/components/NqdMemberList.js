import React, { Component } from 'react'

class NqdMemberList extends Component {
  render() {
    return (
        <div className="card-body">
        <h3 className="card-title">Member</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Nqd_Id</th>
                <th>Nqd_Fullname</th>
                <th>Nqd_Username</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderNqdMember.nqdid}</td>
                    <td>{renderNqdMember.nqdfullname}</td>
                    <td>{renderNqdMember.nqdusername}</td>
                    <td>{renderNqdMember.nqdpassword}</td>
                    <td>
                        <div className="template-demo">
                            <button type="button" className="btn btn-danger btn-icon-text"
                                onClick={() => this.nqdHandleView(renderNqdMember)}
                            >
                                Xem
                            </button>
                            <button type="button" className="btn btn-warning btn-icon-text">
                                Sửa
                            </button>
                            <button type="button" className="btn btn-success btn-icon-text">
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default NqdMemberList;