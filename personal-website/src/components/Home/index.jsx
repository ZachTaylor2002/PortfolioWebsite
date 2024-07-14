import LogoZ from '../../assets/images/Z.png';
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {



    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm 
                <img src={LogoZ} alt="developer"/>
                ach Taylor,
                <br/>
                MTSU HackMT 2024 winner
                </h1>
                <h2>Junior in Computer Science, Middle Tennessee State University.</h2>
                <h2>Seeking a Software Engineering Internship</h2>
                <Link to="/portfolio" className="flat-button">
                VIEW PROJECTS
          </Link>
            </div>
        </div>
    );
}

export default Home