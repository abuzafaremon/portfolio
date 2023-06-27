import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        contact <span> me </span>
      </h1>

      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>my email</h3>
          <p>zafaremon@gmail.com</p>
          <p>abuzaforemon@gmail.com</p>
        </div>

        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>my number</h3>
          <p>+8801707894381</p>
          <p>+8801568829599</p>
        </div>

        <div className="icons">
          <i className="fas fa-map-marker-alt"></i>
          <h3>my address</h3>
          <p>Maizdee-Noakhali, Chittagong, Bangladesh</p>
        </div>
      </div>

      <div className="row">
        <form>
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="number" className="box" />

          <textarea
            name=""
            placeholder="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <input type="submit" className="btn" value="send message" />
        </form>
        <iframe
          title="title"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29408.964752558317!2d91.06229712553859!3d22.87200316858309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a4f60180b351%3A0xaf35df91820c2a37!2sMaijdee!5e0!3m2!1sen!2sbd!4v1653998997466!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
