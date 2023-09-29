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
                <div className="container">
                    <section className="left">
                        <div className="logo">
                            <img src={logo} alt="Ableton" />
                        </div>
                        <div className="menu font-bold">
                            <ul>
                                <li>Live</li>
                                <li>Push</li>
                                <li>Note</li>
                                <li>Link</li>
                                <li>Shop</li>
                                <li>Packs</li>
                                <li>Help</li>
                                <li>
                                    <ul onClick={handleMoreClick}>
                                        <li>More</li>
                                        <li>{moreClick ? <AiOutlineMinus /> : <AiOutlinePlus />}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="right">
                        <ul>
                            <li>Try Live for free</li>
                            <li>Log in or register</li>
                        </ul>
                    </section>
                </div>
                {moreClick && <div className="container">
                    <div className="more-content">
                        <section className="top">
                            <h3>More on Ableton.com</h3>
                            <ul>
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
                            <h3>More from Ableton:</h3>
                            <ul>
                                <li>
                                    <h4>Loop</h4>
                                    <p>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers.</p>
                                </li>
                                <li>
                                    <h4>Learning Music</h4>
                                    <p>Learn the fundamentals of music making right in your browser.</p>
                                </li>
                                <li>
                                    <h4>Learning Synths</h4>
                                    <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                </li>
                                <li>
                                    <h4>Making Music</h4>
                                    <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
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
