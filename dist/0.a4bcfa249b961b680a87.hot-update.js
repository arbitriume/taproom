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

var _LoginComponent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/LoginComponent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
                        { href: "#", className: 'nav_item nav_text', onClick: _this2.handleClick.bind(_this2, index) },
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
                navLinks,
                _react2.default.createElement(_LoginComponent.LoginComponent, null)
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJzZXRTdGF0ZSIsImV2ZW50IiwicmVmcyIsIm1lZ2FNZW51IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFOVTtBQU9iOzs7OzZDQUVvQjtBQUNqQkUscUJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLGtCQUF4QyxFQUE0RCxLQUE1RDtBQUNIOzs7K0NBRXFCO0FBQ2xCQyxxQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsa0JBQTNDLEVBQStELEtBQS9EO0FBQ0g7OztvQ0FFV0ksSyxFQUFPO0FBQ2Y7QUFDQSxnQkFBSVAsVUFBUSxLQUFLRCxLQUFMLENBQVdDLE9BQXZCO0FBQ0FBLG9CQUFRTyxLQUFSLElBQWUsQ0FBQ1AsUUFBUU8sS0FBUixDQUFoQjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBQ1IsU0FBU0EsT0FBVixFQUFkO0FBQ0g7OzsyQ0FFa0JTLEssRUFBTTtBQUNyQjtBQUNBLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxRQUFuQixDQUE0QkgsTUFBTUksTUFBbEMsQ0FBTCxFQUFnRDtBQUM1QyxxQkFBS0wsUUFBTCxDQUFjO0FBQ1ZSLDZCQUFTO0FBREMsaUJBQWQ7QUFHSDtBQUNKOzs7aUNBRVE7QUFBQTs7QUFDTCxnQkFBTWMsUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsQ0FBa0UsY0FBbEUsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPVixLQUFQLEVBQWlCO0FBQ3pDO0FBQ0k7QUFDRTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxtQkFBeEIsRUFBNEMsU0FBUyxPQUFLTixXQUFMLENBQWlCQyxJQUFqQixTQUEyQkssS0FBM0IsQ0FBckQ7QUFDS1U7QUFETDs7QUFJQzs7Ozs7OztBQU5QO0FBYUYsYUFkZ0IsQ0FBakI7O0FBZ0JBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFBMEJGLHdCQUExQjtBQUFtQztBQUFuQyxhQUFQO0FBQ0g7Ozs7RUFyRHVCLGdCQUFNRyxTIiwiZmlsZSI6IjAuYTRiY2ZhMjQ5Yjk2MWI2ODBhODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGluZGV4KSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBsZXQgY2xpY2tlZD10aGlzLnN0YXRlLmNsaWNrZWQ7XG4gICAgICAgIGNsaWNrZWRbaW5kZXhdPSFjbGlja2VkW2luZGV4XTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2xpY2tlZDogY2xpY2tlZH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU91dHNpZGVDbGljayhldmVudCl7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBpZiAoIXRoaXMucmVmcy5tZWdhTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiLyosIFwiTG9nIEluXCIqL107XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgLy88ZGl2IHJlZj1cIm1lZ2FNZW51XCIgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl9pdGVtIG5hdl90ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsaW5kZXgpfSA+XG4gICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAvKiA8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIiArIFwiIFwiICsgdGhpcy5zdGF0ZS5jbGlja2VkW2luZGV4XX0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj4qL1xuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdl9iYXJcIj57bmF2TGlua3N9PExvZ2luQ29tcG9uZW50IC8+PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==