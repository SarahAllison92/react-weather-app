import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-bar" id="search-form">
        <input
          type="search"
          placeholder="Pick a city.."
          className="search"
          id="search-input"
          autocomplete="off"
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
    </div>
  );
}
