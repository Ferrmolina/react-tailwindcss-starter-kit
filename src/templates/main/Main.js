import React, { Component } from 'react'

import Section from './components/Section';
import Aside from './components/Aside';


class Main extends Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className="container flex flex-row mx-auto ">
                    <section className="w-3/4 text-2xl pr-8">
                        <Section />
                    </section>
                    <aside className="h-64 flex-1 bg-gray-200 p-4">
                        <Aside />
                    </aside>
                </div>
            </main>
        );
    }
}

export default Main