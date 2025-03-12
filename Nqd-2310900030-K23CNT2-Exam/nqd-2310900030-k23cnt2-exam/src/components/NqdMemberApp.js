import React, { Component } from 'react'

 class NqdMemberApp extends Component {
  render() {
    return (
        <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nqd_Id</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderNqdMember.nqdid}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nqd_Fullname</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderNqdMember.nqdfullname}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nqd_Username</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderNqdMember.nqdusername}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nqd_Password</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={renderNqdMember.nqdpassword}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NqdMemberApp;