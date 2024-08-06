import Contact_us from '../../components/Contact_us/Contact_us';
import Inbox from '../../components/Inbox/Inbox';
import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <>
      <div className={s.container}>
        <Contact_us />
        <Inbox />
      </div>
    </>
  );
};

export default Contacts;
