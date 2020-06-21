import React, { Component } from 'react'
import Navigation from './components/Navigation';

class Header extends Component 
{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header className="border border-solid border-1 border-gray-200 mb-2">
                <div className="container mx-auto p-2">
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header