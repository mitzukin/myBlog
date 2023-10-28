import React from "react";

const Sheets = (props) => {
  const { title, paragraph, author, date, image, referenceLink } = props;
  return (
    <div className="p-10 ">
     <img src={image} alt="" />
     <h1 className="p-2 text-2xl font-semibold font-Roboto">{title}</h1>
     <p className="px-2 text-sm font-Roboto">{paragraph}</p>


    </div>
  );
};

export default Sheets;
