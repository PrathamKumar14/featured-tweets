import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("{custom_functions_server_url}/{project_name}/URL")
      .then((res) => res.json())
      .then((data) => setTweets(data));
  }, []);

  return (
    <div className="container">
      <h1>Featured Tweets</h1>
      <h3>
        A collection of excellent tweets by{" "}
        <a href="https://twitter.com/prathkum">Pratham</a>
      </h3>
      <div className="tweet-container">
        {tweets.map((tweet, key) => {
          return (
            <div className="tweet">
              <p>{tweet.tweet}</p>
              <a href={tweet.tweet_url}>Read more ...</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
