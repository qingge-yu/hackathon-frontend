import { Link } from 'react-router-dom'
import './AboutPage.css'
import AboutGif from '../../images/AboutGif.gif'

export default function AboutPage() {
    return (
        <div className='aboutPage'>
            <div className='aboutLeft'>
                <h1>About navigat<b style={{ color: "#3476EF" }}>edu</b>?</h1>
                <p className="directoryPath">
                    <Link to="/" className="homeLink">Home</Link> / About
                </p>
                <svg className="aboutBG" width="822" height="837" viewBox="0 0 822 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-76.5534 712.907C-161.01 440.102 -266.604 324.673 -119.999 207.999C26.8739 51.7544 392 -116.5 668 112C868 296 847.611 592.037 748.002 755.999C602.503 995.499 19.2389 1022.33 -76.5534 712.907Z" fill="#F2CF66" />
                </svg>
                <p className="aboutText">We believe in empowering users of all ages with the essential skills of <b>Digital Literacy</b>, <b>Digital Citizenship</b>, and <b>Internet Safety</b> to create a responsible online community!</p>
            </div>
            <img src={AboutGif} alt="loading..." />
        </div>
    )
}