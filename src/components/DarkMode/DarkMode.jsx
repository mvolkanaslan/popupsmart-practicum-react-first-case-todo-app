import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from '../../reducers/commonSlice';
import Icon from '../Icon/Icon'
import "./darkMode.css"

export default function DarkMode() {
    const dispatch = useDispatch();
    const currrentTheme = useSelector(state=>state.common.theme)
    
    const changeTheme = ()=>{
        let toggledTheme = currrentTheme==="dark"?"light":"dark"
        dispatch(commonActions.setTheme(toggledTheme))
        localStorage.setItem("theme",toggledTheme)
    }
    return (
        <div className='themeToggle' onClick={changeTheme}>
            <input type="checkbox" className="checkbox" />
            <label className="back">
                <Icon name={currrentTheme === "dark"?"moon":"sun"} fill="#f1c40f"/>
            </label>
        </div>
    )
}
