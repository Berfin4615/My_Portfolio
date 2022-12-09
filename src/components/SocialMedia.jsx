import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/Berfin4615">
                <BsGithub />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/berfin-s%C3%BCnnetcio%C4%9Flu-4ab9681b3/">
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/berfin.4615/">
                <BsInstagram />
            </a>
        </div>
    </div>
);

export default SocialMedia;