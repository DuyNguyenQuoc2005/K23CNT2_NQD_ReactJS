import React, {useEffect, useState } from 'react'
import axios from 'axios'

export default function NqdReadMockAPI() {
    
    const [nqdListUser, setNqdListUser] = useState([])

    const nqdApiOnline = 'https://67e067537635238f9aad6e10.mockapi.io/k23cnt2_nguyenquocduy/nqd_user'

    useEffect(() => {
        axios
        .get(nqdApiOnline)
        .then((nqdResponse) => {
            setNqdListUser(nqdResponse.data)
        })
        .catch((error) => {
            console.log("Lỗi");
        })
    }, [])

    const nqdElementUser = nqdListUser.map((nqdItem, index) => {
        return (
            <tr>
                <td>{nqdItem.nqdId}</td>
                <td>{nqdItem.nqdFullName}</td>
                <td>{nqdItem.nqdAge}</td>
                <td>{nqdItem.nqdActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
    return (
    <div className='alert alert-danger'>
        <h2>Danh Sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    nqdElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
