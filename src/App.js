import React, {useState} from 'react'

export default function App() {
  const [ data, setdata]= useState([1,2,3,4,5,6])
  const [data2, setdata2]= useState([
    {name:'jack',age:30},
    {name:'beer',age:28},
    {name:'xai',age:24},
    {name:'dy',age:22},
  ])
  return (
    <div>
      {data.map(data =>

      <h2>{data}</h2>
        )}
   
    {data2.map(data =>
      <div>
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
      </div>
      )}
     </div>
  )
}

