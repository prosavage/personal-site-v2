import React, {createContext, useState} from "react"
export const ThemeToggleContext = createContext(null);

const ThemeToggleContextProvider = (props) => {
    const [theme, setTheme] = useState(props);

    return (
        <ThemeToggleContext.Provider value={theme}>
            {props.children}
        </ThemeToggleContext.Provider>
    )
}

