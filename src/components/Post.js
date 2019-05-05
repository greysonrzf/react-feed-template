import React, { Fragment } from "react";

import PostHeader from "./PostHeader";

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      name={props.data.author}
      data={props.data.createdAt}
    />
    <p>{props.data.post}</p>
  </div>
);

export default Post;
