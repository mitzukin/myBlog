import React from 'react'

const Content = (props) => {
    const {title, paragraph, image,referenceLink} = props;
  return (
    <div className=''>
      <div className='flex flex-col-reverse gap-2 pb-5 mb-2 duration-300 md:flex-col-reverse lg:flex-row-reverse lg:p-2 lg:mx-0 xl:mx-56'>
      <div className='lg:mt-12 md:w-full lg:w-3/5'>
        <h1 className='px-2 mt-1 text-2xl font-extrabold font-Roboto md:text-left xl:text-4xl lg:px-0 '>{title}</h1>
        <p className='px-2 mt-5 text-sm leading-5 text-justify md:text-lg md:mb-2 md:leading-6 font-Roboto '>{paragraph}</p>
        <a
        href={referenceLink}
        target="_blank"
        rel="noopen noreferrer"
        className="ml-2 text-sm font-semibold text-red-700 md:text-lg font-Roboto"
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
