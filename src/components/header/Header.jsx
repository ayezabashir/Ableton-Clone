import { useState } from 'react'
import logo from '/logo.svg'
import { AiOutlineMinus, AiOutlinePlus, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Login from '../login/Login';

const Header = () => {
    const [moreClick, setMoreClick] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMoreClick = () => {
        setMoreClick(!moreClick);
    }
    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }
    return (
        <>
            <div className="header">
                <div className="container flex">
                    <section className="left flex">
                        <div className="logo">
                            <img src={logo} alt="Ableton" />
                        </div>
                        <div className="menu font-regular">
                            <ul className='flex'>
                                <li>Live</li>
                                <li>Push</li>
                                <li>Note</li>
                                <li>Link</li>
                                <li>Shop</li>
                                <li>Packs</li>
                                <li>Help</li>
                                <li>
                                    <ul onClick={handleMoreClick}>
                                        <li className='flex more'>More {moreClick ? <AiOutlineMinus /> : <AiOutlinePlus />}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="right">
                        <ul className='flex'>
                            <li>Try Live for free</li>
                            <li>
                                <Link to={Login}>Log in or register</Link>
                            </li>
                        </ul>
                    </section>
                </div>
                {moreClick && <div className="container more-container">
                    <div className="more-content">
                        <section className="top">
                            <h3 className='font-bold'>More on Ableton.com:</h3>
                            <ul className='font-light'>
                                <li>Blog</li>
                                <li>Ableton for the Classroom</li>
                                <li>Ableton for Colleges and Universities</li>
                                <li>Certifies Training</li>
                                <li>About Ableton</li>
                                <li>Jobs</li>
                                <li>Apprenticeships</li>
                            </ul>
                        </section>
                        <section className="bottom">
                            <h3 className='font-bold'>More from Ableton:</h3>
                            <ul className='flex'>
                                <li>
                                    <h4 className='font-regular'>Loop</h4>
                                    <p className='font-light'>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers.</p>
                                </li>
                                <li>
                                    <h4 className='font-regular'>Learning Music</h4>
                                    <p className='font-light'>Learn the fundamentals of music making right in your browser.</p>
                                </li>
                                <li>
                                    <h4 className='font-regular'>Learning Synths</h4>
                                    <p className='font-light'>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                </li>
                                <li>
                                    <h4 className='font-regular'>Making Music</h4>
                                    <p className='font-light'>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>}
            </div>
            <div className="header-mobile" style={mobileMenu ? { backgroundColor: 'blue', color: '#fff' } : { backgroundColor: 'transparent' }}>
                <div className="container">
                    <div className="top">
                        <div className="logo">
                            <svg style={mobileMenu ? { fill: 'white' } : { fill: 'black' }} aria-hidden="true" focusable="false" className="main-nav__logo__image" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
                        </div>
                        <div className="menu-mobile" onClick={handleMobileMenu}>
                            <p className='flex'>Menu {mobileMenu ? <AiFillCaretUp /> : <AiFillCaretDown />} </p>
                        </div>
                    </div>
                    <div className="bottom">
                        {
                            mobileMenu &&
                            <>
                                <div className="mobile-links">
                                    <ul className='font-regular'>
                                        <li>Live</li>
                                        <li>Push</li>
                                        <li>Note</li>
                                        <li>Shop</li>
                                        <li>Packs</li>
                                        <li>Help</li>
                                        <li>Try Live for free</li>
                                        <li>
                                            <small>Log in or register</small>
                                        </li>
                                        <li>
                                            <h3 className='font-bold'>More on Ableton.com:</h3>
                                        </li>
                                        <li>Blog</li>
                                        <li>Ableton for the Classroom</li>
                                        <li>Ableton for Colleges and Universities</li>
                                        <li>Certifies Training</li>
                                        <li>About Ableton</li>
                                        <li>Jobs</li>
                                        <li>Apprenticeships</li>
                                        <li><h3 className='font-bold'>More from Ableton:</h3></li>
                                        <li>
                                            <h4 className='font-regular'>Loop</h4>
                                            <p className='font-light'>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers.</p>
                                        </li>
                                        <li>
                                            <h4 className='font-regular'>Learning Music</h4>
                                            <p className='font-light'>Learn the fundamentals of music making right in your browser.</p>
                                        </li>
                                        <li>
                                            <h4 className='font-regular'>Learning Synths</h4>
                                            <p className='font-light'>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                        </li>
                                        <li>
                                            <h4 className='font-regular'>Making Music</h4>
                                            <p className='font-light'>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header
