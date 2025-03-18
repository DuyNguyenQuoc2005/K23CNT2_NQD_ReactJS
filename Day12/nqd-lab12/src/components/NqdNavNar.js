import React from 'react'
import { Link } from 'react-router-dom'

export default function NqdNavNar() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Trang chủ</Link>
            </li>
            <li>
                <Link to='/about'>Giới thiệu</Link>
            </li>
            <li>
                <Link to='/contact'>Liên hệ</Link>
            </li>
            <li>
                <Link to='/list-user'>Danh sách người dùng</Link>
            </li>
            <li>
                <Link to='/create-user'>Tạo Người Dùng</Link>
            </li>
        </ul>
    </div>
  )
}
