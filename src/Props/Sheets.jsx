import React from "react";

const Sheets = (props) => {
  const { title, paragraph, author, date, image, referenceLink } = props;
  return (
    <div className="flex flex-col gap-2 bg-white border border-opacity-50 shadow-md">
      <div className="flex flex-row">
        
        <div className="flex flex-col gap-2 px-2 py-2 mx-2 ">
          <h1 className="mt-2 text-lg font-semibold font-Roboto text-primary">
            {title}
          </h1>
          <p className="font-semibold leading-tight text-justify text-md font-Roboto text-textlight">
            {author}
          </p>
          <p className="text-sm leading-tight text-justify font-Roboto text-secondary">
            {paragraph}
          </p>
          <p className="text-xs font-semibold leading-tight text-justify text-secondary font-Roboto">
            {date}
          </p>
          <a
        href={referenceLink}
        target="_blank"
        rel="noopen noreferrer"
        className="relative text-sm font-semibold text-red-700 float-bottom font-Roboto"
      > Go to site
      </a>
        </div>
      </div>
    </div>
  );
};

export default Sheets;
