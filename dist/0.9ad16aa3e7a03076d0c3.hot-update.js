webpackHotUpdate(0,{

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

        var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));

        _this.state = {
            clicked: []
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        return _this;
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin", "Log In"];
            var navLinks = pages.map(function (page, index) {
                return _react2.default.createElement(
                    "a",
                    { href: "/" + page, className: "nav_item", onClick: _this2.handleClick.bind(_this2, index), key: index },
                    page
                ), _react2.default.createElement(
                    "div",
                    { className: "mega-menu" + " " + _this2.state.clicked[index] },
                    _react2.default.createElement(
                        "div",
                        { className: "mega-menu-content" },
                        _react2.default.createElement(
                            "p",
                            null,
                            "First Menu"
                        )
                    )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBQ1Qsc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVM7QUFEQSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5VO0FBT2I7Ozs7aUNBRVE7QUFBQTs7QUFDTCxnQkFBTUUsUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsRUFBb0UsUUFBcEUsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3pDLHVCQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLE1BQU1ELElBQWYsRUFBcUIsV0FBVSxVQUEvQixFQUEwQyxTQUFTLE9BQUtOLFdBQUwsQ0FBaUJDLElBQWpCLFNBQTJCTSxLQUEzQixDQUFuRCxFQUFzRixLQUFLQSxLQUEzRjtBQUNLRDtBQURMLG1CQUdBO0FBQUE7QUFBQSxzQkFBSyxXQUFXLGNBQVksR0FBWixHQUFnQixPQUFLUixLQUFMLENBQVdDLE9BQVgsQ0FBbUJRLEtBQW5CLENBQWhDO0FBQ0U7QUFBQTtBQUFBLDBCQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERixpQkFKSjtBQVVGLGFBWGdCLENBQWpCOztBQWFBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFBMEJIO0FBQTFCLGFBQVA7QUFDSDs7OztFQTFCdUIsZ0JBQU1JLFMiLCJmaWxlIjoiMC45YWQxNmFhM2U3YTAzMDc2ZDBjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYWdlcyA9IFtcIkNvbXBhbnkgTG9nb1wiLFwiRmVhdHVyZXNcIiwgXCJPdXIgVGVhbVwiLCBcIk5ld3NcIiwgXCJDb250YWN0XCIsIFwiQWRtaW5cIiwgXCJMb2cgSW5cIl07XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvXCIgKyBwYWdlfSBjbGFzc05hbWU9XCJuYXZfaXRlbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLGluZGV4KX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICA8L2E+LFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWVnYS1tZW51XCIrXCIgXCIrdGhpcy5zdGF0ZS5jbGlja2VkW2luZGV4XX0+XG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBNZW51PC9wPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdl9iYXJcIj57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==