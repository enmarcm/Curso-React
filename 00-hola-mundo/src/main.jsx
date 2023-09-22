import React from "react";
import ReactDOM from "react-dom/client";
import TwitterCard from "./TwitterCard.jsx";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <TwitterCard/>
    <TwitterCard/>
    <TwitterCard/>
    <TwitterCard/>
    <TwitterCard/>
    <TwitterCard/>
  </React.Fragment>
);
