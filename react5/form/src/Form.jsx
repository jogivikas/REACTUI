
import { useState } from 'react'
export default function Form() {
    const[name,setName]=useState('');

    let handleChanage=(event)=>{
        setName(event.target.value);
    }
    return (
       <form>
<input placeholder=" name" type="text" value={name} onChange={handleChanage}></input>
<button >submit</button>

       </form>
    )
}