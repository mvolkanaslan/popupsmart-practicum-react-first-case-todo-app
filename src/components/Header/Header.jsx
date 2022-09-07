import React from 'react'
import { useSelector } from 'react-redux'
import "./header.css"
import { currentDate } from "../../utils/formattedDate"
import Icon from '../Icon/Icon'

export default function Header() {
  const userName = useSelector(state => state.todo.username)

  //for change header backgroud in this time range meybe geolocation can be used later
  const changeHeaderBack = () => {
    return (currentDate.hour >= 8 && currentDate.hour < 20) ? "day header" : "night header"
  }

  return (
    <div>
      <div className={changeHeaderBack()}>
        <span id="message" className="message">Hi {userName} !</span>
        <span id="date" className="date">{currentDate.date}</span>
        <Icon name="refresh" size={28} className="clearIcon" />
      </div>
    </div>
  )
}
