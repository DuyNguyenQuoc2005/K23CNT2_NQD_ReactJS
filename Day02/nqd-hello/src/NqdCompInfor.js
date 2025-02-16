import React from 'react';

function NqdCompInfor({ hoVaTen, maSinhVien, ngaySinh, dienThoai, tenLop }) {
  return (
    <div>
      <h2>Thông Tin Cá Nhân</h2>
      <p><strong>Họ và tên:</strong> {hoVaTen}</p>
      <p><strong>Mã sinh viên:</strong> {maSinhVien}</p>
      <p><strong>Ngày sinh:</strong> {ngaySinh}</p>
      <p><strong>Điện thoại:</strong> {dienThoai}</p>
      <p><strong>Tên lớp:</strong> {tenLop}</p>
    </div>
  );
}

export default NqdCompInfor; 
