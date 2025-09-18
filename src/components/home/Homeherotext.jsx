import React from 'react'
import Video from './Video';


const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-5 text-center">
      <div className="text-[9vw] flex items-centre justify-center  uppercase leading-[8vw]">
        The spark for
      </div>
      <div className="text-[9vw] flex items-centre justify-center uppercase leading-[8vw]">
        All
        <div className="h-[8vw] w-[15vw] -mt-5 rounded-full overflow-hidden relative">
          <Video />
        </div>
        thing
      </div>
      <div className="text-[9vw] flex items-centre justify-center  uppercase leading-[8vw]">
        creative
      </div>
    </div>
  );
}

export default HomeHeroText