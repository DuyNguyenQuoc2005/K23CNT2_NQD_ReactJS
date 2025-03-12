import React, { useState } from "react";
import NqdMemberList from "./components/NqdMemberList";
import NqdMemberAdd from "./components/NqdMemberAdd";

const membersData = [
  { nqd_id: "2310900030", nqd_fullname: "Nguyễn Quốc Duy", nqd_username: "Duy", nqd_password: "180205" },
  { nqd_id: "002", nqd_fullname: "Nguyễn Duy Khánh", nqd_username: "Khánh", nqd_password: "123456" },
  { nqd_id: "003", nqd_fullname: "Nguyễn Huy Thông", nqd_username: "Thông", nqd_password: "098765" }
];

function NqdApp() {
  const [members, setMembers] = useState(membersData);

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="container">
      <div class="D1">
      <h1 className="text-center">Nguyễn Quốc Duy - K23CNT2 - Làm Lại Bài Thi</h1>
      </div>
      <h1>Danh sách thành viên</h1>
      <NqdMemberAdd onAddMember={addMember} />
      <NqdMemberList members={members} />
    </div>
  );
}

export default NqdApp;
