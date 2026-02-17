import { useState } from "react";
export default function Search(){
    const[find,setFind] = useState("");
    return(
        <div>
            <h2>Demo to show search</h2>
            <input type="text"
            placeholder="Enter key to search"
            value={find}
            onChange={(e) => setFind(e.target.value)} />

        </div>
    )
}