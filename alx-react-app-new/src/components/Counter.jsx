import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: "30px", border: "1px solid white", margin: "40px" }}>
            <p style={{ fontSize: "30px" }}>Current count: <span style={{ color: "pink", fontWeight: "bold" }}>{count}</span></p>
            <button style={{ margin: "12px", backgroundColor: "white", color: "black" }} onClick={() => setCount(count + 1)}>Increment</button>
            <button style={{ margin: "12px", backgroundColor: "white", color: "black" }} onClick={() => setCount(count - 1)}>Decrement</button>
            <button style={{ margin: "12px", backgroundColor: "white", color: "black" }} onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}