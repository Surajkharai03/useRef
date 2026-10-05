import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)
  let val = useRef(0);  // now val ek object bn gya jiski value 0 h aur ye value 0 current field ke andr hogi
  
  let btnRef = useRef()  // button ref created
  const handleIncrement=  () =>{
    val.current = val.current+1;
    console.log("value of val:",val.current);  // now val ek aesa variable bn gya h jo re-render ho ya na ho apni value ko persist kiye hue h
    
    setcount(count+1)
  }
  
  // it runs on every render
  useEffect(() =>{       // jv bhi component re-render hoga tv hmra useEffect call hoga
    console.log("again render happens");
    
  })
  let changeColor = () => {
    btnRef.current.style.backgroundColor = "red";

  }

  return (
    <div>
      <button 
      ref={btnRef}   // button ref linked
      onClick={handleIncrement}>
        Increment
        </button>
        <br/>
        <br/>

        <button onClick={changeColor}>
          Change color of first Button
          </button>
        <div>
          Count:{count}
        </div>

    </div>
  )
}

export default App



// useRef useCase 1=> aesa variable create krna jo apni value ko persist(continue/stay/remain same) across re-render

// state variable -> change -> re-render happens
// useRef variable -> change -> np re-render happens

// useCase 2 => to access a DOM elements