import React from "react";
import "./Singlecontent.css";
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from "../../config/config";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt=""
      />
      <b className="title">{title}</b>
      <span>{media_type === "tv" ? "TV series" : "Movies"}</span>
      <span className="subTitle">{date}</span>
    </div>
  );
};

export default SingleContent;
