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
                        anchorEl: this,
                        animated: false,
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.handleRequestClose
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJwcm9wcyIsInN0YXRlIiwib3BlbiIsImhhbmRsZVRvdWNoVGFwIiwiYmluZCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUVqQix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxrQkFBTTtBQURHLFNBQWI7O0FBSUEsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQVJlO0FBU2xCOzs7O3VDQUVjRSxLLEVBQU87QUFDbEI7QUFDQUEsa0JBQU1DLGNBQU47O0FBRUEsaUJBQUtDLFFBQUwsQ0FBYztBQUNWTixzQkFBTSxJQURJO0FBRVZPLDBCQUFVSCxNQUFNSTtBQUZOLGFBQWQ7QUFJSDs7OzZDQUVvQjtBQUNqQixpQkFBS0YsUUFBTCxDQUFjO0FBQ1ZOLHNCQUFNO0FBREksYUFBZDtBQUdIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDZCQUFTLEtBQUtDLGNBRGxCO0FBRUksMkJBQU07QUFGVixrQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJLDhCQUFNLEtBQUtGLEtBQUwsQ0FBV0MsSUFEckI7QUFFSSxrQ0FBVSxJQUZkO0FBR0ksa0NBQVUsS0FIZDtBQUlJLHNDQUFjLEVBQUNTLFlBQVksTUFBYixFQUFxQkMsVUFBVSxRQUEvQixFQUpsQjtBQUtJLHNDQUFjLEVBQUNELFlBQVksTUFBYixFQUFxQkMsVUFBVSxLQUEvQixFQUxsQjtBQU1JLHdDQUFnQixLQUFLUDtBQU56QjtBQVFJO0FBQUE7QUFBQTtBQUNJLDRFQUFVLGFBQVksU0FBdEIsR0FESjtBQUVJLDRFQUFVLGFBQVksaUJBQXRCLEdBRko7QUFHSSw0RUFBVSxhQUFZLFVBQXRCLEdBSEo7QUFJSSw0RUFBVSxhQUFZLFVBQXRCO0FBSko7QUFSSjtBQUxKLGFBREo7QUF1Qkg7Ozs7RUFyRGtDLGdCQUFNUSxTOztrQkFBeEJkLFMiLCJmaWxlIjoiMC5iMDEzNDAwOTE2MTBhZWUyZDI2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5pbXBvcnQgTWVudSBmcm9tICdtYXRlcmlhbC11aS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlVG91Y2hUYXAgPSB0aGlzLmhhbmRsZVRvdWNoVGFwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaFRhcChldmVudCkge1xuICAgICAgICAvLyBUaGlzIHByZXZlbnRzIGdob3N0IGNsaWNrLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlUmVxdWVzdENsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG91Y2hUYXB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xpY2sgbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAnYm90dG9tJ319XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJSZWZyZXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIkhlbHAgJmFtcDsgZmVlZGJhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2V0dGluZ3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2lnbiBvdXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==