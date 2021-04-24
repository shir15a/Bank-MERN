import React, { useState } from 'react'
import axios from 'axios';

function transferMoney() {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');

    const onButtonClick = async()=>{
        // console.log(amount);
        const result = await axios.put(`http://localhost:8000/api/bank/transactions/transfer/${fromAccount}/${toAccount}`,{amount})
        console.log(result);
    }

    return (
        <div>
            <label>from:</label>
            <input type="text" placeholder="Enter your ID" onChange={(e) => setFromAccount(e.target.value)}></input>
            <label>to:</label>
            <input type="text" placeholder="Enter ID" onChange={(e) => setToAccount(e.target.value)}></input>
            <label>amount:</label>
            <input type="text" placeholder="Enter amount"
                onChange={(e) => setAmount(e.target.value)}></input>
            <button onClick={onButtonClick}>Transfer!</button>
        </div>
    )
}

export default transferMoney
