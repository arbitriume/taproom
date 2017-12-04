webpackHotUpdate(0,Array(39).concat([
/* 39 */
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

var _Menu = __webpack_require__(185);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(114);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Popover from 'material-ui/Popover';


var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu(props) {
        _classCallCheck(this, LoginMenu);

        var _this = _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).call(this, props));

        _this.state = {
            open: false
        };

        _this.handleTouchTap = _this.handleTouchTap.bind(_this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
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
                        onRequestClose: this.handleRequestClose,
                        animation: _Popover.PopoverAnimationVertical
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

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(90);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(duration, property, delay, easeFunction) {
    duration = duration || '450ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || 'linear';

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);

exports.default = {

  corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

  horizontal: horizontal,

  vertical: vertical,

  origin: _propTypes2.default.shape({
    horizontal: horizontal,
    vertical: vertical
  }),

  cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

  stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])

};

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(12);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Paper = __webpack_require__(172);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _events = __webpack_require__(105);

var _events2 = _interopRequireDefault(_events);

var _keycode = __webpack_require__(106);

var _keycode2 = _interopRequireDefault(_keycode);

var _FocusRipple = __webpack_require__(156);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(161);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleInjected = false;
var listening = false;
var tabPressed = false;

function injectStyle() {
  if (!styleInjected) {
    // Remove inner padding and border in Firefox 4+.
    var style = document.createElement('style');
    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

    document.body.appendChild(style);
    styleInjected = true;
  }
}

function listenForTabPresses() {
  if (!listening) {
    _events2.default.on(window, 'keydown', function (event) {
      tabPressed = (0, _keycode2.default)(event) === 'tab';
    });
    listening = true;
  }
}

var EnhancedButton = function (_Component) {
  (0, _inherits3.default)(EnhancedButton, _Component);

  function EnhancedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleKeyDown = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
          _this.removeKeyboardFocus(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleKeyUp = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
      }
      _this.props.onKeyUp(event);
    }, _this.handleBlur = function (event) {
      _this.cancelFocusTimeout();
      _this.removeKeyboardFocus(event);
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (event) event.persist();
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        // setTimeout is needed because the focus event fires first
        // Wait so that we can capture if this was a keyboard focus
        // or touch focus
        _this.focusTimeout = setTimeout(function () {
          if (tabPressed) {
            _this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);

        _this.props.onFocus(event);
      }
    }, _this.handleTouchTap = function (event) {
      _this.cancelFocusTimeout();
      if (!_this.props.disabled) {
        tabPressed = false;
        _this.removeKeyboardFocus(event);
        _this.props.onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          disabled = _props.disabled,
          disableKeyboardFocus = _props.disableKeyboardFocus,
          keyboardFocused = _props.keyboardFocused;

      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
        this.setState({ isKeyboardFocused: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      injectStyle();
      listenForTabPresses();
      if (this.state.isKeyboardFocused) {
        this.button.focus();
        this.props.onKeyboardFocus(null, true);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: false });
        if (nextProps.onKeyboardFocus) {
          nextProps.onKeyboardFocus(null, false);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }
    }
  }, {
    key: 'isKeyboardFocused',
    value: function isKeyboardFocused() {
      return this.state.isKeyboardFocused;
    }
  }, {
    key: 'removeKeyboardFocus',
    value: function removeKeyboardFocus(event) {
      if (this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: false });
        this.props.onKeyboardFocus(event, false);
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus(event) {
      if (!this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: true });
        this.props.onKeyboardFocus(event, true);
      }
    }
  }, {
    key: 'cancelFocusTimeout',
    value: function cancelFocusTimeout() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
        this.focusTimeout = null;
      }
    }
  }, {
    key: 'createButtonChildren',
    value: function createButtonChildren() {
      var _props2 = this.props,
          centerRipple = _props2.centerRipple,
          children = _props2.children,
          disabled = _props2.disabled,
          disableFocusRipple = _props2.disableFocusRipple,
          disableKeyboardFocus = _props2.disableKeyboardFocus,
          disableTouchRipple = _props2.disableTouchRipple,
          focusRippleColor = _props2.focusRippleColor,
          focusRippleOpacity = _props2.focusRippleOpacity,
          touchRippleColor = _props2.touchRippleColor,
          touchRippleOpacity = _props2.touchRippleOpacity;
      var isKeyboardFocused = this.state.isKeyboardFocused;

      // Focus Ripple

      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
        color: focusRippleColor,
        opacity: focusRippleOpacity,
        show: isKeyboardFocused,
        style: {
          overflow: 'hidden'
        },
        key: 'focusRipple'
      }) : undefined;

      // Touch Ripple
      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
        _TouchRipple2.default,
        {
          centerRipple: centerRipple,
          color: touchRippleColor,
          opacity: touchRippleOpacity,
          key: 'touchRipple'
        },
        children
      ) : undefined;

      return [focusRipple, touchRipple, touchRipple ? undefined : children];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          centerRipple = _props3.centerRipple,
          children = _props3.children,
          containerElement = _props3.containerElement,
          disabled = _props3.disabled,
          disableFocusRipple = _props3.disableFocusRipple,
          disableKeyboardFocus = _props3.disableKeyboardFocus,
          disableTouchRipple = _props3.disableTouchRipple,
          focusRippleColor = _props3.focusRippleColor,
          focusRippleOpacity = _props3.focusRippleOpacity,
          href = _props3.href,
          keyboardFocused = _props3.keyboardFocused,
          touchRippleColor = _props3.touchRippleColor,
          touchRippleOpacity = _props3.touchRippleOpacity,
          onBlur = _props3.onBlur,
          onClick = _props3.onClick,
          onFocus = _props3.onFocus,
          onKeyUp = _props3.onKeyUp,
          onKeyDown = _props3.onKeyDown,
          onKeyboardFocus = _props3.onKeyboardFocus,
          style = _props3.style,
          tabIndex = _props3.tabIndex,
          type = _props3.type,
          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'style', 'tabIndex', 'type']);
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          enhancedButton = _context$muiTheme.enhancedButton;


      var mergedStyles = (0, _simpleAssign2.default)({
        border: 10,
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
        cursor: disabled ? 'default' : 'pointer',
        textDecoration: 'none',
        margin: 0,
        padding: 0,
        outline: 'none',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        position: 'relative', // This is needed so that ripples do not bleed past border radius.
        verticalAlign: href ? 'middle' : null
      }, style);

      // Passing both background:none & backgroundColor can break due to object iteration order
      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
        mergedStyles.background = 'none';
      }

      if (disabled && href) {
        return _react2.default.createElement(
          'span',
          (0, _extends3.default)({}, other, {
            style: mergedStyles
          }),
          children
        );
      }

      var buttonProps = (0, _extends3.default)({}, other, {
        style: prepareStyles(mergedStyles),
        ref: function ref(node) {
          return _this2.button = node;
        },
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyUp: this.handleKeyUp,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleTouchTap,
        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
      });

      if (href) buttonProps.href = href;

      var buttonChildren = this.createButtonChildren();

      if (_react2.default.isValidElement(containerElement)) {
        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
      }

      if (!href && containerElement === 'button') {
        buttonProps.type = type;
      }

      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
    }
  }]);
  return EnhancedButton;
}(_react.Component);

EnhancedButton.defaultProps = {
  containerElement: 'button',
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  tabIndex: 0,
  type: 'button'
};
EnhancedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedButton.propTypes = process.env.NODE_ENV !== "production" ? {
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  disableFocusRipple: _propTypes2.default.bool,
  disableKeyboardFocus: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  focusRippleColor: _propTypes2.default.string,
  focusRippleOpacity: _propTypes2.default.number,
  href: _propTypes2.default.string,
  keyboardFocused: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyboardFocus: _propTypes2.default.func,
  style: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,
  touchRippleColor: _propTypes2.default.string,
  touchRippleOpacity: _propTypes2.default.number,
  type: _propTypes2.default.string
} : {};
exports.default = EnhancedButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  set: function set(style, key, value) {
    style[key] = value;
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _shouldUpdate = __webpack_require__(192);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(61);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__(115);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(116);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = __webpack_require__(195);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  once: function once(el, type, callback) {
    var typeArray = type ? type.split(' ') : [];
    var recursiveFunction = function recursiveFunction(event) {
      event.target.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },
  on: function on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      // IE8+ Support
      el.attachEvent('on' + type, function () {
        callback.call(el);
      });
    }
  },
  off: function off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      // IE8+ Support
      el.detachEvent('on' + type, callback);
    }
  },
  isKeyboard: function isKeyboard(event) {
    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
  }
};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(158);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(85);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(159);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(108);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isDescendant: function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },
  offset: function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  }
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(174);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = __webpack_require__(180);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(69);

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = __webpack_require__(181);

var _lodash2 = _interopRequireDefault(_lodash);

var _PopoverAnimationDefault = __webpack_require__(183);

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'none'
  }
};

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover(props, context) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));

    _this.timeout = null;

    _this.renderLayer = function () {
      var _this$props = _this.props,
          animated = _this$props.animated,
          animation = _this$props.animation,
          anchorEl = _this$props.anchorEl,
          anchorOrigin = _this$props.anchorOrigin,
          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
          canAutoPosition = _this$props.canAutoPosition,
          children = _this$props.children,
          onRequestClose = _this$props.onRequestClose,
          style = _this$props.style,
          targetOrigin = _this$props.targetOrigin,
          useLayerForClickAway = _this$props.useLayerForClickAway,
          scrollableContainer = _this$props.scrollableContainer,
          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway', 'scrollableContainer']);


      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) {
          return null;
        }

        return _react2.default.createElement(
          _Paper2.default,
          (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
          children
        );
      }

      var Animation = animation || _PopoverAnimationDefault2.default;

      return _react2.default.createElement(
        Animation,
        (0, _extends3.default)({
          targetOrigin: targetOrigin,
          style: styleRoot
        }, other, {
          open: _this.state.open && !_this.state.closing
        }),
        children
      );
    };

    _this.componentClickAway = function () {
      _this.requestClose('clickAway');
    };

    _this.setPlacement = function (scrolling) {
      if (!_this.state.open) {
        return;
      }

      if (!_this.popoverRefs.layer.getLayer()) {
        return;
      }

      var targetEl = _this.popoverRefs.layer.getLayer().children[0];
      if (!targetEl) {
        return;
      }

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;

      var anchor = _this.getAnchorPosition(anchorEl);
      var target = _this.getTargetPosition(targetEl);

      var targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };

      if (scrolling && _this.props.autoCloseWhenOffScreen) {
        _this.autoCloseWhenOffScreen(anchor);
      }

      if (_this.props.canAutoPosition) {
        target = _this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = targetPosition.top + 'px';
      targetEl.style.left = targetPosition.left + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';
    };

    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

    _this.popoverRefs = {};

    _this.state = {
      open: props.open,
      closing: false
    };
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.placementTimeout = setTimeout(this.setPlacement);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.open === this.props.open) {
        return;
      }

      if (nextProps.open) {
        clearTimeout(this.timeout);
        this.timeout = null;
        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
        this.setState({
          open: true,
          closing: false
        });
      } else {
        if (nextProps.animated) {
          if (this.timeout !== null) return;
          this.setState({ closing: true });
          this.timeout = setTimeout(function () {
            _this2.setState({
              open: false
            }, function () {
              _this2.timeout = null;
            });
          }, 500);
        } else {
          this.setState({
            open: false
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      clearTimeout(this.placementTimeout);
      this.placementTimeout = setTimeout(this.setPlacement);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleScroll.cancel();

      if (this.placementTimeout) {
        clearTimeout(this.placementTimeout);
        this.placementTimeout = null;
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(reason) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose(reason);
      }
    }
  }, {
    key: 'getAnchorPosition',
    value: function getAnchorPosition(el) {
      if (!el) {
        el = _reactDom2.default.findDOMNode(this);
      }

      var rect = el.getBoundingClientRect();
      var a = {
        top: rect.top,
        left: rect.left,
        width: el.offsetWidth,
        height: el.offsetHeight
      };

      a.right = rect.right || a.left + a.width;
      a.bottom = rect.bottom || a.top + a.height;
      a.middle = a.left + (a.right - a.left) / 2;
      a.center = a.top + (a.bottom - a.top) / 2;

      return a;
    }
  }, {
    key: 'getTargetPosition',
    value: function getTargetPosition(targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth
      };
    }
  }, {
    key: 'autoCloseWhenOffScreen',
    value: function autoCloseWhenOffScreen(anchorPosition) {
      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
        this.requestClose('offScreen');
      }
    }
  }, {
    key: 'getOverlapMode',
    value: function getOverlapMode(anchor, target, median) {
      if ([anchor, target].indexOf(median) >= 0) return 'auto';
      if (anchor === target) return 'inclusive';
      return 'exclusive';
    }
  }, {
    key: 'getPositions',
    value: function getPositions(anchor, target) {
      var a = (0, _extends3.default)({}, anchor);
      var t = (0, _extends3.default)({}, target);

      var positions = {
        x: ['left', 'right'].filter(function (p) {
          return p !== t.horizontal;
        }),
        y: ['top', 'bottom'].filter(function (p) {
          return p !== t.vertical;
        })
      };

      var overlap = {
        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
      };

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

      if (overlap.y !== 'auto') {
        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
          t.vertical = t.vertical;
        }
      }

      if (overlap.x !== 'auto') {
        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
          t.horizontal = t.horizontal;
        }
      }

      return {
        positions: positions,
        anchorPos: a
      };
    }
  }, {
    key: 'applyAutoPositionIfNeeded',
    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
          positions = _getPositions.positions,
          anchorPos = _getPositions.anchorPos;

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
          if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = Math.max(0, newTop);
          }
        }
      }

      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
          if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = Math.max(0, newLeft);
          }
        }
      }

      return targetPosition;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(_reactEventListener2.default, {
          target: this.props.scrollableContainer,
          onScroll: this.handleScroll,
          onResize: this.handleResize
        }),
        _react2.default.createElement(_RenderToLayer2.default, {
          ref: function ref(_ref) {
            return _this3.popoverRefs.layer = _ref;
          },
          open: this.state.open,
          componentClickAway: this.componentClickAway,
          useLayerForClickAway: this.props.useLayerForClickAway,
          render: this.renderLayer
        })
      );
    }
  }]);
  return Popover;
}(_react.Component);

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  autoCloseWhenOffScreen: true,
  canAutoPosition: true,
  onRequestClose: function onRequestClose() {},
  open: false,
  scrollableContainer: 'window',
  style: {
    overflowY: 'auto'
  },
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  useLayerForClickAway: true,
  zDepth: 1
};
Popover.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Popover.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This is the DOM element that will be used to set the position of the
   * popover.
   */
  anchorEl: _propTypes2.default.object,
  /**
   * This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it is added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, the popover will hide when the anchor is scrolled off the screen.
   */
  autoCloseWhenOffScreen: _propTypes2.default.bool,
  /**
   * If true, the popover (potentially) ignores `targetOrigin`
   * and `anchorOrigin` to make itself fit on screen,
   * which is useful for mobile devices.
   */
  canAutoPosition: _propTypes2.default.bool,
  /**
   * The content of the popover.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Callback function fired when the popover is requested to be closed.
   *
   * @param {string} reason The reason for the close request. Possibles values
   * are 'clickAway' and 'offScreen'.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If true, the popover is visible.
   */
  open: _propTypes2.default.bool,
  /**
   * Represents the parent scrollable container.
   * It can be an element or a string like `window`.
   */
  scrollableContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying
   * elements, and trigger an `onRequestClose('clickAway')` call.
   */
  useLayerForClickAway: _propTypes2.default.bool,
  /**
   * The zDepth of the popover.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = Popover;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toArray2 = __webpack_require__(109);

var _toArray3 = _interopRequireDefault(_toArray2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(61);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _ClickAwayListener = __webpack_require__(186);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _keycode = __webpack_require__(106);

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _List = __webpack_require__(113);

var _List2 = _interopRequireDefault(_List);

var _menuUtils = __webpack_require__(189);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var desktop = props.desktop,
      maxHeight = props.maxHeight,
      width = props.width;
  var muiTheme = context.muiTheme;


  var styles = {
    root: {
      // Nested div because the List scales x faster than it scales y
      zIndex: muiTheme.zIndex.menu,
      maxHeight: maxHeight,
      overflowY: maxHeight ? 'auto' : null
    },
    divider: {
      marginTop: 7,
      marginBottom: 8
    },
    list: {
      display: 'table-cell',
      paddingBottom: desktop ? 16 : 8,
      paddingTop: desktop ? 16 : 8,
      userSelect: 'none',
      width: width
    },
    selectedMenuItem: {
      color: muiTheme.menuItem.selectedTextColor
    }
  };

  return styles;
}

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props, context) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));

    _initialiseProps.call(_this);

    var filteredChildren = _this.getFilteredChildren(props.children);
    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);

    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
      props.onMenuItemFocusChange(null, newFocusIndex);
    }
    _this.state = {
      focusIndex: newFocusIndex,
      isKeyboardFocused: props.initiallyKeyboardFocused,
      keyWidth: props.desktop ? 64 : 56
    };

    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
      this.setScollPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedIndex = void 0;
      var filteredChildren = this.getFilteredChildren(nextProps.children);

      if (this.props.multiple !== true) {
        selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
      } else {
        selectedIndex = this.state.focusIndex;
      }

      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
        this.props.onMenuItemFocusChange(null, newFocusIndex);
      }
      this.setState({
        focusIndex: newFocusIndex,
        keyWidth: nextProps.desktop ? 64 : 56
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoWidth) this.setWidth();
    }
  }, {
    key: 'getValueLink',


    // Do not use outside of this component, it will be removed once valueLink is deprecated
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'setKeyboardFocused',
    value: function setKeyboardFocused(keyboardFocused) {
      this.setState({
        isKeyboardFocused: keyboardFocused
      });
    }
  }, {
    key: 'getFilteredChildren',
    value: function getFilteredChildren(children) {
      var filteredChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child) {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    }
  }, {
    key: 'cloneMenuItem',
    value: function cloneMenuItem(child, childIndex, styles, index) {
      var _this2 = this;

      var childIsDisabled = child.props.disabled;

      var selectedChildStyles = {};
      if (!childIsDisabled) {
        var selected = this.isChildSelected(child, this.props);

        if (selected) {
          (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
        }
      }
      var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);

      var extraProps = {
        desktop: this.props.desktop,
        style: mergedChildStyles
      };
      if (!childIsDisabled) {
        var isFocused = childIndex === this.state.focusIndex;
        var focusState = 'none';
        if (isFocused) {
          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
        }

        (0, _simpleAssign2.default)(extraProps, {
          focusState: focusState,
          onClick: function onClick(event) {
            _this2.handleMenuItemTouchTap(event, child, index);
            if (child.props.onClick) child.props.onClick(event);
          },
          ref: isFocused ? 'focusedMenuItem' : null
        });
      }
      return _react2.default.cloneElement(child, extraProps);
    }
  }, {
    key: 'decrementKeyboardFocusIndex',
    value: function decrementKeyboardFocusIndex(event) {
      var index = this.state.focusIndex;

      index--;
      if (index < 0) index = 0;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'getMenuItemCount',
    value: function getMenuItemCount(filteredChildren) {
      var menuItemCount = 0;
      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';
        var childIsDisabled = child.props.disabled;
        if (!childIsADivider && !childIsDisabled) menuItemCount++;
      });
      return menuItemCount;
    }
  }, {
    key: 'getLastSelectedIndex',
    value: function getLastSelectedIndex(props, filteredChildren) {
      var _this3 = this;

      var selectedIndex = -1;
      var menuItemIndex = 0;

      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';

        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
        if (!childIsADivider) menuItemIndex++;
      });

      return selectedIndex;
    }
  }, {
    key: 'setFocusIndexStartsWith',
    value: function setFocusIndexStartsWith(event, keys) {
      var foundIndex = -1;
      _react2.default.Children.forEach(this.props.children, function (child, index) {
        if (foundIndex >= 0) {
          return;
        }
        var primaryText = child.props.primaryText;

        if (typeof primaryText === 'string' && primaryText.substr(0, keys.length).toLowerCase() === keys.toLowerCase()) {
          foundIndex = index;
        }
      });
      if (foundIndex >= 0) {
        this.setFocusIndex(event, foundIndex, true);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleMenuItemTouchTap',
    value: function handleMenuItemTouchTap(event, item, index) {
      var children = this.props.children;
      var multiple = this.props.multiple;
      var valueLink = this.getValueLink(this.props);
      var menuValue = valueLink.value;
      var itemValue = item.props.value;
      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

      this.setFocusIndex(event, focusIndex, false);

      if (multiple) {
        menuValue = menuValue || [];

        var itemIndex = menuValue.indexOf(itemValue);

        var _menuValue = menuValue,
            _menuValue2 = (0, _toArray3.default)(_menuValue),
            newMenuValue = _menuValue2.slice(0);

        if (itemIndex === -1) {
          newMenuValue.push(itemValue);
        } else {
          newMenuValue.splice(itemIndex, 1);
        }

        valueLink.requestChange(event, newMenuValue);
      } else if (!multiple && itemValue !== menuValue) {
        valueLink.requestChange(event, itemValue);
      }

      this.props.onItemTouchTap(event, item, index);
    }
  }, {
    key: 'incrementKeyboardFocusIndex',
    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
      var index = this.state.focusIndex;
      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

      index++;
      if (index > maxIndex) index = maxIndex;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'isChildSelected',
    value: function isChildSelected(child, props) {
      var menuValue = this.getValueLink(props).value;
      var childValue = child.props.value;

      if (props.multiple) {
        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
      } else {
        return child.props.hasOwnProperty('value') && menuValue === childValue;
      }
    }
  }, {
    key: 'setFocusIndex',
    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
      if (this.props.onMenuItemFocusChange) {
        // Do this even if `newIndex === this.state.focusIndex` to allow users
        // to detect up-arrow on the first MenuItem or down-arrow on the last.
        this.props.onMenuItemFocusChange(event, newIndex);
      }
      this.setState({
        focusIndex: newIndex,
        isKeyboardFocused: isKeyboardFocused
      });
    }
  }, {
    key: 'setScollPosition',
    value: function setScollPosition() {
      var desktop = this.props.desktop;
      var focusedMenuItem = this.refs.focusedMenuItem;
      var menuItemHeight = desktop ? 32 : 48;

      if (focusedMenuItem) {
        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

        // Make the focused item be the 2nd item in the list the user sees
        var scrollTop = selectedOffSet - menuItemHeight;
        if (scrollTop < menuItemHeight) scrollTop = 0;

        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
      }
    }
  }, {
    key: 'cancelScrollEvent',
    value: function cancelScrollEvent(event) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = _reactDom2.default.findDOMNode(this);
      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
      var elWidth = el.offsetWidth;
      var keyWidth = this.state.keyWidth;
      var minWidth = keyWidth * 1.5;
      var keyIncrements = elWidth / keyWidth;
      var newWidth = void 0;

      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
      newWidth = keyIncrements * keyWidth;

      if (newWidth < minWidth) newWidth = minWidth;

      el.style.width = newWidth + 'px';
      listEl.style.width = newWidth + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          autoWidth = _props.autoWidth,
          children = _props.children,
          desktop = _props.desktop,
          disableAutoFocus = _props.disableAutoFocus,
          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          multiple = _props.multiple,
          onItemTouchTap = _props.onItemTouchTap,
          onEscKeyDown = _props.onEscKeyDown,
          onMenuItemFocusChange = _props.onMenuItemFocusChange,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          menuItemStyle = _props.menuItemStyle,
          style = _props.style,
          value = _props.value,
          valueLink = _props.valueLink,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);

      var filteredChildren = this.getFilteredChildren(children);

      var menuItemIndex = 0;
      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
        var childIsDisabled = child.props.disabled;
        var childName = child.type ? child.type.muiName : '';
        var newChild = child;

        switch (childName) {
          case 'MenuItem':
            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
            break;

          case 'Divider':
            newChild = _react2.default.cloneElement(child, {
              style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
            });
            break;
        }

        if (childName === 'MenuItem' && !childIsDisabled) {
          menuItemIndex++;
        }

        return newChild;
      });

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'div',
          {
            onKeyDown: this.handleKeyDown,
            onWheel: this.handleOnWheel,
            style: prepareStyles(mergedRootStyles),
            ref: 'scrollContainer',
            role: 'presentation'
          },
          _react2.default.createElement(
            _List2.default,
            (0, _extends3.default)({}, other, {
              ref: 'list',
              style: mergedListStyles,
              role: 'menu'
            }),
            newChildren
          )
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

Menu.defaultProps = {
  autoWidth: true,
  desktop: false,
  disableAutoFocus: false,
  initiallyKeyboardFocused: false,
  maxHeight: null,
  multiple: false,
  onChange: function onChange() {},
  onEscKeyDown: function onEscKeyDown() {},
  onItemTouchTap: function onItemTouchTap() {},
  onKeyDown: function onKeyDown() {}
};
Menu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.handleClickAway = function (event) {
    if (event.defaultPrevented) {
      return;
    }

    var focusIndex = _this5.state.focusIndex;

    if (focusIndex < 0) {
      return;
    }

    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var focusedItem = filteredChildren[focusIndex];
    if (focusedItem.props.menuItems && focusedItem.props.menuItems.length > 0) {
      return;
    }

    _this5.setFocusIndex(event, -1, false);
  };

  this.handleKeyDown = function (event) {
    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var key = (0, _keycode2.default)(event);
    switch (key) {
      case 'down':
        event.preventDefault();
        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        break;
      case 'esc':
        _this5.props.onEscKeyDown(event);
        break;
      case 'tab':
        event.preventDefault();
        if (event.shiftKey) {
          _this5.decrementKeyboardFocusIndex(event);
        } else {
          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        }
        break;
      case 'up':
        event.preventDefault();
        _this5.decrementKeyboardFocusIndex(event);
        break;
      default:
        if (key && key.length === 1) {
          var hotKeys = _this5.hotKeyHolder.append(key);
          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
            event.preventDefault();
          }
        }
    }
    _this5.props.onKeyDown(event);
  };

  this.handleOnWheel = function (event) {
    var scrollContainer = _this5.refs.scrollContainer;
    // Only scroll lock if the the Menu is scrollable.
    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;

    var scrollTop = scrollContainer.scrollTop,
        scrollHeight = scrollContainer.scrollHeight,
        clientHeight = scrollContainer.clientHeight;

    var wheelDelta = event.deltaY;
    var isDeltaPositive = wheelDelta > 0;

    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
      scrollContainer.scrollTop = scrollHeight;
      return _this5.cancelScrollEvent(event);
    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      scrollContainer.scrollTop = 0;
      return _this5.cancelScrollEvent(event);
    }
  };
};

Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, the width of the menu will be set automatically
   * according to the widths of its children,
   * using proper keyline increments (64px for desktop,
   * 56px otherwise).
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The content of the menu. This is usually used to pass `MenuItem`
   * elements.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the menu item will render with compact desktop styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu will not be auto-focused.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * If true, the menu will be keyboard-focused initially.
   */
  initiallyKeyboardFocused: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the menu in pixels. If specified,
   * the menu will be scrollable if it is taller than the provided
   * height.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item with `value` not
   * equal to the current `value` of the menu is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {any}  value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is focused and the *Esc* key
   * is pressed.
   *
   * @param {object} event `keydown` event targeting the menu.
   */
  onEscKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {object} menuItem The menu item.
   * @param {number} index The index of the menu item.
   */
  onItemTouchTap: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when the focus on a `MenuItem` is changed.
   * There will be some "duplicate" changes reported if two different
   * focusing event happen, for example if a `MenuItem` is focused via
   * the keyboard and then it is clicked on.
   *
   * @param {object} event The event that triggered the focus change.
   * The event can be null since the focus can be changed for non-event
   * reasons such as prop changes.
   * @param {number} newFocusIndex The index of the newly focused
   * `MenuItem` or `-1` if focus was lost.
   */
  onMenuItemFocusChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   * This component also supports valueLink.
   */
  value: _propTypes2.default.any,
  /**
   * ValueLink for the menu's `value`.
   */
  valueLink: _propTypes2.default.object,
  /**
   * The width of the menu. If not specified, the menu's width
   * will be set according to the widths of its children, using
   * proper keyline increments (64px for desktop, 56px otherwise).
   */
  width: _propTypes4.default.stringOrNumber
} : {};
exports.default = Menu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Subheader = __webpack_require__(187);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var hasSubheader = false;

      var firstChild = _react.Children.toArray(children)[0];
      if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
        hasSubheader = true;
      }

      var styles = {
        root: {
          padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
        }
      };

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return List;
}(_react.Component);

List.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
List.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * These are usually `ListItem`s that are passed to
   * be part of the list.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = List;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _MenuItem = __webpack_require__(190);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MenuItem2.default;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(193);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(194);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(118);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(104);

var _EnhancedButton = __webpack_require__(86);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(69);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton,
      borderRadius = _context$muiTheme.borderRadius;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var zDepth = this.props.disabled ? 0 : 1;
      this.setState({
        zDepth: zDepth,
        initialZDepth: zDepth
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var zDepth = nextProps.disabled ? 0 : 1;
      var nextState = {
        zDepth: zDepth,
        initialZDepth: zDepth
      };

      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          buttonStyle = _props.buttonStyle,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          disabledBackgroundColor = _props.disabledBackgroundColor,
          disabledLabelColor = _props.disabledLabelColor,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          label = _props.label,
          labelColor = _props.labelColor,
          labelPosition = _props.labelPosition,
          labelStyle = _props.labelStyle,
          overlayStyle = _props.overlayStyle,
          primary = _props.primary,
          rippleStyle = _props.rippleStyle,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

      var buttonEventHandlers = disabled ? {} : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var labelElement = label && _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)), key: 'labelElement' },
        label
      );

      var iconCloned = icon && (0, _react.cloneElement)(icon, {
        color: icon.props.color || styles.label.color,
        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style),
        key: 'iconCloned'
      });

      // Place label before or after children.
      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: this.state.zDepth
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
            focusRippleColor: mergedRippleStyles.color,
            touchRippleColor: mergedRippleStyles.color,
            focusRippleOpacity: mergedRippleStyles.opacity,
            touchRippleOpacity: mergedRippleStyles.opacity
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
            },
            enhancedButtonChildren
          )
        )
      );
    }
  }]);
  return RaisedButton;
}(_react.Component);

RaisedButton.muiName = 'RaisedButton';
RaisedButton.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
};
RaisedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RaisedButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
    * The element to use as the container for the RaisedButton. Either a string to
    * use a DOM element or a ReactElement. This is useful for wrapping the
    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
    * that it passes all of its given props through to the underlying DOM
    * element and renders its children prop for proper integration.
    */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _propTypes2.default.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _propTypes2.default.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _propTypes2.default.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _propTypes2.default.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = RaisedButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
module.exports = __webpack_require__(48).Object.assign;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(51);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(122) });


/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(64);
var gOPS = __webpack_require__(78);
var pIE = __webpack_require__(68);
var toObject = __webpack_require__(65);
var IObject = __webpack_require__(94);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(59)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(61);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(87);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _ScaleIn = __webpack_require__(157);

var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pulsateDuration = 750;

var FocusRipple = function (_Component) {
  (0, _inherits3.default)(FocusRipple, _Component);

  function FocusRipple() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FocusRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
      if (!innerCircle) return;

      var startScale = 'scale(1)';
      var endScale = 'scale(0.85)';
      var currentScale = innerCircle.style.transform || startScale;
      var nextScale = currentScale === startScale ? endScale : startScale;

      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FocusRipple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      } else {
        if (this.timeout) clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'getRippleElement',
    value: function getRippleElement(props) {
      var color = props.color,
          innerStyle = props.innerStyle,
          opacity = props.opacity;
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          ripple = _context$muiTheme.ripple;


      var innerStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        opacity: opacity ? opacity : 0.16,
        backgroundColor: color || ripple.color,
        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
      }, innerStyle);

      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
      var height = el.offsetHeight;
      var width = el.offsetWidth;
      var size = Math.max(height, width);

      var oldTop = 0;
      // For browsers that don't support endsWith()
      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }
      el.style.height = size + 'px';
      el.style.top = height / 2 - size / 2 + oldTop + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          style = _props.style;


      var mergedRootStyles = (0, _simpleAssign2.default)({
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }, style);

      var ripple = show ? this.getRippleElement(this.props) : null;

      return _react2.default.createElement(
        _ScaleIn2.default,
        {
          maxScale: 0.85,
          style: mergedRootStyles
        },
        ripple
      );
    }
  }]);
  return FocusRipple;
}(_react.Component);

FocusRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FocusRipple.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  innerStyle: _propTypes2.default.object,
  opacity: _propTypes2.default.number,
  show: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : {};
exports.default = FocusRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(107);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _ScaleInChild = __webpack_require__(160);

var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleIn = function (_Component) {
  (0, _inherits3.default)(ScaleIn, _Component);

  function ScaleIn() {
    (0, _classCallCheck3.default)(this, ScaleIn);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          childStyle = _props.childStyle,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'relative',
        height: '100%'
      }, style);

      var newChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _ScaleInChild2.default,
          {
            key: child.key,
            enterDelay: enterDelay,
            maxScale: maxScale,
            minScale: minScale,
            style: childStyle
          },
          child
        );
      });

      return _react2.default.createElement(
        _TransitionGroup2.default,
        (0, _extends3.default)({}, other, {
          style: prepareStyles(mergedRootStyles),
          component: 'div'
        }),
        newChildren
      );
    }
  }]);
  return ScaleIn;
}(_react.Component);

ScaleIn.defaultProps = {
  enterDelay: 0
};
ScaleIn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ScaleIn.propTypes = process.env.NODE_ENV !== "production" ? {
  childStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = ScaleIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 158 */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(4);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = __webpack_require__(87);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleInChild = function (_Component) {
  (0, _inherits3.default)(ScaleInChild, _Component);

  function ScaleInChild() {
    (0, _classCallCheck3.default)(this, ScaleInChild);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleInChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

      this.leaveTimer = setTimeout(callback, 450);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '1';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');

      this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
      }, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
        children
      );
    }
  }]);
  return ScaleInChild;
}(_react.Component);

ScaleInChild.defaultProps = {
  enterDelay: 0,
  maxScale: 1,
  minScale: 0
};
ScaleInChild.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ScaleInChild.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  style: _propTypes2.default.object
} : {};
exports.default = ScaleInChild;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(162);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toArray2 = __webpack_require__(109);

var _toArray3 = _interopRequireDefault(_toArray2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TransitionGroup = __webpack_require__(107);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _dom = __webpack_require__(110);

var _dom2 = _interopRequireDefault(_dom);

var _CircleRipple = __webpack_require__(171);

var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the first element of the array
var shift = function shift(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      newArray = _ref2.slice(1);

  return newArray;
};

var TouchRipple = function (_Component) {
  (0, _inherits3.default)(TouchRipple, _Component);

  function TouchRipple(props, context) {
    (0, _classCallCheck3.default)(this, TouchRipple);

    // Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it.
    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

    _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.start(event, false);
      }
    };

    _this.handleMouseUp = function () {
      _this.end();
    };

    _this.handleMouseLeave = function () {
      _this.end();
    };

    _this.handleTouchStart = function (event) {
      event.stopPropagation();
      // If the user is swiping (not just tapping), save the position so we can
      // abort ripples if the user appears to be scrolling.
      if (_this.props.abortOnScroll && event.touches) {
        _this.startListeningForScrollAbort(event);
        _this.startTime = Date.now();
      }
      _this.start(event, true);
    };

    _this.handleTouchEnd = function () {
      _this.end();
    };

    _this.handleTouchMove = function (event) {
      // Stop trying to abort if we're already 300ms into the animation
      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
      if (timeSinceStart > 300) {
        _this.stopListeningForScrollAbort();
        return;
      }

      // If the user is scrolling...
      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
      if (deltaY > 6 || deltaX > 6) {
        var currentRipples = _this.state.ripples;
        var ripple = currentRipples[0];
        // This clone will replace the ripple in ReactTransitionGroup with a
        // version that will disappear immediately when removed from the DOM
        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
        // Remove the old ripple and replace it with the new updated one
        currentRipples = shift(currentRipples);
        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
        _this.setState({ ripples: currentRipples }, function () {
          // Call end after we've set the ripple to abort otherwise the setState
          // in end() merges with this and the ripple abort fails
          _this.end();
        });
      }
    };

    _this.ignoreNextMouseDown = false;

    _this.state = {
      // This prop allows us to only render the ReactTransitionGroup
      // on the first click of the component, making the inital render faster.
      hasRipples: false,
      nextKey: 0,
      ripples: []
    };
    return _this;
  }

  (0, _createClass3.default)(TouchRipple, [{
    key: 'start',
    value: function start(event, isRippleTouchGenerated) {
      var theme = this.context.muiTheme.ripple;

      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }

      var ripples = this.state.ripples;

      // Add a ripple to the ripples array
      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
        key: this.state.nextKey,
        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
        color: this.props.color || theme.color,
        opacity: this.props.opacity,
        touchGenerated: isRippleTouchGenerated
      })]);

      this.ignoreNextMouseDown = isRippleTouchGenerated;
      this.setState({
        hasRipples: true,
        nextKey: this.state.nextKey + 1,
        ripples: ripples
      });
    }
  }, {
    key: 'end',
    value: function end() {
      var currentRipples = this.state.ripples;
      this.setState({
        ripples: shift(currentRipples)
      });
      if (this.props.abortOnScroll) {
        this.stopListeningForScrollAbort();
      }
    }

    // Check if the user seems to be scrolling and abort the animation if so

  }, {
    key: 'startListeningForScrollAbort',
    value: function startListeningForScrollAbort(event) {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      // Note that when scolling Chrome throttles this event to every 200ms
      // Also note we don't listen for scroll events directly as there's no general
      // way to cover cases like scrolling within containers on the page
      document.body.addEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'stopListeningForScrollAbort',
    value: function stopListeningForScrollAbort() {
      document.body.removeEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'getRippleStyle',
    value: function getRippleStyle(event) {
      var el = _reactDom2.default.findDOMNode(this);
      var elHeight = el.offsetHeight;
      var elWidth = el.offsetWidth;
      var offset = _dom2.default.offset(el);
      var isTouchEvent = event.touches && event.touches.length;
      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      var pointerX = pageX - offset.left;
      var pointerY = pageY - offset.top;
      var topLeftDiag = this.calcDiag(pointerX, pointerY);
      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
      var rippleSize = rippleRadius * 2;
      var left = pointerX - rippleRadius;
      var top = pointerY - rippleRadius;

      return {
        directionInvariant: true,
        height: rippleSize,
        width: rippleSize,
        top: top,
        left: left
      };
    }
  }, {
    key: 'calcDiag',
    value: function calcDiag(a, b) {
      return Math.sqrt(a * a + b * b);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;
      var _state = this.state,
          hasRipples = _state.hasRipples,
          ripples = _state.ripples;
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var rippleGroup = void 0;

      if (hasRipples) {
        var mergedStyles = (0, _simpleAssign2.default)({
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1 // This is also needed so that ripples do not bleed past a parent border radius.
        }, style);

        rippleGroup = _react2.default.createElement(
          _TransitionGroup2.default,
          { style: prepareStyles(mergedStyles) },
          ripples
        );
      }

      return _react2.default.createElement(
        'div',
        {
          onMouseUp: this.handleMouseUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        },
        rippleGroup,
        children
      );
    }
  }]);
  return TouchRipple;
}(_react.Component);

TouchRipple.defaultProps = {
  abortOnScroll: true
};
TouchRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TouchRipple.propTypes = process.env.NODE_ENV !== "production" ? {
  abortOnScroll: _propTypes2.default.bool,
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object
} : {};
exports.default = TouchRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(61);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(87);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleRipple = function (_Component) {
  (0, _inherits3.default)(CircleRipple, _Component);

  function CircleRipple() {
    (0, _classCallCheck3.default)(this, CircleRipple);
    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircleRipple, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = 0;
      // If the animation is aborted, remove from the DOM immediately
      var removeAfter = this.props.aborted ? 0 : 2000;
      this.enterTimer = setTimeout(callback, removeAfter);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;
      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
      _autoPrefix2.default.set(style, 'transition', transitionValue);
      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = this.props.opacity;
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
      this.leaveTimer = setTimeout(callback, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          aborted = _props.aborted,
          color = _props.color,
          opacity = _props.opacity,
          style = _props.style,
          touchGenerated = _props.touchGenerated,
          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor: color
      }, style);

      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
    }
  }]);
  return CircleRipple;
}(_react.Component);

CircleRipple.defaultProps = {
  opacity: 0.1,
  aborted: false
};
CircleRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
CircleRipple.propTypes = process.env.NODE_ENV !== "production" ? {
  aborted: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object,
  touchGenerated: _propTypes2.default.bool
} : {};
exports.default = CircleRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
    }
  };
}

var Paper = function (_Component) {
  (0, _inherits3.default)(Paper, _Component);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          circle = _props.circle,
          rounded = _props.rounded,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return Paper;
}(_react.Component);

Paper.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
};
Paper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Paper.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Children passed into the paper element.
   */
  children: _propTypes2.default.node,
  /**
   * Set to true to generate a circular paper container.
   */
  circle: _propTypes2.default.bool,
  /**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _propTypes2.default.bool,
  /**
   * This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = Paper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PopoverAnimationVertical = exports.Popover = undefined;

var _Popover2 = __webpack_require__(111);

var _Popover3 = _interopRequireDefault(_Popover2);

var _PopoverAnimationVertical2 = __webpack_require__(184);

var _PopoverAnimationVertical3 = _interopRequireDefault(_PopoverAnimationVertical2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Popover = _Popover3.default;
exports.PopoverAnimationVertical = _PopoverAnimationVertical3.default;
exports.default = _Popover3.default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(79);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(175);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(90);

var _assign2 = _interopRequireDefault(_assign);

exports.withOptions = withOptions;

var _react = __webpack_require__(4);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(12);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _warning = __webpack_require__(85);

var _warning2 = _interopRequireDefault(_warning);

var _supports = __webpack_require__(178);

var supports = _interopRequireWildcard(_supports);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};
/* eslint-disable prefer-spread */

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  if (supports.addEventListener) {
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.attachEvent) {
    // IE8+ Support
    target.attachEvent('on' + eventName, function () {
      callback.call(target);
    });
  }
}

function off(target, eventName, callback, options) {
  if (supports.removeEventListener) {
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.detachEvent) {
    // IE8+ Support
    target.detachEvent('on' + eventName, callback);
  }
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: Should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_Component) {
  (0, _inherits3.default)(EventListener, _Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react.Component);

EventListener.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.element,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : {};
exports.default = EventListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = exports.detachEvent = exports.attachEvent = exports.removeEventListener = exports.addEventListener = exports.canUseDOM = undefined;

var _defineProperty = __webpack_require__(179);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = canUseDOM && 'addEventListener' in window;
var removeEventListener = exports.removeEventListener = canUseDOM && 'removeEventListener' in window;

// IE8+ Support
var attachEvent = exports.attachEvent = canUseDOM && 'attachEvent' in window;
var detachEvent = exports.detachEvent = canUseDOM && 'detachEvent' in window;

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, (0, _defineProperty2.default)({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (e) {} // eslint-disable-line no-empty

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(98);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.default = defineProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function defineProperty(o, p, attr) {
  return (0, _defineProperty2.default)(o, p, attr);
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _dom = __webpack_require__(110);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var RenderToLayer = function (_Component) {
  (0, _inherits3.default)(RenderToLayer, _Component);

  function RenderToLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenderToLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      if (!_this.props.componentClickAway) {
        return;
      }

      if (!_this.props.open) {
        return;
      }

      var el = _this.layer;
      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
        _this.props.componentClickAway(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RenderToLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderLayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderLayer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unrenderLayer();
    }
  }, {
    key: 'getLayer',
    value: function getLayer() {
      return this.layer;
    }
  }, {
    key: 'unrenderLayer',
    value: function unrenderLayer() {
      if (!this.layer) {
        return;
      }

      if (this.props.useLayerForClickAway) {
        this.layer.style.position = 'relative';
        this.layer.removeEventListener('touchstart', this.onClickAway);
        this.layer.removeEventListener('click', this.onClickAway);
      } else {
        window.removeEventListener('touchstart', this.onClickAway);
        window.removeEventListener('click', this.onClickAway);
      }

      (0, _reactDom.unmountComponentAtNode)(this.layer);
      document.body.removeChild(this.layer);
      this.layer = null;
    }

    /**
     * By calling this method in componentDidMount() and
     * componentDidUpdate(), you're effectively creating a "wormhole" that
     * funnels React's hierarchical updates through to a DOM node on an
     * entirely different part of the page.
     */

  }, {
    key: 'renderLayer',
    value: function renderLayer() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          render = _props.render;


      if (open) {
        if (!this.layer) {
          this.layer = document.createElement('div');
          document.body.appendChild(this.layer);

          if (this.props.useLayerForClickAway) {
            this.layer.addEventListener('touchstart', this.onClickAway);
            this.layer.addEventListener('click', this.onClickAway);
            this.layer.style.position = 'fixed';
            this.layer.style.top = 0;
            this.layer.style.bottom = 0;
            this.layer.style.left = 0;
            this.layer.style.right = 0;
            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
          } else {
            setTimeout(function () {
              window.addEventListener('touchstart', _this2.onClickAway);
              window.addEventListener('click', _this2.onClickAway);
            }, 0);
          }
        }

        var layerElement = render();
        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
      } else {
        this.unrenderLayer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return RenderToLayer;
}(_react.Component);

RenderToLayer.defaultProps = {
  useLayerForClickAway: true
};
RenderToLayer.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RenderToLayer.propTypes = process.env.NODE_ENV !== "production" ? {
  componentClickAway: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  render: _propTypes2.default.func.isRequired,
  useLayerForClickAway: _propTypes2.default.bool
} : {};
exports.default = RenderToLayer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(182)))

/***/ }),
/* 182 */,
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(69);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
      maxHeight: '100%'
    },
    horizontal: {
      maxHeight: '100%',
      overflowY: 'auto',
      transform: open ? 'scaleX(1)' : 'scaleX(0)',
      opacity: open ? 1 : 0,
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
    },
    vertical: {
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
    }
  };
}

var PopoverAnimationDefault = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationDefault, _Component);

  function PopoverAnimationDefault() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationDefault, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.horizontal) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.vertical) },
            this.props.children
          )
        )
      );
    }
  }]);
  return PopoverAnimationDefault;
}(_react.Component);

PopoverAnimationDefault.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationDefault.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PopoverAnimationDefault.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = PopoverAnimationDefault;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(69);

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'center');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
      maxHeight: '100%'
    }
  };
}

var PopoverAnimationVertical = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationVertical, _Component);

  function PopoverAnimationVertical() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationVertical, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;


      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        this.props.children
      );
    }
  }]);
  return PopoverAnimationVertical;
}(_react.Component);

PopoverAnimationVertical.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationVertical.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PopoverAnimationVertical.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = PopoverAnimationVertical;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.Menu = undefined;

var _Menu2 = __webpack_require__(112);

var _Menu3 = _interopRequireDefault(_Menu2);

var _MenuItem2 = __webpack_require__(114);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _Menu3.default;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(105);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

var clickAwayEvents = ['mouseup', 'touchend'];
var bind = function bind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.on(document, event, callback);
  });
};
var unbind = function unbind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.off(document, event, callback);
  });
};

var ClickAwayListener = function (_Component) {
  (0, _inherits3.default)(ClickAwayListener, _Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.isCurrentlyMounted) {
        var el = _reactDom2.default.findDOMNode(_this);

        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isCurrentlyMounted = true;
      if (this.props.onClickAway) {
        bind(this.handleClickAway);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.onClickAway !== this.props.onClickAway) {
        unbind(this.handleClickAway);
        if (this.props.onClickAway) {
          bind(this.handleClickAway);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isCurrentlyMounted = false;
      unbind(this.handleClickAway);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ClickAwayListener;
}(_react.Component);

ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element,
  onClickAway: _propTypes2.default.func
} : {};
exports.default = ClickAwayListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Subheader = __webpack_require__(188);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader2.default;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheader = function Subheader(props, context) {
  var children = props.children,
      inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      prepareStyles = _context$muiTheme.prepareStyles,
      subheader = _context$muiTheme.subheader;


  var styles = {
    root: {
      boxSizing: 'border-box',
      color: subheader.color,
      fontSize: 14,
      fontWeight: subheader.fontWeight,
      lineHeight: '48px',
      paddingLeft: inset ? 72 : 16,
      width: '100%'
    }
  };

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
    children
  );
};

Subheader.muiName = 'Subheader';

Subheader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Node that will be placed inside the `Subheader`.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the `Subheader` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

Subheader.defaultProps = {
  inset: false
};

Subheader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Subheader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotKeyHolder = undefined;

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotKeyHolder = exports.HotKeyHolder = function () {
  function HotKeyHolder() {
    var _this = this;

    (0, _classCallCheck3.default)(this, HotKeyHolder);

    this.clear = function () {
      _this.timerId = null;
      _this.lastKeys = null;
    };
  }

  (0, _createClass3.default)(HotKeyHolder, [{
    key: 'append',
    value: function append(key) {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(this.clear, 500);
      return this.lastKeys = (this.lastKeys || '') + key;
    }
  }]);
  return HotKeyHolder;
}();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(61);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Popover = __webpack_require__(111);

var _Popover2 = _interopRequireDefault(_Popover);

var _check = __webpack_require__(191);

var _check2 = _interopRequireDefault(_check);

var _ListItem = __webpack_require__(196);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Menu = __webpack_require__(112);

var _Menu2 = _interopRequireDefault(_Menu);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nestedMenuStyle = {
  position: 'relative'
};

function getStyles(props, context) {
  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
  var textColor = context.muiTheme.baseTheme.palette.textColor;
  var indent = props.desktop ? 64 : 72;
  var sidePadding = props.desktop ? 24 : 16;

  var styles = {
    root: {
      color: props.disabled ? disabledColor : textColor,
      cursor: props.disabled ? 'default' : 'pointer',
      minHeight: props.desktop ? '32px' : '48px',
      lineHeight: props.desktop ? '32px' : '48px',
      fontSize: props.desktop ? 15 : 16,
      whiteSpace: 'nowrap'
    },

    innerDivStyle: {
      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
      paddingRight: props.rightIcon ? indent : sidePadding,
      paddingBottom: 0,
      paddingTop: 0
    },

    secondaryText: {
      float: 'right'
    },

    leftIconDesktop: {
      margin: 0,
      left: 24,
      top: 4
    },

    rightIconDesktop: {
      margin: 0,
      right: 24,
      top: 4,
      fill: context.muiTheme.menuItem.rightIconDesktopFill
    }
  };

  return styles;
}

var MenuItem = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.cloneMenuItem = function (item) {
      return _react2.default.cloneElement(item, {
        onClick: function onClick(event) {
          if (!item.props.menuItems) {
            _this.handleRequestClose();
          }

          if (item.props.onClick) {
            item.props.onClick(event);
          }
        }
      });
    }, _this.handleTouchTap = function (event) {
      event.preventDefault();

      _this.setState({
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this)
      });

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _this.handleRequestClose = function () {
      _this.setState({
        open: false,
        anchorEl: null
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyFocusState();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.open && nextProps.focusState === 'none') {
        this.handleRequestClose();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.applyFocusState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.open) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'applyFocusState',
    value: function applyFocusState() {
      this.refs.listItem.applyFocusState(this.props.focusState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children,
          desktop = _props.desktop,
          disabled = _props.disabled,
          focusState = _props.focusState,
          innerDivStyle = _props.innerDivStyle,
          insetChildren = _props.insetChildren,
          leftIcon = _props.leftIcon,
          menuItems = _props.menuItems,
          rightIcon = _props.rightIcon,
          secondaryText = _props.secondaryText,
          style = _props.style,
          animation = _props.animation,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'targetOrigin', 'value']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);

      // Left Icon
      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
      if (leftIconElement) {
        var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
      }

      // Right Icon
      var rightIconElement = void 0;
      if (rightIcon) {
        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
      }

      // Secondary Text
      var secondaryTextElement = void 0;
      if (secondaryText) {
        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;

        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.secondaryText) },
          secondaryText
        );
      }
      var childMenuPopover = void 0;
      if (menuItems) {
        childMenuPopover = _react2.default.createElement(
          _Popover2.default,
          {
            animation: animation,
            anchorOrigin: anchorOrigin,
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            targetOrigin: targetOrigin,
            useLayerForClickAway: false,
            onRequestClose: this.handleRequestClose
          },
          _react2.default.createElement(
            _Menu2.default,
            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
            _react2.default.Children.map(menuItems, this.cloneMenuItem)
          )
        );
        other.onClick = this.handleTouchTap;
      }

      return _react2.default.createElement(
        _ListItem2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          hoverColor: this.context.muiTheme.menuItem.hoverColor,
          innerDivStyle: mergedInnerDivStyles,
          insetChildren: insetChildren,
          leftIcon: leftIconElement,
          ref: 'listItem',
          rightIcon: rightIconElement,
          role: 'menuitem',
          style: mergedRootStyles
        }),
        children,
        secondaryTextElement,
        childMenuPopover
      );
    }
  }]);
  return MenuItem;
}(_react.Component);

MenuItem.muiName = 'MenuItem';
MenuItem.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  checked: false,
  desktop: false,
  disabled: false,
  focusState: 'none',
  insetChildren: false,
  targetOrigin: { horizontal: 'left', vertical: 'top' }
};
MenuItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Location of the anchor for the popover of nested `MenuItem`
   * elements.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, a left check mark will be rendered.
   */
  checked: _propTypes2.default.bool,
  /**
   * Elements passed as children to the underlying `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * If true, the menu item will render with compact desktop
   * styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu item will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The focus state of the menu item. This prop is used to set the focus
   * state of the underlying `ListItem`.
   */
  focusState: _propTypes2.default.oneOf(['none', 'focused', 'keyboard-focused']),
  /**
   * Override the inline-styles of the inner div.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented.
   * This is only needed when there is no `leftIcon`.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * `MenuItem` elements to nest within the menu item.
   */
  menuItems: _propTypes2.default.node,
  /**
   * Callback function fired when the menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   */
  onClick: _propTypes2.default.func,
  /**
   * Can be used to render primary text within the menu item.
   */
  primaryText: _propTypes2.default.node,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * Can be used to render secondary text within the menu item.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Location on the popover of nested `MenuItem` elements that will attach
   * to the anchor's origin.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * The value of the menu item.
   */
  value: _propTypes2.default.any
} : {};
exports.default = MenuItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(88);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(89);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationCheck = function NavigationCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
  );
};
NavigationCheck = (0, _pure2.default)(NavigationCheck);
NavigationCheck.displayName = 'NavigationCheck';
NavigationCheck.muiName = 'SvgIcon';

exports.default = NavigationCheck;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(4);

var _setDisplayName = __webpack_require__(115);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(116);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
      var _context$muiTheme = this.context.muiTheme,
          svgIcon = _context$muiTheme.svgIcon,
          prepareStyles = _context$muiTheme.prepareStyles;


      var offColor = color ? color : 'currentColor';
      var onColor = hoverColor ? hoverColor : offColor;

      var mergedStyles = (0, _simpleAssign2.default)({
        display: 'inline-block',
        color: svgIcon.color,
        fill: this.state.hovered ? onColor : offColor,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: prepareStyles(mergedStyles),
          viewBox: viewBox
        }),
        children
      );
    }
  }]);
  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
} : {};
exports.default = SvgIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(61);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _colorManipulator = __webpack_require__(104);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedButton = __webpack_require__(86);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _IconButton = __webpack_require__(197);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _expandLess = __webpack_require__(203);

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = __webpack_require__(204);

var _expandMore2 = _interopRequireDefault(_expandMore);

var _NestedList = __webpack_require__(205);

var _NestedList2 = _interopRequireDefault(_NestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var autoGenerateNestedIndicator = props.autoGenerateNestedIndicator,
      insetChildren = props.insetChildren,
      leftAvatar = props.leftAvatar,
      leftCheckbox = props.leftCheckbox,
      leftIcon = props.leftIcon,
      nestedItems = props.nestedItems,
      nestedLevel = props.nestedLevel,
      rightAvatar = props.rightAvatar,
      rightIcon = props.rightIcon,
      rightIconButton = props.rightIconButton,
      rightToggle = props.rightToggle,
      secondaryText = props.secondaryText,
      secondaryTextLines = props.secondaryTextLines;
  var muiTheme = context.muiTheme;
  var listItem = muiTheme.listItem;


  var textColor = muiTheme.baseTheme.palette.textColor;
  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
  var twoLine = secondaryText && secondaryTextLines === 1;
  var threeLine = secondaryText && secondaryTextLines > 1;

  var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;

  var styles = {
    root: {
      backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
      color: textColor,
      display: 'block',
      fontSize: 16,
      lineHeight: '16px',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },

    // This inner div is needed so that ripples will span the entire container
    innerDiv: {
      marginLeft: nestedLevel * listItem.nestedLevelDepth,
      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
      paddingRight: rightIcon || rightAvatar || rightIconButton || nestedItems.length && autoGenerateNestedIndicator ? 56 : rightToggle ? 72 : 16,
      paddingBottom: singleAvatar ? 20 : 16,
      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
      position: 'relative'
    },

    icons: {
      height: 24,
      width: 24,
      display: 'block',
      position: 'absolute',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      margin: 12
    },

    leftIcon: {
      left: 4
    },

    rightIcon: {
      right: 4
    },

    avatars: {
      position: 'absolute',
      top: singleAvatar ? 8 : 16
    },

    label: {
      cursor: 'pointer'
    },

    leftAvatar: {
      left: 16
    },

    rightAvatar: {
      right: 16
    },

    leftCheckbox: {
      position: 'absolute',
      display: 'block',
      width: 24,
      top: twoLine ? 24 : singleAvatar ? 16 : 12,
      left: 16
    },

    primaryText: {},

    rightIconButton: {
      position: 'absolute',
      display: 'block',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      right: 4
    },

    rightToggle: {
      position: 'absolute',
      display: 'block',
      width: 54,
      top: twoLine ? 25 : singleAvatar ? 17 : 13,
      right: 8
    },

    secondaryText: {
      fontSize: 14,
      lineHeight: threeLine ? '18px' : '16px',
      height: threeLine ? 36 : 16,
      margin: 0,
      marginTop: 4,
      color: listItem.secondaryTextColor,

      // needed for 2 and 3 line ellipsis
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: threeLine ? null : 'nowrap',
      display: threeLine ? '-webkit-box' : null,
      WebkitLineClamp: threeLine ? 2 : null,
      WebkitBoxOrient: threeLine ? 'vertical' : null
    }
  };

  return styles;
}

var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      open: false,
      rightIconButtonHovered: false,
      rightIconButtonKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (_this.props.primaryTogglesNestedList) {
        _this.handleNestedListToggle(event);
      }
    }, _this.handleNestedListToggle = function (event) {
      if (_this.props.leftCheckbox) {
        event.preventDefault();
      }
      event.stopPropagation();

      if (_this.props.open === null) {
        _this.setState({ open: !_this.state.open }, function () {
          _this.props.onNestedListToggle(_this);
        });
      } else {
        // Exposing `this` in the callback is quite a bad API.
        // I'm doing a one level deep clone to expose a fake state.open.
        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
          state: {
            open: !_this.state.open
          }
        }));
      }
    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
      if (isKeyboardFocused) {
        _this.setState({
          isKeyboardFocused: false,
          rightIconButtonKeyboardFocused: isKeyboardFocused
        });
      }

      var iconButton = _this.props.rightIconButton;

      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleRightIconButtonMouseLeave = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: false });
      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
    }, _this.handleRightIconButtonMouseEnter = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: true });
      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
    }, _this.handleRightIconButtonMouseUp = function (event) {
      var iconButton = _this.props.rightIconButton;
      event.stopPropagation();
      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
    }, _this.handleRightIconButtonTouchTap = function (event) {
      var iconButton = _this.props.rightIconButton;

      // Stop the event from bubbling up to the list-item
      event.stopPropagation();
      if (iconButton && iconButton.props.onClick) iconButton.props.onClick(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchEnd(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.open !== null) this.setState({ open: nextProps.open });
      if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }

    // This method is needed by the `MenuItem` component.

  }, {
    key: 'applyFocusState',
    value: function applyFocusState(focusState) {
      if (this.button) {
        var buttonEl = _reactDom2.default.findDOMNode(this.button);

        switch (focusState) {
          case 'none':
            buttonEl.blur();
            break;
          case 'focused':
            buttonEl.focus();
            break;
          case 'keyboard-focused':
            this.button.setKeyboardFocus();
            buttonEl.focus();
            break;
        }
      }
    }
  }, {
    key: 'createDisabledElement',
    value: function createDisabledElement(styles, contentChildren, additionalProps) {
      var _props = this.props,
          innerDivStyle = _props.innerDivStyle,
          style = _props.style;


      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, additionalProps, {
          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
        }),
        contentChildren
      );
    }
  }, {
    key: 'createLabelElement',
    value: function createLabelElement(styles, contentChildren, additionalProps) {
      var _props2 = this.props,
          innerDivStyle = _props2.innerDivStyle,
          style = _props2.style;


      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

      return _react2.default.createElement(
        'label',
        (0, _extends3.default)({}, additionalProps, {
          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
        }),
        contentChildren
      );
    }
  }, {
    key: 'createTextElement',
    value: function createTextElement(styles, data, key) {
      var prepareStyles = this.context.muiTheme.prepareStyles;

      if (_react2.default.isValidElement(data)) {
        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
        if (typeof data.type === 'string') {
          // if element is a native dom node
          style = prepareStyles(style);
        }
        return _react2.default.cloneElement(data, {
          key: key,
          style: style
        });
      }

      return _react2.default.createElement(
        'div',
        { key: key, style: prepareStyles(styles) },
        data
      );
    }
  }, {
    key: 'pushElement',
    value: function pushElement(children, element, baseStyles, additionalProps) {
      if (element) {
        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
        children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
          key: children.length,
          style: styles
        }, additionalProps)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
          children = _props3.children,
          containerElement = _props3.containerElement,
          disabled = _props3.disabled,
          disableKeyboardFocus = _props3.disableKeyboardFocus,
          hoverColor = _props3.hoverColor,
          initiallyOpen = _props3.initiallyOpen,
          innerDivStyle = _props3.innerDivStyle,
          insetChildren = _props3.insetChildren,
          leftAvatar = _props3.leftAvatar,
          leftCheckbox = _props3.leftCheckbox,
          leftIcon = _props3.leftIcon,
          nestedItems = _props3.nestedItems,
          nestedLevel = _props3.nestedLevel,
          nestedListStyle = _props3.nestedListStyle,
          onKeyboardFocus = _props3.onKeyboardFocus,
          isKeyboardFocused = _props3.isKeyboardFocused,
          onMouseEnter = _props3.onMouseEnter,
          onMouseLeave = _props3.onMouseLeave,
          onNestedListToggle = _props3.onNestedListToggle,
          onTouchStart = _props3.onTouchStart,
          onClick = _props3.onClick,
          rightAvatar = _props3.rightAvatar,
          rightIcon = _props3.rightIcon,
          rightIconButton = _props3.rightIconButton,
          rightToggle = _props3.rightToggle,
          primaryText = _props3.primaryText,
          primaryTogglesNestedList = _props3.primaryTogglesNestedList,
          secondaryText = _props3.secondaryText,
          secondaryTextLines = _props3.secondaryTextLines,
          style = _props3.style,
          other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onClick', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var contentChildren = [children];

      if (leftIcon) {
        var additionalProps = {
          color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
        };
        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
      }

      if (rightIcon) {
        var _additionalProps = {
          color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
        };
        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
      }

      if (leftAvatar) {
        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
      }

      if (rightAvatar) {
        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
      }

      if (leftCheckbox) {
        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
      }

      // RightIconButtonElement
      var hasNestListItems = nestedItems.length;
      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

      if (rightIconButton || needsNestedIndicator) {
        var rightIconButtonElement = rightIconButton;
        var rightIconButtonHandlers = {
          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
          onMouseEnter: this.handleRightIconButtonMouseEnter,
          onMouseLeave: this.handleRightIconButtonMouseLeave,
          onClick: this.handleRightIconButtonTouchTap,
          onMouseDown: this.handleRightIconButtonMouseUp,
          onMouseUp: this.handleRightIconButtonMouseUp
        };

        // Create a nested list indicator icon if we don't have an icon on the right
        if (needsNestedIndicator) {
          rightIconButtonElement = this.state.open ? _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_expandLess2.default, null)
          ) : _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_expandMore2.default, null)
          );
          rightIconButtonHandlers.onClick = this.handleNestedListToggle;
        }

        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
      }

      if (rightToggle) {
        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
      }

      if (primaryText) {
        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
        contentChildren.push(primaryTextElement);
      }

      if (secondaryText) {
        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
        contentChildren.push(secondaryTextElement);
      }

      var nestedList = nestedItems.length ? _react2.default.createElement(
        _NestedList2.default,
        { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
        nestedItems
      ) : undefined;

      var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);

      return _react2.default.createElement(
        'div',
        null,
        simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({
            containerElement: containerElement
          }, other, {
            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
            onKeyboardFocus: this.handleKeyboardFocus,
            onMouseLeave: this.handleMouseLeave,
            onMouseEnter: this.handleMouseEnter,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
            onClick: this.handleTouchTap,
            disabled: disabled,
            ref: function ref(node) {
              return _this2.button = node;
            },
            style: (0, _simpleAssign2.default)({}, styles.root, style)
          }),
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
            contentChildren
          )
        ),
        nestedList
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.muiName = 'ListItem';
ListItem.defaultProps = {
  autoGenerateNestedIndicator: true,
  containerElement: 'span',
  disableKeyboardFocus: false,
  disabled: false,
  initiallyOpen: false,
  insetChildren: false,
  nestedItems: [],
  nestedLevel: 0,
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onNestedListToggle: function onNestedListToggle() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {},
  open: null,
  primaryTogglesNestedList: false,
  secondaryTextLines: 1
};
ListItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, generate a nested-list-indicator icon when nested list
   * items are detected. Note that an indicator will not be created
   * if a `rightIcon` or `rightIconButton` has been provided to
   * the element.
   */
  autoGenerateNestedIndicator: _propTypes2.default.bool,
  /**
   * Children passed into the `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * The element to use as the container for the ListItem. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * ListItem in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disableKeyboardFocus: _propTypes2.default.bool,
  /**
   * If true, the element will not be clickable
   * and will not display hover effects.
   * This is automatically disabled if either `leftCheckbox`
   * or `rightToggle` is set.
   */
  disabled: _propTypes2.default.bool,
  /**
  * Override the hover background color.
  */
  hoverColor: _propTypes2.default.string,
  /**
   * If true, the nested `ListItem`s are initially displayed.
   */
  initiallyOpen: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented by 72px.
   * This is useful if there is no left avatar or left icon.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * Use to control if the list item should render as keyboard focused.  If
   * undefined (default), this will be automatically managed.  If provided,
   * it will change the components style.  Note that this will not change the
   * actual focus - and should only be used when you want to simulate
   * keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the left side.
   */
  leftAvatar: _propTypes2.default.element,
  /**
   * This is the `Checkbox` element to be displayed on the left side.
   */
  leftCheckbox: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * An array of `ListItem`s to nest underneath the current `ListItem`.
   */
  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * Controls how deep a `ListItem` appears.
   * This property is automatically managed, so modify at your own risk.
   */
  nestedLevel: _propTypes2.default.number,
  /**
   * Override the inline-styles of the nested items' `NestedList`.
   */
  nestedListStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the list item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the list item.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Callback function fired when the `ListItem` toggles its nested list.
   *
   * @param {object} listItem The `ListItem`.
   */
  onNestedListToggle: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Control toggle state of nested list.
   */
  open: _propTypes2.default.bool,
  /**
   * This is the block element that contains the primary text.
   * If a string is passed in, a div tag will be rendered.
   */
  primaryText: _propTypes2.default.node,
  /**
   * If true, clicking or tapping the primary text of the `ListItem`
   * toggles the nested list.
   */
  primaryTogglesNestedList: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the right side.
   */
  rightAvatar: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * This is the `IconButton` to be displayed on the right side.
   * Hovering over this button will remove the `ListItem` hover.
   * Also, clicking on this button will not trigger a
   * ripple on the `ListItem`; the event will be stopped and prevented
   * from bubbling up to cause a `ListItem` click.
   */
  rightIconButton: _propTypes2.default.element,
  /**
   * This is the `Toggle` element to display on the right side.
   */
  rightToggle: _propTypes2.default.element,
  /**
   * This is the block element that contains the secondary text.
   * If a string is passed in, a div tag will be rendered.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Can be 1 or 2. This is the number of secondary
   * text lines before ellipsis will show.
   */
  secondaryTextLines: _propTypes2.default.oneOf([1, 2]),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = ListItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _IconButton = __webpack_require__(198);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IconButton2.default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(56);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _EnhancedButton = __webpack_require__(86);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(199);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = __webpack_require__(201);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = __webpack_require__(202);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: _transitions2.default.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0
    },
    tooltip: {
      boxSizing: 'border-box'
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'default'
    }
  };
}

var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      // Not to be confonded with the touch property.
      // This state is to determined if it's a mobile device.
      touch: false,
      tooltipShown: false
    }, _this.handleBlur = function (event) {
      _this.hideTooltip();
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      _this.showTooltip();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.button.isKeyboardFocused()) {
        _this.hideTooltip();
      }
      _this.setState({ hovered: false });
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseOut = function (event) {
      if (_this.props.disabled) _this.hideTooltip();
      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
    }, _this.handleMouseEnter = function (event) {
      _this.showTooltip();

      // Cancel hover styles for touch devices
      if (!_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyboardFocus = _this$props.onKeyboardFocus;

      if (isKeyboardFocused && !disabled) {
        _this.showTooltip();
        if (onFocus) {
          onFocus(event);
        }
      } else {
        _this.hideTooltip();
        if (onBlur) {
          onBlur(event);
        }
      }

      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      if (onKeyboardFocus) {
        onKeyboardFocus(event, isKeyboardFocused);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ hovered: false });
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus() {
      this.button.setKeyboardFocus();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      if (this.props.tooltip) {
        this.setState({ tooltipShown: true });
      }
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      if (this.props.tooltip) this.setState({ tooltipShown: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          hoveredStyle = _props.hoveredStyle,
          disableTouchRipple = _props.disableTouchRipple,
          children = _props.children,
          iconClassName = _props.iconClassName,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipPositionProp = _props.tooltipPosition,
          tooltipStyles = _props.tooltipStyles,
          touch = _props.touch,
          iconStyle = _props.iconStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

      var fonticon = void 0;

      var styles = getStyles(this.props, this.context);
      var tooltipPosition = tooltipPositionProp.split('-');

      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});

      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
        label: tooltip,
        show: this.state.tooltipShown,
        touch: touch,
        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
        verticalPosition: tooltipPosition[0],
        horizontalPosition: tooltipPosition[1]
      }) : null;

      if (iconClassName) {
        var iconHoverColor = iconStyle.iconHoverColor,
            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


        fonticon = _react2.default.createElement(
          _FontIcon2.default,
          {
            className: iconClassName,
            hoverColor: disabled ? null : iconHoverColor,
            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
            color: this.context.muiTheme.baseTheme.palette.textColor
          },
          children
        );
      }

      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({
          ref: function ref(_ref2) {
            return _this2.button = _ref2;
          }
        }, other, {
          centerRipple: true,
          disabled: disabled,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          disableTouchRipple: disableTouchRipple,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onMouseOut: this.handleMouseOut,
          onKeyboardFocus: this.handleKeyboardFocus
        }),
        tooltipElement,
        fonticon,
        (0, _childUtils.extendChildren)(children, {
          style: childrenStyle
        })
      );
    }
  }]);
  return IconButton;
}(_react.Component);

IconButton.muiName = 'IconButton';
IconButton.defaultProps = {
  disabled: false,
  disableTouchRipple: false,
  iconStyle: {},
  tooltipPosition: 'bottom-center',
  touch: false
};
IconButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
IconButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the element will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when the component is hovered.
   */
  hoveredStyle: _propTypes2.default.object,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} keyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseOut: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to supply to the element's tooltip.
   */
  tooltip: _propTypes2.default.node,
  /**
   * The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition: _propTypes4.default.cornersAndCenter,
  /**
   * Override the inline-styles of the tooltip element.
   */
  tooltipStyles: _propTypes2.default.object,
  /**
   * If true, increase the tooltip element's size. Useful for increasing tooltip
   * readability on mobile devices.
   */
  touch: _propTypes2.default.bool
} : {};
exports.default = IconButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FontIcon = __webpack_require__(200);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var color = props.color,
      hoverColor = props.hoverColor;
  var baseTheme = context.muiTheme.baseTheme;

  var offColor = color || baseTheme.palette.textColor;
  var onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }
  };
}

var FontIcon = function (_Component) {
  (0, _inherits3.default)(FontIcon, _Component);

  function FontIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FontIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hoverColor = _props.hoverColor,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
      }));
    }
  }]);
  return FontIcon;
}(_react.Component);

FontIcon.muiName = 'FontIcon';
FontIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
FontIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FontIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This is the font color of the font icon. If not specified,
   * this component will default to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = FontIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(47);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(46);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(42);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(40);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(41);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var verticalPosition = props.verticalPosition;
  var horizontalPosition = props.horizontalPosition;
  var touchMarginOffset = props.touch ? 10 : 0;
  var touchOffsetTop = props.touch ? -20 : -10;
  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      zIndex = _context$muiTheme.zIndex,
      tooltip = _context$muiTheme.tooltip,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'absolute',
      fontFamily: baseTheme.fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius: borderRadius,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: tooltip.opacity,
      transform: 'translate(0px, ' + offset + 'px)',
      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    }
  };

  return styles;
}

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetWidth: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setRippleSize();
      this.setTooltipPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setTooltipPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setRippleSize();
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var ripple = this.refs.ripple;
      var tooltip = this.refs.tooltip;
      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
      if (this.props.show) {
        ripple.style.height = rippleDiameter + 'px';
        ripple.style.width = rippleDiameter + 'px';
      } else {
        ripple.style.width = '0px';
        ripple.style.height = '0px';
      }
    }
  }, {
    key: 'setTooltipPosition',
    value: function setTooltipPosition() {
      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontalPosition = _props.horizontalPosition,
          label = _props.label,
          show = _props.show,
          touch = _props.touch,
          verticalPosition = _props.verticalPosition,
          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: 'tooltip',
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
        }),
        _react2.default.createElement('div', {
          ref: 'ripple',
          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          label
        )
      );
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  horizontalPosition: _propTypes2.default.oneOf(['left', 'right', 'center']),
  label: _propTypes2.default.node.isRequired,
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  touch: _propTypes2.default.bool,
  verticalPosition: _propTypes2.default.oneOf(['top', 'bottom'])
} : {};
exports.default = Tooltip;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendChildren = extendChildren;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendChildren(children, extendedProps, extendedChildren) {
  return _react2.default.Children.map(children, function (child) {
    if (!_react2.default.isValidElement(child)) {
      return child;
    }

    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

    return _react2.default.cloneElement(child, newProps, newChildren);
  });
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(88);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(89);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandLess = function NavigationExpandLess(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
  );
};
NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
NavigationExpandLess.displayName = 'NavigationExpandLess';
NavigationExpandLess.muiName = 'SvgIcon';

exports.default = NavigationExpandLess;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(88);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(89);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandMore = function NavigationExpandMore(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
  );
};
NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
NavigationExpandMore.displayName = 'NavigationExpandMore';
NavigationExpandMore.muiName = 'SvgIcon';

exports.default = NavigationExpandMore;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(113);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedList = function NestedList(props) {
  var children = props.children,
      open = props.open,
      nestedLevel = props.nestedLevel,
      style = props.style;


  if (!open) {
    return null;
  }

  return _react2.default.createElement(
    _List2.default,
    { style: style },
    _react.Children.map(children, function (child) {
      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
        nestedLevel: nestedLevel + 1
      }) : child;
    })
  );
};

NestedList.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  nestedLevel: _propTypes2.default.number.isRequired,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = NestedList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
]))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL3RyYW5zaXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9wcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BhcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvYXV0b1ByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3B1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1N2Z0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tleWNvZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL01lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9MaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51SXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3NldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvd3JhcERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0ZvY3VzUmlwcGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaGFpbi1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1NjYWxlSW5DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvVG91Y2hSaXBwbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0NpcmNsZVJpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUGFwZXIvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZW50LWxpc3RlbmVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlbnQtbGlzdGVuZXIvbGliL3N1cHBvcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9SZW5kZXJUb0xheWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGlja0F3YXlMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU3ViaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9TdWJoZWFkZXIvU3ViaGVhZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51L21lbnVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudUl0ZW0vTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvc2hvdWxkVXBkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvc2V0U3RhdGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1N2Z0ljb24vU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Gb250SWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvRm9udEljb24vRm9udEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3V0aWxzL2NoaWxkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2V4cGFuZC1sZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9leHBhbmQtbW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9OZXN0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIkxvZ2luTWVudSIsInByb3BzIiwic3RhdGUiLCJvcGVuIiwiaGFuZGxlVG91Y2hUYXAiLCJiaW5kIiwiaGFuZGxlUmVxdWVzdENsb3NlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiYW5jaG9yRWwiLCJjdXJyZW50VGFyZ2V0IiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxTOzs7QUFFakIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVEEsS0FEUzs7QUFHZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsa0JBQU07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RUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVDQUF1QztBQUN2QztBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7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RXZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwwQjs7Ozs7Ozs7K0NDNWdCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxTQUFTLG9DQUFvQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtR0FBbUc7QUFDNUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7QUNwZUE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7O0FBRUEsMENBQTBDLG1DQUFzQzs7Ozs7Ozs7O0FDSGhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVLEVBQUU7QUFDaEQsbUJBQW1CLHNDQUFzQztBQUN6RCxDQUFDLHFD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QSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhCOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N0VEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDJFQUEyRSxVQUFVLHFDQUFxQztBQUMxSDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdDOzs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMkI7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMkI7Ozs7Ozs7OytDQzdKQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQTZDO0FBQ2xFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVcscUNBQXFDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDBCOzs7Ozs7OztBQ25PQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNEQUFzRDtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvREFBb0Q7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qzs7Ozs7OzsrQ0MvQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxlQUFlO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw2QiIsImZpbGUiOiIwLmJjMzM4ZDQ5MWEzYjQxMDQwZWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XG4vL2ltcG9ydCBQb3BvdmVyIGZyb20gJ21hdGVyaWFsLXVpL1BvcG92ZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnbWF0ZXJpYWwtdWkvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuaW1wb3J0IFBvcG92ZXIsIHtQb3BvdmVyQW5pbWF0aW9uVmVydGljYWx9IGZyb20gJ21hdGVyaWFsLXVpL1BvcG92ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZVRvdWNoVGFwID0gdGhpcy5oYW5kbGVUb3VjaFRhcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBnaG9zdCBjbGljay5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvdWNoVGFwfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNsaWNrIG1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuc3RhdGUuYW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICdib3R0b20nfX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T3JpZ2luPXt7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9fVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gcHJpbWFyeVRleHQ9XCJSZWZyZXNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBwcmltYXJ5VGV4dD1cIkhlbHAgJmFtcDsgZmVlZGJhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2V0dGluZ3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHByaW1hcnlUZXh0PVwiU2lnbiBvdXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2NvbXBvbmVudHMvTG9naW5NZW51LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gIGVhc2VPdXRGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsXG4gIGVhc2VJbk91dEZ1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KScsXG5cbiAgZWFzZU91dDogZnVuY3Rpb24gZWFzZU91dChkdXJhdGlvbiwgcHJvcGVydHksIGRlbGF5LCBlYXNlRnVuY3Rpb24pIHtcbiAgICBlYXNlRnVuY3Rpb24gPSBlYXNlRnVuY3Rpb24gfHwgdGhpcy5lYXNlT3V0RnVuY3Rpb247XG5cbiAgICBpZiAocHJvcGVydHkgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb3BlcnR5KSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgdmFyIHRyYW5zaXRpb25zID0gJyc7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9ucykgdHJhbnNpdGlvbnMgKz0gJywnO1xuICAgICAgICB0cmFuc2l0aW9ucyArPSB0aGlzLmNyZWF0ZShkdXJhdGlvbiwgcHJvcGVydHlbaV0sIGRlbGF5LCBlYXNlRnVuY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNpdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShkdXJhdGlvbiwgcHJvcGVydHksIGRlbGF5LCBlYXNlRnVuY3Rpb24pO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoZHVyYXRpb24sIHByb3BlcnR5LCBkZWxheSwgZWFzZUZ1bmN0aW9uKSB7XG4gICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAnNDUwbXMnO1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJ2FsbCc7XG4gICAgZGVsYXkgPSBkZWxheSB8fCAnMG1zJztcbiAgICBlYXNlRnVuY3Rpb24gPSBlYXNlRnVuY3Rpb24gfHwgJ2xpbmVhcic7XG5cbiAgICByZXR1cm4gcHJvcGVydHkgKyAnICcgKyBkdXJhdGlvbiArICcgJyArIGVhc2VGdW5jdGlvbiArICcgJyArIGRlbGF5O1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N0eWxlcy90cmFuc2l0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhvcml6b250YWwgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbGVmdCcsICdtaWRkbGUnLCAncmlnaHQnXSk7XG52YXIgdmVydGljYWwgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsndG9wJywgJ2NlbnRlcicsICdib3R0b20nXSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICBjb3JuZXJzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddKSxcblxuICBob3Jpem9udGFsOiBob3Jpem9udGFsLFxuXG4gIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcblxuICBvcmlnaW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGhvcml6b250YWw6IGhvcml6b250YWwsXG4gICAgdmVydGljYWw6IHZlcnRpY2FsXG4gIH0pLFxuXG4gIGNvcm5lcnNBbmRDZW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydib3R0b20tY2VudGVyJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtY2VudGVyJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddKSxcblxuICBzdHJpbmdPck51bWJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuXG4gIHpEZXB0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbMCwgMSwgMiwgMywgNCwgNV0pXG5cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvcHJvcFR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9zaGFsbG93RXF1YWwyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3NoYWxsb3dFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1BhcGVyMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BhcGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ldmVudHMgPSByZXF1aXJlKCcuLi91dGlscy9ldmVudHMnKTtcblxudmFyIF9ldmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRzKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfRm9jdXNSaXBwbGUgPSByZXF1aXJlKCcuL0ZvY3VzUmlwcGxlJyk7XG5cbnZhciBfRm9jdXNSaXBwbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9jdXNSaXBwbGUpO1xuXG52YXIgX1RvdWNoUmlwcGxlID0gcmVxdWlyZSgnLi9Ub3VjaFJpcHBsZScpO1xuXG52YXIgX1RvdWNoUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvdWNoUmlwcGxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN0eWxlSW5qZWN0ZWQgPSBmYWxzZTtcbnZhciBsaXN0ZW5pbmcgPSBmYWxzZTtcbnZhciB0YWJQcmVzc2VkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluamVjdFN0eWxlKCkge1xuICBpZiAoIXN0eWxlSW5qZWN0ZWQpIHtcbiAgICAvLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSAnXFxuICAgICAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgICAgIGlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgfVxcbiAgICAnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgc3R5bGVJbmplY3RlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdGVuRm9yVGFiUHJlc3NlcygpIHtcbiAgaWYgKCFsaXN0ZW5pbmcpIHtcbiAgICBfZXZlbnRzMi5kZWZhdWx0Lm9uKHdpbmRvdywgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRhYlByZXNzZWQgPSAoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSA9PT0gJ3RhYic7XG4gICAgfSk7XG4gICAgbGlzdGVuaW5nID0gdHJ1ZTtcbiAgfVxufVxuXG52YXIgRW5oYW5jZWRCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShFbmhhbmNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRW5oYW5jZWRCdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRW5oYW5jZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEVuaGFuY2VkQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICBpZiAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICdlbnRlcicgJiYgX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVUb3VjaFRhcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpID09PSAnZXNjJyAmJiBfdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICAgIF90aGlzLnJlbW92ZUtleWJvYXJkRm9jdXMoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICBpZiAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICdzcGFjZScgJiYgX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVUb3VjaFRhcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmNhbmNlbEZvY3VzVGltZW91dCgpO1xuICAgICAgX3RoaXMucmVtb3ZlS2V5Ym9hcmRGb2N1cyhldmVudCk7XG4gICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQgJiYgIV90aGlzLnByb3BzLmRpc2FibGVLZXlib2FyZEZvY3VzKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGZvY3VzIGV2ZW50IGZpcmVzIGZpcnN0XG4gICAgICAgIC8vIFdhaXQgc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSBpZiB0aGlzIHdhcyBhIGtleWJvYXJkIGZvY3VzXG4gICAgICAgIC8vIG9yIHRvdWNoIGZvY3VzXG4gICAgICAgIF90aGlzLmZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0YWJQcmVzc2VkKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRLZXlib2FyZEZvY3VzKGV2ZW50KTtcbiAgICAgICAgICAgIHRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDE1MCk7XG5cbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmNhbmNlbEZvY3VzVGltZW91dCgpO1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0YWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnJlbW92ZUtleWJvYXJkRm9jdXMoZXZlbnQpO1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRW5oYW5jZWRCdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZUtleWJvYXJkRm9jdXMgPSBfcHJvcHMuZGlzYWJsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAga2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzLmtleWJvYXJkRm9jdXNlZDtcblxuICAgICAgaWYgKCFkaXNhYmxlZCAmJiBrZXlib2FyZEZvY3VzZWQgJiYgIWRpc2FibGVLZXlib2FyZEZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaW5qZWN0U3R5bGUoKTtcbiAgICAgIGxpc3RlbkZvclRhYlByZXNzZXMoKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25LZXlib2FyZEZvY3VzKG51bGwsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKChuZXh0UHJvcHMuZGlzYWJsZWQgfHwgbmV4dFByb3BzLmRpc2FibGVLZXlib2FyZEZvY3VzKSAmJiB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICAgIGlmIChuZXh0UHJvcHMub25LZXlib2FyZEZvY3VzKSB7XG4gICAgICAgICAgbmV4dFByb3BzLm9uS2V5Ym9hcmRGb2N1cyhudWxsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuZm9jdXNUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNLZXlib2FyZEZvY3VzZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0tleWJvYXJkRm9jdXNlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUtleWJvYXJkRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVLZXlib2FyZEZvY3VzKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhldmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEtleWJvYXJkRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlib2FyZEZvY3VzKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzS2V5Ym9hcmRGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhldmVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FuY2VsRm9jdXNUaW1lb3V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsRm9jdXNUaW1lb3V0KCkge1xuICAgICAgaWYgKHRoaXMuZm9jdXNUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgICAgIHRoaXMuZm9jdXNUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVCdXR0b25DaGlsZHJlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkNoaWxkcmVuKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNlbnRlclJpcHBsZSA9IF9wcm9wczIuY2VudGVyUmlwcGxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzMi5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICAgICAgZGlzYWJsZUtleWJvYXJkRm9jdXMgPSBfcHJvcHMyLmRpc2FibGVLZXlib2FyZEZvY3VzLFxuICAgICAgICAgIGRpc2FibGVUb3VjaFJpcHBsZSA9IF9wcm9wczIuZGlzYWJsZVRvdWNoUmlwcGxlLFxuICAgICAgICAgIGZvY3VzUmlwcGxlQ29sb3IgPSBfcHJvcHMyLmZvY3VzUmlwcGxlQ29sb3IsXG4gICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5ID0gX3Byb3BzMi5mb2N1c1JpcHBsZU9wYWNpdHksXG4gICAgICAgICAgdG91Y2hSaXBwbGVDb2xvciA9IF9wcm9wczIudG91Y2hSaXBwbGVDb2xvcixcbiAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHkgPSBfcHJvcHMyLnRvdWNoUmlwcGxlT3BhY2l0eTtcbiAgICAgIHZhciBpc0tleWJvYXJkRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQ7XG5cbiAgICAgIC8vIEZvY3VzIFJpcHBsZVxuXG4gICAgICB2YXIgZm9jdXNSaXBwbGUgPSBpc0tleWJvYXJkRm9jdXNlZCAmJiAhZGlzYWJsZWQgJiYgIWRpc2FibGVGb2N1c1JpcHBsZSAmJiAhZGlzYWJsZUtleWJvYXJkRm9jdXMgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRm9jdXNSaXBwbGUyLmRlZmF1bHQsIHtcbiAgICAgICAgY29sb3I6IGZvY3VzUmlwcGxlQ29sb3IsXG4gICAgICAgIG9wYWNpdHk6IGZvY3VzUmlwcGxlT3BhY2l0eSxcbiAgICAgICAgc2hvdzogaXNLZXlib2FyZEZvY3VzZWQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogJ2ZvY3VzUmlwcGxlJ1xuICAgICAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIFRvdWNoIFJpcHBsZVxuICAgICAgdmFyIHRvdWNoUmlwcGxlID0gIWRpc2FibGVkICYmICFkaXNhYmxlVG91Y2hSaXBwbGUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RvdWNoUmlwcGxlMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY2VudGVyUmlwcGxlOiBjZW50ZXJSaXBwbGUsXG4gICAgICAgICAgY29sb3I6IHRvdWNoUmlwcGxlQ29sb3IsXG4gICAgICAgICAgb3BhY2l0eTogdG91Y2hSaXBwbGVPcGFjaXR5LFxuICAgICAgICAgIGtleTogJ3RvdWNoUmlwcGxlJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIFtmb2N1c1JpcHBsZSwgdG91Y2hSaXBwbGUsIHRvdWNoUmlwcGxlID8gdW5kZWZpbmVkIDogY2hpbGRyZW5dO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2VudGVyUmlwcGxlID0gX3Byb3BzMy5jZW50ZXJSaXBwbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBfcHJvcHMzLmNvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wczMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzID0gX3Byb3BzMy5kaXNhYmxlS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlVG91Y2hSaXBwbGUgPSBfcHJvcHMzLmRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yID0gX3Byb3BzMy5mb2N1c1JpcHBsZUNvbG9yLFxuICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eSA9IF9wcm9wczMuZm9jdXNSaXBwbGVPcGFjaXR5LFxuICAgICAgICAgIGhyZWYgPSBfcHJvcHMzLmhyZWYsXG4gICAgICAgICAga2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzMy5rZXlib2FyZEZvY3VzZWQsXG4gICAgICAgICAgdG91Y2hSaXBwbGVDb2xvciA9IF9wcm9wczMudG91Y2hSaXBwbGVDb2xvcixcbiAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHkgPSBfcHJvcHMzLnRvdWNoUmlwcGxlT3BhY2l0eSxcbiAgICAgICAgICBvbkJsdXIgPSBfcHJvcHMzLm9uQmx1cixcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMy5vbkNsaWNrLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMzLm9uRm9jdXMsXG4gICAgICAgICAgb25LZXlVcCA9IF9wcm9wczMub25LZXlVcCxcbiAgICAgICAgICBvbktleURvd24gPSBfcHJvcHMzLm9uS2V5RG93bixcbiAgICAgICAgICBvbktleWJvYXJkRm9jdXMgPSBfcHJvcHMzLm9uS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wczMuc3R5bGUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfcHJvcHMzLnRhYkluZGV4LFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMzLnR5cGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMzLCBbJ2NlbnRlclJpcHBsZScsICdjaGlsZHJlbicsICdjb250YWluZXJFbGVtZW50JywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVGb2N1c1JpcHBsZScsICdkaXNhYmxlS2V5Ym9hcmRGb2N1cycsICdkaXNhYmxlVG91Y2hSaXBwbGUnLCAnZm9jdXNSaXBwbGVDb2xvcicsICdmb2N1c1JpcHBsZU9wYWNpdHknLCAnaHJlZicsICdrZXlib2FyZEZvY3VzZWQnLCAndG91Y2hSaXBwbGVDb2xvcicsICd0b3VjaFJpcHBsZU9wYWNpdHknLCAnb25CbHVyJywgJ29uQ2xpY2snLCAnb25Gb2N1cycsICdvbktleVVwJywgJ29uS2V5RG93bicsICdvbktleWJvYXJkRm9jdXMnLCAnc3R5bGUnLCAndGFiSW5kZXgnLCAndHlwZSddKTtcbiAgICAgIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBwcmVwYXJlU3R5bGVzID0gX2NvbnRleHQkbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgICAgICBlbmhhbmNlZEJ1dHRvbiA9IF9jb250ZXh0JG11aVRoZW1lLmVuaGFuY2VkQnV0dG9uO1xuXG5cbiAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBib3JkZXI6IDEwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUuZm9udEZhbWlseSxcbiAgICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6IGVuaGFuY2VkQnV0dG9uLnRhcEhpZ2hsaWdodENvbG9yLCAvLyBSZW1vdmUgbW9iaWxlIGNvbG9yIGZsYXNoaW5nIChkZXByZWNhdGVkKVxuICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgZm9udFdlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgLy8gVGhpcyBpcyBuZWVkZWQgc28gdGhhdCByaXBwbGVzIGRvIG5vdCBibGVlZCBwYXN0IGJvcmRlciByYWRpdXMuXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IGhyZWYgPyAnbWlkZGxlJyA6IG51bGxcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgLy8gUGFzc2luZyBib3RoIGJhY2tncm91bmQ6bm9uZSAmIGJhY2tncm91bmRDb2xvciBjYW4gYnJlYWsgZHVlIHRvIG9iamVjdCBpdGVyYXRpb24gb3JkZXJcbiAgICAgIGlmICghbWVyZ2VkU3R5bGVzLmJhY2tncm91bmRDb2xvciAmJiAhbWVyZ2VkU3R5bGVzLmJhY2tncm91bmQpIHtcbiAgICAgICAgbWVyZ2VkU3R5bGVzLmJhY2tncm91bmQgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXNhYmxlZCAmJiBocmVmKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBtZXJnZWRTdHlsZXNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnV0dG9uUHJvcHMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRTdHlsZXMpLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5idXR0b24gPSBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUtleVVwLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVUb3VjaFRhcCxcbiAgICAgICAgdGFiSW5kZXg6IGRpc2FibGVkIHx8IGRpc2FibGVLZXlib2FyZEZvY3VzID8gLTEgOiB0YWJJbmRleFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChocmVmKSBidXR0b25Qcm9wcy5ocmVmID0gaHJlZjtcblxuICAgICAgdmFyIGJ1dHRvbkNoaWxkcmVuID0gdGhpcy5jcmVhdGVCdXR0b25DaGlsZHJlbigpO1xuXG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQsIGJ1dHRvblByb3BzLCBidXR0b25DaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIGlmICghaHJlZiAmJiBjb250YWluZXJFbGVtZW50ID09PSAnYnV0dG9uJykge1xuICAgICAgICBidXR0b25Qcm9wcy50eXBlID0gdHlwZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGhyZWYgPyAnYScgOiBjb250YWluZXJFbGVtZW50LCBidXR0b25Qcm9wcywgYnV0dG9uQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5FbmhhbmNlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lckVsZW1lbnQ6ICdidXR0b24nLFxuICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHt9LFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge30sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7fSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fSxcbiAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcCgpIHt9LFxuICBvbktleWJvYXJkRm9jdXM6IGZ1bmN0aW9uIG9uS2V5Ym9hcmRGb2N1cygpIHt9LFxuICB0YWJJbmRleDogMCxcbiAgdHlwZTogJ2J1dHRvbidcbn07XG5FbmhhbmNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRCdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjZW50ZXJSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVLZXlib2FyZEZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBmb2N1c1JpcHBsZUNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZm9jdXNSaXBwbGVPcGFjaXR5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGtleWJvYXJkRm9jdXNlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uS2V5RG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbktleVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uS2V5Ym9hcmRGb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRhYkluZGV4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdG91Y2hSaXBwbGVDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvdWNoUmlwcGxlT3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBFbmhhbmNlZEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHNldDogZnVuY3Rpb24gc2V0KHN0eWxlLCBrZXksIHZhbHVlKSB7XG4gICAgc3R5bGVba2V5XSA9IHZhbHVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3V0aWxzL2F1dG9QcmVmaXguanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zaG91bGRVcGRhdGUgPSByZXF1aXJlKCcuL3Nob3VsZFVwZGF0ZScpO1xuXG52YXIgX3Nob3VsZFVwZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRVcGRhdGUpO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJy4vc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfc2V0RGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL3NldERpc3BsYXlOYW1lJyk7XG5cbnZhciBfc2V0RGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0RGlzcGxheU5hbWUpO1xuXG52YXIgX3dyYXBEaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vd3JhcERpc3BsYXlOYW1lJyk7XG5cbnZhciBfd3JhcERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBEaXNwbGF5TmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwdXJlID0gZnVuY3Rpb24gcHVyZShCYXNlQ29tcG9uZW50KSB7XG4gIHZhciBob2MgPSAoMCwgX3Nob3VsZFVwZGF0ZTIuZGVmYXVsdCkoZnVuY3Rpb24gKHByb3BzLCBuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KShwcm9wcywgbmV4dFByb3BzKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gKDAsIF9zZXREaXNwbGF5TmFtZTIuZGVmYXVsdCkoKDAsIF93cmFwRGlzcGxheU5hbWUyLmRlZmF1bHQpKEJhc2VDb21wb25lbnQsICdwdXJlJykpKGhvYyhCYXNlQ29tcG9uZW50KSk7XG4gIH1cblxuICByZXR1cm4gaG9jKEJhc2VDb21wb25lbnQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcHVyZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvcHVyZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3ZnSWNvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9TdmdJY29uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIG9uY2U6IGZ1bmN0aW9uIG9uY2UoZWwsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHR5cGVBcnJheSA9IHR5cGUgPyB0eXBlLnNwbGl0KCcgJykgOiBbXTtcbiAgICB2YXIgcmVjdXJzaXZlRnVuY3Rpb24gPSBmdW5jdGlvbiByZWN1cnNpdmVGdW5jdGlvbihldmVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgcmVjdXJzaXZlRnVuY3Rpb24pO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IHR5cGVBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5vbihlbCwgdHlwZUFycmF5W2ldLCByZWN1cnNpdmVGdW5jdGlvbik7XG4gICAgfVxuICB9LFxuICBvbjogZnVuY3Rpb24gb24oZWwsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRTgrIFN1cHBvcnRcbiAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihlbCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOCsgU3VwcG9ydFxuICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sXG4gIGlzS2V5Ym9hcmQ6IGZ1bmN0aW9uIGlzS2V5Ym9hcmQoZXZlbnQpIHtcbiAgICByZXR1cm4gWydrZXlkb3duJywgJ2tleXByZXNzJywgJ2tleXVwJ10uaW5kZXhPZihldmVudC50eXBlKSAhPT0gLTE7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gU291cmNlOiBodHRwOi8vanNmaWRkbGUubmV0L3ZXeDhWL1xuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjAzMTk1L2Z1bGwtbGlzdC1vZi1qYXZhc2NyaXB0LWtleWNvZGVzXG5cbi8qKlxuICogQ29uZW5pZW5jZSBtZXRob2QgcmV0dXJucyBjb3JyZXNwb25kaW5nIHZhbHVlIGZvciBnaXZlbiBrZXlOYW1lIG9yIGtleUNvZGUuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0ga2V5Q29kZSB7TnVtYmVyfSBvciBrZXlOYW1lIHtTdHJpbmd9XG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VhcmNoSW5wdXQpIHtcbiAgLy8gS2V5Ym9hcmQgRXZlbnRzXG4gIGlmIChzZWFyY2hJbnB1dCAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHNlYXJjaElucHV0KSB7XG4gICAgdmFyIGhhc0tleUNvZGUgPSBzZWFyY2hJbnB1dC53aGljaCB8fCBzZWFyY2hJbnB1dC5rZXlDb2RlIHx8IHNlYXJjaElucHV0LmNoYXJDb2RlXG4gICAgaWYgKGhhc0tleUNvZGUpIHNlYXJjaElucHV0ID0gaGFzS2V5Q29kZVxuICB9XG5cbiAgLy8gTnVtYmVyc1xuICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBzZWFyY2hJbnB1dCkgcmV0dXJuIG5hbWVzW3NlYXJjaElucHV0XVxuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSAoY2FzdCB0byBzdHJpbmcpXG4gIHZhciBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoSW5wdXQpXG5cbiAgLy8gY2hlY2sgY29kZXNcbiAgdmFyIGZvdW5kTmFtZWRLZXkgPSBjb2Rlc1tzZWFyY2gudG9Mb3dlckNhc2UoKV1cbiAgaWYgKGZvdW5kTmFtZWRLZXkpIHJldHVybiBmb3VuZE5hbWVkS2V5XG5cbiAgLy8gY2hlY2sgYWxpYXNlc1xuICB2YXIgZm91bmROYW1lZEtleSA9IGFsaWFzZXNbc2VhcmNoLnRvTG93ZXJDYXNlKCldXG4gIGlmIChmb3VuZE5hbWVkS2V5KSByZXR1cm4gZm91bmROYW1lZEtleVxuXG4gIC8vIHdlaXJkIGNoYXJhY3Rlcj9cbiAgaWYgKHNlYXJjaC5sZW5ndGggPT09IDEpIHJldHVybiBzZWFyY2guY2hhckNvZGVBdCgwKVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBHZXQgYnkgbmFtZVxuICpcbiAqICAgZXhwb3J0cy5jb2RlWydlbnRlciddIC8vID0+IDEzXG4gKi9cblxudmFyIGNvZGVzID0gZXhwb3J0cy5jb2RlID0gZXhwb3J0cy5jb2RlcyA9IHtcbiAgJ2JhY2tzcGFjZSc6IDgsXG4gICd0YWInOiA5LFxuICAnZW50ZXInOiAxMyxcbiAgJ3NoaWZ0JzogMTYsXG4gICdjdHJsJzogMTcsXG4gICdhbHQnOiAxOCxcbiAgJ3BhdXNlL2JyZWFrJzogMTksXG4gICdjYXBzIGxvY2snOiAyMCxcbiAgJ2VzYyc6IDI3LFxuICAnc3BhY2UnOiAzMixcbiAgJ3BhZ2UgdXAnOiAzMyxcbiAgJ3BhZ2UgZG93bic6IDM0LFxuICAnZW5kJzogMzUsXG4gICdob21lJzogMzYsXG4gICdsZWZ0JzogMzcsXG4gICd1cCc6IDM4LFxuICAncmlnaHQnOiAzOSxcbiAgJ2Rvd24nOiA0MCxcbiAgJ2luc2VydCc6IDQ1LFxuICAnZGVsZXRlJzogNDYsXG4gICdjb21tYW5kJzogOTEsXG4gICdsZWZ0IGNvbW1hbmQnOiA5MSxcbiAgJ3JpZ2h0IGNvbW1hbmQnOiA5MyxcbiAgJ251bXBhZCAqJzogMTA2LFxuICAnbnVtcGFkICsnOiAxMDcsXG4gICdudW1wYWQgLSc6IDEwOSxcbiAgJ251bXBhZCAuJzogMTEwLFxuICAnbnVtcGFkIC8nOiAxMTEsXG4gICdudW0gbG9jayc6IDE0NCxcbiAgJ3Njcm9sbCBsb2NrJzogMTQ1LFxuICAnbXkgY29tcHV0ZXInOiAxODIsXG4gICdteSBjYWxjdWxhdG9yJzogMTgzLFxuICAnOyc6IDE4NixcbiAgJz0nOiAxODcsXG4gICcsJzogMTg4LFxuICAnLSc6IDE4OSxcbiAgJy4nOiAxOTAsXG4gICcvJzogMTkxLFxuICAnYCc6IDE5MixcbiAgJ1snOiAyMTksXG4gICdcXFxcJzogMjIwLFxuICAnXSc6IDIyMSxcbiAgXCInXCI6IDIyMlxufVxuXG4vLyBIZWxwZXIgYWxpYXNlc1xuXG52YXIgYWxpYXNlcyA9IGV4cG9ydHMuYWxpYXNlcyA9IHtcbiAgJ3dpbmRvd3MnOiA5MSxcbiAgJ+KHpyc6IDE2LFxuICAn4oylJzogMTgsXG4gICfijIMnOiAxNyxcbiAgJ+KMmCc6IDkxLFxuICAnY3RsJzogMTcsXG4gICdjb250cm9sJzogMTcsXG4gICdvcHRpb24nOiAxOCxcbiAgJ3BhdXNlJzogMTksXG4gICdicmVhayc6IDE5LFxuICAnY2Fwcyc6IDIwLFxuICAncmV0dXJuJzogMTMsXG4gICdlc2NhcGUnOiAyNyxcbiAgJ3NwYyc6IDMyLFxuICAncGd1cCc6IDMzLFxuICAncGdkbic6IDM0LFxuICAnaW5zJzogNDUsXG4gICdkZWwnOiA0NixcbiAgJ2NtZCc6IDkxXG59XG5cblxuLyohXG4gKiBQcm9ncmFtYXRpY2FsbHkgYWRkIHRoZSBmb2xsb3dpbmdcbiAqL1xuXG4vLyBsb3dlciBjYXNlIGNoYXJzXG5mb3IgKGkgPSA5NzsgaSA8IDEyMzsgaSsrKSBjb2Rlc1tTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGkgLSAzMlxuXG4vLyBudW1iZXJzXG5mb3IgKHZhciBpID0gNDg7IGkgPCA1ODsgaSsrKSBjb2Rlc1tpIC0gNDhdID0gaVxuXG4vLyBmdW5jdGlvbiBrZXlzXG5mb3IgKGkgPSAxOyBpIDwgMTM7IGkrKykgY29kZXNbJ2YnK2ldID0gaSArIDExMVxuXG4vLyBudW1wYWQga2V5c1xuZm9yIChpID0gMDsgaSA8IDEwOyBpKyspIGNvZGVzWydudW1wYWQgJytpXSA9IGkgKyA5NlxuXG4vKipcbiAqIEdldCBieSBjb2RlXG4gKlxuICogICBleHBvcnRzLm5hbWVbMTNdIC8vID0+ICdFbnRlcidcbiAqL1xuXG52YXIgbmFtZXMgPSBleHBvcnRzLm5hbWVzID0gZXhwb3J0cy50aXRsZSA9IHt9IC8vIHRpdGxlIGZvciBiYWNrd2FyZCBjb21wYXRcblxuLy8gQ3JlYXRlIHJldmVyc2UgbWFwcGluZ1xuZm9yIChpIGluIGNvZGVzKSBuYW1lc1tjb2Rlc1tpXV0gPSBpXG5cbi8vIEFkZCBhbGlhc2VzXG5mb3IgKHZhciBhbGlhcyBpbiBhbGlhc2VzKSB7XG4gIGNvZGVzW2FsaWFzXSA9IGFsaWFzZXNbYWxpYXNdXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9rZXljb2RlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NoYWluRnVuY3Rpb24gPSByZXF1aXJlKCdjaGFpbi1mdW5jdGlvbicpO1xuXG52YXIgX2NoYWluRnVuY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW5GdW5jdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFuc2l0aW9uR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgYXBwZWFyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxFbnRlcihfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRFbnRlcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICghY3VycmVudENoaWxkTWFwcGluZyB8fCAhY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgd2FzIHJlbW92ZWQgYmVmb3JlIGl0IGhhZCBmdWxseSBlbnRlcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXMsIGtleSwgY29tcG9uZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBzb21ld2hhdCBkYW5nZXJvdXMgYi9jIGl0IGNhbGxzIHNldFN0YXRlKClcbiAgICAgICAgLy8gYWdhaW4sIGVmZmVjdGl2ZWx5IG11dGF0aW5nIHRoZSBjb21wb25lbnQgYmVmb3JlIGFsbCB0aGUgd29ya1xuICAgICAgICAvLyBpcyBkb25lLlxuICAgICAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoY3VycmVudENoaWxkTWFwcGluZyAmJiBjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyBlbnRlcmVkIGFnYWluIGJlZm9yZSBpdCBmdWxseSBsZWZ0LiBBZGQgaXQgYWdhaW4uXG4gICAgICAgIF90aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG4gICAgICAgICAgZGVsZXRlIG5ld0NoaWxkcmVuW2tleV07XG4gICAgICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IG5ld0NoaWxkcmVuIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jaGlsZFJlZnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShwcm9wcy5jaGlsZHJlbilcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXMgPSB7fTtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgaW5pdGlhbENoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgZm9yICh2YXIga2V5IGluIGluaXRpYWxDaGlsZE1hcHBpbmcpIHtcbiAgICAgIGlmIChpbml0aWFsQ2hpbGRNYXBwaW5nW2tleV0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQXBwZWFyKGtleSwgdGhpcy5jaGlsZFJlZnNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGlsZHJlbjogKDAsIF9DaGlsZE1hcHBpbmcubWVyZ2VDaGlsZE1hcHBpbmdzKShwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKVxuICAgIH0pO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG5leHRDaGlsZE1hcHBpbmcpIHtcbiAgICAgIHZhciBoYXNQcmV2ID0gcHJldkNoaWxkTWFwcGluZyAmJiBwcmV2Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICBpZiAobmV4dENoaWxkTWFwcGluZ1trZXldICYmICFoYXNQcmV2ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0pIHtcbiAgICAgICAgdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2tleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzTmV4dCA9IG5leHRDaGlsZE1hcHBpbmcgJiYgbmV4dENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShfa2V5KTtcbiAgICAgIGlmIChwcmV2Q2hpbGRNYXBwaW5nW19rZXldICYmICFoYXNOZXh0ICYmICF0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW19rZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvTGVhdmUucHVzaChfa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSB3YW50IHRvIHNvbWVkYXkgY2hlY2sgZm9yIHJlb3JkZXJpbmcsIHdlIGNvdWxkIGRvIGl0IGhlcmUuXG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBrZXlzVG9FbnRlci5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUVudGVyKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcblxuICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgIGtleXNUb0xlYXZlLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5wZXJmb3JtTGVhdmUoa2V5LCBfdGhpczIuY2hpbGRSZWZzW2tleV0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogd2UgY291bGQgZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3IgdGhlIHdyYXBwZXIgbm9kZVxuICAgIC8vIGJ5IGNsb25pbmcgYSBzaW5nbGUgY2hpbGRcbiAgICB2YXIgY2hpbGRyZW5Ub1JlbmRlciA9IFtdO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoa2V5KSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczMuc3RhdGUuY2hpbGRyZW5ba2V5XTtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICB2YXIgaXNDYWxsYmFja1JlZiA9IHR5cGVvZiBjaGlsZC5yZWYgIT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgZmFjdG9yeUNoaWxkID0gX3RoaXMzLnByb3BzLmNoaWxkRmFjdG9yeShjaGlsZCk7XG4gICAgICAgIHZhciByZWYgPSBmdW5jdGlvbiByZWYocikge1xuICAgICAgICAgIF90aGlzMy5jaGlsZFJlZnNba2V5XSA9IHI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoaXNDYWxsYmFja1JlZiwgJ3N0cmluZyByZWZzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIGNoaWxkcmVuIG9mIFRyYW5zaXRpb25Hcm91cCBhbmQgd2lsbCBiZSBpZ25vcmVkLiAnICsgJ1BsZWFzZSB1c2UgYSBjYWxsYmFjayByZWYgaW5zdGVhZDogaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWwjdGhlLXJlZi1jYWxsYmFjay1hdHRyaWJ1dGUnKSA6IHZvaWQgMDtcblxuICAgICAgICAvLyBBbHdheXMgY2hhaW5pbmcgdGhlIHJlZnMgbGVhZHMgdG8gcHJvYmxlbXMgd2hlbiB0aGUgY2hpbGRGYWN0b3J5XG4gICAgICAgIC8vIHdyYXBzIHRoZSBjaGlsZC4gVGhlIGNoaWxkIHJlZiBjYWxsYmFjayBnZXRzIGNhbGxlZCB0d2ljZSB3aXRoIHRoZVxuICAgICAgICAvLyB3cmFwcGVyIGFuZCB0aGUgY2hpbGQuIFNvIHdlIG9ubHkgbmVlZCB0byBjaGFpbiB0aGUgcmVmIGlmIHRoZVxuICAgICAgICAvLyBmYWN0b3J5Q2hpbGQgaXMgbm90IGRpZmZlcmVudCBmcm9tIGNoaWxkLlxuICAgICAgICBpZiAoZmFjdG9yeUNoaWxkID09PSBjaGlsZCAmJiBpc0NhbGxiYWNrUmVmKSB7XG4gICAgICAgICAgcmVmID0gKDAsIF9jaGFpbkZ1bmN0aW9uMi5kZWZhdWx0KShjaGlsZC5yZWYsIHJlZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGxlYXZpbmcuXG4gICAgICAgIC8vIFRoZSBub3JtYWwgUmVhY3Qgd2F5IHRvIGRvIGl0IHdvbid0IHdvcmsgc2luY2UgdGhlIGNoaWxkIHdpbGwgaGF2ZVxuICAgICAgICAvLyBhbHJlYWR5IGJlZW4gcmVtb3ZlZC4gSW4gY2FzZSB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIHlvdSBjYW4gcHJvdmlkZVxuICAgICAgICAvLyBhIGNoaWxkRmFjdG9yeSBmdW5jdGlvbiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlXG4gICAgICAgIC8vIGxlYXZpbmcuXG4gICAgICAgIGNoaWxkcmVuVG9SZW5kZXIucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGZhY3RvcnlDaGlsZCwge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHJlZjogcmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc3RhdGUuY2hpbGRyZW4pIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IGZvcndhcmQgVHJhbnNpdGlvbkdyb3VwIHByb3BzIHRvIHByaW1pdGl2ZSBET00gbm9kZXNcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25MZWF2ZTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25BcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25FbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuY2hpbGRGYWN0b3J5O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmVUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0O1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdUcmFuc2l0aW9uR3JvdXAnO1xuXG5cblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYW5zaXRpb25Hcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyIDogKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBpc0Rlc2NlbmRhbnQ6IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gICAgdmFyIG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChub2RlID09PSBwYXJlbnQpIHJldHVybiB0cnVlO1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gICAgfTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9kb20uanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX1JlbmRlclRvTGF5ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9SZW5kZXJUb0xheWVyJyk7XG5cbnZhciBfUmVuZGVyVG9MYXllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJUb0xheWVyKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbnZhciBfbG9kYXNoID0gcmVxdWlyZSgnbG9kYXNoLnRocm90dGxlJyk7XG5cbnZhciBfbG9kYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaCk7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQgPSByZXF1aXJlKCcuL1BvcG92ZXJBbmltYXRpb25EZWZhdWx0Jyk7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbnZhciBQb3BvdmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUG9wb3ZlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wb3Zlcihwcm9wcywgY29udGV4dCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFBvcG92ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoUG9wb3Zlci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUG9wb3ZlcikpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLnRpbWVvdXQgPSBudWxsO1xuXG4gICAgX3RoaXMucmVuZGVyTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbmltYXRlZCA9IF90aGlzJHByb3BzLmFuaW1hdGVkLFxuICAgICAgICAgIGFuaW1hdGlvbiA9IF90aGlzJHByb3BzLmFuaW1hdGlvbixcbiAgICAgICAgICBhbmNob3JFbCA9IF90aGlzJHByb3BzLmFuY2hvckVsLFxuICAgICAgICAgIGFuY2hvck9yaWdpbiA9IF90aGlzJHByb3BzLmFuY2hvck9yaWdpbixcbiAgICAgICAgICBhdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuID0gX3RoaXMkcHJvcHMuYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbixcbiAgICAgICAgICBjYW5BdXRvUG9zaXRpb24gPSBfdGhpcyRwcm9wcy5jYW5BdXRvUG9zaXRpb24sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZSA9IF90aGlzJHByb3BzLm9uUmVxdWVzdENsb3NlLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdGFyZ2V0T3JpZ2luID0gX3RoaXMkcHJvcHMudGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIHVzZUxheWVyRm9yQ2xpY2tBd2F5ID0gX3RoaXMkcHJvcHMudXNlTGF5ZXJGb3JDbGlja0F3YXksXG4gICAgICAgICAgc2Nyb2xsYWJsZUNvbnRhaW5lciA9IF90aGlzJHByb3BzLnNjcm9sbGFibGVDb250YWluZXIsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfdGhpcyRwcm9wcywgWydhbmltYXRlZCcsICdhbmltYXRpb24nLCAnYW5jaG9yRWwnLCAnYW5jaG9yT3JpZ2luJywgJ2F1dG9DbG9zZVdoZW5PZmZTY3JlZW4nLCAnY2FuQXV0b1Bvc2l0aW9uJywgJ2NoaWxkcmVuJywgJ29uUmVxdWVzdENsb3NlJywgJ3N0eWxlJywgJ3RhcmdldE9yaWdpbicsICd1c2VMYXllckZvckNsaWNrQXdheScsICdzY3JvbGxhYmxlQ29udGFpbmVyJ10pO1xuXG5cbiAgICAgIHZhciBzdHlsZVJvb3QgPSBzdHlsZTtcblxuICAgICAgaWYgKCFhbmltYXRlZCkge1xuICAgICAgICBzdHlsZVJvb3QgPSB7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgekluZGV4OiBfdGhpcy5jb250ZXh0Lm11aVRoZW1lLnpJbmRleC5wb3BvdmVyXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoeyBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlUm9vdCwgc3R5bGUpIH0sIG90aGVyKSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgQW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IF9Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdDIuZGVmYXVsdDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBbmltYXRpb24sXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHRhcmdldE9yaWdpbjogdGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVJvb3RcbiAgICAgICAgfSwgb3RoZXIsIHtcbiAgICAgICAgICBvcGVuOiBfdGhpcy5zdGF0ZS5vcGVuICYmICFfdGhpcy5zdGF0ZS5jbG9zaW5nXG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY29tcG9uZW50Q2xpY2tBd2F5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVxdWVzdENsb3NlKCdjbGlja0F3YXknKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0UGxhY2VtZW50ID0gZnVuY3Rpb24gKHNjcm9sbGluZykge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5wb3BvdmVyUmVmcy5sYXllci5nZXRMYXllcigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldEVsID0gX3RoaXMucG9wb3ZlclJlZnMubGF5ZXIuZ2V0TGF5ZXIoKS5jaGlsZHJlblswXTtcbiAgICAgIGlmICghdGFyZ2V0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdGFyZ2V0T3JpZ2luID0gX3RoaXMkcHJvcHMyLnRhcmdldE9yaWdpbixcbiAgICAgICAgICBhbmNob3JPcmlnaW4gPSBfdGhpcyRwcm9wczIuYW5jaG9yT3JpZ2luO1xuXG4gICAgICB2YXIgYW5jaG9yRWwgPSBfdGhpcy5wcm9wcy5hbmNob3JFbCB8fCBfdGhpcy5hbmNob3JFbDtcblxuICAgICAgdmFyIGFuY2hvciA9IF90aGlzLmdldEFuY2hvclBvc2l0aW9uKGFuY2hvckVsKTtcbiAgICAgIHZhciB0YXJnZXQgPSBfdGhpcy5nZXRUYXJnZXRQb3NpdGlvbih0YXJnZXRFbCk7XG5cbiAgICAgIHZhciB0YXJnZXRQb3NpdGlvbiA9IHtcbiAgICAgICAgdG9wOiBhbmNob3JbYW5jaG9yT3JpZ2luLnZlcnRpY2FsXSAtIHRhcmdldFt0YXJnZXRPcmlnaW4udmVydGljYWxdLFxuICAgICAgICBsZWZ0OiBhbmNob3JbYW5jaG9yT3JpZ2luLmhvcml6b250YWxdIC0gdGFyZ2V0W3RhcmdldE9yaWdpbi5ob3Jpem9udGFsXVxuICAgICAgfTtcblxuICAgICAgaWYgKHNjcm9sbGluZyAmJiBfdGhpcy5wcm9wcy5hdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuKSB7XG4gICAgICAgIF90aGlzLmF1dG9DbG9zZVdoZW5PZmZTY3JlZW4oYW5jaG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmNhbkF1dG9Qb3NpdGlvbikge1xuICAgICAgICB0YXJnZXQgPSBfdGhpcy5nZXRUYXJnZXRQb3NpdGlvbih0YXJnZXRFbCk7IC8vIHVwZGF0ZSBhcyBoZWlnaHQgbWF5IGhhdmUgY2hhbmdlZFxuICAgICAgICB0YXJnZXRQb3NpdGlvbiA9IF90aGlzLmFwcGx5QXV0b1Bvc2l0aW9uSWZOZWVkZWQoYW5jaG9yLCB0YXJnZXQsIHRhcmdldE9yaWdpbiwgYW5jaG9yT3JpZ2luLCB0YXJnZXRQb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldEVsLnN0eWxlLnRvcCA9IHRhcmdldFBvc2l0aW9uLnRvcCArICdweCc7XG4gICAgICB0YXJnZXRFbC5zdHlsZS5sZWZ0ID0gdGFyZ2V0UG9zaXRpb24ubGVmdCArICdweCc7XG4gICAgICB0YXJnZXRFbC5zdHlsZS5tYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAncHgnO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVSZXNpemUgPSAoMCwgX2xvZGFzaDIuZGVmYXVsdCkoX3RoaXMuc2V0UGxhY2VtZW50LCAxMDApO1xuICAgIF90aGlzLmhhbmRsZVNjcm9sbCA9ICgwLCBfbG9kYXNoMi5kZWZhdWx0KShfdGhpcy5zZXRQbGFjZW1lbnQuYmluZChfdGhpcywgdHJ1ZSksIDUwKTtcblxuICAgIF90aGlzLnBvcG92ZXJSZWZzID0ge307XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IHByb3BzLm9wZW4sXG4gICAgICBjbG9zaW5nOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9wb3ZlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wbGFjZW1lbnRUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNldFBsYWNlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKG5leHRQcm9wcy5vcGVuID09PSB0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLm9wZW4pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuYW5jaG9yRWwgPSBuZXh0UHJvcHMuYW5jaG9yRWwgfHwgdGhpcy5wcm9wcy5hbmNob3JFbDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICBjbG9zaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMuYW5pbWF0ZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3Npbmc6IHRydWUgfSk7XG4gICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczIudGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBsYWNlbWVudFRpbWVvdXQpO1xuICAgICAgdGhpcy5wbGFjZW1lbnRUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLnNldFBsYWNlbWVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzaXplLmNhbmNlbCgpO1xuICAgICAgdGhpcy5oYW5kbGVTY3JvbGwuY2FuY2VsKCk7XG5cbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudFRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGxhY2VtZW50VGltZW91dCk7XG4gICAgICAgIHRoaXMucGxhY2VtZW50VGltZW91dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVxdWVzdENsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENsb3NlKHJlYXNvbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZShyZWFzb24pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFuY2hvclBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QW5jaG9yUG9zaXRpb24oZWwpIHtcbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgZWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgYSA9IHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXG4gICAgICAgIGhlaWdodDogZWwub2Zmc2V0SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBhLnJpZ2h0ID0gcmVjdC5yaWdodCB8fCBhLmxlZnQgKyBhLndpZHRoO1xuICAgICAgYS5ib3R0b20gPSByZWN0LmJvdHRvbSB8fCBhLnRvcCArIGEuaGVpZ2h0O1xuICAgICAgYS5taWRkbGUgPSBhLmxlZnQgKyAoYS5yaWdodCAtIGEubGVmdCkgLyAyO1xuICAgICAgYS5jZW50ZXIgPSBhLnRvcCArIChhLmJvdHRvbSAtIGEudG9wKSAvIDI7XG5cbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRhcmdldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0UG9zaXRpb24odGFyZ2V0RWwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgY2VudGVyOiB0YXJnZXRFbC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgICBib3R0b206IHRhcmdldEVsLm9mZnNldEhlaWdodCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgbWlkZGxlOiB0YXJnZXRFbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgIHJpZ2h0OiB0YXJnZXRFbC5vZmZzZXRXaWR0aFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbihhbmNob3JQb3NpdGlvbikge1xuICAgICAgaWYgKGFuY2hvclBvc2l0aW9uLnRvcCA8IDAgfHwgYW5jaG9yUG9zaXRpb24udG9wID4gd2luZG93LmlubmVySGVpZ2h0IHx8IGFuY2hvclBvc2l0aW9uLmxlZnQgPCAwIHx8IGFuY2hvclBvc2l0aW9uLmxlZnQgPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLnJlcXVlc3RDbG9zZSgnb2ZmU2NyZWVuJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0T3ZlcmxhcE1vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPdmVybGFwTW9kZShhbmNob3IsIHRhcmdldCwgbWVkaWFuKSB7XG4gICAgICBpZiAoW2FuY2hvciwgdGFyZ2V0XS5pbmRleE9mKG1lZGlhbikgPj0gMCkgcmV0dXJuICdhdXRvJztcbiAgICAgIGlmIChhbmNob3IgPT09IHRhcmdldCkgcmV0dXJuICdpbmNsdXNpdmUnO1xuICAgICAgcmV0dXJuICdleGNsdXNpdmUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFBvc2l0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvc2l0aW9ucyhhbmNob3IsIHRhcmdldCkge1xuICAgICAgdmFyIGEgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBhbmNob3IpO1xuICAgICAgdmFyIHQgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCB0YXJnZXQpO1xuXG4gICAgICB2YXIgcG9zaXRpb25zID0ge1xuICAgICAgICB4OiBbJ2xlZnQnLCAncmlnaHQnXS5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICByZXR1cm4gcCAhPT0gdC5ob3Jpem9udGFsO1xuICAgICAgICB9KSxcbiAgICAgICAgeTogWyd0b3AnLCAnYm90dG9tJ10uZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHAgIT09IHQudmVydGljYWw7XG4gICAgICAgIH0pXG4gICAgICB9O1xuXG4gICAgICB2YXIgb3ZlcmxhcCA9IHtcbiAgICAgICAgeDogdGhpcy5nZXRPdmVybGFwTW9kZShhLmhvcml6b250YWwsIHQuaG9yaXpvbnRhbCwgJ21pZGRsZScpLFxuICAgICAgICB5OiB0aGlzLmdldE92ZXJsYXBNb2RlKGEudmVydGljYWwsIHQudmVydGljYWwsICdjZW50ZXInKVxuICAgICAgfTtcblxuICAgICAgcG9zaXRpb25zLnguc3BsaWNlKG92ZXJsYXAueCA9PT0gJ2F1dG8nID8gMCA6IDEsIDAsICdtaWRkbGUnKTtcbiAgICAgIHBvc2l0aW9ucy55LnNwbGljZShvdmVybGFwLnkgPT09ICdhdXRvJyA/IDAgOiAxLCAwLCAnY2VudGVyJyk7XG5cbiAgICAgIGlmIChvdmVybGFwLnkgIT09ICdhdXRvJykge1xuICAgICAgICBhLnZlcnRpY2FsID0gYS52ZXJ0aWNhbCA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgICAgICBpZiAob3ZlcmxhcC55ID09PSAnaW5jbHVzaXZlJykge1xuICAgICAgICAgIHQudmVydGljYWwgPSB0LnZlcnRpY2FsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvdmVybGFwLnggIT09ICdhdXRvJykge1xuICAgICAgICBhLmhvcml6b250YWwgPSBhLmhvcml6b250YWwgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIGlmIChvdmVybGFwLnkgPT09ICdpbmNsdXNpdmUnKSB7XG4gICAgICAgICAgdC5ob3Jpem9udGFsID0gdC5ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uczogcG9zaXRpb25zLFxuICAgICAgICBhbmNob3JQb3M6IGFcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXBwbHlBdXRvUG9zaXRpb25JZk5lZWRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5QXV0b1Bvc2l0aW9uSWZOZWVkZWQoYW5jaG9yLCB0YXJnZXQsIHRhcmdldE9yaWdpbiwgYW5jaG9yT3JpZ2luLCB0YXJnZXRQb3NpdGlvbikge1xuICAgICAgdmFyIF9nZXRQb3NpdGlvbnMgPSB0aGlzLmdldFBvc2l0aW9ucyhhbmNob3JPcmlnaW4sIHRhcmdldE9yaWdpbiksXG4gICAgICAgICAgcG9zaXRpb25zID0gX2dldFBvc2l0aW9ucy5wb3NpdGlvbnMsXG4gICAgICAgICAgYW5jaG9yUG9zID0gX2dldFBvc2l0aW9ucy5hbmNob3JQb3M7XG5cbiAgICAgIGlmICh0YXJnZXRQb3NpdGlvbi50b3AgPCAwIHx8IHRhcmdldFBvc2l0aW9uLnRvcCArIHRhcmdldC5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdmFyIG5ld1RvcCA9IGFuY2hvclthbmNob3JQb3MudmVydGljYWxdIC0gdGFyZ2V0W3Bvc2l0aW9ucy55WzBdXTtcbiAgICAgICAgaWYgKG5ld1RvcCArIHRhcmdldC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb24udG9wID0gTWF0aC5tYXgoMCwgbmV3VG9wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUb3AgPSBhbmNob3JbYW5jaG9yUG9zLnZlcnRpY2FsXSAtIHRhcmdldFtwb3NpdGlvbnMueVsxXV07XG4gICAgICAgICAgaWYgKG5ld1RvcCArIHRhcmdldC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICB0YXJnZXRQb3NpdGlvbi50b3AgPSBNYXRoLm1heCgwLCBuZXdUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0UG9zaXRpb24ubGVmdCA8IDAgfHwgdGFyZ2V0UG9zaXRpb24ubGVmdCArIHRhcmdldC5yaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHZhciBuZXdMZWZ0ID0gYW5jaG9yW2FuY2hvclBvcy5ob3Jpem9udGFsXSAtIHRhcmdldFtwb3NpdGlvbnMueFswXV07XG4gICAgICAgIGlmIChuZXdMZWZ0ICsgdGFyZ2V0LnJpZ2h0IDw9IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb24ubGVmdCA9IE1hdGgubWF4KDAsIG5ld0xlZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0xlZnQgPSBhbmNob3JbYW5jaG9yUG9zLmhvcml6b250YWxdIC0gdGFyZ2V0W3Bvc2l0aW9ucy54WzFdXTtcbiAgICAgICAgICBpZiAobmV3TGVmdCArIHRhcmdldC5yaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgdGFyZ2V0UG9zaXRpb24ubGVmdCA9IE1hdGgubWF4KDAsIG5ld0xlZnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0UG9zaXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlcy5yb290IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEV2ZW50TGlzdGVuZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMucHJvcHMuc2Nyb2xsYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICBvblNjcm9sbDogdGhpcy5oYW5kbGVTY3JvbGwsXG4gICAgICAgICAgb25SZXNpemU6IHRoaXMuaGFuZGxlUmVzaXplXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUmVuZGVyVG9MYXllcjIuZGVmYXVsdCwge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMucG9wb3ZlclJlZnMubGF5ZXIgPSBfcmVmO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BlbjogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgICAgIGNvbXBvbmVudENsaWNrQXdheTogdGhpcy5jb21wb25lbnRDbGlja0F3YXksXG4gICAgICAgICAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IHRoaXMucHJvcHMudXNlTGF5ZXJGb3JDbGlja0F3YXksXG4gICAgICAgICAgcmVuZGVyOiB0aGlzLnJlbmRlckxheWVyXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUG9wb3Zlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBvcG92ZXIuZGVmYXVsdFByb3BzID0ge1xuICBhbmNob3JPcmlnaW46IHtcbiAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH0sXG4gIGFuaW1hdGVkOiB0cnVlLFxuICBhdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuOiB0cnVlLFxuICBjYW5BdXRvUG9zaXRpb246IHRydWUsXG4gIG9uUmVxdWVzdENsb3NlOiBmdW5jdGlvbiBvblJlcXVlc3RDbG9zZSgpIHt9LFxuICBvcGVuOiBmYWxzZSxcbiAgc2Nyb2xsYWJsZUNvbnRhaW5lcjogJ3dpbmRvdycsXG4gIHN0eWxlOiB7XG4gICAgb3ZlcmZsb3dZOiAnYXV0bydcbiAgfSxcbiAgdGFyZ2V0T3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9LFxuICB1c2VMYXllckZvckNsaWNrQXdheTogdHJ1ZSxcbiAgekRlcHRoOiAxXG59O1xuUG9wb3Zlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBET00gZWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZVxuICAgKiBwb3BvdmVyLlxuICAgKi9cbiAgYW5jaG9yRWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIGFuY2hvciB3aGVyZSB0aGUgcG9wb3ZlcidzXG4gICAqIGB0YXJnZXRPcmlnaW5gIHdpbGwgYXR0YWNoIHRvLlxuICAgKiBPcHRpb25zOlxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b21dXG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBtaWRkbGUsIHJpZ2h0XS5cbiAgICovXG4gIGFuY2hvck9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4sXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcG9wb3ZlciB3aWxsIGFwcGx5IHRyYW5zaXRpb25zIHdoZW5cbiAgICogaXQgaXMgYWRkZWQgdG8gdGhlIERPTS5cbiAgICovXG4gIGFuaW1hdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBhbmltYXRpb24gY29tcG9uZW50IHVzZWQuXG4gICAqL1xuICBhbmltYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIHdpbGwgaGlkZSB3aGVuIHRoZSBhbmNob3IgaXMgc2Nyb2xsZWQgb2ZmIHRoZSBzY3JlZW4uXG4gICAqL1xuICBhdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcG9wb3ZlciAocG90ZW50aWFsbHkpIGlnbm9yZXMgYHRhcmdldE9yaWdpbmBcbiAgICogYW5kIGBhbmNob3JPcmlnaW5gIHRvIG1ha2UgaXRzZWxmIGZpdCBvbiBzY3JlZW4sXG4gICAqIHdoaWNoIGlzIHVzZWZ1bCBmb3IgbW9iaWxlIGRldmljZXMuXG4gICAqL1xuICBjYW5BdXRvUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIHBvcG92ZXIgaXMgcmVxdWVzdGVkIHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBUaGUgcmVhc29uIGZvciB0aGUgY2xvc2UgcmVxdWVzdC4gUG9zc2libGVzIHZhbHVlc1xuICAgKiBhcmUgJ2NsaWNrQXdheScgYW5kICdvZmZTY3JlZW4nLlxuICAgKi9cbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBwYXJlbnQgc2Nyb2xsYWJsZSBjb250YWluZXIuXG4gICAqIEl0IGNhbiBiZSBhbiBlbGVtZW50IG9yIGEgc3RyaW5nIGxpa2UgYHdpbmRvd2AuXG4gICAqL1xuICBzY3JvbGxhYmxlQ29udGFpbmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIHBvcG92ZXIgd2hpY2ggd2lsbCBhdHRhY2ggdG9cbiAgICogdGhlIGFuY2hvcidzIG9yaWdpbi5cbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXVxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF0uXG4gICAqL1xuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgd2lsbCByZW5kZXIgb24gdG9wIG9mIGFuIGludmlzaWJsZVxuICAgKiBsYXllciwgd2hpY2ggd2lsbCBwcmV2ZW50IGNsaWNrcyB0byB0aGUgdW5kZXJseWluZ1xuICAgKiBlbGVtZW50cywgYW5kIHRyaWdnZXIgYW4gYG9uUmVxdWVzdENsb3NlKCdjbGlja0F3YXknKWAgY2FsbC5cbiAgICovXG4gIHVzZUxheWVyRm9yQ2xpY2tBd2F5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgekRlcHRoIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9wb3ZlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfdG9BcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheScpO1xuXG52YXIgX3RvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9BcnJheTIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX0NsaWNrQXdheUxpc3RlbmVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvQ2xpY2tBd2F5TGlzdGVuZXInKTtcblxudmFyIF9DbGlja0F3YXlMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DbGlja0F3YXlMaXN0ZW5lcik7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfTGlzdCA9IHJlcXVpcmUoJy4uL0xpc3QvTGlzdCcpO1xuXG52YXIgX0xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdCk7XG5cbnZhciBfbWVudVV0aWxzID0gcmVxdWlyZSgnLi9tZW51VXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBkZXNrdG9wID0gcHJvcHMuZGVza3RvcCxcbiAgICAgIG1heEhlaWdodCA9IHByb3BzLm1heEhlaWdodCxcbiAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7XG4gIHZhciBtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIC8vIE5lc3RlZCBkaXYgYmVjYXVzZSB0aGUgTGlzdCBzY2FsZXMgeCBmYXN0ZXIgdGhhbiBpdCBzY2FsZXMgeVxuICAgICAgekluZGV4OiBtdWlUaGVtZS56SW5kZXgubWVudSxcbiAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgb3ZlcmZsb3dZOiBtYXhIZWlnaHQgPyAnYXV0bycgOiBudWxsXG4gICAgfSxcbiAgICBkaXZpZGVyOiB7XG4gICAgICBtYXJnaW5Ub3A6IDcsXG4gICAgICBtYXJnaW5Cb3R0b206IDhcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgIHBhZGRpbmdCb3R0b206IGRlc2t0b3AgPyAxNiA6IDgsXG4gICAgICBwYWRkaW5nVG9wOiBkZXNrdG9wID8gMTYgOiA4LFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfSxcbiAgICBzZWxlY3RlZE1lbnVJdGVtOiB7XG4gICAgICBjb2xvcjogbXVpVGhlbWUubWVudUl0ZW0uc2VsZWN0ZWRUZXh0Q29sb3JcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIE1lbnUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShNZW51LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW51KHByb3BzLCBjb250ZXh0KSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTWVudSk7XG5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChNZW51Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShNZW51KSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gX3RoaXMuZ2V0RmlsdGVyZWRDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5nZXRMYXN0U2VsZWN0ZWRJbmRleChwcm9wcywgZmlsdGVyZWRDaGlsZHJlbik7XG5cbiAgICB2YXIgbmV3Rm9jdXNJbmRleCA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMgPyAtMSA6IHNlbGVjdGVkSW5kZXggPj0gMCA/IHNlbGVjdGVkSW5kZXggOiAwO1xuICAgIGlmIChuZXdGb2N1c0luZGV4ICE9PSAtMSAmJiBwcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UpIHtcbiAgICAgIHByb3BzLm9uTWVudUl0ZW1Gb2N1c0NoYW5nZShudWxsLCBuZXdGb2N1c0luZGV4KTtcbiAgICB9XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c0luZGV4OiBuZXdGb2N1c0luZGV4LFxuICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IHByb3BzLmluaXRpYWxseUtleWJvYXJkRm9jdXNlZCxcbiAgICAgIGtleVdpZHRoOiBwcm9wcy5kZXNrdG9wID8gNjQgOiA1NlxuICAgIH07XG5cbiAgICBfdGhpcy5ob3RLZXlIb2xkZXIgPSBuZXcgX21lbnVVdGlscy5Ib3RLZXlIb2xkZXIoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShNZW51LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTY29sbFBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IHZvaWQgMDtcbiAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gdGhpcy5nZXRGaWx0ZXJlZENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm11bHRpcGxlICE9PSB0cnVlKSB7XG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSB0aGlzLmdldExhc3RTZWxlY3RlZEluZGV4KG5leHRQcm9wcywgZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEluZGV4ID0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Rm9jdXNJbmRleCA9IG5leHRQcm9wcy5kaXNhYmxlQXV0b0ZvY3VzID8gLTEgOiBzZWxlY3RlZEluZGV4ID49IDAgPyBzZWxlY3RlZEluZGV4IDogMDtcbiAgICAgIGlmIChuZXdGb2N1c0luZGV4ICE9PSB0aGlzLnN0YXRlLmZvY3VzSW5kZXggJiYgdGhpcy5wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UobnVsbCwgbmV3Rm9jdXNJbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNJbmRleDogbmV3Rm9jdXNJbmRleCxcbiAgICAgICAga2V5V2lkdGg6IG5leHRQcm9wcy5kZXNrdG9wID8gNjQgOiA1NlxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZUxpbmsnLFxuXG5cbiAgICAvLyBEbyBub3QgdXNlIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQsIGl0IHdpbGwgYmUgcmVtb3ZlZCBvbmNlIHZhbHVlTGluayBpcyBkZXByZWNhdGVkXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlTGluayhwcm9wcykge1xuICAgICAgcmV0dXJuIHByb3BzLnZhbHVlTGluayB8fCB7XG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgcmVxdWVzdENoYW5nZTogcHJvcHMub25DaGFuZ2VcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0S2V5Ym9hcmRGb2N1c2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5Ym9hcmRGb2N1c2VkKGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBrZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpbHRlcmVkQ2hpbGRyZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWx0ZXJlZENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IFtdO1xuICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBmaWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb25lTWVudUl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZU1lbnVJdGVtKGNoaWxkLCBjaGlsZEluZGV4LCBzdHlsZXMsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkSXNEaXNhYmxlZCA9IGNoaWxkLnByb3BzLmRpc2FibGVkO1xuXG4gICAgICB2YXIgc2VsZWN0ZWRDaGlsZFN0eWxlcyA9IHt9O1xuICAgICAgaWYgKCFjaGlsZElzRGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5pc0NoaWxkU2VsZWN0ZWQoY2hpbGQsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzZWxlY3RlZENoaWxkU3R5bGVzLCBzdHlsZXMuc2VsZWN0ZWRNZW51SXRlbSwgdGhpcy5wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbWVyZ2VkQ2hpbGRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGNoaWxkLnByb3BzLnN0eWxlLCB0aGlzLnByb3BzLm1lbnVJdGVtU3R5bGUsIHNlbGVjdGVkQ2hpbGRTdHlsZXMpO1xuXG4gICAgICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICAgICAgZGVza3RvcDogdGhpcy5wcm9wcy5kZXNrdG9wLFxuICAgICAgICBzdHlsZTogbWVyZ2VkQ2hpbGRTdHlsZXNcbiAgICAgIH07XG4gICAgICBpZiAoIWNoaWxkSXNEaXNhYmxlZCkge1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gY2hpbGRJbmRleCA9PT0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4O1xuICAgICAgICB2YXIgZm9jdXNTdGF0ZSA9ICdub25lJztcbiAgICAgICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgICAgIGZvY3VzU3RhdGUgPSB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkID8gJ2tleWJvYXJkLWZvY3VzZWQnIDogJ2ZvY3VzZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGV4dHJhUHJvcHMsIHtcbiAgICAgICAgICBmb2N1c1N0YXRlOiBmb2N1c1N0YXRlLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzMi5oYW5kbGVNZW51SXRlbVRvdWNoVGFwKGV2ZW50LCBjaGlsZCwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLm9uQ2xpY2spIGNoaWxkLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVmOiBpc0ZvY3VzZWQgPyAnZm9jdXNlZE1lbnVJdGVtJyA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgZXh0cmFQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVjcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4KGV2ZW50KSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLnN0YXRlLmZvY3VzSW5kZXg7XG5cbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IDA7XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXNJbmRleChldmVudCwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1lbnVJdGVtQ291bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZW51SXRlbUNvdW50KGZpbHRlcmVkQ2hpbGRyZW4pIHtcbiAgICAgIHZhciBtZW51SXRlbUNvdW50ID0gMDtcbiAgICAgIGZpbHRlcmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGNoaWxkSXNBRGl2aWRlciA9IGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5tdWlOYW1lID09PSAnRGl2aWRlcic7XG4gICAgICAgIHZhciBjaGlsZElzRGlzYWJsZWQgPSBjaGlsZC5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgaWYgKCFjaGlsZElzQURpdmlkZXIgJiYgIWNoaWxkSXNEaXNhYmxlZCkgbWVudUl0ZW1Db3VudCsrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVudUl0ZW1Db3VudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMYXN0U2VsZWN0ZWRJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExhc3RTZWxlY3RlZEluZGV4KHByb3BzLCBmaWx0ZXJlZENoaWxkcmVuKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgIHZhciBtZW51SXRlbUluZGV4ID0gMDtcblxuICAgICAgZmlsdGVyZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGRJc0FEaXZpZGVyID0gY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm11aU5hbWUgPT09ICdEaXZpZGVyJztcblxuICAgICAgICBpZiAoX3RoaXMzLmlzQ2hpbGRTZWxlY3RlZChjaGlsZCwgcHJvcHMpKSBzZWxlY3RlZEluZGV4ID0gbWVudUl0ZW1JbmRleDtcbiAgICAgICAgaWYgKCFjaGlsZElzQURpdmlkZXIpIG1lbnVJdGVtSW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRGb2N1c0luZGV4U3RhcnRzV2l0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzSW5kZXhTdGFydHNXaXRoKGV2ZW50LCBrZXlzKSB7XG4gICAgICB2YXIgZm91bmRJbmRleCA9IC0xO1xuICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmltYXJ5VGV4dCA9IGNoaWxkLnByb3BzLnByaW1hcnlUZXh0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJpbWFyeVRleHQgPT09ICdzdHJpbmcnICYmIHByaW1hcnlUZXh0LnN1YnN0cigwLCBrZXlzLmxlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0ga2V5cy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1c0luZGV4KGV2ZW50LCBmb3VuZEluZGV4LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTWVudUl0ZW1Ub3VjaFRhcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lbnVJdGVtVG91Y2hUYXAoZXZlbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIG11bHRpcGxlID0gdGhpcy5wcm9wcy5tdWx0aXBsZTtcbiAgICAgIHZhciB2YWx1ZUxpbmsgPSB0aGlzLmdldFZhbHVlTGluayh0aGlzLnByb3BzKTtcbiAgICAgIHZhciBtZW51VmFsdWUgPSB2YWx1ZUxpbmsudmFsdWU7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbS5wcm9wcy52YWx1ZTtcbiAgICAgIHZhciBmb2N1c0luZGV4ID0gX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IDAgOiBjaGlsZHJlbi5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICB0aGlzLnNldEZvY3VzSW5kZXgoZXZlbnQsIGZvY3VzSW5kZXgsIGZhbHNlKTtcblxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIG1lbnVWYWx1ZSA9IG1lbnVWYWx1ZSB8fCBbXTtcblxuICAgICAgICB2YXIgaXRlbUluZGV4ID0gbWVudVZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKTtcblxuICAgICAgICB2YXIgX21lbnVWYWx1ZSA9IG1lbnVWYWx1ZSxcbiAgICAgICAgICAgIF9tZW51VmFsdWUyID0gKDAsIF90b0FycmF5My5kZWZhdWx0KShfbWVudVZhbHVlKSxcbiAgICAgICAgICAgIG5ld01lbnVWYWx1ZSA9IF9tZW51VmFsdWUyLnNsaWNlKDApO1xuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbmV3TWVudVZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdNZW51VmFsdWUuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZUxpbmsucmVxdWVzdENoYW5nZShldmVudCwgbmV3TWVudVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIW11bHRpcGxlICYmIGl0ZW1WYWx1ZSAhPT0gbWVudVZhbHVlKSB7XG4gICAgICAgIHZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LCBpdGVtVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uSXRlbVRvdWNoVGFwKGV2ZW50LCBpdGVtLCBpbmRleCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5jcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4KGV2ZW50LCBmaWx0ZXJlZENoaWxkcmVuKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLnN0YXRlLmZvY3VzSW5kZXg7XG4gICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLmdldE1lbnVJdGVtQ291bnQoZmlsdGVyZWRDaGlsZHJlbikgLSAxO1xuXG4gICAgICBpbmRleCsrO1xuICAgICAgaWYgKGluZGV4ID4gbWF4SW5kZXgpIGluZGV4ID0gbWF4SW5kZXg7XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXNJbmRleChldmVudCwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQ2hpbGRTZWxlY3RlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2hpbGRTZWxlY3RlZChjaGlsZCwgcHJvcHMpIHtcbiAgICAgIHZhciBtZW51VmFsdWUgPSB0aGlzLmdldFZhbHVlTGluayhwcm9wcykudmFsdWU7XG4gICAgICB2YXIgY2hpbGRWYWx1ZSA9IGNoaWxkLnByb3BzLnZhbHVlO1xuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVWYWx1ZSAmJiBtZW51VmFsdWUubGVuZ3RoICYmIG1lbnVWYWx1ZS5pbmRleE9mKGNoaWxkVmFsdWUpICE9PSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBtZW51VmFsdWUgPT09IGNoaWxkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Rm9jdXNJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzSW5kZXgoZXZlbnQsIG5ld0luZGV4LCBpc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51SXRlbUZvY3VzQ2hhbmdlKSB7XG4gICAgICAgIC8vIERvIHRoaXMgZXZlbiBpZiBgbmV3SW5kZXggPT09IHRoaXMuc3RhdGUuZm9jdXNJbmRleGAgdG8gYWxsb3cgdXNlcnNcbiAgICAgICAgLy8gdG8gZGV0ZWN0IHVwLWFycm93IG9uIHRoZSBmaXJzdCBNZW51SXRlbSBvciBkb3duLWFycm93IG9uIHRoZSBsYXN0LlxuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUl0ZW1Gb2N1c0NoYW5nZShldmVudCwgbmV3SW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzSW5kZXg6IG5ld0luZGV4LFxuICAgICAgICBpc0tleWJvYXJkRm9jdXNlZDogaXNLZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFNjb2xsUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY29sbFBvc2l0aW9uKCkge1xuICAgICAgdmFyIGRlc2t0b3AgPSB0aGlzLnByb3BzLmRlc2t0b3A7XG4gICAgICB2YXIgZm9jdXNlZE1lbnVJdGVtID0gdGhpcy5yZWZzLmZvY3VzZWRNZW51SXRlbTtcbiAgICAgIHZhciBtZW51SXRlbUhlaWdodCA9IGRlc2t0b3AgPyAzMiA6IDQ4O1xuXG4gICAgICBpZiAoZm9jdXNlZE1lbnVJdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZE9mZlNldCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShmb2N1c2VkTWVudUl0ZW0pLm9mZnNldFRvcDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBmb2N1c2VkIGl0ZW0gYmUgdGhlIDJuZCBpdGVtIGluIHRoZSBsaXN0IHRoZSB1c2VyIHNlZXNcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNlbGVjdGVkT2ZmU2V0IC0gbWVudUl0ZW1IZWlnaHQ7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPCBtZW51SXRlbUhlaWdodCkgc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLnNjcm9sbENvbnRhaW5lcikuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbmNlbFNjcm9sbEV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsU2Nyb2xsRXZlbnQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRXaWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFdpZHRoKCkge1xuICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIGxpc3RFbCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGlzdCk7XG4gICAgICB2YXIgZWxXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgdmFyIGtleVdpZHRoID0gdGhpcy5zdGF0ZS5rZXlXaWR0aDtcbiAgICAgIHZhciBtaW5XaWR0aCA9IGtleVdpZHRoICogMS41O1xuICAgICAgdmFyIGtleUluY3JlbWVudHMgPSBlbFdpZHRoIC8ga2V5V2lkdGg7XG4gICAgICB2YXIgbmV3V2lkdGggPSB2b2lkIDA7XG5cbiAgICAgIGtleUluY3JlbWVudHMgPSBrZXlJbmNyZW1lbnRzIDw9IDEuNSA/IDEuNSA6IE1hdGguY2VpbChrZXlJbmNyZW1lbnRzKTtcbiAgICAgIG5ld1dpZHRoID0ga2V5SW5jcmVtZW50cyAqIGtleVdpZHRoO1xuXG4gICAgICBpZiAobmV3V2lkdGggPCBtaW5XaWR0aCkgbmV3V2lkdGggPSBtaW5XaWR0aDtcblxuICAgICAgZWwuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XG4gICAgICBsaXN0RWwuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9XaWR0aCA9IF9wcm9wcy5hdXRvV2lkdGgsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZGVza3RvcCA9IF9wcm9wcy5kZXNrdG9wLFxuICAgICAgICAgIGRpc2FibGVBdXRvRm9jdXMgPSBfcHJvcHMuZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICAgICAgICBpbml0aWFsbHlLZXlib2FyZEZvY3VzZWQgPSBfcHJvcHMuaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgICAgIGxpc3RTdHlsZSA9IF9wcm9wcy5saXN0U3R5bGUsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3Byb3BzLm1heEhlaWdodCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBvbkl0ZW1Ub3VjaFRhcCA9IF9wcm9wcy5vbkl0ZW1Ub3VjaFRhcCxcbiAgICAgICAgICBvbkVzY0tleURvd24gPSBfcHJvcHMub25Fc2NLZXlEb3duLFxuICAgICAgICAgIG9uTWVudUl0ZW1Gb2N1c0NoYW5nZSA9IF9wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UsXG4gICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlID0gX3Byb3BzLnNlbGVjdGVkTWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICBtZW51SXRlbVN0eWxlID0gX3Byb3BzLm1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rID0gX3Byb3BzLnZhbHVlTGluayxcbiAgICAgICAgICB3aWR0aCA9IF9wcm9wcy53aWR0aCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhdXRvV2lkdGgnLCAnY2hpbGRyZW4nLCAnZGVza3RvcCcsICdkaXNhYmxlQXV0b0ZvY3VzJywgJ2luaXRpYWxseUtleWJvYXJkRm9jdXNlZCcsICdsaXN0U3R5bGUnLCAnbWF4SGVpZ2h0JywgJ211bHRpcGxlJywgJ29uSXRlbVRvdWNoVGFwJywgJ29uRXNjS2V5RG93bicsICdvbk1lbnVJdGVtRm9jdXNDaGFuZ2UnLCAnc2VsZWN0ZWRNZW51SXRlbVN0eWxlJywgJ21lbnVJdGVtU3R5bGUnLCAnc3R5bGUnLCAndmFsdWUnLCAndmFsdWVMaW5rJywgJ3dpZHRoJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpO1xuICAgICAgdmFyIG1lcmdlZExpc3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxpc3QsIGxpc3RTdHlsZSk7XG5cbiAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gdGhpcy5nZXRGaWx0ZXJlZENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgICAgdmFyIG1lbnVJdGVtSW5kZXggPSAwO1xuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChmaWx0ZXJlZENoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZElzRGlzYWJsZWQgPSBjaGlsZC5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgdmFyIGNoaWxkTmFtZSA9IGNoaWxkLnR5cGUgPyBjaGlsZC50eXBlLm11aU5hbWUgOiAnJztcbiAgICAgICAgdmFyIG5ld0NoaWxkID0gY2hpbGQ7XG5cbiAgICAgICAgc3dpdGNoIChjaGlsZE5hbWUpIHtcbiAgICAgICAgICBjYXNlICdNZW51SXRlbSc6XG4gICAgICAgICAgICBuZXdDaGlsZCA9IF90aGlzNC5jbG9uZU1lbnVJdGVtKGNoaWxkLCBtZW51SXRlbUluZGV4LCBzdHlsZXMsIGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnRGl2aWRlcic6XG4gICAgICAgICAgICBuZXdDaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmRpdmlkZXIsIGNoaWxkLnByb3BzLnN0eWxlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZE5hbWUgPT09ICdNZW51SXRlbScgJiYgIWNoaWxkSXNEaXNhYmxlZCkge1xuICAgICAgICAgIG1lbnVJdGVtSW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9DbGlja0F3YXlMaXN0ZW5lcjIuZGVmYXVsdCxcbiAgICAgICAgeyBvbkNsaWNrQXdheTogdGhpcy5oYW5kbGVDbGlja0F3YXkgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICBvbldoZWVsOiB0aGlzLmhhbmRsZU9uV2hlZWwsXG4gICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRSb290U3R5bGVzKSxcbiAgICAgICAgICAgIHJlZjogJ3Njcm9sbENvbnRhaW5lcicsXG4gICAgICAgICAgICByb2xlOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfTGlzdDIuZGVmYXVsdCxcbiAgICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgICAgIHJlZjogJ2xpc3QnLFxuICAgICAgICAgICAgICBzdHlsZTogbWVyZ2VkTGlzdFN0eWxlcyxcbiAgICAgICAgICAgICAgcm9sZTogJ21lbnUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVudTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvV2lkdGg6IHRydWUsXG4gIGRlc2t0b3A6IGZhbHNlLFxuICBkaXNhYmxlQXV0b0ZvY3VzOiBmYWxzZSxcbiAgaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgbWF4SGVpZ2h0OiBudWxsLFxuICBtdWx0aXBsZTogZmFsc2UsXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICBvbkVzY0tleURvd246IGZ1bmN0aW9uIG9uRXNjS2V5RG93bigpIHt9LFxuICBvbkl0ZW1Ub3VjaFRhcDogZnVuY3Rpb24gb25JdGVtVG91Y2hUYXAoKSB7fSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fVxufTtcbk1lbnUuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLmhhbmRsZUNsaWNrQXdheSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZvY3VzSW5kZXggPSBfdGhpczUuc3RhdGUuZm9jdXNJbmRleDtcblxuICAgIGlmIChmb2N1c0luZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gX3RoaXM1LmdldEZpbHRlcmVkQ2hpbGRyZW4oX3RoaXM1LnByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgZm9jdXNlZEl0ZW0gPSBmaWx0ZXJlZENoaWxkcmVuW2ZvY3VzSW5kZXhdO1xuICAgIGlmIChmb2N1c2VkSXRlbS5wcm9wcy5tZW51SXRlbXMgJiYgZm9jdXNlZEl0ZW0ucHJvcHMubWVudUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfdGhpczUuc2V0Rm9jdXNJbmRleChldmVudCwgLTEsIGZhbHNlKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IF90aGlzNS5nZXRGaWx0ZXJlZENoaWxkcmVuKF90aGlzNS5wcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIGtleSA9ICgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXM1LmluY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCwgZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgX3RoaXM1LnByb3BzLm9uRXNjS2V5RG93bihldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgX3RoaXM1LmRlY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM1LmluY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCwgZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cCc6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzNS5kZWNyZW1lbnRLZXlib2FyZEZvY3VzSW5kZXgoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChrZXkgJiYga2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHZhciBob3RLZXlzID0gX3RoaXM1LmhvdEtleUhvbGRlci5hcHBlbmQoa2V5KTtcbiAgICAgICAgICBpZiAoX3RoaXM1LnNldEZvY3VzSW5kZXhTdGFydHNXaXRoKGV2ZW50LCBob3RLZXlzKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3RoaXM1LnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVPbldoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbENvbnRhaW5lciA9IF90aGlzNS5yZWZzLnNjcm9sbENvbnRhaW5lcjtcbiAgICAvLyBPbmx5IHNjcm9sbCBsb2NrIGlmIHRoZSB0aGUgTWVudSBpcyBzY3JvbGxhYmxlLlxuICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0IDw9IHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQpIHJldHVybjtcblxuICAgIHZhciBzY3JvbGxUb3AgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBjbGllbnRIZWlnaHQgPSBzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgdmFyIHdoZWVsRGVsdGEgPSBldmVudC5kZWx0YVk7XG4gICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IHdoZWVsRGVsdGEgPiAwO1xuXG4gICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiB3aGVlbERlbHRhID4gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wKSB7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgcmV0dXJuIF90aGlzNS5jYW5jZWxTY3JvbGxFdmVudChldmVudCk7XG4gICAgfSBlbHNlIGlmICghaXNEZWx0YVBvc2l0aXZlICYmIC13aGVlbERlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIHJldHVybiBfdGhpczUuY2FuY2VsU2Nyb2xsRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcbn07XG5cbk1lbnUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHdpZHRoIG9mIHRoZSBtZW51IHdpbGwgYmUgc2V0IGF1dG9tYXRpY2FsbHlcbiAgICogYWNjb3JkaW5nIHRvIHRoZSB3aWR0aHMgb2YgaXRzIGNoaWxkcmVuLFxuICAgKiB1c2luZyBwcm9wZXIga2V5bGluZSBpbmNyZW1lbnRzICg2NHB4IGZvciBkZXNrdG9wLFxuICAgKiA1NnB4IG90aGVyd2lzZSkuXG4gICAqL1xuICBhdXRvV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBtZW51LiBUaGlzIGlzIHVzdWFsbHkgdXNlZCB0byBwYXNzIGBNZW51SXRlbWBcbiAgICogZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1lbnUgaXRlbSB3aWxsIHJlbmRlciB3aXRoIGNvbXBhY3QgZGVza3RvcCBzdHlsZXMuXG4gICAqL1xuICBkZXNrdG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSB3aWxsIG5vdCBiZSBhdXRvLWZvY3VzZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSB3aWxsIGJlIGtleWJvYXJkLWZvY3VzZWQgaW5pdGlhbGx5LlxuICAgKi9cbiAgaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJseWluZyBgTGlzdGAgZWxlbWVudC5cbiAgICovXG4gIGxpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIG1lbnUgaW4gcGl4ZWxzLiBJZiBzcGVjaWZpZWQsXG4gICAqIHRoZSBtZW51IHdpbGwgYmUgc2Nyb2xsYWJsZSBpZiBpdCBpcyB0YWxsZXIgdGhhbiB0aGUgcHJvdmlkZWRcbiAgICogaGVpZ2h0LlxuICAgKi9cbiAgbWF4SGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIG1lbnUgaXRlbXMuXG4gICAqL1xuICBtZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0XG4gICAqIG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSB3aXRoIGB2YWx1ZWAgbm90XG4gICAqIGVxdWFsIHRvIHRoZSBjdXJyZW50IGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7YW55fSAgdmFsdWUgSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGUgbWVudSdzIGB2YWx1ZWBcbiAgICogYXJyYXkgd2l0aCBlaXRoZXIgdGhlIG1lbnUgaXRlbSdzIGB2YWx1ZWAgYWRkZWQgKGlmXG4gICAqIGl0IHdhc24ndCBhbHJlYWR5IHNlbGVjdGVkKSBvciBvbWl0dGVkIChpZiBpdCB3YXMgYWxyZWFkeSBzZWxlY3RlZCkuXG4gICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBtZW51IGlzIGZvY3VzZWQgYW5kIHRoZSAqRXNjKiBrZXlcbiAgICogaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGBrZXlkb3duYCBldmVudCB0YXJnZXRpbmcgdGhlIG1lbnUuXG4gICAqL1xuICBvbkVzY0tleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtZW51SXRlbSBUaGUgbWVudSBpdGVtLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBvbkl0ZW1Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbktleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGZvY3VzIG9uIGEgYE1lbnVJdGVtYCBpcyBjaGFuZ2VkLlxuICAgKiBUaGVyZSB3aWxsIGJlIHNvbWUgXCJkdXBsaWNhdGVcIiBjaGFuZ2VzIHJlcG9ydGVkIGlmIHR3byBkaWZmZXJlbnRcbiAgICogZm9jdXNpbmcgZXZlbnQgaGFwcGVuLCBmb3IgZXhhbXBsZSBpZiBhIGBNZW51SXRlbWAgaXMgZm9jdXNlZCB2aWFcbiAgICogdGhlIGtleWJvYXJkIGFuZCB0aGVuIGl0IGlzIGNsaWNrZWQgb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGZvY3VzIGNoYW5nZS5cbiAgICogVGhlIGV2ZW50IGNhbiBiZSBudWxsIHNpbmNlIHRoZSBmb2N1cyBjYW4gYmUgY2hhbmdlZCBmb3Igbm9uLWV2ZW50XG4gICAqIHJlYXNvbnMgc3VjaCBhcyBwcm9wIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdGb2N1c0luZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV3bHkgZm9jdXNlZFxuICAgKiBgTWVudUl0ZW1gIG9yIGAtMWAgaWYgZm9jdXMgd2FzIGxvc3QuXG4gICAqL1xuICBvbk1lbnVJdGVtRm9jdXNDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHNlbGVjdGVkIG1lbnUgaXRlbXMuXG4gICAqL1xuICBzZWxlY3RlZE1lbnVJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgYW4gYXJyYXkgb2YgdGhlIGB2YWx1ZWBzIG9mIHRoZSBzZWxlY3RlZFxuICAgKiBtZW51IGl0ZW1zLiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0uXG4gICAqIElmIHByb3ZpZGVkLCB0aGUgbWVudSB3aWxsIGJlIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqIFRoaXMgY29tcG9uZW50IGFsc28gc3VwcG9ydHMgdmFsdWVMaW5rLlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICAvKipcbiAgICogVmFsdWVMaW5rIGZvciB0aGUgbWVudSdzIGB2YWx1ZWAuXG4gICAqL1xuICB2YWx1ZUxpbms6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBtZW51LiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbWVudSdzIHdpZHRoXG4gICAqIHdpbGwgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgd2lkdGhzIG9mIGl0cyBjaGlsZHJlbiwgdXNpbmdcbiAgICogcHJvcGVyIGtleWxpbmUgaW5jcmVtZW50cyAoNjRweCBmb3IgZGVza3RvcCwgNTZweCBvdGhlcndpc2UpLlxuICAgKi9cbiAgd2lkdGg6IF9wcm9wVHlwZXM0LmRlZmF1bHQuc3RyaW5nT3JOdW1iZXJcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudS9NZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfU3ViaGVhZGVyID0gcmVxdWlyZSgnLi4vU3ViaGVhZGVyJyk7XG5cbnZhciBfU3ViaGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1YmhlYWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTGlzdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdCgpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBMaXN0KTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoTGlzdC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTGlzdCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTGlzdCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIGhhc1N1YmhlYWRlciA9IGZhbHNlO1xuXG4gICAgICB2YXIgZmlyc3RDaGlsZCA9IF9yZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVswXTtcbiAgICAgIGlmICgoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShmaXJzdENoaWxkKSAmJiBmaXJzdENoaWxkLnR5cGUgPT09IF9TdWJoZWFkZXIyLmRlZmF1bHQpIHtcbiAgICAgICAgaGFzU3ViaGVhZGVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHBhZGRpbmc6IChoYXNTdWJoZWFkZXIgPyAwIDogOCkgKyAncHggMHB4IDhweCAwcHgnXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMaXN0O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTGlzdC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuTGlzdC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGVzZSBhcmUgdXN1YWxseSBgTGlzdEl0ZW1gcyB0aGF0IGFyZSBwYXNzZWQgdG9cbiAgICogYmUgcGFydCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBMaXN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0xpc3QvTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9NZW51SXRlbSA9IHJlcXVpcmUoJy4vTWVudUl0ZW0nKTtcblxudmFyIF9NZW51SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51SXRlbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9NZW51SXRlbTIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51SXRlbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRTdGF0aWMgPSByZXF1aXJlKCcuL3NldFN0YXRpYycpO1xuXG52YXIgX3NldFN0YXRpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRTdGF0aWMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBzZXREaXNwbGF5TmFtZShkaXNwbGF5TmFtZSkge1xuICByZXR1cm4gKDAsIF9zZXRTdGF0aWMyLmRlZmF1bHQpKCdkaXNwbGF5TmFtZScsIGRpc3BsYXlOYW1lKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNldERpc3BsYXlOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9zZXREaXNwbGF5TmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXREaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vZ2V0RGlzcGxheU5hbWUnKTtcblxudmFyIF9nZXREaXNwbGF5TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXREaXNwbGF5TmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3cmFwRGlzcGxheU5hbWUgPSBmdW5jdGlvbiB3cmFwRGlzcGxheU5hbWUoQmFzZUNvbXBvbmVudCwgaG9jTmFtZSkge1xuICByZXR1cm4gaG9jTmFtZSArICcoJyArICgwLCBfZ2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKEJhc2VDb21wb25lbnQpICsgJyknO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gd3JhcERpc3BsYXlOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS93cmFwRGlzcGxheU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfUmFpc2VkQnV0dG9uID0gcmVxdWlyZSgnLi9SYWlzZWRCdXR0b24nKTtcblxudmFyIF9SYWlzZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFpc2VkQnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JhaXNlZEJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgYnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgcmFpc2VkQnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUucmFpc2VkQnV0dG9uLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzO1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBwcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFBvc2l0aW9uID0gcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgIHByaW1hcnkgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuXG4gIHZhciBhbW91bnQgPSBwcmltYXJ5IHx8IHNlY29uZGFyeSA/IDAuNCA6IDAuMDg7XG5cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5jb2xvcjtcbiAgdmFyIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24udGV4dENvbG9yO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGRpc2FibGVkQmFja2dyb3VuZENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSBkaXNhYmxlZExhYmVsQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByaW1hcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChzZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGFiZWxDb2xvcikge1xuICAgICAgbGFiZWxDb2xvciA9IHByb3BzLmxhYmVsQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1dHRvbkhlaWdodCA9IHN0eWxlICYmIHN0eWxlLmhlaWdodCB8fCBidXR0b24uaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgbWluV2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IGJ1dHRvbi5taW5XaWR0aFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IGJ1dHRvbkhlaWdodCArICdweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgLy8gVGhhdCdzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGJ1dHRvbiBidXQgbm90IGEgbGlua1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGZvbnRTaXplOiByYWlzZWRCdXR0b24uZm9udFNpemUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogcmFpc2VkQnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgYnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiByYWlzZWRCdXR0b24uZm9udFdlaWdodCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgY29sb3I6IGxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgbWFyZ2luTGVmdDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyAxMiA6IDAsXG4gICAgICBtYXJnaW5SaWdodDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAxMiA6IDBcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZS5rZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIWRpc2FibGVkICYmICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShsYWJlbENvbG9yLCBhbW91bnQpLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHRvcDogMFxuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBjb2xvcjogbGFiZWxDb2xvcixcbiAgICAgIG9wYWNpdHk6ICEocHJpbWFyeSB8fCBzZWNvbmRhcnkpID8gMC4xIDogMC4xNlxuICAgIH1cbiAgfTtcbn1cblxudmFyIFJhaXNlZEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFpc2VkQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhaXNlZEJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBSYWlzZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBrZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICBpbml0aWFsWkRlcHRoOiAwLFxuICAgICAgekRlcHRoOiAwXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGgsXG4gICAgICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnN0YXRlLnRvdWNoZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hTdGFydCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoRW5kKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdmFyIHpEZXB0aCA9IGtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZWQgPyBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMSA6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGg7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGtleWJvYXJkRm9jdXNlZDoga2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciB6RGVwdGggPSB0aGlzLnByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgekRlcHRoID0gbmV4dFByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9O1xuXG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGJ1dHRvblN0eWxlID0gX3Byb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gX3Byb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbENvbG9yID0gX3Byb3BzLmxhYmVsQ29sb3IsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICAgIHByaW1hcnkgPSBfcHJvcHMucHJpbWFyeSxcbiAgICAgICAgICByaXBwbGVTdHlsZSA9IF9wcm9wcy5yaXBwbGVTdHlsZSxcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JhY2tncm91bmRDb2xvcicsICdidXR0b25TdHlsZScsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3InLCAnZGlzYWJsZWRMYWJlbENvbG9yJywgJ2Z1bGxXaWR0aCcsICdpY29uJywgJ2xhYmVsJywgJ2xhYmVsQ29sb3InLCAnbGFiZWxQb3NpdGlvbicsICdsYWJlbFN0eWxlJywgJ292ZXJsYXlTdHlsZScsICdwcmltYXJ5JywgJ3JpcHBsZVN0eWxlJywgJ3NlY29uZGFyeScsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBtZXJnZWRSaXBwbGVTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yaXBwbGUsIHJpcHBsZVN0eWxlKTtcblxuICAgICAgdmFyIGJ1dHRvbkV2ZW50SGFuZGxlcnMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZSkpLCBrZXk6ICdsYWJlbEVsZW1lbnQnIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuXG4gICAgICB2YXIgaWNvbkNsb25lZCA9IGljb24gJiYgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGljb24sIHtcbiAgICAgICAgY29sb3I6IGljb24ucHJvcHMuY29sb3IgfHwgc3R5bGVzLmxhYmVsLmNvbG9yLFxuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uLnByb3BzLnN0eWxlKSxcbiAgICAgICAga2V5OiAnaWNvbkNsb25lZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gW2xhYmVsRWxlbWVudCwgaWNvbkNsb25lZCwgY2hpbGRyZW5dIDogW2NoaWxkcmVuLCBpY29uQ2xvbmVkLCBsYWJlbEVsZW1lbnRdO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHRoaXMuc3RhdGUuekRlcHRoXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgYnV0dG9uRXZlbnRIYW5kbGVycywge1xuICAgICAgICAgICAgcmVmOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJ1dHRvbiwgYnV0dG9uU3R5bGUpLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eSxcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdvdmVybGF5JyxcbiAgICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5vdmVybGF5LCBvdmVybGF5U3R5bGUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYWlzZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWlzZWRCdXR0b24ubXVpTmFtZSA9ICdSYWlzZWRCdXR0b24nO1xuUmFpc2VkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBsYWJlbFBvc2l0aW9uOiAnYWZ0ZXInLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZVxufTtcblJhaXNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFpc2VkQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24sXG4gICAqIGJ1dCBub3QgdGhlIGRlZmF1bHQgZGlzYWJsZWQgYmFja2dyb3VuZCBjb2xvclxuICAgKiAodXNlIGBkaXNhYmxlZEJhY2tncm91bmRDb2xvcmAgZm9yIHRoaXMpLlxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIGJ1dHRvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXG4gICAqIElmIGEgbGFiZWwgaXMgcHJvdmlkZWQgdmlhIHRoZSBgbGFiZWxgIHByb3AsIHRoZSB0ZXh0IHdpdGhpbiB0aGUgbGFiZWxcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGNvbnRlbnQgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBSYWlzZWRCdXR0b24uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgICogdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBSZWFjdEVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIGZvciB3cmFwcGluZyB0aGVcbiAgICAqIFJhaXNlZEJ1dHRvbiBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgICogdGhhdCBpdCBwYXNzZXMgYWxsIG9mIGl0cyBnaXZlbiBwcm9wcyB0aHJvdWdoIHRvIHRoZSB1bmRlcmx5aW5nIERPTVxuICAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b25cbiAgICogd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRMYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKiBJZiBjb250ZW50IGlzIHByb3ZpZGVkIHZpYSB0aGUgYGNoaWxkcmVuYCBwcm9wLCB0aGF0IGNvbnRlbnQgd2lsbCBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsIHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBsYWJlbDogdmFsaWRhdGVMYWJlbCxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBsYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIGJ1dHRvbidzIGBjaGlsZHJlbmAuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIGJ1dHRvbiBvdmVybGF5LlxuICAgKi9cbiAgb3ZlcmxheVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHByaW1hcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKi9cbiAgcmlwcGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBzZWNvbmRhcnkgY29sb3IuXG4gICAqIElmIGJvdGggYHNlY29uZGFyeWAgYW5kIGBwcmltYXJ5YCBhcmUgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZVxuICAgKiB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWlzZWRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfYXV0b1ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9QcmVmaXgnKTtcblxudmFyIF9hdXRvUHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9QcmVmaXgpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX1NjYWxlSW4gPSByZXF1aXJlKCcuL1NjYWxlSW4nKTtcblxudmFyIF9TY2FsZUluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NjYWxlSW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHVsc2F0ZUR1cmF0aW9uID0gNzUwO1xuXG52YXIgRm9jdXNSaXBwbGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShGb2N1c1JpcHBsZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9jdXNSaXBwbGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRm9jdXNSaXBwbGUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRm9jdXNSaXBwbGUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEZvY3VzUmlwcGxlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucHVsc2F0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbm5lckNpcmNsZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcy5yZWZzLmlubmVyQ2lyY2xlKTtcbiAgICAgIGlmICghaW5uZXJDaXJjbGUpIHJldHVybjtcblxuICAgICAgdmFyIHN0YXJ0U2NhbGUgPSAnc2NhbGUoMSknO1xuICAgICAgdmFyIGVuZFNjYWxlID0gJ3NjYWxlKDAuODUpJztcbiAgICAgIHZhciBjdXJyZW50U2NhbGUgPSBpbm5lckNpcmNsZS5zdHlsZS50cmFuc2Zvcm0gfHwgc3RhcnRTY2FsZTtcbiAgICAgIHZhciBuZXh0U2NhbGUgPSBjdXJyZW50U2NhbGUgPT09IHN0YXJ0U2NhbGUgPyBlbmRTY2FsZSA6IHN0YXJ0U2NhbGU7XG5cbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChpbm5lckNpcmNsZS5zdHlsZSwgJ3RyYW5zZm9ybScsIG5leHRTY2FsZSk7XG4gICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChfdGhpcy5wdWxzYXRlLCBwdWxzYXRlRHVyYXRpb24pO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShGb2N1c1JpcHBsZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgICB0aGlzLnNldFJpcHBsZVNpemUoKTtcbiAgICAgICAgdGhpcy5wdWxzYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XG4gICAgICAgIHRoaXMuc2V0UmlwcGxlU2l6ZSgpO1xuICAgICAgICB0aGlzLnB1bHNhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSaXBwbGVFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmlwcGxlRWxlbWVudChwcm9wcykge1xuICAgICAgdmFyIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICAgICAgaW5uZXJTdHlsZSA9IHByb3BzLmlubmVyU3R5bGUsXG4gICAgICAgICAgb3BhY2l0eSA9IHByb3BzLm9wYWNpdHk7XG4gICAgICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgcHJlcGFyZVN0eWxlcyA9IF9jb250ZXh0JG11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICAgICAgcmlwcGxlID0gX2NvbnRleHQkbXVpVGhlbWUucmlwcGxlO1xuXG5cbiAgICAgIHZhciBpbm5lclN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eSA/IG9wYWNpdHkgOiAwLjE2LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yIHx8IHJpcHBsZS5jb2xvcixcbiAgICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQocHVsc2F0ZUR1cmF0aW9uICsgJ21zJywgJ3RyYW5zZm9ybScsIG51bGwsIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlSW5PdXRGdW5jdGlvbilcbiAgICAgIH0sIGlubmVyU3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgcmVmOiAnaW5uZXJDaXJjbGUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGlubmVyU3R5bGVzKSkgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UmlwcGxlU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJpcHBsZVNpemUoKSB7XG4gICAgICB2YXIgZWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmlubmVyQ2lyY2xlKTtcbiAgICAgIHZhciBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgd2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBzaXplID0gTWF0aC5tYXgoaGVpZ2h0LCB3aWR0aCk7XG5cbiAgICAgIHZhciBvbGRUb3AgPSAwO1xuICAgICAgLy8gRm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBlbmRzV2l0aCgpXG4gICAgICBpZiAoZWwuc3R5bGUudG9wLmluZGV4T2YoJ3B4JywgZWwuc3R5bGUudG9wLmxlbmd0aCAtIDIpICE9PSAtMSkge1xuICAgICAgICBvbGRUb3AgPSBwYXJzZUludChlbC5zdHlsZS50b3ApO1xuICAgICAgfVxuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgICBlbC5zdHlsZS50b3AgPSBoZWlnaHQgLyAyIC0gc2l6ZSAvIDIgKyBvbGRUb3AgKyAncHgnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNob3cgPSBfcHJvcHMuc2hvdyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHZhciByaXBwbGUgPSBzaG93ID8gdGhpcy5nZXRSaXBwbGVFbGVtZW50KHRoaXMucHJvcHMpIDogbnVsbDtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfU2NhbGVJbjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIG1heFNjYWxlOiAwLjg1LFxuICAgICAgICAgIHN0eWxlOiBtZXJnZWRSb290U3R5bGVzXG4gICAgICAgIH0sXG4gICAgICAgIHJpcHBsZVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZvY3VzUmlwcGxlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRm9jdXNSaXBwbGUuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkZvY3VzUmlwcGxlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBpbm5lclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgb3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBGb2N1c1JpcHBsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9Gb2N1c1JpcHBsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb25Hcm91cCk7XG5cbnZhciBfU2NhbGVJbkNoaWxkID0gcmVxdWlyZSgnLi9TY2FsZUluQ2hpbGQnKTtcblxudmFyIF9TY2FsZUluQ2hpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2NhbGVJbkNoaWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNjYWxlSW4gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShTY2FsZUluLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY2FsZUluKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFNjYWxlSW4pO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChTY2FsZUluLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUluKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTY2FsZUluLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkU3R5bGUgPSBfcHJvcHMuY2hpbGRTdHlsZSxcbiAgICAgICAgICBlbnRlckRlbGF5ID0gX3Byb3BzLmVudGVyRGVsYXksXG4gICAgICAgICAgbWF4U2NhbGUgPSBfcHJvcHMubWF4U2NhbGUsXG4gICAgICAgICAgbWluU2NhbGUgPSBfcHJvcHMubWluU2NhbGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY2hpbGRTdHlsZScsICdlbnRlckRlbGF5JywgJ21heFNjYWxlJywgJ21pblNjYWxlJywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfU2NhbGVJbkNoaWxkMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogY2hpbGQua2V5LFxuICAgICAgICAgICAgZW50ZXJEZWxheTogZW50ZXJEZWxheSxcbiAgICAgICAgICAgIG1heFNjYWxlOiBtYXhTY2FsZSxcbiAgICAgICAgICAgIG1pblNjYWxlOiBtaW5TY2FsZSxcbiAgICAgICAgICAgIHN0eWxlOiBjaGlsZFN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZFxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRSb290U3R5bGVzKSxcbiAgICAgICAgICBjb21wb25lbnQ6ICdkaXYnXG4gICAgICAgIH0pLFxuICAgICAgICBuZXdDaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNjYWxlSW47XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TY2FsZUluLmRlZmF1bHRQcm9wcyA9IHtcbiAgZW50ZXJEZWxheTogMFxufTtcblNjYWxlSW4uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblNjYWxlSW4ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgZW50ZXJEZWxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1heFNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbWluU2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gU2NhbGVJbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2hhaW4oKXtcclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gIHZhciBhcmdzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXHJcbiAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXHJcblxyXG4gIGFyZ3MgPSBhcmdzLmZpbHRlcihmdW5jdGlvbihmbil7IHJldHVybiBmbiAhPSBudWxsIH0pXHJcblxyXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFyZ3NbMF1cclxuXHJcbiAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKGN1cnJlbnQsIG5leHQpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcclxuICAgICAgY3VycmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICBuZXh0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH0pXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2hhaW4tZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuKSB7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBuZXh0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZba2V5XTtcbiAgfVxuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0ge307XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KHByZXZLZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gdm9pZCAwO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmcuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9hdXRvUHJlZml4ID0gcmVxdWlyZSgnLi4vdXRpbHMvYXV0b1ByZWZpeCcpO1xuXG52YXIgX2F1dG9QcmVmaXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXV0b1ByZWZpeCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTY2FsZUluQ2hpbGQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShTY2FsZUluQ2hpbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNjYWxlSW5DaGlsZCgpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTY2FsZUluQ2hpbGQpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChTY2FsZUluQ2hpbGQuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNjYWxlSW5DaGlsZCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU2NhbGVJbkNoaWxkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRlclRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVBbmltYXRpb24oY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihjYWxsYmFjaykge1xuICAgICAgdGhpcy5pbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRBcHBlYXIoKSB7XG4gICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZEVudGVyKCkge1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbExlYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG5cbiAgICAgIHN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoc3R5bGUsICd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIHRoaXMucHJvcHMubWluU2NhbGUgKyAnKScpO1xuXG4gICAgICB0aGlzLmxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCA0NTApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FuaW1hdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuXG4gICAgICBzdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyB0aGlzLnByb3BzLm1heFNjYWxlICsgJyknKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbml0aWFsaXplQW5pbWF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuXG4gICAgICBzdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3NjYWxlKDApJyk7XG5cbiAgICAgIHRoaXMuZW50ZXJUaW1lciA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIHRoaXMucHJvcHMuZW50ZXJEZWxheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZW50ZXJEZWxheSA9IF9wcm9wcy5lbnRlckRlbGF5LFxuICAgICAgICAgIG1heFNjYWxlID0gX3Byb3BzLm1heFNjYWxlLFxuICAgICAgICAgIG1pblNjYWxlID0gX3Byb3BzLm1pblNjYWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2VudGVyRGVsYXknLCAnbWF4U2NhbGUnLCAnbWluU2NhbGUnLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBtZXJnZWRSb290U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dChudWxsLCBbJ3RyYW5zZm9ybScsICdvcGFjaXR5J10pXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFJvb3RTdHlsZXMpIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNjYWxlSW5DaGlsZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNjYWxlSW5DaGlsZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVudGVyRGVsYXk6IDAsXG4gIG1heFNjYWxlOiAxLFxuICBtaW5TY2FsZTogMFxufTtcblNjYWxlSW5DaGlsZC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuU2NhbGVJbkNoaWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgZW50ZXJEZWxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1heFNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbWluU2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjYWxlSW5DaGlsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluQ2hpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfdG9BcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheScpO1xuXG52YXIgX3RvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9BcnJheTIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCcpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uR3JvdXApO1xuXG52YXIgX2RvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xuXG52YXIgX2RvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb20pO1xuXG52YXIgX0NpcmNsZVJpcHBsZSA9IHJlcXVpcmUoJy4vQ2lyY2xlUmlwcGxlJyk7XG5cbnZhciBfQ2lyY2xlUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NpcmNsZVJpcHBsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFJlbW92ZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXlcbnZhciBzaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0KF9yZWYpIHtcbiAgdmFyIF9yZWYyID0gKDAsIF90b0FycmF5My5kZWZhdWx0KShfcmVmKSxcbiAgICAgIG5ld0FycmF5ID0gX3JlZjIuc2xpY2UoMSk7XG5cbiAgcmV0dXJuIG5ld0FycmF5O1xufTtcblxudmFyIFRvdWNoUmlwcGxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVG91Y2hSaXBwbGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvdWNoUmlwcGxlKHByb3BzLCBjb250ZXh0KSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVG91Y2hSaXBwbGUpO1xuXG4gICAgLy8gVG91Y2ggc3RhcnQgcHJvZHVjZXMgYSBtb3VzZSBkb3duIGV2ZW50IGZvciBjb21wYXQgcmVhc29ucy4gVG8gYXZvaWRcbiAgICAvLyBzaG93aW5nIHJpcHBsZXMgdHdpY2Ugd2Ugc2tpcCBzaG93aW5nIGEgcmlwcGxlIGZvciB0aGUgZmlyc3QgbW91c2UgZG93blxuICAgIC8vIGFmdGVyIGEgdG91Y2ggc3RhcnQuIE5vdGUgd2UgZG9uJ3Qgc3RvcmUgaWdub3JlTmV4dE1vdXNlRG93biBpbiB0aGlzLnN0YXRlXG4gICAgLy8gdG8gYXZvaWQgcmUtcmVuZGVyaW5nIHdoZW4gd2UgY2hhbmdlIGl0LlxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFRvdWNoUmlwcGxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUb3VjaFJpcHBsZSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gb25seSBsaXN0ZW4gdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgX3RoaXMuc3RhcnQoZXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmVuZCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZW5kKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgc3dpcGluZyAobm90IGp1c3QgdGFwcGluZyksIHNhdmUgdGhlIHBvc2l0aW9uIHNvIHdlIGNhblxuICAgICAgLy8gYWJvcnQgcmlwcGxlcyBpZiB0aGUgdXNlciBhcHBlYXJzIHRvIGJlIHNjcm9sbGluZy5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5hYm9ydE9uU2Nyb2xsICYmIGV2ZW50LnRvdWNoZXMpIHtcbiAgICAgICAgX3RoaXMuc3RhcnRMaXN0ZW5pbmdGb3JTY3JvbGxBYm9ydChldmVudCk7XG4gICAgICAgIF90aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5zdGFydChldmVudCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZW5kKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gU3RvcCB0cnlpbmcgdG8gYWJvcnQgaWYgd2UncmUgYWxyZWFkeSAzMDBtcyBpbnRvIHRoZSBhbmltYXRpb25cbiAgICAgIHZhciB0aW1lU2luY2VTdGFydCA9IE1hdGguYWJzKERhdGUubm93KCkgLSBfdGhpcy5zdGFydFRpbWUpO1xuICAgICAgaWYgKHRpbWVTaW5jZVN0YXJ0ID4gMzAwKSB7XG4gICAgICAgIF90aGlzLnN0b3BMaXN0ZW5pbmdGb3JTY3JvbGxBYm9ydCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB1c2VyIGlzIHNjcm9sbGluZy4uLlxuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIF90aGlzLmZpcnN0VG91Y2hZKTtcbiAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyhldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBfdGhpcy5maXJzdFRvdWNoWCk7XG4gICAgICAvLyBDYWxsIGl0IGEgc2Nyb2xsIGFmdGVyIGFuIGFyYml0cmFyeSA2cHggKGZlZWxzIHJlYXNvbmFibGUgaW4gdGVzdGluZylcbiAgICAgIGlmIChkZWx0YVkgPiA2IHx8IGRlbHRhWCA+IDYpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSaXBwbGVzID0gX3RoaXMuc3RhdGUucmlwcGxlcztcbiAgICAgICAgdmFyIHJpcHBsZSA9IGN1cnJlbnRSaXBwbGVzWzBdO1xuICAgICAgICAvLyBUaGlzIGNsb25lIHdpbGwgcmVwbGFjZSB0aGUgcmlwcGxlIGluIFJlYWN0VHJhbnNpdGlvbkdyb3VwIHdpdGggYVxuICAgICAgICAvLyB2ZXJzaW9uIHRoYXQgd2lsbCBkaXNhcHBlYXIgaW1tZWRpYXRlbHkgd2hlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgICAgICB2YXIgYWJvcnRlZFJpcHBsZSA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQocmlwcGxlLCB7IGFib3J0ZWQ6IHRydWUgfSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgb2xkIHJpcHBsZSBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgdXBkYXRlZCBvbmVcbiAgICAgICAgY3VycmVudFJpcHBsZXMgPSBzaGlmdChjdXJyZW50UmlwcGxlcyk7XG4gICAgICAgIGN1cnJlbnRSaXBwbGVzID0gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkzLmRlZmF1bHQpKGN1cnJlbnRSaXBwbGVzKSwgW2Fib3J0ZWRSaXBwbGVdKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyByaXBwbGVzOiBjdXJyZW50UmlwcGxlcyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ2FsbCBlbmQgYWZ0ZXIgd2UndmUgc2V0IHRoZSByaXBwbGUgdG8gYWJvcnQgb3RoZXJ3aXNlIHRoZSBzZXRTdGF0ZVxuICAgICAgICAgIC8vIGluIGVuZCgpIG1lcmdlcyB3aXRoIHRoaXMgYW5kIHRoZSByaXBwbGUgYWJvcnQgZmFpbHNcbiAgICAgICAgICBfdGhpcy5lbmQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmlnbm9yZU5leHRNb3VzZURvd24gPSBmYWxzZTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgLy8gVGhpcyBwcm9wIGFsbG93cyB1cyB0byBvbmx5IHJlbmRlciB0aGUgUmVhY3RUcmFuc2l0aW9uR3JvdXBcbiAgICAgIC8vIG9uIHRoZSBmaXJzdCBjbGljayBvZiB0aGUgY29tcG9uZW50LCBtYWtpbmcgdGhlIGluaXRhbCByZW5kZXIgZmFzdGVyLlxuICAgICAgaGFzUmlwcGxlczogZmFsc2UsXG4gICAgICBuZXh0S2V5OiAwLFxuICAgICAgcmlwcGxlczogW11cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRvdWNoUmlwcGxlLCBbe1xuICAgIGtleTogJ3N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoZXZlbnQsIGlzUmlwcGxlVG91Y2hHZW5lcmF0ZWQpIHtcbiAgICAgIHZhciB0aGVtZSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5yaXBwbGU7XG5cbiAgICAgIGlmICh0aGlzLmlnbm9yZU5leHRNb3VzZURvd24gJiYgIWlzUmlwcGxlVG91Y2hHZW5lcmF0ZWQpIHtcbiAgICAgICAgdGhpcy5pZ25vcmVOZXh0TW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJpcHBsZXMgPSB0aGlzLnN0YXRlLnJpcHBsZXM7XG5cbiAgICAgIC8vIEFkZCBhIHJpcHBsZSB0byB0aGUgcmlwcGxlcyBhcnJheVxuICAgICAgcmlwcGxlcyA9IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KShyaXBwbGVzKSwgW19yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9DaXJjbGVSaXBwbGUyLmRlZmF1bHQsIHtcbiAgICAgICAga2V5OiB0aGlzLnN0YXRlLm5leHRLZXksXG4gICAgICAgIHN0eWxlOiAhdGhpcy5wcm9wcy5jZW50ZXJSaXBwbGUgPyB0aGlzLmdldFJpcHBsZVN0eWxlKGV2ZW50KSA6IHt9LFxuICAgICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvciB8fCB0aGVtZS5jb2xvcixcbiAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxuICAgICAgICB0b3VjaEdlbmVyYXRlZDogaXNSaXBwbGVUb3VjaEdlbmVyYXRlZFxuICAgICAgfSldKTtcblxuICAgICAgdGhpcy5pZ25vcmVOZXh0TW91c2VEb3duID0gaXNSaXBwbGVUb3VjaEdlbmVyYXRlZDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNSaXBwbGVzOiB0cnVlLFxuICAgICAgICBuZXh0S2V5OiB0aGlzLnN0YXRlLm5leHRLZXkgKyAxLFxuICAgICAgICByaXBwbGVzOiByaXBwbGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICB2YXIgY3VycmVudFJpcHBsZXMgPSB0aGlzLnN0YXRlLnJpcHBsZXM7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmlwcGxlczogc2hpZnQoY3VycmVudFJpcHBsZXMpXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFib3J0T25TY3JvbGwpIHtcbiAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBzZWVtcyB0byBiZSBzY3JvbGxpbmcgYW5kIGFib3J0IHRoZSBhbmltYXRpb24gaWYgc29cblxuICB9LCB7XG4gICAga2V5OiAnc3RhcnRMaXN0ZW5pbmdGb3JTY3JvbGxBYm9ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoZXZlbnQpIHtcbiAgICAgIHRoaXMuZmlyc3RUb3VjaFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB0aGlzLmZpcnN0VG91Y2hYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgLy8gTm90ZSB0aGF0IHdoZW4gc2NvbGxpbmcgQ2hyb21lIHRocm90dGxlcyB0aGlzIGV2ZW50IHRvIGV2ZXJ5IDIwMG1zXG4gICAgICAvLyBBbHNvIG5vdGUgd2UgZG9uJ3QgbGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzIGRpcmVjdGx5IGFzIHRoZXJlJ3Mgbm8gZ2VuZXJhbFxuICAgICAgLy8gd2F5IHRvIGNvdmVyIGNhc2VzIGxpa2Ugc2Nyb2xsaW5nIHdpdGhpbiBjb250YWluZXJzIG9uIHRoZSBwYWdlXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSaXBwbGVTdHlsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJpcHBsZVN0eWxlKGV2ZW50KSB7XG4gICAgICB2YXIgZWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgZWxIZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgZWxXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgdmFyIG9mZnNldCA9IF9kb20yLmRlZmF1bHQub2Zmc2V0KGVsKTtcbiAgICAgIHZhciBpc1RvdWNoRXZlbnQgPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoO1xuICAgICAgdmFyIHBhZ2VYID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQudG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LnBhZ2VYO1xuICAgICAgdmFyIHBhZ2VZID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQudG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LnBhZ2VZO1xuICAgICAgdmFyIHBvaW50ZXJYID0gcGFnZVggLSBvZmZzZXQubGVmdDtcbiAgICAgIHZhciBwb2ludGVyWSA9IHBhZ2VZIC0gb2Zmc2V0LnRvcDtcbiAgICAgIHZhciB0b3BMZWZ0RGlhZyA9IHRoaXMuY2FsY0RpYWcocG9pbnRlclgsIHBvaW50ZXJZKTtcbiAgICAgIHZhciB0b3BSaWdodERpYWcgPSB0aGlzLmNhbGNEaWFnKGVsV2lkdGggLSBwb2ludGVyWCwgcG9pbnRlclkpO1xuICAgICAgdmFyIGJvdFJpZ2h0RGlhZyA9IHRoaXMuY2FsY0RpYWcoZWxXaWR0aCAtIHBvaW50ZXJYLCBlbEhlaWdodCAtIHBvaW50ZXJZKTtcbiAgICAgIHZhciBib3RMZWZ0RGlhZyA9IHRoaXMuY2FsY0RpYWcocG9pbnRlclgsIGVsSGVpZ2h0IC0gcG9pbnRlclkpO1xuICAgICAgdmFyIHJpcHBsZVJhZGl1cyA9IE1hdGgubWF4KHRvcExlZnREaWFnLCB0b3BSaWdodERpYWcsIGJvdFJpZ2h0RGlhZywgYm90TGVmdERpYWcpO1xuICAgICAgdmFyIHJpcHBsZVNpemUgPSByaXBwbGVSYWRpdXMgKiAyO1xuICAgICAgdmFyIGxlZnQgPSBwb2ludGVyWCAtIHJpcHBsZVJhZGl1cztcbiAgICAgIHZhciB0b3AgPSBwb2ludGVyWSAtIHJpcHBsZVJhZGl1cztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aW9uSW52YXJpYW50OiB0cnVlLFxuICAgICAgICBoZWlnaHQ6IHJpcHBsZVNpemUsXG4gICAgICAgIHdpZHRoOiByaXBwbGVTaXplLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxjRGlhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNEaWFnKGEsIGIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBoYXNSaXBwbGVzID0gX3N0YXRlLmhhc1JpcHBsZXMsXG4gICAgICAgICAgcmlwcGxlcyA9IF9zdGF0ZS5yaXBwbGVzO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgcmlwcGxlR3JvdXAgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChoYXNSaXBwbGVzKSB7XG4gICAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICB6SW5kZXg6IDEgLy8gVGhpcyBpcyBhbHNvIG5lZWRlZCBzbyB0aGF0IHJpcHBsZXMgZG8gbm90IGJsZWVkIHBhc3QgYSBwYXJlbnQgYm9yZGVyIHJhZGl1cy5cbiAgICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICAgIHJpcHBsZUdyb3VwID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFN0eWxlcykgfSxcbiAgICAgICAgICByaXBwbGVzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgICB9LFxuICAgICAgICByaXBwbGVHcm91cCxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUb3VjaFJpcHBsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRvdWNoUmlwcGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWJvcnRPblNjcm9sbDogdHJ1ZVxufTtcblRvdWNoUmlwcGxlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Ub3VjaFJpcHBsZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGFib3J0T25TY3JvbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2VudGVyUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG91Y2hSaXBwbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvVG91Y2hSaXBwbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfYXV0b1ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9QcmVmaXgnKTtcblxudmFyIF9hdXRvUHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9QcmVmaXgpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ2lyY2xlUmlwcGxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQ2lyY2xlUmlwcGxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDaXJjbGVSaXBwbGUoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQ2lyY2xlUmlwcGxlKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoQ2lyY2xlUmlwcGxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShDaXJjbGVSaXBwbGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKENpcmNsZVJpcHBsZSwgW3tcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRlclRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVBbmltYXRpb24oY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihjYWxsYmFjaykge1xuICAgICAgdGhpcy5pbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRBcHBlYXIoKSB7XG4gICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZEVudGVyKCkge1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbExlYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICBzdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIC8vIElmIHRoZSBhbmltYXRpb24gaXMgYWJvcnRlZCwgcmVtb3ZlIGZyb20gdGhlIERPTSBpbW1lZGlhdGVseVxuICAgICAgdmFyIHJlbW92ZUFmdGVyID0gdGhpcy5wcm9wcy5hYm9ydGVkID8gMCA6IDIwMDA7XG4gICAgICB0aGlzLmVudGVyVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCByZW1vdmVBZnRlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYW5pbWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICB2YXIgdHJhbnNpdGlvblZhbHVlID0gX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzJzJywgJ29wYWNpdHknKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMXMnLCAndHJhbnNmb3JtJyk7XG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoc3R5bGUsICd0cmFuc2l0aW9uJywgdHJhbnNpdGlvblZhbHVlKTtcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgxKScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luaXRpYWxpemVBbmltYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICBzdHlsZS5vcGFjaXR5ID0gdGhpcy5wcm9wcy5vcGFjaXR5O1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3NjYWxlKDApJyk7XG4gICAgICB0aGlzLmxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhYm9ydGVkID0gX3Byb3BzLmFib3J0ZWQsXG4gICAgICAgICAgY29sb3IgPSBfcHJvcHMuY29sb3IsXG4gICAgICAgICAgb3BhY2l0eSA9IF9wcm9wcy5vcGFjaXR5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHRvdWNoR2VuZXJhdGVkID0gX3Byb3BzLnRvdWNoR2VuZXJhdGVkLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2Fib3J0ZWQnLCAnY29sb3InLCAnb3BhY2l0eScsICdzdHlsZScsICd0b3VjaEdlbmVyYXRlZCddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG1lcmdlZFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkU3R5bGVzKSB9KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDaXJjbGVSaXBwbGU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5DaXJjbGVSaXBwbGUuZGVmYXVsdFByb3BzID0ge1xuICBvcGFjaXR5OiAwLjEsXG4gIGFib3J0ZWQ6IGZhbHNlXG59O1xuQ2lyY2xlUmlwcGxlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5DaXJjbGVSaXBwbGUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBhYm9ydGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdG91Y2hHZW5lcmF0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2lyY2xlUmlwcGxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0NpcmNsZVJpcHBsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgcm91bmRlZCA9IHByb3BzLnJvdW5kZWQsXG4gICAgICBjaXJjbGUgPSBwcm9wcy5jaXJjbGUsXG4gICAgICB0cmFuc2l0aW9uRW5hYmxlZCA9IHByb3BzLnRyYW5zaXRpb25FbmFibGVkLFxuICAgICAgekRlcHRoID0gcHJvcHMuekRlcHRoO1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgcGFwZXIgPSBfY29udGV4dCRtdWlUaGVtZS5wYXBlcixcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9jb250ZXh0JG11aVRoZW1lLmJvcmRlclJhZGl1cztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgY29sb3I6IHBhcGVyLmNvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwYXBlci5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uRW5hYmxlZCAmJiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBmb250RmFtaWx5OiBiYXNlVGhlbWUuZm9udEZhbWlseSxcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLDAsMCwwKScsIC8vIFJlbW92ZSBtb2JpbGUgY29sb3IgZmxhc2hpbmcgKGRlcHJlY2F0ZWQpXG4gICAgICBib3hTaGFkb3c6IHBhcGVyLnpEZXB0aFNoYWRvd3NbekRlcHRoIC0gMV0sIC8vIE5vIHNoYWRvdyBmb3IgMCBkZXB0aCBwYXBlcnNcbiAgICAgIGJvcmRlclJhZGl1czogY2lyY2xlID8gJzUwJScgOiByb3VuZGVkID8gYm9yZGVyUmFkaXVzIDogJzBweCdcbiAgICB9XG4gIH07XG59XG5cbnZhciBQYXBlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBhcGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYXBlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQYXBlcik7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFBhcGVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQYXBlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUGFwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2lyY2xlID0gX3Byb3BzLmNpcmNsZSxcbiAgICAgICAgICByb3VuZGVkID0gX3Byb3BzLnJvdW5kZWQsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdHJhbnNpdGlvbkVuYWJsZWQgPSBfcHJvcHMudHJhbnNpdGlvbkVuYWJsZWQsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdjaXJjbGUnLCAncm91bmRlZCcsICdzdHlsZScsICd0cmFuc2l0aW9uRW5hYmxlZCcsICd6RGVwdGgnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQYXBlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBhcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2lyY2xlOiBmYWxzZSxcbiAgcm91bmRlZDogdHJ1ZSxcbiAgdHJhbnNpdGlvbkVuYWJsZWQ6IHRydWUsXG4gIHpEZXB0aDogMVxufTtcblBhcGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5QYXBlci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBDaGlsZHJlbiBwYXNzZWQgaW50byB0aGUgcGFwZXIgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBnZW5lcmF0ZSBhIGNpcmN1bGFyIHBhcGVyIGNvbnRhaW5lci5cbiAgICovXG4gIGNpcmNsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIHBhcGVyIGNvbnRhaW5lciB3aWxsIGhhdmUgYSBib3JkZXIgcmFkaXVzLlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSB0byBnZW5lcmF0ZSBhIGNvbnRhaW5lciB3aXRoIHNoYXJwIGNvcm5lcnMuXG4gICAqL1xuICByb3VuZGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgQ1NTIHRyYW5zaXRpb25zIGZvciB0aGUgcGFwZXIgZWxlbWVudC5cbiAgICovXG4gIHRyYW5zaXRpb25FbmFibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGlzIG51bWJlciByZXByZXNlbnRzIHRoZSB6RGVwdGggb2YgdGhlIHBhcGVyIHNoYWRvdy5cbiAgICovXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhcGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BhcGVyL1BhcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwgPSBleHBvcnRzLlBvcG92ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfUG9wb3ZlcjIgPSByZXF1aXJlKCcuL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIyKTtcblxudmFyIF9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwyID0gcmVxdWlyZSgnLi9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwnKTtcblxudmFyIF9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuUG9wb3ZlciA9IF9Qb3BvdmVyMy5kZWZhdWx0O1xuZXhwb3J0cy5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwgPSBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX1BvcG92ZXIzLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUG9wb3Zlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5leHBvcnRzLndpdGhPcHRpb25zID0gd2l0aE9wdGlvbnM7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdmYmpzL2xpYi9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfc3VwcG9ydHMgPSByZXF1aXJlKCcuL3N1cHBvcnRzJyk7XG5cbnZhciBzdXBwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zdXBwb3J0cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBkZWZhdWx0RXZlbnRPcHRpb25zID0ge1xuICBjYXB0dXJlOiBmYWxzZSxcbiAgcGFzc2l2ZTogZmFsc2Vcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItc3ByZWFkICovXG5cbmZ1bmN0aW9uIG1lcmdlRGVmYXVsdEV2ZW50T3B0aW9ucyhvcHRpb25zKSB7XG4gIHJldHVybiAoMCwgX2Fzc2lnbjIuZGVmYXVsdCkoe30sIGRlZmF1bHRFdmVudE9wdGlvbnMsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudExpc3RlbmVyQXJncyhldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBhcmdzID0gW2V2ZW50TmFtZSwgY2FsbGJhY2tdO1xuICBhcmdzLnB1c2goc3VwcG9ydHMucGFzc2l2ZU9wdGlvbiA/IG9wdGlvbnMgOiBvcHRpb25zLmNhcHR1cmUpO1xuICByZXR1cm4gYXJncztcbn1cblxuZnVuY3Rpb24gb24odGFyZ2V0LCBldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmIChzdXBwb3J0cy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBnZXRFdmVudExpc3RlbmVyQXJncyhldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSk7XG4gIH0gZWxzZSBpZiAoc3VwcG9ydHMuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyBJRTgrIFN1cHBvcnRcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9mZih0YXJnZXQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKHN1cHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0YXJnZXQsIGdldEV2ZW50TGlzdGVuZXJBcmdzKGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdGlvbnMpKTtcbiAgfSBlbHNlIGlmIChzdXBwb3J0cy5kZXRhY2hFdmVudCkge1xuICAgIC8vIElFOCsgU3VwcG9ydFxuICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaExpc3RlbmVyKHByb3BzLCBpdGVyYXRlZSkge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRhcmdldCA9IHByb3BzLnRhcmdldCxcbiAgICAgIGV2ZW50UHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShwcm9wcywgWydjaGlsZHJlbicsICd0YXJnZXQnXSk7XG5cblxuICAoMCwgX2tleXMyLmRlZmF1bHQpKGV2ZW50UHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgMikgIT09ICdvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcCA9IGV2ZW50UHJvcHNbbmFtZV07XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgcHJvcCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShwcm9wKTtcbiAgICB2YXIgaXNPYmplY3QgPSB0eXBlID09PSAnb2JqZWN0JztcbiAgICB2YXIgaXNGdW5jdGlvbiA9IHR5cGUgPT09ICdmdW5jdGlvbic7XG5cbiAgICBpZiAoIWlzT2JqZWN0ICYmICFpc0Z1bmN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhcHR1cmUgPSBuYW1lLnN1YnN0cigtNykudG9Mb3dlckNhc2UoKSA9PT0gJ2NhcHR1cmUnO1xuICAgIHZhciBldmVudE5hbWUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpO1xuICAgIGV2ZW50TmFtZSA9IGNhcHR1cmUgPyBldmVudE5hbWUuc3Vic3RyaW5nKDAsIGV2ZW50TmFtZS5sZW5ndGggLSA3KSA6IGV2ZW50TmFtZTtcblxuICAgIGlmIChpc09iamVjdCkge1xuICAgICAgaXRlcmF0ZWUoZXZlbnROYW1lLCBwcm9wLmhhbmRsZXIsIHByb3Aub3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGVlKGV2ZW50TmFtZSwgcHJvcCwgbWVyZ2VEZWZhdWx0RXZlbnRPcHRpb25zKHsgY2FwdHVyZTogY2FwdHVyZSB9KSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2l0aE9wdGlvbnMoaGFuZGxlciwgb3B0aW9ucykge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKG9wdGlvbnMsICdyZWFjdC1ldmVudC1saXN0ZW5lcjogU2hvdWxkIGJlIHNwZWNpZmllZCBvcHRpb25zIGluIHdpdGhPcHRpb25zLicpIDogdm9pZCAwO1xuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICBvcHRpb25zOiBtZXJnZURlZmF1bHRFdmVudE9wdGlvbnMob3B0aW9ucylcbiAgfTtcbn1cblxudmFyIEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShFdmVudExpc3RlbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFdmVudExpc3RlbmVyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEV2ZW50TGlzdGVuZXIpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChFdmVudExpc3RlbmVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFdmVudExpc3RlbmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShFdmVudExpc3RlbmVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUoKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkTGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5hcHBseUxpc3RlbmVycyhvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlTGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5hcHBseUxpc3RlbmVycyhvZmYpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FwcGx5TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbHlMaXN0ZW5lcnMob25Pck9mZikge1xuICAgICAgdmFyIHRhcmdldCA9IHRoaXMucHJvcHMudGFyZ2V0O1xuXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHdpbmRvd1t0YXJnZXRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yRWFjaExpc3RlbmVyKHRoaXMucHJvcHMsIG9uT3JPZmYuYmluZChudWxsLCBlbGVtZW50KSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50TGlzdGVuZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5FdmVudExpc3RlbmVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFlvdSBjYW4gcHJvdmlkZSBhIHNpbmdsZSBjaGlsZCB0b28uXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogVGhlIERPTSB0YXJnZXQgdG8gbGlzdGVuIHRvLlxuICAgKi9cbiAgdGFyZ2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSkuaXNSZXF1aXJlZFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnRMaXN0ZW5lcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhc3NpdmVPcHRpb24gPSBleHBvcnRzLmRldGFjaEV2ZW50ID0gZXhwb3J0cy5hdHRhY2hFdmVudCA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuY2FuVXNlRE9NID0gdW5kZWZpbmVkO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvRXhlY3V0aW9uRW52aXJvbm1lbnQuanNcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gY2FuVXNlRE9NICYmICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3c7XG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGNhblVzZURPTSAmJiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93O1xuXG4vLyBJRTgrIFN1cHBvcnRcbnZhciBhdHRhY2hFdmVudCA9IGV4cG9ydHMuYXR0YWNoRXZlbnQgPSBjYW5Vc2VET00gJiYgJ2F0dGFjaEV2ZW50JyBpbiB3aW5kb3c7XG52YXIgZGV0YWNoRXZlbnQgPSBleHBvcnRzLmRldGFjaEV2ZW50ID0gY2FuVXNlRE9NICYmICdkZXRhY2hFdmVudCcgaW4gd2luZG93O1xuXG4vLyBQYXNzaXZlIG9wdGlvbnNcbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9kb20vcGFzc2l2ZWV2ZW50bGlzdGVuZXJzLmpzXG52YXIgcGFzc2l2ZU9wdGlvbiA9IGV4cG9ydHMucGFzc2l2ZU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhY2hlID0gbnVsbDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWNoZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cblxuICAgIHZhciBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxuICAgIGNhY2hlID0gc3VwcG9ydHNQYXNzaXZlT3B0aW9uO1xuXG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbjtcbiAgfSgpO1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZW50LWxpc3RlbmVyL2xpYi9zdXBwb3J0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmaW5lUHJvcGVydHk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICB3ZWFrXG5cbmZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG8sIHAsIGF0dHIpIHtcbiAgcmV0dXJuICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKG8sIHAsIGF0dHIpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZW50LWxpc3RlbmVyL2xpYi9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9kb20gPSByZXF1aXJlKCcuLi91dGlscy9kb20nKTtcblxudmFyIF9kb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gaGVhdmlseSBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vS2hhbi9yZWFjdC1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL2pzL2xheWVyZWQtY29tcG9uZW50LW1peGluLmpzeFxudmFyIFJlbmRlclRvTGF5ZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShSZW5kZXJUb0xheWVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZW5kZXJUb0xheWVyKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJlbmRlclRvTGF5ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gUmVuZGVyVG9MYXllci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUmVuZGVyVG9MYXllcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm9uQ2xpY2tBd2F5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMuY29tcG9uZW50Q2xpY2tBd2F5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsID0gX3RoaXMubGF5ZXI7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBlbCAmJiBldmVudC50YXJnZXQgPT09IHdpbmRvdyB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhX2RvbTIuZGVmYXVsdC5pc0Rlc2NlbmRhbnQoZWwsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuY29tcG9uZW50Q2xpY2tBd2F5KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmVuZGVyVG9MYXllciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5yZW5kZXJMYXllcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMucmVuZGVyTGF5ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnJlbmRlckxheWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TGF5ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMYXllcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VucmVuZGVyTGF5ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnJlbmRlckxheWVyKCkge1xuICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMudXNlTGF5ZXJGb3JDbGlja0F3YXkpIHtcbiAgICAgICAgdGhpcy5sYXllci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGlja0F3YXkpO1xuICAgICAgICB0aGlzLmxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQXdheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGlja0F3YXkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9yZWFjdERvbS51bm1vdW50Q29tcG9uZW50QXROb2RlKSh0aGlzLmxheWVyKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5sYXllcik7XG4gICAgICB0aGlzLmxheWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCeSBjYWxsaW5nIHRoaXMgbWV0aG9kIGluIGNvbXBvbmVudERpZE1vdW50KCkgYW5kXG4gICAgICogY29tcG9uZW50RGlkVXBkYXRlKCksIHlvdSdyZSBlZmZlY3RpdmVseSBjcmVhdGluZyBhIFwid29ybWhvbGVcIiB0aGF0XG4gICAgICogZnVubmVscyBSZWFjdCdzIGhpZXJhcmNoaWNhbCB1cGRhdGVzIHRocm91Z2ggdG8gYSBET00gbm9kZSBvbiBhblxuICAgICAqIGVudGlyZWx5IGRpZmZlcmVudCBwYXJ0IG9mIHRoZSBwYWdlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJMYXllcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxheWVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfcHJvcHMub3BlbixcbiAgICAgICAgICByZW5kZXIgPSBfcHJvcHMucmVuZGVyO1xuXG5cbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5ZXIpO1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlTGF5ZXJGb3JDbGlja0F3YXkpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25DbGlja0F3YXkpO1xuICAgICAgICAgICAgdGhpcy5sYXllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0F3YXkpO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS5yaWdodCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnN0eWxlLnpJbmRleCA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS56SW5kZXgubGF5ZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIF90aGlzMi5vbkNsaWNrQXdheSk7XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzMi5vbkNsaWNrQXdheSk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGF5ZXJFbGVtZW50ID0gcmVuZGVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXJFbGVtZW50ID0gKDAsIF9yZWFjdERvbS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcikodGhpcywgbGF5ZXJFbGVtZW50LCB0aGlzLmxheWVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudW5yZW5kZXJMYXllcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmVuZGVyVG9MYXllcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJlbmRlclRvTGF5ZXIuZGVmYXVsdFByb3BzID0ge1xuICB1c2VMYXllckZvckNsaWNrQXdheTogdHJ1ZVxufTtcblJlbmRlclRvTGF5ZXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblJlbmRlclRvTGF5ZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjb21wb25lbnRDbGlja0F3YXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHJlbmRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHVzZUxheWVyRm9yQ2xpY2tBd2F5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlclRvTGF5ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvUmVuZGVyVG9MYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC50aHJvdHRsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgdGFyZ2V0T3JpZ2luID0gcHJvcHMudGFyZ2V0T3JpZ2luO1xuICB2YXIgb3BlbiA9IHN0YXRlLm9wZW47XG4gIHZhciBtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG5cbiAgdmFyIGhvcml6b250YWwgPSB0YXJnZXRPcmlnaW4uaG9yaXpvbnRhbC5yZXBsYWNlKCdtaWRkbGUnLCAndmVydGljYWwnKTtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiBtdWlUaGVtZS56SW5kZXgucG9wb3ZlcixcbiAgICAgIG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcbiAgICAgIHRyYW5zZm9ybTogb3BlbiA/ICdzY2FsZSgxLCAxKScgOiAnc2NhbGUoMCwgMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBob3Jpem9udGFsICsgJyAnICsgdGFyZ2V0T3JpZ2luLnZlcnRpY2FsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzI1MG1zJywgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKSxcbiAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgfSxcbiAgICBob3Jpem9udGFsOiB7XG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3NjYWxlWCgxKScgOiAnc2NhbGVYKDApJyxcbiAgICAgIG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcyNTBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSlcbiAgICB9LFxuICAgIHZlcnRpY2FsOiB7XG4gICAgICBvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG4gICAgICB0cmFuc2Zvcm06IG9wZW4gPyAnc2NhbGVZKDEpJyA6ICdzY2FsZVkoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBob3Jpem9udGFsICsgJyAnICsgdGFyZ2V0T3JpZ2luLnZlcnRpY2FsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzUwMG1zJywgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKVxuICAgIH1cbiAgfTtcbn1cblxudmFyIFBvcG92ZXJBbmltYXRpb25EZWZhdWx0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXJBbmltYXRpb25EZWZhdWx0KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFBvcG92ZXJBbmltYXRpb25EZWZhdWx0KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFBvcG92ZXJBbmltYXRpb25EZWZhdWx0Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB6RGVwdGggPSBfcHJvcHMuekRlcHRoO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5ob3Jpem9udGFsKSB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy52ZXJ0aWNhbCkgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBvcG92ZXJBbmltYXRpb25EZWZhdWx0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9LFxuICB6RGVwdGg6IDFcbn07XG5Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRhcmdldE9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4uaXNSZXF1aXJlZCxcbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUG9wb3Zlci9Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdC5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgdGFyZ2V0T3JpZ2luID0gcHJvcHMudGFyZ2V0T3JpZ2luO1xuICB2YXIgb3BlbiA9IHN0YXRlLm9wZW47XG4gIHZhciBtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG5cbiAgdmFyIGhvcml6b250YWwgPSB0YXJnZXRPcmlnaW4uaG9yaXpvbnRhbC5yZXBsYWNlKCdtaWRkbGUnLCAnY2VudGVyJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogbXVpVGhlbWUuekluZGV4LnBvcG92ZXIsXG4gICAgICBvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG4gICAgICB0cmFuc2Zvcm06IG9wZW4gPyAnc2NhbGVZKDEpJyA6ICdzY2FsZVkoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBob3Jpem9udGFsICsgJyAnICsgdGFyZ2V0T3JpZ2luLnZlcnRpY2FsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKSxcbiAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9O1xufVxuXG52YXIgUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB6RGVwdGggPSBfcHJvcHMuekRlcHRoO1xuXG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgekRlcHRoOiAxXG59O1xuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRhcmdldE9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4uaXNSZXF1aXJlZCxcbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmpzXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuTWVudSA9IHVuZGVmaW5lZDtcblxudmFyIF9NZW51MiA9IHJlcXVpcmUoJy4vTWVudScpO1xuXG52YXIgX01lbnUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudTIpO1xuXG52YXIgX01lbnVJdGVtMiA9IHJlcXVpcmUoJy4uL01lbnVJdGVtJyk7XG5cbnZhciBfTWVudUl0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudUl0ZW0yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5NZW51ID0gX01lbnUzLmRlZmF1bHQ7XG5leHBvcnRzLk1lbnVJdGVtID0gX01lbnVJdGVtMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX01lbnUzLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9ldmVudHMgPSByZXF1aXJlKCcuLi91dGlscy9ldmVudHMnKTtcblxudmFyIF9ldmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZWwgPT09IHRhcmdldCB8fCBpc0Rlc2NlbmRhbnQoZWwsIHRhcmdldC5wYXJlbnROb2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgY2xpY2tBd2F5RXZlbnRzID0gWydtb3VzZXVwJywgJ3RvdWNoZW5kJ107XG52YXIgYmluZCA9IGZ1bmN0aW9uIGJpbmQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNsaWNrQXdheUV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBfZXZlbnRzMi5kZWZhdWx0Lm9uKGRvY3VtZW50LCBldmVudCwgY2FsbGJhY2spO1xuICB9KTtcbn07XG52YXIgdW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kKGNhbGxiYWNrKSB7XG4gIHJldHVybiBjbGlja0F3YXlFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gX2V2ZW50czIuZGVmYXVsdC5vZmYoZG9jdW1lbnQsIGV2ZW50LCBjYWxsYmFjayk7XG4gIH0pO1xufTtcblxudmFyIENsaWNrQXdheUxpc3RlbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQ2xpY2tBd2F5TGlzdGVuZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENsaWNrQXdheUxpc3RlbmVyKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIENsaWNrQXdheUxpc3RlbmVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IENsaWNrQXdheUxpc3RlbmVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShDbGlja0F3YXlMaXN0ZW5lcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrQXdheSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJRTExIHN1cHBvcnQsIHdoaWNoIHRyaWdnZXIgdGhlIGhhbmRsZUNsaWNrQXdheSBldmVuIGFmdGVyIHRoZSB1bmJpbmRcbiAgICAgIGlmIChfdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQpIHtcbiAgICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWlzRGVzY2VuZGFudChlbCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2tBd2F5KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShDbGlja0F3YXlMaXN0ZW5lciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGlja0F3YXkpIHtcbiAgICAgICAgYmluZCh0aGlzLmhhbmRsZUNsaWNrQXdheSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHByZXZQcm9wcy5vbkNsaWNrQXdheSAhPT0gdGhpcy5wcm9wcy5vbkNsaWNrQXdheSkge1xuICAgICAgICB1bmJpbmQodGhpcy5oYW5kbGVDbGlja0F3YXkpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrQXdheSkge1xuICAgICAgICAgIGJpbmQodGhpcy5oYW5kbGVDbGlja0F3YXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gZmFsc2U7XG4gICAgICB1bmJpbmQodGhpcy5oYW5kbGVDbGlja0F3YXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2xpY2tBd2F5TGlzdGVuZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5DbGlja0F3YXlMaXN0ZW5lci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIG9uQ2xpY2tBd2F5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IENsaWNrQXdheUxpc3RlbmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0NsaWNrQXdheUxpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1N1YmhlYWRlciA9IHJlcXVpcmUoJy4vU3ViaGVhZGVyJyk7XG5cbnZhciBfU3ViaGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1YmhlYWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TdWJoZWFkZXIyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU3ViaGVhZGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFN1YmhlYWRlciA9IGZ1bmN0aW9uIFN1YmhlYWRlcihwcm9wcywgY29udGV4dCkge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGluc2V0ID0gcHJvcHMuaW5zZXQsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShwcm9wcywgWydjaGlsZHJlbicsICdpbnNldCcsICdzdHlsZSddKTtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIHByZXBhcmVTdHlsZXMgPSBfY29udGV4dCRtdWlUaGVtZS5wcmVwYXJlU3R5bGVzLFxuICAgICAgc3ViaGVhZGVyID0gX2NvbnRleHQkbXVpVGhlbWUuc3ViaGVhZGVyO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiBzdWJoZWFkZXIuY29sb3IsXG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBmb250V2VpZ2h0OiBzdWJoZWFkZXIuZm9udFdlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4JyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBpbnNldCA/IDcyIDogMTYsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblN1YmhlYWRlci5tdWlOYW1lID0gJ1N1YmhlYWRlcic7XG5cblN1YmhlYWRlci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBOb2RlIHRoYXQgd2lsbCBiZSBwbGFjZWQgaW5zaWRlIHRoZSBgU3ViaGVhZGVyYC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYFN1YmhlYWRlcmAgd2lsbCBiZSBpbmRlbnRlZC5cbiAgICovXG4gIGluc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cblN1YmhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluc2V0OiBmYWxzZVxufTtcblxuU3ViaGVhZGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN1YmhlYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9TdWJoZWFkZXIvU3ViaGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ib3RLZXlIb2xkZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSG90S2V5SG9sZGVyID0gZXhwb3J0cy5Ib3RLZXlIb2xkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhvdEtleUhvbGRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgSG90S2V5SG9sZGVyKTtcblxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICAgIF90aGlzLmxhc3RLZXlzID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoSG90S2V5SG9sZGVyLCBbe1xuICAgIGtleTogJ2FwcGVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChrZXkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySWQpO1xuICAgICAgdGhpcy50aW1lcklkID0gc2V0VGltZW91dCh0aGlzLmNsZWFyLCA1MDApO1xuICAgICAgcmV0dXJuIHRoaXMubGFzdEtleXMgPSAodGhpcy5sYXN0S2V5cyB8fCAnJykgKyBrZXk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIb3RLZXlIb2xkZXI7XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudS9tZW51VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfUG9wb3ZlciA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlcicpO1xuXG52YXIgX1BvcG92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3Zlcik7XG5cbnZhciBfY2hlY2sgPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvbmF2aWdhdGlvbi9jaGVjaycpO1xuXG52YXIgX2NoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrKTtcblxudmFyIF9MaXN0SXRlbSA9IHJlcXVpcmUoJy4uL0xpc3QvTGlzdEl0ZW0nKTtcblxudmFyIF9MaXN0SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0SXRlbSk7XG5cbnZhciBfTWVudSA9IHJlcXVpcmUoJy4uL01lbnUvTWVudScpO1xuXG52YXIgX01lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudSk7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5lc3RlZE1lbnVTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgZGlzYWJsZWRDb2xvciA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvcjtcbiAgdmFyIHRleHRDb2xvciA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yO1xuICB2YXIgaW5kZW50ID0gcHJvcHMuZGVza3RvcCA/IDY0IDogNzI7XG4gIHZhciBzaWRlUGFkZGluZyA9IHByb3BzLmRlc2t0b3AgPyAyNCA6IDE2O1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRDb2xvciA6IHRleHRDb2xvcixcbiAgICAgIGN1cnNvcjogcHJvcHMuZGlzYWJsZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicsXG4gICAgICBtaW5IZWlnaHQ6IHByb3BzLmRlc2t0b3AgPyAnMzJweCcgOiAnNDhweCcsXG4gICAgICBsaW5lSGVpZ2h0OiBwcm9wcy5kZXNrdG9wID8gJzMycHgnIDogJzQ4cHgnLFxuICAgICAgZm9udFNpemU6IHByb3BzLmRlc2t0b3AgPyAxNSA6IDE2LFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LFxuXG4gICAgaW5uZXJEaXZTdHlsZToge1xuICAgICAgcGFkZGluZ0xlZnQ6IHByb3BzLmxlZnRJY29uIHx8IHByb3BzLmluc2V0Q2hpbGRyZW4gfHwgcHJvcHMuY2hlY2tlZCA/IGluZGVudCA6IHNpZGVQYWRkaW5nLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBwcm9wcy5yaWdodEljb24gPyBpbmRlbnQgOiBzaWRlUGFkZGluZyxcbiAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICBwYWRkaW5nVG9wOiAwXG4gICAgfSxcblxuICAgIHNlY29uZGFyeVRleHQ6IHtcbiAgICAgIGZsb2F0OiAncmlnaHQnXG4gICAgfSxcblxuICAgIGxlZnRJY29uRGVza3RvcDoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbGVmdDogMjQsXG4gICAgICB0b3A6IDRcbiAgICB9LFxuXG4gICAgcmlnaHRJY29uRGVza3RvcDoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcmlnaHQ6IDI0LFxuICAgICAgdG9wOiA0LFxuICAgICAgZmlsbDogY29udGV4dC5tdWlUaGVtZS5tZW51SXRlbS5yaWdodEljb25EZXNrdG9wRmlsbFxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG52YXIgTWVudUl0ZW0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShNZW51SXRlbSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVudUl0ZW0oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTWVudUl0ZW0pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gTWVudUl0ZW0uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKE1lbnVJdGVtKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0sIF90aGlzLmNsb25lTWVudUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoaXRlbSwge1xuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFpdGVtLnByb3BzLm1lbnVJdGVtcykge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGl0ZW0ucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgaXRlbS5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIGFuY2hvckVsOiBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMpXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgYW5jaG9yRWw6IG51bGxcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShNZW51SXRlbSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5hcHBseUZvY3VzU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gJiYgbmV4dFByb3BzLmZvY3VzU3RhdGUgPT09ICdub25lJykge1xuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LCBuZXh0Q29udGV4dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5hcHBseUZvY3VzU3RhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhcHBseUZvY3VzU3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBseUZvY3VzU3RhdGUoKSB7XG4gICAgICB0aGlzLnJlZnMubGlzdEl0ZW0uYXBwbHlGb2N1c1N0YXRlKHRoaXMucHJvcHMuZm9jdXNTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hlY2tlZCA9IF9wcm9wcy5jaGVja2VkLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGRlc2t0b3AgPSBfcHJvcHMuZGVza3RvcCxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBmb2N1c1N0YXRlID0gX3Byb3BzLmZvY3VzU3RhdGUsXG4gICAgICAgICAgaW5uZXJEaXZTdHlsZSA9IF9wcm9wcy5pbm5lckRpdlN0eWxlLFxuICAgICAgICAgIGluc2V0Q2hpbGRyZW4gPSBfcHJvcHMuaW5zZXRDaGlsZHJlbixcbiAgICAgICAgICBsZWZ0SWNvbiA9IF9wcm9wcy5sZWZ0SWNvbixcbiAgICAgICAgICBtZW51SXRlbXMgPSBfcHJvcHMubWVudUl0ZW1zLFxuICAgICAgICAgIHJpZ2h0SWNvbiA9IF9wcm9wcy5yaWdodEljb24sXG4gICAgICAgICAgc2Vjb25kYXJ5VGV4dCA9IF9wcm9wcy5zZWNvbmRhcnlUZXh0LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgYW5jaG9yT3JpZ2luID0gX3Byb3BzLmFuY2hvck9yaWdpbixcbiAgICAgICAgICB0YXJnZXRPcmlnaW4gPSBfcHJvcHMudGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoZWNrZWQnLCAnY2hpbGRyZW4nLCAnZGVza3RvcCcsICdkaXNhYmxlZCcsICdmb2N1c1N0YXRlJywgJ2lubmVyRGl2U3R5bGUnLCAnaW5zZXRDaGlsZHJlbicsICdsZWZ0SWNvbicsICdtZW51SXRlbXMnLCAncmlnaHRJY29uJywgJ3NlY29uZGFyeVRleHQnLCAnc3R5bGUnLCAnYW5pbWF0aW9uJywgJ2FuY2hvck9yaWdpbicsICd0YXJnZXRPcmlnaW4nLCAndmFsdWUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpO1xuICAgICAgdmFyIG1lcmdlZElubmVyRGl2U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbm5lckRpdlN0eWxlLCBpbm5lckRpdlN0eWxlKTtcblxuICAgICAgLy8gTGVmdCBJY29uXG4gICAgICB2YXIgbGVmdEljb25FbGVtZW50ID0gbGVmdEljb24gPyBsZWZ0SWNvbiA6IGNoZWNrZWQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfY2hlY2syLmRlZmF1bHQsIG51bGwpIDogbnVsbDtcbiAgICAgIGlmIChsZWZ0SWNvbkVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1lcmdlZExlZnRJY29uU3R5bGVzID0gZGVza3RvcCA/ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGVmdEljb25EZXNrdG9wLCBsZWZ0SWNvbkVsZW1lbnQucHJvcHMuc3R5bGUpIDogbGVmdEljb25FbGVtZW50LnByb3BzLnN0eWxlO1xuICAgICAgICBsZWZ0SWNvbkVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGxlZnRJY29uRWxlbWVudCwgeyBzdHlsZTogbWVyZ2VkTGVmdEljb25TdHlsZXMgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJpZ2h0IEljb25cbiAgICAgIHZhciByaWdodEljb25FbGVtZW50ID0gdm9pZCAwO1xuICAgICAgaWYgKHJpZ2h0SWNvbikge1xuICAgICAgICB2YXIgbWVyZ2VkUmlnaHRJY29uU3R5bGVzID0gZGVza3RvcCA/ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucmlnaHRJY29uRGVza3RvcCwgcmlnaHRJY29uLnByb3BzLnN0eWxlKSA6IHJpZ2h0SWNvbi5wcm9wcy5zdHlsZTtcbiAgICAgICAgcmlnaHRJY29uRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQocmlnaHRJY29uLCB7IHN0eWxlOiBtZXJnZWRSaWdodEljb25TdHlsZXMgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlY29uZGFyeSBUZXh0XG4gICAgICB2YXIgc2Vjb25kYXJ5VGV4dEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoc2Vjb25kYXJ5VGV4dCkge1xuICAgICAgICB2YXIgc2Vjb25kYXJ5VGV4dElzQW5FbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHNlY29uZGFyeVRleHQpO1xuICAgICAgICB2YXIgbWVyZ2VkU2Vjb25kYXJ5VGV4dFN0eWxlcyA9IHNlY29uZGFyeVRleHRJc0FuRWxlbWVudCA/ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuc2Vjb25kYXJ5VGV4dCwgc2Vjb25kYXJ5VGV4dC5wcm9wcy5zdHlsZSkgOiBudWxsO1xuXG4gICAgICAgIHNlY29uZGFyeVRleHRFbGVtZW50ID0gc2Vjb25kYXJ5VGV4dElzQW5FbGVtZW50ID8gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChzZWNvbmRhcnlUZXh0LCB7IHN0eWxlOiBtZXJnZWRTZWNvbmRhcnlUZXh0U3R5bGVzIH0pIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuc2Vjb25kYXJ5VGV4dCkgfSxcbiAgICAgICAgICBzZWNvbmRhcnlUZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRNZW51UG9wb3ZlciA9IHZvaWQgMDtcbiAgICAgIGlmIChtZW51SXRlbXMpIHtcbiAgICAgICAgY2hpbGRNZW51UG9wb3ZlciA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Qb3BvdmVyMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgICAgICAgICAgYW5jaG9yT3JpZ2luOiBhbmNob3JPcmlnaW4sXG4gICAgICAgICAgICBhbmNob3JFbDogdGhpcy5zdGF0ZS5hbmNob3JFbCxcbiAgICAgICAgICAgIG9wZW46IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICAgICAgIHRhcmdldE9yaWdpbjogdGFyZ2V0T3JpZ2luLFxuICAgICAgICAgICAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IGZhbHNlLFxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9NZW51Mi5kZWZhdWx0LFxuICAgICAgICAgICAgeyBkZXNrdG9wOiBkZXNrdG9wLCBkaXNhYmxlZDogZGlzYWJsZWQsIHN0eWxlOiBuZXN0ZWRNZW51U3R5bGUgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAobWVudUl0ZW1zLCB0aGlzLmNsb25lTWVudUl0ZW0pXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBvdGhlci5vbkNsaWNrID0gdGhpcy5oYW5kbGVUb3VjaFRhcDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfTGlzdEl0ZW0yLmRlZmF1bHQsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGhvdmVyQ29sb3I6IHRoaXMuY29udGV4dC5tdWlUaGVtZS5tZW51SXRlbS5ob3ZlckNvbG9yLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGU6IG1lcmdlZElubmVyRGl2U3R5bGVzLFxuICAgICAgICAgIGluc2V0Q2hpbGRyZW46IGluc2V0Q2hpbGRyZW4sXG4gICAgICAgICAgbGVmdEljb246IGxlZnRJY29uRWxlbWVudCxcbiAgICAgICAgICByZWY6ICdsaXN0SXRlbScsXG4gICAgICAgICAgcmlnaHRJY29uOiByaWdodEljb25FbGVtZW50LFxuICAgICAgICAgIHJvbGU6ICdtZW51aXRlbScsXG4gICAgICAgICAgc3R5bGU6IG1lcmdlZFJvb3RTdHlsZXNcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBzZWNvbmRhcnlUZXh0RWxlbWVudCxcbiAgICAgICAgY2hpbGRNZW51UG9wb3ZlclxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE1lbnVJdGVtO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTWVudUl0ZW0ubXVpTmFtZSA9ICdNZW51SXRlbSc7XG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuY2hvck9yaWdpbjogeyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfSxcbiAgY2hlY2tlZDogZmFsc2UsXG4gIGRlc2t0b3A6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZvY3VzU3RhdGU6ICdub25lJyxcbiAgaW5zZXRDaGlsZHJlbjogZmFsc2UsXG4gIHRhcmdldE9yaWdpbjogeyBob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJyB9XG59O1xuTWVudUl0ZW0uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbk1lbnVJdGVtLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9mIHRoZSBhbmNob3IgZm9yIHRoZSBwb3BvdmVyIG9mIG5lc3RlZCBgTWVudUl0ZW1gXG4gICAqIGVsZW1lbnRzLlxuICAgKiBPcHRpb25zOlxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF1cbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXS5cbiAgICovXG4gIGFuY2hvck9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4sXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBhbmltYXRpb24gY29tcG9uZW50IHVzZWQuXG4gICAqL1xuICBhbmltYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIElmIHRydWUsIGEgbGVmdCBjaGVjayBtYXJrIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBjaGVja2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBFbGVtZW50cyBwYXNzZWQgYXMgY2hpbGRyZW4gdG8gdGhlIHVuZGVybHlpbmcgYExpc3RJdGVtYC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIElmIHRydWUsIHRoZSBtZW51IGl0ZW0gd2lsbCByZW5kZXIgd2l0aCBjb21wYWN0IGRlc2t0b3BcbiAgICogc3R5bGVzLlxuICAgKi9cbiAgZGVza3RvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1lbnUgaXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBmb2N1cyBzdGF0ZSBvZiB0aGUgbWVudSBpdGVtLiBUaGlzIHByb3AgaXMgdXNlZCB0byBzZXQgdGhlIGZvY3VzXG4gICAqIHN0YXRlIG9mIHRoZSB1bmRlcmx5aW5nIGBMaXN0SXRlbWAuXG4gICAqL1xuICBmb2N1c1N0YXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbm9uZScsICdmb2N1c2VkJywgJ2tleWJvYXJkLWZvY3VzZWQnXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgaW5uZXIgZGl2LlxuICAgKi9cbiAgaW5uZXJEaXZTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgY2hpbGRyZW4gd2lsbCBiZSBpbmRlbnRlZC5cbiAgICogVGhpcyBpcyBvbmx5IG5lZWRlZCB3aGVuIHRoZXJlIGlzIG5vIGBsZWZ0SWNvbmAuXG4gICAqL1xuICBpbnNldENoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgYFN2Z0ljb25gIG9yIGBGb250SWNvbmAgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBsZWZ0IHNpZGUuXG4gICAqL1xuICBsZWZ0SWNvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogYE1lbnVJdGVtYCBlbGVtZW50cyB0byBuZXN0IHdpdGhpbiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgbWVudUl0ZW1zOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBtZW51IGl0ZW0gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byByZW5kZXIgcHJpbWFyeSB0ZXh0IHdpdGhpbiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgcHJpbWFyeVRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBgU3ZnSWNvbmAgb3IgYEZvbnRJY29uYCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqL1xuICByaWdodEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIHJlbmRlciBzZWNvbmRhcnkgdGV4dCB3aXRoaW4gdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIHNlY29uZGFyeVRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBMb2NhdGlvbiBvbiB0aGUgcG9wb3ZlciBvZiBuZXN0ZWQgYE1lbnVJdGVtYCBlbGVtZW50cyB0aGF0IHdpbGwgYXR0YWNoXG4gICAqIHRvIHRoZSBhbmNob3IncyBvcmlnaW4uXG4gICAqIE9wdGlvbnM6XG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBtaWRkbGUsIHJpZ2h0XVxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b21dLlxuICAgKi9cbiAgdGFyZ2V0T3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBNZW51SXRlbTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51SXRlbS9NZW51SXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbkNoZWNrID0gZnVuY3Rpb24gTmF2aWdhdGlvbkNoZWNrKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ005IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbkNoZWNrID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uQ2hlY2spO1xuTmF2aWdhdGlvbkNoZWNrLmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25DaGVjayc7XG5OYXZpZ2F0aW9uQ2hlY2subXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkNoZWNrO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9zZXREaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vc2V0RGlzcGxheU5hbWUnKTtcblxudmFyIF9zZXREaXNwbGF5TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXREaXNwbGF5TmFtZSk7XG5cbnZhciBfd3JhcERpc3BsYXlOYW1lID0gcmVxdWlyZSgnLi93cmFwRGlzcGxheU5hbWUnKTtcblxudmFyIF93cmFwRGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcERpc3BsYXlOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc2hvdWxkVXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkVXBkYXRlKHRlc3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSAoMCwgX3JlYWN0LmNyZWF0ZUZhY3RvcnkpKEJhc2VDb21wb25lbnQpO1xuXG4gICAgdmFyIFNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoU2hvdWxkVXBkYXRlLCBfQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2hvdWxkVXBkYXRlKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2hvdWxkVXBkYXRlKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgU2hvdWxkVXBkYXRlLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiB0ZXN0KHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBTaG91bGRVcGRhdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2hvdWxkVXBkYXRlO1xuICAgIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuICgwLCBfc2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKCgwLCBfd3JhcERpc3BsYXlOYW1lMi5kZWZhdWx0KShCYXNlQ29tcG9uZW50LCAnc2hvdWxkVXBkYXRlJykpKFNob3VsZFVwZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBTaG91bGRVcGRhdGU7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzaG91bGRVcGRhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3Nob3VsZFVwZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHNldFN0YXRpYyA9IGZ1bmN0aW9uIHNldFN0YXRpYyhrZXksIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgQmFzZUNvbXBvbmVudFtrZXldID0gdmFsdWU7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIHJldHVybiBCYXNlQ29tcG9uZW50O1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0U3RhdGljO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9zZXRTdGF0aWMuanNcbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgaWYgKHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIGlmICghQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZXREaXNwbGF5TmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvZ2V0RGlzcGxheU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFN2Z0ljb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShTdmdJY29uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdmdJY29uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFN2Z0ljb24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gU3ZnSWNvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU3ZnSWNvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTdmdJY29uLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbG9yID0gX3Byb3BzLmNvbG9yLFxuICAgICAgICAgIGhvdmVyQ29sb3IgPSBfcHJvcHMuaG92ZXJDb2xvcixcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF9wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdmlld0JveCA9IF9wcm9wcy52aWV3Qm94LFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2NvbG9yJywgJ2hvdmVyQ29sb3InLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdzdHlsZScsICd2aWV3Qm94J10pO1xuICAgICAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHN2Z0ljb24gPSBfY29udGV4dCRtdWlUaGVtZS5zdmdJY29uLFxuICAgICAgICAgIHByZXBhcmVTdHlsZXMgPSBfY29udGV4dCRtdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBvZmZDb2xvciA9IGNvbG9yID8gY29sb3IgOiAnY3VycmVudENvbG9yJztcbiAgICAgIHZhciBvbkNvbG9yID0gaG92ZXJDb2xvciA/IGhvdmVyQ29sb3IgOiBvZmZDb2xvcjtcblxuICAgICAgdmFyIG1lcmdlZFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBjb2xvcjogc3ZnSWNvbi5jb2xvcixcbiAgICAgICAgZmlsbDogdGhpcy5zdGF0ZS5ob3ZlcmVkID8gb25Db2xvciA6IG9mZkNvbG9yLFxuICAgICAgICBoZWlnaHQ6IDI0LFxuICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKVxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzdmcnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFN0eWxlcyksXG4gICAgICAgICAgdmlld0JveDogdmlld0JveFxuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdmdJY29uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU3ZnSWNvbi5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuU3ZnSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge30sXG4gIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge30sXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnXG59O1xuU3ZnSWNvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuU3ZnSWNvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBFbGVtZW50cyBwYXNzZWQgaW50byB0aGUgU1ZHIEljb24uXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZmlsbCBjb2xvciBvZiB0aGUgc3ZnIGljb24uXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoaXMgY29tcG9uZW50IHdpbGwgZGVmYXVsdFxuICAgKiB0byBtdWlUaGVtZS5wYWxldHRlLnRleHRDb2xvci5cbiAgICovXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGljb24gY29sb3Igd2hlbiB0aGUgbW91c2UgaG92ZXJzIG92ZXIgdGhlIGljb24uXG4gICAqL1xuICBob3ZlckNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gcmVkZWZpbmUgd2hhdCB0aGUgY29vcmRpbmF0ZXNcbiAgICogd2l0aG91dCB1bml0cyBtZWFuIGluc2lkZSBhbiBzdmcgZWxlbWVudC4gRm9yIGV4YW1wbGUsXG4gICAqIGlmIHRoZSBTVkcgZWxlbWVudCBpcyA1MDAgKHdpZHRoKSBieSAyMDAgKGhlaWdodCksIGFuZCB5b3VcbiAgICogcGFzcyB2aWV3Qm94PVwiMCAwIDUwIDIwXCIsIHRoaXMgbWVhbnMgdGhhdCB0aGUgY29vcmRpbmF0ZXMgaW5zaWRlXG4gICAqIHRoZSBzdmcgd2lsbCBnbyBmcm9tIHRoZSB0b3AgbGVmdCBjb3JuZXIgKDAsMCkgdG8gYm90dG9tIHJpZ2h0ICg1MCwyMClcbiAgICogYW5kIGVhY2ggdW5pdCB3aWxsIGJlIHdvcnRoIDEwcHguXG4gICAqL1xuICB2aWV3Qm94OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gU3ZnSWNvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9TdmdJY29uL1N2Z0ljb24uanNcbi8vIG1vZHVsZSBpZCA9IDE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG52YXIgX0ljb25CdXR0b24gPSByZXF1aXJlKCcuLi9JY29uQnV0dG9uJyk7XG5cbnZhciBfSWNvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uQnV0dG9uKTtcblxudmFyIF9leHBhbmRMZXNzID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL25hdmlnYXRpb24vZXhwYW5kLWxlc3MnKTtcblxudmFyIF9leHBhbmRMZXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cGFuZExlc3MpO1xuXG52YXIgX2V4cGFuZE1vcmUgPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvbmF2aWdhdGlvbi9leHBhbmQtbW9yZScpO1xuXG52YXIgX2V4cGFuZE1vcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhwYW5kTW9yZSk7XG5cbnZhciBfTmVzdGVkTGlzdCA9IHJlcXVpcmUoJy4vTmVzdGVkTGlzdCcpO1xuXG52YXIgX05lc3RlZExpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmVzdGVkTGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvciA9IHByb3BzLmF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvcixcbiAgICAgIGluc2V0Q2hpbGRyZW4gPSBwcm9wcy5pbnNldENoaWxkcmVuLFxuICAgICAgbGVmdEF2YXRhciA9IHByb3BzLmxlZnRBdmF0YXIsXG4gICAgICBsZWZ0Q2hlY2tib3ggPSBwcm9wcy5sZWZ0Q2hlY2tib3gsXG4gICAgICBsZWZ0SWNvbiA9IHByb3BzLmxlZnRJY29uLFxuICAgICAgbmVzdGVkSXRlbXMgPSBwcm9wcy5uZXN0ZWRJdGVtcyxcbiAgICAgIG5lc3RlZExldmVsID0gcHJvcHMubmVzdGVkTGV2ZWwsXG4gICAgICByaWdodEF2YXRhciA9IHByb3BzLnJpZ2h0QXZhdGFyLFxuICAgICAgcmlnaHRJY29uID0gcHJvcHMucmlnaHRJY29uLFxuICAgICAgcmlnaHRJY29uQnV0dG9uID0gcHJvcHMucmlnaHRJY29uQnV0dG9uLFxuICAgICAgcmlnaHRUb2dnbGUgPSBwcm9wcy5yaWdodFRvZ2dsZSxcbiAgICAgIHNlY29uZGFyeVRleHQgPSBwcm9wcy5zZWNvbmRhcnlUZXh0LFxuICAgICAgc2Vjb25kYXJ5VGV4dExpbmVzID0gcHJvcHMuc2Vjb25kYXJ5VGV4dExpbmVzO1xuICB2YXIgbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lO1xuICB2YXIgbGlzdEl0ZW0gPSBtdWlUaGVtZS5saXN0SXRlbTtcblxuXG4gIHZhciB0ZXh0Q29sb3IgPSBtdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3I7XG4gIHZhciBob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvciB8fCAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkodGV4dENvbG9yLCAwLjEpO1xuICB2YXIgc2luZ2xlQXZhdGFyID0gIXNlY29uZGFyeVRleHQgJiYgKGxlZnRBdmF0YXIgfHwgcmlnaHRBdmF0YXIpO1xuICB2YXIgc2luZ2xlTm9BdmF0YXIgPSAhc2Vjb25kYXJ5VGV4dCAmJiAhKGxlZnRBdmF0YXIgfHwgcmlnaHRBdmF0YXIpO1xuICB2YXIgdHdvTGluZSA9IHNlY29uZGFyeVRleHQgJiYgc2Vjb25kYXJ5VGV4dExpbmVzID09PSAxO1xuICB2YXIgdGhyZWVMaW5lID0gc2Vjb25kYXJ5VGV4dCAmJiBzZWNvbmRhcnlUZXh0TGluZXMgPiAxO1xuXG4gIHZhciBpc0tleWJvYXJkRm9jdXNlZCA9IChwcm9wcy5pc0tleWJvYXJkRm9jdXNlZCAhPT0gdW5kZWZpbmVkID8gcHJvcHMgOiBzdGF0ZSkuaXNLZXlib2FyZEZvY3VzZWQ7XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChpc0tleWJvYXJkRm9jdXNlZCB8fCBzdGF0ZS5ob3ZlcmVkKSAmJiAhc3RhdGUucmlnaHRJY29uQnV0dG9uSG92ZXJlZCAmJiAhc3RhdGUucmlnaHRJY29uQnV0dG9uS2V5Ym9hcmRGb2N1c2VkID8gaG92ZXJDb2xvciA6IG51bGwsXG4gICAgICBjb2xvcjogdGV4dENvbG9yLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKVxuICAgIH0sXG5cbiAgICAvLyBUaGlzIGlubmVyIGRpdiBpcyBuZWVkZWQgc28gdGhhdCByaXBwbGVzIHdpbGwgc3BhbiB0aGUgZW50aXJlIGNvbnRhaW5lclxuICAgIGlubmVyRGl2OiB7XG4gICAgICBtYXJnaW5MZWZ0OiBuZXN0ZWRMZXZlbCAqIGxpc3RJdGVtLm5lc3RlZExldmVsRGVwdGgsXG4gICAgICBwYWRkaW5nTGVmdDogbGVmdEljb24gfHwgbGVmdEF2YXRhciB8fCBsZWZ0Q2hlY2tib3ggfHwgaW5zZXRDaGlsZHJlbiA/IDcyIDogMTYsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHJpZ2h0SWNvbiB8fCByaWdodEF2YXRhciB8fCByaWdodEljb25CdXR0b24gfHwgbmVzdGVkSXRlbXMubGVuZ3RoICYmIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvciA/IDU2IDogcmlnaHRUb2dnbGUgPyA3MiA6IDE2LFxuICAgICAgcGFkZGluZ0JvdHRvbTogc2luZ2xlQXZhdGFyID8gMjAgOiAxNixcbiAgICAgIHBhZGRpbmdUb3A6IHNpbmdsZU5vQXZhdGFyIHx8IHRocmVlTGluZSA/IDE2IDogMjAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG5cbiAgICBpY29uczoge1xuICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgIHdpZHRoOiAyNCxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogdHdvTGluZSA/IDEyIDogc2luZ2xlQXZhdGFyID8gNCA6IDAsXG4gICAgICBtYXJnaW46IDEyXG4gICAgfSxcblxuICAgIGxlZnRJY29uOiB7XG4gICAgICBsZWZ0OiA0XG4gICAgfSxcblxuICAgIHJpZ2h0SWNvbjoge1xuICAgICAgcmlnaHQ6IDRcbiAgICB9LFxuXG4gICAgYXZhdGFyczoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHNpbmdsZUF2YXRhciA/IDggOiAxNlxuICAgIH0sXG5cbiAgICBsYWJlbDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9LFxuXG4gICAgbGVmdEF2YXRhcjoge1xuICAgICAgbGVmdDogMTZcbiAgICB9LFxuXG4gICAgcmlnaHRBdmF0YXI6IHtcbiAgICAgIHJpZ2h0OiAxNlxuICAgIH0sXG5cbiAgICBsZWZ0Q2hlY2tib3g6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiAyNCxcbiAgICAgIHRvcDogdHdvTGluZSA/IDI0IDogc2luZ2xlQXZhdGFyID8gMTYgOiAxMixcbiAgICAgIGxlZnQ6IDE2XG4gICAgfSxcblxuICAgIHByaW1hcnlUZXh0OiB7fSxcblxuICAgIHJpZ2h0SWNvbkJ1dHRvbjoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdG9wOiB0d29MaW5lID8gMTIgOiBzaW5nbGVBdmF0YXIgPyA0IDogMCxcbiAgICAgIHJpZ2h0OiA0XG4gICAgfSxcblxuICAgIHJpZ2h0VG9nZ2xlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogNTQsXG4gICAgICB0b3A6IHR3b0xpbmUgPyAyNSA6IHNpbmdsZUF2YXRhciA/IDE3IDogMTMsXG4gICAgICByaWdodDogOFxuICAgIH0sXG5cbiAgICBzZWNvbmRhcnlUZXh0OiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiB0aHJlZUxpbmUgPyAnMThweCcgOiAnMTZweCcsXG4gICAgICBoZWlnaHQ6IHRocmVlTGluZSA/IDM2IDogMTYsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBtYXJnaW5Ub3A6IDQsXG4gICAgICBjb2xvcjogbGlzdEl0ZW0uc2Vjb25kYXJ5VGV4dENvbG9yLFxuXG4gICAgICAvLyBuZWVkZWQgZm9yIDIgYW5kIDMgbGluZSBlbGxpcHNpc1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogdGhyZWVMaW5lID8gbnVsbCA6ICdub3dyYXAnLFxuICAgICAgZGlzcGxheTogdGhyZWVMaW5lID8gJy13ZWJraXQtYm94JyA6IG51bGwsXG4gICAgICBXZWJraXRMaW5lQ2xhbXA6IHRocmVlTGluZSA/IDIgOiBudWxsLFxuICAgICAgV2Via2l0Qm94T3JpZW50OiB0aHJlZUxpbmUgPyAndmVydGljYWwnIDogbnVsbFxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG52YXIgTGlzdEl0ZW0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShMaXN0SXRlbSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdEl0ZW0oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTGlzdEl0ZW0pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gTGlzdEl0ZW0uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKExpc3RJdGVtKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgcmlnaHRJY29uQnV0dG9uSG92ZXJlZDogZmFsc2UsXG4gICAgICByaWdodEljb25CdXR0b25LZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2g6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IGlzS2V5Ym9hcmRGb2N1c2VkIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25LZXlib2FyZEZvY3VzKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS50b3VjaCkgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFRhcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5wcmltYXJ5VG9nZ2xlc05lc3RlZExpc3QpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlTmVzdGVkTGlzdFRvZ2dsZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTmVzdGVkTGlzdFRvZ2dsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmxlZnRDaGVja2JveCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vcGVuID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgb3BlbjogIV90aGlzLnN0YXRlLm9wZW4gfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTmVzdGVkTGlzdFRvZ2dsZShfdGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXhwb3NpbmcgYHRoaXNgIGluIHRoZSBjYWxsYmFjayBpcyBxdWl0ZSBhIGJhZCBBUEkuXG4gICAgICAgIC8vIEknbSBkb2luZyBhIG9uZSBsZXZlbCBkZWVwIGNsb25lIHRvIGV4cG9zZSBhIGZha2Ugc3RhdGUub3Blbi5cbiAgICAgICAgX3RoaXMucHJvcHMub25OZXN0ZWRMaXN0VG9nZ2xlKCgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIF90aGlzLCB7XG4gICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIG9wZW46ICFfdGhpcy5zdGF0ZS5vcGVuXG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIGlmIChpc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICAgIHJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXNlZDogaXNLZXlib2FyZEZvY3VzZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpY29uQnV0dG9uID0gX3RoaXMucHJvcHMucmlnaHRJY29uQnV0dG9uO1xuXG4gICAgICBpZiAoaWNvbkJ1dHRvbiAmJiBpY29uQnV0dG9uLnByb3BzLm9uS2V5Ym9hcmRGb2N1cykgaWNvbkJ1dHRvbi5wcm9wcy5vbktleWJvYXJkRm9jdXMoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaWNvbkJ1dHRvbiA9IF90aGlzLnByb3BzLnJpZ2h0SWNvbkJ1dHRvbjtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgcmlnaHRJY29uQnV0dG9uSG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICBpZiAoaWNvbkJ1dHRvbiAmJiBpY29uQnV0dG9uLnByb3BzLm9uTW91c2VMZWF2ZSkgaWNvbkJ1dHRvbi5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVJpZ2h0SWNvbkJ1dHRvbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBpY29uQnV0dG9uID0gX3RoaXMucHJvcHMucmlnaHRJY29uQnV0dG9uO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyByaWdodEljb25CdXR0b25Ib3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbk1vdXNlRW50ZXIpIGljb25CdXR0b24ucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaWNvbkJ1dHRvbiA9IF90aGlzLnByb3BzLnJpZ2h0SWNvbkJ1dHRvbjtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbk1vdXNlVXApIGljb25CdXR0b24ucHJvcHMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Ub3VjaFRhcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGljb25CdXR0b24gPSBfdGhpcy5wcm9wcy5yaWdodEljb25CdXR0b247XG5cbiAgICAgIC8vIFN0b3AgdGhlIGV2ZW50IGZyb20gYnViYmxpbmcgdXAgdG8gdGhlIGxpc3QtaXRlbVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoaWNvbkJ1dHRvbiAmJiBpY29uQnV0dG9uLnByb3BzLm9uQ2xpY2spIGljb25CdXR0b24ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0b3VjaDogdHJ1ZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2g6IHRydWUgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTGlzdEl0ZW0sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IHRoaXMucHJvcHMub3BlbiA9PT0gbnVsbCA/IHRoaXMucHJvcHMuaW5pdGlhbGx5T3BlbiA9PT0gdHJ1ZSA6IHRoaXMucHJvcHMub3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb250cm9sbGVkLlxuICAgICAgaWYgKG5leHRQcm9wcy5vcGVuICE9PSBudWxsKSB0aGlzLnNldFN0YXRlKHsgb3BlbjogbmV4dFByb3BzLm9wZW4gfSk7XG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkICYmIHRoaXMuc3RhdGUuaG92ZXJlZCkgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LCBuZXh0Q29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBtZXRob2QgaXMgbmVlZGVkIGJ5IHRoZSBgTWVudUl0ZW1gIGNvbXBvbmVudC5cblxuICB9LCB7XG4gICAga2V5OiAnYXBwbHlGb2N1c1N0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbHlGb2N1c1N0YXRlKGZvY3VzU3RhdGUpIHtcbiAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICB2YXIgYnV0dG9uRWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5idXR0b24pO1xuXG4gICAgICAgIHN3aXRjaCAoZm9jdXNTdGF0ZSkge1xuICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgYnV0dG9uRWwuYmx1cigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZm9jdXNlZCc6XG4gICAgICAgICAgICBidXR0b25FbC5mb2N1cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAna2V5Ym9hcmQtZm9jdXNlZCc6XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5zZXRLZXlib2FyZEZvY3VzKCk7XG4gICAgICAgICAgICBidXR0b25FbC5mb2N1cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVEaXNhYmxlZEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEaXNhYmxlZEVsZW1lbnQoc3R5bGVzLCBjb250ZW50Q2hpbGRyZW4sIGFkZGl0aW9uYWxQcm9wcykge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5uZXJEaXZTdHlsZSA9IF9wcm9wcy5pbm5lckRpdlN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG5cbiAgICAgIHZhciBtZXJnZWREaXZTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZXMuaW5uZXJEaXYsIGlubmVyRGl2U3R5bGUsIHN0eWxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgYWRkaXRpb25hbFByb3BzLCB7XG4gICAgICAgICAgc3R5bGU6IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzKG1lcmdlZERpdlN0eWxlcylcbiAgICAgICAgfSksXG4gICAgICAgIGNvbnRlbnRDaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVMYWJlbEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVMYWJlbEVsZW1lbnQoc3R5bGVzLCBjb250ZW50Q2hpbGRyZW4sIGFkZGl0aW9uYWxQcm9wcykge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGUgPSBfcHJvcHMyLmlubmVyRGl2U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlO1xuXG5cbiAgICAgIHZhciBtZXJnZWRMYWJlbFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIHN0eWxlcy5pbm5lckRpdiwgaW5uZXJEaXZTdHlsZSwgc3R5bGVzLmxhYmVsLCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgYWRkaXRpb25hbFByb3BzLCB7XG4gICAgICAgICAgc3R5bGU6IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzKG1lcmdlZExhYmVsU3R5bGVzKVxuICAgICAgICB9KSxcbiAgICAgICAgY29udGVudENoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVRleHRFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlVGV4dEVsZW1lbnQoc3R5bGVzLCBkYXRhLCBrZXkpIHtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoZGF0YSkpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMsIGRhdGEucHJvcHMuc3R5bGUpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBpZiBlbGVtZW50IGlzIGEgbmF0aXZlIGRvbSBub2RlXG4gICAgICAgICAgc3R5bGUgPSBwcmVwYXJlU3R5bGVzKHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChkYXRhLCB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGtleToga2V5LCBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMpIH0sXG4gICAgICAgIGRhdGFcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHVzaEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoRWxlbWVudChjaGlsZHJlbiwgZWxlbWVudCwgYmFzZVN0eWxlcywgYWRkaXRpb25hbFByb3BzKSB7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBiYXNlU3R5bGVzLCBlbGVtZW50LnByb3BzLnN0eWxlKTtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGVsZW1lbnQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIGtleTogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZXNcbiAgICAgICAgfSwgYWRkaXRpb25hbFByb3BzKSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXV0b0dlbmVyYXRlTmVzdGVkSW5kaWNhdG9yID0gX3Byb3BzMy5hdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBfcHJvcHMzLmNvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzID0gX3Byb3BzMy5kaXNhYmxlS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBob3ZlckNvbG9yID0gX3Byb3BzMy5ob3ZlckNvbG9yLFxuICAgICAgICAgIGluaXRpYWxseU9wZW4gPSBfcHJvcHMzLmluaXRpYWxseU9wZW4sXG4gICAgICAgICAgaW5uZXJEaXZTdHlsZSA9IF9wcm9wczMuaW5uZXJEaXZTdHlsZSxcbiAgICAgICAgICBpbnNldENoaWxkcmVuID0gX3Byb3BzMy5pbnNldENoaWxkcmVuLFxuICAgICAgICAgIGxlZnRBdmF0YXIgPSBfcHJvcHMzLmxlZnRBdmF0YXIsXG4gICAgICAgICAgbGVmdENoZWNrYm94ID0gX3Byb3BzMy5sZWZ0Q2hlY2tib3gsXG4gICAgICAgICAgbGVmdEljb24gPSBfcHJvcHMzLmxlZnRJY29uLFxuICAgICAgICAgIG5lc3RlZEl0ZW1zID0gX3Byb3BzMy5uZXN0ZWRJdGVtcyxcbiAgICAgICAgICBuZXN0ZWRMZXZlbCA9IF9wcm9wczMubmVzdGVkTGV2ZWwsXG4gICAgICAgICAgbmVzdGVkTGlzdFN0eWxlID0gX3Byb3BzMy5uZXN0ZWRMaXN0U3R5bGUsXG4gICAgICAgICAgb25LZXlib2FyZEZvY3VzID0gX3Byb3BzMy5vbktleWJvYXJkRm9jdXMsXG4gICAgICAgICAgaXNLZXlib2FyZEZvY3VzZWQgPSBfcHJvcHMzLmlzS2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF9wcm9wczMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF9wcm9wczMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uTmVzdGVkTGlzdFRvZ2dsZSA9IF9wcm9wczMub25OZXN0ZWRMaXN0VG9nZ2xlLFxuICAgICAgICAgIG9uVG91Y2hTdGFydCA9IF9wcm9wczMub25Ub3VjaFN0YXJ0LFxuICAgICAgICAgIG9uQ2xpY2sgPSBfcHJvcHMzLm9uQ2xpY2ssXG4gICAgICAgICAgcmlnaHRBdmF0YXIgPSBfcHJvcHMzLnJpZ2h0QXZhdGFyLFxuICAgICAgICAgIHJpZ2h0SWNvbiA9IF9wcm9wczMucmlnaHRJY29uLFxuICAgICAgICAgIHJpZ2h0SWNvbkJ1dHRvbiA9IF9wcm9wczMucmlnaHRJY29uQnV0dG9uLFxuICAgICAgICAgIHJpZ2h0VG9nZ2xlID0gX3Byb3BzMy5yaWdodFRvZ2dsZSxcbiAgICAgICAgICBwcmltYXJ5VGV4dCA9IF9wcm9wczMucHJpbWFyeVRleHQsXG4gICAgICAgICAgcHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0ID0gX3Byb3BzMy5wcmltYXJ5VG9nZ2xlc05lc3RlZExpc3QsXG4gICAgICAgICAgc2Vjb25kYXJ5VGV4dCA9IF9wcm9wczMuc2Vjb25kYXJ5VGV4dCxcbiAgICAgICAgICBzZWNvbmRhcnlUZXh0TGluZXMgPSBfcHJvcHMzLnNlY29uZGFyeVRleHRMaW5lcyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wczMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMzLCBbJ2F1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvcicsICdjaGlsZHJlbicsICdjb250YWluZXJFbGVtZW50JywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVLZXlib2FyZEZvY3VzJywgJ2hvdmVyQ29sb3InLCAnaW5pdGlhbGx5T3BlbicsICdpbm5lckRpdlN0eWxlJywgJ2luc2V0Q2hpbGRyZW4nLCAnbGVmdEF2YXRhcicsICdsZWZ0Q2hlY2tib3gnLCAnbGVmdEljb24nLCAnbmVzdGVkSXRlbXMnLCAnbmVzdGVkTGV2ZWwnLCAnbmVzdGVkTGlzdFN0eWxlJywgJ29uS2V5Ym9hcmRGb2N1cycsICdpc0tleWJvYXJkRm9jdXNlZCcsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ29uTmVzdGVkTGlzdFRvZ2dsZScsICdvblRvdWNoU3RhcnQnLCAnb25DbGljaycsICdyaWdodEF2YXRhcicsICdyaWdodEljb24nLCAncmlnaHRJY29uQnV0dG9uJywgJ3JpZ2h0VG9nZ2xlJywgJ3ByaW1hcnlUZXh0JywgJ3ByaW1hcnlUb2dnbGVzTmVzdGVkTGlzdCcsICdzZWNvbmRhcnlUZXh0JywgJ3NlY29uZGFyeVRleHRMaW5lcycsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBjb250ZW50Q2hpbGRyZW4gPSBbY2hpbGRyZW5dO1xuXG4gICAgICBpZiAobGVmdEljb24pIHtcbiAgICAgICAgdmFyIGFkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgICAgICBjb2xvcjogbGVmdEljb24ucHJvcHMuY29sb3IgfHwgdGhpcy5jb250ZXh0Lm11aVRoZW1lLmxpc3RJdGVtLmxlZnRJY29uQ29sb3JcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIGxlZnRJY29uLCAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pY29ucywgc3R5bGVzLmxlZnRJY29uKSwgYWRkaXRpb25hbFByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0SWNvbikge1xuICAgICAgICB2YXIgX2FkZGl0aW9uYWxQcm9wcyA9IHtcbiAgICAgICAgICBjb2xvcjogcmlnaHRJY29uLnByb3BzLmNvbG9yIHx8IHRoaXMuY29udGV4dC5tdWlUaGVtZS5saXN0SXRlbS5yaWdodEljb25Db2xvclxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnB1c2hFbGVtZW50KGNvbnRlbnRDaGlsZHJlbiwgcmlnaHRJY29uLCAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pY29ucywgc3R5bGVzLnJpZ2h0SWNvbiksIF9hZGRpdGlvbmFsUHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVmdEF2YXRhcikge1xuICAgICAgICB0aGlzLnB1c2hFbGVtZW50KGNvbnRlbnRDaGlsZHJlbiwgbGVmdEF2YXRhciwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuYXZhdGFycywgc3R5bGVzLmxlZnRBdmF0YXIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0QXZhdGFyKSB7XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCByaWdodEF2YXRhciwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuYXZhdGFycywgc3R5bGVzLnJpZ2h0QXZhdGFyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0Q2hlY2tib3gpIHtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIGxlZnRDaGVja2JveCwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMubGVmdENoZWNrYm94KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJpZ2h0SWNvbkJ1dHRvbkVsZW1lbnRcbiAgICAgIHZhciBoYXNOZXN0TGlzdEl0ZW1zID0gbmVzdGVkSXRlbXMubGVuZ3RoO1xuICAgICAgdmFyIGhhc1JpZ2h0RWxlbWVudCA9IHJpZ2h0QXZhdGFyIHx8IHJpZ2h0SWNvbiB8fCByaWdodEljb25CdXR0b24gfHwgcmlnaHRUb2dnbGU7XG4gICAgICB2YXIgbmVlZHNOZXN0ZWRJbmRpY2F0b3IgPSBoYXNOZXN0TGlzdEl0ZW1zICYmIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvciAmJiAhaGFzUmlnaHRFbGVtZW50O1xuXG4gICAgICBpZiAocmlnaHRJY29uQnV0dG9uIHx8IG5lZWRzTmVzdGVkSW5kaWNhdG9yKSB7XG4gICAgICAgIHZhciByaWdodEljb25CdXR0b25FbGVtZW50ID0gcmlnaHRJY29uQnV0dG9uO1xuICAgICAgICB2YXIgcmlnaHRJY29uQnV0dG9uSGFuZGxlcnMgPSB7XG4gICAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZVJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXMsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZVJpZ2h0SWNvbkJ1dHRvbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZVJpZ2h0SWNvbkJ1dHRvbk1vdXNlTGVhdmUsXG4gICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Ub3VjaFRhcCxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZVVwLFxuICAgICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZVVwXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmVzdGVkIGxpc3QgaW5kaWNhdG9yIGljb24gaWYgd2UgZG9uJ3QgaGF2ZSBhbiBpY29uIG9uIHRoZSByaWdodFxuICAgICAgICBpZiAobmVlZHNOZXN0ZWRJbmRpY2F0b3IpIHtcbiAgICAgICAgICByaWdodEljb25CdXR0b25FbGVtZW50ID0gdGhpcy5zdGF0ZS5vcGVuID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfSWNvbkJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZXhwYW5kTGVzczIuZGVmYXVsdCwgbnVsbClcbiAgICAgICAgICApIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfSWNvbkJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZXhwYW5kTW9yZTIuZGVmYXVsdCwgbnVsbClcbiAgICAgICAgICApO1xuICAgICAgICAgIHJpZ2h0SWNvbkJ1dHRvbkhhbmRsZXJzLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZU5lc3RlZExpc3RUb2dnbGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnB1c2hFbGVtZW50KGNvbnRlbnRDaGlsZHJlbiwgcmlnaHRJY29uQnV0dG9uRWxlbWVudCwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucmlnaHRJY29uQnV0dG9uKSwgcmlnaHRJY29uQnV0dG9uSGFuZGxlcnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHRUb2dnbGUpIHtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIHJpZ2h0VG9nZ2xlLCAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yaWdodFRvZ2dsZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJpbWFyeVRleHQpIHtcbiAgICAgICAgdmFyIHByaW1hcnlUZXh0RWxlbWVudCA9IHRoaXMuY3JlYXRlVGV4dEVsZW1lbnQoc3R5bGVzLnByaW1hcnlUZXh0LCBwcmltYXJ5VGV4dCwgJ3ByaW1hcnlUZXh0Jyk7XG4gICAgICAgIGNvbnRlbnRDaGlsZHJlbi5wdXNoKHByaW1hcnlUZXh0RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRhcnlUZXh0KSB7XG4gICAgICAgIHZhciBzZWNvbmRhcnlUZXh0RWxlbWVudCA9IHRoaXMuY3JlYXRlVGV4dEVsZW1lbnQoc3R5bGVzLnNlY29uZGFyeVRleHQsIHNlY29uZGFyeVRleHQsICdzZWNvbmRhcnlUZXh0Jyk7XG4gICAgICAgIGNvbnRlbnRDaGlsZHJlbi5wdXNoKHNlY29uZGFyeVRleHRFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5lc3RlZExpc3QgPSBuZXN0ZWRJdGVtcy5sZW5ndGggPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX05lc3RlZExpc3QyLmRlZmF1bHQsXG4gICAgICAgIHsgbmVzdGVkTGV2ZWw6IG5lc3RlZExldmVsLCBvcGVuOiB0aGlzLnN0YXRlLm9wZW4sIHN0eWxlOiBuZXN0ZWRMaXN0U3R5bGUgfSxcbiAgICAgICAgbmVzdGVkSXRlbXNcbiAgICAgICkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBzaW1wbGVMYWJlbCA9ICFwcmltYXJ5VG9nZ2xlc05lc3RlZExpc3QgJiYgKGxlZnRDaGVja2JveCB8fCByaWdodFRvZ2dsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHNpbXBsZUxhYmVsID8gdGhpcy5jcmVhdGVMYWJlbEVsZW1lbnQoc3R5bGVzLCBjb250ZW50Q2hpbGRyZW4sIG90aGVyKSA6IGRpc2FibGVkID8gdGhpcy5jcmVhdGVEaXNhYmxlZEVsZW1lbnQoc3R5bGVzLCBjb250ZW50Q2hpbGRyZW4sIG90aGVyKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgICAgICB9LCBvdGhlciwge1xuICAgICAgICAgICAgZGlzYWJsZUtleWJvYXJkRm9jdXM6IGRpc2FibGVLZXlib2FyZEZvY3VzIHx8IHRoaXMuc3RhdGUucmlnaHRJY29uQnV0dG9uS2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVUb3VjaFRhcCxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5idXR0b24gPSBub2RlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlubmVyRGl2LCBpbm5lckRpdlN0eWxlKSkgfSxcbiAgICAgICAgICAgIGNvbnRlbnRDaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgbmVzdGVkTGlzdFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExpc3RJdGVtO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTGlzdEl0ZW0ubXVpTmFtZSA9ICdMaXN0SXRlbSc7XG5MaXN0SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvcjogdHJ1ZSxcbiAgY29udGFpbmVyRWxlbWVudDogJ3NwYW4nLFxuICBkaXNhYmxlS2V5Ym9hcmRGb2N1czogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaW5pdGlhbGx5T3BlbjogZmFsc2UsXG4gIGluc2V0Q2hpbGRyZW46IGZhbHNlLFxuICBuZXN0ZWRJdGVtczogW10sXG4gIG5lc3RlZExldmVsOiAwLFxuICBvbktleWJvYXJkRm9jdXM6IGZ1bmN0aW9uIG9uS2V5Ym9hcmRGb2N1cygpIHt9LFxuICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHt9LFxuICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHt9LFxuICBvbk5lc3RlZExpc3RUb2dnbGU6IGZ1bmN0aW9uIG9uTmVzdGVkTGlzdFRvZ2dsZSgpIHt9LFxuICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge30sXG4gIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCkge30sXG4gIG9wZW46IG51bGwsXG4gIHByaW1hcnlUb2dnbGVzTmVzdGVkTGlzdDogZmFsc2UsXG4gIHNlY29uZGFyeVRleHRMaW5lczogMVxufTtcbkxpc3RJdGVtLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5MaXN0SXRlbS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCBnZW5lcmF0ZSBhIG5lc3RlZC1saXN0LWluZGljYXRvciBpY29uIHdoZW4gbmVzdGVkIGxpc3RcbiAgICogaXRlbXMgYXJlIGRldGVjdGVkLiBOb3RlIHRoYXQgYW4gaW5kaWNhdG9yIHdpbGwgbm90IGJlIGNyZWF0ZWRcbiAgICogaWYgYSBgcmlnaHRJY29uYCBvciBgcmlnaHRJY29uQnV0dG9uYCBoYXMgYmVlbiBwcm92aWRlZCB0b1xuICAgKiB0aGUgZWxlbWVudC5cbiAgICovXG4gIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ2hpbGRyZW4gcGFzc2VkIGludG8gdGhlIGBMaXN0SXRlbWAuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBMaXN0SXRlbS4gRWl0aGVyIGEgc3RyaW5nIHRvXG4gICAqIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgUmVhY3RFbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlXG4gICAqIExpc3RJdGVtIGluIGEgY3VzdG9tIExpbmsgY29tcG9uZW50LiBJZiBhIFJlYWN0RWxlbWVudCBpcyBnaXZlbiwgZW5zdXJlXG4gICAqIHRoYXQgaXQgcGFzc2VzIGFsbCBvZiBpdHMgZ2l2ZW4gcHJvcHMgdGhyb3VnaCB0byB0aGUgdW5kZXJseWluZyBET01cbiAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgKi9cbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbm90IGJlIGFibGUgdG8gYmUgZm9jdXNlZCBieSB0aGUga2V5Ym9hcmQuXG4gICAqL1xuICBkaXNhYmxlS2V5Ym9hcmRGb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQgd2lsbCBub3QgYmUgY2xpY2thYmxlXG4gICAqIGFuZCB3aWxsIG5vdCBkaXNwbGF5IGhvdmVyIGVmZmVjdHMuXG4gICAqIFRoaXMgaXMgYXV0b21hdGljYWxseSBkaXNhYmxlZCBpZiBlaXRoZXIgYGxlZnRDaGVja2JveGBcbiAgICogb3IgYHJpZ2h0VG9nZ2xlYCBpcyBzZXQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgKiBPdmVycmlkZSB0aGUgaG92ZXIgYmFja2dyb3VuZCBjb2xvci5cbiAgKi9cbiAgaG92ZXJDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbmVzdGVkIGBMaXN0SXRlbWBzIGFyZSBpbml0aWFsbHkgZGlzcGxheWVkLlxuICAgKi9cbiAgaW5pdGlhbGx5T3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGlubmVyIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgaW5uZXJEaXZTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgY2hpbGRyZW4gd2lsbCBiZSBpbmRlbnRlZCBieSA3MnB4LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGVyZSBpcyBubyBsZWZ0IGF2YXRhciBvciBsZWZ0IGljb24uXG4gICAqL1xuICBpbnNldENoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBVc2UgdG8gY29udHJvbCBpZiB0aGUgbGlzdCBpdGVtIHNob3VsZCByZW5kZXIgYXMga2V5Ym9hcmQgZm9jdXNlZC4gIElmXG4gICAqIHVuZGVmaW5lZCAoZGVmYXVsdCksIHRoaXMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IG1hbmFnZWQuICBJZiBwcm92aWRlZCxcbiAgICogaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbXBvbmVudHMgc3R5bGUuICBOb3RlIHRoYXQgdGhpcyB3aWxsIG5vdCBjaGFuZ2UgdGhlXG4gICAqIGFjdHVhbCBmb2N1cyAtIGFuZCBzaG91bGQgb25seSBiZSB1c2VkIHdoZW4geW91IHdhbnQgdG8gc2ltdWxhdGVcbiAgICoga2V5Ym9hcmQgZm9jdXMgKGVnLiBpbiBhIHJpY2ggdGV4dCBpbnB1dCBhdXRvY29tcGxldGUpLlxuICAgKi9cbiAgaXNLZXlib2FyZEZvY3VzZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGBBdmF0YXJgIGVsZW1lbnQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBsZWZ0IHNpZGUuXG4gICAqL1xuICBsZWZ0QXZhdGFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgQ2hlY2tib3hgIGVsZW1lbnQgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBsZWZ0IHNpZGUuXG4gICAqL1xuICBsZWZ0Q2hlY2tib3g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGBTdmdJY29uYCBvciBgRm9udEljb25gIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlLlxuICAgKi9cbiAgbGVmdEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGBMaXN0SXRlbWBzIHRvIG5lc3QgdW5kZXJuZWF0aCB0aGUgY3VycmVudCBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgbmVzdGVkSXRlbXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQpLFxuICAvKipcbiAgICogQ29udHJvbHMgaG93IGRlZXAgYSBgTGlzdEl0ZW1gIGFwcGVhcnMuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkLCBzbyBtb2RpZnkgYXQgeW91ciBvd24gcmlzay5cbiAgICovXG4gIG5lc3RlZExldmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBuZXN0ZWQgaXRlbXMnIGBOZXN0ZWRMaXN0YC5cbiAgICovXG4gIG5lc3RlZExpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBsaXN0IGl0ZW0gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBsaXN0IGl0ZW0uXG4gICAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBgTGlzdEl0ZW1gIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCBieSB0aGUga2V5Ym9hcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBgZm9jdXNgIG9yIGBibHVyYCBldmVudCB0YXJnZXRpbmcgdGhlIGBMaXN0SXRlbWAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNLZXlib2FyZEZvY3VzZWQgSWYgdHJ1ZSwgdGhlIGBMaXN0SXRlbWAgaXMgZm9jdXNlZC5cbiAgICovXG4gIG9uS2V5Ym9hcmRGb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBgTGlzdEl0ZW1gIHRvZ2dsZXMgaXRzIG5lc3RlZCBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbGlzdEl0ZW0gVGhlIGBMaXN0SXRlbWAuXG4gICAqL1xuICBvbk5lc3RlZExpc3RUb2dnbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENvbnRyb2wgdG9nZ2xlIHN0YXRlIG9mIG5lc3RlZCBsaXN0LlxuICAgKi9cbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYmxvY2sgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBwcmltYXJ5IHRleHQuXG4gICAqIElmIGEgc3RyaW5nIGlzIHBhc3NlZCBpbiwgYSBkaXYgdGFnIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBwcmltYXJ5VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgY2xpY2tpbmcgb3IgdGFwcGluZyB0aGUgcHJpbWFyeSB0ZXh0IG9mIHRoZSBgTGlzdEl0ZW1gXG4gICAqIHRvZ2dsZXMgdGhlIG5lc3RlZCBsaXN0LlxuICAgKi9cbiAgcHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgQXZhdGFyYCBlbGVtZW50IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQgc2lkZS5cbiAgICovXG4gIHJpZ2h0QXZhdGFyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgU3ZnSWNvbmAgb3IgYEZvbnRJY29uYCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqL1xuICByaWdodEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGBJY29uQnV0dG9uYCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqIEhvdmVyaW5nIG92ZXIgdGhpcyBidXR0b24gd2lsbCByZW1vdmUgdGhlIGBMaXN0SXRlbWAgaG92ZXIuXG4gICAqIEFsc28sIGNsaWNraW5nIG9uIHRoaXMgYnV0dG9uIHdpbGwgbm90IHRyaWdnZXIgYVxuICAgKiByaXBwbGUgb24gdGhlIGBMaXN0SXRlbWA7IHRoZSBldmVudCB3aWxsIGJlIHN0b3BwZWQgYW5kIHByZXZlbnRlZFxuICAgKiBmcm9tIGJ1YmJsaW5nIHVwIHRvIGNhdXNlIGEgYExpc3RJdGVtYCBjbGljay5cbiAgICovXG4gIHJpZ2h0SWNvbkJ1dHRvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYFRvZ2dsZWAgZWxlbWVudCB0byBkaXNwbGF5IG9uIHRoZSByaWdodCBzaWRlLlxuICAgKi9cbiAgcmlnaHRUb2dnbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGJsb2NrIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgc2Vjb25kYXJ5IHRleHQuXG4gICAqIElmIGEgc3RyaW5nIGlzIHBhc3NlZCBpbiwgYSBkaXYgdGFnIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBzZWNvbmRhcnlUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBDYW4gYmUgMSBvciAyLiBUaGlzIGlzIHRoZSBudW1iZXIgb2Ygc2Vjb25kYXJ5XG4gICAqIHRleHQgbGluZXMgYmVmb3JlIGVsbGlwc2lzIHdpbGwgc2hvdy5cbiAgICovXG4gIHNlY29uZGFyeVRleHRMaW5lczogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbMSwgMl0pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gTGlzdEl0ZW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9MaXN0SXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9JY29uQnV0dG9uID0gcmVxdWlyZSgnLi9JY29uQnV0dG9uJyk7XG5cbnZhciBfSWNvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uQnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0ljb25CdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9Gb250SWNvbiA9IHJlcXVpcmUoJy4uL0ZvbnRJY29uJyk7XG5cbnZhciBfRm9udEljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9udEljb24pO1xuXG52YXIgX1Rvb2x0aXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9Ub29sdGlwJyk7XG5cbnZhciBfVG9vbHRpcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub29sdGlwKTtcblxudmFyIF9jaGlsZFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hpbGRVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGJhc2VUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lO1xuXG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgcGFkZGluZzogYmFzZVRoZW1lLnNwYWNpbmcuaWNvblNpemUgLyAyLFxuICAgICAgd2lkdGg6IGJhc2VUaGVtZS5zcGFjaW5nLmljb25TaXplICogMixcbiAgICAgIGhlaWdodDogYmFzZVRoZW1lLnNwYWNpbmcuaWNvblNpemUgKiAyLFxuICAgICAgZm9udFNpemU6IDBcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgY29sb3I6IGJhc2VUaGVtZS5wYWxldHRlLmRpc2FibGVkQ29sb3IsXG4gICAgICBmaWxsOiBiYXNlVGhlbWUucGFsZXR0ZS5kaXNhYmxlZENvbG9yLFxuICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICB9XG4gIH07XG59XG5cbnZhciBJY29uQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoSWNvbkJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSWNvbkJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBJY29uQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEljb25CdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEljb25CdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlLFxuICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgLy8gTm90IHRvIGJlIGNvbmZvbmRlZCB3aXRoIHRoZSB0b3VjaCBwcm9wZXJ0eS5cbiAgICAgIC8vIFRoaXMgc3RhdGUgaXMgdG8gZGV0ZXJtaW5lZCBpZiBpdCdzIGEgbW9iaWxlIGRldmljZS5cbiAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgIHRvb2x0aXBTaG93bjogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zaG93VG9vbHRpcCgpO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5idXR0b24uaXNLZXlib2FyZEZvY3VzZWQoKSkge1xuICAgICAgICBfdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgfVxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZU91dCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSBfdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VPdXQpIF90aGlzLnByb3BzLm9uTW91c2VPdXQoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNob3dUb29sdGlwKCk7XG5cbiAgICAgIC8vIENhbmNlbCBob3ZlciBzdHlsZXMgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgIGlmICghX3RoaXMuc3RhdGUudG91Y2gpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2g6IHRydWUgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBvbkZvY3VzID0gX3RoaXMkcHJvcHMub25Gb2N1cyxcbiAgICAgICAgICBvbkJsdXIgPSBfdGhpcyRwcm9wcy5vbkJsdXIsXG4gICAgICAgICAgb25LZXlib2FyZEZvY3VzID0gX3RoaXMkcHJvcHMub25LZXlib2FyZEZvY3VzO1xuXG4gICAgICBpZiAoaXNLZXlib2FyZEZvY3VzZWQgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIF90aGlzLnNob3dUb29sdGlwKCk7XG4gICAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgICBvbkJsdXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IGlzS2V5Ym9hcmRGb2N1c2VkIH0pO1xuICAgICAgaWYgKG9uS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICBvbktleWJvYXJkRm9jdXMoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoSWNvbkJ1dHRvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEtleWJvYXJkRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlib2FyZEZvY3VzKCkge1xuICAgICAgdGhpcy5idXR0b24uc2V0S2V5Ym9hcmRGb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3dUb29sdGlwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1Rvb2x0aXAoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50b29sdGlwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sdGlwU2hvd246IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGlkZVRvb2x0aXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoaWRlVG9vbHRpcCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRvb2x0aXApIHRoaXMuc2V0U3RhdGUoeyB0b29sdGlwU2hvd246IGZhbHNlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBob3ZlcmVkU3R5bGUgPSBfcHJvcHMuaG92ZXJlZFN0eWxlLFxuICAgICAgICAgIGRpc2FibGVUb3VjaFJpcHBsZSA9IF9wcm9wcy5kaXNhYmxlVG91Y2hSaXBwbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgaWNvbkNsYXNzTmFtZSA9IF9wcm9wcy5pY29uQ2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHRvb2x0aXAgPSBfcHJvcHMudG9vbHRpcCxcbiAgICAgICAgICB0b29sdGlwUG9zaXRpb25Qcm9wID0gX3Byb3BzLnRvb2x0aXBQb3NpdGlvbixcbiAgICAgICAgICB0b29sdGlwU3R5bGVzID0gX3Byb3BzLnRvb2x0aXBTdHlsZXMsXG4gICAgICAgICAgdG91Y2ggPSBfcHJvcHMudG91Y2gsXG4gICAgICAgICAgaWNvblN0eWxlID0gX3Byb3BzLmljb25TdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydkaXNhYmxlZCcsICdob3ZlcmVkU3R5bGUnLCAnZGlzYWJsZVRvdWNoUmlwcGxlJywgJ2NoaWxkcmVuJywgJ2ljb25DbGFzc05hbWUnLCAnc3R5bGUnLCAndG9vbHRpcCcsICd0b29sdGlwUG9zaXRpb24nLCAndG9vbHRpcFN0eWxlcycsICd0b3VjaCcsICdpY29uU3R5bGUnXSk7XG5cbiAgICAgIHZhciBmb250aWNvbiA9IHZvaWQgMDtcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgdmFyIHRvb2x0aXBQb3NpdGlvbiA9IHRvb2x0aXBQb3NpdGlvblByb3Auc3BsaXQoJy0nKTtcblxuICAgICAgdmFyIGhvdmVyZWQgPSAodGhpcy5zdGF0ZS5ob3ZlcmVkIHx8IHRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpICYmICFkaXNhYmxlZDtcblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlLCBob3ZlcmVkID8gaG92ZXJlZFN0eWxlIDoge30pO1xuXG4gICAgICB2YXIgdG9vbHRpcEVsZW1lbnQgPSB0b29sdGlwID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Rvb2x0aXAyLmRlZmF1bHQsIHtcbiAgICAgICAgbGFiZWw6IHRvb2x0aXAsXG4gICAgICAgIHNob3c6IHRoaXMuc3RhdGUudG9vbHRpcFNob3duLFxuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRvb2x0aXAsIHRvb2x0aXBTdHlsZXMpLFxuICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb25bMF0sXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogdG9vbHRpcFBvc2l0aW9uWzFdXG4gICAgICB9KSA6IG51bGw7XG5cbiAgICAgIGlmIChpY29uQ2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciBpY29uSG92ZXJDb2xvciA9IGljb25TdHlsZS5pY29uSG92ZXJDb2xvcixcbiAgICAgICAgICAgIGljb25TdHlsZUZvbnRJY29uID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoaWNvblN0eWxlLCBbJ2ljb25Ib3ZlckNvbG9yJ10pO1xuXG5cbiAgICAgICAgZm9udGljb24gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRm9udEljb24yLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lLFxuICAgICAgICAgICAgaG92ZXJDb2xvcjogZGlzYWJsZWQgPyBudWxsIDogaWNvbkhvdmVyQ29sb3IsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBkaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWQsIGljb25TdHlsZUZvbnRJY29uKSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW5TdHlsZSA9IGRpc2FibGVkID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBpY29uU3R5bGUsIHN0eWxlcy5kaXNhYmxlZCkgOiBpY29uU3R5bGU7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmMikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5idXR0b24gPSBfcmVmMjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIG90aGVyLCB7XG4gICAgICAgICAgY2VudGVyUmlwcGxlOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgICBzdHlsZTogbWVyZ2VkUm9vdFN0eWxlcyxcbiAgICAgICAgICBkaXNhYmxlVG91Y2hSaXBwbGU6IGRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VPdXQ6IHRoaXMuaGFuZGxlTW91c2VPdXQsXG4gICAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXNcbiAgICAgICAgfSksXG4gICAgICAgIHRvb2x0aXBFbGVtZW50LFxuICAgICAgICBmb250aWNvbixcbiAgICAgICAgKDAsIF9jaGlsZFV0aWxzLmV4dGVuZENoaWxkcmVuKShjaGlsZHJlbiwge1xuICAgICAgICAgIHN0eWxlOiBjaGlsZHJlblN0eWxlXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSWNvbkJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkljb25CdXR0b24ubXVpTmFtZSA9ICdJY29uQnV0dG9uJztcbkljb25CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogZmFsc2UsXG4gIGljb25TdHlsZToge30sXG4gIHRvb2x0aXBQb3NpdGlvbjogJ2JvdHRvbS1jZW50ZXInLFxuICB0b3VjaDogZmFsc2Vcbn07XG5JY29uQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5JY29uQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIHBhc3MgYSBgRm9udEljb25gIGVsZW1lbnQgYXMgdGhlIGljb24gZm9yIHRoZSBidXR0b24uXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQncyByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlVG91Y2hSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaG92ZXJlZC5cbiAgICovXG4gIGhvdmVyZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBocmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgaWNvbi4gVXNlZCBmb3Igc2V0dGluZyB0aGUgaWNvbiB3aXRoIGEgc3R5bGVzaGVldC5cbiAgICovXG4gIGljb25DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICogTm90ZTogeW91IGNhbiBzcGVjaWZ5IGljb25Ib3ZlckNvbG9yIGFzIGEgU3RyaW5nIGluc2lkZSB0aGlzIG9iamVjdC5cbiAgICovXG4gIGljb25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgYnV0dG9uLlxuICAgKi9cbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQgb3IgYmx1cnJlZCBieSB0aGUga2V5Ym9hcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBgZm9jdXNgIG9yIGBibHVyYCBldmVudCB0YXJnZXRpbmcgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0ga2V5Ym9hcmRGb2N1c2VkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQuXG4gICAqL1xuICBvbktleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlT3V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHN1cHBseSB0byB0aGUgZWxlbWVudCdzIHRvb2x0aXAuXG4gICAqL1xuICB0b29sdGlwOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgdmVydGljYWwgYW5kIGhvcml6b250YWwgcG9zaXRpb25zLCByZXNwZWN0aXZlbHksIG9mIHRoZSBlbGVtZW50J3MgdG9vbHRpcC5cbiAgICogUG9zc2libGUgdmFsdWVzIGFyZTogXCJib3R0b20tY2VudGVyXCIsIFwidG9wLWNlbnRlclwiLCBcImJvdHRvbS1yaWdodFwiLCBcInRvcC1yaWdodFwiLFxuICAgKiBcImJvdHRvbS1sZWZ0XCIsIGFuZCBcInRvcC1sZWZ0XCIuXG4gICAqL1xuICB0b29sdGlwUG9zaXRpb246IF9wcm9wVHlwZXM0LmRlZmF1bHQuY29ybmVyc0FuZENlbnRlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB0b29sdGlwIGVsZW1lbnQuXG4gICAqL1xuICB0b29sdGlwU3R5bGVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGluY3JlYXNlIHRoZSB0b29sdGlwIGVsZW1lbnQncyBzaXplLiBVc2VmdWwgZm9yIGluY3JlYXNpbmcgdG9vbHRpcFxuICAgKiByZWFkYWJpbGl0eSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICovXG4gIHRvdWNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEljb25CdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX0ZvbnRJY29uID0gcmVxdWlyZSgnLi9Gb250SWNvbicpO1xuXG52YXIgX0ZvbnRJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvbnRJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0ZvbnRJY29uMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0ZvbnRJY29uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBob3ZlckNvbG9yID0gcHJvcHMuaG92ZXJDb2xvcjtcbiAgdmFyIGJhc2VUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lO1xuXG4gIHZhciBvZmZDb2xvciA9IGNvbG9yIHx8IGJhc2VUaGVtZS5wYWxldHRlLnRleHRDb2xvcjtcbiAgdmFyIG9uQ29sb3IgPSBob3ZlckNvbG9yIHx8IG9mZkNvbG9yO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgY29sb3I6IHN0YXRlLmhvdmVyZWQgPyBvbkNvbG9yIDogb2ZmQ29sb3IsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGZvbnRTaXplOiBiYXNlVGhlbWUuc3BhY2luZy5pY29uU2l6ZSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKVxuICAgIH1cbiAgfTtcbn1cblxudmFyIEZvbnRJY29uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRm9udEljb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvbnRJY29uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEZvbnRJY29uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEZvbnRJY29uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShGb250SWNvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBob3ZlciBpcyBuZWVkZWQgb25seSB3aGVuIGEgaG92ZXJDb2xvciBpcyBkZWZpbmVkXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaG92ZXJDb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gaG92ZXIgaXMgbmVlZGVkIG9ubHkgd2hlbiBhIGhvdmVyQ29sb3IgaXMgZGVmaW5lZFxuICAgICAgaWYgKF90aGlzLnByb3BzLmhvdmVyQ29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEZvbnRJY29uLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGhvdmVyQ29sb3IgPSBfcHJvcHMuaG92ZXJDb2xvcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF9wcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnaG92ZXJDb2xvcicsICdvbk1vdXNlTGVhdmUnLCAnb25Nb3VzZUVudGVyJywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRm9udEljb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Gb250SWNvbi5tdWlOYW1lID0gJ0ZvbnRJY29uJztcbkZvbnRJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7fVxufTtcbkZvbnRJY29uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Gb250SWNvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBmb250IGNvbG9yIG9mIHRoZSBmb250IGljb24uIElmIG5vdCBzcGVjaWZpZWQsXG4gICAqIHRoaXMgY29tcG9uZW50IHdpbGwgZGVmYXVsdCB0byBtdWlUaGVtZS5wYWxldHRlLnRleHRDb2xvci5cbiAgICovXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGljb24gY29sb3Igd2hlbiB0aGUgbW91c2UgaG92ZXJzIG92ZXIgdGhlIGljb24uXG4gICAqL1xuICBob3ZlckNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9udEljb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvRm9udEljb24vRm9udEljb24uanNcbi8vIG1vZHVsZSBpZCA9IDIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgdmVydGljYWxQb3NpdGlvbiA9IHByb3BzLnZlcnRpY2FsUG9zaXRpb247XG4gIHZhciBob3Jpem9udGFsUG9zaXRpb24gPSBwcm9wcy5ob3Jpem9udGFsUG9zaXRpb247XG4gIHZhciB0b3VjaE1hcmdpbk9mZnNldCA9IHByb3BzLnRvdWNoID8gMTAgOiAwO1xuICB2YXIgdG91Y2hPZmZzZXRUb3AgPSBwcm9wcy50b3VjaCA/IC0yMCA6IC0xMDtcbiAgdmFyIG9mZnNldCA9IHZlcnRpY2FsUG9zaXRpb24gPT09ICdib3R0b20nID8gMTQgKyB0b3VjaE1hcmdpbk9mZnNldCA6IC0xNCAtIHRvdWNoTWFyZ2luT2Zmc2V0O1xuXG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUsXG4gICAgICBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWUsXG4gICAgICB6SW5kZXggPSBfY29udGV4dCRtdWlUaGVtZS56SW5kZXgsXG4gICAgICB0b29sdGlwID0gX2NvbnRleHQkbXVpVGhlbWUudG9vbHRpcCxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9jb250ZXh0JG11aVRoZW1lLmJvcmRlclJhZGl1cztcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBmb250RmFtaWx5OiBiYXNlVGhlbWUuZm9udEZhbWlseSxcbiAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgekluZGV4OiB6SW5kZXgudG9vbHRpcCxcbiAgICAgIGNvbG9yOiB0b29sdGlwLmNvbG9yLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdG9wOiAtMTAwMDAsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICByaWdodDogaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnbGVmdCcgPyAxMiA6IG51bGwsXG4gICAgICBsZWZ0OiBob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInID8gKHN0YXRlLm9mZnNldFdpZHRoIC0gNDgpIC8gMiAqIC0xIDogaG9yaXpvbnRhbFBvc2l0aW9uID09PSAncmlnaHQnID8gMTIgOiBudWxsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzBtcycsICd0b3AnLCAnNDUwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAndHJhbnNmb3JtJywgJzBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICdvcGFjaXR5JywgJzBtcycpXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgPyAnNTAlJyA6IGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2xlZnQnID8gJzEwMCUnIDogJzAlJyxcbiAgICAgIHRvcDogdmVydGljYWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScgPyAwIDogJzEwMCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ3dpZHRoJywgJzQ1MG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzBtcycsICdoZWlnaHQnLCAnNDUwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnYmFja2dyb3VuZENvbG9yJywgJzBtcycpXG4gICAgfSxcbiAgICByb290V2hlblNob3duOiB7XG4gICAgICB0b3A6IHZlcnRpY2FsUG9zaXRpb24gPT09ICd0b3AnID8gdG91Y2hPZmZzZXRUb3AgOiAzNixcbiAgICAgIG9wYWNpdHk6IHRvb2x0aXAub3BhY2l0eSxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsICcgKyBvZmZzZXQgKyAncHgpJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAndG9wJywgJzBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICd0cmFuc2Zvcm0nLCAnMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ29wYWNpdHknLCAnMG1zJylcbiAgICB9LFxuICAgIHJvb3RXaGVuVG91Y2hlZDoge1xuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICAgIHBhZGRpbmc6ICcwIDE2cHgnXG4gICAgfSxcbiAgICByaXBwbGVXaGVuU2hvd246IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdG9vbHRpcC5yaXBwbGVCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnd2lkdGgnLCAnMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ2hlaWdodCcsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnYmFja2dyb3VuZENvbG9yJywgJzBtcycpXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVG9vbHRpcCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBUb29sdGlwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRvb2x0aXAuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRvb2x0aXApKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9mZnNldFdpZHRoOiBudWxsXG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRvb2x0aXAsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0UmlwcGxlU2l6ZSgpO1xuICAgICAgdGhpcy5zZXRUb29sdGlwUG9zaXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zZXRSaXBwbGVTaXplKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UmlwcGxlU2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJpcHBsZVNpemUoKSB7XG4gICAgICB2YXIgcmlwcGxlID0gdGhpcy5yZWZzLnJpcHBsZTtcbiAgICAgIHZhciB0b29sdGlwID0gdGhpcy5yZWZzLnRvb2x0aXA7XG4gICAgICB2YXIgdG9vbHRpcFdpZHRoID0gcGFyc2VJbnQodG9vbHRpcC5vZmZzZXRXaWR0aCwgMTApIC8gKHRoaXMucHJvcHMuaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJyA/IDIgOiAxKTtcbiAgICAgIHZhciB0b29sdGlwSGVpZ2h0ID0gcGFyc2VJbnQodG9vbHRpcC5vZmZzZXRIZWlnaHQsIDEwKTtcblxuICAgICAgdmFyIHJpcHBsZURpYW1ldGVyID0gTWF0aC5jZWlsKE1hdGguc3FydChNYXRoLnBvdyh0b29sdGlwSGVpZ2h0LCAyKSArIE1hdGgucG93KHRvb2x0aXBXaWR0aCwgMikpICogMik7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XG4gICAgICAgIHJpcHBsZS5zdHlsZS5oZWlnaHQgPSByaXBwbGVEaWFtZXRlciArICdweCc7XG4gICAgICAgIHJpcHBsZS5zdHlsZS53aWR0aCA9IHJpcHBsZURpYW1ldGVyICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpcHBsZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICByaXBwbGUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0VG9vbHRpcFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VG9vbHRpcFBvc2l0aW9uKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9mZnNldFdpZHRoOiB0aGlzLnJlZnMudG9vbHRpcC5vZmZzZXRXaWR0aCB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSBfcHJvcHMuaG9yaXpvbnRhbFBvc2l0aW9uLFxuICAgICAgICAgIGxhYmVsID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICAgIHNob3cgPSBfcHJvcHMuc2hvdyxcbiAgICAgICAgICB0b3VjaCA9IF9wcm9wcy50b3VjaCxcbiAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uID0gX3Byb3BzLnZlcnRpY2FsUG9zaXRpb24sXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnaG9yaXpvbnRhbFBvc2l0aW9uJywgJ2xhYmVsJywgJ3Nob3cnLCAndG91Y2gnLCAndmVydGljYWxQb3NpdGlvbiddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICd0b29sdGlwJyxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHRoaXMucHJvcHMuc2hvdyAmJiBzdHlsZXMucm9vdFdoZW5TaG93biwgdGhpcy5wcm9wcy50b3VjaCAmJiBzdHlsZXMucm9vdFdoZW5Ub3VjaGVkLCB0aGlzLnByb3BzLnN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgcmVmOiAncmlwcGxlJyxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJpcHBsZSwgdGhpcy5wcm9wcy5zaG93ICYmIHN0eWxlcy5yaXBwbGVXaGVuU2hvd24pKVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLmxhYmVsKSB9LFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUb29sdGlwO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVG9vbHRpcC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVG9vbHRpcC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGhvcml6b250YWxQb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2xlZnQnLCAncmlnaHQnLCAnY2VudGVyJ10pLFxuICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWQsXG4gIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRvdWNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHZlcnRpY2FsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBUb29sdGlwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmV4dGVuZENoaWxkcmVuID0gZXh0ZW5kQ2hpbGRyZW47XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZXh0ZW5kQ2hpbGRyZW4oY2hpbGRyZW4sIGV4dGVuZGVkUHJvcHMsIGV4dGVuZGVkQ2hpbGRyZW4pIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHZhciBuZXdQcm9wcyA9IHR5cGVvZiBleHRlbmRlZFByb3BzID09PSAnZnVuY3Rpb24nID8gZXh0ZW5kZWRQcm9wcyhjaGlsZCkgOiBleHRlbmRlZFByb3BzO1xuXG4gICAgdmFyIG5ld0NoaWxkcmVuID0gdHlwZW9mIGV4dGVuZGVkQ2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBleHRlbmRlZENoaWxkcmVuKGNoaWxkKSA6IGV4dGVuZGVkQ2hpbGRyZW4gPyBleHRlbmRlZENoaWxkcmVuIDogY2hpbGQucHJvcHMuY2hpbGRyZW47XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3UHJvcHMsIG5ld0NoaWxkcmVuKTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvY2hpbGRVdGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbkV4cGFuZExlc3MgPSBmdW5jdGlvbiBOYXZpZ2F0aW9uRXhwYW5kTGVzcyhwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTIgOGwtNiA2IDEuNDEgMS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTR6JyB9KVxuICApO1xufTtcbk5hdmlnYXRpb25FeHBhbmRMZXNzID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uRXhwYW5kTGVzcyk7XG5OYXZpZ2F0aW9uRXhwYW5kTGVzcy5kaXNwbGF5TmFtZSA9ICdOYXZpZ2F0aW9uRXhwYW5kTGVzcyc7XG5OYXZpZ2F0aW9uRXhwYW5kTGVzcy5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZpZ2F0aW9uRXhwYW5kTGVzcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9leHBhbmQtbGVzcy5qc1xuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbkV4cGFuZE1vcmUgPSBmdW5jdGlvbiBOYXZpZ2F0aW9uRXhwYW5kTW9yZShwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eicgfSlcbiAgKTtcbn07XG5OYXZpZ2F0aW9uRXhwYW5kTW9yZSA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoTmF2aWdhdGlvbkV4cGFuZE1vcmUpO1xuTmF2aWdhdGlvbkV4cGFuZE1vcmUuZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvbkV4cGFuZE1vcmUnO1xuTmF2aWdhdGlvbkV4cGFuZE1vcmUubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkV4cGFuZE1vcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vZXhwYW5kLW1vcmUuanNcbi8vIG1vZHVsZSBpZCA9IDIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfTGlzdCA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuXG52YXIgX0xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOZXN0ZWRMaXN0ID0gZnVuY3Rpb24gTmVzdGVkTGlzdChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgbmVzdGVkTGV2ZWwgPSBwcm9wcy5uZXN0ZWRMZXZlbCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG5cblxuICBpZiAoIW9wZW4pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfTGlzdDIuZGVmYXVsdCxcbiAgICB7IHN0eWxlOiBzdHlsZSB9LFxuICAgIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSA/ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBuZXN0ZWRMZXZlbDogbmVzdGVkTGV2ZWwgKyAxXG4gICAgICB9KSA6IGNoaWxkO1xuICAgIH0pXG4gICk7XG59O1xuXG5OZXN0ZWRMaXN0LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgbmVzdGVkTGV2ZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOZXN0ZWRMaXN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0xpc3QvTmVzdGVkTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMjA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=