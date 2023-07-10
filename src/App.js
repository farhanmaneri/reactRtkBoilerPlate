import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';

// import { increment, decrement } from './features/counter/counterSlice';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<div>
  Count is
</div>
       <Counter/>

        <div>

          {/* <button onClick={()=>{dispatch(increment())}}>
    increment
   </button>
   <div>
    {count}
   </div>
   <button onClick={()=>{dispatch(decrement())}}>
    increment
   </button> */}
        </div>
      </header>
    </div>
  );
}

export default App;
