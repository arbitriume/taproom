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
        value: function handleClick() {
            this.setState({
                isSigningUp: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var confirmPass = void 0,
                userEmail = void 0;
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
            } else {
                confirmPass = null;
                userEmail = null;
            }

            return _react2.default.createElement(
                _Popover2.default,
                {
                    open: this.props.open,
                    anchorEl: this.props.anchor,
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' }
                    //targetorigin={{horizontal: 'middle', vertical: 'top'}}
                    //canautoposition={true}
                    , onRequestClose: this.props.handleRequestClose,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzdGF0ZSIsImlzU2lnbmluZ1VwIiwic2V0U3RhdGUiLCJjb25maXJtUGFzcyIsInVzZXJFbWFpbCIsInByb3BzIiwib3BlbiIsImFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFDakIseUJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEVBQUNDLGFBQWEsS0FBZCxFQUFiO0FBSFU7QUFJYjs7OztzQ0FFYTtBQUNWLGlCQUFLQyxRQUFMLENBQWM7QUFDVkQsNkJBQWE7QUFESCxhQUFkO0FBR0g7OztpQ0FFUTtBQUNMLGdCQUFJRSxvQkFBSjtBQUFBLGdCQUFnQkMsa0JBQWhCO0FBQ0EsZ0JBQUcsS0FBS0osS0FBTCxDQUFXQyxXQUFkLEVBQTJCO0FBQ3ZCRSw4QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksK0JBQU0sa0JBRFY7QUFFSSw4QkFBSyxVQUZUO0FBR0ksbUNBQVc7QUFIZjtBQURKLGlCQURKO0FBUUFDLDRCQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxPQURWO0FBRUksbUNBQVc7QUFGZjtBQURKLGlCQURKO0FBT0gsYUFoQkQsTUFnQk87QUFDSEQsOEJBQWMsSUFBZDtBQUNBQyw0QkFBWSxJQUFaO0FBQ0g7O0FBRUQsbUJBQ1E7QUFBQTtBQUFBO0FBQ0ksMEJBQU0sS0FBS0MsS0FBTCxDQUFXQyxJQURyQjtBQUVJLDhCQUFVLEtBQUtELEtBQUwsQ0FBV0UsTUFGekI7QUFHSSxrQ0FBYyxFQUFDQyxZQUFZLE1BQWIsRUFBcUJDLFVBQVUsUUFBL0I7QUFDZDtBQUNBO0FBTEosc0JBTUksZ0JBQWdCLEtBQUtKLEtBQUwsQ0FBV0ssa0JBTi9CO0FBT0k7QUFQSjtBQVNLTix5QkFUTDtBQVVJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxVQURWO0FBRUksbUNBQVc7QUFGZjtBQURKLGlCQVZKO0FBZ0JJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxVQURWO0FBRUksOEJBQUs7QUFGVDtBQURKLGlCQWhCSjtBQXNCS0QsMkJBdEJMO0FBdUJJLHlEQXZCSjtBQXdCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBUSxRQUFRLElBQWhCLEVBQXNCLG9CQUFvQixJQUExQyxFQUFnRCxlQUFlLElBQS9EO0FBQUE7QUFBQTtBQURKLGlCQXhCSjtBQTJCSSx5REEzQko7QUE0Qkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxhQUF4QjtBQUNLO0FBREw7QUFESixpQkE1Qko7QUFpQ0kseURBakNKO0FBa0NJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ssc0NBREw7QUFFSTtBQUFBO0FBQUEsMEJBQUcsU0FBUyxLQUFLTCxXQUFqQixFQUE4QixNQUFNLEdBQXBDLEVBQXlDLFdBQVUsYUFBbkQ7QUFDSztBQURMO0FBRko7QUFsQ0osYUFEUjtBQTJDSDs7OztFQS9Fa0MsZ0JBQU1hLFM7O2tCQUF4QmQsUyIsImZpbGUiOiIwLmE3MWRiYzU0Nzc1NDAwMjk3ZTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgUG9wb3Zlciwge1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH0gZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7aXNTaWduaW5nVXA6IGZhbHNlfTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1NpZ25pbmdVcDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb25maXJtUGFzcyx1c2VyRW1haWw7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNTaWduaW5nVXApIHtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzID1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIHVzZXJFbWFpbCA9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maXJtUGFzcyA9IG51bGw7XG4gICAgICAgICAgICB1c2VyRW1haWwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnByb3BzLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ2JvdHRvbSd9fVxuICAgICAgICAgICAgICAgICAgICAvL3RhcmdldG9yaWdpbj17e2hvcml6b250YWw6ICdtaWRkbGUnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICAvL2NhbmF1dG9wb3NpdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMucHJvcHMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1QYXNzfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByYWlzZWQ9e3RydWV9IGRpc2FibGVGb2N1c1JpcHBsZT17dHJ1ZX0gZGlzYWJsZVJpcHBsZT17dHJ1ZX0+TG9nIEluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cImZvcmdvdF9wYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiRm9yZ290IFBhc3N3b3JkP1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIk5lZWQgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuZXdfYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIlNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=