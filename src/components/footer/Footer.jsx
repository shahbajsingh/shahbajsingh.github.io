import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">shahbajsingh</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://instagram.com/shahbajpannu" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/shahbaj-singh/" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/shahbajsingh" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; shahbajsingh. All right reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer