import React, { createContext, useState } from "react";

const AppThemeContext = createContext

const AppThemeContextProvider = ({children}) => {
    const [app_theme, setAppTheme] = useState("dark")
    return
        <AppThemeContext.Provider>
            value = {
            {
                app_theme: app_theme,
            }}
        </AppThemeContext.Provider>
}

export default AppThemeContextProvider