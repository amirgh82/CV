import React from 'react'
import './Features.css'
export default function Features({ icon, title, detail }) {
    return (
        <div className='feature'>
            <div className="features-icon">
                {icon}
            </div>
            <div className="features-content">
                <h5 className='features-content-title'>
                    {title}
                </h5>
                <p className="features-content-detail text-gray">
                    {detail}
                </p>
            </div>
        </div>
    )
}
