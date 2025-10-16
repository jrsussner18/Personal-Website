function PictureCard() {
    return (
      <div className="flex self-center h-[400px] w-[400px] mx-auto rounded-full">
        <img
          src="/images/expanded-image.png"
          alt="Jake Sussner Profile"
          className="w-full h-auto rounded-full object-cover object-bottom"
        />
      </div>
    );
}

export default PictureCard;