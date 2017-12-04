webpackHotUpdate(0,{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NavBar = __webpack_require__(165);

var _MuiThemeProvider = __webpack_require__(340);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

__webpack_require__(343);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
var WelcomePage = function (_React$Component) {
    _inherits(WelcomePage, _React$Component);

    function WelcomePage() {
        _classCallCheck(this, WelcomePage);

        return _possibleConstructorReturn(this, (WelcomePage.__proto__ || Object.getPrototypeOf(WelcomePage)).apply(this, arguments));
    }

    _createClass(WelcomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'main_header' },
                    _react2.default.createElement(_NavBar.NavBar, null)
                )
            );
        }
    }]);

    return WelcomePage;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(WelcomePage, null), document.getElementById("app"));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJXZWxjb21lUGFnZSIsIkNvbXBvbmVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxXOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGFBQWY7QUFDSTtBQURKO0FBREosYUFESjtBQU9IOzs7O0VBVHFCLGdCQUFNQyxTOztBQVloQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxXQUFELE9BQWhCLEVBQWlDQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQWpDLEUiLCJmaWxlIjoiMC5kM2U0MTg5MzFmMTlkYTE3NjY2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5cbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLyoqXG4gKiBUaGUgVUkgQ29tcG9uZW50IHJlcHJlc2VudGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGJhciB0aGF0IHNwYW5zIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gKlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIFdlbGNvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8V2VsY29tZVBhZ2UgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9