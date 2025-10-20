import React, { useContext } from 'react'
import Context from './context'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import usetoggle from './toggleHook'
import { useRef } from 'react'
import { Suspense } from 'react'
// lazy loading 
setTimeout(() => {
  
}, 5000);
const Lazy = React.lazy(() => import('./lazy'));

const Child = ({message , handleChild , handleClick}) => {
    const text = useContext(Context)

    
    // uncontrolled component
    const iref = useRef();
    const handlesubmit = (e) => {
      e.preventDefault()
      alert(`Input is : ${iref.current.value}`)
    }

    // debouncing
    let [str , setStr] = useState('')
    let [debouncedT , setDebounce] = useState('');

    useEffect(() => {
      let tim = setTimeout(() => {
        setDebounce(str)
      },500)
      return () => clearTimeout(tim)
    },[str]);

    // custom hook 
    let [val , toggle] = usetoggle(false)

    function reducer(state , action){
      switch(action.type){
        case 'increment' : 
          if(state.count <10) {
            return {...state , count : state.count + 1}
          } else {
            return {...state, direction: 'down'}
          }
        
        case 'decrement' :
          if(state.count > 0 ){
            return { ...state ,count : state.count - 1}
          } else {
            return { ...state,direction : 'up'}
          }
        default : return state
       }
    }

    let [state , dispatch ] = useReducer(reducer , {count:0 , direction : 'up'})
    let [running , setRunning] = useState(false)

    useEffect(() => {
      let interval 
      if(running) {
        interval = setInterval(() => {
          if(state.direction == 'up'){
            dispatch({type:'increment'})
          } else {
            dispatch({ type : 'decrement'})
          }
        },3000)
      } 
      return () => clearInterval(interval)
    },[dispatch , running , state.direction])
  return (
    <div>
      <Suspense fallback={<h2>Loading page…</h2>}>
        <Lazy/>
      </Suspense>
      <h2>Child Class</h2>
      <p>{state.count}</p>
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>stop</button>         
      <p>{str}</p>
      <input type="text" onChange={(e) => setStr(e.target.value)} />
      <p>debounde is {debouncedT}</p>

      <h1>its toggle custom hook {val ? 'On' : 'Off'}</h1>
      <button onClick={()=> toggle()}>toggle</button>

      <form onSubmit={handlesubmit}>
        <input type="text"  ref={iref}/>
        <button type='submit'>submit</button>
      </form>
      
      <h1>{text}</h1>
      <h1> Message from Parent : {message}</h1>
      <button onClick={() => handleChild('Iam Child')}>Click to Pass :</button>
      <button onClick={handleClick}>Click to handle</button>
    </div>
  )
}

export default Child
