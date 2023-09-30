import { useState } from 'react'
import logo from '/logo.svg'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Header = () => {
    const [moreClick, setMoreClick] = useState(false);
    const handleMoreClick = () => {
        setMoreClick(!moreClick);
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
                            <li>Log in or register</li>
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
        </>
    )
}

export default Header
