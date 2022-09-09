import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TeslaData = (props) => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Tesla&apiKey=984004e456fc482e8198ad93914cd6c9"
      )
      .then((res) => {
        setData(res.data.articles);
        console.log(res.data.articles);
      });
  }, []);

  return (
    <div>
      <ul>
        <ul>
          {datas.map((data) => (
            <li key={data.id}>
              <h1> {data.title}</h1>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default TeslaData;
