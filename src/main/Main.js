import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';


import Section from './components/Section';
import Aside from './components/Aside';

import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';


class Main extends Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className="container flex flex-row bg-gray-200 mx-auto">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </main>
        );
    }
}

export default Main