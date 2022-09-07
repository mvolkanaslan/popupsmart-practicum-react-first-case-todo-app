import React from 'react'
import { useSelector } from 'react-redux'
import "./header.css"
import { getCurrentDate as currentDate } from "../../utils/formattedDate"
import DarkMode from '../DarkMode/DarkMode'

export default function Header() {
  const userName = useSelector(state => state.auth.username)

  //for changing header background in this time range meybe geolocation can be used later
  const changeHeaderBack = () => {
    return (currentDate().hour >= 8 && currentDate().hour < 20) ? "day header" : "night header"
  }

  return (
    <div>
      <div id="header" className={changeHeaderBack()}>
        <span id="message" className="message">Hi {userName} !</span>
        <span id="date" className="date">{currentDate().date}</span>
        <DarkMode />
      </div>
    </div>
  )
}
