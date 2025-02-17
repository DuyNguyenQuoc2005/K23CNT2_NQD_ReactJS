import React from 'react'

export default function NqdJsxExpression() {
    //Biến
    const name="Nguyễn Quốc Duy";
    //Biến đối tượng
    const user = {
        firstName:"Duy",
        lastName:"Nguyễn"
    }
    //Hàm
    const fullName=(user)=>{
        return user.firstName + '' + user.lastName ;

    }

    //Element
    const element = (
        <div>
            {/* Biểu thức jsx */}
            <h2> {fullName(user)} </h2>
            <hr/>
            <h3> Welcome to, {name}</h3>
        </div>
    );

    //Hàm
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3> Welcome to Fit-NTU - K23CNT2</h3>
        }
    }
  return (
    <div>
        <h1> NQD - JSX Expression</h1>
        {/* Sử dụng biến element */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Nguyễn Duy Khanh <3")}
    </div>
  )
}
