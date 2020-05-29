import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {
            syntax: '#555', ui: '#edf2f7', bg: '#fdfdfd',
            button: '#2470a0', button_text: '#f8f8f8',
            table_header: '#2470a0', table_header_text: '#f8f8f8',
            badge_bg: '#ececec', badge_syntax: '#000000',
            hover: '#edf2f7'
        },
        dark: {
            syntax: '#ddd', ui: '#18242C', bg: '#171F24',
            button: '#1F3645', button_text: '#ddd',
            table_header: '#1F3645', table_header_text: '#f8f8f8',
            badge_bg: '#ddd', badge_syntax: '#555',
            hover: '#4a5568'
        },
    }

    //Toggle dark mode and light mode
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
