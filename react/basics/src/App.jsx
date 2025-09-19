import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import Child from "./Child";
import Context from "./context";
import { increment , decrement } from "./slice";
import { inc , dec } from "./timerSlice";
import { useDispatch, useSelector } from "react-redux";

function ChildA({setMes}){
  return (
    <>
    <button onClick={() => setMes('Child A ')}>Click me</button>
    </>
  )
}

function ChildB({mess}){
  return <h1>Child B got : {mess}</h1>
}

const App = () => {
  // let [count , setCout] = useState(0);
  let [text , setText] = useState('Hello world');
  let [loggedIn , setLog] = useState(false)
  let [users , setUser] = useState([])
  let [num , setNum] = useState(1)
  let [running , setRun] = useState(false)

  // Timer using redux 
  const dispatch = useDispatch();
  const time = useSelector(state => state.timer.value);
  const direction = useSelector(state => state.timer.direction);
  
  useEffect(() => {
    let interval ;
    if(running) {
      interval = setInterval(() => {
        if(direction == 'up') dispatch(inc());
        else dispatch(dec())
      },500)
    }
    return () => clearInterval(interval)
  } , [running , dispatch , direction])

  // Counter using the redux 
  const count = useSelector(state => state.counter.value);


  // useReducer
  // function reducer(state , action){
  //   switch(action.type){
  //     case 'increment' : return { count : state.count + 1 }
  //     case 'decrement' : return { count : state.count - 1 }
  //     default : return state
  //   }
  // }
  // let [state , dispatch] = useReducer(reducer , {count : 0});

  // Use Memo
  let square = useMemo(() => {
    return num * num
  },[num])

  //UseRef
  let inputRef = useRef(null);
  const focus = () => {
    inputRef.current.focus()
  }

  // Use callback
  const handleClick = useCallback(()=> {
    console.log('clicked')
  },[])

  // UseEffect 
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUser(data))
  } , [])

  // Callback for recieving message from child 
  let handleChild = (msg) => {
    alert('The data from child to parent : ' + msg)
  }

  let Fruits = ['apple' , 'orange'];

  return(
    <>
      <button onClick={handleClick}>UseCallback</button>
      <Context.Provider value={text}>
        <Child message={"Hai Iam parent"} handleChild = {handleChild} handleClick={handleClick}/> 
      </Context.Provider>

      {/* state counter  */}
      {/* <h1>{count}</h1>
      <button onClick={() => setCout(count+1)}>Inc</button>
      <button onClick={() => setCout(count-1)}>Dec</button> */}

      {/* reducer counter */}
      {/* <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button> */}

      {/* redux counter */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      {/* redux timer  */}
      <h1>{time}</h1>
      <button onClick={() => setRun(true)}>Start</button>
      <button onClick={() => setRun(false)}>Stop</button>
  

      {/* useMemo memoizes the computed value  */}
      <p>UseMemo : {square}</p>
      <button onClick={() => setNum(num + 1)}>inc</button>

      <div>
        <h1>Text is : {text}</h1>
        <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={focus}>Focus</button>
      </div>

      {/* Conditional rendering */}
      <div>
        {loggedIn ? <p>Welcome Back</p> : <p>Please log in </p>}
        <button onClick={() => setLog(!loggedIn)}>Toggle</button>
      </div>

      {/* Using map */}
      <ul>
        {Fruits.map((f , i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      
      <div>
        <h1>Users:</h1>
        {/* <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul> */}
      </div>
      <ChildA setMes={setText}/>
      <ChildB mess={text}/>
    </>
  )
}

export default App




