import photo1 from '/photo-1.jpg'
import photo2 from '/photo-2.jpg'
import photo3 from '/photo-3.jpg'
import photo4 from '/photo-4.jpg'
import photo5 from '/photo-5.jpg'
const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-header">
                    <h1 className="headline">Ableton</h1>
                </div>
                <div className="about-text">
                    <h2>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
                    <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
                </div>
                <div className="about-imgs">
                    <img src={photo1} alt="" className="pic1" />
                    <img src={photo2} alt="" className='pic2' />
                </div>
                <div className="about-text">
                    <h2>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
                    <p>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
                </div>
                <div className="about-vid"></div>
                <div className="about-text">
                    <h2>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h2>
                    <p>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
                </div>
                <div className="about-imgs2">
                    <div className='left'>
                        <img src={photo3} alt="" className="pic1" />
                        <img src={photo4} alt="" className='pic2' />
                    </div>
                    <div className="right">
                        <img src={photo5} alt="" className='pic2' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
