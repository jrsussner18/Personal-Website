function Skills({skill, experience}) {
    return (
      <>
        <article className="flex w-[10rem] justify-start items-start gap-[0.5rem]">
          <img
            src="/images/checkmark.png"
            alt="Experience icon"
            className="cursor-pointer h-[2rem] invert"
          />
          <div>
            <h3 className="font-bold">{skill}</h3>
            <p>{experience}</p>
          </div>
        </article>
      </>
    );
}

export default Skills