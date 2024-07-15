import LogoZ from '../../assets/images/Z.png';
import './index.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'c', 'h', ' ', 'T', 'a', 'y', 'l', 'o', 'r'];
    const jobArray = [
        'M', 'T', 'S', 'U', ' ',
        'H', 'a', 'c', 'k', 'M', 'T', ' ',
        '2', '0', '2', '4', ' ',
        'W', 'i', 'n', 'n', 'e', 'r'
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoZ} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br/>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={25}
                    />
                </h1>
                <h2>Junior in Computer Science, Middle Tennessee State University.</h2>
                <h2>MTSU Association of Computing Machinery President.</h2>
                <h2 className="internship">Seeking a Software Engineering Internship</h2>
                <Link to="/portfolio" className="flat-button">
                    VIEW PROJECTS
                </Link>
            </div>
            <Logo className="Home"/>
        </div>
        <Loader type="pacman" />
    </>
    );
};

export default Home;
