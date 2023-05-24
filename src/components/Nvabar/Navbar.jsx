import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiOutlineDown
} from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'


export default function Navbar() {

    const [isShowSearchInput, setIsShowSearchInput] = useState(false)
    const [btnToggle, setBtnToggle] = useState(false)

    const scrollHandler = (event) => {
        console.log(event.pageY);
    }



    return (

            <navbar className="navbar">
                <div className={`nav-btn ${btnToggle ? 'btn-open' : ''}`}
                    onClick={() => setBtnToggle(prev => !prev)}
                >
                    <span className="btn-line"></span>
                </div>

                <h1><Link className='logo ' to='/'>AmirProject</Link></h1>

                <ul className='navbar-lists'>
                    <li className="navbar-item">
                        <Link to='/' className='link'>صفحه اصلی</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='link subbar'>صفحات
                            <ul className="subbar-lists">
                                <li className="subbar-item">
                                    <Link className='subbar-link'>صفحه1</Link>
                                </li>
                                <li className="subbar-item">
                                    <Link className='subbar-link'>صفحه2</Link>
                                </li>
                                <li className="subbar-item">
                                    <Link className='subbar-link'>صفحه3</Link>
                                </li>
                                <li className="subbar-item">
                                    <Link className='subbar-link'>صفحه4</Link>
                                </li>
                            </ul>
                        </Link>
                    </li>


                    <li className="navbar-item">
                        <Link to='' className='navbar-documents link'>اسناد</Link>
                    </li>
                </ul>


                <div className="media-container">
                    <div className="search-box">
                        <BsSearch className='search ' onClick={() => setIsShowSearchInput(prev => !prev)} />
                        <input type="text" className={`input-search ${isShowSearchInput ? 'show-input' : ''}`} placeholder='دنبال چی میگردی؟' />
                    </div>
                    <a href="http://www.facebook.com/" className="media ">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="media">
                        <AiFillGithub />
                    </a>
                    <a href="#" className="media">
                        <AiOutlineTwitter />
                    </a>
                    <a href="#" className="media">
                        <AiFillLinkedin />
                    </a>
                </div>

                <div className={`navbar-mobile ${btnToggle ? 'open-nav' : ''}`}>
                    <h3 className='navbar-mobile-titr'>AmirProject</h3>
                    <h5 className='navbar-mobile-title'> خدمات</h5>
                    <ul className="navbar-mobile-lists">
                        <li className="navbar-mobile-list"><Link className="navbar-mobile-link">صفحه اصلی</Link></li>
                        <li className="navbar-mobile-list subbers"><Link className="navbar-mobile-link">صفحات <AiOutlineDown /></Link></li>
                        <li className="navbar-mobile-subber"><Link className="navbar-mobile-link">صفحه1</Link></li>
                        <li className="navbar-mobile-subber"><Link className="navbar-mobile-link">صفحه2</Link></li>
                        <li className="navbar-mobile-subber"><Link className="navbar-mobile-link">صفحه3</Link></li>
                        <li className="navbar-mobile-subber"><Link className="navbar-mobile-link">صفحه4</Link></li>
                        <li className="navbar-mobile-list"><Link className="navbar-mobile-link">اسناد</Link></li>
                    </ul>
                    <div className="media-container-mobile">
                        <a href="http://www.facebook.com/" className="media ">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="media">
                            <AiFillGithub />
                        </a>
                        <a href="#" className="media">
                            <AiOutlineTwitter />
                        </a>
                        <a href="#" className="media">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
            </navbar>


    )
}
