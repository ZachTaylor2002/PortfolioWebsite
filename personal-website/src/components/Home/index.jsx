import LogoZ from '../../assets/images/Z.png';
import './index.scss'
import { Link } from 'react-router-dom'

const Home = () => {



    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm 
                <img src={LogoZ} alt="developer"/>
                ach Taylor
                <br/>
                Computer Science Student
                </h1>
                <h2>Computer Engineering & AI, 2026 at McGill University</h2>
                <Link to="/portfolio" className="flat-button">
                VIEW PROJECTS
          </Link>
            </div>
        </div>
    );
}

export default Home