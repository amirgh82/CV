import React from 'react'
import './Statistics.css'
import { RiUser6Line } from 'react-icons/ri'
import { BsCalendarWeek } from 'react-icons/bs'
import { TiTickOutline } from 'react-icons/ti'
import { BiBrain } from 'react-icons/bi'
export default function Statistics() {



    return (
        <div className='statistics' >
            <div className="statistics-customer statistic">
                <RiUser6Line />
                <span className="number counter" >0</span>


                <p className="statistics-detail">مشتریان خوشحال</p>
            </div>
            <div className="statistics-history statistic">
                <BsCalendarWeek />
                <span className="number" data-count='15'  >1</span>
                <p className="statistics-detail">سال تجربه</p>
            </div>
            <div className="statistics-customer statistic">
                <TiTickOutline />
                <span className="number" data-count='151'  >1</span>
                <p className="statistics-detail">پروژه های تکمیلی</p>
            </div>
            <div className="statistics-customer statistic">
                <BiBrain />
                <span className="number" data-count='98'  >1</span>
                <p className="statistics-detail"> مهندسین خبره</p>
            </div>
        </div>
    )
}
