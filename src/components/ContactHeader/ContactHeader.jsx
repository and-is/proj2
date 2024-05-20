import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ex culpa
        eos pariatur sit rerum voluptas explicabo sapiente a quasi, itaque sed
        voluptatibus iste ipsa odit sint natus distinctio. Delectus?
      </p>
    </div>
  );
};

export default ContactHeader;
