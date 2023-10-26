import React from "react";


const Blogs = (props) => {
  const { header, paragraph, image, referrenceLink } = props;
  return (
    <div>

      <div>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Blogs;
