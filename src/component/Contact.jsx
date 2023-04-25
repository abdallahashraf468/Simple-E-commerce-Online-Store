import React from 'react';
import '../css/contact.css';
const Contact = () => {
    return (
        <div className="coontainer">
            <div className='hp'>
                <h2>Contact Us</h2>
                <p>In order to communicate with complete data, or leave us a message:</p>
            </div>
            <div className="roow">
                
                <div className="coolumn">
                    <form action="/action_page.php">
                        <label htmlFor="fname"> Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name ..."
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email ..."
                        />
                       
                        <label htmlFor="subject">Subject</label>
                        <textarea
                        className='text-center'
                            id="subject"
                            name="subject"
                            placeholder="Write something ....."
                            style={{ width: 500 , height: 230 }}
                            defaultValue={""}
                        />
                        <div className='cou text-center m-3'>
                         <label  htmlFor="country">Country</label>
                        <select id="country" name="country"> 
                            <option value="egypt">Egypt</option>
                            <option value="KSA">KSA</option>
                            <option value="Qatar">Qatar</option>
                            <option value="usa">USA</option>
                        </select>
                        </div>
                        <input className='btn btn-primary' type="submit" defaultValue="Submit" />
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Contact;
