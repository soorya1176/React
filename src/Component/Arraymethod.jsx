import React from 'react'

export default function Arraymethod() {

    let fruits=["Apple ","Banana ","Mango ","Orange"]

    let arrayobject=[{
        name:"soorya",
        Phone:765326521,
        Address:"Bantwal"
    }]
  return (
    <div>
        <h1 style={{backgroundColor:"black",color:"white"}}>ARRAY METHOD </h1>
        <h2>{fruits}</h2>
      <ol>
            {fruits.map((row)=>{
                return<li>{row}</li>
            })}
        </ol>

        <h2>{arrayobject.map((object)=>{
            return ( 
                <> 
                <h1>{object.name}</h1>
                <h1>{object.Phone}</h1>
                <h1>{object.Address}</h1>
         </>
            )
        })}
        </h2>
    </div>
  )
}
