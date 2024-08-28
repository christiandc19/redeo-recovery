import React, { useRef, useState } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const form = useRef();
    const [feedbackVisible, setFeedbackVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_bdfl0ie", "template_mgwoix5", form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
                setFeedbackVisible(true);
                setTimeout(() => {
                    setFeedbackVisible(false);
                }, 4000);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="bg">
            <div className="contact2-header contact2-container">
                <h1>DO YOU NEED URGENT HELP?</h1>
                <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week.</p>
            </div>

            <section className="contact-container">
                <Fade left>
                    <div className="contact-cards-container">
                        <div className="get_form_inner2">
                            <h2>CALL US</h2>
                            <p><AiOutlinePhone /><a href="tel:3235961997"> +1 (323) 596-1997</a></p>
                        </div>
                        <div className="get_form_inner2">
                            <h2>EMAIL</h2>
                            <p><AiOutlineMail /> info@rodeorecovery.com</p><br />
                        </div>
                        <div className="get_form_inner2">
                            <h2>LOCATION</h2>
                            <p><BsFillPinMapFill /> 240 S Rodeo Dr. Beverly, Hills, CA 90212</p>
                        </div>
                    </div>
                </Fade>

                <div className="get_form_inner">
                    <div className="get_form_inner_text">
                        <h3>Get In Touch</h3>
                        <p><i>We'll keep your contact information strictly confidential.</i></p><br />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="inputs">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                required 
                                pattern="[A-Za-z\s]+" 
                                title="Name should contain only letters and spaces."
                            /> <br />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                required 
                                title="Please enter a valid email address."
                            /> <br />
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Your Phone" 
                                required 
                                pattern="[\d\s\-()+]+" 
                                title="Phone number should contain only numbers and optional characters like spaces, dashes, or parentheses."
                            /> <br />
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                required 
                                title="Please enter the subject of your message."
                            /> <br />
                        </div>
                        <div>
                            <textarea 
                                name="message" 
                                placeholder="How can we help?" 
                                cols="30" 
                                rows="8" 
                                required
                                title="Please enter your message."
                            ></textarea>
                            <input type="submit" value="Submit" />
                        </div>
                        {feedbackVisible && (
                            <div className="feedback">
                                <h5>Message Sent!</h5>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ContactForm;
