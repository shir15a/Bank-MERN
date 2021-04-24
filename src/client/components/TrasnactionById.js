import React, { useState } from 'react'
import axios from 'axios';

function TrasnactionById() {
    const [id, setId] = useState('');
    const [data, setData] = useState([]);

    const onButtonClick = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/bank/transactions/${id}`)
        console.log(data);
        setData(data)
    }

    return (
        <div>
            <label>ID:</label>
            <input type="text" placeholder="Enter your Id" onChange={(e) => setId(e.target.value)}></input>
            <button onClick={onButtonClick}>Show!</button>
            {data && data.map((data) => {
                return (
                    <div style={{ border: '1px solid black', marginTop: '3px', marginLeft: '3px', width: '200px' }} key={data._id}>
                        <h3>{data.from && `From: ${data.from}`}</h3>
                        <h4>{`To: ${data.to}`}</h4>
                        <h4>{`Type: ${data.operation_type}`}</h4>
                        <h4>{`Amount: ${data.amount}`}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default TrasnactionById
