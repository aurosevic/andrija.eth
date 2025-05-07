import React from 'react';
import IconLink from '../../components/IconLink/IconLink';
import GithubIcon from '../../components/icons/GithubIcon';

import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <h1 className="main-text">Andrija Urošević</h1>
            <p className="main-text">
                <a href="https://andrija.eth.limo/" target="_blank" rel="noopener noreferrer">
                    andrija.eth
                </a>
            </p>
            <div className="icon-container">
                <IconLink
                    href="https://github.com/aurosevic"
                    IconComponent={GithubIcon}
                    alt="Github"
                    label="Github"
                />
                <IconLink
                    href="https://hey.xyz/u/andrija"
                    iconSrc="/svg/lens.svg"
                    alt="Lens Profile"
                    label="Lens"
                />
                <IconLink
                    href="https://orb.club/@andrija"
                    iconSrc="/svg/orb.svg"
                    alt="Orb Profile"
                    label="Orb"
                />
                <IconLink
                    href="https://letterboxd.com/andrija27/"
                    iconSrc="/svg/letterboxd.svg"
                    alt="Letterboxd"
                    label="Letterboxd"
                />
                <IconLink
                    href="https://www.serializd.com/user/aurosevic/profile"
                    iconSrc="/svg/serializd.svg"
                    alt="Serializd"
                    label="Serializd"
                />
                <IconLink
                    href="https://www.linkedin.com/in/a-urosevic/"
                    iconSrc="/svg/linkedin.svg"
                    alt="LinkedIn"
                    label="LinkedIn"
                />
            </div>
        </div>
    );
};

export default Home;