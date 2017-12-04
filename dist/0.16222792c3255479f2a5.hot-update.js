webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(undefined);
// imports


// module
exports.push([module.i, ".nav_bar {\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: 200px repeat(6, 1fr);\n    background-color: #4A4848;\n    margin:12px;\n    text-transform: uppercase;\n    font-size: 10px;\n    align-items: center;\n}\n\n.nav_log {\n    \n}\n\n.nav_text {\n    background-color: #7F26E9;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n    font-size: 150%;\n}\n\n/*.nav_item a {\n//background-color: #7F26E9;\n    font-family: Arcon;\n    text-decoration: none;\n    color: #CFCECE;\n    letter-spacing: 1px;\n//padding: 20px;\n\n    font-size: 150%;\n}*/\n\n.nav_text:hover {\n    color: #FFFFFF;\n}\n\n.mega-menu{\n    display: none;\n}\n.mega-menu.true{\n    display: block;\n}\n.mega-menu-content{\n    background: #ffffff;\n    padding: 16px;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 30px;\n    width: 200px;\n    box-shadow: rgba(0,0,0,0.11765) 0px 1px 6px,rgba(0,0,0,0.11765) 0px 1px 4px;\n}\n\n.main_header {\n    background-color: #4A4848;\n}", ""]);

// exports


/***/ }),

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

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

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
            open: false
        };
        _this.toggleOpenState = _this.toggleOpenState.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        //this.handleOutsideClick = this.handleOutsideClick.bind(this);
        return _this;
    }

    /* componentWillMount() {
         document.addEventListener('click', this.handleOutsideClick, false);
     }*/

    /* componentWillUnmount(){
         document.removeEventListener('click', this.handleOutsideClick, false);
     }*/

    _createClass(LoginComponent, [{
        key: 'toggleOpenState',
        value: function toggleOpenState() {
            var open = this.state.open;
            open = !open;
            this.setState({ open: open });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(event) {
            debugger;
            event.preventDefault();
            this.setState({
                anchor: event.currentTarget
            });
            this.toggleOpenState();
        }
        /* handleOutsideClick(event){
             if (!this.refs.megaMenu.contains(event.target)) {
                 this.setState({
                     clicked: false
                 });
             }
         }*/

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'megaMenu1' },
                _react2.default.createElement(
                    'a',
                    { href: "#", className: 'nav_log nav_item nav_text', onClick: this.handleClick },
                    "Log In"
                ),
                _react2.default.createElement(_LoginMenu2.default, {
                    open: this.state.open,
                    handleRequestClose: this.toggleOpenState,
                    anchor: this.state.anchor || window
                })
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5Db21wb25lbnQuanMiXSwibmFtZXMiOlsiTG9naW5Db21wb25lbnQiLCJzdGF0ZSIsIm9wZW4iLCJ0b2dnbGVPcGVuU3RhdGUiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbmNob3IiLCJjdXJyZW50VGFyZ2V0Iiwid2luZG93IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW9DLG9CQUFvQixxQkFBcUIsa0RBQWtELGdDQUFnQyxrQkFBa0IsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsR0FBRyxjQUFjLFNBQVMsZUFBZSxnQ0FBZ0Msd0JBQXdCLDJCQUEyQix5QkFBeUIsNEJBQTRCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLEdBQUcsbUJBQW1CLDhCQUE4Qix5QkFBeUIsNEJBQTRCLHFCQUFxQiwwQkFBMEIsa0JBQWtCLHdCQUF3QixHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGtCQUFrQixxQkFBcUIsR0FBRyxxQkFBcUIsMEJBQTBCLG9CQUFvQiw2QkFBNkIseUJBQXlCLGdCQUFnQixtQkFBbUIsa0ZBQWtGLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHOztBQUVqbUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRWFBLGMsV0FBQUEsYzs7O0FBQ1QsOEJBQWM7QUFBQTs7QUFBQTs7QUFFVixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU07QUFERyxTQUFiO0FBR0EsY0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLGNBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQTtBQVBVO0FBUWI7O0FBRUY7Ozs7QUFJQTs7Ozs7OzBDQUltQjtBQUNkLGdCQUFJRixPQUFLLEtBQUtELEtBQUwsQ0FBV0MsSUFBcEI7QUFDQUEsbUJBQUssQ0FBQ0EsSUFBTjtBQUNBLGlCQUFLSSxRQUFMLENBQWMsRUFBQ0osTUFBTUEsSUFBUCxFQUFkO0FBQ0g7OztvQ0FFV0ssSyxFQUFPO0FBQ2Y7QUFDQUEsa0JBQU1DLGNBQU47QUFDQSxpQkFBS0YsUUFBTCxDQUFjO0FBQ1ZHLHdCQUFRRixNQUFNRztBQURKLGFBQWQ7QUFHQSxpQkFBS1AsZUFBTDtBQUNIO0FBQ0Y7Ozs7Ozs7Ozs7aUNBT1U7QUFDTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssS0FBSSxXQUFUO0FBQ0k7QUFBQTtBQUFBLHNCQUFHLE1BQU0sR0FBVCxFQUFjLFdBQVUsMkJBQXhCLEVBQW9ELFNBQVMsS0FBS0UsV0FBbEU7QUFDSztBQURMLGlCQURKO0FBSUk7QUFDSSwwQkFBTSxLQUFLSixLQUFMLENBQVdDLElBRHJCO0FBRUksd0NBQW9CLEtBQUtDLGVBRjdCO0FBR0ksNEJBQVEsS0FBS0YsS0FBTCxDQUFXUSxNQUFYLElBQXFCRTtBQUhqQztBQUpKLGFBREo7QUFhSDs7OztFQXREK0IsZ0JBQU1DLFMiLCJmaWxlIjoiMC4xNjIyMjc5MmMzMjU1NDc5ZjJhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdl9iYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCByZXBlYXQoNiwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBNDg0ODtcXG4gICAgbWFyZ2luOjEycHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdl9sb2cge1xcbiAgICBcXG59XFxuXFxuLm5hdl90ZXh0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdGMjZFOTtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogQXJjb247XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNDRkNFQ0U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG59XFxuXFxuLyoubmF2X2l0ZW0gYSB7XFxuLy9iYWNrZ3JvdW5kLWNvbG9yOiAjN0YyNkU5O1xcbiAgICBmb250LWZhbWlseTogQXJjb247XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNDRkNFQ0U7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuLy9wYWRkaW5nOiAyMHB4O1xcblxcbiAgICBmb250LXNpemU6IDE1MCU7XFxufSovXFxuXFxuLm5hdl90ZXh0OmhvdmVyIHtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5tZWdhLW1lbnV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZWdhLW1lbnUudHJ1ZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZWdhLW1lbnUtY29udGVudHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjExNzY1KSAwcHggMXB4IDZweCxyZ2JhKDAsMCwwLDAuMTE3NjUpIDBweCAxcHggNHB4O1xcbn1cXG5cXG4ubWFpbl9oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEE0ODQ4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL21haW4vc3R5bGVzLmNzc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbk1lbnUgIGZyb20gJy4vTG9naW5NZW51JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUgPSB0aGlzLnRvZ2dsZU9wZW5TdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAvL3RoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgIC8qIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgZmFsc2UpO1xuICAgIH0qL1xuXG4gICAvKiBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCBmYWxzZSk7XG4gICAgfSovXG5cbiAgICB0b2dnbGVPcGVuU3RhdGUoKSB7XG4gICAgICAgIGxldCBvcGVuPXRoaXMuc3RhdGUub3BlbjtcbiAgICAgICAgb3Blbj0hb3BlbjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbjogb3Blbn0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFuY2hvcjogZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuU3RhdGUoKTtcbiAgICB9XG4gICAvKiBoYW5kbGVPdXRzaWRlQ2xpY2soZXZlbnQpe1xuICAgICAgICBpZiAoIXRoaXMucmVmcy5tZWdhTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9Ki9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHJlZj1cIm1lZ2FNZW51MVwiID5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtcIiNcIn0gY2xhc3NOYW1lPVwibmF2X2xvZyBuYXZfaXRlbSBuYXZfdGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9ID5cbiAgICAgICAgICAgICAgICAgICAge1wiTG9nIEluXCJ9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxMb2dpbk1lbnVcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVSZXF1ZXN0Q2xvc2U9e3RoaXMudG9nZ2xlT3BlblN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9e3RoaXMuc3RhdGUuYW5jaG9yIHx8IHdpbmRvd31cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4vY29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=