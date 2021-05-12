import React, {useState} from 'react';

function Count(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>state reiksme {count}</p>
            <button onClick={()=> setCount(count+1)}>Set new Count</button>
        </div>
    )
}

export default Count