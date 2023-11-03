import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";


const Side = () => {
  
  return (
    <div>
     <nav>
        <ul className="flex flex-col gap-2 ml-10 text-sm font-semibold">
          <li className="duration-300 hover:underline hover:scale-105">
            <Link to="introduction" smooth={true} duration={500}>
              Introduction to Instruments
            </Link>
          </li>
          <li className="duration-300 hover:underline hover:scale-105">
            <Link to="traditional" smooth={true} duration={500}>
              Traditional Instruments
            </Link>
          </li>
          <li className="duration-300 hover:underline hover:scale-105">
            <Link to="Digital" smooth={true} duration={500}>
              Digital Instruments
            </Link>
          </li>
          <li className="duration-300 hover:underline hover:scale-105">
            <Link to="Choose" smooth={true} duration={500}>
              Choosing your Instruments
            </Link>
            </li>
            <li className="ml-3 text-xs "> 
            Identify Your Musical Interests
            </li>
            <li className="ml-3 text-xs "> 
            Consider Your Musical Goals
            </li>
            <li className="ml-3 text-xs "> 
            Budget
            </li>
            <li className="ml-3 text-xs "> 
            Physical Factors
            </li>
            <li className="ml-3 text-xs "> 
            Acoustic vs. Electronic
            </li>
            <li className="ml-3 text-xs "> 
            Try Different Instruments
            </li>
            <li className="ml-3 text-xs "> 
            Consider Your Living Situation
            </li>
            <li className="ml-3 text-xs "> 
            Maintenance
            </li>
            <li className="ml-3 text-xs"> 
            Time Commitment
            </li>
            <li className="ml-3 text-xs"> 
            Passion and Interest
            </li>

            
         
          {/* Add more links with the same structure for other sections */}
        </ul>
      </nav>
    </div>
  );
};

export default Side;
