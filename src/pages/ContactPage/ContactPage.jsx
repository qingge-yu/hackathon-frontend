import { Link } from 'react-router-dom'
import './ContactPage.css';

const Contact = () => {

    return (
        <section className="content-container">
            <svg className="contactBG" width="1068" height="875" viewBox="0 0 1068 875" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1068 431.647C1068 658.726 810.186 875 582.921 875C355.655 875 0 658.726 0 431.647C0 204.569 266.814 0 494.079 0C721.345 0 1068 204.569 1068 431.647Z" fill="#F2CF66" />
            </svg>
            <p className="directoryPath">
                <Link to="/home" className="homeLink">Home</Link> / Contact
            </p>
            <div className="form-container">
                <h2 className='contact'>Send us a Message!</h2>
                <form action="" className="contact-form flex column">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="JohnDoe@email.com" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here."></textarea>
                    <input className="contactBtn" type="button" value="Send Message" />
                </form>
            </div>
        </section>
    );
}

export default Contact;