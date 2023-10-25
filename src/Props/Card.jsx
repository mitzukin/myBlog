import React from "react";

const Card = (props) => {
  const { title, paragraph, referenceLink, image } = props;

  return (
    <div className="relative flex flex-col h-full p-5 leading-tight tracking-tight bg-white border border-opacity-50 shadow-md card">
      <img src={image} alt="" className="w-screen h-40 " />
      <div>
      
      <h2 className="pl-3 mt-4 font-semibold font-Roboto">{title}</h2>
      <p className="px-3 mt-2 text-sm leading-4 text-justify font-Roboto text-paragraph">{paragraph}</p>
      </div>
      <div>
      <a
        href={referenceLink}
        target="_blank"
        rel="noopen noreferrer"
        className="absolute mt-2 text-xs font-semibold text-red-800 bottom-1 right-3 font-Roboto "
      > To Learn More
      </a>
    </div>
    </div>
  );
};

export default Card;
