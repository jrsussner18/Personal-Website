function ContactIcons() {
    return (
      <div className="flex justify-center mt-[1rem] gap-[1rem]">
        <img
          src="/images/linkedin.png"
          alt="My LinkedIn profile"
          className="cursor-pointer h-[2rem] invert"
          onClick={() => {
            const url = "https://www.linkedin.com/in/jake-sussner/";
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) newWindow.opener = null;
          }}
        />
        <img
          src="/images/github.png"
          alt="My Github profile"
          className="cursor-pointer h-[2rem] invert"
          onClick={() => {
            const url = "https://github.com/jrsussner18";
            const newWindow = window.open(url, "_blank", "noopener,noreferrer");
            if (newWindow) newWindow.opener = null;
          }}
        />
      </div>
    );
}

export default ContactIcons;