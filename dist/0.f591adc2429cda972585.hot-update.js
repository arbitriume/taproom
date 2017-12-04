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

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

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
            open: _this.props.open ? _this.props.open : false
        };

        //this.handleTouchTap = this.handleTouchTap.bind(this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        return _this;
    }

    /*handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
         this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };*/

    _createClass(LoginMenu, [{
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
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.state.open,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.handleRequestClose,
                        animation: _Popover.PopoverAnimationVertical
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJwcm9wcyIsInN0YXRlIiwib3BlbiIsImhhbmRsZVJlcXVlc3RDbG9zZSIsImJpbmQiLCJzZXRTdGF0ZSIsImFuY2hvckVsIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNLE1BQUtGLEtBQUwsQ0FBV0UsSUFBWCxHQUFrQixNQUFLRixLQUFMLENBQVdFLElBQTdCLEdBQW9DO0FBRGpDLFNBQWI7O0FBSUE7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFSZTtBQVNsQjs7QUFFRDs7Ozs7Ozs7Ozs7NkNBVXFCO0FBQ2pCLGlCQUFLQyxRQUFMLENBQWM7QUFDVkgsc0JBQU07QUFESSxhQUFkO0FBR0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUVJO0FBQUE7QUFBQTtBQUNJLDhCQUFNLEtBQUtELEtBQUwsQ0FBV0MsSUFEckI7QUFFSSxrQ0FBVSxLQUFLRCxLQUFMLENBQVdLLFFBRnpCO0FBR0ksc0NBQWMsRUFBQ0MsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLFFBQS9CLEVBSGxCO0FBSUksc0NBQWMsRUFBQ0QsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLEtBQS9CLEVBSmxCO0FBS0ksd0NBQWdCLEtBQUtMLGtCQUx6QjtBQU1JO0FBTko7QUFRSTtBQUFBO0FBQUE7QUFDSSw0RUFBVSxhQUFZLFNBQXRCLEdBREo7QUFFSSw0RUFBVSxhQUFZLGlCQUF0QixHQUZKO0FBR0ksNEVBQVUsYUFBWSxVQUF0QixHQUhKO0FBSUksNEVBQVUsYUFBWSxVQUF0QjtBQUpKO0FBUko7QUFGSixhQURKO0FBb0JIOzs7O0VBbERrQyxnQkFBTU0sUzs7a0JBQXhCVixTIiwiZmlsZSI6IjAuZjU5MWFkYzI0MjljZGE5NzI1ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5wcm9wcy5vcGVuID8gdGhpcy5wcm9wcy5vcGVuIDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICAvL3RoaXMuaGFuZGxlVG91Y2hUYXAgPSB0aGlzLmhhbmRsZVRvdWNoVGFwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKmhhbmRsZVRvdWNoVGFwKGV2ZW50KSB7XG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgZ2hvc3QgY2xpY2suXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIH0pO1xuICAgIH07Ki9cblxuICAgIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnN0YXRlLmFuY2hvckVsfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAnYm90dG9tJ319XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfX1cbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlfVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiUmVmcmVzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJIZWxwICZhbXA7IGZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNldHRpbmdzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNpZ24gb3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=