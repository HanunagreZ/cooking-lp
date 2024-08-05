import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/icons/facebook_icon.svg';
import twitter from '../../assets/images/icons/twitter_icon.svg';
import instagram from '../../assets/images/icons/instagram_icon.svg';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img src={logo} alt="Foodieland logo" className={s.logo} />
        <nav className={s.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Recipes</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
          </ul>
        </nav>
        <div className={s.icons}>
          <img src={facebook} alt="Facebook icon" />
          <img src={twitter} alt="Twitter icon" />
          <img src={instagram} alt="Instagram icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
