import './Header.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <nav className="header__logo">
                <Link to="/"><img src={logo} alt="logo brainflix" /></Link>
            </nav>
            <div className="header__container">
                <form className="header__search-bar">
                    <label htmlFor="search"></label>
                    <input type="text" name="search" id="search" placeholder="Search"/>
                    <img src={avatar} className='header__avatar header__avatar--mobile' alt="avatar" />
                    <Link to ="/upload"><Button buttonText="UPLOAD" variant="button__header button__header--tablet"/></Link>
                    <img src={avatar} className='header__avatar header__avatar--tablet' alt="avatar" />
                    <Link to ="/upload"><Button buttonText="UPLOAD" variant="button__header button__header--mobile"/></Link>
                </form>
            </div>
        </header>
    )
}

export default Header

