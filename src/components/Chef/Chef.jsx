import s from './Chef.module.scss';
import chef from '../../assets/images/chef/chef.svg';
import tomato from '../../assets/images/chef/tomato.svg';
import bacon from '../../assets/images/chef/bacon.svg';
import onion from '../../assets/images/chef/onion.svg';
import salad from '../../assets/images/chef/salad.svg';

const Chef = () => {
  return (
    <section>
      <div className={s.container}>
        <div className={s.text_content}>
          <h2>Everyone can be a chef in their own kitchen</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className={s.img_content}>
          <img src={chef} alt="Chef" />
          <img src={tomato} alt="Tomato" className={s.tomato} />
          <img src={bacon} alt="Bacon" className={s.bacon} />
          <img src={onion} alt="Onion" className={s.onion} />
          <img src={salad} alt="Salad" className={s.salad} />
        </div>
      </div>
    </section>
  );
};

export default Chef;
