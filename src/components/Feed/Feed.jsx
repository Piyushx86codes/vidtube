import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./feed.css";
import { API_KEY, value_converter } from "../../data";

import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

const Feed = ({category}) => {
  const fetchdata = async () => {
    const [Data, setData] = useState([]);
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoListUrl)
      .then((response) => response.json())
      .then((result) => setData(result.item));
  };

  useEffect(() => {
    fetchdata();
  }, [category]);

  return (
    <div className="feed">
      {Data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>
             {item.snippet.title}
            </h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>${value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt)}.fromNow</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
