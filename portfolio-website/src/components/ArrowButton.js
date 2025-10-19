function ArrowButton({href}) {
    return (
      <div className="hidden md:block">
        <a href={href}>
          <img
            src="/images/arrow.png"
            alt="Arrow icon"
            className="cursor-pointer h-[2rem] invert absolute right-4 bottom-0"
          />
        </a>
      </div>
    );
}

export default ArrowButton;