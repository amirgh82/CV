import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-work">
                <p className='footer-work-detail'>کار با لنـدریــک را شروع کنید که می تواند همه چیزهایی را که برای ایجاد آگاهی ، ایجاد ترافیک ، اتصال به آن نیاز دارید فراهم کند.</p>
            </div>
            <div className="footer-links">
                <h5 className="footer-links-title">لینک های مفید</h5>
                <Link className='footer-link'>درباره ما</Link>
                <Link className='footer-link'>خدمات</Link>
                <Link className='footer-link'>تیم</Link>
                <Link className='footer-link'>قیمت گذاری</Link>
                <Link className='footer-link'>پروژه</Link>
                <Link className='footer-link'>مشاغل</Link>
                <Link className='footer-link'>وبلاگ</Link>
            </div>

            <div className="footer-newsletters">
                <h5 className="footer-newsletters-title">خبرنامه</h5>
                <p className="footer-newsletters-detail">ثبت نام کنید و آخرین نکات را از طریق ایمیل دریافت کنید.</p>
                <label>ایمیل خود را بنویسید</label>
                <input type="text" placeholder='ایمیل شما:' className='footer-newsletters-email'/>
                <button className='footer-newsletters-btn'>خبرنامه</button>
            </div>
        </footer>
    )
}
