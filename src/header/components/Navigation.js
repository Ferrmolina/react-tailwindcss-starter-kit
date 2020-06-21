import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component 
{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="flex flex-row justify-between">
                <div className="logo">
                    <a className="flex flex-row  align-center">
                        <img src="logo192.png" /> Company
                    </a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    <button type="button" 
                        className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                       
                    </button>
                </nav>
            </div>
        );
    }
}

export default Navigation