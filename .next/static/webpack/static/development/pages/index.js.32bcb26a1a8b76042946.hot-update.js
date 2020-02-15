webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormResults */ "./components/FormResults.js");

var _jsxFileName = "/Users/linwish/Code/MyCode/movie-info/components/Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Form = function Form(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      results = _React$useState2[0],
      setResults = _React$useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  var handleKeyUp = function handleKeyUp() {
    document.getElementById("results").className = "formResults";
    var val = document.getElementById("searchInput").value;

    if (val === "") {
      document.getElementById("results").className = "noDisplay";
    }

    var key = "d5ec0a5c314e36218436d747448d15fc";
    fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(key, "&language=en-US&query=").concat(val, "&page=1&include_adult=false")).then(function (response) {
      if (response.status !== 200) {
        console.log("Error: " + response.status);
        return;
      }

      response.json().then(function (data) {
        var newResults = data.results;
        setResults(newResults);
      });
    })["catch"](function (err) {
      console.log("Fetch Error :-S", err);
    });
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    id: "form",
    className: "jsx-3861671881",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/search.svg",
    alt: "search icon",
    className: "jsx-3861671881" + " " + "searchIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("input", {
    onKeyUp: handleKeyUp,
    id: "searchInput",
    type: "text",
    placeholder: "Search a movie",
    required: true,
    className: "jsx-3861671881" + " " + "searchBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_FormResults__WEBPACK_IMPORTED_MODULE_3__["default"], {
    results: results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3861671881",
    __self: this
  }, "form.jsx-3861671881{position:relative;padding-top:25px;text-align:center;}.searchBar.jsx-3861671881{position:relative;font-family:\"Acme\",sans-serif;width:100%;padding:20px 0 20px 40px;border:1px solid #bdbdbd;color:#000;outline:none;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.searchBar.jsx-3861671881:focus{border:1px solid #1de9b6;}.jsx-3861671881::-webkit-input-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881::-moz-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881:-ms-input-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881::placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.searchBar.jsx-3861671881:focus.jsx-3861671881::-webkit-input-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881::-moz-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881:-ms-input-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881::placeholder{color:#1de9b6;}.searchIcon.jsx-3861671881{position:absolute;z-index:9999;margin:18px 0 0 10px;}.noDisplay.jsx-3861671881{display:none;opacity:0;visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW53aXNoL0NvZGUvTXlDb2RlL21vdmllLWluZm8vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ea0IsQUFHNkIsQUFNQSxBQVdPLEFBSWQsQUFLRyxBQUlJLEFBTUwsV0FkaUIsRUFlcEIsQ0FWWixJQTFCbUIsQUFNYyxBQXdCbEIsS0FPSyxFQXBCcEIsTUFjdUIsSUE5QkgsTUFxQ3BCLE9BL0JhLElBeUJiLENBOUJBLE1BTTJCLG9CQWMzQixLQWIyQix5QkFDZCxXQUNFLGFBQ2lCLG9FQUNoQyIsImZpbGUiOiIvVXNlcnMvbGlud2lzaC9Db2RlL015Q29kZS9tb3ZpZS1pbmZvL2NvbXBvbmVudHMvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtUmVzdWx0cyBmcm9tIFwiLi9Gb3JtUmVzdWx0c1wiO1xuXG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5jbGFzc05hbWUgPSBcImZvcm1SZXN1bHRzXCI7XG4gICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIikudmFsdWU7XG5cbiAgICBpZiAodmFsID09PSBcIlwiKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuY2xhc3NOYW1lID0gXCJub0Rpc3BsYXlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBcImQ1ZWMwYTVjMzE0ZTM2MjE4NDM2ZDc0NzQ0OGQxNWZjXCI7XG5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7a2V5fSZsYW5ndWFnZT1lbi1VUyZxdWVyeT0ke3ZhbH0mcGFnZT0xJmluY2x1ZGVfYWR1bHQ9ZmFsc2VgXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3UmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICBzZXRSZXN1bHRzKG5ld1Jlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG5cbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoIEVycm9yIDotU1wiLCBlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBpZD1cImZvcm1cIj5cbiAgICAgIDxpbWcgc3JjPVwiL3NlYXJjaC5zdmdcIiBhbHQ9XCJzZWFyY2ggaWNvblwiIGNsYXNzTmFtZT1cInNlYXJjaEljb25cIiAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIG9uS2V5VXA9e2hhbmRsZUtleVVwfVxuICAgICAgICBpZD1cInNlYXJjaElucHV0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoQmFyXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhIG1vdmllXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgIC8+XG4gICAgICA8Rm9ybVJlc3VsdHMgcmVzdWx0cz17cmVzdWx0c30gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hCYXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHggNDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2Utb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaEJhcjpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFkZTliNjtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hCYXI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogIzFkZTliNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hJY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgICBtYXJnaW46IDE4cHggMCAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9EaXNwbGF5IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdfQ== */\n/*@ sourceURL=/Users/linwish/Code/MyCode/movie-info/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.32bcb26a1a8b76042946.hot-update.js.map