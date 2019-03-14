import React from 'react';
import './SocialBar.scss';

const SocialBar = () => {
    return (
        <span className="socialBar">
            <ul>
                <a href="https://www.instagram.com/hellohaidy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/haidy-d-andrada/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/HelloHaidyOfficial/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://vimeo.com/user95905378" target="_blank" rel="noopener noreferrer"><i className="fab fa-vimeo"></i></a>
            </ul>
        </span>
    );
}

export default SocialBar;