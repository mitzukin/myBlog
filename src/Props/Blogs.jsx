import React from "react";

const Blogs = (props) => {
  const { header, paragraph, image, referenceLink, date } = props;
  return (
    <div className="">
    <a href={referenceLink} target="_blank" rel="noopener noreferrer" className="block py-2 duration-500 hover:bg-opacity-10 hover:bg-primary">
      <div className="flex flex-col ml-2 md:flex-row ">
        
        <img src={image} alt="" className="md:h-32 md:w-48" />
        <div>
          <h2 className="text-sm font-bold md:px-4 md:text-lg xl:text-sm">{header}</h2>
          <p className="mt-1 text-sm md:px-4 text-secondary md:text-sm xl:text-sm">{paragraph}</p>
          <p className="mt-2 text-xs md:px-4 text-swhite md:text-xs xl:text-xs">{date}</p>
        </div>
      </div>
    </a>
  </div>
  );
};

export default Blogs;
