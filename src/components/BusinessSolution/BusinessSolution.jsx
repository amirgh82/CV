import React, { useState } from 'react'
import './BusinessSolution.css'
import { FaGgCircle } from 'react-icons/fa'
import { AiOutlineLeft } from 'react-icons/ai'
import { GoDeviceDesktop } from 'react-icons/go'
import { TfiHeart } from 'react-icons/tfi'
import { AiFillEye } from 'react-icons/ai'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { FaBold } from 'react-icons/fa'
import { TfiWrite } from 'react-icons/tfi'
import { TbInnerShadowRightFilled } from 'react-icons/tb'
import Button from './../../Dependencies/Button/Button'
import BusinessPlanBox from './BusinessPlanBox/BusinessPlanBox'


export default function BusinessSolution() {

    const [businessPlanBoxData, setBusinessPlanBoxData] = useState([
        { id: 1, title: 'تفکر نوآورانه', icon: <GoDeviceDesktop /> },
        { id: 2, title: 'فن آوری', icon: <TfiHeart /> },
        { id: 3, title: 'توسعه نرم افزار', icon: <AiFillEye /> },
        { id: 4, title: 'ایده تجاری', icon: <FaBold /> },
        { id: 5, title: 'استراتژی محتوا', icon: <TfiWrite /> },
        { id: 6, title: 'رابط بصری', icon: <TbInnerShadowRightFilled /> },
    ])


    return (
        <>
            <div className='business-solution'>
                <div className="business-solution-picture">
                    <div className="image-business">
                        <h6 className='image-business-title'>امیررضا</h6>
                    </div>
                    <div className="image-business">
                        <h6 className='image-business-title'>سوفیا</h6>
                    </div>
                    <div className="image-business">
                        <h6 className='image-business-title'> محمد حسین</h6>
                    </div>
                </div>


                <div className="business-solution-detail">
                    <span className="detail-about-me">درباره ما</span>
                    <h3 className="detail-title">راه حل های کسب و کار شما</h3>
                    <p className="detail">
                        مشهورترین متن ساختگی "لورم ایپسوم " است که گفته می شود از قرن 16 پدید آمده است. لورم ایپسوم در یک زبان شبه لاتین ساخته شده است که کم و بیش با لاتین "مناسب" مطابقت دارد. این شامل یک سری کلمات واقعی لاتین است.
                    </p>
                    <div className="detail-section1">
                        <FaGgCircle />
                        <h5 className="detail-section1-title">بحث گروهی جذاب​</h5>
                    </div>
                    <p className="detail">هنگامی که متن ساختگی نسبتاً واقع بینانه باشد ، به گونه ای سودمند خواهد بود که طرح بندی ایجاد شود</p>
                    <div className="detail-section1">
                        <FaGgCircle />
                        <h5 className="detail-section1-title">مهندسی نرم افزار​</h5>
                    </div>
                    <p className="detail">هنگامی که متن ساختگی نسبتاً واقع بینانه باشد ، به گونه ای سودمند خواهد بود که طرح بندی ایجاد شود</p>
                    <Button className='detail-btn'>
                        ادامه مطلب <AiOutlineLeft />
                    </Button>
                </div>
            </div>

            <div className="Business-plans">
                <h3 className="business-plans-title">ما راه حل های فناوری اطلاعات و تجارت ارائه می دهیم</h3>
                <p className="detail Business-plans-detail">شروع به کار با لنـدریـک که می تواند هر آنچه را که شما برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
                <div className="business-plan">
                    {businessPlanBoxData.map(plan => (
                        <BusinessPlanBox {...plan} />
                    ))}
                </div>

                <Button >
                    نمایش بیشتر <BsFillArrowLeftCircleFill />
                </Button>
            </div>
        </>
    )
}
