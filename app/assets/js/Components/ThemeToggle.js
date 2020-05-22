import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class ThemeToggle extends Component{

    static contextType = ThemeContext;
    render() {
        const {toggleTheme} = this.context;
        return (
        <button className="bg-blue-600" onClick={toggleTheme}>Toggle Theme</button>
        )
    }
}

export  default  ThemeToggle;