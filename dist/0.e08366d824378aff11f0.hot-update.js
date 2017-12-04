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

        return _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this, props));

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

    _createClass(LoginMenu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.props.open,
                        anchorEl: this.props.anchor,
                        anchorOrigin: { horizontal: 'left', vertical: 'top' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.props.handleRequestClose,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJwcm9wcyIsIm9wZW4iLCJhbmNob3IiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFFakIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxSEFDVEEsS0FEUzs7QUFHZjtBQUNHO0FBQ0g7O0FBRUE7QUFDQTtBQUNIOztBQUVEOzs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7aUNBTVM7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFFSTtBQUFBO0FBQUE7QUFDSSw4QkFBTSxLQUFLQSxLQUFMLENBQVdDLElBRHJCO0FBRUksa0NBQVUsS0FBS0QsS0FBTCxDQUFXRSxNQUZ6QjtBQUdJLHNDQUFjLEVBQUNDLFlBQVksTUFBYixFQUFxQkMsVUFBVSxLQUEvQixFQUhsQjtBQUlJLHNDQUFjLEVBQUNELFlBQVksTUFBYixFQUFxQkMsVUFBVSxLQUEvQixFQUpsQjtBQUtJLHdDQUFnQixLQUFLSixLQUFMLENBQVdLLGtCQUwvQjtBQU1JO0FBTko7QUFRSTtBQUFBO0FBQUE7QUFDSSw0RUFBVSxhQUFZLFNBQXRCLEdBREo7QUFFSSw0RUFBVSxhQUFZLGlCQUF0QixHQUZKO0FBR0ksNEVBQVUsYUFBWSxVQUF0QixHQUhKO0FBSUksNEVBQVUsYUFBWSxVQUF0QjtBQUpKO0FBUko7QUFGSixhQURKO0FBb0JIOzs7O0VBbERrQyxnQkFBTUMsUzs7a0JBQXhCUCxTIiwiZmlsZSI6IjAuZTA4MzY2ZDgyNDM3OGFmZjExZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvL3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgIC8vIHRoaXMub3BlbjogdGhpcy5wcm9wcy5vcGVuXG4gICAgICAgIC8vfTtcblxuICAgICAgICAvL3RoaXMuaGFuZGxlVG91Y2hUYXAgPSB0aGlzLmhhbmRsZVRvdWNoVGFwLmJpbmQodGhpcyk7XG4gICAgICAgIC8vdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgfTsqL1xuXG4gICAgLypoYW5kbGVSZXF1ZXN0Q2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07Ki9cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnByb3BzLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJ319XG4gICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLnByb3BzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtQb3BvdmVyQW5pbWF0aW9uVmVydGljYWx9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlJlZnJlc2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiSGVscCAmYW1wOyBmZWVkYmFja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJTZXR0aW5nc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJTaWduIG91dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbk1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9