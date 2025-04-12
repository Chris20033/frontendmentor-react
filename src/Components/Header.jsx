import { useEffect, useState } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
const initialStateDarkMode = localStorage.getItem("theme") == "dark";

function Header() {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>
        </header>
    );
}

export default Header;
