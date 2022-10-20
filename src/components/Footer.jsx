import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className="bg-[#272643] w-full min-h-[100px] overflow-hidden text-sm relative text-center text-white">
      <div className=" flex  max-w-full justify-center px-4  ">
        <div className="mt-12 text-xl md:flex sm:grid  ">
          <span className="m-6">
            <a
              href="https://github.com/F0u4d8"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </span>

          <span className="m-6">
            <a
              href="https://www.linkedin.com/in/mohammed-fouad-mahkouka-512a0b234/"
              target="_blank"
              rel="noreferrer"
            >
               <FaLinkedin  />
            </a>
          </span>

          <span className="m-6">
          <a href='mailto:mahmedf0u4d@gmail.com' > <HiOutlineMail /></a>
          </span>
          <span className="m-6">
            <a
              href="https://www.facebook.com/profile.php?id=100014572362324"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </span>
          <span className="m-6">
            <a
              href="https://www.instagram.com/_f0u4d_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
        
      </div><div className='text-center pb-6 '><div className=''><small>Copyright © Mahkouka Mohammed Fouad </small></div></div>
    </div>
  );
};

export default Footer;
