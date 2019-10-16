import React from 'react';
import {Slide} from 'react-slideshow-image';
import './slider.styles.scss';

const properties = {
  duration:5000,
  transitionDuration:500,
  infinite:true,
  indicators:true,
  arrows:true
}

export const Slider  = (props)=>(
  
    <div className='containerSlide'>
      <Slide {...properties}>
        {
          props.images.map(v =>(
            <div className='each-slide'>
              <div key={v.id}>
                <img src={v.image_url} alt={v.image_url}/>
              </div>
            </div>
          ))
        }
      </Slide>
    </div>
);