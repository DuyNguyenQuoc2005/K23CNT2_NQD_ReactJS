import React, { useState } from 'react'

export default function NqdFormUser({onNqdAddNew}) {

    const [nqdId, setNqdId] = useState('')
    const [nqdFullName, setNqdFullName] = useState('')
    const [nqdUserName, setNqdUserName] = useState('')
    const [nqdPass, setNqdPass] = useState('')

    const nqdHandleSubmit = (event) => {
        event.preventDefault()
        console.log(nqdId, nqdFullName, nqdUserName, nqdPass)
        
        onNqdAddNew({nqdId,nqdFullName,nqdUserName,nqdPass})
    }

    return (
    <div>
        <form>
            <p>Mã Sinh Viên:
                <input type='text' name='nqdId' value={nqdId} onChange={(ev)=>setNqdId(ev.target.value)} />
            </p>
            <p>Họ và Tên:
                <input type='text' name='nqdFullName' value={nqdFullName} onChange={(ev)=>setNqdFullName(ev.target.value)} />
            </p>
            <p>Tài Khoản:
                <input type='text' name='nqdUserName' value={nqdUserName} onChange={(ev)=>setNqdUserName(ev.target.value)} />
            </p>
            <p>Mật khẩu:
                <input type='password' name='nqdPass' value={nqdPass} onChange={(ev)=>setNqdPass(ev.target.value)} />
            </p>
            <p>
                <button name='nqdSave' onClick={nqdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
