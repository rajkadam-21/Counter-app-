
import './App.css';
import { useState } from 'react';

function App() {

  const[count,setCount]= useState(0)

function subHandler(){
setCount(count-1)
}

  function addHandler(){
setCount(count+1)
  }

  function resetHandler(){
setCount(0)
  }
  return (

 <div className='container'>

<button onClick={subHandler} id='sub'>
  -
</button>

<div>
  <h1>{count}</h1>
</div>

<button onClick={addHandler} id='add'>
  +
</button>
<br>
</br>

<button onClick={resetHandler} id='reset'>
  reset
</button>
<br>
</br>

 </div>

  );
}

export default App;



