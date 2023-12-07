import React from 'react'

function Calculator() {

  const add = (a, b) => { return a + b }
  const sub = (a, b) => { return a - b }
  const div = (a, b) => { return (a / b).toFixed(2) }
  const mult = (a, b) => { return a - b }

  return (
    <div>
      <ul>
        <li>Sum of two number is {add(4, 5)}</li>
        <li>Sum of two number is {sub(4, 5)}</li>
        <li>Sum of two number is {div(10, 3)}</li>
        <li>Sum of two number is {mult(4, 5)}</li>

      </ul>

    </div>
  )
}

export default Calculator