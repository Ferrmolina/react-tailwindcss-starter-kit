import React, { Component } from 'react'

class Widgets extends Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-xs text-center">
                React Tailwindcss - Starter-kit &copy; <a href="https://www.fmolina.me" target="_blank"><strong>fmolina.me</strong></a>
            </div>
        );
    }
}

export default Widgets