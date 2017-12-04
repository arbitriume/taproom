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
            this.state.isSigningUp == true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzdGF0ZSIsImlzU2lnbmluZ1VwIiwiY29uZmlybVBhc3MiLCJ1c2VyRW1haWwiLCJwcm9wcyIsIm9wZW4iLCJhbmNob3IiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBQ2pCLHlCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxFQUFDQyxhQUFhLEtBQWQsRUFBYjtBQUhVO0FBSWI7Ozs7c0NBRWE7QUFDVixpQkFBS0QsS0FBTCxDQUFXQyxXQUFYLElBQTBCLElBQTFCO0FBQ0g7OztpQ0FFUTtBQUNMLGdCQUFJQyxvQkFBSjtBQUFBLGdCQUFnQkMsa0JBQWhCO0FBQUEsZ0JBQTBCRixvQkFBMUI7QUFDQSxnQkFBR0EsV0FBSCxFQUFnQjtBQUNaQyw4QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksK0JBQU0sa0JBRFY7QUFFSSxtQ0FBVztBQUZmO0FBREosaUJBREo7QUFPQUMsNEJBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLE9BRFY7QUFFSSxtQ0FBVztBQUZmO0FBREosaUJBREo7QUFPSCxhQWZELE1BZU87QUFDSEQsOEJBQWMsSUFBZDtBQUNBQyw0QkFBWSxJQUFaO0FBQ0g7O0FBRUQsbUJBQ1E7QUFBQTtBQUFBO0FBQ0ksMEJBQU0sS0FBS0MsS0FBTCxDQUFXQyxJQURyQjtBQUVJLDhCQUFVLEtBQUtELEtBQUwsQ0FBV0UsTUFGekI7QUFHSSxrQ0FBYyxFQUFDQyxZQUFZLE1BQWIsRUFBcUJDLFVBQVUsUUFBL0IsRUFIbEI7QUFJSSxrQ0FBYyxFQUFDRCxZQUFZLFFBQWIsRUFBdUJDLFVBQVUsS0FBakMsRUFKbEI7QUFLSSxxQ0FBaUIsSUFMckI7QUFNSSxvQ0FBZ0IsS0FBS0osS0FBTCxDQUFXSyxrQkFOL0I7QUFPSTtBQVBKO0FBU0tOLHlCQVRMO0FBVUk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLFVBRFY7QUFFSSxtQ0FBVztBQUZmO0FBREosaUJBVko7QUFnQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLCtCQUFNLFVBRFY7QUFFSSw4QkFBSztBQUZUO0FBREosaUJBaEJKO0FBc0JLRCwyQkF0Qkw7QUF1QkkseURBdkJKO0FBd0JJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFRLFFBQVEsSUFBaEIsRUFBc0Isb0JBQW9CLElBQTFDLEVBQWdELGVBQWUsSUFBL0Q7QUFBQTtBQUFBO0FBREosaUJBeEJKO0FBMkJJLHlEQTNCSjtBQTRCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLGFBQXhCO0FBQ0s7QUFETDtBQURKLGlCQTVCSjtBQWlDSSx5REFqQ0o7QUFrQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSyxzQ0FETDtBQUVJO0FBQUE7QUFBQSwwQkFBRyxTQUFTLEtBQUtKLFdBQWpCLEVBQThCLE1BQU0sR0FBcEMsRUFBeUMsV0FBVSxhQUFuRDtBQUNLO0FBREw7QUFGSjtBQWxDSixhQURSO0FBMkNIOzs7O0VBNUVrQyxnQkFBTVksUzs7a0JBQXhCYixTIiwiZmlsZSI6IjAuODliOTNhYmEyNDhlZTU5ZjQxMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtpc1NpZ25pbmdVcDogZmFsc2V9O1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICB0aGlzLnN0YXRlLmlzU2lnbmluZ1VwID09IHRydWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY29uZmlybVBhc3MsdXNlckVtYWlsLGlzU2lnbmluZ1VwO1xuICAgICAgICBpZihpc1NpZ25pbmdVcCkge1xuICAgICAgICAgICAgY29uZmlybVBhc3MgPVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgICB1c2VyRW1haWwgPVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlybVBhc3MgPSBudWxsO1xuICAgICAgICAgICAgdXNlckVtYWlsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wcm9wcy5hbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luPXt7aG9yaXpvbnRhbDogJ21pZGRsZScsIHZlcnRpY2FsOiAndG9wJ319XG4gICAgICAgICAgICAgICAgICAgIGNhbkF1dG9Qb3NpdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMucHJvcHMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1QYXNzfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByYWlzZWQ9e3RydWV9IGRpc2FibGVGb2N1c1JpcHBsZT17dHJ1ZX0gZGlzYWJsZVJpcHBsZT17dHJ1ZX0+TG9nIEluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cImZvcmdvdF9wYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiRm9yZ290IFBhc3N3b3JkP1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIk5lZWQgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuZXdfYWNjb3VudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIlNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=