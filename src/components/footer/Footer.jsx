import { AiOutlineRight, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select';
import logo from '/logo.svg'

const Footer = () => {
    const [value, setValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('Languages')
    const options = useMemo(() => countryList().getData(), [])
    const langOptions = [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'Francais' },
        { value: 'es', label: 'Espanol' },
    ];
    const changeHandler = value => {
        setValue(value)
    }
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
    };
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-row">
                            <h1>Ableton</h1>
                        </div>
                        <div className="footer-row">
                            <div className="footer-col">
                                <a href="#">Register Live or Push <AiOutlineRight /> </a>
                                <a href="#">About Ableton <AiOutlineRight /></a>
                                <a href="#">Jobs <AiOutlineRight /> </a>
                                <div className="social-media">
                                    <div className="facebook">
                                        <FaFacebook />
                                    </div>
                                    <div className="twitter">
                                        < FaTwitter />
                                    </div>
                                    <div className="youtube">
                                        <AiOutlineYoutube />
                                    </div>
                                    <div className="insta">
                                        <AiOutlineInstagram />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-col">
                                <h3>Education</h3>
                                <a href="#">Offers for students and teachers <AiOutlineRight /> </a>
                                <a href="#">Ableton for the Classroom <AiOutlineRight /></a>
                                <a href="#">Ableton for Colleges and Universities <AiOutlineRight /> </a>
                            </div>
                            <div className="footer-col">
                                <h3>Sign up to our newsletter</h3>
                                <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                                <div className="signup-form">
                                    <input type="text" placeholder='Email Address' />
                                    <button>Sign up</button>
                                </div>
                            </div>
                        </div>
                        <div className="footer-row">
                            <h3>Community</h3>
                            <a href="#">Find Ableton User Groups <AiOutlineRight /> </a>
                            <a href="#">Find Certified Training <AiOutlineRight /></a>
                            <a href="#">Become a Certified Trainer <AiOutlineRight /> </a>
                        </div>
                        <div className="footer-row">
                            <h3>Language and Location</h3>
                            <Select
                                value={selectedOption}
                                onChange={handleChange}
                                options={langOptions}
                            />
                            <Select options={options} value={value} onChange={changeHandler} />
                        </div>
                        <div className="footer-row">
                            <div className="footer-col">
                                <ul>
                                    <li>Contact Us</li>
                                    <li>Press Resource</li>
                                    <li>Legal Info</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Settings</li>
                                    <li>Imprint</li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <p>Made in Berlin</p>
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
