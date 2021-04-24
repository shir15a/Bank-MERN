// for deposit, Update and Withdraw

import axios from 'axios';
import React, { useState } from 'react'

function Form({type, buttonValue}) {
    const [id, setId] = useState('');
    const [amount, setAmount] = useState('');

    const onButtonClick = async()=>{
        // console.log(amount);
        const result = await axios.put(`http://localhost:8000/api/bank/transactions/${type}/${id}`,{amount})
        console.log(result);
    }

    return (
        <div>
            <label>id:</label>
            <input type="text" placeholder="Enter ID" onChange={(e)=>setId(e.target.value)}></input>
            <label>amount:</label>
            <input type="text" placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}></input>
            <button onClick={onButtonClick}>{buttonValue}</button>
        </div>
    )
}

export default Form
