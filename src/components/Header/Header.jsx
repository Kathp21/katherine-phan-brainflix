import './Header.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import Button from '../Button/Button';

function Header() {
    return (
        <header className="header">
            <nav className="header__logo">
                <img src={logo} alt="logo brainflix" />
            </nav>
            <div className="header__container">
                <form className="header__search-bar">
                    <div>
                        <label htmlFor="search"></label>
                        <input type="text" name="search" id="search" placeholder="Search"/>
                    </div>
                    <img src={avatar} className='header__avatar' alt="avatar" />
                </form>
                <Button buttonText="UPLOAD" variant="button__header"/>
            </div>
        </header>
    )
}

export default Header

