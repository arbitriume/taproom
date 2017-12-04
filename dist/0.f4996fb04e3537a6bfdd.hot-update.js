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
        key: 'handleClick',
        value: function handleClick() {
            var open = this.state.open;
            open = !open;
            this.setState({ open: open });
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
                    open: this.state.open
                })
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVhQSxjLFdBQUFBLGM7OztBQUNULDhCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFNO0FBREcsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQTtBQU5VO0FBT2I7O0FBRUY7Ozs7QUFJQTs7Ozs7O3NDQUllO0FBQ1YsZ0JBQUlGLE9BQUssS0FBS0QsS0FBTCxDQUFXQyxJQUFwQjtBQUNBQSxtQkFBSyxDQUFDQSxJQUFOO0FBQ0EsaUJBQUtHLFFBQUwsQ0FBYyxFQUFDSCxNQUFNQSxJQUFQLEVBQWQ7QUFDSDs7QUFFRjs7Ozs7Ozs7OztpQ0FPVTtBQUNMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxLQUFJLFdBQVQsRUFBcUIsV0FBVSxVQUEvQjtBQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLEdBQVQsRUFBYyxXQUFVLFVBQXhCLEVBQW1DLFNBQVMsS0FBS0MsV0FBakQ7QUFDSztBQURMLGlCQURKO0FBSUk7QUFDSSwwQkFBTSxLQUFLRixLQUFMLENBQVdDO0FBRHJCO0FBSkosYUFESjtBQVdIOzs7O0VBM0MrQixnQkFBTUksUyIsImZpbGUiOiIwLmY0OTk2ZmIwNGUzNTM3YTZiZmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ2luTWVudSAgZnJvbSAnLi9Mb2dpbk1lbnUnO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAvKiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9Ki9cblxuICAgLyogY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH0qL1xuXG4gICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGxldCBvcGVuPXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgb3Blbj0hb3BlbjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbjogb3Blbn0pO1xuICAgIH1cblxuICAgLyogaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KXtcbiAgICAgICAgaWYgKCF0aGlzLnJlZnMubWVnYU1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJtZWdhTWVudTFcIiBjbGFzc05hbWU9XCJuYXZfaXRlbVwiID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X3RleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8TG9naW5NZW51XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=