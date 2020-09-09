"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    background: "#bee2ea",
    color: "#222",
  },
  inner: {
    margin: "auto",
    textAlign: "center",
  },
  text: {
    display: "block",
    marginTop: 12,
    fontWeight: "normal",
  },
};

const AppLoadingScreen = ({ text }) =>
  /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      style: styles.wrapper,
    },
    /*#__PURE__*/ _react.default.createElement(
      "div",
      {
        style: styles.inner,
      },
      /*#__PURE__*/ _react.default.createElement("img", {
        src: "/static/puff.svg",
        width: 44,
        height: 44,
      }),
      /*#__PURE__*/ _react.default.createElement(
        "span",
        {
          style: styles.text,
        },
        text
      )
    )
  );

var _default = AppLoadingScreen;
exports.default = _default;
