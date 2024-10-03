import React from 'react'



interface Tprop {
  name: string,
  roll : number,
  day :string
}
function Card(prop:Tprop) {
  return (
    <div>
        <h1>Name: {prop.name}</h1>
        <h1>Roll: {prop.roll}</h1>
        <h1>Day: {prop.day}</h1>
    </div>
  )
}

export default Card