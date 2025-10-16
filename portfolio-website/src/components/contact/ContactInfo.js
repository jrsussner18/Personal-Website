function ContactInfo({image, href, contactInfo}) {
    return (
      <>
        <div className="flex items-center justify-center gap-[0.5rem] m-[1rem]">
          <img
            src={image}
            alt="contact icon"
            class="cursor-pointer h-[2.5rem] invert"
          />
          <p className="font-semibold text-lg">
            <a href={href} target="_blank" rel="noreferrer">
              {contactInfo}
            </a>
          </p>
        </div>
      </>
    );
}

export default ContactInfo;