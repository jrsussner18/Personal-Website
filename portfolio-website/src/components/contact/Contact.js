import ContactInfo from "./ContactInfo";

function Contact() {
    return (
      <div className="text-white py-24">
        <p className="text-center">Get in Touch</p>
        <h1 className="text-[3rem] text-center font-bold">Contact Me</h1>
        <div className="flex mx-auto md:w-1/3 justify-center mt-[2rem] p-2 rounded-3xl border border-gray-600 border-solid">
          <ContactInfo
            image="/images/email.png"
            href="mailto:jrsussner@gmail.com"
            contactInfo="jrsussner@gmail.com"
          />
          <ContactInfo
            image="/images/linkedin.png"
            href="https://www.linkedin.com/in/jake-sussner/"
            contactInfo="LinkedIn"
          />
        </div>
      </div>
    );
}

export default Contact;