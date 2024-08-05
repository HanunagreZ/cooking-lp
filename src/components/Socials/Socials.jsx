import s from './Socials.module.scss';
import facebook from '../../assets/images/icons/facebook_icon.svg';
import twitter from '../../assets/images/icons/twitter_icon.svg';
import instagram from '../../assets/images/icons/instagram_icon.svg';

const Socials = () => {
  return (
    <div className={s.icons}>
      <a href="#">
        <img src={facebook} alt="Facebook icon" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter icon" />
      </a>
      <a href="#">
        <img src={instagram} alt="Instagram icon" />
      </a>
    </div>
  );
};

export default Socials;
