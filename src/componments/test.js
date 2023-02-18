import React  from 'react'

export default function test(props) {

  return (
    <div>
      {props.data.map(data =>

      <h2>{data}</h2>
        )}
   
    {props.data2.map(data =>
      <div>
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
      </div>
      )}
     </div>
  )
}
