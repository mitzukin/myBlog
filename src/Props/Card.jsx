import React from "react";

const Card = (props) => {
  const { title, paragraph, referenceLink, image } = props;

  return (
    <div className="flex flex-col h-full p-5 leading-tight tracking-tight bg-white border border-opacity-50 shadow-md card">
      <div>
      <img src={image} alt="" className="w-screen h-40" />
      <h2 className="pl-3 mt-4 font-semibold font-Roboto">{title}</h2>
      <p className="px-3 mt-2 text-sm leading-4 text-justify font-Roboto">{paragraph}</p>
      </div>
      <div>
      <a
        href={referenceLink}
        target="_blank"
        rel="noopen noreferrer"
        className="pl-3 mt-2 text-xs font-semibold text-red-800 font-Roboto "
      > To Learn More
      </a>
    </div>
    </div>
  );
};

export default Card;
