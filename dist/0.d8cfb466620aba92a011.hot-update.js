webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: 100px 100px 100px;\n\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n\n.nav_page {\n    \n}\n\n.main_header {\n    background-color: #756C6A;\n}", ""]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = exports.NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: 'render',
        value: function render() {
            var pages = ['Company Logo', 'Features', 'Our Team', 'News', 'Contact', 'Admin'];
            var navLinks = pages.map(function (page) {
                return _react2.default.createElement(
                    'a',
                    { href: "/" + page, 'class': 'nav_page' },
                    page
                );
            });

            return _react2.default.createElement(
                'nav',
                { 'class': 'nav_bar' },
                navLinks
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLG9CQUFvQixxQkFBcUIsK0NBQStDLG9CQUFvQixnQ0FBZ0Msc0JBQXNCLEdBQUcsZUFBZSxTQUFTLGtCQUFrQixnQ0FBZ0MsR0FBRzs7QUFFdFI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7Ozs7SUFFYUEsTSxXQUFBQSxNOzs7Ozs7Ozs7OztpQ0FDQTtBQUNMLGdCQUFNQyxRQUFRLENBQUMsY0FBRCxFQUFnQixVQUFoQixFQUE0QixVQUE1QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxFQUEyRCxPQUEzRCxDQUFkO0FBQ0EsZ0JBQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVSxnQkFBUTtBQUNoQyx1QkFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxNQUFNQyxJQUFmLEVBQXFCLFNBQU0sVUFBM0I7QUFDS0E7QUFETCxpQkFESjtBQUtGLGFBTmdCLENBQWpCOztBQVFBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxTQUFNLFNBQVg7QUFBc0JGO0FBQXRCLGFBQVA7QUFDSDs7OztFQVp1QixnQkFBTUcsUyIsImZpbGUiOiIwLmQ4Y2ZiNDY2NjIwYWJhOTJhMDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2X2JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4IDEwMHB4O1xcblxcbiAgICBtYXJnaW46MTJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubmF2X3BhZ2Uge1xcbiAgICBcXG59XFxuXFxuLm1haW5faGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NkM2QTtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9tYWluL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbJ0NvbXBhbnkgTG9nbycsJ0ZlYXR1cmVzJywgJ091ciBUZWFtJywgJ05ld3MnLCAnQ29udGFjdCcsICdBZG1pbiddO1xuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IHBhZ2VzLm1hcChwYWdlID0+IHtcbiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiL1wiICsgcGFnZX0gY2xhc3M9XCJuYXZfcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzPSduYXZfYmFyJz57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==