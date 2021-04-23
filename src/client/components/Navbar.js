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
        </div>
    );
};

export default Navbar;