import s from './Contact_us.module.scss';
import contact_us_shef from '../../assets/images/contact_us/contact_us_shef.svg';

const Contact_us = () => {
  return (
    <article>
      <div className={s.container}>
        <h1>Contact us</h1>
        <div className={s.content}>
          <div className={s.img_content}>
            <img src={contact_us_shef} alt="Contact us" />
          </div>
          <div className={s.text_content}>
            <div className={s.input}>
              <label htmlFor="name">NAME</label>
              <input id="name" type="text" placeholder="Enter your name..." />
            </div>
            <div className={s.input}>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                type="email"
                placeholder="Your email address..."
              />
            </div>
            <div className={s.input}>
              <label htmlFor="subject">SUBJECT</label>
              <input id="subject" type="text" placeholder="Enter subject..." />
            </div>
            <div className={s.select}>
              <label htmlFor="select">ENQUIRY TYPE</label>
              <select placeholder="Enter subject..." name="select">
                <option value="Advertising">Advertising</option>
                <option value="Restorants">Restorants</option>
                <option value="Selfdriven">Selfdriven</option>
                <option value="Forest camp">Forest camp</option>
              </select>
            </div>
            <div className={s.textarea}>
              <label htmlFor="textarea">MESSAGES</label>
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <a href="#">Submit</a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Contact_us;
