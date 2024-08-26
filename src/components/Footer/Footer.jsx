import s from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.year_author}>
          {year}. Created by <a href="https://github.com/Hanunagrez">Hz</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
