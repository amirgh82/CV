import React from 'react'
import './Statistics.css'
import { RiUser6Line } from 'react-icons/ri'
export default function Statistics() {
    return (
        <div className='statistics'>
            <div className="statistics-customer statistic">
                <RiUser6Line />
                <span className="number"></span>
                <p className="detail">مشتریان خوشحال</p>
            </div>
            <div className="statistics-history statistic">
                <RiUser6Line />
                <span className="number"></span>
                <p className="detail">مشتریان خوشحال</p>
            </div>
            <div className="statistics-customer statistic">
                <RiUser6Line />
                <span className="number"></span>
                <p className="detail">مشتریان خوشحال</p>
            </div>
            <div className="statistics-customer statistic">
                <RiUser6Line />
                <span className="number"></span>
                <p className="detail">مشتریان خوشحال</p>
            </div>
        </div>
    )
}
