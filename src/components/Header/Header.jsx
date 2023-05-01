import React, { useState } from 'react'
import ButtonDependencies from '../../Dependencies/Button/Button'
import { FiPhoneCall } from 'react-icons/fi'
// import ModalDependencies from '../../Dependencies/ModalDep/ModalDependencies'
import './Header.css'

export default function Header() {


    return (
        <header className='header'>
            <div className="header-content">
                <section className="right-section">
                    <span className='mini-title'>نرم افزار و طراحی اطلاعات</span>
                    <h1 className='title'> نوآورانه پیشرفته <br />
                        راه حل های اطلاعات .</h1>
                    <p className="detail">کمپین خود را راه اندازی کنید و از تخصص ما در زمینه طراحی و مدیریت صفحه <br /> بوت استرپ v5 html تبدیل محور بهره مند شوید.</p>
                    <div className="contacts">
                        <ButtonDependencies>تماس با ما  <FiPhoneCall />  </ButtonDependencies>
                    </div>
                </section>
                <section className="left-section">
                    <form className='form-container'>
                        <h4 className='form-title'>وقت ملاقات خود را ثبت کنید</h4>
                        <p className="form-detail">ما در اینجا به شما کمک می کنیم 24/7  با متخصصان</p>
                        <div className="input-container">
                            <label className='form-title-label' >نام و نام خانوادگی</label>
                            <input type="text" className='form-input-name all-input' placeholder='نام و نام خانوادگی ' />
                            <label className='form-title-label'>ایمیل</label>
                            <input type="email" name="userEmail" className='form-input-email all-input' placeholder='ایمیل' />
                            <label className='form-title-label'>شماره تلفن</label>
                            <input type="number" name="userPhone" className='form-input-phone all-input' placeholder='شماره تماس' />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" className='checkbox-item' />
                            <p className='checkbox-detail'>تایید میکنم  <span className='click-modal-open'
                            // onClick={() => setIsShowModal(true)}
                            >قوانین سایت را قبول دارم.</span></p>
                        </div>
                        <ButtonDependencies>ثبت نام </ButtonDependencies>
                    </form>
                </section>
            </div>
            <div className="modal">
                {/* <ModalDependencies ShowModal={isShowModal} setShowModal={setIsShowModal} /> */}
            </div>
        </header>
    )
}
