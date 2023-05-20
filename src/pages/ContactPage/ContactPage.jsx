import './ContactPage.css';

const Contact = () => {

    return(
        <section className="content-container">
            <div></div>
            <div className="form-container">
                <h1>Send us a Message!</h1>
                <form action="" className="contact-form flex column">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="John Doe"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="JohnDoe@email.com"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here."></textarea>
                    <input type="button" value="Send Message" />
                </form>
            </div>
        </section>
    );
}

export default Contact;