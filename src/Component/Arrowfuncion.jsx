import React from 'react'

export default function Arrowfuncion() {
    const Arrow =()=>{
        alert("This is  arrow function")
    }

    const Button =(name,age)=>{
      alert(`My name is  "'${name}'" , age "'${age}'"`)

    }
  return (
    <div>
       <h1 style={{backgroundColor:"black",color:"white"}}>Arrowfuncion</h1>
        <button onClick={Arrow}>Click</button><br></br>
        <button onClick={()=>Button("soorya",36)} class="btn btn-warning">Click</button>
        </div>

  )
}
