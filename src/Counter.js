import React, {useState} from 'react'

export default function Counter() {
  console.log("I am rendered");
  const [count, setCount] = useState(0);
  console.log(count);
  let handleDecrement = () => {
    setCount(count -1)
  };

  return (
    <div className='counter'>
      <div onClick={handleDecrement} className='counter-btn'>-</div>
      Counter {count}
      <div className='counter-btn'>+</div>
    </div>
  )
}
