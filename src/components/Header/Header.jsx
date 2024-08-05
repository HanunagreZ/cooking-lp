import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import Socials from '../Socials/Socials';

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
        <Socials />
      </div>
    </header>
  );
};

export default Header;
