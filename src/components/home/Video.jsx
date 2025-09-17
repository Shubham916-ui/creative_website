import React from 'react'
const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1758138368~exp=1758141968~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=161b25a53f8d3227c68f6d44110a5c26e165c5223f2fbd72e278bcca0fdfafab&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
}

export default Video