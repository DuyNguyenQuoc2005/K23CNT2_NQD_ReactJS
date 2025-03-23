import axios from 'axios';
import React, { useState } from 'react'

export default function NqdCreateMockAPI() {

    const [nqdFullName, setNqdFullName] = useState('')
    const [nqdAge, setNqdAge] = useState(0)
    const [nqdActive, setNqdActive] = useState(true)

    const nqdCreateUser = "https://67e067537635238f9aad6e10.mockapi.io/k23cnt2_nguyenquocduy/nqd_user";

    const nqdHandleSubmit = (event) => {
        event.preventDefault();
        console.log('nqdActive',nqdActive);
        let nqdNewUser = {nqdFullName, nqdAge, nqdActive};
        console.log(nqdNewUser);

        axios
        .post(nqdCreateUser, nqdNewUser)
        .then((nqdResponse) => {
            
        })
    }
    return (
        <div className='alert alert-info'>
            <h2>Thêm Mới Users</h2>
            <hr />
            <form>
                <div className=' mb-1'>
                    <label for="nqdFullName">FullName:</label>
                    <input type='text' name='nqdFullName' id='nqdFullName' value={nqdFullName}
                        onChange={(ev) => setNqdFullName(ev.target.value)}
                    />
                </div>
                <div className=' mb-1'>
                    <label for="nqdAge">Age:</label>
                    <input type='number' name='nqdAge' id='nqdAge' value={nqdAge}
                        onChange={(ev) => setNqdAge(ev.target.value)}
                    />
                </div>
                <div className='row mb-1'>
                    <label for="nqdActive">Active</label>
                    <input type='radio' name='nqdActive' id='nqdActive_hd' value={'true'}
                        onChange={(ev) => setNqdActive(ev.target.value)}/>
                    <label for="nqdActive_hd">Hoạt Động</label>

                    <input type='radio' name='nqdActive' id='nqdActive_kh' value={'false'}
                        onChange={(ev) => setNqdActive(ev.target.value)}/>
                    <label for="nqdActive_kh">Khóa</label>
                </div>
                <button onClick={nqdHandleSubmit}>Create</button>
            </form>
        </div>
    )
}
