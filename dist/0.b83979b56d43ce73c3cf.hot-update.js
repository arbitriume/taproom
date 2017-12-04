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
            open: false
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
            var open = this.state.open;
            open = !open;
            this.setState({ open: open });
        }

        /* handleOutsideClick(event){
             if (!this.refs.megaMenu.contains(event.target)) {
                 this.setState({
                     clicked: false
                 });
             }
         }*/

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu1', className: 'nav_item' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_text', onClick: this.handleClick() },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, {
                    open: this.state.open
                })
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

        //this.handleTouchTap = this.handleTouchTap.bind(this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        return _this;
    }

    /*handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
         this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };*/

    _createClass(LoginMenu, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiTG9naW5NZW51IiwicHJvcHMiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJhbmNob3JFbCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR2FBLGMsV0FBQUEsYzs7O0FBQ1QsOEJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU07QUFERyxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5VO0FBT2I7Ozs7NkNBRW9CO0FBQ2pCRSxxQkFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0Ysa0JBQXhDLEVBQTRELEtBQTVEO0FBQ0g7OzsrQ0FFcUI7QUFDbEJDLHFCQUFTRSxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLSCxrQkFBM0MsRUFBK0QsS0FBL0Q7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUlILE9BQUssS0FBS0QsS0FBTCxDQUFXQyxJQUFwQjtBQUNBQSxtQkFBSyxDQUFDQSxJQUFOO0FBQ0EsaUJBQUtPLFFBQUwsQ0FBYyxFQUFDUCxNQUFNQSxJQUFQLEVBQWQ7QUFDSDs7QUFFRjs7Ozs7Ozs7OztpQ0FPVTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxLQUFJLFdBQVQsRUFBcUIsV0FBVSxVQUEvQjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLFVBQXhCLEVBQW1DLFNBQVMsS0FBS0MsV0FBTCxFQUE1QztBQUNLO0FBREwsaUJBREo7QUFJSTtBQUNJLDBCQUFNLEtBQUtGLEtBQUwsQ0FBV0M7QUFEckI7QUFKSixhQURKO0FBV0g7Ozs7RUEzQytCLGdCQUFNUSxTOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjFDOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkMsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBR2YsY0FBS1gsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNO0FBREcsU0FBYjs7QUFJQTtBQUNBLGNBQUtXLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCVCxJQUF4QixPQUExQjtBQVJlO0FBU2xCOztBQUVEOzs7Ozs7Ozs7Ozs2Q0FVcUI7QUFDakIsaUJBQUtLLFFBQUwsQ0FBYztBQUNWUCxzQkFBTTtBQURJLGFBQWQ7QUFHSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBRUk7QUFBQTtBQUFBO0FBQ0ksOEJBQU0sS0FBS0QsS0FBTCxDQUFXQyxJQURyQjtBQUVJLGtDQUFVLEtBQUtELEtBQUwsQ0FBV2EsUUFGekI7QUFHSSxzQ0FBYyxFQUFDQyxZQUFZLE1BQWIsRUFBcUJDLFVBQVUsUUFBL0IsRUFIbEI7QUFJSSxzQ0FBYyxFQUFDRCxZQUFZLE1BQWIsRUFBcUJDLFVBQVUsS0FBL0IsRUFKbEI7QUFLSSx3Q0FBZ0IsS0FBS0gsa0JBTHpCO0FBTUk7QUFOSjtBQVFJO0FBQUE7QUFBQTtBQUNJLDRFQUFVLGFBQVksU0FBdEIsR0FESjtBQUVJLDRFQUFVLGFBQVksaUJBQXRCLEdBRko7QUFHSSw0RUFBVSxhQUFZLFVBQXRCLEdBSEo7QUFJSSw0RUFBVSxhQUFZLFVBQXRCO0FBSko7QUFSSjtBQUZKLGFBREo7QUFvQkg7Ozs7RUFsRGtDLGdCQUFNSCxTOztrQkFBeEJDLFMiLCJmaWxlIjoiMC5iODM5NzliNTZkNDNjZTczYzNjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbk1lbnUgIGZyb20gJy4vTG9naW5NZW51JztcblxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgbGV0IG9wZW49dGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgICBvcGVuPSFvcGVuO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBvcGVufSk7XG4gICAgfVxuXG4gICAvKiBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpe1xuICAgICAgICBpZiAoIXRoaXMucmVmcy5tZWdhTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9Ki9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51MVwiIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIgPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2soKX0gPlxuICAgICAgICAgICAgICAgICAgICB7XCJMb2cgSW5cIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPExvZ2luTWVudVxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgTWVudSBmcm9tICdtYXRlcmlhbC11aS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgUG9wb3Zlciwge1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH0gZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vdGhpcy5oYW5kbGVUb3VjaFRhcCA9IHRoaXMuaGFuZGxlVG91Y2hUYXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgfTsqL1xuXG4gICAgaGFuZGxlUmVxdWVzdENsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJSZWZyZXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIkhlbHAgJmFtcDsgZmVlZGJhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2V0dGluZ3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2lnbiBvdXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==