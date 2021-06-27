import React from 'react'
import './mainstyles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/form">
                    <Form />
                </Route>
                <Route path="/auth">
                    <Auth />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        
    )
}

export default App
