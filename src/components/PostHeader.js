import React from "react";

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} />
    <div className="data-container">
      <strong>{props.name}</strong>
      <span>{props.data}</span>
    </div>
  </div>
);

export default PostHeader;
