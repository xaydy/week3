import React, {useState} from 'react'


export default function Home(props) {
    const [name, setname]=useState("dy dy")
    const handleClick=() =>{
        
        props.setname("dy vue")
        setname("xay100")

    }
  return (
    <div>
        {name}
        {props.name}
        {props.name}
        {props.name}
        {props.name}
        {props.name}
        {props.num}

        <button onClick={handleClick}>Chang</button>
    </div>
  )
}
