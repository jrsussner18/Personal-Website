function PictureCard() {
    return (
      <div className="flex self-center mx-auto rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
        <img
          src="/images/expanded-image.png"
          alt="Jake Sussner Profile"
          className="w-full h-full rounded-full object-cover object-bottom"
        />
      </div>
    );
}

export default PictureCard;
