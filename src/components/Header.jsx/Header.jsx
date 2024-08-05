import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </header>
  );
};

export default Header;
