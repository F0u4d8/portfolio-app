import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex  justify-between items-center px-4  text-gray-300 ">
      <div>
        <img src="" style={{ width: '50px' }} />
      </div>

      {/* menu*/}

      <ul className="hidden md:flex  ">
        <li>
          {' '}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li>
          {' '}
          <Link to="Projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
     
      </ul>

      {/* hamburg*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mob men*/}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Portfolio</li>

      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2c698d]">
            <a
              href="https://www.linkedin.com/in/mohammed-fouad-mahkouka-512a0b234/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 "
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#464866]">
            <a
              href="https://github.com/F0u4d8"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-200 "
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#368b8b]">
            <a
              href="mailto:mahmedf0u4d@gmail.com"
              className="flex justify-between items-center w-full text-gray-200 "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
