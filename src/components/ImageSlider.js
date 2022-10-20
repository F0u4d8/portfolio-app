import React, { useState } from 'react';
import { HiChevronDoubleLeft , HiChevronDoubleRight} from 'react-icons/hi';

const ImageSlider = ({ slides }) => {
  const [cIndex, setCIndex] = useState(0);


const prev =()=> {

const isFirstS = cIndex === 0
const newIndex = isFirstS ? slides.length - 1 : cIndex - 1

setCIndex(newIndex)

}

const next =()=> {

  const isLastS = cIndex === slides.length -1
  const newIndex = isLastS ? 0 : cIndex + 1
  
  setCIndex(newIndex)
  
  }


  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[cIndex].image})`,
  };

  const leftArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0;-75%)',
    left: '-45px',
    fontSize: '45px',
    color: '#2c698d',
    zIndex: '1',
    cursor: 'pointer',
  };
  const rightArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0;-50%)',
    right: '-45px',
    fontSize: '45px',
    color: '#2c698d',
    zIndex: '1',
    cursor: 'pointer',
    
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrow} onClick={prev} ><HiChevronDoubleLeft/></div>
      <div style={rightArrow} onClick={next} ><HiChevronDoubleRight/></div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
