webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: 200px repeat(6, 1fr);\n\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n\n.nav_item {\n    //background-color: #7F26E9;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n    //padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-size: 150%;\n}\n\n.nav_page:hover {\n    color: #FFFFFF;\n}\n\n.main_header {\n    background-color: #4A4848;\n}", ""]);

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
        key: "render",
        value: function render() {
            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin", "Log In"];
            var navLinks = pages.map(function (page, index) {
                return _react2.default.createElement(
                    "a",
                    { href: "/" + page, "class": "nav_item", key: index },
                    page
                );
            });

            return _react2.default.createElement(
                "nav",
                { "class": "nav_bar" },
                navLinks
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSxtQ0FBb0Msb0JBQW9CLHFCQUFxQixrREFBa0Qsb0JBQW9CLGdDQUFnQyxzQkFBc0IsR0FBRyxlQUFlLGtDQUFrQyx5QkFBeUIsNEJBQTRCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLHdCQUF3QiwyQkFBMkIsc0JBQXNCLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRzs7QUFFcmlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7aUNBQ0E7QUFDTCxnQkFBTUMsUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsRUFBb0UsUUFBcEUsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3pDLHVCQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLE1BQU1ELElBQWYsRUFBcUIsU0FBTSxVQUEzQixFQUFzQyxLQUFLQyxLQUEzQztBQUNLRDtBQURMLGlCQURKO0FBS0YsYUFOZ0IsQ0FBakI7O0FBUUEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFNBQU0sU0FBWDtBQUFzQkY7QUFBdEIsYUFBUDtBQUNIOzs7O0VBWnVCLGdCQUFNSSxTIiwiZmlsZSI6IjAuZjk0NmVhODdjYTdlNzI2MDVmYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZfYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggcmVwZWF0KDYsIDFmcik7XFxuXFxuICAgIG1hcmdpbjoxMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5uYXZfaXRlbSB7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzdGMjZFOTtcXG4gICAgZm9udC1mYW1pbHk6IEFyY29uO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjQ0ZDRUNFO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAvL3BhZGRpbmc6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn1cXG5cXG4ubmF2X3BhZ2U6aG92ZXIge1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLm1haW5faGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBNDg0ODtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9tYWluL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbXCJDb21wYW55IExvZ29cIixcIkZlYXR1cmVzXCIsIFwiT3VyIFRlYW1cIiwgXCJOZXdzXCIsIFwiQ29udGFjdFwiLCBcIkFkbWluXCIsIFwiTG9nIEluXCJdO1xuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiL1wiICsgcGFnZX0gY2xhc3M9XCJuYXZfaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzPVwibmF2X2JhclwiPntuYXZMaW5rc308L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9