'use client'
import React from "react";
import { useRouter } from "next/navigation";
import ReactPlayer from 'react-player';
import './video.css'

const Video = () =>{
  const router = useRouter();
    return(
       <div className="video">
       <ReactPlayer
       url="https://www.youtube.com/watch?v=q4oikDpvX14"
       width='100%'
       height='100%'
       controls
       playing
       onEnded={()=>router.push('/components/Pagetest')}
       />
       </div>
    )
}
export default Video;