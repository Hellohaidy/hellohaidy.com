import React from 'react';
import logo from '../../media/logo.svg';
import './Mvp.scss';
import SocialBar from '../SocialBar/SocialBar';

const Mvp = () => {
    return(
        <div className="mvp">
          <img src={logo} alt="Hellohaidy's Logo" width="300px"/>
          <h1>Hellohaidy</h1>
          <p>Haidy D. Andrada is an advertiser, with a variety of passions. She is currently a student at the University of North Florida studying for a dual degree in communications with a focus in advertising and in interdisciplinary studies with a theme based on music entrepreneurship. Recently she coordinated and advertised an event “The Latin Night at the Boathouse” She is seeking an internship in advertising and strives to learn more about the entertainment industry first hand. Haidy is honing her craft in photography and videography for content creation on social media advertising.</p>
          <SocialBar />
        </div>
    );
};

export default Mvp;