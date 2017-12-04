webpackHotUpdate(0,{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _LoginMenu = __webpack_require__(39);

var _LoginMenu2 = _interopRequireDefault(_LoginMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginComponent = exports.LoginComponent = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this));

        _this.state = {
            clicked: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        return _this;
    }

    _createClass(LoginComponent, [{
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
        value: function handleClick() {
            var clicked = this.state.clicked;
            clicked = !clicked;
            this.setState({ clicked: clicked });
        }
    }, {
        key: 'handleOutsideClick',
        value: function handleOutsideClick(event) {
            if (!this.refs.megaMenu.contains(event.target)) {
                this.setState({
                    clicked: false
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu1', className: 'nav_item' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_text', onClick: this.handleClick.bind(this) },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, null),
                '/*',
                _react2.default.createElement(
                    'div',
                    { className: "mega-menu" + " " + this.state.clicked },
                    _react2.default.createElement(
                        'div',
                        { className: 'mega-menu-content' },
                        _react2.default.createElement(
                            'p',
                            null,
                            "Log In"
                        )
                    )
                ),
                '*/'
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbIkxvZ2luQ29tcG9uZW50Iiwic3RhdGUiLCJjbGlja2VkIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFN0YXRlIiwiZXZlbnQiLCJyZWZzIiwibWVnYU1lbnUiLCJjb250YWlucyIsInRhcmdldCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR2FBLGMsV0FBQUEsYzs7O0FBQ1QsOEJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMscUJBQVM7QUFEQSxTQUFiO0FBR0EsY0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCRCxJQUF4QixPQUExQjtBQU5VO0FBT2I7Ozs7NkNBRW9CO0FBQ2pCRSxxQkFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS0Ysa0JBQXhDLEVBQTRELEtBQTVEO0FBQ0g7OzsrQ0FFcUI7QUFDbEJDLHFCQUFTRSxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLSCxrQkFBM0MsRUFBK0QsS0FBL0Q7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUlILFVBQVEsS0FBS0QsS0FBTCxDQUFXQyxPQUF2QjtBQUNBQSxzQkFBUSxDQUFDQSxPQUFUO0FBQ0EsaUJBQUtPLFFBQUwsQ0FBYyxFQUFDUCxTQUFTQSxPQUFWLEVBQWQ7QUFDSDs7OzJDQUVrQlEsSyxFQUFNO0FBQ3JCLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxRQUFuQixDQUE0QkgsTUFBTUksTUFBbEMsQ0FBTCxFQUFnRDtBQUM1QyxxQkFBS0wsUUFBTCxDQUFjO0FBQ1ZQLDZCQUFTO0FBREMsaUJBQWQ7QUFHSDtBQUNKOzs7aUNBQ1E7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssS0FBSSxXQUFULEVBQXFCLFdBQVUsVUFBL0I7QUFDSTtBQUFBO0FBQUEsc0JBQUcsTUFBTSxHQUFULEVBQWMsV0FBVSxVQUF4QixFQUFtQyxTQUFTLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQTVDO0FBQ0s7QUFETCxpQkFESjtBQUlJLHdFQUpKO0FBQUE7QUFLTTtBQUFBO0FBQUEsc0JBQUssV0FBVyxjQUFjLEdBQWQsR0FBb0IsS0FBS0gsS0FBTCxDQUFXQyxPQUEvQztBQUNFO0FBQUE7QUFBQSwwQkFBSyxXQUFVLG1CQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUk7QUFBSjtBQURKO0FBREYsaUJBTE47QUFBQTtBQUFBLGFBREo7QUFhSDs7OztFQTdDK0IsZ0JBQU1hLFMiLCJmaWxlIjoiMC44NTMyNmJiMDIwMDQ4YzhmZjkxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbk1lbnUgIGZyb20gJy4vTG9naW5NZW51JztcblxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xpY2tlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2sgPSB0aGlzLmhhbmRsZU91dHNpZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgbGV0IGNsaWNrZWQ9dGhpcy5zdGF0ZS5jbGlja2VkO1xuICAgICAgICBjbGlja2VkPSFjbGlja2VkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjbGlja2VkOiBjbGlja2VkfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KXtcbiAgICAgICAgaWYgKCF0aGlzLnJlZnMubWVnYU1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgcmVmPVwibWVnYU1lbnUxXCIgY2xhc3NOYW1lPVwibmF2X2l0ZW1cIiA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17XCIjXCJ9IGNsYXNzTmFtZT1cIm5hdl90ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfSA+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvZyBJblwifVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8TG9naW5NZW51IC8+XG4gICAgICAgICAgICAgICAgLyo8ZGl2IGNsYXNzTmFtZT17XCJtZWdhLW1lbnVcIiArIFwiIFwiICsgdGhpcy5zdGF0ZS5jbGlja2VkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWdhLW1lbnUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e1wiTG9nIEluXCJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4qL1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9