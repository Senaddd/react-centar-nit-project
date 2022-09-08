import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=984004e456fc482e8198ad93914cd6c9"
      )
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul>
      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h1> {article.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </ul>
  );
};

export default DataFetching;
