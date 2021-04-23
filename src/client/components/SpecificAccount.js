import axios from 'axios';
import React, { useState } from 'react'

function SpecificAccount() {
    const [parm, setParm] = useState("");

    const onButtonClick = async() =>{
        const {data} = await axios.get(`http://localhost:8000/api/bank/account/${parm}`)
        console.log(data);
    }

    return (
        <div>
            <input type='nu'
            placeholder='write an Id'
            onChange={(e) => setParm(e.target.value)}
          />
          <button onClick={onButtonClick}>Search!</button>
        </div>
    )
}

export default SpecificAccount

