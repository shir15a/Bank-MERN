import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllAccounts from './AllAccounts'
import SpecificAccount from './SpecificAccount'

export default class Bank extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/all" exact component={AllAccounts} />
                        <Route path="/SpecificAccount" exact component={SpecificAccount} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}




