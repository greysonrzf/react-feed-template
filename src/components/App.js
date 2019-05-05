import React from "react";

import Header from "./Header";
import Post from "./Post";

class App extends React.Component {
  state = {
    post: [
      {
        id: 1,
        author: "John Cuban",
        avatar: "https://avatars2.githubusercontent.com/u/18338409?s=460&v=4",
        createdAt: "há 3 min",
        post:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris at arcu auctor, vel laoreet dui tincidunt. Fusce faucibus semper sem, eu dignissim eros ultrices non. Pellentesque vitae lorem auctor, commodo metus quis, pharetra orci."
      },
      {
        id: 2,
        author: "Kevin Reagan",
        avatar: "https://avatars2.githubusercontent.com/u/18338409?s=460&v=4",
        createdAt: "há 8 min",
        post:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris at arcu auctor, vel laoreet dui tincidunt. Fusce faucibus semper sem, eu dignissim eros ultrices non. Pellentesque vitae lorem auctor, commodo metus quis, pharetra orci."
      },
      {
        id: 2,
        author: "Maphew Smith",
        avatar: "https://avatars2.githubusercontent.com/u/18338409?s=460&v=4",
        createdAt: "há 30 min",
        post:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mauris at arcu auctor, vel laoreet dui tincidunt. Fusce faucibus semper sem, eu dignissim eros ultrices non. Pellentesque vitae lorem auctor, commodo metus quis, pharetra orci."
      }
    ]
  };
  render() {
    const { post } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {post && post.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
