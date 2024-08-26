import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import Socials from '../Socials/Socials';
import { useEffect, useState } from 'react';
import burger_icon from '../../assets/images/icons/burger.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuOpen(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/">
          <img src={logo} alt="Foodieland logo" className={s.logo} />
        </Link>

        <div
          className={`${s.nav_container} ${
            isMobileMenuOpen ? s.mobileNavOpen : ''
          }`}
        >
          <nav className={s.nav}>
            <ul>
              <li>
                <Link onClick={toggleMobileMenu} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={toggleMobileMenu} to="/">
                  Recipes
                </Link>
              </li>
              <li>
                <Link onClick={toggleMobileMenu} to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={toggleMobileMenu} to="/contacts">
                  Contacts
                </Link>
              </li>
              <li>
                <Link onClick={toggleMobileMenu} to="/">
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {window.innerWidth <= 767 && (
          <img
            src={burger_icon}
            alt="Burger icon"
            className={s.burger_icon}
            onClick={toggleMobileMenu}
          />
        )}

        {window.innerWidth > 767 && <Socials className={s.socials} />}
      </div>
    </header>
  );
};

export default Header;
