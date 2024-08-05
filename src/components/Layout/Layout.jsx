import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
