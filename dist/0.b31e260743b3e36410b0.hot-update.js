webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    \n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n\n.main_header {\n    background-color: #756C6A;\n}", ""]);

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
                    { href: "/" + page, 'class': '' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLHdCQUF3QixnQ0FBZ0Msc0JBQXNCLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHOztBQUUxSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07Ozs7Ozs7Ozs7O2lDQUNBO0FBQ0wsZ0JBQU1DLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELFNBQWhELEVBQTJELE9BQTNELENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLGdCQUFRO0FBQ2hDLHVCQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLE1BQU1DLElBQWYsRUFBcUIsU0FBTSxFQUEzQjtBQUNLQTtBQURMLGlCQURKO0FBS0YsYUFOZ0IsQ0FBakI7O0FBUUEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFNBQU0sU0FBWDtBQUFzQkY7QUFBdEIsYUFBUDtBQUNIOzs7O0VBWnVCLGdCQUFNRyxTIiwiZmlsZSI6IjAuYjMxZTI2MDc0M2IzZTM2NDEwYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZfYmFyIHtcXG4gICAgXFxuICAgIG1hcmdpbjoxMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5tYWluX2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTZDNkE7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi9zdHlsZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gWydDb21wYW55IExvZ28nLCdGZWF0dXJlcycsICdPdXIgVGVhbScsICdOZXdzJywgJ0NvbnRhY3QnLCAnQWRtaW4nXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAocGFnZSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICA8YSBocmVmPXtcIi9cIiArIHBhZ2V9IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3M9J25hdl9iYXInPntuYXZMaW5rc308L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9