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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJMb2dpbk1lbnUiLCJwcm9wcyIsInN0YXRlIiwib3BlbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsImhhbmRsZVRvdWNoVGFwIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiaGFuZGxlUmVxdWVzdENsb3NlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNO0FBREcsU0FBYjtBQUhlO0FBTWxCOzs7O3VDQUVjQyxLLEVBQU87QUFDbEI7QUFDQUEsa0JBQU1DLGNBQU47O0FBRUEsaUJBQUtDLFFBQUwsQ0FBYztBQUNWSCxzQkFBTSxJQURJO0FBRVZJLDBCQUFVSCxNQUFNSTtBQUZOLGFBQWQ7QUFJSDs7OzZDQUVvQjtBQUNqQixpQkFBS0YsUUFBTCxDQUFjO0FBQ1ZILHNCQUFNO0FBREksYUFBZDtBQUdIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUNJLDZCQUFTLEtBQUtNLGNBRGxCO0FBRUksMkJBQU07QUFGVixrQkFESjtBQUtJO0FBQUE7QUFBQTtBQUNJLDhCQUFNLEtBQUtQLEtBQUwsQ0FBV0MsSUFEckI7QUFFSSxrQ0FBVSxLQUFLRCxLQUFMLENBQVdLLFFBRnpCO0FBR0ksc0NBQWMsRUFBQ0csWUFBWSxNQUFiLEVBQXFCQyxVQUFVLFFBQS9CLEVBSGxCO0FBSUksc0NBQWMsRUFBQ0QsWUFBWSxNQUFiLEVBQXFCQyxVQUFVLEtBQS9CLEVBSmxCO0FBS0ksd0NBQWdCLEtBQUtDO0FBTHpCO0FBT0k7QUFBQTtBQUFBO0FBQ0ksNEVBQVUsYUFBWSxTQUF0QixHQURKO0FBRUksNEVBQVUsYUFBWSxpQkFBdEIsR0FGSjtBQUdJLDRFQUFVLGFBQVksVUFBdEIsR0FISjtBQUlJLDRFQUFVLGFBQVksVUFBdEI7QUFKSjtBQVBKO0FBTEosYUFESjtBQXNCSDs7OztFQWpEa0MsZ0JBQU1DLFM7O2tCQUF4QmIsUyIsImZpbGUiOiIwLmVhNjkwNzlhNjM1ZDQ0MGQzMWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcbmltcG9ydCBNZW51IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvdWNoVGFwfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNsaWNrIG1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlJlZnJlc2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiSGVscCAmYW1wOyBmZWVkYmFja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJTZXR0aW5nc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJTaWduIG91dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbk1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9