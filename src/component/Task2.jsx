import React, { useState } from "react";

const task2 = () => {
	const [count, setcount] = useState(0);
	return (
		<div>
               <h1>Counter App</h1>
			<h2>count ={count}</h2>
			<button onClick={() => setcount(count + 1)}>Increment</button>
			<button disabled={count === 0} onClick={() => setcount(count - 1)}>
				Decrement
			</button>
			<button onClick={() => setcount(0)}>Reset</button>
		</div>
	);
};

export default task2;
