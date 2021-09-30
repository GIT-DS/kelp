import React from 'react'
import MailButton from './email';
import { Link } from 'react-router-dom';


const Footer = props => (

    <footer className='footer'>
        <div className="footer-links">
            <div className="col">

                <p className="col-title">About</p>
                <br />

                <a href="https://www.linkedin.com/in/darrick-shin/">LinkedIn</a>
                <a href="https://github.com/GIT-DS">Github</a>

            </div>
            <div className="col">
                <p className="col-title">Discover</p>
                <br />

                <MailButton className="email" label="Email" mailto="mailto:darrickshin@gmail.com"/>

            
            </div>
            <div className="col">
                <p className="col-title">Other Projects</p>
                <br />

                <a href="https://git-ds.github.io/my_pug_too_fat/">
                    My Pug Too Fat
                </a>
            
            </div>
            <div className="col">
                <p className="col-title">Languages</p>
                <br />
                <Link to="#" className="col-content">
                English
                </Link>
                <br />
                <p className="col-title">Countries</p>
                <br />
                <Link to="#" className="col-content">
                United States
                </Link>
            </div>
        </div>
    </footer>



)

export default Footer;