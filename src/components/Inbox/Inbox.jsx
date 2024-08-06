import s from './Inbox.module.scss';
import plate from '../../assets/images/inbox/plate.svg';
import rucola from '../../assets/images/inbox/rucola.svg';
import salad_fresh from '../../assets/images/inbox/salad_fresh.svg';

const Inbox = () => {
  return (
    <article>
      <div className={s.container}>
        <div className={s.content}>
          <h2>Deliciousness to your inbox</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
          <div className={s.input_container}>
            <input type="text" placeholder="Enter your email" />
            <a href="#">Subscribe</a>
          </div>
        </div>
        <img src={plate} alt="Plate" className={s.plate} />
        <img src={rucola} alt="Rucola" className={s.rucola} />
        <img src={salad_fresh} alt="Salad fresh" className={s.salad_fresh} />
      </div>
    </article>
  );
};

export default Inbox;
