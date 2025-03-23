import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NqdReadApiLocal() {
    
    const [nqdListUser, setNqdListUser] = useState([])

    const apiUrl = 'http://localhost:3000/users'

    useEffect(() => {
        axios
        .get(apiUrl)
        .then((nqdResponse) => {
            setNqdListUser(nqdResponse.data)
        })
        .catch((error) => {
            console.log("Lỗi");
        })
    }, [])
    return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nqdListUser.map((nqdItem, index) => {
                        return (
                            <tr>
                                <td>{nqdItem.FullName}</td>
                                <td>{nqdItem.Age}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
