import React from 'react'

const TimeLocation = ({value,date,min,weather}) => {
  return (
    <div className='locationbox'>
        <div className="time">
            <div className="date">
                <small>Date:{date}</small><small></small>
                </div>
                <span>|</span>
            <div className="local_time">
                <small>Local time: {min}</small>
            </div>
        </div>
        <div className="Location">
            <h3>{value?.name},{value?.sys?.country}</h3>
        </div>
        <div className="status">
            <small>{weather?.description}</small>
        </div>
    </div>
  )
}

export default TimeLocation