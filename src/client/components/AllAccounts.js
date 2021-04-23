import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getAllUsers() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let {data}  = await axios.get('http://localhost:8000/api/bank/account/');
      console.log(data);
      setData(data)
    }

    getData();
  }, [])
  return (
    <div className="App">
      {data.map((user, index) => {
        return (
          <div style={{ border: '1px solid black', marginTop: '3px', marginLeft: '3px', width: '200px' }} key={user.id} key={user._id}>
            <p><b>user: {index + 1}</b></p>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>cash: {user.account.cash}</p>
            <p>credit: {user.account.credit}</p>
            <p>is active: {String(user.isActive)}</p>
          </div>
        )
      })}
    </div>
  );
}

export default getAllUsers;