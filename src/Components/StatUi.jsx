import React from 'react'

const StatUi = () => {
  return (
    <div className="stats shadow">
  
    <div className="stat place-items-center">
      <div className="stat-title">Downloads</div>
      <div className="stat-value">31K</div>
      <div className="stat-desc">From January 1st to February 1st</div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">Users</div>
      <div className="stat-value text-yellow-500">4,200</div>
      <div className="stat-desc text-yellow-700">↗︎ 40 (2%)</div>
    </div>
    
    <div className="stat place-items-center">
      <div className="stat-title">New Registers</div>
      <div className="stat-value">1,200</div>
      <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
    
  </div>
  )
}

export default StatUi
