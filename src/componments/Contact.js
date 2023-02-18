import React, {useState} from 'react'


export default function Contact(props) {
    const [num, setnum]=useState("9")
    const handleClick=() =>{
        
        props.setnum("0")
        setnum("1")
        

    }
  return (
    <div>
        {num}
        {props.num}
        {props.num}
        {props.num}
        {props.num}
        {props.num}
        {props.num}
        {props.num}
        {props.num}
        {props.num}
        <button oonClick={handleClick}>click</button>
    </div>
  )
}
