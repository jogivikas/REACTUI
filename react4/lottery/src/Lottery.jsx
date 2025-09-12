import { useState } from "react";

export default function Lottery() {

let [ticket,setTicket] = useState(3);
    return (
        <div>
            <h1>Lottery Game </h1>

            <div className="lottery">
                <h3>generate Ticket</h3>
                <span>
                   <p>{ticket}(n)</p>
                </span>

            </div>
        </div>
    );
}