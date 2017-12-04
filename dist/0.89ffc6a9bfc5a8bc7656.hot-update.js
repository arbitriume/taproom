webpackHotUpdate(0,{

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

var _TextField = __webpack_require__(207);

var _TextField2 = _interopRequireDefault(_TextField);

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu() {
        _classCallCheck(this, LoginMenu);

        return _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).apply(this, arguments));
    }

    _createClass(LoginMenu, [{
        key: 'render',


        /* constructor(props) {
             super(props);
              //this.state = {
                // this.open: this.props.open
             //};
              //this.handleTouchTap = this.handleTouchTap.bind(this);
             //this.handleRequestClose = this.handleRequestClose.bind(this);
         }
          /*handleTouchTap(event) {
             // This prevents ghost click.
             event.preventDefault();
              this.setState({
                 open: true,
                 anchorEl: event.currentTarget,
             });
         };*/

        /*handleRequestClose() {
            this.setState({
                open: false,
            });
        };*/

        value: function render() {
            debugger;

            return _react2.default.createElement(
                _Popover2.default,
                {
                    open: this.props.open,
                    anchorEl: this.props.anchor,
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    targetOrigin: { horizontal: 'middle', vertical: 'top' },
                    canAutoPosition: true,
                    onRequestClose: this.props.handleRequestClose,
                    animation: _Popover.PopoverAnimationVertical
                },
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        floatingLabelText: 'Username'
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        floatingLabelText: 'Password',
                        type: 'password'
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_RaisedButton2.default, { label: 'Log In' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'forgot_pass' },
                        "Forgot Password?"
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    "Need an account?",
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'new_account' },
                        "Sign Up"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJwcm9wcyIsIm9wZW4iLCJhbmNob3IiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7QUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJDOzs7Ozs7aUNBTVM7QUFDTDs7QUFFQSxtQkFFUTtBQUFBO0FBQUE7QUFDSSwwQkFBTSxLQUFLQyxLQUFMLENBQVdDLElBRHJCO0FBRUksOEJBQVUsS0FBS0QsS0FBTCxDQUFXRSxNQUZ6QjtBQUdJLGtDQUFjLEVBQUNDLFlBQVksTUFBYixFQUFxQkMsVUFBVSxRQUEvQixFQUhsQjtBQUlJLGtDQUFjLEVBQUNELFlBQVksUUFBYixFQUF1QkMsVUFBVSxLQUFqQyxFQUpsQjtBQUtJLHFDQUFpQixJQUxyQjtBQU1JLG9DQUFnQixLQUFLSixLQUFMLENBQVdLLGtCQU4vQjtBQU9JO0FBUEo7QUFTSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksMkNBQWtCO0FBRHRCO0FBREosaUJBVEo7QUFjSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksMkNBQWtCLFVBRHRCO0FBRUksOEJBQUs7QUFGVDtBQURKLGlCQWRKO0FBcUJJLHlEQXJCSjtBQXNCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJLDRFQUFjLE9BQU0sUUFBcEI7QUFESixpQkF0Qko7QUF5Qkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxhQUF4QjtBQUNLO0FBREw7QUFESixpQkF6Qko7QUE4Qkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSyxzQ0FETDtBQUVJLDZEQUZKO0FBR0k7QUFBQTtBQUFBLDBCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsYUFBeEI7QUFDSztBQURMO0FBSEo7QUE5QkosYUFGUjtBQXlDSDs7OztFQXpFa0MsZ0JBQU1DLFM7O2tCQUF4QlAsUyIsImZpbGUiOiIwLjg5ZmZjNmE5YmZjNWE4YmM3NjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgTWVudSBmcm9tICdtYXRlcmlhbC11aS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgUG9wb3Zlciwge1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH0gZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgIC8qIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvL3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgIC8vIHRoaXMub3BlbjogdGhpcy5wcm9wcy5vcGVuXG4gICAgICAgIC8vfTtcblxuICAgICAgICAvL3RoaXMuaGFuZGxlVG91Y2hUYXAgPSB0aGlzLmhhbmRsZVRvdWNoVGFwLmJpbmQodGhpcyk7XG4gICAgICAgIC8vdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgfTsqL1xuXG4gICAgLypoYW5kbGVSZXF1ZXN0Q2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07Ki9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZGVidWdnZXI7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMucHJvcHMuYW5jaG9yfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAnYm90dG9tJ319XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbj17e2hvcml6b250YWw6ICdtaWRkbGUnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICBjYW5BdXRvUG9zaXRpb249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLnByb3BzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtQb3BvdmVyQW5pbWF0aW9uVmVydGljYWx9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiBsYWJlbD1cIkxvZyBJblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJmb3Jnb3RfcGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIkZvcmdvdCBQYXNzd29yZD9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIk5lZWQgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmV3X2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJTaWduIFVwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbk1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9