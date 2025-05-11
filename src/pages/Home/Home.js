import React from 'react';
import IconLink from '../../components/IconLink/IconLink';
import GithubIcon from '../../components/Icons/GithubIcon';

import './Home.css';
import LensIcon from "../../components/Icons/LensIcon";
import OrbIcon from "../../components/Icons/OrbIcon";
import LetterboxdIcon from "../../components/Icons/LetterboxdIcon";
import SerializdIcon from "../../components/Icons/SerializdIcon";
import LinkedinIcon from "../../components/Icons/LinkedinIcon";

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
                    IconComponent={LensIcon}
                    alt="Lens Profile"
                    label="Lens"
                />
                <IconLink
                    href="https://orb.club/@andrija"
                    IconComponent={OrbIcon}
                    alt="Orb Profile"
                    label="Orb"
                />
                <IconLink
                    href="https://letterboxd.com/andrija27/"
                    IconComponent={LetterboxdIcon}
                    alt="Letterboxd"
                    label="Letterboxd"
                />
                <IconLink
                    href="https://www.serializd.com/user/aurosevic/profile"
                    IconComponent={SerializdIcon}
                    alt="Serializd"
                    label="Serializd"
                />
                <IconLink
                    href="https://www.linkedin.com/in/a-urosevic/"
                    IconComponent={LinkedinIcon}
                    alt="LinkedIn"
                    label="LinkedIn"
                />
            </div>
        </div>
    );
};

export default Home;