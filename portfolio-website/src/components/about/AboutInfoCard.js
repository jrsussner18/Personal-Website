function AboutInfoCard({imageRef, alt, title, info1, info2}) {
    return (
        <div className="md:w-1/2 p-6 rounded-3xl border border-gray-600 border-solid text-center">
            <img
            src={imageRef}
            alt={alt}
            className="cursor-pointer h-[2rem] invert mx-auto"
            />
            <h3 className="font-bold text-xl">{title}</h3>
            <p>
            {info1} <br />
            {info2}
            </p>
        </div>
    );
}

export default AboutInfoCard;