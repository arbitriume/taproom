webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: 200px repeat(6, 1fr);\n    background-color: #4A4848;\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n    align-items: center;\n}\n\n.login_box {\n    display: flex;\n}\n\n.nav_log {\n    flex: 1 0 auto;\n}\n\n.log_form_field {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.nav_text {\n    //background-color: #7F26E9;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n    font-size: 150%;\n}\n\n/*.nav_item a {\n//background-color: #7F26E9;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n//padding: 20px;\n\n    font-size: 150%;\n}*/\n\n.nav_text:hover {\n    color: #FFFFFF;\n}\n\n.mega-menu{\n    display: none;\n}\n.mega-menu.true{\n    display: block;\n}\n.mega-menu-content{\n    background: #ffffff;\n    padding: 16px;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 30px;\n    width: 200px;\n    box-shadow: rgba(0,0,0,0.11765) 0px 1px 6px,rgba(0,0,0,0.11765) 0px 1px 4px;\n}\n\n.main_header {\n    background-color: #4A4848;\n}", ""]);

// exports


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
                    anchorOrigin: { horizontal: 'middle', vertical: 'bottom' },
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
                        floatingLabelText: 'Password'
                    })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_RaisedButton2.default, { label: 'Full width', fullWidth: true })
            );
        }
    }]);

    return LoginMenu;
}(_react2.default.Component);

exports.default = LoginMenu;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sIm5hbWVzIjpbIkxvZ2luTWVudSIsInByb3BzIiwib3BlbiIsImFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLG1DQUFvQyxvQkFBb0IscUJBQXFCLGtEQUFrRCxnQ0FBZ0Msa0JBQWtCLGdDQUFnQyxzQkFBc0IsMEJBQTBCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGNBQWMscUJBQXFCLEdBQUcscUJBQXFCLHVCQUF1QiwwQkFBMEIseUJBQXlCLDBCQUEwQixHQUFHLGVBQWUsa0NBQWtDLHdCQUF3QiwyQkFBMkIseUJBQXlCLDRCQUE0QixxQkFBcUIsMEJBQTBCLHNCQUFzQixHQUFHLG1CQUFtQiw4QkFBOEIseUJBQXlCLDRCQUE0QixxQkFBcUIsMEJBQTBCLGtCQUFrQix3QkFBd0IsR0FBRyx1QkFBdUIscUJBQXFCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcscUJBQXFCLDBCQUEwQixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLGtGQUFrRixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRzs7QUFFcnhDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7O0FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQzs7Ozs7O2lDQU1TO0FBQ0w7O0FBRUEsbUJBRVE7QUFBQTtBQUFBO0FBQ0ksMEJBQU0sS0FBS0MsS0FBTCxDQUFXQyxJQURyQjtBQUVJLDhCQUFVLEtBQUtELEtBQUwsQ0FBV0UsTUFGekI7QUFHSSxrQ0FBYyxFQUFDQyxZQUFZLFFBQWIsRUFBdUJDLFVBQVUsUUFBakMsRUFIbEI7QUFJSSxrQ0FBYyxFQUFDRCxZQUFZLFFBQWIsRUFBdUJDLFVBQVUsS0FBakMsRUFKbEI7QUFLSSxxQ0FBaUIsSUFMckI7QUFNSSxvQ0FBZ0IsS0FBS0osS0FBTCxDQUFXSyxrQkFOL0I7QUFPSTtBQVBKO0FBU0E7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLDJDQUFrQjtBQUR0QjtBQURKLGlCQVRBO0FBY0E7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUNJLDJDQUFrQjtBQUR0QjtBQURKLGlCQWRBO0FBbUJBLHlEQW5CQTtBQW9CQSx3RUFBYyxPQUFNLFlBQXBCLEVBQWlDLFdBQVcsSUFBNUM7QUFwQkEsYUFGUjtBQTBCSDs7OztFQTFEa0MsZ0JBQU1DLFM7O2tCQUF4QlAsUyIsImZpbGUiOiIwLmZmZTZmNWQ5ZTcxYjRjYzcxNmFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2X2JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0ODQ4O1xcbiAgICBtYXJnaW46MTJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9naW5fYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdl9sb2cge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLmxvZ19mb3JtX2ZpZWxkIHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubmF2X3RleHQge1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM3RjI2RTk7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyY29uO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjQ0ZDRUNFO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxufVxcblxcbi8qLm5hdl9pdGVtIGEge1xcbi8vYmFja2dyb3VuZC1jb2xvcjogIzdGMjZFOTtcXG4gICAgZm9udC1mYW1pbHk6IEFyY29uO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjQ0ZDRUNFO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbi8vcGFkZGluZzogMjBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn0qL1xcblxcbi5uYXZfdGV4dDpob3ZlciB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ubWVnYS1tZW51e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWVnYS1tZW51LnRydWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWVnYS1tZW51LWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xMTc2NSkgMHB4IDFweCA2cHgscmdiYSgwLDAsMCwwLjExNzY1KSAwcHggMXB4IDRweDtcXG59XFxuXFxuLm1haW5faGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBNDg0ODtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9tYWluL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgLyogY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgLy8gdGhpcy5vcGVuOiB0aGlzLnByb3BzLm9wZW5cbiAgICAgICAgLy99O1xuXG4gICAgICAgIC8vdGhpcy5oYW5kbGVUb3VjaFRhcCA9IHRoaXMuaGFuZGxlVG91Y2hUYXAuYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLypoYW5kbGVUb3VjaFRhcChldmVudCkge1xuICAgICAgICAvLyBUaGlzIHByZXZlbnRzIGdob3N0IGNsaWNrLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB9KTtcbiAgICB9OyovXG5cbiAgICAvKmhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTsqL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkZWJ1Z2dlcjtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wcm9wcy5hbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdtaWRkbGUnLCB2ZXJ0aWNhbDogJ2JvdHRvbSd9fVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW49e3tob3Jpem9udGFsOiAnbWlkZGxlJywgdmVydGljYWw6ICd0b3AnfX1cbiAgICAgICAgICAgICAgICAgICAgY2FuQXV0b1Bvc2l0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ19mb3JtX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nX2Zvcm1fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiBsYWJlbD1cIkZ1bGwgd2lkdGhcIiBmdWxsV2lkdGg9e3RydWV9IC8+XG5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==