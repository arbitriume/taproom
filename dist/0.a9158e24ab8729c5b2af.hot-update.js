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

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: 'render',
        value: function render() {
            var pages = ['Company Logo', 'Features', 'Our Team', 'News', 'Contact', 'Admin'];
            var navLinks = pages.map(function (page, index) {
                return _react2.default.createElement(
                    'a',
                    { href: "/" + page, 'class': 'nav_page', key: index },
                    page
                );
            });

            return _react2.default.createElement(
                'nav',
                { 'class': 'nav_bar' },
                navLinks
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7aUNBQ0E7QUFDTCxnQkFBTUMsUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3pDLHVCQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLE1BQU1ELElBQWYsRUFBcUIsU0FBTSxVQUEzQixFQUFzQyxLQUFLQyxLQUEzQztBQUNLRDtBQURMLGlCQURKO0FBS0YsYUFOZ0IsQ0FBakI7O0FBUUEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFNBQU0sU0FBWDtBQUFzQkY7QUFBdEIsYUFBUDtBQUNIOzs7O0VBWnVCLGdCQUFNSSxTIiwiZmlsZSI6IjAuYTkxNThlMjRhYjg3MjljNWIyYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbJ0NvbXBhbnkgTG9nbycsJ0ZlYXR1cmVzJywgJ091ciBUZWFtJywgJ05ld3MnLCAnQ29udGFjdCcsICdBZG1pbiddO1xuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiL1wiICsgcGFnZX0gY2xhc3M9XCJuYXZfcGFnZVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8bmF2IGNsYXNzPSduYXZfYmFyJz57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==