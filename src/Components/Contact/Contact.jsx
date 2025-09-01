import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "724c0563-7e2f-4057-b98e-be5d21524ae9"); // Replace with your Web3Forms key
        formData.append("from_name", "Portfolio mails");
        formData.append("subject", "New Contact Form Submission");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Thank you! Your message has been sent successfully.");
            event.target.reset();
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available to take on new projects, so if you're looking for a reliable developer to bring your ideas to life, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>subhamchoudhary283@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91-8052977911</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>VNIT NAGPUR, MAHARASTRA</p>
                        </div>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/subhamchoudhary283" target="_blank" rel="noopener noreferrer">
                             <img src={linkedin} alt="LinkedIn" />
                            </a>

                            <a href="https://github.com/subhamchoudhary283" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" />
                            </a>

                            <a href="https://www.instagram.com/subham_choudhary._._/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button className='contact-submit' type='submit'>Submit Now</button>
                </form>
            </div>

        </div>
    )
}

export default Contact
