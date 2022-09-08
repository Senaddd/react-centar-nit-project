import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URl =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=984004e456fc482e8198ad93914cd6c9";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URl}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default DataFetching;
