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
                    { ref: 'megaMenu', className: 'nav_wrapper' },
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'nav_item', onClick: _this2.handleClick.bind(_this2, index), key: index },
                        page
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: "mega-menu" + " " + _this2.state.clicked[index] },
                        _react2.default.createElement(
                            'div',
                            { className: 'mega-menu-content' },
                            _react2.default.createElement(
                                'p',
                                null,
                                page
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJzZXRTdGF0ZSIsImV2ZW50IiwicmVmcyIsIm1lZ2FNZW51IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFOVTtBQU9iOzs7OzZDQUVvQjtBQUNqQkUscUJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLGtCQUF4QyxFQUE0RCxLQUE1RDtBQUNIOzs7K0NBRXFCO0FBQ2xCQyxxQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsa0JBQTNDLEVBQStELEtBQS9EO0FBQ0g7OztvQ0FFV0ksSyxFQUFPO0FBQ2YsZ0JBQUlQLFVBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QjtBQUNBQSxvQkFBUU8sS0FBUixJQUFlLENBQUNQLFFBQVFPLEtBQVIsQ0FBaEI7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUNSLFNBQVNBLE9BQVYsRUFBZDtBQUNIOzs7MkNBRWtCUyxLLEVBQU07QUFDckIsZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLFFBQW5CLENBQTRCSCxNQUFNSSxNQUFsQyxDQUFMLEVBQWdEO0FBQzVDLHFCQUFLTCxRQUFMLENBQWM7QUFDVlIsNkJBQVM7QUFEQyxpQkFBZDtBQUdIO0FBQ0o7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFNYyxRQUFRLENBQUMsY0FBRCxFQUFnQixVQUFoQixFQUE0QixVQUE1QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxFQUEyRCxPQUEzRCxFQUFvRSxRQUFwRSxDQUFkO0FBQ0EsZ0JBQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9WLEtBQVAsRUFBaUI7QUFDekMsdUJBQ0k7QUFBQTtBQUFBLHNCQUFLLEtBQUksVUFBVCxFQUFvQixXQUFVLGFBQTlCO0FBQ0U7QUFBQTtBQUFBLDBCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsVUFBeEIsRUFBbUMsU0FBUyxPQUFLTixXQUFMLENBQWlCQyxJQUFqQixTQUEyQkssS0FBM0IsQ0FBNUMsRUFBK0UsS0FBS0EsS0FBcEY7QUFDS1U7QUFETCxxQkFERjtBQUtJO0FBQUE7QUFBQSwwQkFBSyxXQUFXLGNBQWMsR0FBZCxHQUFvQixPQUFLbEIsS0FBTCxDQUFXQyxPQUFYLENBQW1CTyxLQUFuQixDQUFwQztBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUlVO0FBQUo7QUFESjtBQURKO0FBTEosaUJBREo7QUFhRixhQWRnQixDQUFqQjs7QUFnQkEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUEwQkY7QUFBMUIsYUFBUDtBQUNIOzs7O0VBbkR1QixnQkFBTUcsUyIsImZpbGUiOiIwLjVmZDM1NzgzYTVkMjBlZTcxZDFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgbGV0IGNsaWNrZWQ9dGhpcy5zdGF0ZS5jbGlja2VkO1xuICAgICAgICBjbGlja2VkW2luZGV4XT0hY2xpY2tlZFtpbmRleF07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IGNsaWNrZWR9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpe1xuICAgICAgICBpZiAoIXRoaXMucmVmcy5tZWdhTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiLCBcIkxvZyBJblwiXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51XCIgY2xhc3NOYW1lPVwibmF2X3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsaW5kZXgpfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIiArIFwiIFwiICsgdGhpcy5zdGF0ZS5jbGlja2VkW2luZGV4XX0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZfYmFyXCI+e25hdkxpbmtzfTwvbmF2PlxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=