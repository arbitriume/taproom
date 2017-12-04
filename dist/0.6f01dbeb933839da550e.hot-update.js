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

var _LoginComponent = __webpack_require__(38);

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
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.addEventListener('click', this.handleOutsideClick, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(index) {
            debugger;
            var clicked = this.state.clicked;
            clicked[index] = !clicked[index];
            this.setState({ clicked: clicked });
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(event) {
            debugger;
            if (!this.refs.megaMenu.contains(event.target)) {
                this.setState({
                    clicked: []
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin" /*, "Log In"*/];
            var navLinks = pages.map(function (page, index) {
                return (
                    //<div ref="megaMenu" className="nav_item" key={index}>
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'nav_item nav_text', onClick: _this2.handleClick.bind(_this2, index) },
                        page
                    )

                    /* <div className={"mega-menu" + " " + this.state.clicked[index]}>
                         <div className="mega-menu-content">
                             <p>{page}</p>
                         </div>
                     </div>
                    </div>*/

                );
            });

            return _react2.default.createElement(
                'nav',
                { className: 'nav_bar' },
                navLinks,
                _react2.default.createElement(_LoginComponent.LoginComponent, null)
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginComponent = exports.LoginComponent = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        return _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).apply(this, arguments));
    }

    _createClass(LoginComponent, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { ref: "megaMenu", className: "nav_item", key: index },
                _react2.default.createElement(
                    "a",
                    { href: "#", className: "nav_text", onClick: this.handleClick.bind(this, index) },
                    "Log In"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "mega-menu" + " " + this.state.clicked[index] },
                    _react2.default.createElement(
                        "div",
                        { className: "mega-menu-content" },
                        _react2.default.createElement(
                            "p",
                            null,
                            page
                        )
                    )
                )
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInN0YXRlIiwiY2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZU91dHNpZGVDbGljayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleCIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWZzIiwibWVnYU1lbnUiLCJjb250YWlucyIsInRhcmdldCIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiQ29tcG9uZW50IiwiTG9naW5Db21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFFYUEsTSxXQUFBQSxNOzs7QUFDVCxzQkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUztBQURBLFNBQWI7QUFHQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLE9BQTFCO0FBTlU7QUFPYjs7Ozs2Q0FFb0I7QUFDakJFLHFCQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLRixrQkFBeEMsRUFBNEQsS0FBNUQ7QUFDSDs7OytDQUVxQjtBQUNsQkMscUJBQVNFLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtILGtCQUEzQyxFQUErRCxLQUEvRDtBQUNIOzs7b0NBRVdJLEssRUFBTztBQUNmO0FBQ0EsZ0JBQUlQLFVBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QjtBQUNBQSxvQkFBUU8sS0FBUixJQUFlLENBQUNQLFFBQVFPLEtBQVIsQ0FBaEI7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUNSLFNBQVNBLE9BQVYsRUFBZDtBQUNIOzs7MkNBRWtCUyxLLEVBQU07QUFDckI7QUFDQSxnQkFBSSxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsUUFBbkIsQ0FBNEJILE1BQU1JLE1BQWxDLENBQUwsRUFBZ0Q7QUFDNUMscUJBQUtMLFFBQUwsQ0FBYztBQUNWUiw2QkFBUztBQURDLGlCQUFkO0FBR0g7QUFDSjs7O2lDQUVRO0FBQUE7O0FBQ0wsZ0JBQU1jLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELFNBQWhELEVBQTJELE9BQTNELENBQWtFLGNBQWxFLENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT1YsS0FBUCxFQUFpQjtBQUN6QztBQUNJO0FBQ0U7QUFBQTtBQUFBLDBCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsbUJBQXhCLEVBQTRDLFNBQVMsT0FBS04sV0FBTCxDQUFpQkMsSUFBakIsU0FBMkJLLEtBQTNCLENBQXJEO0FBQ0tVO0FBREw7O0FBSUM7Ozs7Ozs7QUFOUDtBQWFGLGFBZGdCLENBQWpCOztBQWdCQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQTBCRix3QkFBMUI7QUFBbUM7QUFBbkMsYUFBUDtBQUNIOzs7O0VBckR1QixnQkFBTUcsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbEM7Ozs7Ozs7Ozs7OztJQUVhQyxjLFdBQUFBLGM7Ozs7Ozs7Ozs7O2lDQUNBO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLEtBQUksVUFBVCxFQUFvQixXQUFVLFVBQTlCLEVBQXlDLEtBQUtaLEtBQTlDO0FBQ0k7QUFBQTtBQUFBLHNCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsVUFBeEIsRUFBbUMsU0FBUyxLQUFLTixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUEyQkssS0FBM0IsQ0FBNUM7QUFDSztBQURMLGlCQURKO0FBSUk7QUFBQTtBQUFBLHNCQUFLLFdBQVcsY0FBYyxHQUFkLEdBQW9CLEtBQUtSLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQk8sS0FBbkIsQ0FBcEM7QUFDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFJVTtBQUFKO0FBREo7QUFESjtBQUpKLGFBREo7QUFZSDs7OztFQWQrQixnQkFBTUMsUyIsImZpbGUiOiIwLjZmMDFkYmViOTMzODM5ZGE1NTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vTG9naW5Db21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGxldCBjbGlja2VkPXRoaXMuc3RhdGUuY2xpY2tlZDtcbiAgICAgICAgY2xpY2tlZFtpbmRleF09IWNsaWNrZWRbaW5kZXhdO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGlja2VkOiBjbGlja2VkfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KXtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmICghdGhpcy5yZWZzLm1lZ2FNZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbXCJDb21wYW55IExvZ29cIixcIkZlYXR1cmVzXCIsIFwiT3VyIFRlYW1cIiwgXCJOZXdzXCIsIFwiQ29udGFjdFwiLCBcIkFkbWluXCIvKiwgXCJMb2cgSW5cIiovXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAvLzxkaXYgcmVmPVwibWVnYU1lbnVcIiBjbGFzc05hbWU9XCJuYXZfaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X2l0ZW0gbmF2X3RleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyxpbmRleCl9ID5cbiAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgIC8qIDxkaXYgY2xhc3NOYW1lPXtcIm1lZ2EtbWVudVwiICsgXCIgXCIgKyB0aGlzLnN0YXRlLmNsaWNrZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PiovXG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2X2JhclwiPntuYXZMaW5rc308TG9naW5Db21wb25lbnQgLz48L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwibWVnYU1lbnVcIiBjbGFzc05hbWU9XCJuYXZfaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLGluZGV4KX0gPlxuICAgICAgICAgICAgICAgICAgICB7XCJMb2cgSW5cIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWVnYS1tZW51XCIgKyBcIiBcIiArIHRoaXMuc3RhdGUuY2xpY2tlZFtpbmRleF19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2EtbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cGFnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9