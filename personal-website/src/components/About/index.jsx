import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJava, faPython, faNodeJs  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeout); // Cleanup function to clear the timeout
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={7} // Adjust idx to a valid index within strArray
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>

                
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faJava} color="#EC4D28" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faPython} color="#ffd700" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
                </div>
                </div>
            </div>
            
        </div>
        <Loader type="pacman" />
    </>
    );
};

export default About;
