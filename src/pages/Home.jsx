import React from "react";
import Video from "../components/home/Video";
import Homeherotext from "../components/home/Homeherotext";



const Home = () => (
  <div>
    <div className="h-screen w-screen fixed bg-red">
      <Video/>
    </div>
    <div className="h-screen w-screen relative">
      <Homeherotext/>

    </div>
  </div>
);

export default Home;
