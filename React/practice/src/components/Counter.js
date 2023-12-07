import { React, useState } from 'react'

function Counter() {
  const [num, setNum] = useState(0);

  const incClick = () => {
    setNum(num=>num + 1)
    console.log("Iteration 1 : " + num)

    setNum(num=>num + 1)
    console.log("Iteration 2 : " + num)

    setNum(num=>num + 1)
    console.log("Iteration 3 : " + num)
  }

  return (
    <div className='container' style={{
      marginLeft: "auto",
      marginRight: "auto", width: "50%"
    }}>
      {num}<br />
      <button style={{ backgroundColor: "green" }} onClick={incClick}>Increase</button>
    </div>
  )
}

export default Counter