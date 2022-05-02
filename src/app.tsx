import {FC} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks";
import {add} from "./counter-slice";

import './style.css';

const App: FC = () => {
    const {value} = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();

    const handleIncrementClick = () => dispatch(add(1));
    const handleDecrementClick = () => dispatch(add(-1));

    return <main>
        <h1>Counter</h1>
        <span className="counter">{value}</span>
        <div className="buttons">
            <button onClick={handleIncrementClick} key="inc">Increment</button>
            <button onClick={handleDecrementClick} key="dec">Decrement</button>
        </div>
    </main>
};

export default App;