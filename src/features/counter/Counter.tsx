
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { decrement, increment, incrementByAmount } from './counterSlice';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button className='border px-3 hover:bg-red-400 mr-2 rounded' onClick={() => dispatch(increment())}>Increment</button>
      <button className='border px-3 hover:bg-blue-400 mr-2 rounded' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='border px-3 hover:bg-green-400 rounded' onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}
