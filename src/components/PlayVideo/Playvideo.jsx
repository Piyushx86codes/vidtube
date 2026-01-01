import React from 'react'
import "./playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const Playvideo = () => {
  return (
    <div className='play-video'>
       <video src={video1} controls autoPlay muted></video>
       <h3>Best Channel to Learn Web developemnt</h3>
       <div className='play-video-info'>
          <p>1552 views &bull; 2 days ago</p>
          <div>
            <span><img src={like} alt=''/>125</span>
            <span><img src={dislike} alt=''/>2</span>
            <span><img src={share} alt=''/>share</span>
            <span><img src={save} alt=''/>save</span>
          </div>
       </div>
       <hr/>
       <div className="publisher">
        <img src={jack} alt=''/>
        <div>
            <p>GreatStack</p>
            <p>1M Subscriber</p>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="vid-subscription">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe to watch more Amazing Web Dev Videos</p>
        <hr/>
        <h4>130 Comments</h4>
        <div className="comment">
            <img src={user_profile} alt=''/>
            <div>
                <h3>Jack Nicolson <spa>1 day ago</spa></h3>
                <p> A global Network of Networks connected using interconnected Networks of standardized Communication Protocols</p>
                <div className="comment-action">
                    <img src={like} alt=''/>
                    <span>244</span>
                    <img src={dislike} alt=''/>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Playvideo
