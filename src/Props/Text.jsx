import React from "react";


const Text = (props) => {
  const { title, text, date, referenceLink } = props

  return (
    <div>
      <h1 className="mt-10 text-lg font-semibold font-Roboto">{title}</h1>
      <p className="p-1 mt-3 leading-5 text-justify text-md md:ml-10 md:text-left font-Roboto">{text}</p>
      <p>{date}</p>
     
    </div>
  );
};
export default Text;