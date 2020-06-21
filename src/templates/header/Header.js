import React, { Component } from 'react'
import Navigation from './components/Navigation';

class Header extends Component 
{
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header>
                <div className="container mx-auto">
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header