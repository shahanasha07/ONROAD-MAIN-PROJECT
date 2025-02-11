import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.currentTheme === "light" ? "light" : "dark"
    )
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark")
            localStorage.currentTheme = "light"
        }
        else {
            document.documentElement.classList.add("dark")
            localStorage.currentTheme = "dark"
        }
    }, [theme])
    return (
        <div>
            <button
                className=''
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >      
                {theme ==='dark'? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/> }
            </button>
        </div>
    )
}

export default ThemeToggle