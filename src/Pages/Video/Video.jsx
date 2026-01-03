import Playvideo from "../../components/PlayVideo/Playvideo";
import Recommended from "../../components/Recommended/Recommended";
import {useParams} from "react-router-dom";
import "./Video.css";

const Video = () => {
  
  const {videoID,categoryID} = useParams();

  return (
    <div className="play-container">
      <Playvideo videoID={videoID}/>
      <Recommended categoryID={categoryID}/>
    </div>
  )
}

export default Video
