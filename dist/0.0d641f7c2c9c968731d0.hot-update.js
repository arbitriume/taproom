webpackHotUpdate(0,{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = exports.NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));

        _this.state = {
            clicked: []
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        return _this;
    }

    _createClass(NavBar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.addEventListener('click', this.handleOutsideClick, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(index) {
            var clicked = this.state.clicked;
            clicked[index] = !clicked[index];
            this.setState({ clicked: clicked });
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(event) {
            if (!this.refs.megaMenu.contains(event.target)) {
                this.setState({
                    clicked: []
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin", "Log In"];
            var navLinks = pages.map(function (page, index) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: "/" + page, className: 'nav_item', onClick: _this2.handleClick.bind(_this2, index), key: index },
                        page
                    ),
                    ',',
                    _react2.default.createElement(
                        'div',
                        { className: "mega-menu" + " " + _this2.state.clicked[index] },
                        _react2.default.createElement(
                            'div',
                            { className: 'mega-menu-content' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'First Menu'
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'nav',
                { className: 'nav_bar' },
                navLinks
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJzZXRTdGF0ZSIsImV2ZW50IiwicmVmcyIsIm1lZ2FNZW51IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFOVTtBQU9iOzs7OzZDQUVvQjtBQUNqQkUscUJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLGtCQUF4QyxFQUE0RCxLQUE1RDtBQUNIOzs7K0NBRXFCO0FBQ2xCQyxxQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsa0JBQTNDLEVBQStELEtBQS9EO0FBQ0g7OztvQ0FFV0ksSyxFQUFPO0FBQ2YsZ0JBQUlQLFVBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QjtBQUNBQSxvQkFBUU8sS0FBUixJQUFlLENBQUNQLFFBQVFPLEtBQVIsQ0FBaEI7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUNSLFNBQVNBLE9BQVYsRUFBZDtBQUNIOzs7MkNBRWtCUyxLLEVBQU07QUFDckIsZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLFFBQW5CLENBQTRCSCxNQUFNSSxNQUFsQyxDQUFMLEVBQWdEO0FBQzVDLHFCQUFLTCxRQUFMLENBQWM7QUFDVlIsNkJBQVM7QUFEQyxpQkFBZDtBQUdIO0FBQ0o7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFNYyxRQUFRLENBQUMsY0FBRCxFQUFnQixVQUFoQixFQUE0QixVQUE1QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxFQUEyRCxPQUEzRCxFQUFvRSxRQUFwRSxDQUFkO0FBQ0EsZ0JBQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9WLEtBQVAsRUFBaUI7QUFDekMsdUJBQ0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLDBCQUFHLE1BQU0sTUFBTVUsSUFBZixFQUFxQixXQUFVLFVBQS9CLEVBQTBDLFNBQVMsT0FBS2hCLFdBQUwsQ0FBaUJDLElBQWpCLFNBQTJCSyxLQUEzQixDQUFuRCxFQUFzRixLQUFLQSxLQUEzRjtBQUNLVTtBQURMLHFCQURGO0FBQUE7QUFJRTtBQUFBO0FBQUEsMEJBQUssV0FBVyxjQUFZLEdBQVosR0FBZ0IsT0FBS2xCLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQk8sS0FBbkIsQ0FBaEM7QUFDRTtBQUFBO0FBQUEsOEJBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGO0FBSkYsaUJBREo7QUFZRixhQWJnQixDQUFqQjs7QUFlQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQTBCUTtBQUExQixhQUFQO0FBQ0g7Ozs7RUFsRHVCLGdCQUFNRyxTIiwiZmlsZSI6IjAuMGQ2NDFmN2MyYzljOTY4NzMxZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xpY2tlZDogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhpbmRleCkge1xuICAgICAgICBsZXQgY2xpY2tlZD10aGlzLnN0YXRlLmNsaWNrZWQ7XG4gICAgICAgIGNsaWNrZWRbaW5kZXhdPSFjbGlja2VkW2luZGV4XTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2xpY2tlZDogY2xpY2tlZH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU91dHNpZGVDbGljayhldmVudCl7XG4gICAgICAgIGlmICghdGhpcy5yZWZzLm1lZ2FNZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbXCJDb21wYW55IExvZ29cIixcIkZlYXR1cmVzXCIsIFwiT3VyIFRlYW1cIiwgXCJOZXdzXCIsIFwiQ29udGFjdFwiLCBcIkFkbWluXCIsIFwiTG9nIEluXCJdO1xuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiL1wiICsgcGFnZX0gY2xhc3NOYW1lPVwibmF2X2l0ZW1cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyxpbmRleCl9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICAgIDwvYT4sXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1lZ2EtbWVudVwiK1wiIFwiK3RoaXMuc3RhdGUuY2xpY2tlZFtpbmRleF19PlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IE1lbnU8L3A+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2X2JhclwiPntuYXZMaW5rc308L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9