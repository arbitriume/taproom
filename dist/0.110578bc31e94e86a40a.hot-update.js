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
            this.setState({
                anchor: event.currentTarget
            });
            this.toggleOpenState();
            debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJvcGVuIiwidG9nZ2xlT3BlblN0YXRlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwic2V0U3RhdGUiLCJldmVudCIsImFuY2hvciIsImN1cnJlbnRUYXJnZXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRWFBLGMsV0FBQUEsYzs7O0FBQ1QsOEJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU07QUFERyxTQUFiO0FBR0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQTtBQVBVO0FBUWI7O0FBRUY7Ozs7QUFJQTs7Ozs7OzBDQUltQjtBQUNkLGdCQUFJRixPQUFLLEtBQUtELEtBQUwsQ0FBV0MsSUFBcEI7QUFDQUEsbUJBQUssQ0FBQ0EsSUFBTjtBQUNBLGlCQUFLSSxRQUFMLENBQWMsRUFBQ0osTUFBTUEsSUFBUCxFQUFkO0FBQ0g7OztvQ0FFV0ssSyxFQUFPO0FBQ2YsaUJBQUtELFFBQUwsQ0FBYztBQUNWRSx3QkFBUUQsTUFBTUU7QUFESixhQUFkO0FBR0EsaUJBQUtOLGVBQUw7QUFDQTtBQUNIO0FBQ0Y7Ozs7Ozs7Ozs7aUNBT1U7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssS0FBSSxXQUFULEVBQXFCLFdBQVUsVUFBL0I7QUFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxVQUF4QixFQUFtQyxTQUFTLEtBQUtFLFdBQWpEO0FBQ0s7QUFETCxpQkFESjtBQUlJO0FBQ0ksMEJBQU0sS0FBS0osS0FBTCxDQUFXQyxJQURyQjtBQUVJLHdDQUFvQixLQUFLQyxlQUY3QjtBQUdJLDRCQUFRLEtBQUtGLEtBQUwsQ0FBV087QUFIdkI7QUFKSixhQURKO0FBYUg7Ozs7RUFyRCtCLGdCQUFNRSxTIiwiZmlsZSI6IjAuMTEwNTc4YmMzMWU5NGU4NmE0MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW5NZW51ICBmcm9tICcuL0xvZ2luTWVudSc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG9nZ2xlT3BlblN0YXRlID0gdGhpcy50b2dnbGVPcGVuU3RhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAvKiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9Ki9cblxuICAgLyogY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH0qL1xuXG4gICAgdG9nZ2xlT3BlblN0YXRlKCkge1xuICAgICAgICBsZXQgb3Blbj10aGlzLnN0YXRlLm9wZW47XG4gICAgICAgIG9wZW49IW9wZW47XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IG9wZW59KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuY2hvcjogZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgfVxuICAgLyogaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KXtcbiAgICAgICAgaWYgKCF0aGlzLnJlZnMubWVnYU1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiByZWY9XCJtZWdhTWVudTFcIiBjbGFzc05hbWU9XCJuYXZfaXRlbVwiID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X3RleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8TG9naW5NZW51XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVxdWVzdENsb3NlPXt0aGlzLnRvZ2dsZU9wZW5TdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPXt0aGlzLnN0YXRlLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=