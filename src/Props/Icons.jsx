import React from 'react'
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";

const Icons = () => {


    
  return (
    <div>
        <div className="flex gap-2">
        <div className="p-2 border border-gray-400 rounded-full" data-aos="fade-up"
                data-aos-duration="1000">
          <a href="" >
            <FaFacebookF size={24}  color='white'/>
          </a>
        </div>
        <div className="p-2 border border-gray-400 rounded-full"data-aos="fade-up"
                data-aos-duration="1300">
        <a href="">
            <FaPinterestP size={24} color='white'/>
          </a>
        </div>
        <div className="p-2 border border-gray-400 rounded-full"data-aos="fade-up"
                data-aos-duration="1500">
        <a href="">
            <FaInstagram size={24} color='white'/>
          </a>
        </div>
        <div className="p-2 border border-gray-400 rounded-full" data-aos="fade-up"
                data-aos-duration="1700">
        <a href="">
            <GoPaperclip size={24} color='white'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Icons
