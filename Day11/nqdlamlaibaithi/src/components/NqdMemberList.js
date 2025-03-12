import React from "react";

function NqdMemberList({ members }) {
    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>NqdID</th>
                        <th>NqdFullname</th>
                        <th>NqdUsername</th>
                        <th>NqdPassword</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <td>{member.nqd_id}</td>
                            <td>{member.nqd_fullname}</td>
                            <td>{member.nqd_username}</td>
                            <td>{member.nqd_password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NqdMemberList;
