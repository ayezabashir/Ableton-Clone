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
        { value: 'de', label: 'Deutsch' },
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
                        <div className="footer-row a-flex">
                            <div className="footer-col">
                                <a href="#" className='font-light'>Register Live or Push <AiOutlineRight /> </a>
                                <a href="#" className='font-light'>About Ableton <AiOutlineRight /></a>
                                <a href="#" className='font-light'>Jobs <AiOutlineRight /> </a>
                                <div className="social-media a-flex">
                                    <div className="facebook flex">
                                        <FaFacebook />
                                    </div>
                                    <div className="twitter flex">
                                        < FaTwitter />
                                    </div>
                                    <div className="youtube flex">
                                        <AiOutlineYoutube />
                                    </div>
                                    <div className="insta flex">
                                        <AiOutlineInstagram />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-col">
                                <h3 className='font-light'>Education</h3>
                                <a href="#" className='font-light'>Offers for students and teachers <AiOutlineRight /> </a>
                                <a href="#" className='font-light'>Ableton for the Classroom <AiOutlineRight /></a>
                                <a href="#" className='font-light'>Ableton for Colleges and Universities <AiOutlineRight /> </a>
                            </div>
                            <div className="footer-col">
                                <h3 className='font-light'>Sign up to our newsletter</h3>
                                <p className='font-light'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                                <div className="signup-form">
                                    <input type="text" placeholder='Email Address' />
                                    <button className='font-bold'>Sign up</button>
                                </div>
                            </div>
                        </div>
                        <div className="footer-row a-flex">
                            <div className="footer-col">
                                <h3 className='font-light'>Community</h3>
                                <a href="#" className='font-light'>Find Ableton User Groups <AiOutlineRight /> </a>
                                <a href="#" className='font-light'>Find Certified Training <AiOutlineRight /></a>
                                <a href="#" className='font-light'>Become a Certified Trainer <AiOutlineRight /> </a>
                            </div>
                            <div className="footer-col">
                                <h3 className='font-light'>Language and Location</h3>
                                <div className='flex options'>
                                    <Select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        options={langOptions}
                                        className='select'
                                        placeholder="Language"
                                    />
                                    <Select
                                        options={options}
                                        value={value}
                                        onChange={changeHandler}
                                        className='select'
                                        placeholder="Country"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="flex help">
                            <div className="footer-col">
                                <ul className='contact flex font-light'>
                                    <li>Contact Us</li>
                                    <li>Press Resource</li>
                                    <li>Legal Info</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Settings</li>
                                    <li>Imprint</li>
                                </ul>
                            </div>
                            <div className="footer-col flex">
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
