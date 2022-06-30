import React from 'react'

export default function Card({name, ...restOfNames}) {
    console.log(restOfNames)
  return (
    <div className='card'>Name : {name}</div>
  )
}
