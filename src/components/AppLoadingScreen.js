/* eslint-disable max-len */
import PropTypes from "prop-types";
import React from "react";
import { Loader } from "./Loader";

const styles = `
.wrapper {
  height: "100vh";
  width: "100vw";
  position: "absolute";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: "flex";
  background: "#bee2ea";
  color: "#222";
},

.inner {
  margin: "auto";
  textAlign: "center";
}

.text {
  display: "block";
  marginTop: 12;
  fontWeight: "normal";
},
`;

export default class AppLoadingScreen extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: "Loading Content Studio",
  };

  render() {
    return (
      <div className="wrapper">
        <style type="text/css">{styles}</style>
        <div className="inner">
          <Loader />
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
