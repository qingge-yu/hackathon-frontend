const Contact = () => {

    return(
        <section className="form-container grid place-center">
            <form action="" className="contact-form">
                <input type="text" name="name" id="name" placeholder="John Doe"/>
                <input type="email" name="email" id="email" placeholder="JohnDoe@email.com"/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message here."></textarea>
                <input type="button" value="submit" placeholder="Send Message"/>
            </form>
        </section>
    );
}

export default Contact;