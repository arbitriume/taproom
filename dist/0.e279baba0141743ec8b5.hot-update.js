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

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
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

        var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this));

        _this.state = {
            clicked: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        return _this;
    }

    _createClass(LoginComponent, [{
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
        value: function handleClick() {
            debugger;
            var clicked = this.state.clicked;
            clicked = !clicked;
            this.setState({ clicked: clicked });
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(event) {
            debugger;
            if (!this.refs.megaMenu.contains(event.target)) {
                this.setState({
                    clicked: false
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu', className: 'nav_item' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_text', onClick: this.handleClick.bind(this) },
                    "Log In"
                ),
                _react2.default.createElement(
                    'div',
                    { className: "mega-menu" + " " + this.state.clicked },
                    _react2.default.createElement(
                        'div',
                        { className: 'mega-menu-content' },
                        _react2.default.createElement(
                            'p',
                            null,
                            "Log In"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiaW5kZXgiLCJoYW5kbGVDbGljayIsImJpbmQiLCJDb21wb25lbnQiLCJMb2dpbkNvbXBvbmVudCIsInN0YXRlIiwiY2xpY2tlZCIsImhhbmRsZU91dHNpZGVDbGljayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRTdGF0ZSIsImV2ZW50IiwicmVmcyIsIm1lZ2FNZW51IiwiY29udGFpbnMiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7SUFFYUEsTSxXQUFBQSxNOzs7Ozs7Ozs7OztpQ0FFQTtBQUFBOztBQUNMLGdCQUFNQyxRQUFRLENBQUMsY0FBRCxFQUFnQixVQUFoQixFQUE0QixVQUE1QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxFQUEyRCxPQUEzRCxDQUFrRSxjQUFsRSxDQUFkO0FBQ0EsZ0JBQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekM7QUFDSTtBQUNFO0FBQUE7QUFBQSwwQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLG1CQUF4QixFQUE0QyxTQUFTLE9BQUtDLFdBQUwsQ0FBaUJDLElBQWpCLFNBQTJCRixLQUEzQixDQUFyRDtBQUNLRDtBQURMOztBQUlDOzs7Ozs7O0FBTlA7QUFhRixhQWRnQixDQUFqQjs7QUFnQkEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUEwQkYsd0JBQTFCO0FBQW1DO0FBQW5DLGFBQVA7QUFDSDs7OztFQXJCdUIsZ0JBQU1NLFM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxDOzs7Ozs7Ozs7Ozs7SUFFYUMsYyxXQUFBQSxjOzs7QUFDVCw4QkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxxQkFBUztBQURBLFNBQWI7QUFHQSxjQUFLTCxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0ssa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JMLElBQXhCLE9BQTFCO0FBTlU7QUFPYjs7Ozs2Q0FFb0I7QUFDakJNLHFCQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLRixrQkFBeEMsRUFBNEQsS0FBNUQ7QUFDSDs7OytDQUVxQjtBQUNsQkMscUJBQVNFLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtILGtCQUEzQyxFQUErRCxLQUEvRDtBQUNIOzs7c0NBRWE7QUFDVjtBQUNBLGdCQUFJRCxVQUFRLEtBQUtELEtBQUwsQ0FBV0MsT0FBdkI7QUFDQUEsc0JBQVEsQ0FBQ0EsT0FBVDtBQUNBLGlCQUFLSyxRQUFMLENBQWMsRUFBQ0wsU0FBU0EsT0FBVixFQUFkO0FBQ0g7OzsyQ0FFa0JNLEssRUFBTTtBQUNyQjtBQUNBLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxRQUFuQixDQUE0QkgsTUFBTUksTUFBbEMsQ0FBTCxFQUFnRDtBQUM1QyxxQkFBS0wsUUFBTCxDQUFjO0FBQ1ZMLDZCQUFTO0FBREMsaUJBQWQ7QUFHSDtBQUNKOzs7aUNBQ1E7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssS0FBSSxVQUFULEVBQW9CLFdBQVUsVUFBOUI7QUFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxVQUF4QixFQUFtQyxTQUFTLEtBQUtMLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQTVDO0FBQ0s7QUFETCxpQkFESjtBQUlJO0FBQUE7QUFBQSxzQkFBSyxXQUFXLGNBQWMsR0FBZCxHQUFvQixLQUFLRyxLQUFMLENBQVdDLE9BQS9DO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSTtBQUFKO0FBREo7QUFESjtBQUpKLGFBREo7QUFZSDs7OztFQTlDK0IsZ0JBQU1ILFMiLCJmaWxlIjoiMC5lMjc5YmFiYTAxNDE3NDNlYzhiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL0xvZ2luQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiLyosIFwiTG9nIEluXCIqL107XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgLy88ZGl2IHJlZj1cIm1lZ2FNZW51XCIgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl9pdGVtIG5hdl90ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsaW5kZXgpfSA+XG4gICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAvKiA8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIiArIFwiIFwiICsgdGhpcy5zdGF0ZS5jbGlja2VkW2luZGV4XX0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj4qL1xuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdl9iYXJcIj57bmF2TGlua3N9PExvZ2luQ29tcG9uZW50IC8+PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBsZXQgY2xpY2tlZD10aGlzLnN0YXRlLmNsaWNrZWQ7XG4gICAgICAgIGNsaWNrZWQ9IWNsaWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IGNsaWNrZWR9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpe1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgaWYgKCF0aGlzLnJlZnMubWVnYU1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwibWVnYU1lbnVcIiBjbGFzc05hbWU9XCJuYXZfaXRlbVwiID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X3RleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9ID5cbiAgICAgICAgICAgICAgICAgICAge1wiTG9nIEluXCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1lZ2EtbWVudVwiICsgXCIgXCIgKyB0aGlzLnN0YXRlLmNsaWNrZWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2EtbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57XCJMb2cgSW5cIn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9