webpackHotUpdate(0,{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _LoginMenu = __webpack_require__(39);

var _LoginMenu2 = _interopRequireDefault(_LoginMenu);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        //this.handleOutsideClick = this.handleOutsideClick.bind(this);
        return _this;
    }

    /* componentWillMount() {
         document.addEventListener('click', this.handleOutsideClick, false);
     }*/

    /* componentWillUnmount(){
         document.removeEventListener('click', this.handleOutsideClick, false);
     }*/

    _createClass(LoginComponent, [{
        key: 'toggleOpenState',
        value: function toggleOpenState() {
            var open = this.state.open;
            open = !open;
            this.setState({ open: open });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            debugger;
            event.preventDefault();
            this.setState({
                anchor: event.currentTarget
            });
            this.toggleOpenState();
        }
        /* handleOutsideClick(event){
             if (!this.refs.megaMenu.contains(event.target)) {
                 this.setState({
                     clicked: false
                 });
             }
         }*/

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu1', className: 'nav_item' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_text', onClick: this.handleClick },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, {
                    open: this.state.open,
                    handleRequestClose: this.toggleOpenState,
                    anchor: this.state.anchor
                })
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlT3BlblN0YXRlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5jaG9yIiwiY3VycmVudFRhcmdldCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYUEsYyxXQUFBQSxjOzs7QUFDVCw4QkFBYztBQUFBOztBQUFBOztBQUVWLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxrQkFBTTtBQURHLFNBQWI7QUFHQSxjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBO0FBUFU7QUFRYjs7QUFFRjs7OztBQUlBOzs7Ozs7MENBSW1CO0FBQ2QsZ0JBQUlGLE9BQUssS0FBS0QsS0FBTCxDQUFXQyxJQUFwQjtBQUNBQSxtQkFBSyxDQUFDQSxJQUFOO0FBQ0EsaUJBQUtJLFFBQUwsQ0FBYyxFQUFDSixNQUFNQSxJQUFQLEVBQWQ7QUFDSDs7O29DQUVXSyxLLEVBQU87QUFDZjtBQUNBQSxrQkFBTUMsY0FBTjtBQUNBLGlCQUFLRixRQUFMLENBQWM7QUFDVkcsd0JBQVFGLE1BQU1HO0FBREosYUFBZDtBQUdBLGlCQUFLUCxlQUFMO0FBQ0g7QUFDRjs7Ozs7Ozs7OztpQ0FPVTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxLQUFJLFdBQVQsRUFBcUIsV0FBVSxVQUEvQjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLFVBQXhCLEVBQW1DLFNBQVMsS0FBS0UsV0FBakQ7QUFDSztBQURMLGlCQURKO0FBSUk7QUFDSSwwQkFBTSxLQUFLSixLQUFMLENBQVdDLElBRHJCO0FBRUksd0NBQW9CLEtBQUtDLGVBRjdCO0FBR0ksNEJBQVEsS0FBS0YsS0FBTCxDQUFXUTtBQUh2QjtBQUpKLGFBREo7QUFhSDs7OztFQXREK0IsZ0JBQU1FLFMiLCJmaWxlIjoiMC4wYWNmMmE4YmI1M2JmNjBlYzIxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbk1lbnUgIGZyb20gJy4vTG9naW5NZW51JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUgPSB0aGlzLnRvZ2dsZU9wZW5TdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAvL3RoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgIC8qIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH0qL1xuXG4gICAvKiBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfSovXG5cbiAgICB0b2dnbGVPcGVuU3RhdGUoKSB7XG4gICAgICAgIGxldCBvcGVuPXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgb3Blbj0hb3BlbjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbjogb3Blbn0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuY2hvcjogZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICB9XG4gICAvKiBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpe1xuICAgICAgICBpZiAoIXRoaXMucmVmcy5tZWdhTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9Ki9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51MVwiIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIgPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9ID5cbiAgICAgICAgICAgICAgICAgICAge1wiTG9nIEluXCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxMb2dpbk1lbnVcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXF1ZXN0Q2xvc2U9e3RoaXMudG9nZ2xlT3BlblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9e3RoaXMuc3RhdGUuYW5jaG9yfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==