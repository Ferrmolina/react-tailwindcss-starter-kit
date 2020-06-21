import React, { Component } from 'react'

class Aside extends Component 
{
    render() {
        return (
            <aside className="bg-gray-200 p-4">
                <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-5" role="alert">
                    <p class="font-bold">Be Warned</p>
                    <p>Something not ideal might be happening.</p>
                </div>
                <img 
                    src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Aside " />
            </aside>
        );
    }
}

export default Aside