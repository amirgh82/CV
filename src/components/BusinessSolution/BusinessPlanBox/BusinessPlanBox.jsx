import React from 'react'
import './BusinessPlanBox.css'

export default function BusinessPlanBox({ title, icon }) {
  return (
    <div className='business-plan-box'>
      <span className="business-plan-box-icon">
        {icon}
      </span>
      <span className="business-plan-box-title">
        {title}
      </span>
    </div>
  )
}
