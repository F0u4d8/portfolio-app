import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';

import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['ahkouka', 'ohammed'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div name="home" className="w-full h-screen ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#2c698d]">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#bae8e8]">
          M{text} Fouad
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#e3f6f5]">
          I'm a Full Stack Developer.
        </h2>

        <div>

      
        <Link
           to='Projects' smooth duration={500} 
            className="text-[#e3f6f5] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2c698d] hover:border-[#2c698d] group w-fit cursor-pointer "
            
          >View work
            <span className="group-hover:rotate-90 duration-300">
  <HiArrowNarrowRight className="ml-3" />
</span>
           
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
