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

var _LoginComponent = __webpack_require__(38);

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
            var pages = ["Company Logo", "Features", "Our Team", "News", "Contact", "Admin" /*, "Log In"*/];
            var navLinks = pages.map(function (page, index) {
                return (
                    //<div ref="megaMenu" className="nav_item" key={index}>
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'nav_item nav_text' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwYWdlcyIsIm5hdkxpbmtzIiwibWFwIiwicGFnZSIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7aUNBRUE7QUFDTCxnQkFBTUMsUUFBUSxDQUFDLGNBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsVUFBNUIsRUFBd0MsTUFBeEMsRUFBZ0QsU0FBaEQsRUFBMkQsT0FBM0QsQ0FBa0UsY0FBbEUsQ0FBZDtBQUNBLGdCQUFNQyxXQUFXRCxNQUFNRSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3pDO0FBQ0k7QUFDRTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxtQkFBeEI7QUFDS0Q7QUFETDs7QUFJQzs7Ozs7OztBQU5QO0FBYUYsYUFkZ0IsQ0FBakI7O0FBZ0JBLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFNBQWY7QUFBMEJGLHdCQUExQjtBQUFtQztBQUFuQyxhQUFQO0FBQ0g7Ozs7RUFyQnVCLGdCQUFNSSxTIiwiZmlsZSI6IjAuYjM3MjVjOTFlNjIyZDY2NDFlOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9Mb2dpbkNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwYWdlcyA9IFtcIkNvbXBhbnkgTG9nb1wiLFwiRmVhdHVyZXNcIiwgXCJPdXIgVGVhbVwiLCBcIk5ld3NcIiwgXCJDb250YWN0XCIsIFwiQWRtaW5cIi8qLCBcIkxvZyBJblwiKi9dO1xuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgIC8vPGRpdiByZWY9XCJtZWdhTWVudVwiIGNsYXNzTmFtZT1cIm5hdl9pdGVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9e1wiI1wifSBjbGFzc05hbWU9XCJuYXZfaXRlbSBuYXZfdGV4dFwiID5cbiAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgIC8qIDxkaXYgY2xhc3NOYW1lPXtcIm1lZ2EtbWVudVwiICsgXCIgXCIgKyB0aGlzLnN0YXRlLmNsaWNrZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3BhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PiovXG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2X2JhclwiPntuYXZMaW5rc308TG9naW5Db21wb25lbnQgLz48L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9