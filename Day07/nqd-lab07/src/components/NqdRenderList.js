import React from 'react'

export default function NqdRenderList() {
        const nqdList = ["Nguyễn Quốc Duy","ReactJS","Fit-NTU"];

        const nqdElemnet = nqdList.map((item,index)=>{
            return <li>{item}</li>
        });
    return (
    <div className="alert alert-success">
        <h2>Render List</h2>
        <ul>
            {
                nqdList.map(item=>{
                    return <li>{item}</li>
                })
                     
            }
        </ul>
      <hr/>
            {nqdElemnet}
    </div>
  )
}
