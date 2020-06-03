import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {

        const { toggleTheme } = useContext(ThemeContext);
        const { isLightTheme, light, dark } = useContext(ThemeContext);
        const theme = isLightTheme ? light : dark;
        return (
                <button className="bg-blue-600"
                        onClick={toggleTheme}
                        style={{ background: theme.button, color: theme.button_text }}>Toggle Theme</button>
        )

}

export default ThemeToggle;