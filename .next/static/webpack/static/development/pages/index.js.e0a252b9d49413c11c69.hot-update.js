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
        var results = data.results;
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
  }, "form.jsx-3861671881{position:relative;padding-top:25px;text-align:center;}.searchBar.jsx-3861671881{position:relative;font-family:\"Acme\",sans-serif;width:100%;padding:20px 0 20px 40px;border:1px solid #bdbdbd;color:#000;outline:none;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.searchBar.jsx-3861671881:focus{border:1px solid #1de9b6;}.jsx-3861671881::-webkit-input-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881::-moz-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881:-ms-input-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881::placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.searchBar.jsx-3861671881:focus.jsx-3861671881::-webkit-input-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881::-moz-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881:-ms-input-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881::placeholder{color:#1de9b6;}.searchIcon.jsx-3861671881{position:absolute;z-index:9999;margin:18px 0 0 10px;}.noDisplay.jsx-3861671881{display:none;opacity:0;visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW53aXNoL0NvZGUvTXlDb2RlL21vdmllLWluZm8vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ea0IsQUFHNkIsQUFNQSxBQVdPLEFBSWQsQUFLRyxBQUlJLEFBTUwsV0FkaUIsRUFlcEIsQ0FWWixJQTFCbUIsQUFNYyxBQXdCbEIsS0FPSyxFQXBCcEIsTUFjdUIsSUE5QkgsTUFxQ3BCLE9BL0JhLElBeUJiLENBOUJBLE1BTTJCLG9CQWMzQixLQWIyQix5QkFDZCxXQUNFLGFBQ2lCLG9FQUNoQyIsImZpbGUiOiIvVXNlcnMvbGlud2lzaC9Db2RlL015Q29kZS9tb3ZpZS1pbmZvL2NvbXBvbmVudHMvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtUmVzdWx0cyBmcm9tIFwiLi9Gb3JtUmVzdWx0c1wiO1xuXG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5jbGFzc05hbWUgPSBcImZvcm1SZXN1bHRzXCI7XG4gICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIikudmFsdWU7XG5cbiAgICBpZiAodmFsID09PSBcIlwiKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuY2xhc3NOYW1lID0gXCJub0Rpc3BsYXlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBcImQ1ZWMwYTVjMzE0ZTM2MjE4NDM2ZDc0NzQ0OGQxNWZjXCI7XG5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7a2V5fSZsYW5ndWFnZT1lbi1VUyZxdWVyeT0ke3ZhbH0mcGFnZT0xJmluY2x1ZGVfYWR1bHQ9ZmFsc2VgXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICB9KVxuXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaCBFcnJvciA6LVNcIiwgZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gaWQ9XCJmb3JtXCI+XG4gICAgICA8aW1nIHNyYz1cIi9zZWFyY2guc3ZnXCIgYWx0PVwic2VhcmNoIGljb25cIiBjbGFzc05hbWU9XCJzZWFyY2hJY29uXCIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbktleVVwPXtoYW5kbGVLZXlVcH1cbiAgICAgICAgaWQ9XCJzZWFyY2hJbnB1dFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaEJhclwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYSBtb3ZpZVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPEZvcm1SZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoQmFyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDQwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hCYXI6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZGU5YjY7XG4gICAgICAgIH1cblxuICAgICAgICA6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoQmFyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICMxZGU5YjY7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoSWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgICAgbWFyZ2luOiAxOHB4IDAgMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vRGlzcGxheSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/linwish/Code/MyCode/movie-info/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.e0a252b9d49413c11c69.hot-update.js.map