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
            debugger;
            var clicked = this.state.clicked;
            clicked[index] = !clicked[index];
            this.setState({ clicked: clicked });
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(event) {
            debugger;
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

            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin" /*, "Log In"*/];
            var navLinks = pages.map(function (page, index) {
                return (
                    //<div ref="megaMenu" className="nav_item" key={index}>
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'nav_page', onClick: _this2.handleClick.bind(_this2, index) },
                        page
                    )

                    /* <div className={"mega-menu" + " " + this.state.clicked[index]}>
                         <div className="mega-menu-content">
                             <p>{page}</p>
                         </div>
                     </div>
                    </div>*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJzZXRTdGF0ZSIsImV2ZW50IiwicmVmcyIsIm1lZ2FNZW51IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFOVTtBQU9iOzs7OzZDQUVvQjtBQUNqQkUscUJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLGtCQUF4QyxFQUE0RCxLQUE1RDtBQUNIOzs7K0NBRXFCO0FBQ2xCQyxxQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsa0JBQTNDLEVBQStELEtBQS9EO0FBQ0g7OztvQ0FFV0ksSyxFQUFPO0FBQ2Y7QUFDQSxnQkFBSVAsVUFBUSxLQUFLRCxLQUFMLENBQVdDLE9BQXZCO0FBQ0FBLG9CQUFRTyxLQUFSLElBQWUsQ0FBQ1AsUUFBUU8sS0FBUixDQUFoQjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBQ1IsU0FBU0EsT0FBVixFQUFkO0FBQ0g7OzsyQ0FFa0JTLEssRUFBTTtBQUNyQjtBQUNBLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxRQUFuQixDQUE0QkgsTUFBTUksTUFBbEMsQ0FBTCxFQUFnRDtBQUM1QyxxQkFBS0wsUUFBTCxDQUFjO0FBQ1ZSLDZCQUFTO0FBREMsaUJBQWQ7QUFHSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxnQkFBTWMsUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsQ0FBa0UsY0FBbEUsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPVixLQUFQLEVBQWlCO0FBQ3pDO0FBQ0k7QUFDRTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxVQUF4QixFQUFtQyxTQUFTLE9BQUtOLFdBQUwsQ0FBaUJDLElBQWpCLFNBQTJCSyxLQUEzQixDQUE1QztBQUNLVTtBQURMOztBQUlDOzs7Ozs7O0FBTlA7QUFhRixhQWRnQixDQUFqQjs7QUFnQkEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUEwQkY7QUFBMUIsYUFBUDtBQUNIOzs7O0VBckR1QixnQkFBTUcsUyIsImZpbGUiOiIwLjhiZWU3MmZhYWMxMjAzNzRhOGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGxldCBjbGlja2VkPXRoaXMuc3RhdGUuY2xpY2tlZDtcbiAgICAgICAgY2xpY2tlZFtpbmRleF09IWNsaWNrZWRbaW5kZXhdO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGlja2VkOiBjbGlja2VkfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KXtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmICghdGhpcy5yZWZzLm1lZ2FNZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbXCJDb21wYW55IExvZ29cIixcIkZlYXR1cmVzXCIsIFwiT3VyIFRlYW1cIiwgXCJOZXdzXCIsIFwiQ29udGFjdFwiLCBcIkFkbWluXCIvKiwgXCJMb2cgSW5cIiovXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAvLzxkaXYgcmVmPVwibWVnYU1lbnVcIiBjbGFzc05hbWU9XCJuYXZfaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X3BhZ2VcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyxpbmRleCl9ID5cbiAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgIC8qIDxkaXYgY2xhc3NOYW1lPXtcIm1lZ2EtbWVudVwiICsgXCIgXCIgKyB0aGlzLnN0YXRlLmNsaWNrZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PiovXG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2X2JhclwiPntuYXZMaW5rc308L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9