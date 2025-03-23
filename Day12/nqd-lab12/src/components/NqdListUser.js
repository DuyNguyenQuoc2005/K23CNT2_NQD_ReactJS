import React from 'react'

export default function NqdListUser({renderNqdUsers}) {

    const nqdElements = renderNqdUsers.map((nqdItem, index) => {
        return (
            <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{nqdItem.id}</td>
            <td>{nqdItem.nqdFullName}</td>
            <td>{nqdItem.nqdUserName}</td>
            <td>{nqdItem.nqdPass}</td>
        </tr>
        </>
    )
    })

  return (
    <div>
        <h2> Danh sách người dùng</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {nqdElements}
                </tr>
            </tbody>
        </table>
    </div>
  )
}
