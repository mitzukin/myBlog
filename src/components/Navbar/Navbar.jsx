import { Outlet, Link } from "react-router-dom";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white">
      
      <div className="p-5 font-Roboto">
        <nav className="flex flex-col items-center justify-between mx-0 md:mx-32 md:flex-row text-md">
          <div className="flex items-center ">
            <MdOutlineLibraryMusic size={16} />
            <h1 className="ml-2 text-primary">Music In One</h1>
          </div>

          <div
            className="fixed flex justify-center p-3 rounded-md top-2 right-2 align-center text-custom-blue md:hidden"
            onClick={() => {
              setTimeout(navToggle, 300);
            }}
          >
            {isNavOpen ? (
              <div>
                <AiOutlineClose size={20} color="#0a0908" />
              </div>
            ) : (
              <div>
                <RxHamburgerMenu size={20} color="#0a0908" />
              </div>
            )}
          </div>
          {isNavOpen && (
            <div
              className="absolute flex justify-center w-screen p-3 mt-6 md:hidden font-Roboto "
              data-aos="fade-down"
              data-aos-duration="300"
            >
              <ul className="flex items-center gap-4 py-5 bg-white rounded px-96 text-primary md:mt-0 ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/articles">Articles</Link>
                </li>
                <li>
                  <Link to="/discover">Discover</Link>
                </li>
                <li>
                  <Link to="/instruments">Instruments</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4 mt-2 text-primary md:mt-0 font-Roboto">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">Articles</Link>
              </li>
              <li>
                <Link to="/discover">Discover</Link>
              </li>
              <li>
                <Link to="/instruments">Instruments</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
