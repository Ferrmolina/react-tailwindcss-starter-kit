import React, { Component } from 'react'
import Widgets from './components/Widgets';

class Footer extends Component 
{
    render() {
        return (
            <footer className="mt-2">
                <div className="container mx-auto p-2">
                    <Widgets />
                </div>
            </footer>
        );
    }
}

export default Footer
