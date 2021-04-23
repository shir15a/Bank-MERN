import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllAccounts from './AllAccounts'
import SpecificAccount from './SpecificAccount'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import UpdateCredit from './UpdateCredit'


export default class Bank extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/all" exact component={AllAccounts} />
                        <Route path="/SpecificAccount" exact component={SpecificAccount} />
                        <Route path="/Deposit" exact component={Deposit} />
                        <Route path="/Withdraw" exact component={Withdraw} />
                        <Route path="/UpdateCredit" exact component={UpdateCredit} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}




