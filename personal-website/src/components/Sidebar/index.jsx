import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoZ from '../../assets/images/Z.png';
import LogoSubtitle from '../../assets/images/Long-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faGithub,} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoZ} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink activeClassName="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
            </NavLink>
            <a className='LinkedIn-link' href="https://www.linkedin.com/in/z-taylor02" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            <a className='Github-link' href="https://github.com/ZachTaylor2002" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>

        </nav>
    </div>
);

export default Sidebar;
