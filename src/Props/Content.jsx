import React from 'react'

const Content = (props) => {
    const {title, paragraph, image,referenceLink} = props;
  return (
    <div className=''data-aos="fade-up"
    data-aos-duration="1500">
      <div className='flex flex-col-reverse gap-10 pb-5 mb-2 duration-300 md:hover:text-primary text-swhite md:hover:bg-swhite md:flex-col-reverse lg:flex-row-reverse lg:p-10 lg:mx-0'>
      <div className='lg:mt-12 md:w-full lg:w-3/5'>
        <h1 className='px-3 mt-1 text-2xl font-extrabold font-Roboto md:text-left xl:text-4xl lg:px-0 '>{title}</h1>
        <p className='px-3 mt-5 text-sm leading-5 text-justify md:text-lg md:mb-2 md:leading-6 font-Roboto '>{paragraph}</p>
        <a
        href={referenceLink}
        target="_blank"
        rel="noopen noreferrer"
        className="ml-3 text-sm font-semibold text-red-700 duration-300 lg:hover:underline md:text-lg font-Roboto"
        > Read more
      </a>
      </div>
        <div className='p-2 mt-10 md:p-0 md:w-full lg:w-2/5 md:mt-0'>
      <img src={image} alt="" className='w-screen h-full '/>
      </div>
      </div>
    </div>
  )
}

export default Content
