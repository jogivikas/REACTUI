import { useState } from "react";

export default function Lottery() {

let [ticket,setTicket] = useState(3);
    return (
        <div>
            <h1>Lottery Game </h1>

            <div className="lottery">
                <h3>generate Ticket</h3>
                <h1>hi</h1>
                <h2>hii</h2>
                <h>hghg</h>
                <p>hgfhgfghf</p>
                <span>
                   <p>{ticket}(n)</p>
                </span>
                

            </div>
        </div>
    );
}