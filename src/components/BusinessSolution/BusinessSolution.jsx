import React from 'react'
import './BusinessSolution.css'
import { FaGgCircle } from 'react-icons/fa'
import { AiOutlineLeft } from 'react-icons/ai'
import Button from './../../Dependencies/Button/Button'


export default function BusinessSolution() {
    return (
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
                <p className="detail-des">
                    مشهورترین متن ساختگی "لورم ایپسوم " است که گفته می شود از قرن 16 پدید آمده است. لورم ایپسوم در یک زبان شبه لاتین ساخته شده است که کم و بیش با لاتین "مناسب" مطابقت دارد. این شامل یک سری کلمات واقعی لاتین است.
                </p>
                <div className="detail-section1">
                    <FaGgCircle />
                    <h5 className="detail-section1-title">بحث گروهی جذاب​</h5>
                </div>
                <p className="datail-section1-des">هنگامی که متن ساختگی نسبتاً واقع بینانه باشد ، به گونه ای سودمند خواهد بود که طرح بندی ایجاد شود</p>
                <div className="detail-section1">
                    <FaGgCircle />
                    <h5 className="detail-section1-title">مهندسی نرم افزار​</h5>
                </div>
                <p className="datail-section1-des">هنگامی که متن ساختگی نسبتاً واقع بینانه باشد ، به گونه ای سودمند خواهد بود که طرح بندی ایجاد شود</p>
                <Button className='detail-btn'>
                    ادامه مطلب <AiOutlineLeft />
                </Button>
            </div>
        </div>
    )
}
