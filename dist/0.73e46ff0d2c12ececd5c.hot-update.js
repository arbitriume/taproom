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
        key: "handleClick",
        value: function handleClick(index) {
            var clicked = this.state.clicked;
            clicked[index] = !clicked[index];
            this.setState({ clicked: clicked });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin", "Log In"];
            var navLinks = pages.map(function (page, index) {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "/" + page, className: "nav_item", onClick: _this2.handleClick.bind(_this2, index), key: index },
                        page
                    ),
                    ",",
                    _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJpbmRleCIsInNldFN0YXRlIiwicGFnZXMiLCJuYXZMaW5rcyIsIm1hcCIsInBhZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFYUEsTSxXQUFBQSxNOzs7QUFDVCxzQkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUztBQURBLFNBQWI7QUFHQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBTlU7QUFPYjs7OztvQ0FFV0UsSyxFQUFPO0FBQ2YsZ0JBQUlKLFVBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QjtBQUNBQSxvQkFBUUksS0FBUixJQUFlLENBQUNKLFFBQVFJLEtBQVIsQ0FBaEI7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUNMLFNBQVNBLE9BQVYsRUFBZDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFDTCxnQkFBTU0sUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsRUFBb0UsUUFBcEUsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPTCxLQUFQLEVBQWlCO0FBQ3pDLHVCQUNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSwwQkFBRyxNQUFNLE1BQU1LLElBQWYsRUFBcUIsV0FBVSxVQUEvQixFQUEwQyxTQUFTLE9BQUtSLFdBQUwsQ0FBaUJDLElBQWpCLFNBQTJCRSxLQUEzQixDQUFuRCxFQUFzRixLQUFLQSxLQUEzRjtBQUNLSztBQURMLHFCQURGO0FBQUE7QUFJRTtBQUFBO0FBQUEsMEJBQUssV0FBVyxjQUFZLEdBQVosR0FBZ0IsT0FBS1YsS0FBTCxDQUFXQyxPQUFYLENBQW1CSSxLQUFuQixDQUFoQztBQUNFO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREY7QUFKRixpQkFESjtBQVlGLGFBYmdCLENBQWpCOztBQWVBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFBMEJHO0FBQTFCLGFBQVA7QUFDSDs7OztFQWxDdUIsZ0JBQU1HLFMiLCJmaWxlIjoiMC43M2U0NmZmMGQyYzEyZWNlY2Q1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgbGV0IGNsaWNrZWQ9dGhpcy5zdGF0ZS5jbGlja2VkO1xuICAgICAgICBjbGlja2VkW2luZGV4XT0hY2xpY2tlZFtpbmRleF07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IGNsaWNrZWR9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiLCBcIkxvZyBJblwiXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIi9cIiArIHBhZ2V9IGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsaW5kZXgpfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICA8L2E+LFxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIitcIiBcIit0aGlzLnN0YXRlLmNsaWNrZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2EtbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBNZW51PC9wPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdl9iYXJcIj57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==