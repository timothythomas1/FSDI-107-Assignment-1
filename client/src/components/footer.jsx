import './footer.css';
import React from 'react'
import AboutMe from './AboutMe';
// A component is a fucntion that ALWAYS returns a JSX. 
const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-icons">
                    <a><i class="fa-brands fa-github fa-2xl"></i></a>
                    <a><i class="fa-brands fa-slack fa-2xl"></i></a>
                    <a><i class="fa-brands fa-stack-overflow fa-2xl"></i></a>
                    <a><i class="fa-solid fa-graduation-cap fa-2xl"></i></a>
                    <a><i class="fa-brands fa-reddit-alien fa-2xl"></i></a>
                    <a><i class="fa-brands fa-discord fa-2xl"></i></a>
                    <a><i class="fa-brands fa-medium fa-2xl"></i></a>
                </div>
                <AboutMe />

                <h7>TimTek&#8482; - &#169; 2022</h7>
        </div>

    );
}
// In order to work with this component, we need to export the component, so other components can import them and use them.

export default Footer;