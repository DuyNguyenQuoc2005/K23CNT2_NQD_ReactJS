import React from 'react'

export default function NqdFuncComp(props) {
  return (
    <div>
        <h2>Demo: Function Component</h2>
        <p>Lấy dữ liệu từ props để hiện thị</p>
        <p>Name: {props.name}</p>
        <p>Address: {props.Address}</p>
        <p>Company: {props.company}</p>
        <p>Note: {props.note}</p>
    </div>
  )
}
