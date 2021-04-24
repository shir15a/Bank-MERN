import React, { useState } from 'react'
import axios from 'axios';
function CreateAccount() {
    const [israeliId, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onButtonClick = async()=>{
        // console.log(amount);
        const result = await axios.post(`http://localhost:8000/api/bank/account/`,{israeliId, name, email})
        console.log(result);
    }

    return (
        <div>
            <label>Israeli Id:</label>
            <input type="text" placeholder="Enter ID" onChange={(e) => setId(e.target.value)}></input>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}></input>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={onButtonClick}>Create!</button>
        </div>
    )
}

export default CreateAccount
