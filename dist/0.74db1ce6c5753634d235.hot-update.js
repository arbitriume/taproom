webpackHotUpdate(0,{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NavBar = __webpack_require__(33);

var _styles = __webpack_require__(34);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WelcomePage = function (_React$Component) {
    _inherits(WelcomePage, _React$Component);

    function WelcomePage() {
        _classCallCheck(this, WelcomePage);

        return _possibleConstructorReturn(this, (WelcomePage.__proto__ || Object.getPrototypeOf(WelcomePage)).apply(this, arguments));
    }

    _createClass(WelcomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'main_header' },
                _react2.default.createElement(_NavBar.NavBar, null)
            );
        }
    }]);

    return WelcomePage;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(WelcomePage, null), document.getElementById("app"));

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
                    { href: "/" + page, className: "nav_item", key: index },
                    page
                );
            });

            return _react2.default.createElement(
                "nav",
                { className: "nav_bar" },
                navLinks
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJXZWxjb21lUGFnZSIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJOYXZCYXIiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7Ozs7Ozs7aUNBQ087QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxhQUFmO0FBQ0k7QUFESixhQURKO0FBS0g7Ozs7RUFQcUIsZ0JBQU1DLFM7O0FBVWhDLG1CQUFTQyxNQUFULENBQWdCLDhCQUFDLFdBQUQsT0FBaEIsRUFBaUNDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBakMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7OztJQUVhQyxNLFdBQUFBLE07Ozs7Ozs7Ozs7O2lDQUNBO0FBQ0wsZ0JBQU1DLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELFNBQWhELEVBQTJELE9BQTNELEVBQW9FLFFBQXBFLENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN6Qyx1QkFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxNQUFNRCxJQUFmLEVBQXFCLFdBQVUsVUFBL0IsRUFBMEMsS0FBS0MsS0FBL0M7QUFDS0Q7QUFETCxpQkFESjtBQUtGLGFBTmdCLENBQWpCOztBQVFBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFBMEJGO0FBQTFCLGFBQVA7QUFDSDs7OztFQVp1QixnQkFBTU4sUyIsImZpbGUiOiIwLjc0ZGIxY2U2YzU3NTM2MzRkMjM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyJztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5cbmNsYXNzIFdlbGNvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPFdlbGNvbWVQYWdlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYWdlcyA9IFtcIkNvbXBhbnkgTG9nb1wiLFwiRmVhdHVyZXNcIiwgXCJPdXIgVGVhbVwiLCBcIk5ld3NcIiwgXCJDb250YWN0XCIsIFwiQWRtaW5cIiwgXCJMb2cgSW5cIl07XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvXCIgKyBwYWdlfSBjbGFzc05hbWU9XCJuYXZfaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdl9iYXJcIj57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==