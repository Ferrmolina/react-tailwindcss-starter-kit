import React, { Component } from 'react'
import Widgets from './components/Widgets';

class Footer extends Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="container mx-auto">
                    <Widgets />
                </div>
            </footer>
        );
    }
}

export default Footer
