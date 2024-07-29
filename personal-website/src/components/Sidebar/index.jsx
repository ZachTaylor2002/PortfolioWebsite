import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoZ from '../../assets/images/Z.png';
import LogoSubtitle from '../../assets/images/Long-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolderOpen, faBars, faClose, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/' onClick={() => setShowNav(false)}>
        <img src={LogoZ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle" />
      </Link>
      <FontAwesomeIcon 
        onClick={toggleNav}
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon' 
      />
      <nav className={showNav ? 'mobile-show' : ''}>
        <FontAwesomeIcon 
          onClick={toggleNav}
          icon={faClose}
          color='#ffd700'
          size='3x'
          className='close-icon' 
        />
        <NavLink exact className="Home" activeClassName="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeClassName="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeClassName="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
        </NavLink>
        <a className='LinkedIn-link' href="https://www.linkedin.com/in/z-taylor02" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
        <a className='Github-link' href="https://github.com/ZachTaylor2002" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
        <a className='Resume-link' href="" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
