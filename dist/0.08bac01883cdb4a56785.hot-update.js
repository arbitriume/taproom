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
            var pages = ['Company Logo', 'Features', 'Our Team', 'News', 'Admin'];
            var navLinks = pages.map(function (page) {
                return _react2.default.createElement(
                    'a',
                    { href: "/" + page },
                    page
                );
            });

            return _react2.default.createElement(
                'nav',
                null,
                navLinks
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVhQSxNLFdBQUFBLE07Ozs7Ozs7Ozs7O2lDQUNBO0FBQ0wsZ0JBQU1DLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELE9BQWhELENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLGdCQUFRO0FBQ2hDLHVCQUNJO0FBQUE7QUFBQSxzQkFBRyxNQUFNLE1BQU1DLElBQWY7QUFDS0E7QUFETCxpQkFESjtBQUtGLGFBTmdCLENBQWpCOztBQVFBLG1CQUFPO0FBQUE7QUFBQTtBQUFNRjtBQUFOLGFBQVA7QUFDSDs7OztFQVp1QixnQkFBTUcsUyIsImZpbGUiOiIwLjA4YmFjMDE4ODNjZGI0YTU2Nzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gWydDb21wYW55IExvZ28nLCdGZWF0dXJlcycsICdPdXIgVGVhbScsICdOZXdzJywgJ0FkbWluJ107XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gcGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgPGEgaHJlZj17XCIvXCIgKyBwYWdlfT5cbiAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPG5hdj57bmF2TGlua3N9PC9uYXY+XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==