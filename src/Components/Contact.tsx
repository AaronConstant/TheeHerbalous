import React from 'react';

const Contact: React.FC = () => {
    return (
        <div id='contact'>
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
            <ul>
                <li>Email: <a href="mailto:your-email@example.com">Email goes here</a></li>
                <li>Phone: <a href="tel:+1234567890">Upon request</a></li>
                <li>Address: 123 Herbal Street, Green City, Natureland</li>
            </ul>
        </div>
    );
};

export default Contact;