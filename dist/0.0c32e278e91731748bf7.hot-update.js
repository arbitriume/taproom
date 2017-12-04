webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: 200px repeat(6, 1fr);\n    background-color: #4A4848;\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n}\n\n.nav_item {\n    padding-top: 30px;\n    padding-bottom: 30px;\n}\n\n.nav_item a {\n//background-color: #7F26E9;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n//padding: 20px;\n\n    font-size: 150%;\n}\n\n.nav_page:hover {\n    color: #FFFFFF;\n}\n\n.mega-menu{\n    display: none;\n}\n.mega-menu.true{\n    display: block;\n}\n.mega-menu-content{\n    background: #ffffff;\n    padding: 16px;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 30px;\n    width: 200px;\n    box-shadow: rgba(0,0,0,0.11765) 0px 1px 6px,rgba(0,0,0,0.11765) 0px 1px 4px;\n}\n\n.main_header {\n    background-color: #4A4848;\n}", ""]);

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
                    { ref: 'megaMenu', className: 'nav_item' },
                    _react2.default.createElement(
                        'a',
                        { href: "#", className: 'nav_page', onClick: _this2.handleClick.bind(_this2, index), key: index },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInN0YXRlIiwiY2xpY2tlZCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZU91dHNpZGVDbGljayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleCIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWZzIiwibWVnYU1lbnUiLCJjb250YWlucyIsInRhcmdldCIsInBhZ2VzIiwibmF2TGlua3MiLCJtYXAiLCJwYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLG9CQUFvQixxQkFBcUIsa0RBQWtELGdDQUFnQyxrQkFBa0IsZ0NBQWdDLHNCQUFzQixHQUFHLGVBQWUsd0JBQXdCLDJCQUEyQixHQUFHLGlCQUFpQiw4QkFBOEIseUJBQXlCLDRCQUE0QixxQkFBcUIsMEJBQTBCLGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcscUJBQXFCLDBCQUEwQixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLGtGQUFrRixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRzs7QUFFbDVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBQ1Qsc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVM7QUFEQSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5VO0FBT2I7Ozs7NkNBRW9CO0FBQ2pCRSxxQkFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0Ysa0JBQXhDLEVBQTRELEtBQTVEO0FBQ0g7OzsrQ0FFcUI7QUFDbEJDLHFCQUFTRSxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLSCxrQkFBM0MsRUFBK0QsS0FBL0Q7QUFDSDs7O29DQUVXSSxLLEVBQU87QUFDZixnQkFBSVAsVUFBUSxLQUFLRCxLQUFMLENBQVdDLE9BQXZCO0FBQ0FBLG9CQUFRTyxLQUFSLElBQWUsQ0FBQ1AsUUFBUU8sS0FBUixDQUFoQjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBQ1IsU0FBU0EsT0FBVixFQUFkO0FBQ0g7OzsyQ0FFa0JTLEssRUFBTTtBQUNyQixnQkFBSSxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsUUFBbkIsQ0FBNEJILE1BQU1JLE1BQWxDLENBQUwsRUFBZ0Q7QUFDNUMscUJBQUtMLFFBQUwsQ0FBYztBQUNWUiw2QkFBUztBQURDLGlCQUFkO0FBR0g7QUFDSjs7O2lDQUVRO0FBQUE7O0FBQ0wsZ0JBQU1jLFFBQVEsQ0FBQyxjQUFELEVBQWdCLFVBQWhCLEVBQTRCLFVBQTVCLEVBQXdDLE1BQXhDLEVBQWdELFNBQWhELEVBQTJELE9BQTNELEVBQW9FLFFBQXBFLENBQWQ7QUFDQSxnQkFBTUMsV0FBV0QsTUFBTUUsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT1YsS0FBUCxFQUFpQjtBQUN6Qyx1QkFDSTtBQUFBO0FBQUEsc0JBQUssS0FBSSxVQUFULEVBQW9CLFdBQVUsVUFBOUI7QUFDRTtBQUFBO0FBQUEsMEJBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxVQUF4QixFQUFtQyxTQUFTLE9BQUtOLFdBQUwsQ0FBaUJDLElBQWpCLFNBQTJCSyxLQUEzQixDQUE1QyxFQUErRSxLQUFLQSxLQUFwRjtBQUNLVTtBQURMLHFCQURGO0FBS0k7QUFBQTtBQUFBLDBCQUFLLFdBQVcsY0FBYyxHQUFkLEdBQW9CLE9BQUtsQixLQUFMLENBQVdDLE9BQVgsQ0FBbUJPLEtBQW5CLENBQXBDO0FBQ0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSVU7QUFBSjtBQURKO0FBREo7QUFMSixpQkFESjtBQWFGLGFBZGdCLENBQWpCOztBQWdCQSxtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxTQUFmO0FBQTBCRjtBQUExQixhQUFQO0FBQ0g7Ozs7RUFuRHVCLGdCQUFNRyxTIiwiZmlsZSI6IjAuMGMzMmUyNzhlOTE3MzE3NDhiZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZfYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1nYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggcmVwZWF0KDYsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTQ4NDg7XFxuICAgIG1hcmdpbjoxMnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5uYXZfaXRlbSB7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLm5hdl9pdGVtIGEge1xcbi8vYmFja2dyb3VuZC1jb2xvcjogIzdGMjZFOTtcXG4gICAgZm9udC1mYW1pbHk6IEFyY29uO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjQ0ZDRUNFO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbi8vcGFkZGluZzogMjBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbn1cXG5cXG4ubmF2X3BhZ2U6aG92ZXIge1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLm1lZ2EtbWVudXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1lZ2EtbWVudS50cnVle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1lZ2EtbWVudS1jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMTE3NjUpIDBweCAxcHggNnB4LHJnYmEoMCwwLDAsMC4xMTc2NSkgMHB4IDFweCA0cHg7XFxufVxcblxcbi5tYWluX2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTQ4NDg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvbWFpbi9zdHlsZXMuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsaWNrZWQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgbGV0IGNsaWNrZWQ9dGhpcy5zdGF0ZS5jbGlja2VkO1xuICAgICAgICBjbGlja2VkW2luZGV4XT0hY2xpY2tlZFtpbmRleF07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NsaWNrZWQ6IGNsaWNrZWR9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpe1xuICAgICAgICBpZiAoIXRoaXMucmVmcy5tZWdhTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gW1wiQ29tcGFueSBMb2dvXCIsXCJGZWF0dXJlc1wiLCBcIk91ciBUZWFtXCIsIFwiTmV3c1wiLCBcIkNvbnRhY3RcIiwgXCJBZG1pblwiLCBcIkxvZyBJblwiXTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51XCIgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl9wYWdlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMsaW5kZXgpfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxuICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIiArIFwiIFwiICsgdGhpcy5zdGF0ZS5jbGlja2VkW2luZGV4XX0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVnYS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZfYmFyXCI+e25hdkxpbmtzfTwvbmF2PlxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=