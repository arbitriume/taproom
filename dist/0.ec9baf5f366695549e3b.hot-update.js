webpackHotUpdate(0,{

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

var _LoginMenu = __webpack_require__(39);

var _LoginMenu2 = _interopRequireDefault(_LoginMenu);

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
            var clicked = this.state.clicked;
            clicked = !clicked;
            this.setState({ clicked: clicked });
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(event) {
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
                { ref: 'megaMenu1', className: 'nav_item' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_text', onClick: _LoginMenu2.default.handleTouchTap.bind(this) },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, null)
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(117);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Menu = __webpack_require__(185);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(114);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu(props) {
        _classCallCheck(this, LoginMenu);

        var _this = _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this, props));

        _this.state = {
            open: false
        };

        _this.handleTouchTap = _this.handleTouchTap.bind(_this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        return _this;
    }

    _createClass(LoginMenu, [{
        key: 'handleTouchTap',
        value: function handleTouchTap(event) {
            // This prevents ghost click.
            event.preventDefault();

            this.setState({
                open: true,
                anchorEl: event.currentTarget
            });
        }
    }, {
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_RaisedButton2.default, {
                    onClick: this.handleTouchTap,
                    label: 'Click me'
                }),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.state.open,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.handleRequestClose,
                        animation: _Popover.PopoverAnimationVertical
                    },
                    _react2.default.createElement(
                        _Menu2.default,
                        null,
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help & feedback' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
                    )
                )
            );
        }
    }]);

    return LoginMenu;
}(_react2.default.Component);

exports.default = LoginMenu;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJjbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWZzIiwibWVnYU1lbnUiLCJjb250YWlucyIsInRhcmdldCIsImhhbmRsZVRvdWNoVGFwIiwiQ29tcG9uZW50IiwiTG9naW5NZW51IiwicHJvcHMiLCJvcGVuIiwiaGFuZGxlUmVxdWVzdENsb3NlIiwicHJldmVudERlZmF1bHQiLCJhbmNob3JFbCIsImN1cnJlbnRUYXJnZXQiLCJob3Jpem9udGFsIiwidmVydGljYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdhQSxjLFdBQUFBLGM7OztBQUNULDhCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFOVTtBQU9iOzs7OzZDQUVvQjtBQUNqQkUscUJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLGtCQUF4QyxFQUE0RCxLQUE1RDtBQUNIOzs7K0NBRXFCO0FBQ2xCQyxxQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsa0JBQTNDLEVBQStELEtBQS9EO0FBQ0g7OztzQ0FFYTtBQUNWLGdCQUFJSCxVQUFRLEtBQUtELEtBQUwsQ0FBV0MsT0FBdkI7QUFDQUEsc0JBQVEsQ0FBQ0EsT0FBVDtBQUNBLGlCQUFLTyxRQUFMLENBQWMsRUFBQ1AsU0FBU0EsT0FBVixFQUFkO0FBQ0g7OzsyQ0FFa0JRLEssRUFBTTtBQUNyQixnQkFBSSxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsUUFBbkIsQ0FBNEJILE1BQU1JLE1BQWxDLENBQUwsRUFBZ0Q7QUFDNUMscUJBQUtMLFFBQUwsQ0FBYztBQUNWUCw2QkFBUztBQURDLGlCQUFkO0FBR0g7QUFDSjs7O2lDQUNRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLEtBQUksV0FBVCxFQUFxQixXQUFVLFVBQS9CO0FBQ0k7QUFBQTtBQUFBLHNCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsVUFBeEIsRUFBbUMsU0FBUyxvQkFBVWEsY0FBVixDQUF5QlgsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBNUM7QUFDSztBQURMLGlCQURKO0FBSUk7QUFKSixhQURKO0FBU0g7Ozs7RUF6QytCLGdCQUFNWSxTOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjFDOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkMsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBR2YsY0FBS2pCLEtBQUwsR0FBYTtBQUNUa0Isa0JBQU07QUFERyxTQUFiOztBQUlBLGNBQUtKLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQlgsSUFBcEIsT0FBdEI7QUFDQSxjQUFLZ0Isa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JoQixJQUF4QixPQUExQjtBQVJlO0FBU2xCOzs7O3VDQUVjTSxLLEVBQU87QUFDbEI7QUFDQUEsa0JBQU1XLGNBQU47O0FBRUEsaUJBQUtaLFFBQUwsQ0FBYztBQUNWVSxzQkFBTSxJQURJO0FBRVZHLDBCQUFVWixNQUFNYTtBQUZOLGFBQWQ7QUFJSDs7OzZDQUVvQjtBQUNqQixpQkFBS2QsUUFBTCxDQUFjO0FBQ1ZVLHNCQUFNO0FBREksYUFBZDtBQUdIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDZCQUFTLEtBQUtKLGNBRGxCO0FBRUksMkJBQU07QUFGVixrQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJLDhCQUFNLEtBQUtkLEtBQUwsQ0FBV2tCLElBRHJCO0FBRUksa0NBQVUsS0FBS2xCLEtBQUwsQ0FBV3FCLFFBRnpCO0FBR0ksc0NBQWMsRUFBQ0UsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLFFBQS9CLEVBSGxCO0FBSUksc0NBQWMsRUFBQ0QsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLEtBQS9CLEVBSmxCO0FBS0ksd0NBQWdCLEtBQUtMLGtCQUx6QjtBQU1JO0FBTko7QUFRSTtBQUFBO0FBQUE7QUFDSSw0RUFBVSxhQUFZLFNBQXRCLEdBREo7QUFFSSw0RUFBVSxhQUFZLGlCQUF0QixHQUZKO0FBR0ksNEVBQVUsYUFBWSxVQUF0QixHQUhKO0FBSUksNEVBQVUsYUFBWSxVQUF0QjtBQUpKO0FBUko7QUFMSixhQURKO0FBdUJIOzs7O0VBckRrQyxnQkFBTUosUzs7a0JBQXhCQyxTIiwiZmlsZSI6IjAuZWM5YmFmNWYzNjY2OTU1NDllM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5NZW51ICBmcm9tICcuL0xvZ2luTWVudSc7XG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGxldCBjbGlja2VkPXRoaXMuc3RhdGUuY2xpY2tlZDtcbiAgICAgICAgY2xpY2tlZD0hY2xpY2tlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2xpY2tlZDogY2xpY2tlZH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU91dHNpZGVDbGljayhldmVudCl7XG4gICAgICAgIGlmICghdGhpcy5yZWZzLm1lZ2FNZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51MVwiIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIgPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfdGV4dFwiIG9uQ2xpY2s9e0xvZ2luTWVudS5oYW5kbGVUb3VjaFRhcC5iaW5kKHRoaXMpfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8TG9naW5NZW51IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuaW1wb3J0IFBvcG92ZXIsIHtQb3BvdmVyQW5pbWF0aW9uVmVydGljYWx9IGZyb20gJ21hdGVyaWFsLXVpL1BvcG92ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZVRvdWNoVGFwID0gdGhpcy5oYW5kbGVUb3VjaFRhcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvdWNoVGFwfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNsaWNrIG1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJSZWZyZXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIkhlbHAgJmFtcDsgZmVlZGJhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2V0dGluZ3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2lnbiBvdXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==