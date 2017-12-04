webpackHotUpdate(0,{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _LoginMenu = __webpack_require__(167);

var _LoginMenu2 = _interopRequireDefault(_LoginMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The UI Component 
 *
 * @class
 */
var LoginComponent = exports.LoginComponent = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this));

        _this.state = {
            open: false
        };
        _this.toggleOpenState = _this.toggleOpenState.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(LoginComponent, [{
        key: 'toggleOpenState',
        value: function toggleOpenState() {
            var open = this.state.open;
            open = !open;
            this.setState({
                open: open
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            event.preventDefault();
            this.setState({
                anchor: event.currentTarget
            });
            this.toggleOpenState();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu1', className: 'login_box' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_log nav_item nav_text', onClick: this.handleClick },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, {
                    open: this.state.open,
                    handleRequestClose: this.toggleOpenState,
                    anchor: this.state.anchor || window
                })
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlT3BlblN0YXRlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5jaG9yIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS2FBLGMsV0FBQUEsYzs7O0FBQ1QsOEJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU07QUFERyxTQUFiO0FBR0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFOVTtBQU9iOzs7OzBDQUVpQjtBQUNkLGdCQUFJRixPQUFLLEtBQUtELEtBQUwsQ0FBV0MsSUFBcEI7QUFDQUEsbUJBQUssQ0FBQ0EsSUFBTjtBQUNBLGlCQUFLSSxRQUFMLENBQWM7QUFDVkosc0JBQU1BO0FBREksYUFBZDtBQUdIOzs7b0NBRVdLLEssRUFBTztBQUNmQSxrQkFBTUMsY0FBTjtBQUNBLGlCQUFLRixRQUFMLENBQWM7QUFDVkcsd0JBQVFGLE1BQU1HO0FBREosYUFBZDtBQUdBLGlCQUFLUCxlQUFMO0FBQ0g7OztpQ0FFUTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxLQUFJLFdBQVQsRUFBcUIsV0FBVSxXQUEvQjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLDJCQUF4QixFQUFvRCxTQUFTLEtBQUtFLFdBQWxFO0FBQ0s7QUFETCxpQkFESjtBQUlJO0FBQ0ksMEJBQU0sS0FBS0osS0FBTCxDQUFXQyxJQURyQjtBQUVJLHdDQUFvQixLQUFLQyxlQUY3QjtBQUdJLDRCQUFRLEtBQUtGLEtBQUwsQ0FBV1EsTUFBWCxJQUFxQkU7QUFIakM7QUFKSixhQURKO0FBYUg7Ozs7RUF4QytCLGdCQUFNQyxTIiwiZmlsZSI6IjAuOTY5NTJmZGIwZDUwYWFkNmY5YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5NZW51ICBmcm9tICcuL0xvZ2luTWVudSc7XG5cbi8qKlxuICogVGhlIFVJIENvbXBvbmVudCBcbiAqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG9nZ2xlT3BlblN0YXRlID0gdGhpcy50b2dnbGVPcGVuU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVPcGVuU3RhdGUoKSB7XG4gICAgICAgIGxldCBvcGVuPXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgb3Blbj0hb3BlbjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBvcGVuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYW5jaG9yOiBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW5TdGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwibWVnYU1lbnUxXCIgY2xhc3NOYW1lPVwibG9naW5fYm94XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl9sb2cgbmF2X2l0ZW0gbmF2X3RleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8TG9naW5NZW51XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVxdWVzdENsb3NlPXt0aGlzLnRvZ2dsZU9wZW5TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnN0YXRlLmFuY2hvciB8fCB3aW5kb3d9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9