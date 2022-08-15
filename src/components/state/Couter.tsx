import React, { useReducer } from 'react';

const initialState = { count: 0 }
type CounterState = {
    count: number
}
// type CounterAction={
//     type:'increment' | 'decrement' | 'reset',
//     payload?:number
// }

type UpdateAction = {
    type: 'increment' | 'decrement' 
    payload: number
}
type resetAction = {
    type: 'reset',

}

type CounterAction = UpdateAction | resetAction
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}
const Couter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count:{state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </>
    );
};

export default Couter;