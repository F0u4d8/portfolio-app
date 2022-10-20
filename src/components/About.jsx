import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-[#e3f6f5] ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2c698d]">
              About
            </p>
          </div>
          
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div
            className="sm:text-right text-3xl font-bold  "
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <p>Hi. I'm Fouad,</p>
            <p> a software engineer.</p>
            <p> based in Algeria. </p>
          </div>
          <div data-aos="fade-left" data-aos-offset="300">
            <p className='py-1'>
              I am a passionate web, mobile and desktop app developer. I
              specialize in front end design and aim to provide the best user
              experience. My journey began when I entered the university, when
              I discovered my passion for programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
