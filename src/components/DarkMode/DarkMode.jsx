import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../reducers/commonSlice';
import Icon from '../Icon/Icon'
import "./darkMode.css"

export default function DarkMode() {
    const dispatch = useDispatch();
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "light");

    useEffect(()=>{
        localStorage.setItem("theme",theme)
        dispatch(commonActions.setTheme(theme))
    },[theme])

    const changeTheme = ()=>{
        setTheme(theme==="dark"?"light":"dark")
    }
    return (
        <div className='themeToggle' onClick={changeTheme}>
            <input type="checkbox" className="checkbox" />
            <label className="back">
                <Icon name={theme === "dark"?"moon":"sun"} fill="#f1c40f"/>
            </label>
        </div>
    )
}
