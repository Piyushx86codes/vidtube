import Playvideo from "../../components/PlayVideo/Playvideo";
import Recommended from "../../components/Recommended/Recommended";
import "./Video.css";

const Video = () => {
  return (
    <div className="play-container">
      <Playvideo/>
      <Recommended/>
    </div>
  )
}

export default Video
