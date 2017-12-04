webpackHotUpdate(0,{

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _LoginComponent = __webpack_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
var NavBar = exports.NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: 'render',


        /**
         * Renders the navigation menu bar and associated menu components.
         *
         * @function
         */
        value: function render() {
            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin"];
            var navLinks = pages.map(function (page, index) {
                return _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_item nav_text', key: index },
                    page
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

/***/ }),

/***/ 344:
false,

/***/ 89:
/***/ (function(module, exports) {

throw new Error("Module build failed: Unknown word (55:1)\n\n  53 | //.mega-menu{\n  54 | //    display: none;\n> 55 | //}\n     | ^\n  56 | \n  57 | //.mega-menu.true{\n  58 |   //  display: block;\n");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS2FBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7OztBQUVUOzs7OztpQ0FLUztBQUNMLGdCQUFNQyxRQUFRLENBQUMsY0FBRCxFQUFnQixVQUFoQixFQUE0QixVQUE1QixFQUF3QyxNQUF4QyxFQUFnRCxTQUFoRCxFQUEyRCxPQUEzRCxDQUFkO0FBQ0EsZ0JBQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDekMsdUJBQ007QUFBQTtBQUFBLHNCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsbUJBQXhCLEVBQTRDLEtBQUtBLEtBQWpEO0FBQ0tEO0FBREwsaUJBRE47QUFLRixhQU5nQixDQUFqQjs7QUFRQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQTBCRix3QkFBMUI7QUFBbUM7QUFBbkMsYUFBUDtBQUNIOzs7O0VBbEJ1QixnQkFBTUksUyIsImZpbGUiOiIwLmRjNGMyNWM2MWVhODVlYTAyNWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL0xvZ2luQ29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgVUkgQ29tcG9uZW50IHJlcHJlc2VudGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGJhciB0aGF0IHNwYW5zIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgbmF2aWdhdGlvbiBtZW51IGJhciBhbmQgYXNzb2NpYXRlZCBtZW51IGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfaXRlbSBuYXZfdGV4dFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZfYmFyXCI+e25hdkxpbmtzfTxMb2dpbkNvbXBvbmVudCAvPjwvbmF2PlxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=