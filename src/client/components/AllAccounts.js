import React, { useState, useEffect } from 'react';
import axios from 'axios';


function getAllUsers() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let { data } = await axios.get('http://localhost:8000/api/bank/account/');
      console.log(data);
      setData(data)
    }

    getData();
  }, [])
  return (
    <div className="App">
      {data.map((user, index) => {
        return (
          <div style={{ border: '1px solid black', marginTop: '3px', marginLeft: '3px', width: '200px' }} key={user._id}>
            <p><b>User: {index + 1}</b></p>
            <p>Name: {user.name}</p>
            <p>Id: {user.israeliId}</p>
            <p>Email: {user.email}</p>
            <p>Cash: {user.account.cash}</p>
            <p>Credit: {user.account.credit}</p>
            <p>Is active: {String(user.isActive)}</p>
          </div>
        )
      })}
    </div>
  );
}

export default getAllUsers;