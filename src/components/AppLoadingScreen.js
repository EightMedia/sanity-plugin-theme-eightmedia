/* eslint-disable max-len */
import PropTypes from "prop-types";
import React from "react";

const AppLoadingScreenStyles = `
 .loader-wrapper {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    background: #bee2ea;
    color: #222;
    font-family: GT America, Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .loader-inner {
    margin: auto;
    text-align: center;
  }
  
  .loader-text: {
    display: block;
    margin-top: 12;
    font-weight: normal;
  }
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
      <div className="loader-wrapper">
        <div className="loader-inner">
          <style dangerouslySetInnerHTML={{ __html: AppLoadingScreenStyles }}/>
          <svg
            width={44}
            height={44}
            viewBox="0 0 44 44"
            stroke="#fff"
          >
            <g fill="none" fillRule="evenodd" strokeWidth={2}>
              <circle cx={22} cy={22} r={1}>
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.8s"
                  values="1; 20"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.165, 0.84, 0.44, 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="0s"
                  dur="1.8s"
                  values="1; 0"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.3, 0.61, 0.355, 1"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={22} cy={22} r={1}>
                <animate
                  attributeName="r"
                  begin="-0.9s"
                  dur="1.8s"
                  values="1; 20"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.165, 0.84, 0.44, 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="-0.9s"
                  dur="1.8s"
                  values="1; 0"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.3, 0.61, 0.355, 1"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
          <div className="loader-text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}
