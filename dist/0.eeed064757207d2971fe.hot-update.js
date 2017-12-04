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
 * The UI Component representing the "Log In" section of the
 * navigation menu bar.
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

    /**
     * 
     */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlT3BlblN0YXRlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5jaG9yIiwiY3VycmVudFRhcmdldCIsIndpbmRvdyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1hQSxjLFdBQUFBLGM7OztBQUNULDhCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNO0FBREcsU0FBYjtBQUdBLGNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxjQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBTlU7QUFPYjs7QUFFRDs7Ozs7OzswQ0FHa0I7QUFDZCxnQkFBSUYsT0FBSyxLQUFLRCxLQUFMLENBQVdDLElBQXBCO0FBQ0FBLG1CQUFLLENBQUNBLElBQU47QUFDQSxpQkFBS0ksUUFBTCxDQUFjO0FBQ1ZKLHNCQUFNQTtBQURJLGFBQWQ7QUFHSDs7O29DQUVXSyxLLEVBQU87QUFDZkEsa0JBQU1DLGNBQU47QUFDQSxpQkFBS0YsUUFBTCxDQUFjO0FBQ1ZHLHdCQUFRRixNQUFNRztBQURKLGFBQWQ7QUFHQSxpQkFBS1AsZUFBTDtBQUNIOzs7aUNBRVE7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssS0FBSSxXQUFULEVBQXFCLFdBQVUsV0FBL0I7QUFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSwyQkFBeEIsRUFBb0QsU0FBUyxLQUFLRSxXQUFsRTtBQUNLO0FBREwsaUJBREo7QUFJSTtBQUNJLDBCQUFNLEtBQUtKLEtBQUwsQ0FBV0MsSUFEckI7QUFFSSx3Q0FBb0IsS0FBS0MsZUFGN0I7QUFHSSw0QkFBUSxLQUFLRixLQUFMLENBQVdRLE1BQVgsSUFBcUJFO0FBSGpDO0FBSkosYUFESjtBQWFIOzs7O0VBM0MrQixnQkFBTUMsUyIsImZpbGUiOiIwLmVlZWQwNjQ3NTcyMDdkMjk3MWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ2luTWVudSAgZnJvbSAnLi9Mb2dpbk1lbnUnO1xuXG4vKipcbiAqIFRoZSBVSSBDb21wb25lbnQgcmVwcmVzZW50aW5nIHRoZSBcIkxvZyBJblwiIHNlY3Rpb24gb2YgdGhlXG4gKiBuYXZpZ2F0aW9uIG1lbnUgYmFyLlxuICpcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUgPSB0aGlzLnRvZ2dsZU9wZW5TdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIHRvZ2dsZU9wZW5TdGF0ZSgpIHtcbiAgICAgICAgbGV0IG9wZW49dGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgICBvcGVuPSFvcGVuO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbmNob3I6IGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9nZ2xlT3BlblN0YXRlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJtZWdhTWVudTFcIiBjbGFzc05hbWU9XCJsb2dpbl9ib3hcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X2xvZyBuYXZfaXRlbSBuYXZfdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9ID5cbiAgICAgICAgICAgICAgICAgICAge1wiTG9nIEluXCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxMb2dpbk1lbnVcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXF1ZXN0Q2xvc2U9e3RoaXMudG9nZ2xlT3BlblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9e3RoaXMuc3RhdGUuYW5jaG9yIHx8IHdpbmRvd31cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=