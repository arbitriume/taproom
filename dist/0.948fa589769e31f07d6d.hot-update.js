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

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = __webpack_require__(185);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(114);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu(props) {
        _classCallCheck(this, LoginMenu);

        var _this = _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this, props));

        _this.state = {
            open: false
        };

        _this.handleTouchTap = _this.handleTouchTap.bind(_this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        return _this;
    }

    _createClass(LoginMenu, [{
        key: 'handleTouchTap',
        value: function handleTouchTap(event) {
            // This prevents ghost click.
            event.preventDefault();

            this.setState({
                open: true,
                anchorEl: event.currentTarget
            });
        }
    }, {
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_RaisedButton2.default, {
                    onClick: this.handleTouchTap,
                    label: 'Click me'
                }),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.state.open,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.handleRequestClose,
                        animation: PopoverAnimationVertical
                    },
                    _react2.default.createElement(
                        _Menu2.default,
                        null,
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help & feedback' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJwcm9wcyIsInN0YXRlIiwib3BlbiIsImhhbmRsZVRvdWNoVGFwIiwiYmluZCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsIlBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUVqQix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxrQkFBTTtBQURHLFNBQWI7O0FBSUEsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQVJlO0FBU2xCOzs7O3VDQUVjRSxLLEVBQU87QUFDbEI7QUFDQUEsa0JBQU1DLGNBQU47O0FBRUEsaUJBQUtDLFFBQUwsQ0FBYztBQUNWTixzQkFBTSxJQURJO0FBRVZPLDBCQUFVSCxNQUFNSTtBQUZOLGFBQWQ7QUFJSDs7OzZDQUVvQjtBQUNqQixpQkFBS0YsUUFBTCxDQUFjO0FBQ1ZOLHNCQUFNO0FBREksYUFBZDtBQUdIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDZCQUFTLEtBQUtDLGNBRGxCO0FBRUksMkJBQU07QUFGVixrQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJLDhCQUFNLEtBQUtGLEtBQUwsQ0FBV0MsSUFEckI7QUFFSSxrQ0FBVSxLQUFLRCxLQUFMLENBQVdRLFFBRnpCO0FBR0ksc0NBQWMsRUFBQ0UsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLFFBQS9CLEVBSGxCO0FBSUksc0NBQWMsRUFBQ0QsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLEtBQS9CLEVBSmxCO0FBS0ksd0NBQWdCLEtBQUtQLGtCQUx6QjtBQU1JLG1DQUFXUTtBQU5mO0FBUUk7QUFBQTtBQUFBO0FBQ0ksNEVBQVUsYUFBWSxTQUF0QixHQURKO0FBRUksNEVBQVUsYUFBWSxpQkFBdEIsR0FGSjtBQUdJLDRFQUFVLGFBQVksVUFBdEIsR0FISjtBQUlJLDRFQUFVLGFBQVksVUFBdEI7QUFKSjtBQVJKO0FBTEosYUFESjtBQXVCSDs7OztFQXJEa0MsZ0JBQU1DLFM7O2tCQUF4QmYsUyIsImZpbGUiOiIwLjk0OGZhNTg5NzY5ZTMxZjA3ZDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcbmltcG9ydCBNZW51IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVUb3VjaFRhcCA9IHRoaXMuaGFuZGxlVG91Y2hUYXAuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoVGFwKGV2ZW50KSB7XG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgZ2hvc3QgY2xpY2suXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVSZXF1ZXN0Q2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVUb3VjaFRhcH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDbGljayBtZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAnYm90dG9tJ319XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiUmVmcmVzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJIZWxwICZhbXA7IGZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNldHRpbmdzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNpZ24gb3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=