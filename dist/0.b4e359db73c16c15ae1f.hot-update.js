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
                    { ref: 'megaMenu', className: 'nav_item' },
                    _react2.default.createElement(
                        'a',
                        { href: "#", onClick: _this2.handleClick.bind(_this2, index), key: index },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJzdGF0ZSIsImNsaWNrZWQiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJzZXRTdGF0ZSIsImV2ZW50IiwicmVmcyIsIm1lZ2FNZW51IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLHFCQUFTO0FBREEsU0FBYjtBQUdBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsT0FBMUI7QUFOVTtBQU9iOzs7OzZDQUVvQjtBQUNqQkUscUJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtGLGtCQUF4QyxFQUE0RCxLQUE1RDtBQUNIOzs7K0NBRXFCO0FBQ2xCQyxxQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS0gsa0JBQTNDLEVBQStELEtBQS9EO0FBQ0g7OztvQ0FFV0ksSyxFQUFPO0FBQ2YsZ0JBQUlQLFVBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QjtBQUNBQSxvQkFBUU8sS0FBUixJQUFlLENBQUNQLFFBQVFPLEtBQVIsQ0FBaEI7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUNSLFNBQVNBLE9BQVYsRUFBZDtBQUNIOzs7MkNBRWtCUyxLLEVBQU07QUFDckIsZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLFFBQW5CLENBQTRCSCxNQUFNSSxNQUFsQyxDQUFMLEVBQWdEO0FBQzVDLHFCQUFLTCxRQUFMLENBQWM7QUFDVlIsNkJBQVM7QUFEQyxpQkFBZDtBQUdIO0FBQ0o7OztpQ0FFUTtBQUFBOztBQUNMLGdCQUFNYyxRQUFRLENBQUMsY0FBRCxFQUFnQixVQUFoQixFQUE0QixVQUE1QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxFQUEyRCxPQUEzRCxFQUFvRSxRQUFwRSxDQUFkO0FBQ0EsZ0JBQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9WLEtBQVAsRUFBaUI7QUFDekMsdUJBQ0k7QUFBQTtBQUFBLHNCQUFLLEtBQUksVUFBVCxFQUFvQixXQUFVLFVBQTlCO0FBQ0U7QUFBQTtBQUFBLDBCQUFHLE1BQU0sR0FBVCxFQUFjLFNBQVMsT0FBS04sV0FBTCxDQUFpQkMsSUFBakIsU0FBMkJLLEtBQTNCLENBQXZCLEVBQTBELEtBQUtBLEtBQS9EO0FBQ0tVO0FBREwscUJBREY7QUFLSTtBQUFBO0FBQUEsMEJBQUssV0FBVyxjQUFjLEdBQWQsR0FBb0IsT0FBS2xCLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQk8sS0FBbkIsQ0FBcEM7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxtQkFBZjtBQUNJO0FBQUE7QUFBQTtBQUFJVTtBQUFKO0FBREo7QUFESjtBQUxKLGlCQURKO0FBYUYsYUFkZ0IsQ0FBakI7O0FBZ0JBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFBMEJGO0FBQTFCLGFBQVA7QUFDSDs7OztFQW5EdUIsZ0JBQU1HLFMiLCJmaWxlIjoiMC5iNGUzNTlkYjczYzE2YzE1YWUxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGluZGV4KSB7XG4gICAgICAgIGxldCBjbGlja2VkPXRoaXMuc3RhdGUuY2xpY2tlZDtcbiAgICAgICAgY2xpY2tlZFtpbmRleF09IWNsaWNrZWRbaW5kZXhdO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGlja2VkOiBjbGlja2VkfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KXtcbiAgICAgICAgaWYgKCF0aGlzLnJlZnMubWVnYU1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xpY2tlZDogW11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYWdlcyA9IFtcIkNvbXBhbnkgTG9nb1wiLFwiRmVhdHVyZXNcIiwgXCJPdXIgVGVhbVwiLCBcIk5ld3NcIiwgXCJDb250YWN0XCIsIFwiQWRtaW5cIiwgXCJMb2cgSW5cIl07XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgPGRpdiByZWY9XCJtZWdhTWVudVwiIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCI+XG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyxpbmRleCl9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1lZ2EtbWVudVwiICsgXCIgXCIgKyB0aGlzLnN0YXRlLmNsaWNrZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdl9iYXJcIj57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==