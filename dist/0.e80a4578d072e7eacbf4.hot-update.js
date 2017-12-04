webpackHotUpdate(0,{

/***/ 149:
false,

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

        return _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).apply(this, arguments));
    }

    _createClass(LoginMenu, [{
        key: 'render',
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
                        label: 'Username'
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

/***/ }),

/***/ 289:
false,

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(346)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: 200px repeat(6, 1fr);\n    background-color: #4A4848;\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n    align-items: center;\n}\n\n.login_box {\n    display: flex;\n}\n\n.nav_log {\n    flex: 1 0 auto;\n}\n\n.forgot_pass {\n    flex: 1 0 auto;\n}\n\n.new_account {\n    flex: 1 0 auto;\n}\n\n.log_form_field {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.nav_text {\n    //background-color: #7F26E9;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n    font-size: 150%;\n}\n\n/*.nav_item a {\n//background-color: #7F26E9;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n//padding: 20px;\n\n    font-size: 150%;\n}*/\n\n.nav_text:hover {\n    color: #FFFFFF;\n}\n\n.mega-menu{\n    display: none;\n}\n\n.mega-menu.true{\n    display: block;\n}\n\n.mega-menu-content{\n    background: #ffffff;\n    padding: 16px;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 30px;\n    width: 200px;\n    box-shadow: rgba(0,0,0,0.11765) 0px 1px 6px,rgba(0,0,0,0.11765) 0px 1px 4px;\n}\n\n.main_header {\n    background-color: #4A4848;\n}", ""]);

// exports


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbIkxvZ2luTWVudSIsInByb3BzIiwib3BlbiIsImFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7OztpQ0FFUjtBQUNMOztBQUVBLG1CQUNRO0FBQUE7QUFBQTtBQUNJLDBCQUFNLEtBQUtDLEtBQUwsQ0FBV0MsSUFEckI7QUFFSSw4QkFBVSxLQUFLRCxLQUFMLENBQVdFLE1BRnpCO0FBR0ksa0NBQWMsRUFBQ0MsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLFFBQS9CLEVBSGxCO0FBSUksa0NBQWMsRUFBQ0QsWUFBWSxRQUFiLEVBQXVCQyxVQUFVLEtBQWpDLEVBSmxCO0FBS0kscUNBQWlCLElBTHJCO0FBTUksb0NBQWdCLEtBQUtKLEtBQUwsQ0FBV0ssa0JBTi9CO0FBT0k7QUFQSjtBQVNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFDSSwrQkFBTTtBQURWO0FBREosaUJBVEo7QUFjSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNJO0FBQ0ksK0JBQU0sVUFEVjtBQUVJLDhCQUFLO0FBRlQ7QUFESixpQkFkSjtBQW9CSSx5REFwQko7QUFxQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQVEsUUFBUSxJQUFoQixFQUFzQixvQkFBb0IsSUFBMUMsRUFBZ0QsZUFBZSxJQUEvRDtBQUFBO0FBQUE7QUFESixpQkFyQko7QUF3QkkseURBeEJKO0FBeUJJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsYUFBeEI7QUFDSztBQURMO0FBREosaUJBekJKO0FBOEJJLHlEQTlCSjtBQStCSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxnQkFBZjtBQUNLLHNDQURMO0FBRUksNkRBRko7QUFHSTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxhQUF4QjtBQUNLO0FBREw7QUFISjtBQS9CSixhQURSO0FBeUNIOzs7O0VBOUNrQyxnQkFBTUMsUzs7a0JBQXhCUCxTOzs7Ozs7Ozs7O0FDTnJCO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLG9CQUFvQixxQkFBcUIsa0RBQWtELGdDQUFnQyxrQkFBa0IsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsY0FBYyxxQkFBcUIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLGlDQUFpQyx1QkFBdUIsMEJBQTBCLHlCQUF5QiwwQkFBMEIsR0FBRyxlQUFlLGtDQUFrQyx3QkFBd0IsMkJBQTJCLHlCQUF5Qiw0QkFBNEIscUJBQXFCLDBCQUEwQixzQkFBc0IsR0FBRyxtQkFBbUIsOEJBQThCLHlCQUF5Qiw0QkFBNEIscUJBQXFCLDBCQUEwQixrQkFBa0Isd0JBQXdCLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLHVCQUF1QiwwQkFBMEIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLG1CQUFtQixrRkFBa0YsR0FBRyxrQkFBa0IsZ0NBQWdDLEdBQUc7O0FBRTU3QyIsImZpbGUiOiIwLmU4MGE0NTc4ZDA3MmU3ZWFjYmY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XG5pbXBvcnQgUG9wb3Zlciwge1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH0gZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wcm9wcy5hbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luPXt7aG9yaXpvbnRhbDogJ21pZGRsZScsIHZlcnRpY2FsOiAndG9wJ319XG4gICAgICAgICAgICAgICAgICAgIGNhbkF1dG9Qb3NpdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMucHJvcHMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByYWlzZWQ9e3RydWV9IGRpc2FibGVGb2N1c1JpcHBsZT17dHJ1ZX0gZGlzYWJsZVJpcHBsZT17dHJ1ZX0+TG9nIEluPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dfZm9ybV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cImZvcmdvdF9wYXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiRm9yZ290IFBhc3N3b3JkP1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIk5lZWQgYW4gYWNjb3VudD9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmV3X2FjY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJTaWduIFVwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbk1lbnUuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2X2JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0ODQ4O1xcbiAgICBtYXJnaW46MTJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9naW5fYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdl9sb2cge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLmZvcmdvdF9wYXNzIHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5uZXdfYWNjb3VudCB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4ubG9nX2Zvcm1fZmllbGQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4ubmF2X3RleHQge1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM3RjI2RTk7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyY29uO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjQ0ZDRUNFO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxufVxcblxcbi8qLm5hdl9pdGVtIGEge1xcbi8vYmFja2dyb3VuZC1jb2xvcjogIzdGMjZFOTtcXG4gICAgZm9udC1mYW1pbHk6IEFyY29uO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjQ0ZDRUNFO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbi8vcGFkZGluZzogMjBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn0qL1xcblxcbi5uYXZfdGV4dDpob3ZlciB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ubWVnYS1tZW51e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVnYS1tZW51LnRydWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWVnYS1tZW51LWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xMTc2NSkgMHB4IDFweCA2cHgscmdiYSgwLDAsMCwwLjExNzY1KSAwcHggMXB4IDRweDtcXG59XFxuXFxuLm1haW5faGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBNDg0ODtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9tYWluL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=