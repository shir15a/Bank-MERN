import axios from 'axios';
import React, { useState } from 'react'
import Form from "./InputsForUpdateAndDeposit";
function Deposit() {

    return (
        <div>
            <Form type="depositing" buttonValue="Deposit"/>
        </div>
    )
}

export default Deposit
