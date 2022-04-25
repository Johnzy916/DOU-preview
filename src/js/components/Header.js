import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Toggle from "react-toggle";
import { StateContext } from '../context/StateContext';
import icons from '../icons/icons';

export default function Header() {

    const { state, darkDispatch } = useContext(StateContext);

    // check local storage and set dark mode
    useEffect(() => {
        const darkMode = localStorage.getItem('dou_dashboard_dark_mode');
        // if dark mode, set body class and dispatch state
        if (darkMode && darkMode === 'true') {
            document.querySelector('body').classList.toggle('dark');
            darkDispatch({ type: 'SET_DARK_MODE', isDark: 'true' });
        }
      }, []);

    return (
        <div className="app-header">
            <NavLink to='/projects/dou/notes' className={({ isActive }) => isActive ? 'navlink-active' : ''}>
                Notes
            </NavLink>
            <NavLink to='/projects/dou/calendar' className={({ isActive }) => isActive ? 'navlink-active' : ''}>
                Calendar
            </NavLink>
            <NavLink to='/projects/dou/rates' className={({ isActive }) => isActive ? 'navlink-active' : ''}>
                Rates
            </NavLink>
            <NavLink to='/projects/dou/xls' className={({ isActive }) => isActive ? 'navlink-active' : ''}>
                EasyXLS
            </NavLink>
            <Toggle
                className="dark-mode-toggle"
                // checked == light mode for this toggle
                checked={state.isDarkMode === 'false'}
                onChange={({ target }) => {
                    const isDarkMode = !target.checked;
                    // toggle dark class on body
                    document.querySelector('body').classList.toggle('dark');
                    if (isDarkMode) {
                        // set to local storage and dispatch state
                        localStorage.setItem('dou_dashboard_dark_mode', 'true');
                        darkDispatch({ type: 'SET_DARK_MODE', isDark: 'true' });
                    } else {
                        localStorage.setItem('dou_dashboard_dark_mode', 'false');
                        darkDispatch({ type: 'SET_DARK_MODE', isDark: 'false' });
                    }
                }}
                icons={{ checked: icons.sun, unchecked: icons.moon }}
                aria-label="Dark mode toggle"
            />
        </div>
    )
}
