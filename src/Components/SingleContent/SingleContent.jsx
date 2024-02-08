import React, { useState } from "react";

import { img_300, unavailable } from "../../Config/Config";
import "./SingleContent.css";
import { Badge } from "@mui/material";
import ContentModals from "../ContentModal/ContentModal";

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
  return (
    <ContentModals media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "error"}
      />
      <img
        className="posters"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />

      <p className="title">{title}</p>

      <div className="sub_titiles">
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span className="sunTitle">{date}</span>
      </div>
    </ContentModals>
  );
}

SingleContent.defaultProps = {
  title: "No Title",
  date: "No date",
  vote_average: "0.0",
  media_type: "Errora",
};
export default SingleContent;
