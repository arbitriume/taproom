webpackHotUpdate(0,{

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
                flexSetting = void 0,
                buttonText = void 0;
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
                buttonText = "Join";
            } else {
                confirmPass = null;
                userEmail = null;
                buttonText = "Log In";
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
                        buttonText
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJoYW5kbGVDbGljayIsImJpbmQiLCJzdGF0ZSIsImlzU2lnbmluZ1VwIiwic2V0U3RhdGUiLCJjb25maXJtUGFzcyIsInVzZXJFbWFpbCIsImZsZXhTZXR0aW5nIiwiYnV0dG9uVGV4dCIsInByb3BzIiwib3BlbiIsImFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCQSxTOzs7QUFDakIseUJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEVBQUNDLGFBQWEsS0FBZCxFQUFiO0FBSFU7QUFJYjs7QUFFRDs7Ozs7Ozs7O3NDQUtjO0FBQ1YsZ0JBQUlELFFBQVEsS0FBS0EsS0FBTCxDQUFXQyxXQUF2QjtBQUNBRCxvQkFBUSxDQUFDQSxLQUFUO0FBQ0EsaUJBQUtFLFFBQUwsQ0FBYztBQUNWRCw2QkFBYUQ7QUFESCxhQUFkO0FBR0g7O0FBRUQ7Ozs7Ozs7O2lDQUtTO0FBQ0wsZ0JBQUlHLG9CQUFKO0FBQUEsZ0JBQWdCQyxrQkFBaEI7QUFBQSxnQkFBMEJDLG9CQUExQjtBQUFBLGdCQUF1Q0MsbUJBQXZDO0FBQ0EsZ0JBQUcsS0FBS04sS0FBTCxDQUFXQyxXQUFkLEVBQTJCO0FBQ3ZCRSw4QkFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksK0JBQU0sa0JBRFY7QUFFSSw4QkFBSyxVQUZUO0FBR0ksbUNBQVc7QUFIZjtBQURKLGlCQURKO0FBUUFDLDRCQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxPQURWO0FBRUksbUNBQVc7QUFGZjtBQURKLGlCQURKO0FBT0FDLDhCQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ssOENBREw7QUFFSTtBQUFBO0FBQUEsMEJBQUcsU0FBUyxLQUFLUCxXQUFqQixFQUE4QixNQUFNLEdBQXBDLEVBQXlDLFdBQVUsYUFBbkQ7QUFDSztBQURMO0FBRkosaUJBREo7QUFPQVEsNkJBQWEsTUFBYjtBQUNILGFBeEJELE1Bd0JPO0FBQ0hILDhCQUFjLElBQWQ7QUFDQUMsNEJBQVksSUFBWjtBQUNBRSw2QkFBYSxRQUFiO0FBQ0FELDhCQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0ssc0NBREw7QUFFSTtBQUFBO0FBQUEsMEJBQUcsU0FBUyxLQUFLUCxXQUFqQixFQUE4QixNQUFNLEdBQXBDLEVBQXlDLFdBQVUsYUFBbkQ7QUFDSztBQURMO0FBRkosaUJBREo7QUFPSDs7QUFFRCxtQkFDUTtBQUFBO0FBQUE7QUFDSSwwQkFBTSxLQUFLUyxLQUFMLENBQVdDLElBRHJCO0FBRUksOEJBQVUsS0FBS0QsS0FBTCxDQUFXRSxNQUZ6QjtBQUdJLGtDQUFjLEVBQUNDLFlBQVksTUFBYixFQUFxQkMsVUFBVSxRQUEvQixFQUhsQjtBQUlJLG9DQUFnQixLQUFLSixLQUFMLENBQVdLLGtCQUovQjtBQUtJO0FBTEo7QUFPSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksK0JBQU0sVUFEVjtBQUVJLG1DQUFXO0FBRmY7QUFESixpQkFQSjtBQWFLUix5QkFiTDtBQWNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTSxVQURWO0FBRUksOEJBQUs7QUFGVDtBQURKLGlCQWRKO0FBb0JLRCwyQkFwQkw7QUFxQkkseURBckJKO0FBc0JJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFRLFFBQVEsSUFBaEIsRUFBc0Isb0JBQW9CLElBQTFDLEVBQWdELGVBQWUsSUFBL0Q7QUFBc0VHO0FBQXRFO0FBREosaUJBdEJKO0FBeUJJLHlEQXpCSjtBQTBCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLGFBQXhCO0FBQ0s7QUFETDtBQURKLGlCQTFCSjtBQStCSSx5REEvQko7QUFnQ0tEO0FBaENMLGFBRFI7QUFvQ0g7Ozs7RUFwR2tDLGdCQUFNUSxTOztrQkFBeEJoQixTIiwiZmlsZSI6IjAuZTAyY2E2OTA5MTMwZTI4ODY3MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuLyoqXG4gKiBUaGUgVUkgQ29tcG9uZW50IHJlcHJlc2VudGluZyB0aGUgZHJvcCBkb3duIG1lbnUgZm9yIGxvZ2dpbmcgaW4vc2lnbmluZyB1cC5cbiAqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtpc1NpZ25pbmdVcDogZmFsc2V9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlICBtZW51IGZpZWxkcyBmb3IgbG9nZ2luZyBpbi9zaWduaW5nIHVwIHVwb24gYSBjbGljayBldmVudC5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlLmlzU2lnbmluZ1VwO1xuICAgICAgICBzdGF0ZSA9ICFzdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1NpZ25pbmdVcDogc3RhdGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgZHJvcCBkb3duIG1lbnUgZm9yIGxvZ2dpbmcgaW4vc2lnbmluZyB1cC5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNvbmZpcm1QYXNzLHVzZXJFbWFpbCxmbGV4U2V0dGluZywgYnV0dG9uVGV4dDtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc1NpZ25pbmdVcCkge1xuICAgICAgICAgICAgY29uZmlybVBhc3MgPVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgdXNlckVtYWlsID1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgIGZsZXhTZXR0aW5nID1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wifVxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmV3X2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9IFwiSm9pblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlybVBhc3MgPSBudWxsO1xuICAgICAgICAgICAgdXNlckVtYWlsID0gbnVsbDtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSBcIkxvZyBJblwiO1xuICAgICAgICAgICAgZmxleFNldHRpbmcgPVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiTmVlZCBhbiBhY2NvdW50P1wifVxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmV3X2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIlNpZ24gVXBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wcm9wcy5hbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMucHJvcHMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1QYXNzfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByYWlzZWQ9e3RydWV9IGRpc2FibGVGb2N1c1JpcHBsZT17dHJ1ZX0gZGlzYWJsZVJpcHBsZT17dHJ1ZX0+e2J1dHRvblRleHR9PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cImZvcmdvdF9wYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiRm9yZ290IFBhc3N3b3JkP1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHtmbGV4U2V0dGluZ31cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==