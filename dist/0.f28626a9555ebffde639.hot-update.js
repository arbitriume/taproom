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
     * Toggles the open/closed status of the drop down menu for logging in/signing up
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlT3BlblN0YXRlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5jaG9yIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1hQSxjLFdBQUFBLGM7OztBQUNULDhCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNO0FBREcsU0FBYjtBQUdBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBTlU7QUFPYjs7QUFFRDs7Ozs7Ozs7OzBDQUtrQjtBQUNkLGdCQUFJRixPQUFLLEtBQUtELEtBQUwsQ0FBV0MsSUFBcEI7QUFDQUEsbUJBQUssQ0FBQ0EsSUFBTjtBQUNBLGlCQUFLSSxRQUFMLENBQWM7QUFDVkosc0JBQU1BO0FBREksYUFBZDtBQUdIOztBQUVEOzs7Ozs7Ozs7b0NBTVlLLEssRUFBTztBQUNmQSxrQkFBTUMsY0FBTjtBQUNBLGlCQUFLRixRQUFMLENBQWM7QUFDVkcsd0JBQVFGLE1BQU1HO0FBREosYUFBZDtBQUdBLGlCQUFLUCxlQUFMO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxLQUFJLFdBQVQsRUFBcUIsV0FBVSxXQUEvQjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLDJCQUF4QixFQUFvRCxTQUFTLEtBQUtFLFdBQWxFO0FBQ0s7QUFETCxpQkFESjtBQUlJO0FBQ0ksMEJBQU0sS0FBS0osS0FBTCxDQUFXQyxJQURyQjtBQUVJLHdDQUFvQixLQUFLQyxlQUY3QjtBQUdJLDRCQUFRLEtBQUtGLEtBQUwsQ0FBV1EsTUFBWCxJQUFxQkU7QUFIakM7QUFKSixhQURKO0FBYUg7Ozs7RUFuRCtCLGdCQUFNQyxTIiwiZmlsZSI6IjAuZjI4NjI2YTk1NTVlYmZmZGU2MzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5NZW51ICBmcm9tICcuL0xvZ2luTWVudSc7XG5cbi8qKlxuICogVGhlIFVJIENvbXBvbmVudCByZXByZXNlbnRpbmcgdGhlIFwiTG9nIEluXCIgc2VjdGlvbiBvZiB0aGVcbiAqIG5hdmlnYXRpb24gbWVudSBiYXIuXG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW5TdGF0ZSA9IHRoaXMudG9nZ2xlT3BlblN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgb3Blbi9jbG9zZWQgc3RhdHVzIG9mIHRoZSBkcm9wIGRvd24gbWVudSBmb3IgbG9nZ2luZyBpbi9zaWduaW5nIHVwXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICB0b2dnbGVPcGVuU3RhdGUoKSB7XG4gICAgICAgIGxldCBvcGVuPXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgb3Blbj0hb3BlbjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBvcGVuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuY2hvcjogZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51MVwiIGNsYXNzTmFtZT1cImxvZ2luX2JveFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfbG9nIG5hdl9pdGVtIG5hdl90ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gPlxuICAgICAgICAgICAgICAgICAgICB7XCJMb2cgSW5cIn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPExvZ2luTWVudVxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlcXVlc3RDbG9zZT17dGhpcy50b2dnbGVPcGVuU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj17dGhpcy5zdGF0ZS5hbmNob3IgfHwgd2luZG93fVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==