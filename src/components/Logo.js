import React from "react";
import config from "config:sanity";

const styles = `
  .logoWrapper {
    display: flex;
    align-items: center;
  }
  
  .logoImage {
    margin-right: 8px;
  }
  
  .logoName {
    font-weight: 500;
  }
`

const Logo = (props) => (
  <span className="logoWrapper">
    <style type="text/css">{styles}</style>
    <svg width={122} height={80} viewBox="0 0 122 80" className="logoImage">
      <path fill="none" d="M0 0h122v80H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.98 79.998l21.547-.006L85.44 0H63.893L46.98 79.998zM83.448 80h21.547L121.905.01 100.359 0 83.448 80zM41.929 33.339l-18.237-.006 3.881-18.331 18.228.002-3.872 18.335zM17 64.997h18.23l3.882-18.33H20.873L17 64.996z"
        fill="white"
      />
    </svg>

    <span className="logoName">{config.project.name}</span>
  </span>
);

export default Logo;
