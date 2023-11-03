import React from "react";

const Card = (props) => {
  const { title, paragraph, referenceLink, image } = props;

  return (
    <div className="relative flex flex-col h-full p-5 leading-tight tracking-tight shadow bg-pwhite card">
      <img src={image} alt="" className="w-full h-full lg:h-40" />
      <div>
      
      <h2 className="pl-3 mt-4 font-semibold font-Roboto text-primary">{title}</h2>
      <p className="px-3 mt-2 text-sm leading-4 text-justify font-Roboto text-paragraph">{paragraph}</p>
      </div>
      <div>
      <a
        href={referenceLink}
        target="_blank"
        rel="noopen noreferrer"
        className="absolute p-1 px-2 mt-4 text-xs text-white duration-500 bg-red-800 -bottom-2 hover:bg-red-600 hover:text-white right-3 font-Roboto "
      > To Learn More
      </a>
    </div>
    </div>
  );
};

export default Card;
