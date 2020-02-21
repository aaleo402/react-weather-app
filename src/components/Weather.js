import React from 'react'
import * as weatherIcons from "../icons"


const weather = props => {
  const prefix = 'wi wi-'
  const code = props.iconId
  let icon = weatherIcons.default[code].icon
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon;
  }
  icon = prefix + icon
  return (
    <div className='weather'>
      <p>Location: {props.city}, {props.country}</p>
      <hr/>
      <p>Temperature: <i className={icon}></i> {props.temp}°C</p>
      <hr />
      <p>Humidity: <i className="fas fa-tint"></i>{props.humidity}%</p>
    </div>
  )
}
export default weather