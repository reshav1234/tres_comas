import React from 'react';
import './Contacts.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Photos from '../Photos/logo.png'

function Contacts()
{
    return(
        <>
            <section className = "Footer">
                

                <div class = "Links">
                    <p>Socials</p>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
              
                
                <div className="Us">
                    <div className = "footer-left">
                        <img src={Photos} alt="Site" align="left" width="130px" />                      
                    </div>
                    <div className="footer-mid">
                        <p>Email-buysell@xyz.com</p>
                    </div>
                    <div className = "footer-right">
                        <h2>Contact Us</h2>
                            <p>+977-9807645344</p>
                            <p>+977-9087845629</p>
                    </div>
                </div>
            </section>
    </>
    )
}
export default Contacts;