import { useState } from "react";
import { helper,sum} from "./helper";

export default function Lottery() {

let [ticket,setTicket] = useState(helper(3));
let iswinning=sum(ticket)===15 ;
    return (
        <div>
            <h1>Lottery Game </h1>

            <div className="lottery">
                <h3>generate Ticket</h3>
                
             <span>{ticket[0]}</span>
             <span>{ticket[1]}</span>
             <span>{ticket[2]}</span>

            </div>
            <h3>{iswinning?"You Win":"You Lose"}</h3>
        </div>
    );
}