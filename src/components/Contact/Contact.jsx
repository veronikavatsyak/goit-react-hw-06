import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import s from "./Contact.module.css";
const Contact = ({ name, number, handleDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.container}>
        <div className={s.nameWrapper}>
          <IconContext.Provider value={{ color: "green", size: 20 }}>
            <IoMdContact />
          </IconContext.Provider>
          <p className={s.text}>{name}</p>
        </div>
        <div className={s.phoneWrapper}>
          <IconContext.Provider value={{ color: "green", size: 20 }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          <p className={s.text}>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} className={s.btn} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
