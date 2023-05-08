import React from 'react'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'
import { FcBarChart, FcSelfServiceKiosk, FcVideoProjector } from 'react-icons/fc'
import { MdAccessibilityNew } from 'react-icons/md'
import './Home.css'
import BusinessSolution from '../../components/BusinessSolution/BusinessSolution'
import Statistics from '../../components/Statistics/Statistics'


export default function Home() {

    const windowScrollHandler = (event) => {
        console.log(event);
    }

    return (
        <div className='home' onScroll={windowScrollHandler}>
            <Header />
            <div className="features">
                <Features icon={<FcBarChart />} title='تجزیه و تحلیل داده' detail='ساخته شده به زبان شبه لاتین که.' ></Features>
                <Features icon={<FcSelfServiceKiosk />} title='توسعه وب' detail='ساخته شده به زبان شبه لاتین که.' ></Features>
                <Features icon={<FcVideoProjector />} title='آی کیو و تست' detail='ساخته شده به زبان شبه لاتین که.' ></Features>
                <Features icon={<MdAccessibilityNew />} title='تیم اختصاصی' detail='ساخته شده به زبان شبه لاتین که.' ></Features>
            </div>
            <BusinessSolution />
            <Statistics />
        </div>
    )
}
