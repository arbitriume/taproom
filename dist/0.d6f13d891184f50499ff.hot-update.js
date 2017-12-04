webpackHotUpdate(0,{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = __webpack_require__(117);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

var _Menu = __webpack_require__(185);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(114);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name _handleTap
 */

/**
 * Creates an event handler for the touch tap event
 * @param {LoginMenu} comp
 */
var handleTouchTap = function handleTouchTap(comp) {
    return function (event) {
        event.preventDefault();

        comp.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };
};

var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu(props) {
        _classCallCheck(this, LoginMenu);

        var _this = _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this, props));

        _this.state = {
            open: false
        };

        _this.handleTouchTap = handleTouchTap(_this);
        return _this;
    }

    _createClass(LoginMenu, [{
        key: 'handleTouchTap',
        value: function handleTouchTap(event) {
            // This prevents ghost click.
            event.preventDefault();

            this.setState({
                open: true,
                anchorEl: event.currentTarget
            });
        }
    }, {
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_RaisedButton2.default, {
                    onClick: this.handleTouchTap,
                    label: 'Click me'
                }),
                _react2.default.createElement(
                    _Popover2.default,
                    {
                        open: this.state.open,
                        anchorEl: this.state.anchorEl,
                        anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                        targetOrigin: { horizontal: 'left', vertical: 'top' },
                        onRequestClose: this.handleRequestClose
                    },
                    _react2.default.createElement(
                        _Menu2.default,
                        null,
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Refresh' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Help & feedback' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Settings' }),
                        _react2.default.createElement(_MenuItem2.default, { primaryText: 'Sign out' })
                    )
                )
            );
        }
    }]);

    return LoginMenu;
}(_react2.default.Component);

exports.default = LoginMenu;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJuYW1lcyI6WyJoYW5kbGVUb3VjaFRhcCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb21wIiwic2V0U3RhdGUiLCJvcGVuIiwiYW5jaG9yRWwiLCJjdXJyZW50VGFyZ2V0IiwiTG9naW5NZW51IiwicHJvcHMiLCJzdGF0ZSIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUlBOzs7O0FBSUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFdBQVEsaUJBQVM7QUFDcENDLGNBQU1DLGNBQU47O0FBRUFDLGFBQUtDLFFBQUwsQ0FBYztBQUNWQyxrQkFBTSxJQURJO0FBRVZDLHNCQUFVTCxNQUFNTTtBQUZOLFNBQWQ7QUFJSCxLQVBzQjtBQUFBLENBQXZCOztJQVNxQkMsUzs7O0FBRWpCLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1RMLGtCQUFNO0FBREcsU0FBYjs7QUFJQSxjQUFLTCxjQUFMLEdBQXNCQSxxQkFBdEI7QUFQZTtBQVFsQjs7Ozt1Q0FFY0MsSyxFQUFPO0FBQ2xCO0FBQ0FBLGtCQUFNQyxjQUFOOztBQUVBLGlCQUFLRSxRQUFMLENBQWM7QUFDVkMsc0JBQU0sSUFESTtBQUVWQywwQkFBVUwsTUFBTU07QUFGTixhQUFkO0FBSUg7Ozs2Q0FFb0I7QUFDakIsaUJBQUtILFFBQUwsQ0FBYztBQUNWQyxzQkFBTTtBQURJLGFBQWQ7QUFHSDs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFDSSw2QkFBUyxLQUFLTCxjQURsQjtBQUVJLDJCQUFNO0FBRlYsa0JBREo7QUFLSTtBQUFBO0FBQUE7QUFDSSw4QkFBTSxLQUFLVSxLQUFMLENBQVdMLElBRHJCO0FBRUksa0NBQVUsS0FBS0ssS0FBTCxDQUFXSixRQUZ6QjtBQUdJLHNDQUFjLEVBQUNLLFlBQVksTUFBYixFQUFxQkMsVUFBVSxRQUEvQixFQUhsQjtBQUlJLHNDQUFjLEVBQUNELFlBQVksTUFBYixFQUFxQkMsVUFBVSxLQUEvQixFQUpsQjtBQUtJLHdDQUFnQixLQUFLQztBQUx6QjtBQU9JO0FBQUE7QUFBQTtBQUNJLDRFQUFVLGFBQVksU0FBdEIsR0FESjtBQUVJLDRFQUFVLGFBQVksaUJBQXRCLEdBRko7QUFHSSw0RUFBVSxhQUFZLFVBQXRCLEdBSEo7QUFJSSw0RUFBVSxhQUFZLFVBQXRCO0FBSko7QUFQSjtBQUxKLGFBREo7QUFzQkg7Ozs7RUFuRGtDLGdCQUFNQyxTOztrQkFBeEJOLFMiLCJmaWxlIjoiMC5kNmYxM2Q4OTExODRmNTA0OTlmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUG9wb3Zlcic7XG5pbXBvcnQgTWVudSBmcm9tICdtYXRlcmlhbC11aS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XG5cbi8qKlxuICogQG5hbWUgX2hhbmRsZVRhcFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgdG91Y2ggdGFwIGV2ZW50XG4gKiBAcGFyYW0ge0xvZ2luTWVudX0gY29tcFxuICovXG5jb25zdCBoYW5kbGVUb3VjaFRhcCA9IGNvbXAgPT4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb21wLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgYW5jaG9yRWw6IGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlVG91Y2hUYXAgPSBoYW5kbGVUb3VjaFRhcCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaFRhcChldmVudCkge1xuICAgICAgICAvLyBUaGlzIHByZXZlbnRzIGdob3N0IGNsaWNrLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlUmVxdWVzdENsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG91Y2hUYXB9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2xpY2sgbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5zdGF0ZS5hbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ2JvdHRvbSd9fVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW49e3tob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJ319XG4gICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiUmVmcmVzaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJIZWxwICZhbXA7IGZlZWRiYWNrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNldHRpbmdzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIlNpZ24gb3V0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=