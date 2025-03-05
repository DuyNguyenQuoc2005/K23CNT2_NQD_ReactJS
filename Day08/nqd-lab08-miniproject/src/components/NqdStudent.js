import React, { Component } from 'react'

class NqdStudent extends Component {
    constructor(props) {
        super(props);
    }

    nqdHandleView = (nqdStudent) => {
        this.props.onNqdHandleView(nqdStudent);
    }
    render() {
        let { renderNqdStudent, key } = this.props;
        console.log("Student:", renderNqdStudent);
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderNqdStudent.nqdId}</td>
                    <td>{renderNqdStudent.nqdStudentName}</td>
                    <td>{renderNqdStudent.nqdAge}</td>
                    <td>{renderNqdStudent.nqdGender}</td>
                    <td>
                        <div className="template-demo">
                            <button type="button" className="btn btn-danger btn-icon-text"
                                onClick={() => this.nqdHandleView(renderNqdStudent)}
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
        )
    }
}

export default NqdStudent;