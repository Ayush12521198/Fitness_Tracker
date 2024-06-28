



import React, { useState } from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here

        // Show confirmation message
        setIsSubmitted(true);
    };

    return (
        <div className="box">
            <div className="contact-page">
                <div className="contact-us-banner">
                    <div className="overlay">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="shy">
                    <h2>Don't be shy, <span>get in touch...</span></h2>
                </div>
                <div className="contact-details-form">
                    <div className="contact-info">
                        <ul>
                            <li><strong>General Enquiries:</strong><span> 0800 612 4067</span></li>
                            <li><strong>Course Enquiries:</strong> <span>01772 737 919</span></li>
                            <li><strong>Learner Support:</strong><span> 01772 737 921</span></li>
                            <li><strong>Opening Hours:</strong> <span>Monday - Thursday / 9 am - 6 pm<br />Friday / 9 am - 5 pm</span></li>
                            <li><strong>Address:</strong><span> Health and Fitness Education, 7 & 8 Roundhouse Court, Buckshaw Business Centre, PR7 7JN</span></li>
                        </ul>
                    </div>
                    <div className="form">
                        {isSubmitted ? (
                            <div className="confirmation-message">
                                <h2>Thanks for your email</h2>
                                <p>A member of the team will be in touch shortly.</p>
                                <p>If you do want a more immediate response, it's usually best to give us a call during our business hours on the number at the top of this page.</p>
                                <p>Best Wishes,</p>
                                <p>Team Fittrack</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Name" required />
                                <input type="text" name="surname" placeholder="Surname" required />
                                <input type="text" name="phone" placeholder="Phone" required />
                                <input type="email" name="email" placeholder="Email" required />
                                <input type="text" name="company" placeholder="Company" />
                                <textarea name="message" placeholder="What can we help you with?" required></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="stay-in-touch">
                    <div>
                        <h2>Stay in Touch</h2>
                        <p>Sign up to our newsletter and stay up to date with what's going on in the health and fitness sector.</p>
                    </div>
                    <form>
                        <div className="name-surname-group">
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="text" name="surname" placeholder="Surname" required />
                        </div>
                        <input type="email" name="email" placeholder="Email" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
