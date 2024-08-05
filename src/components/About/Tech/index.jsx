import "./index.scss"; 
import AnimatedLetters from "../../AnimatedLetters"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faBootstrap, faReact, faJava, faPhp , faNodeJs  } from '@fortawesome/free-brands-svg-icons'
import Loader from "react-loaders";
import TechList from "../TechList";
import StarryBackground from '../StarryBackground';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className = "container about-page"> 
                <div className = "text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass}  strArray = {"About me".split("")} idx={15}/>
                    </h1>
                    <p>
                    I’m an ambitious software developer-in-training at Middle Tennessee State University and president of the MTSU ACM. My unique background has prepared me to be a team player who communicates effectively, solves problems analytically, and possesses the technical skills to tackle any challenge, with experience in React, NodeJS, and PHP.
                    <br/>
                    <TechList />
                    <Link to="/about" className="flat-button">LANGUAGES</Link>
                    <br/>
                    <Link to="/about/dev" className="flat-button">DEVELOPMENT TOOLS</Link>
                    </p>
                </div>
                <div className = "stage-cube-cont">
                <StarryBackground />
                    <div className = "cubespinner"> 
                        <div className = "face1">
                            <FontAwesomeIcon icon={faNodeJs} color="#68A063"/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faBootstrap} color="#7952B3"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPhp} color="#777BB4"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About