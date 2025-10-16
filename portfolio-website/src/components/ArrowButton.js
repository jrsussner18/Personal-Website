function ArrowButton({href}) {
    return (
      <>
        <a href={href}>
          <img
            src="/images/arrow.png"
            alt="Arrow icon"
            className="cursor-pointer h-[2rem] invert absolute right-4 bottom-0"
          />
        </a>
      </>
    );
}

export default ArrowButton;