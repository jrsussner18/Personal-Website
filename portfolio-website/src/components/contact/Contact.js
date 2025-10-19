import ContactInfo from "./ContactInfo";

function Contact() {
    return (
      <div className="text-white py-24 px-4">
        <p className="text-center">Get in Touch</p>
        <h1 className="text-[2.5rem] sm:text-[3rem] text-center font-bold">Contact Me</h1>
        <div className="flex flex-col items-center gap-6 mx-auto w-full max-w-lg justify-center mt-8 p-4 rounded-3xl border border-gray-600 border-solid md:flex-row md:gap-0 md:w-1/2">
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
