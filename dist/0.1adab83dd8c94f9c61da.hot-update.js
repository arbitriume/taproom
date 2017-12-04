webpackHotUpdate(0,{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _LoginMenu = __webpack_require__(167);

var _LoginMenu2 = _interopRequireDefault(_LoginMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The UI Component representing the "Log In" section of the
 * navigation menu bar.
 *
 * @class
 */
var LoginComponent = exports.LoginComponent = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this));

        _this.state = {
            open: false
        };
        _this.toggleOpenState = _this.toggleOpenState.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    /**
     * Toggles the open/closed status of the drop down menu for logging in/signing up.
     *
     * @function
     */


    _createClass(LoginComponent, [{
        key: 'toggleOpenState',
        value: function toggleOpenState() {
            var open = this.state.open;
            open = !open;
            this.setState({
                open: open
            });
        }

        /**
         * Sets the anchor point for the drop down menu upon click event.
         *
         * @function
         *
         * @param event
         */

    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            event.preventDefault();
            this.setState({
                anchor: event.currentTarget
            });
            this.toggleOpenState();
        }

        /**
         * Renders Log In section of the navigation menu bar and the LoginMenu component.
         *
         * @function
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu1', className: 'login_box' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_log nav_item nav_text', onClick: this.handleClick },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, {
                    open: this.state.open,
                    handleRequestClose: this.toggleOpenState,
                    anchor: this.state.anchor || window
                })
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(168);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(285);

var _TextField2 = _interopRequireDefault(_TextField);

var _Popover = __webpack_require__(146);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The UI Component representing the drop down menu for logging in/signing up.
 *
 * @class
 */
var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu() {
        _classCallCheck(this, LoginMenu);

        var _this = _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = { isSigningUp: false };
        return _this;
    }

    /**
     * Toggles the  menu fields for logging in/signing up upon a click event.
     *
     * @function
     */


    _createClass(LoginMenu, [{
        key: 'handleClick',
        value: function handleClick() {
            var state = this.state.isSigningUp;
            state = !state;
            this.setState({
                isSigningUp: state
            });
        }

        /**
         * Renders the drop down menu for logging in/signing up.
         *
         * @function
         */

    }, {
        key: 'render',
        value: function render() {
            var confirmPass = void 0,
                userEmail = void 0,
                flexSetting = void 0;
            if (this.state.isSigningUp) {
                confirmPass = _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        label: 'Confirm Password',
                        type: 'password',
                        fullWidth: true
                    })
                );
                userEmail = _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        label: 'Email',
                        fullWidth: true
                    })
                );
                flexSetting = _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    "Already have an account?",
                    _react2.default.createElement(
                        'a',
                        { onClick: this.handleClick, href: "#", className: 'new_account' },
                        "Log In"
                    )
                );
            } else {
                confirmPass = null;
                userEmail = null;
                flexSetting = _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    "Need an account?",
                    _react2.default.createElement(
                        'a',
                        { onClick: this.handleClick, href: "#", className: 'new_account' },
                        "Sign Up"
                    )
                );
            }

            return _react2.default.createElement(
                _Popover2.default,
                {
                    open: this.props.open,
                    anchorEl: this.props.anchor,
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    onRequestClose: this.props.handleRequestClose,
                    animation: _Popover.PopoverAnimationVertical
                },
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        label: 'Username',
                        fullWidth: true
                    })
                ),
                userEmail,
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        label: 'Password',
                        type: 'password'
                    })
                ),
                confirmPass,
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(
                        _Button2.default,
                        { raised: true, disableFocusRipple: true, disableRipple: true },
                        'Log In'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'forgot_pass' },
                        "Forgot Password?"
                    )
                ),
                _react2.default.createElement('br', null),
                flexSetting
            );
        }
    }]);

    return LoginMenu;
}(_react2.default.Component);

exports.default = LoginMenu;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlT3BlblN0YXRlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5jaG9yIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsIkNvbXBvbmVudCIsIkxvZ2luTWVudSIsImlzU2lnbmluZ1VwIiwiY29uZmlybVBhc3MiLCJ1c2VyRW1haWwiLCJmbGV4U2V0dGluZyIsInByb3BzIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiaGFuZGxlUmVxdWVzdENsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTWFBLGMsV0FBQUEsYzs7O0FBQ1QsOEJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU07QUFERyxTQUFiO0FBR0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFOVTtBQU9iOztBQUVEOzs7Ozs7Ozs7MENBS2tCO0FBQ2QsZ0JBQUlGLE9BQUssS0FBS0QsS0FBTCxDQUFXQyxJQUFwQjtBQUNBQSxtQkFBSyxDQUFDQSxJQUFOO0FBQ0EsaUJBQUtJLFFBQUwsQ0FBYztBQUNWSixzQkFBTUE7QUFESSxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7Ozs7b0NBT1lLLEssRUFBTztBQUNmQSxrQkFBTUMsY0FBTjtBQUNBLGlCQUFLRixRQUFMLENBQWM7QUFDVkcsd0JBQVFGLE1BQU1HO0FBREosYUFBZDtB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O0FBQUE7QUFBQTtBQURKLGlCQXRCSjtBQXlCSSx5REF6Qko7QUEwQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxhQUF4QjtBQUNLO0FBREw7QUFESixpQkExQko7QUErQkkseURBL0JKO0FBZ0NLRTtBQWhDTCxhQURSO0FBb0NIOzs7O0VBbEdrQyxnQkFBTUwsUzs7a0JBQXhCQyxTIiwiZmlsZSI6IjAuMWFkYWI4M2RkOGM5NGY5YzYxZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5NZW51ICBmcm9tICcuL0xvZ2luTWVudSc7XG5cbi8qKlxuICogVGhlIFVJIENvbXBvbmVudCByZXByZXNlbnRpbmcgdGhlIFwiTG9nIEluXCIgc2VjdGlvbiBvZiB0aGVcbiAqIG5hdmlnYXRpb24gbWVudSBiYXIuXG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW5TdGF0ZSA9IHRoaXMudG9nZ2xlT3BlblN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgb3Blbi9jbG9zZWQgc3RhdHVzIG9mIHRoZSBkcm9wIGRvd24gbWVudSBmb3IgbG9nZ2luZyBpbi9zaWduaW5nIHVwLlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgdG9nZ2xlT3BlblN0YXRlKCkge1xuICAgICAgICBsZXQgb3Blbj10aGlzLnN0YXRlLm9wZW47XG4gICAgICAgIG9wZW49IW9wZW47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3Blbjogb3BlblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhbmNob3IgcG9pbnQgZm9yIHRoZSBkcm9wIGRvd24gbWVudSB1cG9uIGNsaWNrIGV2ZW50LlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuY2hvcjogZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIExvZyBJbiBzZWN0aW9uIG9mIHRoZSBuYXZpZ2F0aW9uIG1lbnUgYmFyIGFuZCB0aGUgTG9naW5NZW51IGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwibWVnYU1lbnUxXCIgY2xhc3NOYW1lPVwibG9naW5fYm94XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl9sb2cgbmF2X2l0ZW0gbmF2X3RleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8TG9naW5NZW51XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVxdWVzdENsb3NlPXt0aGlzLnRvZ2dsZU9wZW5TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnN0YXRlLmFuY2hvciB8fCB3aW5kb3d9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgUG9wb3Zlciwge1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH0gZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5cbi8qKlxuICogVGhlIFVJIENvbXBvbmVudCByZXByZXNlbnRpbmcgdGhlIGRyb3AgZG93biBtZW51IGZvciBsb2dnaW5nIGluL3NpZ25pbmcgdXAuXG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNTaWduaW5nVXA6IGZhbHNlfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSAgbWVudSBmaWVsZHMgZm9yIGxvZ2dpbmcgaW4vc2lnbmluZyB1cCB1cG9uIGEgY2xpY2sgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZS5pc1NpZ25pbmdVcDtcbiAgICAgICAgc3RhdGUgPSAhc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNTaWduaW5nVXA6IHN0YXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGRyb3AgZG93biBtZW51IGZvciBsb2dnaW5nIGluL3NpZ25pbmcgdXAuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb25maXJtUGFzcyx1c2VyRW1haWwsZmxleFNldHRpbmc7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNTaWduaW5nVXApIHtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzID1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIHVzZXJFbWFpbCA9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgICBmbGV4U2V0dGluZyA9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5ld19hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJMb2cgSW5cIn1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzID0gbnVsbDtcbiAgICAgICAgICAgIHVzZXJFbWFpbCA9IG51bGw7XG4gICAgICAgICAgICBmbGV4U2V0dGluZyA9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICB7XCJOZWVkIGFuIGFjY291bnQ/XCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuZXdfYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiU2lnbiBVcFwifVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnByb3BzLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ2JvdHRvbSd9fVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybVBhc3N9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJhaXNlZD17dHJ1ZX0gZGlzYWJsZUZvY3VzUmlwcGxlPXt0cnVlfSBkaXNhYmxlUmlwcGxlPXt0cnVlfT5Mb2cgSW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwiZm9yZ290X3Bhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJGb3Jnb3QgUGFzc3dvcmQ/XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge2ZsZXhTZXR0aW5nfVxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbk1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9