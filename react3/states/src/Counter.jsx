

import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
   
    function handler()
{
   
   
    setCount(count+1);
}
    return (
        <div>
            <h1 > counter={count} </h1>
            <button onClick={handler}> click</button>
        </div>
    ) 
}