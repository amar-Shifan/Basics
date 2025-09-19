import React, { useContext } from 'react'
import Context from './context'

const Child = ({message , handleChild , handleClick}) => {
    const text = useContext(Context)
  return (
    <div>
      <h1>{text}</h1>
      <h1> Message from Parent : {message}</h1>
      <button onClick={() => handleChild('Iam Child')}>Click to Pass :</button>
      <button onClick={handleClick}>Click to handle</button>
    </div>
  )
}

export default Child
