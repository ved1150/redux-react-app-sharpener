import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/index"
const Counter = () => {
  const globalStore = useSelector((state) => {
    return {
      counter: state.counter,
      show: state.showCounter,
    };
  });
  console.log(globalStore)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
      dispatch(counterAction.toggle())
  };

  function incre() {
    dispatch(counterAction.increment(5))
    }

  function decre() {
    dispatch(counterAction.decrement(5))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {globalStore.show && (
        <div className={classes.value}>{globalStore.counter}</div>
      )}
      <div>
        <button onClick={() => incre()}>increment by 5</button>
        <button onClick={() => decre()}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
