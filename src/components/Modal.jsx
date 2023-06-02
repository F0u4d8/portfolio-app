import React from 'react';
import './projects.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import ImageSlider from './ImageSlider';

const Modal = ({ open, setOpen, data }) => {
  const containerStyle = {
    width: '80%',
    height: '50%',
    margin: '0 auto',
    padding: '10px',
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { delay: 0.3 } }}
        onClick={() => {
          setOpen(!open);
        }}
        className="modal-backdrop sm:w-[200px] sm:h-[100px] "
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.3 } }}
        exit={{ scale: 0, transition: { delay: 0.3 } }}
        className="modal h-3/4 w-2/3 overflow-auto "
      >
        <div className="bg-[#2c698d] p-1">
          <p className="text-right text-[#e3f6f5]  m-3">
            {' '}
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </button>
          </p>
        </div>

        <div style={containerStyle}>
          <ImageSlider slides={data.images} />
        </div>

        <div className="  px-4 box-border m-6 ">
          <h2 className="text-2xl text-gray-900 font-bold border-b-2 border-gray-900  ">
            {data.name}
            <a href={data.github} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt className="ml-3 inline text-lg" />
            </a>
          </h2>
          <p className="my-2">{data.description}</p>
          <div className="flex text-center p-3 ">
            <ul className="pl-0 list-none mx-auto my-0 flex ">
             {data.tech.map((item)=>{

return (<li className='mx-2 inline-block '><span><div className='text-center '><i className={item.class} style={{ fontSize: "300%" }}></i></div></span></li>)


             })}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
