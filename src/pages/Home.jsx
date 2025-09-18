import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/homebottomtext";


const Home = () => (
  <div>
    <div className="h-screen w-screen fixed bg-red">
      <Video />
    </div>
    <div className=" h-screen w-screen relative">
      <HomeHeroText/>
      <HomeBottomText/>

    </div>
  </div>
);

export default Home;
