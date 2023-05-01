import {useReducer} from "react";

type CounterState = {
    count: number;
}

type UpdateAction = {
    type: "increment" | "decrement";
    payload: number;
}

type ResetAction = {
    type: 'reset'
}

type CounteAction = UpdateAction | ResetAction

const initialState: CounterState = {count: 0}

// 리듀서 : 상태를 업데이트하는 함수. flux 패턴
function reducer(state: CounterState, action: CounteAction) {
    switch (action.type){
        case "increment":
            return {count: state.count + action.payload};
        case "decrement":
            return {count: state.count - action.payload};
        case "reset":
            return initialState;
        default:
            throw state;
    }
}

export const Counter = () => {
    const [state, dispath] = useReducer(reducer, initialState);

    return (
        <>
            Counter: {state.count}
            <button onClick={() => dispath({type: "increment", payload: 10})}>
                +10
            </button>
            <button onClick={() => dispath({type: "decrement", payload: 10})}>
                -10
            </button>
            <button onClick={() => dispath({type: "reset"})}>
                초기화
            </button>
        </>
    )
}