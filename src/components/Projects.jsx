import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import data from '../data';
import './projects.css';
import Modal from './Modal';

const Projects = () => {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState(false);
  const [inf, setData] = useState({});

  const carousel = useRef();

  if (open) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  let setShow = (data) => {
    setOpen((prev) => !prev);
    setData(data);
  };

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div name="Projects" className="w-full h-screen text-[#e3f6f5]">
        <div className="flex justify-center items-center w-full">
          <div className="max-w-[1000px] w-full flex-col gap-8">
            <div className="">
              <p className="text-4xl font-bold inline border-b-4 border-[#2c698d]">
                Projects
              </p>
            </div>
          
              <motion.div
                ref={carousel}
                className="cursor-grab overflow-hidden"
                whileTap={{ cursor: 'grabbing' }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="flex"
                >
                  {data.projects.map((item) => {
                    return (
                      <motion.div
                        key={item.id}
                        className="item  group"
                        onClick={() => setShow(item)}
                      >
                        <div className="shadow-xl rounded-xl transform opacity-90 transition duration-500 hover:scale-105 hover:shadow-slate-900 hover:opacity-100">
                          <img
                            src={item.images[0].image}
                            className="rounded-t-xl object-cover"
                            alt={item.id}
                          />
                          <h3 className="text-slate-200 text-center font-sans font-bold text-base my-4 pb-2">
                            {item.name}
                          </h3>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
         
          </div>
        </div>
      </div>
      {open && <Modal open={open} setOpen={setOpen} data={inf} />}
    </>
  );
};

export default Projects;