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
            this.state.isSigningUp = true;
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
                    targetorigin: { horizontal: 'middle', vertical: 'top' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzdGF0ZSIsImlzU2lnbmluZ1VwIiwiY29uZmlybVBhc3MiLCJ1c2VyRW1haWwiLCJwcm9wcyIsIm9wZW4iLCJhbmNob3IiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBQ2pCLHlCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxhQUFhLEtBQWQsRUFBYjtBQUhVO0FBSWI7Ozs7c0NBRWE7QUFDVixpQkFBS0QsS0FBTCxDQUFXQyxXQUFYLEdBQXlCLElBQXpCO0FBQ0g7OztpQ0FFUTtBQUNMLGdCQUFJQyxvQkFBSjtBQUFBLGdCQUFnQkMsa0JBQWhCO0FBQ0EsZ0JBQUcsS0FBS0gsS0FBTCxDQUFXQyxXQUFkLEVBQTJCO0FBQ3ZCQyw4QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksK0JBQU0sa0JBRFY7QUFFSSxtQ0FBVztBQUZmO0FBREosaUJBREo7QUFPQUMsNEJBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLE9BRFY7QUFFSSxtQ0FBVztBQUZmO0FBREosaUJBREo7QUFPSCxhQWZELE1BZU87QUFDSEQsOEJBQWMsSUFBZDtBQUNBQyw0QkFBWSxJQUFaO0FBQ0g7O0FBRUQsbUJBQ1E7QUFBQTtBQUFBO0FBQ0ksMEJBQU0sS0FBS0MsS0FBTCxDQUFXQyxJQURyQjtBQUVJLDhCQUFVLEtBQUtELEtBQUwsQ0FBV0UsTUFGekI7QUFHSSxrQ0FBYyxFQUFDQyxZQUFZLE1BQWIsRUFBcUJDLFVBQVUsUUFBL0IsRUFIbEI7QUFJSSxrQ0FBYyxFQUFDRCxZQUFZLFFBQWIsRUFBdUJDLFVBQVUsS0FBakMsRUFKbEI7QUFLSSxxQ0FBaUIsSUFMckI7QUFNSSxvQ0FBZ0IsS0FBS0osS0FBTCxDQUFXSyxrQkFOL0I7QUFPSTtBQVBKO0FBU0tOLHlCQVRMO0FBVUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLFVBRFY7QUFFSSxtQ0FBVztBQUZmO0FBREosaUJBVko7QUFnQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLFVBRFY7QUFFSSw4QkFBSztBQUZUO0FBREosaUJBaEJKO0FBc0JLRCwyQkF0Qkw7QUF1QkkseURBdkJKO0FBd0JJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFRLFFBQVEsSUFBaEIsRUFBc0Isb0JBQW9CLElBQTFDLEVBQWdELGVBQWUsSUFBL0Q7QUFBQTtBQUFBO0FBREosaUJBeEJKO0FBMkJJLHlEQTNCSjtBQTRCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLGFBQXhCO0FBQ0s7QUFETDtBQURKLGlCQTVCSjtBQWlDSSx5REFqQ0o7QUFrQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSyxzQ0FETDtBQUVJO0FBQUE7QUFBQSwwQkFBRyxTQUFTLEtBQUtKLFdBQWpCLEVBQThCLE1BQU0sR0FBcEMsRUFBeUMsV0FBVSxhQUFuRDtBQUNLO0FBREw7QUFGSjtBQWxDSixhQURSO0FBMkNIOzs7O0VBNUVrQyxnQkFBTVksUzs7a0JBQXhCYixTIiwiZmlsZSI6IjAuNDJlMWU5NDcxM2JlNWI4NTJhNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtpc1NpZ25pbmdVcDogZmFsc2V9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnN0YXRlLmlzU2lnbmluZ1VwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb25maXJtUGFzcyx1c2VyRW1haWw7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNTaWduaW5nVXApIHtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzID1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgdXNlckVtYWlsID1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzID0gbnVsbDtcbiAgICAgICAgICAgIHVzZXJFbWFpbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMucHJvcHMuYW5jaG9yfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAnYm90dG9tJ319XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldG9yaWdpbj17e2hvcml6b250YWw6ICdtaWRkbGUnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICBjYW5BdXRvUG9zaXRpb249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLnByb3BzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtQb3BvdmVyQW5pbWF0aW9uVmVydGljYWx9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dXNlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maXJtUGFzc31cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcmFpc2VkPXt0cnVlfSBkaXNhYmxlRm9jdXNSaXBwbGU9e3RydWV9IGRpc2FibGVSaXBwbGU9e3RydWV9PkxvZyBJbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJmb3Jnb3RfcGFzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIkZvcmdvdCBQYXNzd29yZD9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJOZWVkIGFuIGFjY291bnQ/XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmV3X2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJTaWduIFVwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbk1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9