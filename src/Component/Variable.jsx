import React from 'react'

export default function Variable() {
    var a=10;
    let b=20;
    const c=30;

    a=20;
    b=30;

    let name="Rahul";
    if(true){
        let name="Kiran"
        console.log(name,11)
        
    }
        console.log(name,22)
  return (
    <div>
        <h1 style={{backgroundColor:"black",color:"white"}}>VARIABLE </h1>
        {a}
        {b}
        {c}
    </div>
  )
}
