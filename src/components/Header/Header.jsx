import './Header.scss';
import Logo from '../../assets/images/logo/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import Button from '../Button/Button';

function Header() {
    return (
        <header className="header">
            <nav className="header__logo">
                <img src={Logo} alt="logo brainflix" />
            </nav>
            <div className="header__container">
                <form className="header__search-bar">
                    <div>
                        <label htmlFor="search"></label>
                        <input type="text" name="search" id="search" placeholder="Search"/>
                    </div>
                    {/* <Button/> */}
                    <img src={avatar} className='header__avatar' alt="avatar" />
                </form>
                <Button/>
            </div>
        </header>
    )
}

export default Header