import React from 'react'

export default function demo() {

    function Example(){
        alert("This is demo page")
    }

  return (
    <div>
        <h1>This is demo page</h1>
        <button onClick={Example}>Click here</button>
    </div>
  )
}
