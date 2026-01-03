import React, { useActionState, useEffect, useState } from 'react'
import "./playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import moment from "moment";

const Playvideo = ({videoID}) => {
  
  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData] = useState(null);
  const [commenData,setCommentData] = useState(null);

  const fetchVideoData = async()=>{
        const videoDetails = "Enter url here";
        await fetch(videoDetails).then(res=>res.json()).then((data)=>setApiData(data.items[0]));
  }

  const fetchOtherData = async()=>{
    //function to fetch channel data//
    const channeldatat_url = "Enter url here";
    await fetch(channeldatat_url).then((response)=>response.json).then(data=>setChannelData(data));
     
    const comment_url = "Enter url here";
    await fetch(comment_url).then(res=>res.json()).then((data)=>setCommentData(data.items));




  }
    
  useEffect(()=>{
    fetchVideoData();
  },[])

  useEffect(()=>{
     fetchOtherData();
  },[apiData])

  return (
    <div className='play-video'>
       {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title : "Title Here"}</h3>
       <div className='play-video-info'>
          <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} &bull; (apiData?{moment(apiData.snippet.publishedAt).fromNow()}:"")</p>
          <div>
            <span><img src={like} alt=''/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><img src={dislike} alt=''/>2</span>
            <span><img src={share} alt=''/>share</span>
            <span><img src={save} alt=''/>save</span>
          </div>
       </div>
       <hr/>
       <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt=''/>
        <div>
            <p>1M Subscriber</p>
        </div>
        <button>{channelData?channelData.statistics.subscriberCount:"1M"}Subscribe</button>
       </div>
       <div className="vid-subscription">
        <p>{apiData? apiData.snippet.description.slice(0,200):"Description Here"}</p>
        <hr/>
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
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
