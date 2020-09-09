"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _uncaughtErrorHandler = _interopRequireDefault(
  require("@sanity/base/lib/util/uncaughtErrorHandler")
);

var _generateScriptLoader = _interopRequireDefault(
  require("@sanity/base/lib/util/generateScriptLoader")
);

var _AppLoadingScreen = _interopRequireDefault(require("./AppLoadingScreen"));

var _NoJavascript = _interopRequireDefault(
  require("@sanity/base/lib/components/NoJavascript")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function assetUrl(staticPath, item) {
  var isAbsolute = item.path.match(/^https?:\/\//);

  if (isAbsolute) {
    return item.path;
  }

  var base = "".concat(staticPath, "/").concat(item.path);

  if (!item.hash) {
    return base;
  }

  var hasQuery = base.indexOf("?") !== -1;
  var separator = hasQuery ? "&" : "?";
  return "".concat(base).concat(separator).concat(item.hash);
}

function Document(props) {
  var basePath = props.basePath.replace(/\/+$/, "");
  var staticPath = "".concat(basePath).concat(props.staticPath);
  var stylesheets = props.stylesheets.map((item) =>
    /*#__PURE__*/ _react.default.createElement("link", {
      key: item.path,
      rel: "stylesheet",
      href: assetUrl(staticPath, item),
    })
  );
  stylesheets.push(
    /*#__PURE__*/ _react.default.createElement("link", {
      key: "globalcss",
      rel: "stylesheet",
      href: "/static/global.css",
    })
  );
  var subresources = props.scripts.map((item) =>
    /*#__PURE__*/ _react.default.createElement("link", {
      key: item.path,
      rel: "subresource",
      href: assetUrl(staticPath, item),
    })
  );
  var scripts = props.scripts.map((item) => assetUrl(staticPath, item));
  var scriptLoader = (0, _generateScriptLoader.default)(scripts);
  var errorHandler = (0, _uncaughtErrorHandler.default)();
  var favicons = props.favicons.map((item, index) =>
    /*#__PURE__*/ _react.default.createElement("link", {
      key: item.path,
      rel: "icon",
      href: assetUrl(staticPath, item),
    })
  );
  return /*#__PURE__*/ _react.default.createElement(
    "html",
    null,
    /*#__PURE__*/ _react.default.createElement(
      "head",
      null,
      /*#__PURE__*/ _react.default.createElement("meta", {
        charSet: props.charset,
      }),
      /*#__PURE__*/ _react.default.createElement("title", null, props.title),
      /*#__PURE__*/ _react.default.createElement("meta", {
        name: "viewport",
        content: props.viewport,
      }),
      /*#__PURE__*/ _react.default.createElement(
        "style",
        null,
        "html {background-color: #e4e8ed;}"
      ),
      stylesheets,
      subresources,
      favicons
    ),
    /*#__PURE__*/ _react.default.createElement(
      "body",
      {
        id: "sanityBody",
      },
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          id: "sanity",
        },
        /*#__PURE__*/ _react.default.createElement(_AppLoadingScreen.default, {
          text: props.loading,
        }),
        /*#__PURE__*/ _react.default.createElement(_NoJavascript.default, null)
      ),
      /*#__PURE__*/ _react.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: errorHandler,
        },
      }),
      /*#__PURE__*/ _react.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: scriptLoader,
        },
      })
    )
  );
}

var asset = _propTypes.default.shape({
  path: _propTypes.default.string.isRequired,
  hash: _propTypes.default.string,
});

Document.defaultProps = {
  basePath: "",
  charset: "utf-8",
  title: "Sanity",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  loading: "Connecting to Sanity.io",
  staticPath: "/static",
  favicons: [
    {
      path: "favicon.ico",
    },
  ],
  stylesheets: [],
  scripts: [],
};
Document.propTypes = {
  basePath: _propTypes.default.string,
  charset: _propTypes.default.string,
  title: _propTypes.default.string,
  viewport: _propTypes.default.string,
  loading: _propTypes.default.node,
  staticPath: _propTypes.default.string,
  favicons: _propTypes.default.arrayOf(asset),
  stylesheets: _propTypes.default.arrayOf(asset),
  scripts: _propTypes.default.arrayOf(asset),
};
var _default = Document;
exports.default = _default;