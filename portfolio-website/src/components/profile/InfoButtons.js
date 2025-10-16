function InfoButtons() {
    return (
      <div className="flex justify-center gap-[1rem]">
        <button
          className="font-[600] transition-all duration-300 ease-in p-[1rem] w-[9rem] rounded-[2rem] border border-solid border-[#ffffff] hover:cursor-pointer hover:bg-white hover:text-black"
          onClick={() => {
            const newWindow = window.open('JakeSussner.pdf', '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
          }}
        >
          Download CV
        </button>
        <a href="#contact">
          <button className="font-[600] transition-all duration-300 ease-in p-[1rem] w-[9rem] rounded-[2rem] border border-solid border-[#ffffff] bg-white text-black hover:cursor-pointer hover:bg-black hover:text-white">
            Contact Info
          </button>
        </a>
      </div>
    );
}

export default InfoButtons;