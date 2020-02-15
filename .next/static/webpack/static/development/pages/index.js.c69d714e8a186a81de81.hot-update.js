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
        console.log(results);
        setResults(results);
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
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "/search.svg",
    alt: "search icon",
    className: "jsx-3861671881" + " " + "searchIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 45
    },
    __self: this
  }), __jsx(_FormResults__WEBPACK_IMPORTED_MODULE_3__["default"], {
    results: results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3861671881",
    __self: this
  }, "form.jsx-3861671881{position:relative;padding-top:25px;text-align:center;}.searchBar.jsx-3861671881{position:relative;font-family:\"Acme\",sans-serif;width:100%;padding:20px 0 20px 40px;border:1px solid #bdbdbd;color:#000;outline:none;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.searchBar.jsx-3861671881:focus{border:1px solid #1de9b6;}.jsx-3861671881::-webkit-input-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881::-moz-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881:-ms-input-placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.jsx-3861671881::placeholder{color:#000;-webkit-transition:all 0.35s ease-out;transition:all 0.35s ease-out;}.searchBar.jsx-3861671881:focus.jsx-3861671881::-webkit-input-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881::-moz-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881:-ms-input-placeholder{color:#1de9b6;}.searchBar.jsx-3861671881:focus.jsx-3861671881::placeholder{color:#1de9b6;}.searchIcon.jsx-3861671881{position:absolute;z-index:9999;margin:18px 0 0 10px;}.noDisplay.jsx-3861671881{display:none;opacity:0;visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW53aXNoL0NvZGUvTXlDb2RlL21vdmllLWluZm8vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHNkIsQUFNQSxBQVdPLEFBSWQsQUFLRyxBQUlJLEFBTUwsV0FkaUIsRUFlcEIsQ0FWWixJQTFCbUIsQUFNYyxBQXdCbEIsS0FPSyxFQXBCcEIsTUFjdUIsSUE5QkgsTUFxQ3BCLE9BL0JhLElBeUJiLENBOUJBLE1BTTJCLG9CQWMzQixLQWIyQix5QkFDZCxXQUNFLGFBQ2lCLG9FQUNoQyIsImZpbGUiOiIvVXNlcnMvbGlud2lzaC9Db2RlL015Q29kZS9tb3ZpZS1pbmZvL2NvbXBvbmVudHMvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtUmVzdWx0cyBmcm9tIFwiLi9Gb3JtUmVzdWx0c1wiO1xuXG5jb25zdCBGb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5jbGFzc05hbWUgPSBcImZvcm1SZXN1bHRzXCI7XG4gICAgbGV0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIikudmFsdWU7XG5cbiAgICBpZiAodmFsID09PSBcIlwiKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuY2xhc3NOYW1lID0gXCJub0Rpc3BsYXlcIjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBcImQ1ZWMwYTVjMzE0ZTM2MjE4NDM2ZDc0NzQ0OGQxNWZjXCI7XG5cbiAgICBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7a2V5fSZsYW5ndWFnZT1lbi1VUyZxdWVyeT0ke3ZhbH0mcGFnZT0xJmluY2x1ZGVfYWR1bHQ9ZmFsc2VgXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcblxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2ggRXJyb3IgOi1TXCIsIGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVwiPlxuICAgICAgPGltZyBzcmM9XCIvc2VhcmNoLnN2Z1wiIGFsdD1cInNlYXJjaCBpY29uXCIgY2xhc3NOYW1lPVwic2VhcmNoSWNvblwiIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgb25LZXlVcD17aGFuZGxlS2V5VXB9XG4gICAgICAgIGlkPVwic2VhcmNoSW5wdXRcIlxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hCYXJcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGEgbW92aWVcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICAgIDxGb3JtUmVzdWx0cyByZXN1bHRzPXtyZXN1bHRzfSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaEJhciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFjbWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCA0MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoQmFyOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWRlOWI2O1xuICAgICAgICB9XG5cbiAgICAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2Utb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaEJhcjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAjMWRlOWI2O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaEljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgIG1hcmdpbjogMThweCAwIDAgMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub0Rpc3BsYXkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl19 */\n/*@ sourceURL=/Users/linwish/Code/MyCode/movie-info/components/Form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.c69d714e8a186a81de81.hot-update.js.map