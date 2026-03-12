import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <h1>{counter}</h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {

const [counter, setCounter] = useState(0)

const increasebyOne = () => {
  setCounter(counter + 1)
}

// setTimeout(() => {
//   setCounter(counter + 1)
// }, 1000)

const resetClick = () => {
  setCounter(0)
}

const decreasebyOne = () => {
  setCounter(counter - 1)
}

console.log('rendering...', counter)
return (
  <div>
    <Display counter={counter} />
    <Button onClick={increasebyOne} text='+' />
    <Button onClick={decreasebyOne} text='-' />
    <Button onClick={resetClick} text='↻' />
  </div>

)
}
export default App
