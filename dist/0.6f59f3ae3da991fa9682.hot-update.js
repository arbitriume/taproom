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
        value: function handleClick(index, e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJpbmRleCIsImUiLCJzZXRTdGF0ZSIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBQ1Qsc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVM7QUFEQSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5VO0FBT2I7Ozs7b0NBRVdFLEssRUFBTUMsQyxFQUFHO0FBQ2pCLGdCQUFJTCxVQUFRLEtBQUtELEtBQUwsQ0FBV0MsT0FBdkI7QUFDQUEsb0JBQVFJLEtBQVIsSUFBZSxDQUFDSixRQUFRSSxLQUFSLENBQWhCO0FBQ0EsaUJBQUtFLFFBQUwsQ0FBYyxFQUFDTixTQUFTQSxPQUFWLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQ0wsZ0JBQU1PLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELFNBQWhELEVBQTJELE9BQTNELEVBQW9FLFFBQXBFLENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT04sS0FBUCxFQUFpQjtBQUN6Qyx1QkFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxNQUFNTSxJQUFmLEVBQXFCLFdBQVUsVUFBL0IsRUFBMEMsU0FBUyxPQUFLVCxXQUFMLENBQWlCQyxJQUFqQixTQUEyQkUsS0FBM0IsQ0FBbkQsRUFBc0YsS0FBS0EsS0FBM0Y7QUFDS007QUFETCxtQkFHQTtBQUFBO0FBQUEsc0JBQUssV0FBVyxjQUFZLEdBQVosR0FBZ0IsT0FBS1gsS0FBTCxDQUFXQyxPQUFYLENBQW1CSSxLQUFuQixDQUFoQztBQUNFO0FBQUE7QUFBQSwwQkFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsaUJBSko7QUFVRixhQVhnQixDQUFqQjs7QUFhQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQTBCSTtBQUExQixhQUFQO0FBQ0g7Ozs7RUFoQ3VCLGdCQUFNRyxTIiwiZmlsZSI6IjAuNmY1OWYzYWUzZGE5OTFmYTk2ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xpY2tlZDogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGluZGV4LGUpIHtcbiAgICAgICAgbGV0IGNsaWNrZWQ9dGhpcy5zdGF0ZS5jbGlja2VkO1xuICAgICAgICBjbGlja2VkW2luZGV4XT0hY2xpY2tlZFtpbmRleF07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IGNsaWNrZWR9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiLCBcIkxvZyBJblwiXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICA8YSBocmVmPXtcIi9cIiArIHBhZ2V9IGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsaW5kZXgpfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgIDwvYT4sXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIitcIiBcIit0aGlzLnN0YXRlLmNsaWNrZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IE1lbnU8L3A+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2X2JhclwiPntuYXZMaW5rc308L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9