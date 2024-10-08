import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faJava, faPython, faNodeJs  } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import LanguageList from './LanguageList';
import StarryBackground from './StarryBackground';
import { Link } from 'react-router-dom'; 


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeout); 
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={7} 
                    />
                </h1>
                <p className="about-text">
                Hello! I'm Zachary Taylor, a passionate and ambitious software developer-in-training at Middle Tennessee State University, where I lead as the president of the MTSU ACM. My journey in tech is fueled by a blend of analytical problem-solving and effective communication, honed through collaborative projects and a diverse technical toolkit including Python, TypeScript, and JavaScript.
                <br/>
                    <LanguageList />
                    <Link to="/about/tech" className="flat-button">FRAMEWORKS/TECHNOLOGIES</Link>
                    <Link to="/about/dev" className="flat-button">DEVELOPMENT TOOLS</Link>
                </p>


                
            </div>
            
            <div className="stage-cube-cont">
            <StarryBackground />
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
