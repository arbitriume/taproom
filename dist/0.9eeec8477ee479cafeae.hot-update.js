webpackHotUpdate(0,{

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(172);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(324);

var _TextField2 = _interopRequireDefault(_TextField);

var _Popover = __webpack_require__(139);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu() {
        _classCallCheck(this, LoginMenu);

        var _this = _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this));

        _this.handleClick = _this.handleClick.bind(_this);
        _this.state = { isSigningUp: false };
        return _this;
    }

    _createClass(LoginMenu, [{
        key: 'handleClick',
        value: function handleClick(event) {
            this.state.isSigningUp = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var confirmPass = void 0,
                userEmail = void 0,
                isSigningUp = void 0;
            if (isSigningUp) {
                confirmPass = _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        label: 'Confirm Password',
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
            } else {
                confirmPass = null;
                userEmail = null;
            }

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
                userEmail,
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    _react2.default.createElement(_TextField2.default, {
                        label: 'Username',
                        fullWidth: true
                    })
                ),
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
                _react2.default.createElement(
                    'div',
                    { className: 'log_form_field' },
                    "Need an account?",
                    _react2.default.createElement(
                        'a',
                        { onClick: this.handleClick, href: "#", className: 'new_account' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzdGF0ZSIsImlzU2lnbmluZ1VwIiwiZXZlbnQiLCJjb25maXJtUGFzcyIsInVzZXJFbWFpbCIsInByb3BzIiwib3BlbiIsImFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFDakIseUJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEVBQUNDLGFBQWEsS0FBZCxFQUFiO0FBSFU7QUFJYjs7OztvQ0FFV0MsSyxFQUFPO0FBQ2YsaUJBQUtGLEtBQUwsQ0FBV0MsV0FBWCxHQUF5QixJQUF6QjtBQUNIOzs7aUNBRVE7QUFDTCxnQkFBSUUsb0JBQUo7QUFBQSxnQkFBZ0JDLGtCQUFoQjtBQUFBLGdCQUEwQkgsb0JBQTFCO0FBQ0EsZ0JBQUdBLFdBQUgsRUFBZ0I7QUFDWkUsOEJBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLGtCQURWO0FBRUksbUNBQVc7QUFGZjtBQURKLGlCQURKO0FBT0FDLDRCQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxPQURWO0FBRUksbUNBQVc7QUFGZjtBQURKLGlCQURKO0FBT0gsYUFmRCxNQWVPO0FBQ0hELDhCQUFjLElBQWQ7QUFDQUMsNEJBQVksSUFBWjtBQUNIOztBQUVELG1CQUNRO0FBQUE7QUFBQTtBQUNJLDBCQUFNLEtBQUtDLEtBQUwsQ0FBV0MsSUFEckI7QUFFSSw4QkFBVSxLQUFLRCxLQUFMLENBQVdFLE1BRnpCO0FBR0ksa0NBQWMsRUFBQ0MsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLFFBQS9CLEVBSGxCO0FBSUksa0NBQWMsRUFBQ0QsWUFBWSxRQUFiLEVBQXVCQyxVQUFVLEtBQWpDLEVBSmxCO0FBS0kscUNBQWlCLElBTHJCO0FBTUksb0NBQWdCLEtBQUtKLEtBQUwsQ0FBV0ssa0JBTi9CO0FBT0k7QUFQSjtBQVNLTix5QkFUTDtBQVVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxVQURWO0FBRUksbUNBQVc7QUFGZjtBQURKLGlCQVZKO0FBZ0JJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxVQURWO0FBRUksOEJBQUs7QUFGVDtBQURKLGlCQWhCSjtBQXNCS0QsMkJBdEJMO0FBdUJJLHlEQXZCSjtBQXdCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBUSxRQUFRLElBQWhCLEVBQXNCLG9CQUFvQixJQUExQyxFQUFnRCxlQUFlLElBQS9EO0FBQUE7QUFBQTtBQURKLGlCQXhCSjtBQTJCSSx5REEzQko7QUE0Qkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxhQUF4QjtBQUNLO0FBREw7QUFESixpQkE1Qko7QUFpQ0kseURBakNKO0FBa0NJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ssc0NBREw7QUFFSTtBQUFBO0FBQUEsMEJBQUcsU0FBUyxLQUFLTCxXQUFqQixFQUE4QixNQUFNLEdBQXBDLEVBQXlDLFdBQVUsYUFBbkQ7QUFDSztBQURMO0FBRko7QUFsQ0osYUFEUjtBQTJDSDs7OztFQTVFa0MsZ0JBQU1hLFM7O2tCQUF4QmQsUyIsImZpbGUiOiIwLjllZWVjODQ3N2VlNDc5Y2FmZWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgUG9wb3Zlciwge1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH0gZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNTaWduaW5nVXA6IGZhbHNlfTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlLmlzU2lnbmluZ1VwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb25maXJtUGFzcyx1c2VyRW1haWwsaXNTaWduaW5nVXA7XG4gICAgICAgIGlmKGlzU2lnbmluZ1VwKSB7XG4gICAgICAgICAgICBjb25maXJtUGFzcyA9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIHVzZXJFbWFpbCA9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maXJtUGFzcyA9IG51bGw7XG4gICAgICAgICAgICB1c2VyRW1haWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnByb3BzLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ2JvdHRvbSd9fVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW49e3tob3Jpem9udGFsOiAnbWlkZGxlJywgdmVydGljYWw6ICd0b3AnfX1cbiAgICAgICAgICAgICAgICAgICAgY2FuQXV0b1Bvc2l0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybVBhc3N9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJhaXNlZD17dHJ1ZX0gZGlzYWJsZUZvY3VzUmlwcGxlPXt0cnVlfSBkaXNhYmxlUmlwcGxlPXt0cnVlfT5Mb2cgSW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwiZm9yZ290X3Bhc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJGb3Jnb3QgUGFzc3dvcmQ/XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiTmVlZCBhbiBhY2NvdW50P1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5ld19hY2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiU2lnbiBVcFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==