import axios from 'axios';
import React, { useState } from 'react'

function SpecificAccount() {
    const [parm, setParm] = useState("");
    const [data, setData] = useState("");

    const onButtonClick = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/bank/account/${parm}`)
        console.log(data);
        setData(data)
    }

    const Details = () => {
        if (data) {
            if (data.error) return <h2>{data.error}</h2>;
            else
                return (
                    <div className="card">
                        <h3>{`ID: ${data.israeliId}`}</h3>
                        <h4>{`Name: ${data.name}`}</h4>
                        <h4>{`Cash: ${data.account.cash}`}</h4>
                        <h4>{`Credit: ${data.account.credit}`}</h4>
                        <h4>{`Active: ${String(data.isActive)}`}</h4>
                    </div>
                );
        } else return <p></p>
    };

    return (
        <div>
            <input type='text'
                placeholder='write an Id'
                onChange={(e) => setParm(e.target.value)}
            />
            {parm && <button onClick={onButtonClick}>Search!</button>}
            <button onClick={() => location.reload()}>Clear!</button>
            <Details />
        </div>
    )
}

export default SpecificAccount

