import React from "react";
import { Link } from "react-router-dom";
import './style.css'


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/all" className="link"> Show All Users</Link>
            <Link to="/SpecificAccount" className="link">Specific User</Link>
            <Link to="/Deposit" className="link">Deposit</Link>
            <Link to="/Withdraw" className="link">Withdraw</Link>
            <Link to="/UpdateCredit" className="link">Update credit</Link>
            <Link to="/TransferMoney" className="link">Transfer money</Link>
            <Link to="/Create" className="link">Create new account</Link>
            <Link to="/TrasnactionById" className="link">Show user's trasnactions</Link>
        </div>
    );
};


export default Navbar;