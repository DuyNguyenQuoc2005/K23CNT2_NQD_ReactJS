import React, { useState } from "react";

function NqdMemberAdd({ onAddMember }) {
  const [form, setForm] = useState({
    nqd_id: "",
    nqd_fullname: "",
    nqd_username: "",
    nqd_password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nqd_id && form.nqd_fullname && form.nqd_username && form.nqd_password) {
      onAddMember(form);
      setForm({ nqd_id: "", nqd_fullname: "", nqd_username: "", nqd_password: "" });
    }
  };

  return (
    <div>
      <h2>Thêm tài khoản mới</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nqd_id" placeholder="ID" value={form.nqd_id} onChange={handleChange} required />
        <input type="text" name="nqd_fullname" placeholder="Họ và tên" value={form.nqd_fullname} onChange={handleChange} required />
        <input type="text" name="nqd_username" placeholder="Username" value={form.nqd_username} onChange={handleChange} required />
        <input type="password" name="nqd_password" placeholder="Mật khẩu" value={form.nqd_password} onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

export default NqdMemberAdd;
