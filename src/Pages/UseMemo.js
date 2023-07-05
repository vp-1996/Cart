import React, { useState, useMemo } from "react";

// This is because in React, the component is re - rendered whenever the component's state or props change. When the component is first rendered, ExpensiveComputation is called and "Computing..." is logged twice. Then, every time the component is re-rendered because of a change in state or props, "Computing..." will be logged twice again.
// If you want to avoid the expensive computation from being run multiple times, you can wrap it in a useMemo hook

function UseMemo() {

    const [count, setCount] = useState(0);
    const [state, setState] = useState('Initial State');

    function ExpensiveComputation() {
        // A simulated expensive computation
        console.log("Computing 1 billion elements...");
        let sum = 0
        for (let i = 0; i < 1000000000; i++) {
            sum = sum + i
        }
        return sum
    }

    // Without useMemo
    // ExpensiveComputation();

    // With useMemo
    // useMemo(() => {
    //     return ExpensiveComputation();
    // }, []);

    // const result = useMemo(() => ExpensiveComputation, [])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <p>Count: {count}</p>
            {/* {result()} */}
            <hr />
            <div>
                <button onClick={() => setState('<<< Updated State >>>')}>
                    Change State
                </button>
                <h5>{state}</h5>
            </div>
        </div>
    );
}

export default UseMemo;
