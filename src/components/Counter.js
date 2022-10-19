import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
const Counter = () => {
  const counter =useSelector(state => state.counter)
  const dispatc =  useDispatch()
  const toggleCounterHandler = () => {};


  function incre() {
     dispatc({type : "in" })
  }
  
  function decre() {
    dispatc({type : "de" }) 
 }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => incre()}>in</button>
        <button onClick={() => decre()}>de</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
