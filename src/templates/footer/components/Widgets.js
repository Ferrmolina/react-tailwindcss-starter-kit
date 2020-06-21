import React, { Component } from 'react'

class Widgets extends Component 
{
    render() {
        return (
            <div className="text-xs text-center">
                React Tailwindcss - Starter-kit by 
                <a 
                    href="https://www.fmolina.me" 
                    target="_blank"
                    rel="noopener noreferrer">
                        <strong>fmolina.me</strong>
                </a>
            </div>
        );
    }
}

export default Widgets