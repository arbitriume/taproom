webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: 200px repeat(6, 1fr);\n\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n\n.nav_wrapper {\n    background-color: #4A4848;\n}\n\n.nav_item {\n    background-color: #7F26E9;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n    //padding: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-size: 150%;\n}\n\n.nav_page:hover {\n    color: #FFFFFF;\n}\n\n.mega-menu{\n    display: none;\n}\n.mega-menu.true{\n    display: block;\n}\n.mega-menu-content{\n    background: #ffffff;\n    padding: 16px;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 30px;\n    width: 200px;\n    box-shadow: rgba(0,0,0,0.11765) 0px 1px 6px,rgba(0,0,0,0.11765) 0px 1px 4px;\n}\n\n.main_header {\n    background-color: #4A4848;\n}", ""]);

// exports


/***/ }),

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
                        { /*href={"/" + page}*/className: 'nav_item', onClick: _this2.handleClick.bind(_this2, index), key: index },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInN0YXRlIiwiY2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZU91dHNpZGVDbGljayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleCIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWZzIiwibWVnYU1lbnUiLCJjb250YWlucyIsInRhcmdldCIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLG9CQUFvQixxQkFBcUIsa0RBQWtELG9CQUFvQixnQ0FBZ0Msc0JBQXNCLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLGVBQWUsZ0NBQWdDLHlCQUF5Qiw0QkFBNEIscUJBQXFCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDJCQUEyQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcscUJBQXFCLDBCQUEwQixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLGtGQUFrRixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRzs7QUFFejVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBQ1Qsc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVM7QUFEQSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5VO0FBT2I7Ozs7NkNBRW9CO0FBQ2pCRSxxQkFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0Ysa0JBQXhDLEVBQTRELEtBQTVEO0FBQ0g7OzsrQ0FFcUI7QUFDbEJDLHFCQUFTRSxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLSCxrQkFBM0MsRUFBK0QsS0FBL0Q7QUFDSDs7O29DQUVXSSxLLEVBQU87QUFDZixnQkFBSVAsVUFBUSxLQUFLRCxLQUFMLENBQVdDLE9BQXZCO0FBQ0FBLG9CQUFRTyxLQUFSLElBQWUsQ0FBQ1AsUUFBUU8sS0FBUixDQUFoQjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBQ1IsU0FBU0EsT0FBVixFQUFkO0FBQ0g7OzsyQ0FFa0JTLEssRUFBTTtBQUNyQixnQkFBSSxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsUUFBbkIsQ0FBNEJILE1BQU1JLE1BQWxDLENBQUwsRUFBZ0Q7QUFDNUMscUJBQUtMLFFBQUwsQ0FBYztBQUNWUiw2QkFBUztBQURDLGlCQUFkO0FBR0g7QUFDSjs7O2lDQUVRO0FBQUE7O0FBQ0wsZ0JBQU1jLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELFNBQWhELEVBQTJELE9BQTNELEVBQW9FLFFBQXBFLENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT1YsS0FBUCxFQUFpQjtBQUN6Qyx1QkFDSTtBQUFBO0FBQUEsc0JBQUssS0FBSSxVQUFULEVBQW9CLFdBQVUsYUFBOUI7QUFDRTtBQUFBO0FBQUEsMEJBQUcscUJBQXNCLFdBQVUsVUFBbkMsRUFBOEMsU0FBUyxPQUFLTixXQUFMLENBQWlCQyxJQUFqQixTQUEyQkssS0FBM0IsQ0FBdkQsRUFBMEYsS0FBS0EsS0FBL0Y7QUFDS1U7QUFETCxxQkFERjtBQUtJO0FBQUE7QUFBQSwwQkFBSyxXQUFXLGNBQWMsR0FBZCxHQUFvQixPQUFLbEIsS0FBTCxDQUFXQyxPQUFYLENBQW1CTyxLQUFuQixDQUFwQztBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUlVO0FBQUo7QUFESjtBQURKO0FBTEosaUJBREo7QUFhRixhQWRnQixDQUFqQjs7QUFnQkEsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUEwQkY7QUFBMUIsYUFBUDtBQUNIOzs7O0VBbkR1QixnQkFBTUcsUyIsImZpbGUiOiIwLjgyMGM4NjdhNTJjMmMxYzE0MzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmF2X2JhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IHJlcGVhdCg2LCAxZnIpO1xcblxcbiAgICBtYXJnaW46MTJweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubmF2X3dyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0ODQ4O1xcbn1cXG5cXG4ubmF2X2l0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0YyNkU5O1xcbiAgICBmb250LWZhbWlseTogQXJjb247XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNDRkNFQ0U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIC8vcGFkZGluZzogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxufVxcblxcbi5uYXZfcGFnZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ubWVnYS1tZW51e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWVnYS1tZW51LnRydWV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWVnYS1tZW51LWNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC4xMTc2NSkgMHB4IDFweCA2cHgscmdiYSgwLDAsMCwwLjExNzY1KSAwcHggMXB4IDRweDtcXG59XFxuXFxuLm1haW5faGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBNDg0ODtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9tYWluL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xpY2tlZDogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhpbmRleCkge1xuICAgICAgICBsZXQgY2xpY2tlZD10aGlzLnN0YXRlLmNsaWNrZWQ7XG4gICAgICAgIGNsaWNrZWRbaW5kZXhdPSFjbGlja2VkW2luZGV4XTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2xpY2tlZDogY2xpY2tlZH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU91dHNpZGVDbGljayhldmVudCl7XG4gICAgICAgIGlmICghdGhpcy5yZWZzLm1lZ2FNZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBbXCJDb21wYW55IExvZ29cIixcIkZlYXR1cmVzXCIsIFwiT3VyIFRlYW1cIiwgXCJOZXdzXCIsIFwiQ29udGFjdFwiLCBcIkFkbWluXCIsIFwiTG9nIEluXCJdO1xuICAgICAgICBjb25zdCBuYXZMaW5rcyA9IHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgIDxkaXYgcmVmPVwibWVnYU1lbnVcIiBjbGFzc05hbWU9XCJuYXZfd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICA8YSAvKmhyZWY9e1wiL1wiICsgcGFnZX0qLyBjbGFzc05hbWU9XCJuYXZfaXRlbVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLGluZGV4KX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibWVnYS1tZW51XCIgKyBcIiBcIiArIHRoaXMuc3RhdGUuY2xpY2tlZFtpbmRleF19PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZ2EtbWVudS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cGFnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxuYXYgY2xhc3NOYW1lPVwibmF2X2JhclwiPntuYXZMaW5rc308L25hdj5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9