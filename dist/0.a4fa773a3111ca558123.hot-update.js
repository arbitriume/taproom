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

var _TextField = __webpack_require__(207);

var _TextField2 = _interopRequireDefault(_TextField);

var _Popover = __webpack_require__(173);

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginMenu = function (_React$Component) {
    _inherits(LoginMenu, _React$Component);

    function LoginMenu() {
        _classCallCheck(this, LoginMenu);

        return _possibleConstructorReturn(this, (LoginMenu.__proto__ || Object.getPrototypeOf(LoginMenu)).apply(this, arguments));
    }

    _createClass(LoginMenu, [{
        key: 'render',


        /* constructor(props) {
             super(props);
              //this.state = {
                // this.open: this.props.open
             //};
              //this.handleTouchTap = this.handleTouchTap.bind(this);
             //this.handleRequestClose = this.handleRequestClose.bind(this);
         }
          /*handleTouchTap(event) {
             // This prevents ghost click.
             event.preventDefault();
              this.setState({
                 open: true,
                 anchorEl: event.currentTarget,
             });
         };*/

        /*handleRequestClose() {
            this.setState({
                open: false,
            });
        };*/

        value: function render() {
            debugger;

            return _react2.default.createElement(
                _Popover2.default,
                {
                    open: this.props.open,
                    anchorEl: this.props.anchor,
                    anchorOrigin: { horizontal: 'middle', vertical: 'bottom' },
                    targetOrigin: { horizontal: 'middle', vertical: 'top' },
                    canAutoPosition: true,
                    onRequestClose: this.props.handleRequestClose,
                    animation: _Popover.PopoverAnimationVertical
                },
                _react2.default.createElement(_TextField2.default, {
                    floatingLabelText: 'Username'
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_TextField2.default, {
                    floatingLabelText: 'Password'
                }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(_RaisedButton2.default, { label: 'Full width', fullWidth: true })
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

/***/ }),
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__(258);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */
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

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__(259);

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__(260);

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__(261);

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__(262);

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__(85);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: props.disabled ? 'not-allowed' : 'auto'
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none'
    },
    input: {
      padding: 0,
      position: 'relative',
      width: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: 'inherit',
      font: 'inherit',
      WebkitOpacity: 1,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' // Remove mobile color flashing (deprecated style).
    },
    inputNative: {
      appearance: 'textfield' // Improve type search style.
    }
  };

  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  // Do not assign a height to the textarea as he handles it on his own.
  styles.input.height = '100%';

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      errorText: undefined,
      hasValue: false
    }, _this.handleInputBlur = function (event) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleInputChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.setState({ hasValue: isValid(event.target.value) });
      }
      if (_this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleHeightChange = function (event, height) {
      var newHeight = height + 24;
      if (_this.props.floatingLabelText) {
        newHeight += 24;
      }
      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText,
          id = _props.id;


      var propsLeaf = children ? children.props : this.props;

      this.setState({
        errorText: this.props.errorText,
        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
      });

      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled && !this.props.disabled) {
        this.setState({
          isFocused: false
        });
      }

      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }

      if (nextProps.children && nextProps.children.props) {
        nextProps = nextProps.children.props;
      }

      if (nextProps.hasOwnProperty('value')) {
        var hasValue = isValid(nextProps.value);

        this.setState({
          hasValue: hasValue
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.getInputNode().blur();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.getInputNode().focus();
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) {
        this.getInputNode().select();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
    }
  }, {
    key: '_isControlled',
    value: function _isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          fullWidth = _props2.fullWidth,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          id = _props2.id,
          inputStyle = _props2.inputStyle,
          multiLine = _props2.multiLine,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          type = _props2.type,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          rows = _props2.rows,
          rowsMax = _props2.rowsMax,
          textareaStyle = _props2.textareaStyle,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = id || this.uniqueId;

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
          shrinkStyle: floatingLabelShrinkStyle,
          htmlFor: inputId,
          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
          disabled: disabled
        },
        floatingLabelText
      );

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          return _this2.input = elem;
        },
        disabled: this.props.disabled,
        onBlur: this.handleInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus
      };

      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);

      var inputElement = void 0;
      if (children) {
        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
        }));
      } else {
        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
          style: childStyleMerged,
          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
          rows: rows,
          rowsMax: rowsMax,
          hintText: hintText
        }, other, inputProps, {
          onHeightChange: this.handleHeightChange
        })) : _react2.default.createElement('input', (0, _extends3.default)({
          type: type,
          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
        }, other, inputProps));
      }

      var rootProps = {};

      if (children) {
        rootProps = other;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, rootProps, {
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }),
        floatingLabelTextElement,
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
          style: hintStyle,
          text: hintText
        }) : null,
        inputElement,
        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }) : null,
        errorTextElement
      );
    }
  }]);
  return TextField;
}(_react.Component);

TextField.defaultProps = {
  disabled: false,
  floatingLabelFixed: false,
  multiLine: false,
  fullWidth: false,
  type: 'text',
  underlineShow: true,
  rows: 1
};
TextField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The text string to use for the default value.
   */
  defaultValue: _propTypes2.default.any,
  /**
   * Disables the text field if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The style object to use to override error styles.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when there is no value.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * The style object to use to override floating label styles when focused.
   */
  floatingLabelFocusStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles when shrunk.
   */
  floatingLabelShrinkStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content to use for the floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property width 100%.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's hint text element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */
  multiLine: _propTypes2.default.bool,
  /**
   * Name applied to the input.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the textfield's value changes.
   *
   * @param {object} event Change event targeting the text field.
   * @param {string} newValue The new value of the text field.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Number of rows to display when multiLine option is set to true.
   */
  rows: _propTypes2.default.number,
  /**
   * Maximum number of rows to display when
   * multiLine option is set to true.
   */
  rowsMax: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */
  textareaStyle: _propTypes2.default.object,
  /**
   * Specifies the type of input to display
   * such as "password" or "text".
   */
  type: _propTypes2.default.string,
  /**
   * Override the inline-styles of the
   * TextField's underline element when disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's
   * underline element when focussed.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * If true, shows the underline for the text field.
   */
  underlineShow: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * The value of the text field.
   */
  value: _propTypes2.default.any
} : {};
exports.default = TextField;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 259 */
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

var _reactEventListener = __webpack_require__(174);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowsHeight = 24;

function getStyles(props, context, state) {
  return {
    root: {
      position: 'relative' // because the shadow has position: 'absolute'
    },
    textarea: {
      height: state.height,
      width: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit'
    },
    shadow: {
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'auto'
    }
  };
}

var EnhancedTextarea = function (_Component) {
  (0, _inherits3.default)(EnhancedTextarea, _Component);

  function EnhancedTextarea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.handleResize = function (event) {
      _this.syncHeightWithShadow(_this.props.value, event);
    }, _this.handleChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.syncHeightWithShadow(event.target.value);
      }

      if (_this.props.hasOwnProperty('valueLink')) {
        _this.props.valueLink.requestChange(event.target.value);
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedTextarea, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        height: this.props.rows * rowsHeight
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncHeightWithShadow(this.props.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
        this.syncHeightWithShadow(nextProps.value, null, nextProps);
      }
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.refs.input;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getInputNode().value = value;
      this.syncHeightWithShadow(value);
    }
  }, {
    key: 'syncHeightWithShadow',
    value: function syncHeightWithShadow(newValue, event, props) {
      var shadow = this.refs.shadow;
      var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;

      if (displayText !== undefined) {
        shadow.value = displayText;
      }

      var newHeight = shadow.scrollHeight;

      // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013
      if (newHeight === undefined) return;

      props = props || this.props;

      if (props.rowsMax >= props.rows) {
        newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
      }

      newHeight = Math.max(newHeight, rowsHeight);

      if (this.state.height !== newHeight) {
        var input = this.refs.input;
        var cursorPosition = input.selectionStart;
        this.setState({
          height: newHeight
        }, function () {
          input.setSelectionRange(cursorPosition, cursorPosition);
        });

        if (props.onHeightChange) {
          props.onHeightChange(event, newHeight);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          onHeightChange = _props.onHeightChange,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          shadowStyle = _props.shadowStyle,
          style = _props.style,
          hintText = _props.hintText,
          textareaStyle = _props.textareaStyle,
          valueLink = _props.valueLink,
          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
      var props = {};

      if (this.props.hasOwnProperty('valueLink')) {
        other.value = valueLink.value;
        props.valueLink = valueLink;
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(rootStyles) },
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement('textarea', (0, _extends3.default)({
          ref: 'shadow',
          style: prepareStyles(shadowStyles),
          tabIndex: '-1',
          rows: this.props.rows,
          defaultValue: this.props.defaultValue,
          readOnly: true,
          value: this.props.value
        }, props)),
        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
          ref: 'input',
          rows: this.props.rows,
          style: prepareStyles(textareaStyles),
          onChange: this.handleChange
        }))
      );
    }
  }]);
  return EnhancedTextarea;
}(_react.Component);

EnhancedTextarea.defaultProps = {
  rows: 1
};
EnhancedTextarea.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedTextarea.propTypes = process.env.NODE_ENV !== "production" ? {
  defaultValue: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  hintText: _propTypes2.default.node,
  onChange: _propTypes2.default.func,
  onHeightChange: _propTypes2.default.func,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number,
  shadowStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  textareaStyle: _propTypes2.default.object,
  value: _propTypes2.default.string,
  valueLink: _propTypes2.default.object
} : {};
exports.default = EnhancedTextarea;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor,
      show = props.show;


  return {
    root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }
  };
}

var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles,
      style = props.style,
      text = props.text;


  var styles = getStyles(props);

  return _react2.default.createElement(
    'div',
    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
    text
  );
};

TextFieldHint.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * True if the hint text should be visible.
   */
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The hint text displayed.
   */
  text: _propTypes2.default.node
} : {};

TextFieldHint.defaultProps = {
  show: true
};

exports.default = TextFieldHint;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    top: 38,
    transition: _transitions2.default.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, props.shrinkStyle) : null;

  return {
    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
  };
}

var TextFieldLabel = function TextFieldLabel(props) {
  var muiTheme = props.muiTheme,
      className = props.className,
      children = props.children,
      htmlFor = props.htmlFor,
      onClick = props.onClick;
  var prepareStyles = muiTheme.prepareStyles;

  var styles = getStyles(props);

  return _react2.default.createElement(
    'label',
    {
      className: className,
      style: prepareStyles(styles.root),
      htmlFor: htmlFor,
      onClick: onClick
    },
    children
  );
};

TextFieldLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The label contents.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the label if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: _propTypes2.default.string,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the text field label.
   */
  onClick: _propTypes2.default.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when shrunk.
   */
  shrinkStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

TextFieldLabel.defaultProps = {
  disabled: false,
  shrink: false
};

exports.default = TextFieldLabel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(45);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(49);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * True if the parent `TextField` is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` has an error.
   */
  error: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` is focused.
   */
  focus: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: _propTypes2.default.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

var defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {}
};

var TextFieldUnderline = function TextFieldUnderline(props) {
  var disabled = props.disabled,
      disabledStyle = props.disabledStyle,
      error = props.error,
      errorStyle = props.errorStyle,
      focus = props.focus,
      focusStyle = props.focusStyle,
      muiTheme = props.muiTheme,
      style = props.style;
  var errorStyleColor = errorStyle.color;
  var prepareStyles = muiTheme.prepareStyles,
      _muiTheme$textField = muiTheme.textField,
      borderColor = _muiTheme$textField.borderColor,
      disabledTextColor = _muiTheme$textField.disabledTextColor,
      errorColor = _muiTheme$textField.errorColor,
      focusColor = _muiTheme$textField.focusColor;


  var styles = {
    root: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%'
    },
    disabled: {
      borderBottomStyle: 'dotted',
      borderBottomWidth: 2,
      borderColor: disabledTextColor
    },
    focus: {
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: _transitions2.default.easeOut()
    },
    error: {
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
      transform: 'scaleX(1)'
    }
  };

  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);

  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(underline) }),
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(focusedUnderline) })
  );
};

TextFieldUnderline.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TextFieldUnderline.defaultProps = defaultProps;

exports.default = TextFieldUnderline;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
]))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2ltcGxlLWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3R5bGVzL3RyYW5zaXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9wcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BhcGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvYXV0b1ByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3B1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1N2Z0ljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tleWNvZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL01lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9MaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51SXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3NldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvd3JhcERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0ZvY3VzUmlwcGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jaGFpbi1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1NjYWxlSW5DaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvVG91Y2hSaXBwbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL0NpcmNsZVJpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUGFwZXIvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWV2ZW50LWxpc3RlbmVyL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlbnQtbGlzdGVuZXIvbGliL3N1cHBvcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9SZW5kZXJUb0xheWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGlja0F3YXlMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU3ViaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9TdWJoZWFkZXIvU3ViaGVhZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9NZW51L21lbnVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudUl0ZW0vTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvc2hvdWxkVXBkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvc2V0U3RhdGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWNvbXBvc2UvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1N2Z0ljb24vU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Gb250SWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvRm9udEljb24vRm9udEljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3V0aWxzL2NoaWxkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2V4cGFuZC1sZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9leHBhbmQtbW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTGlzdC9OZXN0ZWRMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RleHRGaWVsZC9FbmhhbmNlZFRleHRhcmVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkSGludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZExhYmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkVW5kZXJsaW5lLmpzIl0sIm5hbWVzIjpbIkxvZ2luTWVudSIsInByb3BzIiwib3BlbiIsImFuY2hvciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImhhbmRsZVJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7O0FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQzs7Ozs7O2lDQU1TO0FBQ0w7O0FBRUEsbUJBRVE7QUFBQTtBQUFBO0FBQ0ksMEJBQU0sS0FBS0MsS0FBTCxDQUFXQyxJQURyQjtBQUVJLDhCQUFVLEtBQUtELEtBQUwsQ0FBV0UsTUFGekI7QUFHSSxrQ0FBYyxFQUFDQyxZQUFZLFFBQWIsRUFBdUJDLFVBQVUsUUFBakMsRUFIbEI7QUFJSSxrQ0FBYyxFQUFDRCxZQUFZLFFBQWIsRUFBdUJDLFVBQVUsS0FBakMsRUFKbEI7QUFLSSxxQ0FBaUIsSUFMckI7QUFNSSxvQ0FBZ0IsS0FBS0osS0FBTCxDQUFXSyxrQkFOL0I7QUFPSTtBQVBKO0FBU0E7QUFDSSx1Q0FBa0I7QUFEdEIsa0JBVEE7QUFXRSx5REFYRjtBQVlBO0FBQ0ksdUNBQWtCO0FBRHRCLGtCQVpBO0FBY0UseURBZEY7QUFlQSx5REFmQTtBQWdCQSx3RUFBYyxPQUFNLFlBQXBCLEVBQWlDLFdBQVcsSUFBNUM7QUFoQkEsYUFGUjtBQXNCSDs7OztFQXREa0MsZ0JBQU1DLFM7O2tCQUF4QlAsUzs7Ozs7Ozs7Ozs7QUNSckI7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7O0FDZEE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7OztBQ3RCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsRTs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHlDOzs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NiQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLG9CQUFvQixxQkFBcUIsU0FBUzs7QUFFM0k7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQyxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpQzs7Ozs7Ozs7QUM1WUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7K0NDVEE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUI7Ozs7Ozs7O0FDbENBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLG9DOzs7Ozs7QUNiQSxrQkFBa0IseUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTSxVQUFVLE9BQU8sYUFBYTtBQUMvQyxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLFNBQVM7O0FBRXJCO0FBQ0EsZ0JBQWdCLFFBQVE7O0FBRXhCO0FBQ0EsV0FBVyxRQUFROztBQUVuQjtBQUNBLFdBQVcsUUFBUTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OytDQ2pKQTs7QUFFQTs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVDQUF1QztBQUN2QztBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwwQjs7Ozs7Ozs7K0NDNWdCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxTQUFTLG9DQUFvQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUI7Ozs7Ozs7OytDQ3BzQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVUsd0VBQXdFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUI7Ozs7Ozs7O0FDM0dBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHFDOzs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7OztBQ2RBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix5Qzs7Ozs7OzsrQ0NiQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtR0FBbUc7QUFDNUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7QUNwZUE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7O0FBRUEsMENBQTBDLG1DQUFzQzs7Ozs7Ozs7O0FDSGhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVLEVBQUU7QUFDaEQsbUJBQW1CLHNDQUFzQztBQUN6RCxDQUFDLHFDQUFxQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhCOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N0VEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLDJFQUEyRSxVQUFVLHFDQUFxQztBQUMxSDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7OytDQzNLQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVUsd0VBQXdFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx3Qjs7Ozs7Ozs7QUN0SkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG9DOzs7Ozs7OytDQ25CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdDOzs7Ozs7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMkI7Ozs7Ozs7OytDQzdKQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsOEVBQThFO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0Qjs7Ozs7Ozs7K0NDOWtCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFF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aEQsdURBQXVEOztBQUV2RCwwREFBMEQ7QUFDMUQsOERBQThELHFCQUFxQix5QkFBeUI7QUFDNUcsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseURBQXlEO0FBQ2xHLHlDQUF5QyxnRUFBZ0U7QUFDekc7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDIiwiZmlsZSI6IjAuYTRmYTc3M2EzMTExY2E1NTgxMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ21hdGVyaWFsLXVpL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcbmltcG9ydCBQb3BvdmVyLCB7UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfSBmcm9tICdtYXRlcmlhbC11aS9Qb3BvdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgLyogY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgLy8gdGhpcy5vcGVuOiB0aGlzLnByb3BzLm9wZW5cbiAgICAgICAgLy99O1xuXG4gICAgICAgIC8vdGhpcy5oYW5kbGVUb3VjaFRhcCA9IHRoaXMuaGFuZGxlVG91Y2hUYXAuYmluZCh0aGlzKTtcbiAgICAgICAgLy90aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLypoYW5kbGVUb3VjaFRhcChldmVudCkge1xuICAgICAgICAvLyBUaGlzIHByZXZlbnRzIGdob3N0IGNsaWNrLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB9KTtcbiAgICB9OyovXG5cbiAgICAvKmhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTsqL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkZWJ1Z2dlcjtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5vcGVufVxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5wcm9wcy5hbmNob3J9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e2hvcml6b250YWw6ICdtaWRkbGUnLCB2ZXJ0aWNhbDogJ2JvdHRvbSd9fVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRPcmlnaW49e3tob3Jpem9udGFsOiAnbWlkZGxlJywgdmVydGljYWw6ICd0b3AnfX1cbiAgICAgICAgICAgICAgICAgICAgY2FuQXV0b1Bvc2l0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVSZXF1ZXN0Q2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17UG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAvPjxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gbGFiZWw9XCJGdWxsIHdpZHRoXCIgZnVsbFdpZHRoPXt0cnVlfSAvPlxuXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi9jb21wb25lbnRzL0xvZ2luTWVudS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaW1wbGUtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICBlYXNlT3V0RnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLFxuICBlYXNlSW5PdXRGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjQ0NSwgMC4wNSwgMC41NSwgMC45NSknLFxuXG4gIGVhc2VPdXQ6IGZ1bmN0aW9uIGVhc2VPdXQoZHVyYXRpb24sIHByb3BlcnR5LCBkZWxheSwgZWFzZUZ1bmN0aW9uKSB7XG4gICAgZWFzZUZ1bmN0aW9uID0gZWFzZUZ1bmN0aW9uIHx8IHRoaXMuZWFzZU91dEZ1bmN0aW9uO1xuXG4gICAgaWYgKHByb3BlcnR5ICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9wZXJ0eSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHZhciB0cmFuc2l0aW9ucyA9ICcnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHJhbnNpdGlvbnMpIHRyYW5zaXRpb25zICs9ICcsJztcbiAgICAgICAgdHJhbnNpdGlvbnMgKz0gdGhpcy5jcmVhdGUoZHVyYXRpb24sIHByb3BlcnR5W2ldLCBkZWxheSwgZWFzZUZ1bmN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zaXRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGUoZHVyYXRpb24sIHByb3BlcnR5LCBkZWxheSwgZWFzZUZ1bmN0aW9uKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGR1cmF0aW9uLCBwcm9wZXJ0eSwgZGVsYXksIGVhc2VGdW5jdGlvbikge1xuICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgJzQ1MG1zJztcbiAgICBwcm9wZXJ0eSA9IHByb3BlcnR5IHx8ICdhbGwnO1xuICAgIGRlbGF5ID0gZGVsYXkgfHwgJzBtcyc7XG4gICAgZWFzZUZ1bmN0aW9uID0gZWFzZUZ1bmN0aW9uIHx8ICdsaW5lYXInO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5ICsgJyAnICsgZHVyYXRpb24gKyAnICcgKyBlYXNlRnVuY3Rpb24gKyAnICcgKyBkZWxheTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdHlsZXMvdHJhbnNpdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBob3Jpem9udGFsID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2xlZnQnLCAnbWlkZGxlJywgJ3JpZ2h0J10pO1xudmFyIHZlcnRpY2FsID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJ10pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgY29ybmVyczogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXSksXG5cbiAgaG9yaXpvbnRhbDogaG9yaXpvbnRhbCxcblxuICB2ZXJ0aWNhbDogdmVydGljYWwsXG5cbiAgb3JpZ2luOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBob3Jpem9udGFsOiBob3Jpem9udGFsLFxuICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbFxuICB9KSxcblxuICBjb3JuZXJzQW5kQ2VudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYm90dG9tLWNlbnRlcicsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWNlbnRlcicsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXSksXG5cbiAgc3RyaW5nT3JOdW1iZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcblxuICB6RGVwdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWzAsIDEsIDIsIDMsIDQsIDVdKVxuXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3V0aWxzL3Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ2ZianMvbGliL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9zaGFsbG93RXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9QYXBlcjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9QYXBlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZXZlbnRzJyk7XG5cbnZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX0ZvY3VzUmlwcGxlID0gcmVxdWlyZSgnLi9Gb2N1c1JpcHBsZScpO1xuXG52YXIgX0ZvY3VzUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvY3VzUmlwcGxlKTtcblxudmFyIF9Ub3VjaFJpcHBsZSA9IHJlcXVpcmUoJy4vVG91Y2hSaXBwbGUnKTtcblxudmFyIF9Ub3VjaFJpcHBsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub3VjaFJpcHBsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZUluamVjdGVkID0gZmFsc2U7XG52YXIgbGlzdGVuaW5nID0gZmFsc2U7XG52YXIgdGFiUHJlc3NlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbmplY3RTdHlsZSgpIHtcbiAgaWYgKCFzdHlsZUluamVjdGVkKSB7XG4gICAgLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gJ1xcbiAgICAgIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgICBpbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIH1cXG4gICAgJztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHN0eWxlSW5qZWN0ZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RlbkZvclRhYlByZXNzZXMoKSB7XG4gIGlmICghbGlzdGVuaW5nKSB7XG4gICAgX2V2ZW50czIuZGVmYXVsdC5vbih3aW5kb3csICdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0YWJQcmVzc2VkID0gKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICd0YWInO1xuICAgIH0pO1xuICAgIGxpc3RlbmluZyA9IHRydWU7XG4gIH1cbn1cblxudmFyIEVuaGFuY2VkQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRW5oYW5jZWRCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEVuaGFuY2VkQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEVuaGFuY2VkQnV0dG9uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZUtleWJvYXJkRm9jdXMpIHtcbiAgICAgICAgaWYgKCgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpID09PSAnZW50ZXInICYmIF90aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlVG91Y2hUYXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSA9PT0gJ2VzYycgJiYgX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgICBfdGhpcy5yZW1vdmVLZXlib2FyZEZvY3VzKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3RoaXMucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZUtleWJvYXJkRm9jdXMpIHtcbiAgICAgICAgaWYgKCgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpID09PSAnc3BhY2UnICYmIF90aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgICAgX3RoaXMuaGFuZGxlVG91Y2hUYXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5wcm9wcy5vbktleVVwKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5jYW5jZWxGb2N1c1RpbWVvdXQoKTtcbiAgICAgIF90aGlzLnJlbW92ZUtleWJvYXJkRm9jdXMoZXZlbnQpO1xuICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSBldmVudC5wZXJzaXN0KCk7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICAvLyBzZXRUaW1lb3V0IGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBmb2N1cyBldmVudCBmaXJlcyBmaXJzdFxuICAgICAgICAvLyBXYWl0IHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgaWYgdGhpcyB3YXMgYSBrZXlib2FyZCBmb2N1c1xuICAgICAgICAvLyBvciB0b3VjaCBmb2N1c1xuICAgICAgICBfdGhpcy5mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGFiUHJlc3NlZCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0S2V5Ym9hcmRGb2N1cyhldmVudCk7XG4gICAgICAgICAgICB0YWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxNTApO1xuXG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5jYW5jZWxGb2N1c1RpbWVvdXQoKTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5yZW1vdmVLZXlib2FyZEZvY3VzKGV2ZW50KTtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzID0gX3Byb3BzLmRpc2FibGVLZXlib2FyZEZvY3VzLFxuICAgICAgICAgIGtleWJvYXJkRm9jdXNlZCA9IF9wcm9wcy5rZXlib2FyZEZvY3VzZWQ7XG5cbiAgICAgIGlmICghZGlzYWJsZWQgJiYga2V5Ym9hcmRGb2N1c2VkICYmICFkaXNhYmxlS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGluamVjdFN0eWxlKCk7XG4gICAgICBsaXN0ZW5Gb3JUYWJQcmVzc2VzKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5mb2N1cygpO1xuICAgICAgICB0aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhudWxsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICgobmV4dFByb3BzLmRpc2FibGVkIHx8IG5leHRQcm9wcy5kaXNhYmxlS2V5Ym9hcmRGb2N1cykgJiYgdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAobmV4dFByb3BzLm9uS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICAgIG5leHRQcm9wcy5vbktleWJvYXJkRm9jdXMobnVsbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmZvY3VzVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzS2V5Ym9hcmRGb2N1c2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNLZXlib2FyZEZvY3VzZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVLZXlib2FyZEZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlS2V5Ym9hcmRGb2N1cyhldmVudCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbktleWJvYXJkRm9jdXMoZXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRLZXlib2FyZEZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5Ym9hcmRGb2N1cyhldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbktleWJvYXJkRm9jdXMoZXZlbnQsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbmNlbEZvY3VzVGltZW91dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbEZvY3VzVGltZW91dCgpIHtcbiAgICAgIGlmICh0aGlzLmZvY3VzVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmZvY3VzVGltZW91dCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQnV0dG9uQ2hpbGRyZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdXR0b25DaGlsZHJlbigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjZW50ZXJSaXBwbGUgPSBfcHJvcHMyLmNlbnRlclJpcHBsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wczIuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzID0gX3Byb3BzMi5kaXNhYmxlS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlVG91Y2hSaXBwbGUgPSBfcHJvcHMyLmRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yID0gX3Byb3BzMi5mb2N1c1JpcHBsZUNvbG9yLFxuICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eSA9IF9wcm9wczIuZm9jdXNSaXBwbGVPcGFjaXR5LFxuICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3IgPSBfcHJvcHMyLnRvdWNoUmlwcGxlQ29sb3IsXG4gICAgICAgICAgdG91Y2hSaXBwbGVPcGFjaXR5ID0gX3Byb3BzMi50b3VjaFJpcHBsZU9wYWNpdHk7XG4gICAgICB2YXIgaXNLZXlib2FyZEZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkO1xuXG4gICAgICAvLyBGb2N1cyBSaXBwbGVcblxuICAgICAgdmFyIGZvY3VzUmlwcGxlID0gaXNLZXlib2FyZEZvY3VzZWQgJiYgIWRpc2FibGVkICYmICFkaXNhYmxlRm9jdXNSaXBwbGUgJiYgIWRpc2FibGVLZXlib2FyZEZvY3VzID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0ZvY3VzUmlwcGxlMi5kZWZhdWx0LCB7XG4gICAgICAgIGNvbG9yOiBmb2N1c1JpcHBsZUNvbG9yLFxuICAgICAgICBvcGFjaXR5OiBmb2N1c1JpcHBsZU9wYWNpdHksXG4gICAgICAgIHNob3c6IGlzS2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICB9LFxuICAgICAgICBrZXk6ICdmb2N1c1JpcHBsZSdcbiAgICAgIH0pIDogdW5kZWZpbmVkO1xuXG4gICAgICAvLyBUb3VjaCBSaXBwbGVcbiAgICAgIHZhciB0b3VjaFJpcHBsZSA9ICFkaXNhYmxlZCAmJiAhZGlzYWJsZVRvdWNoUmlwcGxlID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9Ub3VjaFJpcHBsZTIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGNlbnRlclJpcHBsZTogY2VudGVyUmlwcGxlLFxuICAgICAgICAgIGNvbG9yOiB0b3VjaFJpcHBsZUNvbG9yLFxuICAgICAgICAgIG9wYWNpdHk6IHRvdWNoUmlwcGxlT3BhY2l0eSxcbiAgICAgICAgICBrZXk6ICd0b3VjaFJpcHBsZSdcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiBbZm9jdXNSaXBwbGUsIHRvdWNoUmlwcGxlLCB0b3VjaFJpcHBsZSA/IHVuZGVmaW5lZCA6IGNoaWxkcmVuXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNlbnRlclJpcHBsZSA9IF9wcm9wczMuY2VudGVyUmlwcGxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50ID0gX3Byb3BzMy5jb250YWluZXJFbGVtZW50LFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMzLmRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgICAgICBkaXNhYmxlS2V5Ym9hcmRGb2N1cyA9IF9wcm9wczMuZGlzYWJsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlID0gX3Byb3BzMy5kaXNhYmxlVG91Y2hSaXBwbGUsXG4gICAgICAgICAgZm9jdXNSaXBwbGVDb2xvciA9IF9wcm9wczMuZm9jdXNSaXBwbGVDb2xvcixcbiAgICAgICAgICBmb2N1c1JpcHBsZU9wYWNpdHkgPSBfcHJvcHMzLmZvY3VzUmlwcGxlT3BhY2l0eSxcbiAgICAgICAgICBocmVmID0gX3Byb3BzMy5ocmVmLFxuICAgICAgICAgIGtleWJvYXJkRm9jdXNlZCA9IF9wcm9wczMua2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3IgPSBfcHJvcHMzLnRvdWNoUmlwcGxlQ29sb3IsXG4gICAgICAgICAgdG91Y2hSaXBwbGVPcGFjaXR5ID0gX3Byb3BzMy50b3VjaFJpcHBsZU9wYWNpdHksXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzMy5vbkJsdXIsXG4gICAgICAgICAgb25DbGljayA9IF9wcm9wczMub25DbGljayxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzMy5vbkZvY3VzLFxuICAgICAgICAgIG9uS2V5VXAgPSBfcHJvcHMzLm9uS2V5VXAsXG4gICAgICAgICAgb25LZXlEb3duID0gX3Byb3BzMy5vbktleURvd24sXG4gICAgICAgICAgb25LZXlib2FyZEZvY3VzID0gX3Byb3BzMy5vbktleWJvYXJkRm9jdXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMzLnN0eWxlLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3Byb3BzMy50YWJJbmRleCxcbiAgICAgICAgICB0eXBlID0gX3Byb3BzMy50eXBlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMywgWydjZW50ZXJSaXBwbGUnLCAnY2hpbGRyZW4nLCAnY29udGFpbmVyRWxlbWVudCcsICdkaXNhYmxlZCcsICdkaXNhYmxlRm9jdXNSaXBwbGUnLCAnZGlzYWJsZUtleWJvYXJkRm9jdXMnLCAnZGlzYWJsZVRvdWNoUmlwcGxlJywgJ2ZvY3VzUmlwcGxlQ29sb3InLCAnZm9jdXNSaXBwbGVPcGFjaXR5JywgJ2hyZWYnLCAna2V5Ym9hcmRGb2N1c2VkJywgJ3RvdWNoUmlwcGxlQ29sb3InLCAndG91Y2hSaXBwbGVPcGFjaXR5JywgJ29uQmx1cicsICdvbkNsaWNrJywgJ29uRm9jdXMnLCAnb25LZXlVcCcsICdvbktleURvd24nLCAnb25LZXlib2FyZEZvY3VzJywgJ3N0eWxlJywgJ3RhYkluZGV4JywgJ3R5cGUnXSk7XG4gICAgICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgcHJlcGFyZVN0eWxlcyA9IF9jb250ZXh0JG11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICAgICAgZW5oYW5jZWRCdXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5lbmhhbmNlZEJ1dHRvbjtcblxuXG4gICAgICB2YXIgbWVyZ2VkU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgYm9yZGVyOiAxMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBmb250RmFtaWx5OiB0aGlzLmNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiBlbmhhbmNlZEJ1dHRvbi50YXBIaWdobGlnaHRDb2xvciwgLy8gUmVtb3ZlIG1vYmlsZSBjb2xvciBmbGFzaGluZyAoZGVwcmVjYXRlZClcbiAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsIC8vIFRoaXMgaXMgbmVlZGVkIHNvIHRoYXQgcmlwcGxlcyBkbyBub3QgYmxlZWQgcGFzdCBib3JkZXIgcmFkaXVzLlxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBocmVmID8gJ21pZGRsZScgOiBudWxsXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIC8vIFBhc3NpbmcgYm90aCBiYWNrZ3JvdW5kOm5vbmUgJiBiYWNrZ3JvdW5kQ29sb3IgY2FuIGJyZWFrIGR1ZSB0byBvYmplY3QgaXRlcmF0aW9uIG9yZGVyXG4gICAgICBpZiAoIW1lcmdlZFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgJiYgIW1lcmdlZFN0eWxlcy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIG1lcmdlZFN0eWxlcy5iYWNrZ3JvdW5kID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlzYWJsZWQgJiYgaHJlZikge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgICBzdHlsZTogbWVyZ2VkU3R5bGVzXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJ1dHRvblByb3BzID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkU3R5bGVzKSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYnV0dG9uID0gbm9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVLZXlVcCxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG91Y2hUYXAsXG4gICAgICAgIHRhYkluZGV4OiBkaXNhYmxlZCB8fCBkaXNhYmxlS2V5Ym9hcmRGb2N1cyA/IC0xIDogdGFiSW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaHJlZikgYnV0dG9uUHJvcHMuaHJlZiA9IGhyZWY7XG5cbiAgICAgIHZhciBidXR0b25DaGlsZHJlbiA9IHRoaXMuY3JlYXRlQnV0dG9uQ2hpbGRyZW4oKTtcblxuICAgICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjb250YWluZXJFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjb250YWluZXJFbGVtZW50LCBidXR0b25Qcm9wcywgYnV0dG9uQ2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhyZWYgJiYgY29udGFpbmVyRWxlbWVudCA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgYnV0dG9uUHJvcHMudHlwZSA9IHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChocmVmID8gJ2EnIDogY29udGFpbmVyRWxlbWVudCwgYnV0dG9uUHJvcHMsIGJ1dHRvbkNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEVuaGFuY2VkQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRW5oYW5jZWRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb250YWluZXJFbGVtZW50OiAnYnV0dG9uJyxcbiAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7fSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9LFxuICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge30sXG4gIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKCkge30sXG4gIG9uS2V5VXA6IGZ1bmN0aW9uIG9uS2V5VXAoKSB7fSxcbiAgb25LZXlib2FyZEZvY3VzOiBmdW5jdGlvbiBvbktleWJvYXJkRm9jdXMoKSB7fSxcbiAgdGFiSW5kZXg6IDAsXG4gIHR5cGU6ICdidXR0b24nXG59O1xuRW5oYW5jZWRCdXR0b24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkVuaGFuY2VkQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2VudGVyUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIGRpc2FibGVGb2N1c1JpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlS2V5Ym9hcmRGb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlVG91Y2hSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZm9jdXNSaXBwbGVDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZvY3VzUmlwcGxlT3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBrZXlib2FyZEZvY3VzZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbktleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25LZXlVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbktleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0YWJJbmRleDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHRvdWNoUmlwcGxlQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0b3VjaFJpcHBsZU9wYWNpdHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzZXQ6IGZ1bmN0aW9uIHNldChzdHlsZSwga2V5LCB2YWx1ZSkge1xuICAgIHN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS91dGlscy9hdXRvUHJlZml4LmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2hvdWxkVXBkYXRlID0gcmVxdWlyZSgnLi9zaG91bGRVcGRhdGUnKTtcblxudmFyIF9zaG91bGRVcGRhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hvdWxkVXBkYXRlKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCcuL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX3NldERpc3BsYXlOYW1lID0gcmVxdWlyZSgnLi9zZXREaXNwbGF5TmFtZScpO1xuXG52YXIgX3NldERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldERpc3BsYXlOYW1lKTtcblxudmFyIF93cmFwRGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL3dyYXBEaXNwbGF5TmFtZScpO1xuXG52YXIgX3dyYXBEaXNwbGF5TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwRGlzcGxheU5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHVyZSA9IGZ1bmN0aW9uIHB1cmUoQmFzZUNvbXBvbmVudCkge1xuICB2YXIgaG9jID0gKDAsIF9zaG91bGRVcGRhdGUyLmRlZmF1bHQpKGZ1bmN0aW9uIChwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkocHJvcHMsIG5leHRQcm9wcyk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuICgwLCBfc2V0RGlzcGxheU5hbWUyLmRlZmF1bHQpKCgwLCBfd3JhcERpc3BsYXlOYW1lMi5kZWZhdWx0KShCYXNlQ29tcG9uZW50LCAncHVyZScpKShob2MoQmFzZUNvbXBvbmVudCkpO1xuICB9XG5cbiAgcmV0dXJuIGhvYyhCYXNlQ29tcG9uZW50KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHB1cmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL3B1cmUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N2Z0ljb24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU3ZnSWNvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBvbmNlOiBmdW5jdGlvbiBvbmNlKGVsLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHZhciB0eXBlQXJyYXkgPSB0eXBlID8gdHlwZS5zcGxpdCgnICcpIDogW107XG4gICAgdmFyIHJlY3Vyc2l2ZUZ1bmN0aW9uID0gZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LnR5cGUsIHJlY3Vyc2l2ZUZ1bmN0aW9uKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhldmVudCk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSB0eXBlQXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMub24oZWwsIHR5cGVBcnJheVtpXSwgcmVjdXJzaXZlRnVuY3Rpb24pO1xuICAgIH1cbiAgfSxcbiAgb246IGZ1bmN0aW9uIG9uKGVsLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4KyBTdXBwb3J0XG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKGVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiBvZmYoZWwsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRTgrIFN1cHBvcnRcbiAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuICBpc0tleWJvYXJkOiBmdW5jdGlvbiBpc0tleWJvYXJkKGV2ZW50KSB7XG4gICAgcmV0dXJuIFsna2V5ZG93bicsICdrZXlwcmVzcycsICdrZXl1cCddLmluZGV4T2YoZXZlbnQudHlwZSkgIT09IC0xO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3V0aWxzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFNvdXJjZTogaHR0cDovL2pzZmlkZGxlLm5ldC92V3g4Vi9cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYwMzE5NS9mdWxsLWxpc3Qtb2YtamF2YXNjcmlwdC1rZXljb2Rlc1xuXG4vKipcbiAqIENvbmVuaWVuY2UgbWV0aG9kIHJldHVybnMgY29ycmVzcG9uZGluZyB2YWx1ZSBmb3IgZ2l2ZW4ga2V5TmFtZSBvciBrZXlDb2RlLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IGtleUNvZGUge051bWJlcn0gb3Iga2V5TmFtZSB7U3RyaW5nfVxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlYXJjaElucHV0KSB7XG4gIC8vIEtleWJvYXJkIEV2ZW50c1xuICBpZiAoc2VhcmNoSW5wdXQgJiYgJ29iamVjdCcgPT09IHR5cGVvZiBzZWFyY2hJbnB1dCkge1xuICAgIHZhciBoYXNLZXlDb2RlID0gc2VhcmNoSW5wdXQud2hpY2ggfHwgc2VhcmNoSW5wdXQua2V5Q29kZSB8fCBzZWFyY2hJbnB1dC5jaGFyQ29kZVxuICAgIGlmIChoYXNLZXlDb2RlKSBzZWFyY2hJbnB1dCA9IGhhc0tleUNvZGVcbiAgfVxuXG4gIC8vIE51bWJlcnNcbiAgaWYgKCdudW1iZXInID09PSB0eXBlb2Ygc2VhcmNoSW5wdXQpIHJldHVybiBuYW1lc1tzZWFyY2hJbnB1dF1cblxuICAvLyBFdmVyeXRoaW5nIGVsc2UgKGNhc3QgdG8gc3RyaW5nKVxuICB2YXIgc2VhcmNoID0gU3RyaW5nKHNlYXJjaElucHV0KVxuXG4gIC8vIGNoZWNrIGNvZGVzXG4gIHZhciBmb3VuZE5hbWVkS2V5ID0gY29kZXNbc2VhcmNoLnRvTG93ZXJDYXNlKCldXG4gIGlmIChmb3VuZE5hbWVkS2V5KSByZXR1cm4gZm91bmROYW1lZEtleVxuXG4gIC8vIGNoZWNrIGFsaWFzZXNcbiAgdmFyIGZvdW5kTmFtZWRLZXkgPSBhbGlhc2VzW3NlYXJjaC50b0xvd2VyQ2FzZSgpXVxuICBpZiAoZm91bmROYW1lZEtleSkgcmV0dXJuIGZvdW5kTmFtZWRLZXlcblxuICAvLyB3ZWlyZCBjaGFyYWN0ZXI/XG4gIGlmIChzZWFyY2gubGVuZ3RoID09PSAxKSByZXR1cm4gc2VhcmNoLmNoYXJDb2RlQXQoMClcblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogR2V0IGJ5IG5hbWVcbiAqXG4gKiAgIGV4cG9ydHMuY29kZVsnZW50ZXInXSAvLyA9PiAxM1xuICovXG5cbnZhciBjb2RlcyA9IGV4cG9ydHMuY29kZSA9IGV4cG9ydHMuY29kZXMgPSB7XG4gICdiYWNrc3BhY2UnOiA4LFxuICAndGFiJzogOSxcbiAgJ2VudGVyJzogMTMsXG4gICdzaGlmdCc6IDE2LFxuICAnY3RybCc6IDE3LFxuICAnYWx0JzogMTgsXG4gICdwYXVzZS9icmVhayc6IDE5LFxuICAnY2FwcyBsb2NrJzogMjAsXG4gICdlc2MnOiAyNyxcbiAgJ3NwYWNlJzogMzIsXG4gICdwYWdlIHVwJzogMzMsXG4gICdwYWdlIGRvd24nOiAzNCxcbiAgJ2VuZCc6IDM1LFxuICAnaG9tZSc6IDM2LFxuICAnbGVmdCc6IDM3LFxuICAndXAnOiAzOCxcbiAgJ3JpZ2h0JzogMzksXG4gICdkb3duJzogNDAsXG4gICdpbnNlcnQnOiA0NSxcbiAgJ2RlbGV0ZSc6IDQ2LFxuICAnY29tbWFuZCc6IDkxLFxuICAnbGVmdCBjb21tYW5kJzogOTEsXG4gICdyaWdodCBjb21tYW5kJzogOTMsXG4gICdudW1wYWQgKic6IDEwNixcbiAgJ251bXBhZCArJzogMTA3LFxuICAnbnVtcGFkIC0nOiAxMDksXG4gICdudW1wYWQgLic6IDExMCxcbiAgJ251bXBhZCAvJzogMTExLFxuICAnbnVtIGxvY2snOiAxNDQsXG4gICdzY3JvbGwgbG9jayc6IDE0NSxcbiAgJ215IGNvbXB1dGVyJzogMTgyLFxuICAnbXkgY2FsY3VsYXRvcic6IDE4MyxcbiAgJzsnOiAxODYsXG4gICc9JzogMTg3LFxuICAnLCc6IDE4OCxcbiAgJy0nOiAxODksXG4gICcuJzogMTkwLFxuICAnLyc6IDE5MSxcbiAgJ2AnOiAxOTIsXG4gICdbJzogMjE5LFxuICAnXFxcXCc6IDIyMCxcbiAgJ10nOiAyMjEsXG4gIFwiJ1wiOiAyMjJcbn1cblxuLy8gSGVscGVyIGFsaWFzZXNcblxudmFyIGFsaWFzZXMgPSBleHBvcnRzLmFsaWFzZXMgPSB7XG4gICd3aW5kb3dzJzogOTEsXG4gICfih6cnOiAxNixcbiAgJ+KMpSc6IDE4LFxuICAn4oyDJzogMTcsXG4gICfijJgnOiA5MSxcbiAgJ2N0bCc6IDE3LFxuICAnY29udHJvbCc6IDE3LFxuICAnb3B0aW9uJzogMTgsXG4gICdwYXVzZSc6IDE5LFxuICAnYnJlYWsnOiAxOSxcbiAgJ2NhcHMnOiAyMCxcbiAgJ3JldHVybic6IDEzLFxuICAnZXNjYXBlJzogMjcsXG4gICdzcGMnOiAzMixcbiAgJ3BndXAnOiAzMyxcbiAgJ3BnZG4nOiAzNCxcbiAgJ2lucyc6IDQ1LFxuICAnZGVsJzogNDYsXG4gICdjbWQnOiA5MVxufVxuXG5cbi8qIVxuICogUHJvZ3JhbWF0aWNhbGx5IGFkZCB0aGUgZm9sbG93aW5nXG4gKi9cblxuLy8gbG93ZXIgY2FzZSBjaGFyc1xuZm9yIChpID0gOTc7IGkgPCAxMjM7IGkrKykgY29kZXNbU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpIC0gMzJcblxuLy8gbnVtYmVyc1xuZm9yICh2YXIgaSA9IDQ4OyBpIDwgNTg7IGkrKykgY29kZXNbaSAtIDQ4XSA9IGlcblxuLy8gZnVuY3Rpb24ga2V5c1xuZm9yIChpID0gMTsgaSA8IDEzOyBpKyspIGNvZGVzWydmJytpXSA9IGkgKyAxMTFcblxuLy8gbnVtcGFkIGtleXNcbmZvciAoaSA9IDA7IGkgPCAxMDsgaSsrKSBjb2Rlc1snbnVtcGFkICcraV0gPSBpICsgOTZcblxuLyoqXG4gKiBHZXQgYnkgY29kZVxuICpcbiAqICAgZXhwb3J0cy5uYW1lWzEzXSAvLyA9PiAnRW50ZXInXG4gKi9cblxudmFyIG5hbWVzID0gZXhwb3J0cy5uYW1lcyA9IGV4cG9ydHMudGl0bGUgPSB7fSAvLyB0aXRsZSBmb3IgYmFja3dhcmQgY29tcGF0XG5cbi8vIENyZWF0ZSByZXZlcnNlIG1hcHBpbmdcbmZvciAoaSBpbiBjb2RlcykgbmFtZXNbY29kZXNbaV1dID0gaVxuXG4vLyBBZGQgYWxpYXNlc1xuZm9yICh2YXIgYWxpYXMgaW4gYWxpYXNlcykge1xuICBjb2Rlc1thbGlhc10gPSBhbGlhc2VzW2FsaWFzXVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMva2V5Y29kZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jaGFpbkZ1bmN0aW9uID0gcmVxdWlyZSgnY2hhaW4tZnVuY3Rpb24nKTtcblxudmFyIF9jaGFpbkZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluRnVuY3Rpb24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKCcuL3V0aWxzL0NoaWxkTWFwcGluZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMucGVyZm9ybUFwcGVhciA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbEFwcGVhcihfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRBcHBlYXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcigpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKCFjdXJyZW50Q2hpbGRNYXBwaW5nIHx8ICFjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyB3YXMgcmVtb3ZlZCBiZWZvcmUgaXQgaGFkIGZ1bGx5IGFwcGVhcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgZW50ZXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKF90aGlzLl9oYW5kbGVEb25lTGVhdmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgc29tZXdoYXQgZGFuZ2Vyb3VzIGIvYyBpdCBjYWxscyBzZXRTdGF0ZSgpXG4gICAgICAgIC8vIGFnYWluLCBlZmZlY3RpdmVseSBtdXRhdGluZyB0aGUgY29tcG9uZW50IGJlZm9yZSBhbGwgdGhlIHdvcmtcbiAgICAgICAgLy8gaXMgZG9uZS5cbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSgpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKGN1cnJlbnRDaGlsZE1hcHBpbmcgJiYgY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgZW50ZXJlZCBhZ2FpbiBiZWZvcmUgaXQgZnVsbHkgbGVmdC4gQWRkIGl0IGFnYWluLlxuICAgICAgICBfdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuICAgICAgICAgIGRlbGV0ZSBuZXdDaGlsZHJlbltrZXldO1xuICAgICAgICAgIHJldHVybiB7IGNoaWxkcmVuOiBuZXdDaGlsZHJlbiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRSZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykocHJvcHMuY2hpbGRyZW4pXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzID0ge307XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGluaXRpYWxDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgIGZvciAodmFyIGtleSBpbiBpbml0aWFsQ2hpbGRNYXBwaW5nKSB7XG4gICAgICBpZiAoaW5pdGlhbENoaWxkTWFwcGluZ1trZXldKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUFwcGVhcihrZXksIHRoaXMuY2hpbGRSZWZzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46ICgwLCBfQ2hpbGRNYXBwaW5nLm1lcmdlQ2hpbGRNYXBwaW5ncykocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZylcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzUHJldiA9IHByZXZDaGlsZE1hcHBpbmcgJiYgcHJldkNoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgaWYgKG5leHRDaGlsZE1hcHBpbmdba2V5XSAmJiAhaGFzUHJldiAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rZXkgaW4gcHJldkNoaWxkTWFwcGluZykge1xuICAgICAgdmFyIGhhc05leHQgPSBuZXh0Q2hpbGRNYXBwaW5nICYmIG5leHRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoX2tleSk7XG4gICAgICBpZiAocHJldkNoaWxkTWFwcGluZ1tfa2V5XSAmJiAhaGFzTmV4dCAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1tfa2V5XSkge1xuICAgICAgICB0aGlzLmtleXNUb0xlYXZlLnB1c2goX2tleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2Ugd2FudCB0byBzb21lZGF5IGNoZWNrIGZvciByZW9yZGVyaW5nLCB3ZSBjb3VsZCBkbyBpdCBoZXJlLlxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGtleXNUb0VudGVyID0gdGhpcy5rZXlzVG9FbnRlcjtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAga2V5c1RvRW50ZXIuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBlcmZvcm1FbnRlcihrZXksIF90aGlzMi5jaGlsZFJlZnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUxlYXZlKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIC8vIFRPRE86IHdlIGNvdWxkIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yIHRoZSB3cmFwcGVyIG5vZGVcbiAgICAvLyBieSBjbG9uaW5nIGEgc2luZ2xlIGNoaWxkXG4gICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBbXTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgdmFyIGNoaWxkID0gX3RoaXMzLnN0YXRlLmNoaWxkcmVuW2tleV07XG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGlzQ2FsbGJhY2tSZWYgPSB0eXBlb2YgY2hpbGQucmVmICE9PSAnc3RyaW5nJztcbiAgICAgICAgdmFyIGZhY3RvcnlDaGlsZCA9IF90aGlzMy5wcm9wcy5jaGlsZEZhY3RvcnkoY2hpbGQpO1xuICAgICAgICB2YXIgcmVmID0gZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICBfdGhpczMuY2hpbGRSZWZzW2tleV0gPSByO1xuICAgICAgICB9O1xuXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGlzQ2FsbGJhY2tSZWYsICdzdHJpbmcgcmVmcyBhcmUgbm90IHN1cHBvcnRlZCBvbiBjaGlsZHJlbiBvZiBUcmFuc2l0aW9uR3JvdXAgYW5kIHdpbGwgYmUgaWdub3JlZC4gJyArICdQbGVhc2UgdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQ6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI3RoZS1yZWYtY2FsbGJhY2stYXR0cmlidXRlJykgOiB2b2lkIDA7XG5cbiAgICAgICAgLy8gQWx3YXlzIGNoYWluaW5nIHRoZSByZWZzIGxlYWRzIHRvIHByb2JsZW1zIHdoZW4gdGhlIGNoaWxkRmFjdG9yeVxuICAgICAgICAvLyB3cmFwcyB0aGUgY2hpbGQuIFRoZSBjaGlsZCByZWYgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgdHdpY2Ugd2l0aCB0aGVcbiAgICAgICAgLy8gd3JhcHBlciBhbmQgdGhlIGNoaWxkLiBTbyB3ZSBvbmx5IG5lZWQgdG8gY2hhaW4gdGhlIHJlZiBpZiB0aGVcbiAgICAgICAgLy8gZmFjdG9yeUNoaWxkIGlzIG5vdCBkaWZmZXJlbnQgZnJvbSBjaGlsZC5cbiAgICAgICAgaWYgKGZhY3RvcnlDaGlsZCA9PT0gY2hpbGQgJiYgaXNDYWxsYmFja1JlZikge1xuICAgICAgICAgIHJlZiA9ICgwLCBfY2hhaW5GdW5jdGlvbjIuZGVmYXVsdCkoY2hpbGQucmVmLCByZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBsZWF2aW5nLlxuICAgICAgICAvLyBUaGUgbm9ybWFsIFJlYWN0IHdheSB0byBkbyBpdCB3b24ndCB3b3JrIHNpbmNlIHRoZSBjaGlsZCB3aWxsIGhhdmVcbiAgICAgICAgLy8gYWxyZWFkeSBiZWVuIHJlbW92ZWQuIEluIGNhc2UgeW91IG5lZWQgdGhpcyBiZWhhdmlvciB5b3UgY2FuIHByb3ZpZGVcbiAgICAgICAgLy8gYSBjaGlsZEZhY3RvcnkgZnVuY3Rpb24gdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZVxuICAgICAgICAvLyBsZWF2aW5nLlxuICAgICAgICBjaGlsZHJlblRvUmVuZGVyLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChmYWN0b3J5Q2hpbGQsIHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICByZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnN0YXRlLmNoaWxkcmVuKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCBmb3J3YXJkIFRyYW5zaXRpb25Hcm91cCBwcm9wcyB0byBwcmltaXRpdmUgRE9NIG5vZGVzXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmNoaWxkRmFjdG9yeTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkxlYXZlVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkVudGVyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuVG9SZW5kZXIpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuZGlzcGxheU5hbWUgPSAnVHJhbnNpdGlvbkdyb3VwJztcblxuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyciA6ICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgaXNEZXNjZW5kYW50OiBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICAgIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSByZXR1cm4gdHJ1ZTtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChlbCkge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvdXRpbHMvZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyID0gcmVxdWlyZSgncmVhY3QtZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RFdmVudExpc3RlbmVyKTtcblxudmFyIF9SZW5kZXJUb0xheWVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvUmVuZGVyVG9MYXllcicpO1xuXG52YXIgX1JlbmRlclRvTGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVuZGVyVG9MYXllcik7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX2xvZGFzaCA9IHJlcXVpcmUoJ2xvZGFzaC50aHJvdHRsZScpO1xuXG52YXIgX2xvZGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2gpO1xuXG52YXIgX1BvcG92ZXJBbmltYXRpb25EZWZhdWx0ID0gcmVxdWlyZSgnLi9Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCcpO1xuXG52YXIgX1BvcG92ZXJBbmltYXRpb25EZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXJBbmltYXRpb25EZWZhdWx0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG52YXIgUG9wb3ZlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBvcG92ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQb3BvdmVyKTtcblxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFBvcG92ZXIuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFBvcG92ZXIpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy50aW1lb3V0ID0gbnVsbDtcblxuICAgIF90aGlzLnJlbmRlckxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYW5pbWF0ZWQgPSBfdGhpcyRwcm9wcy5hbmltYXRlZCxcbiAgICAgICAgICBhbmltYXRpb24gPSBfdGhpcyRwcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgYW5jaG9yRWwgPSBfdGhpcyRwcm9wcy5hbmNob3JFbCxcbiAgICAgICAgICBhbmNob3JPcmlnaW4gPSBfdGhpcyRwcm9wcy5hbmNob3JPcmlnaW4sXG4gICAgICAgICAgYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbiA9IF90aGlzJHByb3BzLmF1dG9DbG9zZVdoZW5PZmZTY3JlZW4sXG4gICAgICAgICAgY2FuQXV0b1Bvc2l0aW9uID0gX3RoaXMkcHJvcHMuY2FuQXV0b1Bvc2l0aW9uLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2UgPSBfdGhpcyRwcm9wcy5vblJlcXVlc3RDbG9zZSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzLnN0eWxlLFxuICAgICAgICAgIHRhcmdldE9yaWdpbiA9IF90aGlzJHByb3BzLnRhcmdldE9yaWdpbixcbiAgICAgICAgICB1c2VMYXllckZvckNsaWNrQXdheSA9IF90aGlzJHByb3BzLnVzZUxheWVyRm9yQ2xpY2tBd2F5LFxuICAgICAgICAgIHNjcm9sbGFibGVDb250YWluZXIgPSBfdGhpcyRwcm9wcy5zY3JvbGxhYmxlQ29udGFpbmVyLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3RoaXMkcHJvcHMsIFsnYW5pbWF0ZWQnLCAnYW5pbWF0aW9uJywgJ2FuY2hvckVsJywgJ2FuY2hvck9yaWdpbicsICdhdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuJywgJ2NhbkF1dG9Qb3NpdGlvbicsICdjaGlsZHJlbicsICdvblJlcXVlc3RDbG9zZScsICdzdHlsZScsICd0YXJnZXRPcmlnaW4nLCAndXNlTGF5ZXJGb3JDbGlja0F3YXknLCAnc2Nyb2xsYWJsZUNvbnRhaW5lciddKTtcblxuXG4gICAgICB2YXIgc3R5bGVSb290ID0gc3R5bGU7XG5cbiAgICAgIGlmICghYW5pbWF0ZWQpIHtcbiAgICAgICAgc3R5bGVSb290ID0ge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHpJbmRleDogX3RoaXMuY29udGV4dC5tdWlUaGVtZS56SW5kZXgucG9wb3ZlclxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghX3RoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHsgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZVJvb3QsIHN0eWxlKSB9LCBvdGhlciksXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIEFuaW1hdGlvbiA9IGFuaW1hdGlvbiB8fCBfUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQyLmRlZmF1bHQ7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQW5pbWF0aW9uLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICB0YXJnZXRPcmlnaW46IHRhcmdldE9yaWdpbixcbiAgICAgICAgICBzdHlsZTogc3R5bGVSb290XG4gICAgICAgIH0sIG90aGVyLCB7XG4gICAgICAgICAgb3BlbjogX3RoaXMuc3RhdGUub3BlbiAmJiAhX3RoaXMuc3RhdGUuY2xvc2luZ1xuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIF90aGlzLmNvbXBvbmVudENsaWNrQXdheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlcXVlc3RDbG9zZSgnY2xpY2tBd2F5Jyk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldFBsYWNlbWVudCA9IGZ1bmN0aW9uIChzY3JvbGxpbmcpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMucG9wb3ZlclJlZnMubGF5ZXIuZ2V0TGF5ZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXRFbCA9IF90aGlzLnBvcG92ZXJSZWZzLmxheWVyLmdldExheWVyKCkuY2hpbGRyZW5bMF07XG4gICAgICBpZiAoIXRhcmdldEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRhcmdldE9yaWdpbiA9IF90aGlzJHByb3BzMi50YXJnZXRPcmlnaW4sXG4gICAgICAgICAgYW5jaG9yT3JpZ2luID0gX3RoaXMkcHJvcHMyLmFuY2hvck9yaWdpbjtcblxuICAgICAgdmFyIGFuY2hvckVsID0gX3RoaXMucHJvcHMuYW5jaG9yRWwgfHwgX3RoaXMuYW5jaG9yRWw7XG5cbiAgICAgIHZhciBhbmNob3IgPSBfdGhpcy5nZXRBbmNob3JQb3NpdGlvbihhbmNob3JFbCk7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3RoaXMuZ2V0VGFyZ2V0UG9zaXRpb24odGFyZ2V0RWwpO1xuXG4gICAgICB2YXIgdGFyZ2V0UG9zaXRpb24gPSB7XG4gICAgICAgIHRvcDogYW5jaG9yW2FuY2hvck9yaWdpbi52ZXJ0aWNhbF0gLSB0YXJnZXRbdGFyZ2V0T3JpZ2luLnZlcnRpY2FsXSxcbiAgICAgICAgbGVmdDogYW5jaG9yW2FuY2hvck9yaWdpbi5ob3Jpem9udGFsXSAtIHRhcmdldFt0YXJnZXRPcmlnaW4uaG9yaXpvbnRhbF1cbiAgICAgIH07XG5cbiAgICAgIGlmIChzY3JvbGxpbmcgJiYgX3RoaXMucHJvcHMuYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbikge1xuICAgICAgICBfdGhpcy5hdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuKGFuY2hvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5jYW5BdXRvUG9zaXRpb24pIHtcbiAgICAgICAgdGFyZ2V0ID0gX3RoaXMuZ2V0VGFyZ2V0UG9zaXRpb24odGFyZ2V0RWwpOyAvLyB1cGRhdGUgYXMgaGVpZ2h0IG1heSBoYXZlIGNoYW5nZWRcbiAgICAgICAgdGFyZ2V0UG9zaXRpb24gPSBfdGhpcy5hcHBseUF1dG9Qb3NpdGlvbklmTmVlZGVkKGFuY2hvciwgdGFyZ2V0LCB0YXJnZXRPcmlnaW4sIGFuY2hvck9yaWdpbiwgdGFyZ2V0UG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXRFbC5zdHlsZS50b3AgPSB0YXJnZXRQb3NpdGlvbi50b3AgKyAncHgnO1xuICAgICAgdGFyZ2V0RWwuc3R5bGUubGVmdCA9IHRhcmdldFBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgICAgdGFyZ2V0RWwuc3R5bGUubWF4SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgJ3B4JztcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVzaXplID0gKDAsIF9sb2Rhc2gyLmRlZmF1bHQpKF90aGlzLnNldFBsYWNlbWVudCwgMTAwKTtcbiAgICBfdGhpcy5oYW5kbGVTY3JvbGwgPSAoMCwgX2xvZGFzaDIuZGVmYXVsdCkoX3RoaXMuc2V0UGxhY2VtZW50LmJpbmQoX3RoaXMsIHRydWUpLCA1MCk7XG5cbiAgICBfdGhpcy5wb3BvdmVyUmVmcyA9IHt9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuLFxuICAgICAgY2xvc2luZzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFBvcG92ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucGxhY2VtZW50VGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5zZXRQbGFjZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChuZXh0UHJvcHMub3BlbiA9PT0gdGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmFuY2hvckVsID0gbmV4dFByb3BzLmFuY2hvckVsIHx8IHRoaXMucHJvcHMuYW5jaG9yRWw7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgY2xvc2luZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV4dFByb3BzLmFuaW1hdGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zaW5nOiB0cnVlIH0pO1xuICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wbGFjZW1lbnRUaW1lb3V0KTtcbiAgICAgIHRoaXMucGxhY2VtZW50VGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5zZXRQbGFjZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmhhbmRsZVJlc2l6ZS5jYW5jZWwoKTtcbiAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsLmNhbmNlbCgpO1xuXG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnRUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBsYWNlbWVudFRpbWVvdXQpO1xuICAgICAgICB0aGlzLnBsYWNlbWVudFRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcXVlc3RDbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDbG9zZShyZWFzb24pIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UocmVhc29uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbmNob3JQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFuY2hvclBvc2l0aW9uKGVsKSB7XG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGEgPSB7XG4gICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsLm9mZnNldEhlaWdodFxuICAgICAgfTtcblxuICAgICAgYS5yaWdodCA9IHJlY3QucmlnaHQgfHwgYS5sZWZ0ICsgYS53aWR0aDtcbiAgICAgIGEuYm90dG9tID0gcmVjdC5ib3R0b20gfHwgYS50b3AgKyBhLmhlaWdodDtcbiAgICAgIGEubWlkZGxlID0gYS5sZWZ0ICsgKGEucmlnaHQgLSBhLmxlZnQpIC8gMjtcbiAgICAgIGEuY2VudGVyID0gYS50b3AgKyAoYS5ib3R0b20gLSBhLnRvcCkgLyAyO1xuXG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUYXJnZXRQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldFBvc2l0aW9uKHRhcmdldEVsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGNlbnRlcjogdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICAgICAgYm90dG9tOiB0YXJnZXRFbC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIG1pZGRsZTogdGFyZ2V0RWwub2Zmc2V0V2lkdGggLyAyLFxuICAgICAgICByaWdodDogdGFyZ2V0RWwub2Zmc2V0V2lkdGhcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGF1dG9DbG9zZVdoZW5PZmZTY3JlZW4oYW5jaG9yUG9zaXRpb24pIHtcbiAgICAgIGlmIChhbmNob3JQb3NpdGlvbi50b3AgPCAwIHx8IGFuY2hvclBvc2l0aW9uLnRvcCA+IHdpbmRvdy5pbm5lckhlaWdodCB8fCBhbmNob3JQb3NpdGlvbi5sZWZ0IDwgMCB8fCBhbmNob3JQb3NpdGlvbi5sZWZ0ID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0Q2xvc2UoJ29mZlNjcmVlbicpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE92ZXJsYXBNb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3ZlcmxhcE1vZGUoYW5jaG9yLCB0YXJnZXQsIG1lZGlhbikge1xuICAgICAgaWYgKFthbmNob3IsIHRhcmdldF0uaW5kZXhPZihtZWRpYW4pID49IDApIHJldHVybiAnYXV0byc7XG4gICAgICBpZiAoYW5jaG9yID09PSB0YXJnZXQpIHJldHVybiAnaW5jbHVzaXZlJztcbiAgICAgIHJldHVybiAnZXhjbHVzaXZlJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQb3NpdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoYW5jaG9yLCB0YXJnZXQpIHtcbiAgICAgIHZhciBhID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgYW5jaG9yKTtcbiAgICAgIHZhciB0ID0gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgdGFyZ2V0KTtcblxuICAgICAgdmFyIHBvc2l0aW9ucyA9IHtcbiAgICAgICAgeDogWydsZWZ0JywgJ3JpZ2h0J10uZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHAgIT09IHQuaG9yaXpvbnRhbDtcbiAgICAgICAgfSksXG4gICAgICAgIHk6IFsndG9wJywgJ2JvdHRvbSddLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgICAgIHJldHVybiBwICE9PSB0LnZlcnRpY2FsO1xuICAgICAgICB9KVxuICAgICAgfTtcblxuICAgICAgdmFyIG92ZXJsYXAgPSB7XG4gICAgICAgIHg6IHRoaXMuZ2V0T3ZlcmxhcE1vZGUoYS5ob3Jpem9udGFsLCB0Lmhvcml6b250YWwsICdtaWRkbGUnKSxcbiAgICAgICAgeTogdGhpcy5nZXRPdmVybGFwTW9kZShhLnZlcnRpY2FsLCB0LnZlcnRpY2FsLCAnY2VudGVyJylcbiAgICAgIH07XG5cbiAgICAgIHBvc2l0aW9ucy54LnNwbGljZShvdmVybGFwLnggPT09ICdhdXRvJyA/IDAgOiAxLCAwLCAnbWlkZGxlJyk7XG4gICAgICBwb3NpdGlvbnMueS5zcGxpY2Uob3ZlcmxhcC55ID09PSAnYXV0bycgPyAwIDogMSwgMCwgJ2NlbnRlcicpO1xuXG4gICAgICBpZiAob3ZlcmxhcC55ICE9PSAnYXV0bycpIHtcbiAgICAgICAgYS52ZXJ0aWNhbCA9IGEudmVydGljYWwgPT09ICd0b3AnID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICAgICAgaWYgKG92ZXJsYXAueSA9PT0gJ2luY2x1c2l2ZScpIHtcbiAgICAgICAgICB0LnZlcnRpY2FsID0gdC52ZXJ0aWNhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3ZlcmxhcC54ICE9PSAnYXV0bycpIHtcbiAgICAgICAgYS5ob3Jpem9udGFsID0gYS5ob3Jpem9udGFsID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBpZiAob3ZlcmxhcC55ID09PSAnaW5jbHVzaXZlJykge1xuICAgICAgICAgIHQuaG9yaXpvbnRhbCA9IHQuaG9yaXpvbnRhbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3NpdGlvbnM6IHBvc2l0aW9ucyxcbiAgICAgICAgYW5jaG9yUG9zOiBhXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FwcGx5QXV0b1Bvc2l0aW9uSWZOZWVkZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBseUF1dG9Qb3NpdGlvbklmTmVlZGVkKGFuY2hvciwgdGFyZ2V0LCB0YXJnZXRPcmlnaW4sIGFuY2hvck9yaWdpbiwgdGFyZ2V0UG9zaXRpb24pIHtcbiAgICAgIHZhciBfZ2V0UG9zaXRpb25zID0gdGhpcy5nZXRQb3NpdGlvbnMoYW5jaG9yT3JpZ2luLCB0YXJnZXRPcmlnaW4pLFxuICAgICAgICAgIHBvc2l0aW9ucyA9IF9nZXRQb3NpdGlvbnMucG9zaXRpb25zLFxuICAgICAgICAgIGFuY2hvclBvcyA9IF9nZXRQb3NpdGlvbnMuYW5jaG9yUG9zO1xuXG4gICAgICBpZiAodGFyZ2V0UG9zaXRpb24udG9wIDwgMCB8fCB0YXJnZXRQb3NpdGlvbi50b3AgKyB0YXJnZXQuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHZhciBuZXdUb3AgPSBhbmNob3JbYW5jaG9yUG9zLnZlcnRpY2FsXSAtIHRhcmdldFtwb3NpdGlvbnMueVswXV07XG4gICAgICAgIGlmIChuZXdUb3AgKyB0YXJnZXQuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgIHRhcmdldFBvc2l0aW9uLnRvcCA9IE1hdGgubWF4KDAsIG5ld1RvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VG9wID0gYW5jaG9yW2FuY2hvclBvcy52ZXJ0aWNhbF0gLSB0YXJnZXRbcG9zaXRpb25zLnlbMV1dO1xuICAgICAgICAgIGlmIChuZXdUb3AgKyB0YXJnZXQuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdGFyZ2V0UG9zaXRpb24udG9wID0gTWF0aC5tYXgoMCwgbmV3VG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldFBvc2l0aW9uLmxlZnQgPCAwIHx8IHRhcmdldFBvc2l0aW9uLmxlZnQgKyB0YXJnZXQucmlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB2YXIgbmV3TGVmdCA9IGFuY2hvclthbmNob3JQb3MuaG9yaXpvbnRhbF0gLSB0YXJnZXRbcG9zaXRpb25zLnhbMF1dO1xuICAgICAgICBpZiAobmV3TGVmdCArIHRhcmdldC5yaWdodCA8PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgIHRhcmdldFBvc2l0aW9uLmxlZnQgPSBNYXRoLm1heCgwLCBuZXdMZWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdMZWZ0ID0gYW5jaG9yW2FuY2hvclBvcy5ob3Jpem9udGFsXSAtIHRhcmdldFtwb3NpdGlvbnMueFsxXV07XG4gICAgICAgICAgaWYgKG5ld0xlZnQgKyB0YXJnZXQucmlnaHQgPD0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRhcmdldFBvc2l0aW9uLmxlZnQgPSBNYXRoLm1heCgwLCBuZXdMZWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldFBvc2l0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBzdHlsZXMucm9vdCB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RFdmVudExpc3RlbmVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnByb3BzLnNjcm9sbGFibGVDb250YWluZXIsXG4gICAgICAgICAgb25TY3JvbGw6IHRoaXMuaGFuZGxlU2Nyb2xsLFxuICAgICAgICAgIG9uUmVzaXplOiB0aGlzLmhhbmRsZVJlc2l6ZVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JlbmRlclRvTGF5ZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLnBvcG92ZXJSZWZzLmxheWVyID0gX3JlZjtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wZW46IHRoaXMuc3RhdGUub3BlbixcbiAgICAgICAgICBjb21wb25lbnRDbGlja0F3YXk6IHRoaXMuY29tcG9uZW50Q2xpY2tBd2F5LFxuICAgICAgICAgIHVzZUxheWVyRm9yQ2xpY2tBd2F5OiB0aGlzLnByb3BzLnVzZUxheWVyRm9yQ2xpY2tBd2F5LFxuICAgICAgICAgIHJlbmRlcjogdGhpcy5yZW5kZXJMYXllclxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFBvcG92ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5jaG9yT3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9LFxuICBhbmltYXRlZDogdHJ1ZSxcbiAgYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbjogdHJ1ZSxcbiAgY2FuQXV0b1Bvc2l0aW9uOiB0cnVlLFxuICBvblJlcXVlc3RDbG9zZTogZnVuY3Rpb24gb25SZXF1ZXN0Q2xvc2UoKSB7fSxcbiAgb3BlbjogZmFsc2UsXG4gIHNjcm9sbGFibGVDb250YWluZXI6ICd3aW5kb3cnLFxuICBzdHlsZToge1xuICAgIG92ZXJmbG93WTogJ2F1dG8nXG4gIH0sXG4gIHRhcmdldE9yaWdpbjoge1xuICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfSxcbiAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IHRydWUsXG4gIHpEZXB0aDogMVxufTtcblBvcG92ZXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblBvcG92ZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgRE9NIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGVcbiAgICogcG9wb3Zlci5cbiAgICovXG4gIGFuY2hvckVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBhbmNob3Igd2hlcmUgdGhlIHBvcG92ZXInc1xuICAgKiBgdGFyZ2V0T3JpZ2luYCB3aWxsIGF0dGFjaCB0by5cbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXVxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF0uXG4gICAqL1xuICBhbmNob3JPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgd2lsbCBhcHBseSB0cmFuc2l0aW9ucyB3aGVuXG4gICAqIGl0IGlzIGFkZGVkIHRvIHRoZSBET00uXG4gICAqL1xuICBhbmltYXRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYW5pbWF0aW9uIGNvbXBvbmVudCB1c2VkLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcG9wb3ZlciB3aWxsIGhpZGUgd2hlbiB0aGUgYW5jaG9yIGlzIHNjcm9sbGVkIG9mZiB0aGUgc2NyZWVuLlxuICAgKi9cbiAgYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgKHBvdGVudGlhbGx5KSBpZ25vcmVzIGB0YXJnZXRPcmlnaW5gXG4gICAqIGFuZCBgYW5jaG9yT3JpZ2luYCB0byBtYWtlIGl0c2VsZiBmaXQgb24gc2NyZWVuLFxuICAgKiB3aGljaCBpcyB1c2VmdWwgZm9yIG1vYmlsZSBkZXZpY2VzLlxuICAgKi9cbiAgY2FuQXV0b1Bvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBwb3BvdmVyIGlzIHJlcXVlc3RlZCB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gVGhlIHJlYXNvbiBmb3IgdGhlIGNsb3NlIHJlcXVlc3QuIFBvc3NpYmxlcyB2YWx1ZXNcbiAgICogYXJlICdjbGlja0F3YXknIGFuZCAnb2ZmU2NyZWVuJy5cbiAgICovXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcG9wb3ZlciBpcyB2aXNpYmxlLlxuICAgKi9cbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgcGFyZW50IHNjcm9sbGFibGUgY29udGFpbmVyLlxuICAgKiBJdCBjYW4gYmUgYW4gZWxlbWVudCBvciBhIHN0cmluZyBsaWtlIGB3aW5kb3dgLlxuICAgKi9cbiAgc2Nyb2xsYWJsZUNvbnRhaW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBwb3BvdmVyIHdoaWNoIHdpbGwgYXR0YWNoIHRvXG4gICAqIHRoZSBhbmNob3IncyBvcmlnaW4uXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV1cbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdLlxuICAgKi9cbiAgdGFyZ2V0T3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIHdpbGwgcmVuZGVyIG9uIHRvcCBvZiBhbiBpbnZpc2libGVcbiAgICogbGF5ZXIsIHdoaWNoIHdpbGwgcHJldmVudCBjbGlja3MgdG8gdGhlIHVuZGVybHlpbmdcbiAgICogZWxlbWVudHMsIGFuZCB0cmlnZ2VyIGFuIGBvblJlcXVlc3RDbG9zZSgnY2xpY2tBd2F5JylgIGNhbGwuXG4gICAqL1xuICB1c2VMYXllckZvckNsaWNrQXdheTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIHpEZXB0aCBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBvcG92ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUG9wb3Zlci9Qb3BvdmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3RvQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXknKTtcblxudmFyIF90b0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQXJyYXkyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ3JlY29tcG9zZS9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9DbGlja0F3YXlMaXN0ZW5lciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0NsaWNrQXdheUxpc3RlbmVyJyk7XG5cbnZhciBfQ2xpY2tBd2F5TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2xpY2tBd2F5TGlzdGVuZXIpO1xuXG52YXIgX2tleWNvZGUgPSByZXF1aXJlKCdrZXljb2RlJyk7XG5cbnZhciBfa2V5Y29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXljb2RlKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG52YXIgX0xpc3QgPSByZXF1aXJlKCcuLi9MaXN0L0xpc3QnKTtcblxudmFyIF9MaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3QpO1xuXG52YXIgX21lbnVVdGlscyA9IHJlcXVpcmUoJy4vbWVudVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgZGVza3RvcCA9IHByb3BzLmRlc2t0b3AsXG4gICAgICBtYXhIZWlnaHQgPSBwcm9wcy5tYXhIZWlnaHQsXG4gICAgICB3aWR0aCA9IHByb3BzLndpZHRoO1xuICB2YXIgbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICAvLyBOZXN0ZWQgZGl2IGJlY2F1c2UgdGhlIExpc3Qgc2NhbGVzIHggZmFzdGVyIHRoYW4gaXQgc2NhbGVzIHlcbiAgICAgIHpJbmRleDogbXVpVGhlbWUuekluZGV4Lm1lbnUsXG4gICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgIG92ZXJmbG93WTogbWF4SGVpZ2h0ID8gJ2F1dG8nIDogbnVsbFxuICAgIH0sXG4gICAgZGl2aWRlcjoge1xuICAgICAgbWFyZ2luVG9wOiA3LFxuICAgICAgbWFyZ2luQm90dG9tOiA4XG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiBkZXNrdG9wID8gMTYgOiA4LFxuICAgICAgcGFkZGluZ1RvcDogZGVza3RvcCA/IDE2IDogOCxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHdpZHRoOiB3aWR0aFxuICAgIH0sXG4gICAgc2VsZWN0ZWRNZW51SXRlbToge1xuICAgICAgY29sb3I6IG11aVRoZW1lLm1lbnVJdGVtLnNlbGVjdGVkVGV4dENvbG9yXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBNZW51ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTWVudSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVudShwcm9wcywgY29udGV4dCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIE1lbnUpO1xuXG4gICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoTWVudS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTWVudSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IF90aGlzLmdldEZpbHRlcmVkQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBzZWxlY3RlZEluZGV4ID0gX3RoaXMuZ2V0TGFzdFNlbGVjdGVkSW5kZXgocHJvcHMsIGZpbHRlcmVkQ2hpbGRyZW4pO1xuXG4gICAgdmFyIG5ld0ZvY3VzSW5kZXggPSBwcm9wcy5kaXNhYmxlQXV0b0ZvY3VzID8gLTEgOiBzZWxlY3RlZEluZGV4ID49IDAgPyBzZWxlY3RlZEluZGV4IDogMDtcbiAgICBpZiAobmV3Rm9jdXNJbmRleCAhPT0gLTEgJiYgcHJvcHMub25NZW51SXRlbUZvY3VzQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UobnVsbCwgbmV3Rm9jdXNJbmRleCk7XG4gICAgfVxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNJbmRleDogbmV3Rm9jdXNJbmRleCxcbiAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBwcm9wcy5pbml0aWFsbHlLZXlib2FyZEZvY3VzZWQsXG4gICAgICBrZXlXaWR0aDogcHJvcHMuZGVza3RvcCA/IDY0IDogNTZcbiAgICB9O1xuXG4gICAgX3RoaXMuaG90S2V5SG9sZGVyID0gbmV3IF9tZW51VXRpbHMuSG90S2V5SG9sZGVyKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTWVudSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b1dpZHRoKSB7XG4gICAgICAgIHRoaXMuc2V0V2lkdGgoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U2NvbGxQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSB2b2lkIDA7XG4gICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IHRoaXMuZ2V0RmlsdGVyZWRDaGlsZHJlbihuZXh0UHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBzZWxlY3RlZEluZGV4ID0gdGhpcy5nZXRMYXN0U2VsZWN0ZWRJbmRleChuZXh0UHJvcHMsIGZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleCA9IHRoaXMuc3RhdGUuZm9jdXNJbmRleDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0ZvY3VzSW5kZXggPSBuZXh0UHJvcHMuZGlzYWJsZUF1dG9Gb2N1cyA/IC0xIDogc2VsZWN0ZWRJbmRleCA+PSAwID8gc2VsZWN0ZWRJbmRleCA6IDA7XG4gICAgICBpZiAobmV3Rm9jdXNJbmRleCAhPT0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4ICYmIHRoaXMucHJvcHMub25NZW51SXRlbUZvY3VzQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NZW51SXRlbUZvY3VzQ2hhbmdlKG51bGwsIG5ld0ZvY3VzSW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzSW5kZXg6IG5ld0ZvY3VzSW5kZXgsXG4gICAgICAgIGtleVdpZHRoOiBuZXh0UHJvcHMuZGVza3RvcCA/IDY0IDogNTZcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5jb250ZXh0LCBuZXh0Q29udGV4dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b1dpZHRoKSB0aGlzLnNldFdpZHRoKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWVMaW5rJyxcblxuXG4gICAgLy8gRG8gbm90IHVzZSBvdXRzaWRlIG9mIHRoaXMgY29tcG9uZW50LCBpdCB3aWxsIGJlIHJlbW92ZWQgb25jZSB2YWx1ZUxpbmsgaXMgZGVwcmVjYXRlZFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZUxpbmsocHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm9wcy52YWx1ZUxpbmsgfHwge1xuICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgIHJlcXVlc3RDaGFuZ2U6IHByb3BzLm9uQ2hhbmdlXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEtleWJvYXJkRm9jdXNlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleWJvYXJkRm9jdXNlZChrZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0tleWJvYXJkRm9jdXNlZDoga2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGaWx0ZXJlZENoaWxkcmVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmlsdGVyZWRDaGlsZHJlbihjaGlsZHJlbikge1xuICAgICAgdmFyIGZpbHRlcmVkQ2hpbGRyZW4gPSBbXTtcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9uZU1lbnVJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmVNZW51SXRlbShjaGlsZCwgY2hpbGRJbmRleCwgc3R5bGVzLCBpbmRleCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGlsZElzRGlzYWJsZWQgPSBjaGlsZC5wcm9wcy5kaXNhYmxlZDtcblxuICAgICAgdmFyIHNlbGVjdGVkQ2hpbGRTdHlsZXMgPSB7fTtcbiAgICAgIGlmICghY2hpbGRJc0Rpc2FibGVkKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuaXNDaGlsZFNlbGVjdGVkKGNoaWxkLCB0aGlzLnByb3BzKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc2VsZWN0ZWRDaGlsZFN0eWxlcywgc3R5bGVzLnNlbGVjdGVkTWVudUl0ZW0sIHRoaXMucHJvcHMuc2VsZWN0ZWRNZW51SXRlbVN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIG1lcmdlZENoaWxkU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBjaGlsZC5wcm9wcy5zdHlsZSwgdGhpcy5wcm9wcy5tZW51SXRlbVN0eWxlLCBzZWxlY3RlZENoaWxkU3R5bGVzKTtcblxuICAgICAgdmFyIGV4dHJhUHJvcHMgPSB7XG4gICAgICAgIGRlc2t0b3A6IHRoaXMucHJvcHMuZGVza3RvcCxcbiAgICAgICAgc3R5bGU6IG1lcmdlZENoaWxkU3R5bGVzXG4gICAgICB9O1xuICAgICAgaWYgKCFjaGlsZElzRGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGNoaWxkSW5kZXggPT09IHRoaXMuc3RhdGUuZm9jdXNJbmRleDtcbiAgICAgICAgdmFyIGZvY3VzU3RhdGUgPSAnbm9uZSc7XG4gICAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgICBmb2N1c1N0YXRlID0gdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCA/ICdrZXlib2FyZC1mb2N1c2VkJyA6ICdmb2N1c2VkJztcbiAgICAgICAgfVxuXG4gICAgICAgICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShleHRyYVByb3BzLCB7XG4gICAgICAgICAgZm9jdXNTdGF0ZTogZm9jdXNTdGF0ZSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICBfdGhpczIuaGFuZGxlTWVudUl0ZW1Ub3VjaFRhcChldmVudCwgY2hpbGQsIGluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSBjaGlsZC5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZjogaXNGb2N1c2VkID8gJ2ZvY3VzZWRNZW51SXRlbScgOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGV4dHJhUHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCkge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4O1xuXG4gICAgICBpbmRleC0tO1xuICAgICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSAwO1xuXG4gICAgICB0aGlzLnNldEZvY3VzSW5kZXgoZXZlbnQsIGluZGV4LCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNZW51SXRlbUNvdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWVudUl0ZW1Db3VudChmaWx0ZXJlZENoaWxkcmVuKSB7XG4gICAgICB2YXIgbWVudUl0ZW1Db3VudCA9IDA7XG4gICAgICBmaWx0ZXJlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBjaGlsZElzQURpdmlkZXIgPSBjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUubXVpTmFtZSA9PT0gJ0RpdmlkZXInO1xuICAgICAgICB2YXIgY2hpbGRJc0Rpc2FibGVkID0gY2hpbGQucHJvcHMuZGlzYWJsZWQ7XG4gICAgICAgIGlmICghY2hpbGRJc0FEaXZpZGVyICYmICFjaGlsZElzRGlzYWJsZWQpIG1lbnVJdGVtQ291bnQrKztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lbnVJdGVtQ291bnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TGFzdFNlbGVjdGVkSW5kZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMYXN0U2VsZWN0ZWRJbmRleChwcm9wcywgZmlsdGVyZWRDaGlsZHJlbikge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICB2YXIgbWVudUl0ZW1JbmRleCA9IDA7XG5cbiAgICAgIGZpbHRlcmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGNoaWxkSXNBRGl2aWRlciA9IGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5tdWlOYW1lID09PSAnRGl2aWRlcic7XG5cbiAgICAgICAgaWYgKF90aGlzMy5pc0NoaWxkU2VsZWN0ZWQoY2hpbGQsIHByb3BzKSkgc2VsZWN0ZWRJbmRleCA9IG1lbnVJdGVtSW5kZXg7XG4gICAgICAgIGlmICghY2hpbGRJc0FEaXZpZGVyKSBtZW51SXRlbUluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Rm9jdXNJbmRleFN0YXJ0c1dpdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c0luZGV4U3RhcnRzV2l0aChldmVudCwga2V5cykge1xuICAgICAgdmFyIGZvdW5kSW5kZXggPSAtMTtcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPj0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJpbWFyeVRleHQgPSBjaGlsZC5wcm9wcy5wcmltYXJ5VGV4dDtcblxuICAgICAgICBpZiAodHlwZW9mIHByaW1hcnlUZXh0ID09PSAnc3RyaW5nJyAmJiBwcmltYXJ5VGV4dC5zdWJzdHIoMCwga2V5cy5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IGtleXMudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZm91bmRJbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXNJbmRleChldmVudCwgZm91bmRJbmRleCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1lbnVJdGVtVG91Y2hUYXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNZW51SXRlbVRvdWNoVGFwKGV2ZW50LCBpdGVtLCBpbmRleCkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciBtdWx0aXBsZSA9IHRoaXMucHJvcHMubXVsdGlwbGU7XG4gICAgICB2YXIgdmFsdWVMaW5rID0gdGhpcy5nZXRWYWx1ZUxpbmsodGhpcy5wcm9wcyk7XG4gICAgICB2YXIgbWVudVZhbHVlID0gdmFsdWVMaW5rLnZhbHVlO1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IGl0ZW0ucHJvcHMudmFsdWU7XG4gICAgICB2YXIgZm9jdXNJbmRleCA9IF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyAwIDogY2hpbGRyZW4uaW5kZXhPZihpdGVtKTtcblxuICAgICAgdGhpcy5zZXRGb2N1c0luZGV4KGV2ZW50LCBmb2N1c0luZGV4LCBmYWxzZSk7XG5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICBtZW51VmFsdWUgPSBtZW51VmFsdWUgfHwgW107XG5cbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IG1lbnVWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSk7XG5cbiAgICAgICAgdmFyIF9tZW51VmFsdWUgPSBtZW51VmFsdWUsXG4gICAgICAgICAgICBfbWVudVZhbHVlMiA9ICgwLCBfdG9BcnJheTMuZGVmYXVsdCkoX21lbnVWYWx1ZSksXG4gICAgICAgICAgICBuZXdNZW51VmFsdWUgPSBfbWVudVZhbHVlMi5zbGljZSgwKTtcblxuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICAgIG5ld01lbnVWYWx1ZS5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3TWVudVZhbHVlLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVMaW5rLnJlcXVlc3RDaGFuZ2UoZXZlbnQsIG5ld01lbnVWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCFtdWx0aXBsZSAmJiBpdGVtVmFsdWUgIT09IG1lbnVWYWx1ZSkge1xuICAgICAgICB2YWx1ZUxpbmsucmVxdWVzdENoYW5nZShldmVudCwgaXRlbVZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1Ub3VjaFRhcChldmVudCwgaXRlbSwgaW5kZXgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCwgZmlsdGVyZWRDaGlsZHJlbikge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4O1xuICAgICAgdmFyIG1heEluZGV4ID0gdGhpcy5nZXRNZW51SXRlbUNvdW50KGZpbHRlcmVkQ2hpbGRyZW4pIC0gMTtcblxuICAgICAgaW5kZXgrKztcbiAgICAgIGlmIChpbmRleCA+IG1heEluZGV4KSBpbmRleCA9IG1heEluZGV4O1xuXG4gICAgICB0aGlzLnNldEZvY3VzSW5kZXgoZXZlbnQsIGluZGV4LCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0NoaWxkU2VsZWN0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NoaWxkU2VsZWN0ZWQoY2hpbGQsIHByb3BzKSB7XG4gICAgICB2YXIgbWVudVZhbHVlID0gdGhpcy5nZXRWYWx1ZUxpbmsocHJvcHMpLnZhbHVlO1xuICAgICAgdmFyIGNoaWxkVmFsdWUgPSBjaGlsZC5wcm9wcy52YWx1ZTtcblxuICAgICAgaWYgKHByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIHJldHVybiBtZW51VmFsdWUgJiYgbWVudVZhbHVlLmxlbmd0aCAmJiBtZW51VmFsdWUuaW5kZXhPZihjaGlsZFZhbHVlKSAhPT0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hpbGQucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgbWVudVZhbHVlID09PSBjaGlsZFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEZvY3VzSW5kZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGb2N1c0luZGV4KGV2ZW50LCBuZXdJbmRleCwgaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uTWVudUl0ZW1Gb2N1c0NoYW5nZSkge1xuICAgICAgICAvLyBEbyB0aGlzIGV2ZW4gaWYgYG5ld0luZGV4ID09PSB0aGlzLnN0YXRlLmZvY3VzSW5kZXhgIHRvIGFsbG93IHVzZXJzXG4gICAgICAgIC8vIHRvIGRldGVjdCB1cC1hcnJvdyBvbiB0aGUgZmlyc3QgTWVudUl0ZW0gb3IgZG93bi1hcnJvdyBvbiB0aGUgbGFzdC5cbiAgICAgICAgdGhpcy5wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UoZXZlbnQsIG5ld0luZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c0luZGV4OiBuZXdJbmRleCxcbiAgICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGlzS2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRTY29sbFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2NvbGxQb3NpdGlvbigpIHtcbiAgICAgIHZhciBkZXNrdG9wID0gdGhpcy5wcm9wcy5kZXNrdG9wO1xuICAgICAgdmFyIGZvY3VzZWRNZW51SXRlbSA9IHRoaXMucmVmcy5mb2N1c2VkTWVudUl0ZW07XG4gICAgICB2YXIgbWVudUl0ZW1IZWlnaHQgPSBkZXNrdG9wID8gMzIgOiA0ODtcblxuICAgICAgaWYgKGZvY3VzZWRNZW51SXRlbSkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRPZmZTZXQgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoZm9jdXNlZE1lbnVJdGVtKS5vZmZzZXRUb3A7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgZm9jdXNlZCBpdGVtIGJlIHRoZSAybmQgaXRlbSBpbiB0aGUgbGlzdCB0aGUgdXNlciBzZWVzXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBzZWxlY3RlZE9mZlNldCAtIG1lbnVJdGVtSGVpZ2h0O1xuICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgbWVudUl0ZW1IZWlnaHQpIHNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5zY3JvbGxDb250YWluZXIpLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYW5jZWxTY3JvbGxFdmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbEV2ZW50KGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0V2lkdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRXaWR0aCgpIHtcbiAgICAgIHZhciBlbCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHZhciBsaXN0RWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmxpc3QpO1xuICAgICAgdmFyIGVsV2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBrZXlXaWR0aCA9IHRoaXMuc3RhdGUua2V5V2lkdGg7XG4gICAgICB2YXIgbWluV2lkdGggPSBrZXlXaWR0aCAqIDEuNTtcbiAgICAgIHZhciBrZXlJbmNyZW1lbnRzID0gZWxXaWR0aCAvIGtleVdpZHRoO1xuICAgICAgdmFyIG5ld1dpZHRoID0gdm9pZCAwO1xuXG4gICAgICBrZXlJbmNyZW1lbnRzID0ga2V5SW5jcmVtZW50cyA8PSAxLjUgPyAxLjUgOiBNYXRoLmNlaWwoa2V5SW5jcmVtZW50cyk7XG4gICAgICBuZXdXaWR0aCA9IGtleUluY3JlbWVudHMgKiBrZXlXaWR0aDtcblxuICAgICAgaWYgKG5ld1dpZHRoIDwgbWluV2lkdGgpIG5ld1dpZHRoID0gbWluV2lkdGg7XG5cbiAgICAgIGVsLnN0eWxlLndpZHRoID0gbmV3V2lkdGggKyAncHgnO1xuICAgICAgbGlzdEVsLnN0eWxlLndpZHRoID0gbmV3V2lkdGggKyAncHgnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvV2lkdGggPSBfcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGRlc2t0b3AgPSBfcHJvcHMuZGVza3RvcCxcbiAgICAgICAgICBkaXNhYmxlQXV0b0ZvY3VzID0gX3Byb3BzLmRpc2FibGVBdXRvRm9jdXMsXG4gICAgICAgICAgaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzLmluaXRpYWxseUtleWJvYXJkRm9jdXNlZCxcbiAgICAgICAgICBsaXN0U3R5bGUgPSBfcHJvcHMubGlzdFN0eWxlLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgb25JdGVtVG91Y2hUYXAgPSBfcHJvcHMub25JdGVtVG91Y2hUYXAsXG4gICAgICAgICAgb25Fc2NLZXlEb3duID0gX3Byb3BzLm9uRXNjS2V5RG93bixcbiAgICAgICAgICBvbk1lbnVJdGVtRm9jdXNDaGFuZ2UgPSBfcHJvcHMub25NZW51SXRlbUZvY3VzQ2hhbmdlLFxuICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgbWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5tZW51SXRlbVN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgd2lkdGggPSBfcHJvcHMud2lkdGgsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYXV0b1dpZHRoJywgJ2NoaWxkcmVuJywgJ2Rlc2t0b3AnLCAnZGlzYWJsZUF1dG9Gb2N1cycsICdpbml0aWFsbHlLZXlib2FyZEZvY3VzZWQnLCAnbGlzdFN0eWxlJywgJ21heEhlaWdodCcsICdtdWx0aXBsZScsICdvbkl0ZW1Ub3VjaFRhcCcsICdvbkVzY0tleURvd24nLCAnb25NZW51SXRlbUZvY3VzQ2hhbmdlJywgJ3NlbGVjdGVkTWVudUl0ZW1TdHlsZScsICdtZW51SXRlbVN0eWxlJywgJ3N0eWxlJywgJ3ZhbHVlJywgJ3ZhbHVlTGluaycsICd3aWR0aCddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciBtZXJnZWRMaXN0U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5saXN0LCBsaXN0U3R5bGUpO1xuXG4gICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IHRoaXMuZ2V0RmlsdGVyZWRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICAgIHZhciBtZW51SXRlbUluZGV4ID0gMDtcbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAoZmlsdGVyZWRDaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICB2YXIgY2hpbGRJc0Rpc2FibGVkID0gY2hpbGQucHJvcHMuZGlzYWJsZWQ7XG4gICAgICAgIHZhciBjaGlsZE5hbWUgPSBjaGlsZC50eXBlID8gY2hpbGQudHlwZS5tdWlOYW1lIDogJyc7XG4gICAgICAgIHZhciBuZXdDaGlsZCA9IGNoaWxkO1xuXG4gICAgICAgIHN3aXRjaCAoY2hpbGROYW1lKSB7XG4gICAgICAgICAgY2FzZSAnTWVudUl0ZW0nOlxuICAgICAgICAgICAgbmV3Q2hpbGQgPSBfdGhpczQuY2xvbmVNZW51SXRlbShjaGlsZCwgbWVudUl0ZW1JbmRleCwgc3R5bGVzLCBpbmRleCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0RpdmlkZXInOlxuICAgICAgICAgICAgbmV3Q2hpbGQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5kaXZpZGVyLCBjaGlsZC5wcm9wcy5zdHlsZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGROYW1lID09PSAnTWVudUl0ZW0nICYmICFjaGlsZElzRGlzYWJsZWQpIHtcbiAgICAgICAgICBtZW51SXRlbUluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfQ2xpY2tBd2F5TGlzdGVuZXIyLmRlZmF1bHQsXG4gICAgICAgIHsgb25DbGlja0F3YXk6IHRoaXMuaGFuZGxlQ2xpY2tBd2F5IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgb25XaGVlbDogdGhpcy5oYW5kbGVPbldoZWVsLFxuICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkUm9vdFN0eWxlcyksXG4gICAgICAgICAgICByZWY6ICdzY3JvbGxDb250YWluZXInLFxuICAgICAgICAgICAgcm9sZTogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0xpc3QyLmRlZmF1bHQsXG4gICAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgICAgICByZWY6ICdsaXN0JyxcbiAgICAgICAgICAgICAgc3R5bGU6IG1lcmdlZExpc3RTdHlsZXMsXG4gICAgICAgICAgICAgIHJvbGU6ICdtZW51J1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXdDaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE1lbnU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b1dpZHRoOiB0cnVlLFxuICBkZXNrdG9wOiBmYWxzZSxcbiAgZGlzYWJsZUF1dG9Gb2N1czogZmFsc2UsXG4gIGluaXRpYWxseUtleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gIG1heEhlaWdodDogbnVsbCxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fSxcbiAgb25Fc2NLZXlEb3duOiBmdW5jdGlvbiBvbkVzY0tleURvd24oKSB7fSxcbiAgb25JdGVtVG91Y2hUYXA6IGZ1bmN0aW9uIG9uSXRlbVRvdWNoVGFwKCkge30sXG4gIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKCkge31cbn07XG5NZW51LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgdGhpcy5oYW5kbGVDbGlja0F3YXkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmb2N1c0luZGV4ID0gX3RoaXM1LnN0YXRlLmZvY3VzSW5kZXg7XG5cbiAgICBpZiAoZm9jdXNJbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IF90aGlzNS5nZXRGaWx0ZXJlZENoaWxkcmVuKF90aGlzNS5wcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIGZvY3VzZWRJdGVtID0gZmlsdGVyZWRDaGlsZHJlbltmb2N1c0luZGV4XTtcbiAgICBpZiAoZm9jdXNlZEl0ZW0ucHJvcHMubWVudUl0ZW1zICYmIGZvY3VzZWRJdGVtLnByb3BzLm1lbnVJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3RoaXM1LnNldEZvY3VzSW5kZXgoZXZlbnQsIC0xLCBmYWxzZSk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGZpbHRlcmVkQ2hpbGRyZW4gPSBfdGhpczUuZ2V0RmlsdGVyZWRDaGlsZHJlbihfdGhpczUucHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBrZXkgPSAoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KTtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzNS5pbmNyZW1lbnRLZXlib2FyZEZvY3VzSW5kZXgoZXZlbnQsIGZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VzYyc6XG4gICAgICAgIF90aGlzNS5wcm9wcy5vbkVzY0tleURvd24oZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RhYic6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIF90aGlzNS5kZWNyZW1lbnRLZXlib2FyZEZvY3VzSW5kZXgoZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNS5pbmNyZW1lbnRLZXlib2FyZEZvY3VzSW5kZXgoZXZlbnQsIGZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXAnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpczUuZGVjcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoa2V5ICYmIGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB2YXIgaG90S2V5cyA9IF90aGlzNS5ob3RLZXlIb2xkZXIuYXBwZW5kKGtleSk7XG4gICAgICAgICAgaWYgKF90aGlzNS5zZXRGb2N1c0luZGV4U3RhcnRzV2l0aChldmVudCwgaG90S2V5cykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF90aGlzNS5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlT25XaGVlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzY3JvbGxDb250YWluZXIgPSBfdGhpczUucmVmcy5zY3JvbGxDb250YWluZXI7XG4gICAgLy8gT25seSBzY3JvbGwgbG9jayBpZiB0aGUgdGhlIE1lbnUgaXMgc2Nyb2xsYWJsZS5cbiAgICBpZiAoc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEhlaWdodCA8PSBzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0KSByZXR1cm47XG5cbiAgICB2YXIgc2Nyb2xsVG9wID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsQ29udGFpbmVyLnNjcm9sbEhlaWdodCxcbiAgICAgICAgY2xpZW50SGVpZ2h0ID0gc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgIHZhciB3aGVlbERlbHRhID0gZXZlbnQuZGVsdGFZO1xuICAgIHZhciBpc0RlbHRhUG9zaXRpdmUgPSB3aGVlbERlbHRhID4gMDtcblxuICAgIGlmIChpc0RlbHRhUG9zaXRpdmUgJiYgd2hlZWxEZWx0YSA+IHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCAtIHNjcm9sbFRvcCkge1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgIHJldHVybiBfdGhpczUuY2FuY2VsU2Nyb2xsRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoIWlzRGVsdGFQb3NpdGl2ZSAmJiAtd2hlZWxEZWx0YSA+IHNjcm9sbFRvcCkge1xuICAgICAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgICByZXR1cm4gX3RoaXM1LmNhbmNlbFNjcm9sbEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH07XG59O1xuXG5NZW51LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSB3aWR0aCBvZiB0aGUgbWVudSB3aWxsIGJlIHNldCBhdXRvbWF0aWNhbGx5XG4gICAqIGFjY29yZGluZyB0byB0aGUgd2lkdGhzIG9mIGl0cyBjaGlsZHJlbixcbiAgICogdXNpbmcgcHJvcGVyIGtleWxpbmUgaW5jcmVtZW50cyAoNjRweCBmb3IgZGVza3RvcCxcbiAgICogNTZweCBvdGhlcndpc2UpLlxuICAgKi9cbiAgYXV0b1dpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgbWVudS4gVGhpcyBpcyB1c3VhbGx5IHVzZWQgdG8gcGFzcyBgTWVudUl0ZW1gXG4gICAqIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBtZW51IGl0ZW0gd2lsbCByZW5kZXIgd2l0aCBjb21wYWN0IGRlc2t0b3Agc3R5bGVzLlxuICAgKi9cbiAgZGVza3RvcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1lbnUgd2lsbCBub3QgYmUgYXV0by1mb2N1c2VkLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1lbnUgd2lsbCBiZSBrZXlib2FyZC1mb2N1c2VkIGluaXRpYWxseS5cbiAgICovXG4gIGluaXRpYWxseUtleWJvYXJkRm9jdXNlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybHlpbmcgYExpc3RgIGVsZW1lbnQuXG4gICAqL1xuICBsaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSBtZW51IGluIHBpeGVscy4gSWYgc3BlY2lmaWVkLFxuICAgKiB0aGUgbWVudSB3aWxsIGJlIHNjcm9sbGFibGUgaWYgaXQgaXMgdGFsbGVyIHRoYW4gdGhlIHByb3ZpZGVkXG4gICAqIGhlaWdodC5cbiAgICovXG4gIG1heEhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBtZW51IGl0ZW1zLlxuICAgKi9cbiAgbWVudUl0ZW1TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydFxuICAgKiBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gd2l0aCBgdmFsdWVgIG5vdFxuICAgKiBlcXVhbCB0byB0aGUgY3VycmVudCBgdmFsdWVgIG9mIHRoZSBtZW51IGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbWVudSBpdGVtLlxuICAgKiBAcGFyYW0ge2FueX0gIHZhbHVlIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIG1lbnUncyBgdmFsdWVgXG4gICAqIGFycmF5IHdpdGggZWl0aGVyIHRoZSBtZW51IGl0ZW0ncyBgdmFsdWVgIGFkZGVkIChpZlxuICAgKiBpdCB3YXNuJ3QgYWxyZWFkeSBzZWxlY3RlZCkgb3Igb21pdHRlZCAoaWYgaXQgd2FzIGFscmVhZHkgc2VsZWN0ZWQpLlxuICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgbWVudSBpcyBmb2N1c2VkIGFuZCB0aGUgKkVzYyoga2V5XG4gICAqIGlzIHByZXNzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBga2V5ZG93bmAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51LlxuICAgKi9cbiAgb25Fc2NLZXlEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbWVudSBpdGVtLlxuICAgKiBAcGFyYW0ge29iamVjdH0gbWVudUl0ZW0gVGhlIG1lbnUgaXRlbS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgb25JdGVtVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25LZXlEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBmb2N1cyBvbiBhIGBNZW51SXRlbWAgaXMgY2hhbmdlZC5cbiAgICogVGhlcmUgd2lsbCBiZSBzb21lIFwiZHVwbGljYXRlXCIgY2hhbmdlcyByZXBvcnRlZCBpZiB0d28gZGlmZmVyZW50XG4gICAqIGZvY3VzaW5nIGV2ZW50IGhhcHBlbiwgZm9yIGV4YW1wbGUgaWYgYSBgTWVudUl0ZW1gIGlzIGZvY3VzZWQgdmlhXG4gICAqIHRoZSBrZXlib2FyZCBhbmQgdGhlbiBpdCBpcyBjbGlja2VkIG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBmb2N1cyBjaGFuZ2UuXG4gICAqIFRoZSBldmVudCBjYW4gYmUgbnVsbCBzaW5jZSB0aGUgZm9jdXMgY2FuIGJlIGNoYW5nZWQgZm9yIG5vbi1ldmVudFxuICAgKiByZWFzb25zIHN1Y2ggYXMgcHJvcCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3Rm9jdXNJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5ld2x5IGZvY3VzZWRcbiAgICogYE1lbnVJdGVtYCBvciBgLTFgIGlmIGZvY3VzIHdhcyBsb3N0LlxuICAgKi9cbiAgb25NZW51SXRlbUZvY3VzQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBzZWxlY3RlZCBtZW51IGl0ZW1zLlxuICAgKi9cbiAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIGFuIGFycmF5IG9mIHRoZSBgdmFsdWVgcyBvZiB0aGUgc2VsZWN0ZWRcbiAgICogbWVudSBpdGVtcy4gT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLlxuICAgKiBJZiBwcm92aWRlZCwgdGhlIG1lbnUgd2lsbCBiZSBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKiBUaGlzIGNvbXBvbmVudCBhbHNvIHN1cHBvcnRzIHZhbHVlTGluay5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIFZhbHVlTGluayBmb3IgdGhlIG1lbnUncyBgdmFsdWVgLlxuICAgKi9cbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbWVudS4gSWYgbm90IHNwZWNpZmllZCwgdGhlIG1lbnUncyB3aWR0aFxuICAgKiB3aWxsIGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIHdpZHRocyBvZiBpdHMgY2hpbGRyZW4sIHVzaW5nXG4gICAqIHByb3BlciBrZXlsaW5lIGluY3JlbWVudHMgKDY0cHggZm9yIGRlc2t0b3AsIDU2cHggb3RoZXJ3aXNlKS5cbiAgICovXG4gIHdpZHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnN0cmluZ09yTnVtYmVyXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBNZW51O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL01lbnUvTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1N1YmhlYWRlciA9IHJlcXVpcmUoJy4uL1N1YmhlYWRlcicpO1xuXG52YXIgX1N1YmhlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdWJoZWFkZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTGlzdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKExpc3QsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpc3QoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTGlzdCk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKExpc3QuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKExpc3QpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKExpc3QsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2hpbGRyZW4nLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBoYXNTdWJoZWFkZXIgPSBmYWxzZTtcblxuICAgICAgdmFyIGZpcnN0Q2hpbGQgPSBfcmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbMF07XG4gICAgICBpZiAoKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoZmlyc3RDaGlsZCkgJiYgZmlyc3RDaGlsZC50eXBlID09PSBfU3ViaGVhZGVyMi5kZWZhdWx0KSB7XG4gICAgICAgIGhhc1N1YmhlYWRlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBwYWRkaW5nOiAoaGFzU3ViaGVhZGVyID8gMCA6IDgpICsgJ3B4IDBweCA4cHggMHB4J1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTGlzdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkxpc3QuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkxpc3QucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhlc2UgYXJlIHVzdWFsbHkgYExpc3RJdGVtYHMgdGhhdCBhcmUgcGFzc2VkIHRvXG4gICAqIGJlIHBhcnQgb2YgdGhlIGxpc3QuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gTGlzdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9MaXN0L0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfTWVudUl0ZW0gPSByZXF1aXJlKCcuL01lbnVJdGVtJyk7XG5cbnZhciBfTWVudUl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudUl0ZW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfTWVudUl0ZW0yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudUl0ZW0vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0U3RhdGljID0gcmVxdWlyZSgnLi9zZXRTdGF0aWMnKTtcblxudmFyIF9zZXRTdGF0aWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0U3RhdGljKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gc2V0RGlzcGxheU5hbWUoZGlzcGxheU5hbWUpIHtcbiAgcmV0dXJuICgwLCBfc2V0U3RhdGljMi5kZWZhdWx0KSgnZGlzcGxheU5hbWUnLCBkaXNwbGF5TmFtZSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzZXREaXNwbGF5TmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvc2V0RGlzcGxheU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZ2V0RGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL2dldERpc3BsYXlOYW1lJyk7XG5cbnZhciBfZ2V0RGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RGlzcGxheU5hbWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd3JhcERpc3BsYXlOYW1lID0gZnVuY3Rpb24gd3JhcERpc3BsYXlOYW1lKEJhc2VDb21wb25lbnQsIGhvY05hbWUpIHtcbiAgcmV0dXJuIGhvY05hbWUgKyAnKCcgKyAoMCwgX2dldERpc3BsYXlOYW1lMi5kZWZhdWx0KShCYXNlQ29tcG9uZW50KSArICcpJztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdyYXBEaXNwbGF5TmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvd3JhcERpc3BsYXlOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhaXNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4vUmFpc2VkQnV0dG9uJyk7XG5cbnZhciBfUmFpc2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhaXNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWlzZWRCdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGFiZWwocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5sYWJlbCAhPT0gMCAmJiAhcHJvcHMubGFiZWwgJiYgIXByb3BzLmljb24pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkIHByb3AgbGFiZWwgb3IgY2hpbGRyZW4gb3IgaWNvbiB3YXMgbm90IHNwZWNpZmllZCBpbiAnICsgY29tcG9uZW50TmFtZSArICcuJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIGJ1dHRvbiA9IF9jb250ZXh0JG11aVRoZW1lLmJ1dHRvbixcbiAgICAgIHJhaXNlZEJ1dHRvbiA9IF9jb250ZXh0JG11aVRoZW1lLnJhaXNlZEJ1dHRvbixcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9jb250ZXh0JG11aVRoZW1lLmJvcmRlclJhZGl1cztcbiAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZEJhY2tncm91bmRDb2xvciA9IHByb3BzLmRpc2FibGVkQmFja2dyb3VuZENvbG9yLFxuICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gcHJvcHMuZGlzYWJsZWRMYWJlbENvbG9yLFxuICAgICAgZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgaWNvbiA9IHByb3BzLmljb24sXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxQb3NpdGlvbiA9IHByb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICBwcmltYXJ5ID0gcHJvcHMucHJpbWFyeSxcbiAgICAgIHNlY29uZGFyeSA9IHByb3BzLnNlY29uZGFyeSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG5cblxuICB2YXIgYW1vdW50ID0gcHJpbWFyeSB8fCBzZWNvbmRhcnkgPyAwLjQgOiAwLjA4O1xuXG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uY29sb3I7XG4gIHZhciBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnRleHRDb2xvcjtcblxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBkaXNhYmxlZEJhY2tncm91bmRDb2xvciB8fCByYWlzZWRCdXR0b24uZGlzYWJsZWRDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gZGlzYWJsZWRMYWJlbENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZFRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChwcmltYXJ5KSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLnByaW1hcnlDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnByaW1hcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSBpZiAoc2Vjb25kYXJ5KSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLnNlY29uZGFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5VGV4dENvbG9yO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9wcy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IHByb3BzLmJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmxhYmVsQ29sb3IpIHtcbiAgICAgIGxhYmVsQ29sb3IgPSBwcm9wcy5sYWJlbENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHZhciBidXR0b25IZWlnaHQgPSBzdHlsZSAmJiBzdHlsZS5oZWlnaHQgfHwgYnV0dG9uLmhlaWdodDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIG1pbldpZHRoOiBmdWxsV2lkdGggPyAnMTAwJScgOiBidXR0b24ubWluV2lkdGhcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0OiBidXR0b25IZWlnaHQgKyAncHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIC8vIFRoYXQncyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYSBidXR0b24gYnV0IG5vdCBhIGxpbmtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmb250U2l6ZTogcmFpc2VkQnV0dG9uLmZvbnRTaXplLFxuICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06IHJhaXNlZEJ1dHRvbi50ZXh0VHJhbnNmb3JtIHx8IGJ1dHRvbi50ZXh0VHJhbnNmb3JtIHx8ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogcmFpc2VkQnV0dG9uLmZvbnRXZWlnaHQsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBwYWRkaW5nTGVmdDogaWNvbiAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDggOiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHBhZGRpbmdSaWdodDogaWNvbiAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDggOiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIGNvbG9yOiBsYWJlbENvbG9yXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gMTIgOiAwLFxuICAgICAgbWFyZ2luUmlnaHQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gMTIgOiAwXG4gICAgfSxcbiAgICBvdmVybGF5OiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAoc3RhdGUua2V5Ym9hcmRGb2N1c2VkIHx8IHN0YXRlLmhvdmVyZWQpICYmICFkaXNhYmxlZCAmJiAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkobGFiZWxDb2xvciwgYW1vdW50KSxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICB0b3A6IDBcbiAgICB9LFxuICAgIHJpcHBsZToge1xuICAgICAgY29sb3I6IGxhYmVsQ29sb3IsXG4gICAgICBvcGFjaXR5OiAhKHByaW1hcnkgfHwgc2Vjb25kYXJ5KSA/IDAuMSA6IDAuMTZcbiAgICB9XG4gIH07XG59XG5cbnZhciBSYWlzZWRCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShSYWlzZWRCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJhaXNlZEJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSYWlzZWRCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gUmFpc2VkQnV0dG9uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShSYWlzZWRCdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlLFxuICAgICAga2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgaW5pdGlhbFpEZXB0aDogMCxcbiAgICAgIHpEZXB0aDogMFxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gb25seSBsaXN0ZW4gdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoXG4gICAgICB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlVXApIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoLFxuICAgICAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5zdGF0ZS50b3VjaGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaEVuZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50LCBrZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIHZhciB6RGVwdGggPSBrZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnByb3BzLmRpc2FibGVkID8gX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDEgOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBrZXlib2FyZEZvY3VzZWQ6IGtleWJvYXJkRm9jdXNlZFxuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgekRlcHRoID0gdGhpcy5wcm9wcy5kaXNhYmxlZCA/IDAgOiAxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBpbml0aWFsWkRlcHRoOiB6RGVwdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIHpEZXB0aCA9IG5leHRQcm9wcy5kaXNhYmxlZCA/IDAgOiAxO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfTtcblxuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0U3RhdGUuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBidXR0b25TdHlsZSA9IF9wcm9wcy5idXR0b25TdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmRpc2FibGVkQmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGRpc2FibGVkTGFiZWxDb2xvciA9IF9wcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzLmZ1bGxXaWR0aCxcbiAgICAgICAgICBpY29uID0gX3Byb3BzLmljb24sXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgbGFiZWxDb2xvciA9IF9wcm9wcy5sYWJlbENvbG9yLFxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBfcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgb3ZlcmxheVN0eWxlID0gX3Byb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgICAgICBwcmltYXJ5ID0gX3Byb3BzLnByaW1hcnksXG4gICAgICAgICAgcmlwcGxlU3R5bGUgPSBfcHJvcHMucmlwcGxlU3R5bGUsXG4gICAgICAgICAgc2Vjb25kYXJ5ID0gX3Byb3BzLnNlY29uZGFyeSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydiYWNrZ3JvdW5kQ29sb3InLCAnYnV0dG9uU3R5bGUnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkQmFja2dyb3VuZENvbG9yJywgJ2Rpc2FibGVkTGFiZWxDb2xvcicsICdmdWxsV2lkdGgnLCAnaWNvbicsICdsYWJlbCcsICdsYWJlbENvbG9yJywgJ2xhYmVsUG9zaXRpb24nLCAnbGFiZWxTdHlsZScsICdvdmVybGF5U3R5bGUnLCAncHJpbWFyeScsICdyaXBwbGVTdHlsZScsICdzZWNvbmRhcnknLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgbWVyZ2VkUmlwcGxlU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucmlwcGxlLCByaXBwbGVTdHlsZSk7XG5cbiAgICAgIHZhciBidXR0b25FdmVudEhhbmRsZXJzID0gZGlzYWJsZWQgPyB7fSA6IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSBsYWJlbCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpKSwga2V5OiAnbGFiZWxFbGVtZW50JyB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcblxuICAgICAgdmFyIGljb25DbG9uZWQgPSBpY29uICYmICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpY29uLCB7XG4gICAgICAgIGNvbG9yOiBpY29uLnByb3BzLmNvbG9yIHx8IHN0eWxlcy5sYWJlbC5jb2xvcixcbiAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuaWNvbiwgaWNvbi5wcm9wcy5zdHlsZSksXG4gICAgICAgIGtleTogJ2ljb25DbG9uZWQnXG4gICAgICB9KTtcblxuICAgICAgLy8gUGxhY2UgbGFiZWwgYmVmb3JlIG9yIGFmdGVyIGNoaWxkcmVuLlxuICAgICAgdmFyIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW4gPSBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IFtsYWJlbEVsZW1lbnQsIGljb25DbG9uZWQsIGNoaWxkcmVuXSA6IFtjaGlsZHJlbiwgaWNvbkNsb25lZCwgbGFiZWxFbGVtZW50XTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB0aGlzLnN0YXRlLnpEZXB0aFxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIGJ1dHRvbkV2ZW50SGFuZGxlcnMsIHtcbiAgICAgICAgICAgIHJlZjogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5idXR0b24sIGJ1dHRvblN0eWxlKSxcbiAgICAgICAgICAgIGZvY3VzUmlwcGxlQ29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlcy5jb2xvcixcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlcy5jb2xvcixcbiAgICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHksXG4gICAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHk6IG1lcmdlZFJpcHBsZVN0eWxlcy5vcGFjaXR5XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiAnb3ZlcmxheScsXG4gICAgICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMub3ZlcmxheSwgb3ZlcmxheVN0eWxlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmFpc2VkQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUmFpc2VkQnV0dG9uLm11aU5hbWUgPSAnUmFpc2VkQnV0dG9uJztcblJhaXNlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbGFiZWxQb3NpdGlvbjogJ2FmdGVyJyxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgcHJpbWFyeTogZmFsc2UsXG4gIHNlY29uZGFyeTogZmFsc2Vcbn07XG5SYWlzZWRCdXR0b24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblJhaXNlZEJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uLFxuICAgKiBidXQgbm90IHRoZSBkZWZhdWx0IGRpc2FibGVkIGJhY2tncm91bmQgY29sb3JcbiAgICogKHVzZSBgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3JgIGZvciB0aGlzKS5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBidXR0b25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKiBJZiBhIGxhYmVsIGlzIHByb3ZpZGVkIHZpYSB0aGUgYGxhYmVsYCBwcm9wLCB0aGUgdGV4dCB3aXRoaW4gdGhlIGxhYmVsXG4gICAqIHdpbGwgYmUgZGlzcGxheWVkIGluIGFkZGl0aW9uIHRvIHRoZSBjb250ZW50IHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICAqIFRoZSBlbGVtZW50IHRvIHVzZSBhcyB0aGUgY29udGFpbmVyIGZvciB0aGUgUmFpc2VkQnV0dG9uLiBFaXRoZXIgYSBzdHJpbmcgdG9cbiAgICAqIHVzZSBhIERPTSBlbGVtZW50IG9yIGEgUmVhY3RFbGVtZW50LiBUaGlzIGlzIHVzZWZ1bCBmb3Igd3JhcHBpbmcgdGhlXG4gICAgKiBSYWlzZWRCdXR0b24gaW4gYSBjdXN0b20gTGluayBjb21wb25lbnQuIElmIGEgUmVhY3RFbGVtZW50IGlzIGdpdmVuLCBlbnN1cmVcbiAgICAqIHRoYXQgaXQgcGFzc2VzIGFsbCBvZiBpdHMgZ2l2ZW4gcHJvcHMgdGhyb3VnaCB0byB0aGUgdW5kZXJseWluZyBET01cbiAgICAqIGVsZW1lbnQgYW5kIHJlbmRlcnMgaXRzIGNoaWxkcmVuIHByb3AgZm9yIHByb3BlciBpbnRlZ3JhdGlvbi5cbiAgICAqL1xuICBjb250YWluZXJFbGVtZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudF0pLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQncyByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlVG91Y2hSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uXG4gICAqIHdoZW4gaXQgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZEJhY2tncm91bmRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbidzIGxhYmVsIHdoZW4gdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkTGFiZWxDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBocmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIEFuIGljb24gdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaWNvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGJ1dHRvbi5cbiAgICogSWYgY29udGVudCBpcyBwcm92aWRlZCB2aWEgdGhlIGBjaGlsZHJlbmAgcHJvcCwgdGhhdCBjb250ZW50IHdpbGwgYmVcbiAgICogZGlzcGxheWVkIGluIGFkZGl0aW9uIHRvIHRoZSBsYWJlbCBwcm92aWRlZCBoZXJlLlxuICAgKi9cbiAgbGFiZWw6IHZhbGlkYXRlTGFiZWwsXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGJ1dHRvbidzIGxhYmVsLlxuICAgKi9cbiAgbGFiZWxDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIGJ1dHRvbidzIGxhYmVsIHJlbGF0aXZlIHRvIHRoZSBidXR0b24ncyBgY2hpbGRyZW5gLlxuICAgKi9cbiAgbGFiZWxQb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2JlZm9yZScsICdhZnRlciddKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24ncyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBidXR0b24gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBidXR0b24uXG4gICAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hFbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lIHN0eWxlIG9mIHRoZSBidXR0b24gb3ZlcmxheS5cbiAgICovXG4gIG92ZXJsYXlTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlIHRoZSB0aGVtZSdzIHByaW1hcnkgY29sb3IuXG4gICAqL1xuICBwcmltYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lIHN0eWxlIG9mIHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICovXG4gIHJpcHBsZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3Mgc2Vjb25kYXJ5IGNvbG9yLlxuICAgKiBJZiBib3RoIGBzZWNvbmRhcnlgIGFuZCBgcHJpbWFyeWAgYXJlIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2VcbiAgICogdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHNlY29uZGFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmFpc2VkQnV0dG9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX2F1dG9QcmVmaXggPSByZXF1aXJlKCcuLi91dGlscy9hdXRvUHJlZml4Jyk7XG5cbnZhciBfYXV0b1ByZWZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvUHJlZml4KTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9TY2FsZUluID0gcmVxdWlyZSgnLi9TY2FsZUluJyk7XG5cbnZhciBfU2NhbGVJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY2FsZUluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHB1bHNhdGVEdXJhdGlvbiA9IDc1MDtcblxudmFyIEZvY3VzUmlwcGxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRm9jdXNSaXBwbGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvY3VzUmlwcGxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEZvY3VzUmlwcGxlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEZvY3VzUmlwcGxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShGb2N1c1JpcHBsZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnB1bHNhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXJDaXJjbGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMucmVmcy5pbm5lckNpcmNsZSk7XG4gICAgICBpZiAoIWlubmVyQ2lyY2xlKSByZXR1cm47XG5cbiAgICAgIHZhciBzdGFydFNjYWxlID0gJ3NjYWxlKDEpJztcbiAgICAgIHZhciBlbmRTY2FsZSA9ICdzY2FsZSgwLjg1KSc7XG4gICAgICB2YXIgY3VycmVudFNjYWxlID0gaW5uZXJDaXJjbGUuc3R5bGUudHJhbnNmb3JtIHx8IHN0YXJ0U2NhbGU7XG4gICAgICB2YXIgbmV4dFNjYWxlID0gY3VycmVudFNjYWxlID09PSBzdGFydFNjYWxlID8gZW5kU2NhbGUgOiBzdGFydFNjYWxlO1xuXG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoaW5uZXJDaXJjbGUuc3R5bGUsICd0cmFuc2Zvcm0nLCBuZXh0U2NhbGUpO1xuICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoX3RoaXMucHVsc2F0ZSwgcHVsc2F0ZUR1cmF0aW9uKTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRm9jdXNSaXBwbGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgICAgdGhpcy5zZXRSaXBwbGVTaXplKCk7XG4gICAgICAgIHRoaXMucHVsc2F0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgICB0aGlzLnNldFJpcHBsZVNpemUoKTtcbiAgICAgICAgdGhpcy5wdWxzYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UmlwcGxlRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJpcHBsZUVsZW1lbnQocHJvcHMpIHtcbiAgICAgIHZhciBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGlubmVyU3R5bGUgPSBwcm9wcy5pbm5lclN0eWxlLFxuICAgICAgICAgIG9wYWNpdHkgPSBwcm9wcy5vcGFjaXR5O1xuICAgICAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHByZXBhcmVTdHlsZXMgPSBfY29udGV4dCRtdWlUaGVtZS5wcmVwYXJlU3R5bGVzLFxuICAgICAgICAgIHJpcHBsZSA9IF9jb250ZXh0JG11aVRoZW1lLnJpcHBsZTtcblxuXG4gICAgICB2YXIgaW5uZXJTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHkgPyBvcGFjaXR5IDogMC4xNixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvciB8fCByaXBwbGUuY29sb3IsXG4gICAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KHB1bHNhdGVEdXJhdGlvbiArICdtcycsICd0cmFuc2Zvcm0nLCBudWxsLCBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZUluT3V0RnVuY3Rpb24pXG4gICAgICB9LCBpbm5lclN0eWxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogJ2lubmVyQ2lyY2xlJywgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBpbm5lclN0eWxlcykpIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFJpcHBsZVNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSaXBwbGVTaXplKCkge1xuICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbm5lckNpcmNsZSk7XG4gICAgICB2YXIgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgc2l6ZSA9IE1hdGgubWF4KGhlaWdodCwgd2lkdGgpO1xuXG4gICAgICB2YXIgb2xkVG9wID0gMDtcbiAgICAgIC8vIEZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgZW5kc1dpdGgoKVxuICAgICAgaWYgKGVsLnN0eWxlLnRvcC5pbmRleE9mKCdweCcsIGVsLnN0eWxlLnRvcC5sZW5ndGggLSAyKSAhPT0gLTEpIHtcbiAgICAgICAgb2xkVG9wID0gcGFyc2VJbnQoZWwuc3R5bGUudG9wKTtcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgZWwuc3R5bGUudG9wID0gaGVpZ2h0IC8gMiAtIHNpemUgLyAyICsgb2xkVG9wICsgJ3B4JztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzaG93ID0gX3Byb3BzLnNob3csXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICB2YXIgcmlwcGxlID0gc2hvdyA/IHRoaXMuZ2V0UmlwcGxlRWxlbWVudCh0aGlzLnByb3BzKSA6IG51bGw7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1NjYWxlSW4yLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBtYXhTY2FsZTogMC44NSxcbiAgICAgICAgICBzdHlsZTogbWVyZ2VkUm9vdFN0eWxlc1xuICAgICAgICB9LFxuICAgICAgICByaXBwbGVcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb2N1c1JpcHBsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZvY3VzUmlwcGxlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Gb2N1c1JpcHBsZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaW5uZXJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIG9wYWNpdHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9jdXNSaXBwbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvRm9jdXNSaXBwbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCcpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uR3JvdXApO1xuXG52YXIgX1NjYWxlSW5DaGlsZCA9IHJlcXVpcmUoJy4vU2NhbGVJbkNoaWxkJyk7XG5cbnZhciBfU2NhbGVJbkNoaWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NjYWxlSW5DaGlsZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTY2FsZUluID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU2NhbGVJbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2NhbGVJbigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTY2FsZUluKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoU2NhbGVJbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoU2NhbGVJbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU2NhbGVJbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjaGlsZFN0eWxlID0gX3Byb3BzLmNoaWxkU3R5bGUsXG4gICAgICAgICAgZW50ZXJEZWxheSA9IF9wcm9wcy5lbnRlckRlbGF5LFxuICAgICAgICAgIG1heFNjYWxlID0gX3Byb3BzLm1heFNjYWxlLFxuICAgICAgICAgIG1pblNjYWxlID0gX3Byb3BzLm1pblNjYWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2NoaWxkU3R5bGUnLCAnZW50ZXJEZWxheScsICdtYXhTY2FsZScsICdtaW5TY2FsZScsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1NjYWxlSW5DaGlsZDIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgIGVudGVyRGVsYXk6IGVudGVyRGVsYXksXG4gICAgICAgICAgICBtYXhTY2FsZTogbWF4U2NhbGUsXG4gICAgICAgICAgICBtaW5TY2FsZTogbWluU2NhbGUsXG4gICAgICAgICAgICBzdHlsZTogY2hpbGRTdHlsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkUm9vdFN0eWxlcyksXG4gICAgICAgICAgY29tcG9uZW50OiAnZGl2J1xuICAgICAgICB9KSxcbiAgICAgICAgbmV3Q2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTY2FsZUluO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU2NhbGVJbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGVudGVyRGVsYXk6IDBcbn07XG5TY2FsZUluLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5TY2FsZUluLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGVudGVyRGVsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtYXhTY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1pblNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNjYWxlSW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvU2NhbGVJbi5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNoYWluKCl7XHJcbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICB2YXIgYXJncyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG4gICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxyXG5cclxuICBhcmdzID0gYXJncy5maWx0ZXIoZnVuY3Rpb24oZm4peyByZXR1cm4gZm4gIT0gbnVsbCB9KVxyXG5cclxuICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWRcclxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHJldHVybiBhcmdzWzBdXHJcblxyXG4gIHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihjdXJyZW50LCBuZXh0KXtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XHJcbiAgICAgIGN1cnJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgbmV4dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9KVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NoYWluLWZ1bmN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmc7XG5leHBvcnRzLm1lcmdlQ2hpbGRNYXBwaW5ncyA9IG1lcmdlQ2hpbGRNYXBwaW5ncztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbikge1xuICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICBpZiAobmV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gbmV4dFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2W2tleV07XG4gIH1cblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IHt9O1xuXG4gIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAobmV4dC5oYXNPd25Qcm9wZXJ0eShwcmV2S2V5KSkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSA9IHZvaWQgMDtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHQpIHtcbiAgICBpZiAobmV4dEtleXNQZW5kaW5nLmhhc093blByb3BlcnR5KG5leHRLZXkpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwZW5kaW5nTmV4dEtleSA9IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXTtcbiAgICAgICAgY2hpbGRNYXBwaW5nW25leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nTmV4dEtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9XG5cbiAgLy8gRmluYWxseSwgYWRkIHRoZSBrZXlzIHdoaWNoIGRpZG4ndCBhcHBlYXIgYmVmb3JlIGFueSBrZXkgaW4gYG5leHRgXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfYXV0b1ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9QcmVmaXgnKTtcblxudmFyIF9hdXRvUHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9QcmVmaXgpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU2NhbGVJbkNoaWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU2NhbGVJbkNoaWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY2FsZUluQ2hpbGQoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgU2NhbGVJbkNoaWxkKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoU2NhbGVJbkNoaWxkLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUluQ2hpbGQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFNjYWxlSW5DaGlsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZW50ZXJUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihjYWxsYmFjaykge1xuICAgICAgdGhpcy5pbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUFuaW1hdGlvbihjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkQXBwZWFyKCkge1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRFbnRlcigpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShjYWxsYmFjaykge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuXG4gICAgICBzdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyB0aGlzLnByb3BzLm1pblNjYWxlICsgJyknKTtcblxuICAgICAgdGhpcy5sZWF2ZVRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgNDUwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhbmltYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBzdHlsZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKS5zdHlsZTtcblxuICAgICAgc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgnICsgdGhpcy5wcm9wcy5tYXhTY2FsZSArICcpJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5pdGlhbGl6ZUFuaW1hdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIHZhciBzdHlsZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKS5zdHlsZTtcblxuICAgICAgc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgwKScpO1xuXG4gICAgICB0aGlzLmVudGVyVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLnByb3BzLmVudGVyRGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGVudGVyRGVsYXkgPSBfcHJvcHMuZW50ZXJEZWxheSxcbiAgICAgICAgICBtYXhTY2FsZSA9IF9wcm9wcy5tYXhTY2FsZSxcbiAgICAgICAgICBtaW5TY2FsZSA9IF9wcm9wcy5taW5TY2FsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdlbnRlckRlbGF5JywgJ21heFNjYWxlJywgJ21pblNjYWxlJywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQobnVsbCwgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKVxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRSb290U3R5bGVzKSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTY2FsZUluQ2hpbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TY2FsZUluQ2hpbGQuZGVmYXVsdFByb3BzID0ge1xuICBlbnRlckRlbGF5OiAwLFxuICBtYXhTY2FsZTogMSxcbiAgbWluU2NhbGU6IDBcbn07XG5TY2FsZUluQ2hpbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblNjYWxlSW5DaGlsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGVudGVyRGVsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtYXhTY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1pblNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBTY2FsZUluQ2hpbGQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvaW50ZXJuYWwvU2NhbGVJbkNoaWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheScpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ29uc3VtYWJsZUFycmF5Mik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3RvQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXknKTtcblxudmFyIF90b0FycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQXJyYXkyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9kb20gPSByZXF1aXJlKCcuLi91dGlscy9kb20nKTtcblxudmFyIF9kb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tKTtcblxudmFyIF9DaXJjbGVSaXBwbGUgPSByZXF1aXJlKCcuL0NpcmNsZVJpcHBsZScpO1xuXG52YXIgX0NpcmNsZVJpcHBsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DaXJjbGVSaXBwbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBSZW1vdmUgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5XG52YXIgc2hpZnQgPSBmdW5jdGlvbiBzaGlmdChfcmVmKSB7XG4gIHZhciBfcmVmMiA9ICgwLCBfdG9BcnJheTMuZGVmYXVsdCkoX3JlZiksXG4gICAgICBuZXdBcnJheSA9IF9yZWYyLnNsaWNlKDEpO1xuXG4gIHJldHVybiBuZXdBcnJheTtcbn07XG5cbnZhciBUb3VjaFJpcHBsZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRvdWNoUmlwcGxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb3VjaFJpcHBsZShwcm9wcywgY29udGV4dCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRvdWNoUmlwcGxlKTtcblxuICAgIC8vIFRvdWNoIHN0YXJ0IHByb2R1Y2VzIGEgbW91c2UgZG93biBldmVudCBmb3IgY29tcGF0IHJlYXNvbnMuIFRvIGF2b2lkXG4gICAgLy8gc2hvd2luZyByaXBwbGVzIHR3aWNlIHdlIHNraXAgc2hvd2luZyBhIHJpcHBsZSBmb3IgdGhlIGZpcnN0IG1vdXNlIGRvd25cbiAgICAvLyBhZnRlciBhIHRvdWNoIHN0YXJ0LiBOb3RlIHdlIGRvbid0IHN0b3JlIGlnbm9yZU5leHRNb3VzZURvd24gaW4gdGhpcy5zdGF0ZVxuICAgIC8vIHRvIGF2b2lkIHJlLXJlbmRlcmluZyB3aGVuIHdlIGNoYW5nZSBpdC5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChUb3VjaFJpcHBsZS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVG91Y2hSaXBwbGUpKS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIG9ubHkgbGlzdGVuIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIF90aGlzLnN0YXJ0KGV2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5lbmQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmVuZCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIElmIHRoZSB1c2VyIGlzIHN3aXBpbmcgKG5vdCBqdXN0IHRhcHBpbmcpLCBzYXZlIHRoZSBwb3NpdGlvbiBzbyB3ZSBjYW5cbiAgICAgIC8vIGFib3J0IHJpcHBsZXMgaWYgdGhlIHVzZXIgYXBwZWFycyB0byBiZSBzY3JvbGxpbmcuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuYWJvcnRPblNjcm9sbCAmJiBldmVudC50b3VjaGVzKSB7XG4gICAgICAgIF90aGlzLnN0YXJ0TGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoZXZlbnQpO1xuICAgICAgICBfdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuICAgICAgX3RoaXMuc3RhcnQoZXZlbnQsIHRydWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmVuZCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIFN0b3AgdHJ5aW5nIHRvIGFib3J0IGlmIHdlJ3JlIGFscmVhZHkgMzAwbXMgaW50byB0aGUgYW5pbWF0aW9uXG4gICAgICB2YXIgdGltZVNpbmNlU3RhcnQgPSBNYXRoLmFicyhEYXRlLm5vdygpIC0gX3RoaXMuc3RhcnRUaW1lKTtcbiAgICAgIGlmICh0aW1lU2luY2VTdGFydCA+IDMwMCkge1xuICAgICAgICBfdGhpcy5zdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgdXNlciBpcyBzY3JvbGxpbmcuLi5cbiAgICAgIHZhciBkZWx0YVkgPSBNYXRoLmFicyhldmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSBfdGhpcy5maXJzdFRvdWNoWSk7XG4gICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnMoZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gX3RoaXMuZmlyc3RUb3VjaFgpO1xuICAgICAgLy8gQ2FsbCBpdCBhIHNjcm9sbCBhZnRlciBhbiBhcmJpdHJhcnkgNnB4IChmZWVscyByZWFzb25hYmxlIGluIHRlc3RpbmcpXG4gICAgICBpZiAoZGVsdGFZID4gNiB8fCBkZWx0YVggPiA2KSB7XG4gICAgICAgIHZhciBjdXJyZW50UmlwcGxlcyA9IF90aGlzLnN0YXRlLnJpcHBsZXM7XG4gICAgICAgIHZhciByaXBwbGUgPSBjdXJyZW50UmlwcGxlc1swXTtcbiAgICAgICAgLy8gVGhpcyBjbG9uZSB3aWxsIHJlcGxhY2UgdGhlIHJpcHBsZSBpbiBSZWFjdFRyYW5zaXRpb25Hcm91cCB3aXRoIGFcbiAgICAgICAgLy8gdmVyc2lvbiB0aGF0IHdpbGwgZGlzYXBwZWFyIGltbWVkaWF0ZWx5IHdoZW4gcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICAgICAgdmFyIGFib3J0ZWRSaXBwbGUgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHJpcHBsZSwgeyBhYm9ydGVkOiB0cnVlIH0pO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIG9sZCByaXBwbGUgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IHVwZGF0ZWQgb25lXG4gICAgICAgIGN1cnJlbnRSaXBwbGVzID0gc2hpZnQoY3VycmVudFJpcHBsZXMpO1xuICAgICAgICBjdXJyZW50UmlwcGxlcyA9IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KShjdXJyZW50UmlwcGxlcyksIFthYm9ydGVkUmlwcGxlXSk7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgcmlwcGxlczogY3VycmVudFJpcHBsZXMgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIENhbGwgZW5kIGFmdGVyIHdlJ3ZlIHNldCB0aGUgcmlwcGxlIHRvIGFib3J0IG90aGVyd2lzZSB0aGUgc2V0U3RhdGVcbiAgICAgICAgICAvLyBpbiBlbmQoKSBtZXJnZXMgd2l0aCB0aGlzIGFuZCB0aGUgcmlwcGxlIGFib3J0IGZhaWxzXG4gICAgICAgICAgX3RoaXMuZW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5pZ25vcmVOZXh0TW91c2VEb3duID0gZmFsc2U7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFRoaXMgcHJvcCBhbGxvd3MgdXMgdG8gb25seSByZW5kZXIgdGhlIFJlYWN0VHJhbnNpdGlvbkdyb3VwXG4gICAgICAvLyBvbiB0aGUgZmlyc3QgY2xpY2sgb2YgdGhlIGNvbXBvbmVudCwgbWFraW5nIHRoZSBpbml0YWwgcmVuZGVyIGZhc3Rlci5cbiAgICAgIGhhc1JpcHBsZXM6IGZhbHNlLFxuICAgICAgbmV4dEtleTogMCxcbiAgICAgIHJpcHBsZXM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUb3VjaFJpcHBsZSwgW3tcbiAgICBrZXk6ICdzdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50LCBpc1JpcHBsZVRvdWNoR2VuZXJhdGVkKSB7XG4gICAgICB2YXIgdGhlbWUgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucmlwcGxlO1xuXG4gICAgICBpZiAodGhpcy5pZ25vcmVOZXh0TW91c2VEb3duICYmICFpc1JpcHBsZVRvdWNoR2VuZXJhdGVkKSB7XG4gICAgICAgIHRoaXMuaWdub3JlTmV4dE1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByaXBwbGVzID0gdGhpcy5zdGF0ZS5yaXBwbGVzO1xuXG4gICAgICAvLyBBZGQgYSByaXBwbGUgdG8gdGhlIHJpcHBsZXMgYXJyYXlcbiAgICAgIHJpcHBsZXMgPSBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTMuZGVmYXVsdCkocmlwcGxlcyksIFtfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ2lyY2xlUmlwcGxlMi5kZWZhdWx0LCB7XG4gICAgICAgIGtleTogdGhpcy5zdGF0ZS5uZXh0S2V5LFxuICAgICAgICBzdHlsZTogIXRoaXMucHJvcHMuY2VudGVyUmlwcGxlID8gdGhpcy5nZXRSaXBwbGVTdHlsZShldmVudCkgOiB7fSxcbiAgICAgICAgY29sb3I6IHRoaXMucHJvcHMuY29sb3IgfHwgdGhlbWUuY29sb3IsXG4gICAgICAgIG9wYWNpdHk6IHRoaXMucHJvcHMub3BhY2l0eSxcbiAgICAgICAgdG91Y2hHZW5lcmF0ZWQ6IGlzUmlwcGxlVG91Y2hHZW5lcmF0ZWRcbiAgICAgIH0pXSk7XG5cbiAgICAgIHRoaXMuaWdub3JlTmV4dE1vdXNlRG93biA9IGlzUmlwcGxlVG91Y2hHZW5lcmF0ZWQ7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFzUmlwcGxlczogdHJ1ZSxcbiAgICAgICAgbmV4dEtleTogdGhpcy5zdGF0ZS5uZXh0S2V5ICsgMSxcbiAgICAgICAgcmlwcGxlczogcmlwcGxlc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5kKCkge1xuICAgICAgdmFyIGN1cnJlbnRSaXBwbGVzID0gdGhpcy5zdGF0ZS5yaXBwbGVzO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJpcHBsZXM6IHNoaWZ0KGN1cnJlbnRSaXBwbGVzKVxuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hYm9ydE9uU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuc3RvcExpc3RlbmluZ0ZvclNjcm9sbEFib3J0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgc2VlbXMgdG8gYmUgc2Nyb2xsaW5nIGFuZCBhYm9ydCB0aGUgYW5pbWF0aW9uIGlmIHNvXG5cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0TGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydExpc3RlbmluZ0ZvclNjcm9sbEFib3J0KGV2ZW50KSB7XG4gICAgICB0aGlzLmZpcnN0VG91Y2hZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgdGhpcy5maXJzdFRvdWNoWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIC8vIE5vdGUgdGhhdCB3aGVuIHNjb2xsaW5nIENocm9tZSB0aHJvdHRsZXMgdGhpcyBldmVudCB0byBldmVyeSAyMDBtc1xuICAgICAgLy8gQWxzbyBub3RlIHdlIGRvbid0IGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50cyBkaXJlY3RseSBhcyB0aGVyZSdzIG5vIGdlbmVyYWxcbiAgICAgIC8vIHdheSB0byBjb3ZlciBjYXNlcyBsaWtlIHNjcm9sbGluZyB3aXRoaW4gY29udGFpbmVycyBvbiB0aGUgcGFnZVxuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcExpc3RlbmluZ0ZvclNjcm9sbEFib3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ0ZvclNjcm9sbEFib3J0KCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UmlwcGxlU3R5bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSaXBwbGVTdHlsZShldmVudCkge1xuICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIGVsSGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIGVsV2lkdGggPSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBvZmZzZXQgPSBfZG9tMi5kZWZhdWx0Lm9mZnNldChlbCk7XG4gICAgICB2YXIgaXNUb3VjaEV2ZW50ID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aDtcbiAgICAgIHZhciBwYWdlWCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5wYWdlWDtcbiAgICAgIHZhciBwYWdlWSA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5wYWdlWTtcbiAgICAgIHZhciBwb2ludGVyWCA9IHBhZ2VYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICB2YXIgcG9pbnRlclkgPSBwYWdlWSAtIG9mZnNldC50b3A7XG4gICAgICB2YXIgdG9wTGVmdERpYWcgPSB0aGlzLmNhbGNEaWFnKHBvaW50ZXJYLCBwb2ludGVyWSk7XG4gICAgICB2YXIgdG9wUmlnaHREaWFnID0gdGhpcy5jYWxjRGlhZyhlbFdpZHRoIC0gcG9pbnRlclgsIHBvaW50ZXJZKTtcbiAgICAgIHZhciBib3RSaWdodERpYWcgPSB0aGlzLmNhbGNEaWFnKGVsV2lkdGggLSBwb2ludGVyWCwgZWxIZWlnaHQgLSBwb2ludGVyWSk7XG4gICAgICB2YXIgYm90TGVmdERpYWcgPSB0aGlzLmNhbGNEaWFnKHBvaW50ZXJYLCBlbEhlaWdodCAtIHBvaW50ZXJZKTtcbiAgICAgIHZhciByaXBwbGVSYWRpdXMgPSBNYXRoLm1heCh0b3BMZWZ0RGlhZywgdG9wUmlnaHREaWFnLCBib3RSaWdodERpYWcsIGJvdExlZnREaWFnKTtcbiAgICAgIHZhciByaXBwbGVTaXplID0gcmlwcGxlUmFkaXVzICogMjtcbiAgICAgIHZhciBsZWZ0ID0gcG9pbnRlclggLSByaXBwbGVSYWRpdXM7XG4gICAgICB2YXIgdG9wID0gcG9pbnRlclkgLSByaXBwbGVSYWRpdXM7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGlvbkludmFyaWFudDogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0OiByaXBwbGVTaXplLFxuICAgICAgICB3aWR0aDogcmlwcGxlU2l6ZSxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIGxlZnQ6IGxlZnRcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FsY0RpYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWxjRGlhZyhhLCBiKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaGFzUmlwcGxlcyA9IF9zdGF0ZS5oYXNSaXBwbGVzLFxuICAgICAgICAgIHJpcHBsZXMgPSBfc3RhdGUucmlwcGxlcztcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIHJpcHBsZUdyb3VwID0gdm9pZCAwO1xuXG4gICAgICBpZiAoaGFzUmlwcGxlcykge1xuICAgICAgICB2YXIgbWVyZ2VkU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgekluZGV4OiAxIC8vIFRoaXMgaXMgYWxzbyBuZWVkZWQgc28gdGhhdCByaXBwbGVzIGRvIG5vdCBibGVlZCBwYXN0IGEgcGFyZW50IGJvcmRlciByYWRpdXMuXG4gICAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgICByaXBwbGVHcm91cCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRTdHlsZXMpIH0sXG4gICAgICAgICAgcmlwcGxlc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZU1vdXNlVXAsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgICAgfSxcbiAgICAgICAgcmlwcGxlR3JvdXAsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVG91Y2hSaXBwbGU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Ub3VjaFJpcHBsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFib3J0T25TY3JvbGw6IHRydWVcbn07XG5Ub3VjaFJpcHBsZS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVG91Y2hSaXBwbGUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBhYm9ydE9uU2Nyb2xsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNlbnRlclJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9wYWNpdHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRvdWNoUmlwcGxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1RvdWNoUmlwcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX2F1dG9QcmVmaXggPSByZXF1aXJlKCcuLi91dGlscy9hdXRvUHJlZml4Jyk7XG5cbnZhciBfYXV0b1ByZWZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvUHJlZml4KTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIENpcmNsZVJpcHBsZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKENpcmNsZVJpcHBsZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2lyY2xlUmlwcGxlKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIENpcmNsZVJpcHBsZSk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKENpcmNsZVJpcHBsZS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQ2lyY2xlUmlwcGxlKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShDaXJjbGVSaXBwbGUsIFt7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZW50ZXJUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihjYWxsYmFjaykge1xuICAgICAgdGhpcy5pbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUFuaW1hdGlvbihjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkQXBwZWFyKCkge1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRFbnRlcigpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShjYWxsYmFjaykge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuICAgICAgc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAvLyBJZiB0aGUgYW5pbWF0aW9uIGlzIGFib3J0ZWQsIHJlbW92ZSBmcm9tIHRoZSBET00gaW1tZWRpYXRlbHlcbiAgICAgIHZhciByZW1vdmVBZnRlciA9IHRoaXMucHJvcHMuYWJvcnRlZCA/IDAgOiAyMDAwO1xuICAgICAgdGhpcy5lbnRlclRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgcmVtb3ZlQWZ0ZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FuaW1hdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuICAgICAgdmFyIHRyYW5zaXRpb25WYWx1ZSA9IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcycycsICdvcGFjaXR5JykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzFzJywgJ3RyYW5zZm9ybScpO1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNpdGlvbicsIHRyYW5zaXRpb25WYWx1ZSk7XG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoc3R5bGUsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMSknKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbml0aWFsaXplQW5pbWF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdGlhbGl6ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuICAgICAgc3R5bGUub3BhY2l0eSA9IHRoaXMucHJvcHMub3BhY2l0eTtcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgwKScpO1xuICAgICAgdGhpcy5sZWF2ZVRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWJvcnRlZCA9IF9wcm9wcy5hYm9ydGVkLFxuICAgICAgICAgIGNvbG9yID0gX3Byb3BzLmNvbG9yLFxuICAgICAgICAgIG9wYWNpdHkgPSBfcHJvcHMub3BhY2l0eSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB0b3VjaEdlbmVyYXRlZCA9IF9wcm9wcy50b3VjaEdlbmVyYXRlZCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhYm9ydGVkJywgJ2NvbG9yJywgJ29wYWNpdHknLCAnc3R5bGUnLCAndG91Y2hHZW5lcmF0ZWQnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFN0eWxlcykgfSkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2lyY2xlUmlwcGxlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ2lyY2xlUmlwcGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3BhY2l0eTogMC4xLFxuICBhYm9ydGVkOiBmYWxzZVxufTtcbkNpcmNsZVJpcHBsZS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuQ2lyY2xlUmlwcGxlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYWJvcnRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9wYWNpdHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRvdWNoR2VuZXJhdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IENpcmNsZVJpcHBsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9DaXJjbGVSaXBwbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIHJvdW5kZWQgPSBwcm9wcy5yb3VuZGVkLFxuICAgICAgY2lyY2xlID0gcHJvcHMuY2lyY2xlLFxuICAgICAgdHJhbnNpdGlvbkVuYWJsZWQgPSBwcm9wcy50cmFuc2l0aW9uRW5hYmxlZCxcbiAgICAgIHpEZXB0aCA9IHByb3BzLnpEZXB0aDtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIHBhcGVyID0gX2NvbnRleHQkbXVpVGhlbWUucGFwZXIsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfY29udGV4dCRtdWlUaGVtZS5ib3JkZXJSYWRpdXM7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGNvbG9yOiBwYXBlci5jb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcGFwZXIuYmFja2dyb3VuZENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbkVuYWJsZWQgJiYgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLCAvLyBSZW1vdmUgbW9iaWxlIGNvbG9yIGZsYXNoaW5nIChkZXByZWNhdGVkKVxuICAgICAgYm94U2hhZG93OiBwYXBlci56RGVwdGhTaGFkb3dzW3pEZXB0aCAtIDFdLCAvLyBObyBzaGFkb3cgZm9yIDAgZGVwdGggcGFwZXJzXG4gICAgICBib3JkZXJSYWRpdXM6IGNpcmNsZSA/ICc1MCUnIDogcm91bmRlZCA/IGJvcmRlclJhZGl1cyA6ICcwcHgnXG4gICAgfVxuICB9O1xufVxuXG52YXIgUGFwZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShQYXBlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFwZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUGFwZXIpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChQYXBlci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUGFwZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFBhcGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNpcmNsZSA9IF9wcm9wcy5jaXJjbGUsXG4gICAgICAgICAgcm91bmRlZCA9IF9wcm9wcy5yb3VuZGVkLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHRyYW5zaXRpb25FbmFibGVkID0gX3Byb3BzLnRyYW5zaXRpb25FbmFibGVkLFxuICAgICAgICAgIHpEZXB0aCA9IF9wcm9wcy56RGVwdGgsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY2lyY2xlJywgJ3JvdW5kZWQnLCAnc3R5bGUnLCAndHJhbnNpdGlvbkVuYWJsZWQnLCAnekRlcHRoJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUGFwZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5QYXBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNpcmNsZTogZmFsc2UsXG4gIHJvdW5kZWQ6IHRydWUsXG4gIHRyYW5zaXRpb25FbmFibGVkOiB0cnVlLFxuICB6RGVwdGg6IDFcbn07XG5QYXBlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUGFwZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQ2hpbGRyZW4gcGFzc2VkIGludG8gdGhlIHBhcGVyIGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZ2VuZXJhdGUgYSBjaXJjdWxhciBwYXBlciBjb250YWluZXIuXG4gICAqL1xuICBjaXJjbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBwYXBlciBjb250YWluZXIgd2lsbCBoYXZlIGEgYm9yZGVyIHJhZGl1cy5cbiAgICogU2V0IHRoaXMgdG8gZmFsc2UgdG8gZ2VuZXJhdGUgYSBjb250YWluZXIgd2l0aCBzaGFycCBjb3JuZXJzLlxuICAgKi9cbiAgcm91bmRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIENTUyB0cmFuc2l0aW9ucyBmb3IgdGhlIHBhcGVyIGVsZW1lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uRW5hYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhpcyBudW1iZXIgcmVwcmVzZW50cyB0aGUgekRlcHRoIG9mIHRoZSBwYXBlciBzaGFkb3cuXG4gICAqL1xuICB6RGVwdGg6IF9wcm9wVHlwZXM0LmRlZmF1bHQuekRlcHRoXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBQYXBlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9QYXBlci9QYXBlci5qc1xuLy8gbW9kdWxlIGlkID0gMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsID0gZXhwb3J0cy5Qb3BvdmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX1BvcG92ZXIyID0gcmVxdWlyZSgnLi9Qb3BvdmVyJyk7XG5cbnZhciBfUG9wb3ZlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3BvdmVyMik7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMiA9IHJlcXVpcmUoJy4vUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsJyk7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlBvcG92ZXIgPSBfUG9wb3ZlcjMuZGVmYXVsdDtcbmV4cG9ydHMuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsID0gX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9Qb3BvdmVyMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG52YXIgX2tleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKTtcblxudmFyIF9rZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleXMpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24nKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZXhwb3J0cy53aXRoT3B0aW9ucyA9IHdpdGhPcHRpb25zO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3N1cHBvcnRzID0gcmVxdWlyZSgnLi9zdXBwb3J0cycpO1xuXG52YXIgc3VwcG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc3VwcG9ydHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdEV2ZW50T3B0aW9ucyA9IHtcbiAgY2FwdHVyZTogZmFsc2UsXG4gIHBhc3NpdmU6IGZhbHNlXG59O1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCAqL1xuXG5mdW5jdGlvbiBtZXJnZURlZmF1bHRFdmVudE9wdGlvbnMob3B0aW9ucykge1xuICByZXR1cm4gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBkZWZhdWx0RXZlbnRPcHRpb25zLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRMaXN0ZW5lckFyZ3MoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgYXJncyA9IFtldmVudE5hbWUsIGNhbGxiYWNrXTtcbiAgYXJncy5wdXNoKHN1cHBvcnRzLnBhc3NpdmVPcHRpb24gPyBvcHRpb25zIDogb3B0aW9ucy5jYXB0dXJlKTtcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbmZ1bmN0aW9uIG9uKHRhcmdldCwgZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAoc3VwcG9ydHMuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgZ2V0RXZlbnRMaXN0ZW5lckFyZ3MoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucykpO1xuICB9IGVsc2UgaWYgKHN1cHBvcnRzLmF0dGFjaEV2ZW50KSB7XG4gICAgLy8gSUU4KyBTdXBwb3J0XG4gICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmYodGFyZ2V0LCBldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmIChzdXBwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBnZXRFdmVudExpc3RlbmVyQXJncyhldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSk7XG4gIH0gZWxzZSBpZiAoc3VwcG9ydHMuZGV0YWNoRXZlbnQpIHtcbiAgICAvLyBJRTgrIFN1cHBvcnRcbiAgICB0YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hMaXN0ZW5lcihwcm9wcywgaXRlcmF0ZWUpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0YXJnZXQgPSBwcm9wcy50YXJnZXQsXG4gICAgICBldmVudFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkocHJvcHMsIFsnY2hpbGRyZW4nLCAndGFyZ2V0J10pO1xuXG5cbiAgKDAsIF9rZXlzMi5kZWZhdWx0KShldmVudFByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUuc3Vic3RyaW5nKDAsIDIpICE9PSAnb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3AgPSBldmVudFByb3BzW25hbWVdO1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHByb3AgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkocHJvcCk7XG4gICAgdmFyIGlzT2JqZWN0ID0gdHlwZSA9PT0gJ29iamVjdCc7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlID09PSAnZnVuY3Rpb24nO1xuXG4gICAgaWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYXB0dXJlID0gbmFtZS5zdWJzdHIoLTcpLnRvTG93ZXJDYXNlKCkgPT09ICdjYXB0dXJlJztcbiAgICB2YXIgZXZlbnROYW1lID0gbmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcbiAgICBldmVudE5hbWUgPSBjYXB0dXJlID8gZXZlbnROYW1lLnN1YnN0cmluZygwLCBldmVudE5hbWUubGVuZ3RoIC0gNykgOiBldmVudE5hbWU7XG5cbiAgICBpZiAoaXNPYmplY3QpIHtcbiAgICAgIGl0ZXJhdGVlKGV2ZW50TmFtZSwgcHJvcC5oYW5kbGVyLCBwcm9wLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZShldmVudE5hbWUsIHByb3AsIG1lcmdlRGVmYXVsdEV2ZW50T3B0aW9ucyh7IGNhcHR1cmU6IGNhcHR1cmUgfSkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdpdGhPcHRpb25zKGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShvcHRpb25zLCAncmVhY3QtZXZlbnQtbGlzdGVuZXI6IFNob3VsZCBiZSBzcGVjaWZpZWQgb3B0aW9ucyBpbiB3aXRoT3B0aW9ucy4nKSA6IHZvaWQgMDtcblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgb3B0aW9uczogbWVyZ2VEZWZhdWx0RXZlbnRPcHRpb25zKG9wdGlvbnMpXG4gIH07XG59XG5cbnZhciBFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRXZlbnRMaXN0ZW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBFdmVudExpc3RlbmVyKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoRXZlbnRMaXN0ZW5lci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRXZlbnRMaXN0ZW5lcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRXZlbnRMaXN0ZW5lciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuYXBwbHlMaXN0ZW5lcnMob24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUxpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuYXBwbHlMaXN0ZW5lcnMob2ZmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhcHBseUxpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5TGlzdGVuZXJzKG9uT3JPZmYpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGVsZW1lbnQgPSB3aW5kb3dbdGFyZ2V0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvckVhY2hMaXN0ZW5lcih0aGlzLnByb3BzLCBvbk9yT2ZmLmJpbmQobnVsbCwgZWxlbWVudCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudExpc3RlbmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRXZlbnRMaXN0ZW5lci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgY2hpbGQgdG9vLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoZSBET00gdGFyZ2V0IHRvIGxpc3RlbiB0by5cbiAgICovXG4gIHRhcmdldDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWRcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50TGlzdGVuZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtZXZlbnQtbGlzdGVuZXIvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXNzaXZlT3B0aW9uID0gZXhwb3J0cy5kZXRhY2hFdmVudCA9IGV4cG9ydHMuYXR0YWNoRXZlbnQgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmNhblVzZURPTSA9IHVuZGVmaW5lZDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL21hc3Rlci9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzXG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGNhblVzZURPTSAmJiAnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93O1xudmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBjYW5Vc2VET00gJiYgJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIHdpbmRvdztcblxuLy8gSUU4KyBTdXBwb3J0XG52YXIgYXR0YWNoRXZlbnQgPSBleHBvcnRzLmF0dGFjaEV2ZW50ID0gY2FuVXNlRE9NICYmICdhdHRhY2hFdmVudCcgaW4gd2luZG93O1xudmFyIGRldGFjaEV2ZW50ID0gZXhwb3J0cy5kZXRhY2hFdmVudCA9IGNhblVzZURPTSAmJiAnZGV0YWNoRXZlbnQnIGluIHdpbmRvdztcblxuLy8gUGFzc2l2ZSBvcHRpb25zXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvZG9tL3Bhc3NpdmVldmVudGxpc3RlbmVycy5qc1xudmFyIHBhc3NpdmVPcHRpb24gPSBleHBvcnRzLnBhc3NpdmVPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYWNoZSA9IG51bGw7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FjaGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjYWNoZTtcbiAgICB9XG5cbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlT3B0aW9uID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbiAgICBjYWNoZSA9IHN1cHBvcnRzUGFzc2l2ZU9wdGlvbjtcblxuICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmVPcHRpb247XG4gIH0oKTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvc3VwcG9ydHMuanNcbi8vIG1vZHVsZSBpZCA9IDE3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmluZVByb3BlcnR5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyAgd2Vha1xuXG5mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvLCBwLCBhdHRyKSB7XG4gIHJldHVybiAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvLCBwLCBhdHRyKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfZG9tID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tJyk7XG5cbnZhciBfZG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGhlYXZpbHkgaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0toYW4vcmVhY3QtY29tcG9uZW50cy9ibG9iL21hc3Rlci9qcy9sYXllcmVkLWNvbXBvbmVudC1taXhpbi5qc3hcbnZhciBSZW5kZXJUb0xheWVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmVuZGVyVG9MYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVuZGVyVG9MYXllcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSZW5kZXJUb0xheWVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJlbmRlclRvTGF5ZXIuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJlbmRlclRvTGF5ZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkNsaWNrQXdheSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIV90aGlzLnByb3BzLmNvbXBvbmVudENsaWNrQXdheSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbCA9IF90aGlzLmxheWVyO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZWwgJiYgZXZlbnQudGFyZ2V0ID09PSB3aW5kb3cgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIV9kb20yLmRlZmF1bHQuaXNEZXNjZW5kYW50KGVsLCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmNvbXBvbmVudENsaWNrQXdheShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJlbmRlclRvTGF5ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucmVuZGVyTGF5ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnJlbmRlckxheWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5yZW5kZXJMYXllcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldExheWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGF5ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnJlbmRlckxheWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5yZW5kZXJMYXllcigpIHtcbiAgICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZUxheWVyRm9yQ2xpY2tBd2F5KSB7XG4gICAgICAgIHRoaXMubGF5ZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgdGhpcy5sYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0F3YXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQXdheSk7XG4gICAgICB9XG5cbiAgICAgICgwLCBfcmVhY3REb20udW5tb3VudENvbXBvbmVudEF0Tm9kZSkodGhpcy5sYXllcik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubGF5ZXIpO1xuICAgICAgdGhpcy5sYXllciA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnkgY2FsbGluZyB0aGlzIG1ldGhvZCBpbiBjb21wb25lbnREaWRNb3VudCgpIGFuZFxuICAgICAqIGNvbXBvbmVudERpZFVwZGF0ZSgpLCB5b3UncmUgZWZmZWN0aXZlbHkgY3JlYXRpbmcgYSBcIndvcm1ob2xlXCIgdGhhdFxuICAgICAqIGZ1bm5lbHMgUmVhY3QncyBoaWVyYXJjaGljYWwgdXBkYXRlcyB0aHJvdWdoIHRvIGEgRE9NIG5vZGUgb24gYW5cbiAgICAgKiBlbnRpcmVseSBkaWZmZXJlbnQgcGFydCBvZiB0aGUgcGFnZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyTGF5ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYXllcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcGVuID0gX3Byb3BzLm9wZW4sXG4gICAgICAgICAgcmVuZGVyID0gX3Byb3BzLnJlbmRlcjtcblxuXG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheWVyKTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZUxheWVyRm9yQ2xpY2tBd2F5KSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuc3R5bGUucmlnaHQgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS56SW5kZXggPSB0aGlzLmNvbnRleHQubXVpVGhlbWUuekluZGV4LmxheWVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBfdGhpczIub25DbGlja0F3YXkpO1xuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczIub25DbGlja0F3YXkpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxheWVyRWxlbWVudCA9IHJlbmRlcigpO1xuICAgICAgICB0aGlzLmxheWVyRWxlbWVudCA9ICgwLCBfcmVhY3REb20udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIpKHRoaXMsIGxheWVyRWxlbWVudCwgdGhpcy5sYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVucmVuZGVyTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJlbmRlclRvTGF5ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SZW5kZXJUb0xheWVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IHRydWVcbn07XG5SZW5kZXJUb0xheWVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SZW5kZXJUb0xheWVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY29tcG9uZW50Q2xpY2tBd2F5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICByZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB1c2VMYXllckZvckNsaWNrQXdheTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJUb0xheWVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL2ludGVybmFsL1JlbmRlclRvTGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIHRhcmdldE9yaWdpbiA9IHByb3BzLnRhcmdldE9yaWdpbjtcbiAgdmFyIG9wZW4gPSBzdGF0ZS5vcGVuO1xuICB2YXIgbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lO1xuXG4gIHZhciBob3Jpem9udGFsID0gdGFyZ2V0T3JpZ2luLmhvcml6b250YWwucmVwbGFjZSgnbWlkZGxlJywgJ3ZlcnRpY2FsJyk7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogbXVpVGhlbWUuekluZGV4LnBvcG92ZXIsXG4gICAgICBvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG4gICAgICB0cmFuc2Zvcm06IG9wZW4gPyAnc2NhbGUoMSwgMSknIDogJ3NjYWxlKDAsIDApJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcyNTBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSksXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgIH0sXG4gICAgaG9yaXpvbnRhbDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHRyYW5zZm9ybTogb3BlbiA/ICdzY2FsZVgoMSknIDogJ3NjYWxlWCgwKScsXG4gICAgICBvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IGhvcml6b250YWwgKyAnICcgKyB0YXJnZXRPcmlnaW4udmVydGljYWwsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMjUwbXMnLCBbJ3RyYW5zZm9ybScsICdvcGFjaXR5J10pXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgb3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3NjYWxlWSgxKScgOiAnc2NhbGVZKDApJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc1MDBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSlcbiAgICB9XG4gIH07XG59XG5cbnZhciBQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25EZWZhdWx0LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25EZWZhdWx0LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogbmV4dFByb3BzLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aDtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuaG9yaXpvbnRhbCkgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMudmVydGljYWwpIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgekRlcHRoOiAxXG59O1xuUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblBvcG92ZXJBbmltYXRpb25EZWZhdWx0LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLmlzUmVxdWlyZWQsXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBvcG92ZXJBbmltYXRpb25EZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQuanNcbi8vIG1vZHVsZSBpZCA9IDE4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIHRhcmdldE9yaWdpbiA9IHByb3BzLnRhcmdldE9yaWdpbjtcbiAgdmFyIG9wZW4gPSBzdGF0ZS5vcGVuO1xuICB2YXIgbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lO1xuXG4gIHZhciBob3Jpem9udGFsID0gdGFyZ2V0T3JpZ2luLmhvcml6b250YWwucmVwbGFjZSgnbWlkZGxlJywgJ2NlbnRlcicpO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB6SW5kZXg6IG11aVRoZW1lLnpJbmRleC5wb3BvdmVyLFxuICAgICAgb3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3NjYWxlWSgxKScgOiAnc2NhbGVZKDApJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSksXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogbmV4dFByb3BzLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aDtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIHpEZXB0aDogMVxufTtcblBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLmlzUmVxdWlyZWQsXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuTWVudUl0ZW0gPSBleHBvcnRzLk1lbnUgPSB1bmRlZmluZWQ7XG5cbnZhciBfTWVudTIgPSByZXF1aXJlKCcuL01lbnUnKTtcblxudmFyIF9NZW51MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUyKTtcblxudmFyIF9NZW51SXRlbTIgPSByZXF1aXJlKCcuLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuTWVudSA9IF9NZW51My5kZWZhdWx0O1xuZXhwb3J0cy5NZW51SXRlbSA9IF9NZW51SXRlbTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9NZW51My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL01lbnUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZXZlbnRzJyk7XG5cbnZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQoZWwsIHRhcmdldCkge1xuICBpZiAodGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsID09PSB0YXJnZXQgfHwgaXNEZXNjZW5kYW50KGVsLCB0YXJnZXQucGFyZW50Tm9kZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIGNsaWNrQXdheUV2ZW50cyA9IFsnbW91c2V1cCcsICd0b3VjaGVuZCddO1xudmFyIGJpbmQgPSBmdW5jdGlvbiBiaW5kKGNhbGxiYWNrKSB7XG4gIHJldHVybiBjbGlja0F3YXlFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gX2V2ZW50czIuZGVmYXVsdC5vbihkb2N1bWVudCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgfSk7XG59O1xudmFyIHVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZChjYWxsYmFjaykge1xuICByZXR1cm4gY2xpY2tBd2F5RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIF9ldmVudHMyLmRlZmF1bHQub2ZmKGRvY3VtZW50LCBldmVudCwgY2FsbGJhY2spO1xuICB9KTtcbn07XG5cbnZhciBDbGlja0F3YXlMaXN0ZW5lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKENsaWNrQXdheUxpc3RlbmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDbGlja0F3YXlMaXN0ZW5lcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBDbGlja0F3YXlMaXN0ZW5lcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBDbGlja0F3YXlMaXN0ZW5lci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQ2xpY2tBd2F5TGlzdGVuZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVDbGlja0F3YXkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSUUxMSBzdXBwb3J0LCB3aGljaCB0cmlnZ2VyIHRoZSBoYW5kbGVDbGlja0F3YXkgZXZlbiBhZnRlciB0aGUgdW5iaW5kXG4gICAgICBpZiAoX3RoaXMuaXNDdXJyZW50bHlNb3VudGVkKSB7XG4gICAgICAgIHZhciBlbCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcyk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFpc0Rlc2NlbmRhbnQoZWwsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrQXdheShldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQ2xpY2tBd2F5TGlzdGVuZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuaXNDdXJyZW50bHlNb3VudGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tBd2F5KSB7XG4gICAgICAgIGJpbmQodGhpcy5oYW5kbGVDbGlja0F3YXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMub25DbGlja0F3YXkgIT09IHRoaXMucHJvcHMub25DbGlja0F3YXkpIHtcbiAgICAgICAgdW5iaW5kKHRoaXMuaGFuZGxlQ2xpY2tBd2F5KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGlja0F3YXkpIHtcbiAgICAgICAgICBiaW5kKHRoaXMuaGFuZGxlQ2xpY2tBd2F5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IGZhbHNlO1xuICAgICAgdW5iaW5kKHRoaXMuaGFuZGxlQ2xpY2tBd2F5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENsaWNrQXdheUxpc3RlbmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQ2xpY2tBd2F5TGlzdGVuZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICBvbkNsaWNrQXdheTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBDbGlja0F3YXlMaXN0ZW5lcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGlja0F3YXlMaXN0ZW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9TdWJoZWFkZXIgPSByZXF1aXJlKCcuL1N1YmhlYWRlcicpO1xuXG52YXIgX1N1YmhlYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdWJoZWFkZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3ViaGVhZGVyMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1N1YmhlYWRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTdWJoZWFkZXIgPSBmdW5jdGlvbiBTdWJoZWFkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpbnNldCA9IHByb3BzLmluc2V0LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkocHJvcHMsIFsnY2hpbGRyZW4nLCAnaW5zZXQnLCAnc3R5bGUnXSk7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUsXG4gICAgICBwcmVwYXJlU3R5bGVzID0gX2NvbnRleHQkbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIHN1YmhlYWRlciA9IF9jb250ZXh0JG11aVRoZW1lLnN1YmhlYWRlcjtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBjb2xvcjogc3ViaGVhZGVyLmNvbG9yLFxuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgZm9udFdlaWdodDogc3ViaGVhZGVyLmZvbnRXZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDhweCcsXG4gICAgICBwYWRkaW5nTGVmdDogaW5zZXQgPyA3MiA6IDE2LFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0pLFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG5TdWJoZWFkZXIubXVpTmFtZSA9ICdTdWJoZWFkZXInO1xuXG5TdWJoZWFkZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogTm9kZSB0aGF0IHdpbGwgYmUgcGxhY2VkIGluc2lkZSB0aGUgYFN1YmhlYWRlcmAuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGBTdWJoZWFkZXJgIHdpbGwgYmUgaW5kZW50ZWQuXG4gICAqL1xuICBpbnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuXG5TdWJoZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBpbnNldDogZmFsc2Vcbn07XG5cblN1YmhlYWRlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdWJoZWFkZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU3ViaGVhZGVyL1N1YmhlYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSG90S2V5SG9sZGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEhvdEtleUhvbGRlciA9IGV4cG9ydHMuSG90S2V5SG9sZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIb3RLZXlIb2xkZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEhvdEtleUhvbGRlcik7XG5cbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMudGltZXJJZCA9IG51bGw7XG4gICAgICBfdGhpcy5sYXN0S2V5cyA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEhvdEtleUhvbGRlciwgW3tcbiAgICBrZXk6ICdhcHBlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoa2V5KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklkKTtcbiAgICAgIHRoaXMudGltZXJJZCA9IHNldFRpbWVvdXQodGhpcy5jbGVhciwgNTAwKTtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RLZXlzID0gKHRoaXMubGFzdEtleXMgfHwgJycpICsga2V5O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSG90S2V5SG9sZGVyO1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL01lbnUvbWVudVV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX1BvcG92ZXIgPSByZXF1aXJlKCcuLi9Qb3BvdmVyL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIpO1xuXG52YXIgX2NoZWNrID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL25hdmlnYXRpb24vY2hlY2snKTtcblxudmFyIF9jaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVjayk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuLi9MaXN0L0xpc3RJdGVtJyk7XG5cbnZhciBfTGlzdEl0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEl0ZW0pO1xuXG52YXIgX01lbnUgPSByZXF1aXJlKCcuLi9NZW51L01lbnUnKTtcblxudmFyIF9NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBuZXN0ZWRNZW51U3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGRpc2FibGVkQ29sb3IgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5wYWxldHRlLmRpc2FibGVkQ29sb3I7XG4gIHZhciB0ZXh0Q29sb3IgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5wYWxldHRlLnRleHRDb2xvcjtcbiAgdmFyIGluZGVudCA9IHByb3BzLmRlc2t0b3AgPyA2NCA6IDcyO1xuICB2YXIgc2lkZVBhZGRpbmcgPSBwcm9wcy5kZXNrdG9wID8gMjQgOiAxNjtcblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICAgICAgbWluSGVpZ2h0OiBwcm9wcy5kZXNrdG9wID8gJzMycHgnIDogJzQ4cHgnLFxuICAgICAgbGluZUhlaWdodDogcHJvcHMuZGVza3RvcCA/ICczMnB4JyA6ICc0OHB4JyxcbiAgICAgIGZvbnRTaXplOiBwcm9wcy5kZXNrdG9wID8gMTUgOiAxNixcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIGlubmVyRGl2U3R5bGU6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiBwcm9wcy5sZWZ0SWNvbiB8fCBwcm9wcy5pbnNldENoaWxkcmVuIHx8IHByb3BzLmNoZWNrZWQgPyBpbmRlbnQgOiBzaWRlUGFkZGluZyxcbiAgICAgIHBhZGRpbmdSaWdodDogcHJvcHMucmlnaHRJY29uID8gaW5kZW50IDogc2lkZVBhZGRpbmcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAwLFxuICAgICAgcGFkZGluZ1RvcDogMFxuICAgIH0sXG5cbiAgICBzZWNvbmRhcnlUZXh0OiB7XG4gICAgICBmbG9hdDogJ3JpZ2h0J1xuICAgIH0sXG5cbiAgICBsZWZ0SWNvbkRlc2t0b3A6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGxlZnQ6IDI0LFxuICAgICAgdG9wOiA0XG4gICAgfSxcblxuICAgIHJpZ2h0SWNvbkRlc2t0b3A6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHJpZ2h0OiAyNCxcbiAgICAgIHRvcDogNCxcbiAgICAgIGZpbGw6IGNvbnRleHQubXVpVGhlbWUubWVudUl0ZW0ucmlnaHRJY29uRGVza3RvcEZpbGxcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIE1lbnVJdGVtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTWVudUl0ZW0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnVJdGVtKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIE1lbnVJdGVtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IE1lbnVJdGVtLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShNZW51SXRlbSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGhpcy5jbG9uZU1lbnVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGl0ZW0sIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgICAgICAgIGlmICghaXRlbS5wcm9wcy5tZW51SXRlbXMpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpdGVtLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICAgIGl0ZW0ucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFRhcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBhbmNob3JFbDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIGFuY2hvckVsOiBudWxsXG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTWVudUl0ZW0sIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuYXBwbHlGb2N1c1N0YXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuICYmIG5leHRQcm9wcy5mb2N1c1N0YXRlID09PSAnbm9uZScpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYXBwbHlGb2N1c1N0YXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXBwbHlGb2N1c1N0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbHlGb2N1c1N0YXRlKCkge1xuICAgICAgdGhpcy5yZWZzLmxpc3RJdGVtLmFwcGx5Rm9jdXNTdGF0ZSh0aGlzLnByb3BzLmZvY3VzU3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoZWNrZWQgPSBfcHJvcHMuY2hlY2tlZCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBkZXNrdG9wID0gX3Byb3BzLmRlc2t0b3AsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNTdGF0ZSA9IF9wcm9wcy5mb2N1c1N0YXRlLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGUgPSBfcHJvcHMuaW5uZXJEaXZTdHlsZSxcbiAgICAgICAgICBpbnNldENoaWxkcmVuID0gX3Byb3BzLmluc2V0Q2hpbGRyZW4sXG4gICAgICAgICAgbGVmdEljb24gPSBfcHJvcHMubGVmdEljb24sXG4gICAgICAgICAgbWVudUl0ZW1zID0gX3Byb3BzLm1lbnVJdGVtcyxcbiAgICAgICAgICByaWdodEljb24gPSBfcHJvcHMucmlnaHRJY29uLFxuICAgICAgICAgIHNlY29uZGFyeVRleHQgPSBfcHJvcHMuc2Vjb25kYXJ5VGV4dCxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgIGFuY2hvck9yaWdpbiA9IF9wcm9wcy5hbmNob3JPcmlnaW4sXG4gICAgICAgICAgdGFyZ2V0T3JpZ2luID0gX3Byb3BzLnRhcmdldE9yaWdpbixcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGVja2VkJywgJ2NoaWxkcmVuJywgJ2Rlc2t0b3AnLCAnZGlzYWJsZWQnLCAnZm9jdXNTdGF0ZScsICdpbm5lckRpdlN0eWxlJywgJ2luc2V0Q2hpbGRyZW4nLCAnbGVmdEljb24nLCAnbWVudUl0ZW1zJywgJ3JpZ2h0SWNvbicsICdzZWNvbmRhcnlUZXh0JywgJ3N0eWxlJywgJ2FuaW1hdGlvbicsICdhbmNob3JPcmlnaW4nLCAndGFyZ2V0T3JpZ2luJywgJ3ZhbHVlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciBtZXJnZWRJbm5lckRpdlN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuaW5uZXJEaXZTdHlsZSwgaW5uZXJEaXZTdHlsZSk7XG5cbiAgICAgIC8vIExlZnQgSWNvblxuICAgICAgdmFyIGxlZnRJY29uRWxlbWVudCA9IGxlZnRJY29uID8gbGVmdEljb24gOiBjaGVja2VkID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2NoZWNrMi5kZWZhdWx0LCBudWxsKSA6IG51bGw7XG4gICAgICBpZiAobGVmdEljb25FbGVtZW50KSB7XG4gICAgICAgIHZhciBtZXJnZWRMZWZ0SWNvblN0eWxlcyA9IGRlc2t0b3AgPyAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxlZnRJY29uRGVza3RvcCwgbGVmdEljb25FbGVtZW50LnByb3BzLnN0eWxlKSA6IGxlZnRJY29uRWxlbWVudC5wcm9wcy5zdHlsZTtcbiAgICAgICAgbGVmdEljb25FbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChsZWZ0SWNvbkVsZW1lbnQsIHsgc3R5bGU6IG1lcmdlZExlZnRJY29uU3R5bGVzIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBSaWdodCBJY29uXG4gICAgICB2YXIgcmlnaHRJY29uRWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChyaWdodEljb24pIHtcbiAgICAgICAgdmFyIG1lcmdlZFJpZ2h0SWNvblN0eWxlcyA9IGRlc2t0b3AgPyAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJpZ2h0SWNvbkRlc2t0b3AsIHJpZ2h0SWNvbi5wcm9wcy5zdHlsZSkgOiByaWdodEljb24ucHJvcHMuc3R5bGU7XG4gICAgICAgIHJpZ2h0SWNvbkVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHJpZ2h0SWNvbiwgeyBzdHlsZTogbWVyZ2VkUmlnaHRJY29uU3R5bGVzIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWNvbmRhcnkgVGV4dFxuICAgICAgdmFyIHNlY29uZGFyeVRleHRFbGVtZW50ID0gdm9pZCAwO1xuICAgICAgaWYgKHNlY29uZGFyeVRleHQpIHtcbiAgICAgICAgdmFyIHNlY29uZGFyeVRleHRJc0FuRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChzZWNvbmRhcnlUZXh0KTtcbiAgICAgICAgdmFyIG1lcmdlZFNlY29uZGFyeVRleHRTdHlsZXMgPSBzZWNvbmRhcnlUZXh0SXNBbkVsZW1lbnQgPyAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnNlY29uZGFyeVRleHQsIHNlY29uZGFyeVRleHQucHJvcHMuc3R5bGUpIDogbnVsbDtcblxuICAgICAgICBzZWNvbmRhcnlUZXh0RWxlbWVudCA9IHNlY29uZGFyeVRleHRJc0FuRWxlbWVudCA/IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoc2Vjb25kYXJ5VGV4dCwgeyBzdHlsZTogbWVyZ2VkU2Vjb25kYXJ5VGV4dFN0eWxlcyB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnNlY29uZGFyeVRleHQpIH0sXG4gICAgICAgICAgc2Vjb25kYXJ5VGV4dFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdmFyIGNoaWxkTWVudVBvcG92ZXIgPSB2b2lkIDA7XG4gICAgICBpZiAobWVudUl0ZW1zKSB7XG4gICAgICAgIGNoaWxkTWVudVBvcG92ZXIgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUG9wb3ZlcjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbjogYW5jaG9yT3JpZ2luLFxuICAgICAgICAgICAgYW5jaG9yRWw6IHRoaXMuc3RhdGUuYW5jaG9yRWwsXG4gICAgICAgICAgICBvcGVuOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAgICAgICB0YXJnZXRPcmlnaW46IHRhcmdldE9yaWdpbixcbiAgICAgICAgICAgIHVzZUxheWVyRm9yQ2xpY2tBd2F5OiBmYWxzZSxcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfTWVudTIuZGVmYXVsdCxcbiAgICAgICAgICAgIHsgZGVza3RvcDogZGVza3RvcCwgZGlzYWJsZWQ6IGRpc2FibGVkLCBzdHlsZTogbmVzdGVkTWVudVN0eWxlIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG1lbnVJdGVtcywgdGhpcy5jbG9uZU1lbnVJdGVtKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgb3RoZXIub25DbGljayA9IHRoaXMuaGFuZGxlVG91Y2hUYXA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0xpc3RJdGVtMi5kZWZhdWx0LFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBob3ZlckNvbG9yOiB0aGlzLmNvbnRleHQubXVpVGhlbWUubWVudUl0ZW0uaG92ZXJDb2xvcixcbiAgICAgICAgICBpbm5lckRpdlN0eWxlOiBtZXJnZWRJbm5lckRpdlN0eWxlcyxcbiAgICAgICAgICBpbnNldENoaWxkcmVuOiBpbnNldENoaWxkcmVuLFxuICAgICAgICAgIGxlZnRJY29uOiBsZWZ0SWNvbkVsZW1lbnQsXG4gICAgICAgICAgcmVmOiAnbGlzdEl0ZW0nLFxuICAgICAgICAgIHJpZ2h0SWNvbjogcmlnaHRJY29uRWxlbWVudCxcbiAgICAgICAgICByb2xlOiAnbWVudWl0ZW0nLFxuICAgICAgICAgIHN0eWxlOiBtZXJnZWRSb290U3R5bGVzXG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgc2Vjb25kYXJ5VGV4dEVsZW1lbnQsXG4gICAgICAgIGNoaWxkTWVudVBvcG92ZXJcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZW51SXRlbTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1lbnVJdGVtLm11aU5hbWUgPSAnTWVudUl0ZW0nO1xuTWVudUl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBhbmNob3JPcmlnaW46IHsgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICd0b3AnIH0sXG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBkZXNrdG9wOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmb2N1c1N0YXRlOiAnbm9uZScsXG4gIGluc2V0Q2hpbGRyZW46IGZhbHNlLFxuICB0YXJnZXRPcmlnaW46IHsgaG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCcgfVxufTtcbk1lbnVJdGVtLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5NZW51SXRlbS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBMb2NhdGlvbiBvZiB0aGUgYW5jaG9yIGZvciB0aGUgcG9wb3ZlciBvZiBuZXN0ZWQgYE1lbnVJdGVtYFxuICAgKiBlbGVtZW50cy5cbiAgICogT3B0aW9uczpcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdXG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV0uXG4gICAqL1xuICBhbmNob3JPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYW5pbWF0aW9uIGNvbXBvbmVudCB1c2VkLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhIGxlZnQgY2hlY2sgbWFyayB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgY2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogRWxlbWVudHMgcGFzc2VkIGFzIGNoaWxkcmVuIHRvIHRoZSB1bmRlcmx5aW5nIGBMaXN0SXRlbWAuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSBpdGVtIHdpbGwgcmVuZGVyIHdpdGggY29tcGFjdCBkZXNrdG9wXG4gICAqIHN0eWxlcy5cbiAgICovXG4gIGRlc2t0b3A6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBtZW51IGl0ZW0gd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgZm9jdXMgc3RhdGUgb2YgdGhlIG1lbnUgaXRlbS4gVGhpcyBwcm9wIGlzIHVzZWQgdG8gc2V0IHRoZSBmb2N1c1xuICAgKiBzdGF0ZSBvZiB0aGUgdW5kZXJseWluZyBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgZm9jdXNTdGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ25vbmUnLCAnZm9jdXNlZCcsICdrZXlib2FyZC1mb2N1c2VkJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGlubmVyIGRpdi5cbiAgICovXG4gIGlubmVyRGl2U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGNoaWxkcmVuIHdpbGwgYmUgaW5kZW50ZWQuXG4gICAqIFRoaXMgaXMgb25seSBuZWVkZWQgd2hlbiB0aGVyZSBpcyBubyBgbGVmdEljb25gLlxuICAgKi9cbiAgaW5zZXRDaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGBTdmdJY29uYCBvciBgRm9udEljb25gIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlLlxuICAgKi9cbiAgbGVmdEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIGBNZW51SXRlbWAgZWxlbWVudHMgdG8gbmVzdCB3aXRoaW4gdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIG1lbnVJdGVtczogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgbWVudSBpdGVtIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gcmVuZGVyIHByaW1hcnkgdGV4dCB3aXRoaW4gdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIHByaW1hcnlUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgYFN2Z0ljb25gIG9yIGBGb250SWNvbmAgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSByaWdodCBzaWRlLlxuICAgKi9cbiAgcmlnaHRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byByZW5kZXIgc2Vjb25kYXJ5IHRleHQgd2l0aGluIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBzZWNvbmRhcnlUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogTG9jYXRpb24gb24gdGhlIHBvcG92ZXIgb2YgbmVzdGVkIGBNZW51SXRlbWAgZWxlbWVudHMgdGhhdCB3aWxsIGF0dGFjaFxuICAgKiB0byB0aGUgYW5jaG9yJ3Mgb3JpZ2luLlxuICAgKiBPcHRpb25zOlxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF1cbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXS5cbiAgICovXG4gIHRhcmdldE9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4sXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gTWVudUl0ZW07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvTWVudUl0ZW0vTWVudUl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wdXJlID0gcmVxdWlyZSgncmVjb21wb3NlL3B1cmUnKTtcblxudmFyIF9wdXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B1cmUpO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuLi8uLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5hdmlnYXRpb25DaGVjayA9IGZ1bmN0aW9uIE5hdmlnYXRpb25DaGVjayhwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNOSAxNi4xN0w0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDF6JyB9KVxuICApO1xufTtcbk5hdmlnYXRpb25DaGVjayA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoTmF2aWdhdGlvbkNoZWNrKTtcbk5hdmlnYXRpb25DaGVjay5kaXNwbGF5TmFtZSA9ICdOYXZpZ2F0aW9uQ2hlY2snO1xuTmF2aWdhdGlvbkNoZWNrLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5hdmlnYXRpb25DaGVjaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9jaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfc2V0RGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL3NldERpc3BsYXlOYW1lJyk7XG5cbnZhciBfc2V0RGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0RGlzcGxheU5hbWUpO1xuXG52YXIgX3dyYXBEaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vd3JhcERpc3BsYXlOYW1lJyk7XG5cbnZhciBfd3JhcERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBEaXNwbGF5TmFtZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHNob3VsZFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZFVwZGF0ZSh0ZXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQmFzZUNvbXBvbmVudCkge1xuICAgIHZhciBmYWN0b3J5ID0gKDAsIF9yZWFjdC5jcmVhdGVGYWN0b3J5KShCYXNlQ29tcG9uZW50KTtcblxuICAgIHZhciBTaG91bGRVcGRhdGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzKFNob3VsZFVwZGF0ZSwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNob3VsZFVwZGF0ZSgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNob3VsZFVwZGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIFNob3VsZFVwZGF0ZS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gdGVzdCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgU2hvdWxkVXBkYXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KHRoaXMucHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFNob3VsZFVwZGF0ZTtcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVybiAoMCwgX3NldERpc3BsYXlOYW1lMi5kZWZhdWx0KSgoMCwgX3dyYXBEaXNwbGF5TmFtZTIuZGVmYXVsdCkoQmFzZUNvbXBvbmVudCwgJ3Nob3VsZFVwZGF0ZScpKShTaG91bGRVcGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gU2hvdWxkVXBkYXRlO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2hvdWxkVXBkYXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlY29tcG9zZS9zaG91bGRVcGRhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBzZXRTdGF0aWMgPSBmdW5jdGlvbiBzZXRTdGF0aWMoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIEJhc2VDb21wb25lbnRba2V5XSA9IHZhbHVlO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNldFN0YXRpYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWNvbXBvc2Uvc2V0U3RhdGljLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAoIUNvbXBvbmVudCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGlzcGxheU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVjb21wb3NlL2dldERpc3BsYXlOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTdmdJY29uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU3ZnSWNvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3ZnSWNvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTdmdJY29uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFN2Z0ljb24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFN2Z0ljb24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU3ZnSWNvbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjb2xvciA9IF9wcm9wcy5jb2xvcixcbiAgICAgICAgICBob3ZlckNvbG9yID0gX3Byb3BzLmhvdmVyQ29sb3IsXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gX3Byb3BzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHZpZXdCb3ggPSBfcHJvcHMudmlld0JveCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdjb2xvcicsICdob3ZlckNvbG9yJywgJ29uTW91c2VFbnRlcicsICdvbk1vdXNlTGVhdmUnLCAnc3R5bGUnLCAndmlld0JveCddKTtcbiAgICAgIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdmdJY29uID0gX2NvbnRleHQkbXVpVGhlbWUuc3ZnSWNvbixcbiAgICAgICAgICBwcmVwYXJlU3R5bGVzID0gX2NvbnRleHQkbXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgb2ZmQ29sb3IgPSBjb2xvciA/IGNvbG9yIDogJ2N1cnJlbnRDb2xvcic7XG4gICAgICB2YXIgb25Db2xvciA9IGhvdmVyQ29sb3IgPyBob3ZlckNvbG9yIDogb2ZmQ29sb3I7XG5cbiAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgY29sb3I6IHN2Z0ljb24uY29sb3IsXG4gICAgICAgIGZpbGw6IHRoaXMuc3RhdGUuaG92ZXJlZCA/IG9uQ29sb3IgOiBvZmZDb2xvcixcbiAgICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgICAgd2lkdGg6IDI0LFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3ZnJyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRTdHlsZXMpLFxuICAgICAgICAgIHZpZXdCb3g6IHZpZXdCb3hcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3ZnSWNvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblN2Z0ljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcblN2Z0ljb24uZGVmYXVsdFByb3BzID0ge1xuICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHt9LFxuICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHt9LFxuICB2aWV3Qm94OiAnMCAwIDI0IDI0J1xufTtcblN2Z0ljb24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblN2Z0ljb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogRWxlbWVudHMgcGFzc2VkIGludG8gdGhlIFNWRyBJY29uLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGlzIGNvbXBvbmVudCB3aWxsIGRlZmF1bHRcbiAgICogdG8gbXVpVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IuXG4gICAqL1xuICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBpY29uIGNvbG9yIHdoZW4gdGhlIG1vdXNlIGhvdmVycyBvdmVyIHRoZSBpY29uLlxuICAgKi9cbiAgaG92ZXJDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIHJlZGVmaW5lIHdoYXQgdGhlIGNvb3JkaW5hdGVzXG4gICAqIHdpdGhvdXQgdW5pdHMgbWVhbiBpbnNpZGUgYW4gc3ZnIGVsZW1lbnQuIEZvciBleGFtcGxlLFxuICAgKiBpZiB0aGUgU1ZHIGVsZW1lbnQgaXMgNTAwICh3aWR0aCkgYnkgMjAwIChoZWlnaHQpLCBhbmQgeW91XG4gICAqIHBhc3Mgdmlld0JveD1cIjAgMCA1MCAyMFwiLCB0aGlzIG1lYW5zIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGluc2lkZVxuICAgKiB0aGUgc3ZnIHdpbGwgZ28gZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApIHRvIGJvdHRvbSByaWdodCAoNTAsMjApXG4gICAqIGFuZCBlYWNoIHVuaXQgd2lsbCBiZSB3b3J0aCAxMHB4LlxuICAgKi9cbiAgdmlld0JveDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFN2Z0ljb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvU3ZnSWNvbi9TdmdJY29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvck1hbmlwdWxhdG9yJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9JY29uQnV0dG9uID0gcmVxdWlyZSgnLi4vSWNvbkJ1dHRvbicpO1xuXG52YXIgX0ljb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvbkJ1dHRvbik7XG5cbnZhciBfZXhwYW5kTGVzcyA9IHJlcXVpcmUoJy4uL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2V4cGFuZC1sZXNzJyk7XG5cbnZhciBfZXhwYW5kTGVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHBhbmRMZXNzKTtcblxudmFyIF9leHBhbmRNb3JlID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL25hdmlnYXRpb24vZXhwYW5kLW1vcmUnKTtcblxudmFyIF9leHBhbmRNb3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cGFuZE1vcmUpO1xuXG52YXIgX05lc3RlZExpc3QgPSByZXF1aXJlKCcuL05lc3RlZExpc3QnKTtcblxudmFyIF9OZXN0ZWRMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05lc3RlZExpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IgPSBwcm9wcy5hdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IsXG4gICAgICBpbnNldENoaWxkcmVuID0gcHJvcHMuaW5zZXRDaGlsZHJlbixcbiAgICAgIGxlZnRBdmF0YXIgPSBwcm9wcy5sZWZ0QXZhdGFyLFxuICAgICAgbGVmdENoZWNrYm94ID0gcHJvcHMubGVmdENoZWNrYm94LFxuICAgICAgbGVmdEljb24gPSBwcm9wcy5sZWZ0SWNvbixcbiAgICAgIG5lc3RlZEl0ZW1zID0gcHJvcHMubmVzdGVkSXRlbXMsXG4gICAgICBuZXN0ZWRMZXZlbCA9IHByb3BzLm5lc3RlZExldmVsLFxuICAgICAgcmlnaHRBdmF0YXIgPSBwcm9wcy5yaWdodEF2YXRhcixcbiAgICAgIHJpZ2h0SWNvbiA9IHByb3BzLnJpZ2h0SWNvbixcbiAgICAgIHJpZ2h0SWNvbkJ1dHRvbiA9IHByb3BzLnJpZ2h0SWNvbkJ1dHRvbixcbiAgICAgIHJpZ2h0VG9nZ2xlID0gcHJvcHMucmlnaHRUb2dnbGUsXG4gICAgICBzZWNvbmRhcnlUZXh0ID0gcHJvcHMuc2Vjb25kYXJ5VGV4dCxcbiAgICAgIHNlY29uZGFyeVRleHRMaW5lcyA9IHByb3BzLnNlY29uZGFyeVRleHRMaW5lcztcbiAgdmFyIG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZTtcbiAgdmFyIGxpc3RJdGVtID0gbXVpVGhlbWUubGlzdEl0ZW07XG5cblxuICB2YXIgdGV4dENvbG9yID0gbXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yO1xuICB2YXIgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IgfHwgKDAsIF9jb2xvck1hbmlwdWxhdG9yLmZhZGUpKHRleHRDb2xvciwgMC4xKTtcbiAgdmFyIHNpbmdsZUF2YXRhciA9ICFzZWNvbmRhcnlUZXh0ICYmIChsZWZ0QXZhdGFyIHx8IHJpZ2h0QXZhdGFyKTtcbiAgdmFyIHNpbmdsZU5vQXZhdGFyID0gIXNlY29uZGFyeVRleHQgJiYgIShsZWZ0QXZhdGFyIHx8IHJpZ2h0QXZhdGFyKTtcbiAgdmFyIHR3b0xpbmUgPSBzZWNvbmRhcnlUZXh0ICYmIHNlY29uZGFyeVRleHRMaW5lcyA9PT0gMTtcbiAgdmFyIHRocmVlTGluZSA9IHNlY29uZGFyeVRleHQgJiYgc2Vjb25kYXJ5VGV4dExpbmVzID4gMTtcblxuICB2YXIgaXNLZXlib2FyZEZvY3VzZWQgPSAocHJvcHMuaXNLZXlib2FyZEZvY3VzZWQgIT09IHVuZGVmaW5lZCA/IHByb3BzIDogc3RhdGUpLmlzS2V5Ym9hcmRGb2N1c2VkO1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAoaXNLZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIXN0YXRlLnJpZ2h0SWNvbkJ1dHRvbkhvdmVyZWQgJiYgIXN0YXRlLnJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXNlZCA/IGhvdmVyQ29sb3IgOiBudWxsLFxuICAgICAgY29sb3I6IHRleHRDb2xvcixcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuXG4gICAgLy8gVGhpcyBpbm5lciBkaXYgaXMgbmVlZGVkIHNvIHRoYXQgcmlwcGxlcyB3aWxsIHNwYW4gdGhlIGVudGlyZSBjb250YWluZXJcbiAgICBpbm5lckRpdjoge1xuICAgICAgbWFyZ2luTGVmdDogbmVzdGVkTGV2ZWwgKiBsaXN0SXRlbS5uZXN0ZWRMZXZlbERlcHRoLFxuICAgICAgcGFkZGluZ0xlZnQ6IGxlZnRJY29uIHx8IGxlZnRBdmF0YXIgfHwgbGVmdENoZWNrYm94IHx8IGluc2V0Q2hpbGRyZW4gPyA3MiA6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiByaWdodEljb24gfHwgcmlnaHRBdmF0YXIgfHwgcmlnaHRJY29uQnV0dG9uIHx8IG5lc3RlZEl0ZW1zLmxlbmd0aCAmJiBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IgPyA1NiA6IHJpZ2h0VG9nZ2xlID8gNzIgOiAxNixcbiAgICAgIHBhZGRpbmdCb3R0b206IHNpbmdsZUF2YXRhciA/IDIwIDogMTYsXG4gICAgICBwYWRkaW5nVG9wOiBzaW5nbGVOb0F2YXRhciB8fCB0aHJlZUxpbmUgPyAxNiA6IDIwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuXG4gICAgaWNvbnM6IHtcbiAgICAgIGhlaWdodDogMjQsXG4gICAgICB3aWR0aDogMjQsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHR3b0xpbmUgPyAxMiA6IHNpbmdsZUF2YXRhciA/IDQgOiAwLFxuICAgICAgbWFyZ2luOiAxMlxuICAgIH0sXG5cbiAgICBsZWZ0SWNvbjoge1xuICAgICAgbGVmdDogNFxuICAgIH0sXG5cbiAgICByaWdodEljb246IHtcbiAgICAgIHJpZ2h0OiA0XG4gICAgfSxcblxuICAgIGF2YXRhcnM6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiBzaW5nbGVBdmF0YXIgPyA4IDogMTZcbiAgICB9LFxuXG4gICAgbGFiZWw6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSxcblxuICAgIGxlZnRBdmF0YXI6IHtcbiAgICAgIGxlZnQ6IDE2XG4gICAgfSxcblxuICAgIHJpZ2h0QXZhdGFyOiB7XG4gICAgICByaWdodDogMTZcbiAgICB9LFxuXG4gICAgbGVmdENoZWNrYm94OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogMjQsXG4gICAgICB0b3A6IHR3b0xpbmUgPyAyNCA6IHNpbmdsZUF2YXRhciA/IDE2IDogMTIsXG4gICAgICBsZWZ0OiAxNlxuICAgIH0sXG5cbiAgICBwcmltYXJ5VGV4dDoge30sXG5cbiAgICByaWdodEljb25CdXR0b246IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRvcDogdHdvTGluZSA/IDEyIDogc2luZ2xlQXZhdGFyID8gNCA6IDAsXG4gICAgICByaWdodDogNFxuICAgIH0sXG5cbiAgICByaWdodFRvZ2dsZToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IDU0LFxuICAgICAgdG9wOiB0d29MaW5lID8gMjUgOiBzaW5nbGVBdmF0YXIgPyAxNyA6IDEzLFxuICAgICAgcmlnaHQ6IDhcbiAgICB9LFxuXG4gICAgc2Vjb25kYXJ5VGV4dDoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogdGhyZWVMaW5lID8gJzE4cHgnIDogJzE2cHgnLFxuICAgICAgaGVpZ2h0OiB0aHJlZUxpbmUgPyAzNiA6IDE2LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbWFyZ2luVG9wOiA0LFxuICAgICAgY29sb3I6IGxpc3RJdGVtLnNlY29uZGFyeVRleHRDb2xvcixcblxuICAgICAgLy8gbmVlZGVkIGZvciAyIGFuZCAzIGxpbmUgZWxsaXBzaXNcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6IHRocmVlTGluZSA/IG51bGwgOiAnbm93cmFwJyxcbiAgICAgIGRpc3BsYXk6IHRocmVlTGluZSA/ICctd2Via2l0LWJveCcgOiBudWxsLFxuICAgICAgV2Via2l0TGluZUNsYW1wOiB0aHJlZUxpbmUgPyAyIDogbnVsbCxcbiAgICAgIFdlYmtpdEJveE9yaWVudDogdGhyZWVMaW5lID8gJ3ZlcnRpY2FsJyA6IG51bGxcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIExpc3RJdGVtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTGlzdEl0ZW0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpc3RJdGVtKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIExpc3RJdGVtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IExpc3RJdGVtLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShMaXN0SXRlbSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHJpZ2h0SWNvbkJ1dHRvbkhvdmVyZWQ6IGZhbHNlLFxuICAgICAgcmlnaHRJY29uQnV0dG9uS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHRvdWNoOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzS2V5Ym9hcmRGb2N1c2VkOiBpc0tleWJvYXJkRm9jdXNlZCB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUudG91Y2gpIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMucHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0KSB7XG4gICAgICAgIF90aGlzLmhhbmRsZU5lc3RlZExpc3RUb2dnbGUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU5lc3RlZExpc3RUb2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sZWZ0Q2hlY2tib3gpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub3BlbiA9PT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICFfdGhpcy5zdGF0ZS5vcGVuIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk5lc3RlZExpc3RUb2dnbGUoX3RoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4cG9zaW5nIGB0aGlzYCBpbiB0aGUgY2FsbGJhY2sgaXMgcXVpdGUgYSBiYWQgQVBJLlxuICAgICAgICAvLyBJJ20gZG9pbmcgYSBvbmUgbGV2ZWwgZGVlcCBjbG9uZSB0byBleHBvc2UgYSBmYWtlIHN0YXRlLm9wZW4uXG4gICAgICAgIF90aGlzLnByb3BzLm9uTmVzdGVkTGlzdFRvZ2dsZSgoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBfdGhpcywge1xuICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICBvcGVuOiAhX3RoaXMuc3RhdGUub3BlblxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICBpZiAoaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgICAgICByaWdodEljb25CdXR0b25LZXlib2FyZEZvY3VzZWQ6IGlzS2V5Ym9hcmRGb2N1c2VkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWNvbkJ1dHRvbiA9IF90aGlzLnByb3BzLnJpZ2h0SWNvbkJ1dHRvbjtcblxuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbktleWJvYXJkRm9jdXMpIGljb25CdXR0b24ucHJvcHMub25LZXlib2FyZEZvY3VzKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGljb25CdXR0b24gPSBfdGhpcy5wcm9wcy5yaWdodEljb25CdXR0b247XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHJpZ2h0SWNvbkJ1dHRvbkhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbk1vdXNlTGVhdmUpIGljb25CdXR0b24ucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaWNvbkJ1dHRvbiA9IF90aGlzLnByb3BzLnJpZ2h0SWNvbkJ1dHRvbjtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgcmlnaHRJY29uQnV0dG9uSG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIGlmIChpY29uQnV0dG9uICYmIGljb25CdXR0b24ucHJvcHMub25Nb3VzZUVudGVyKSBpY29uQnV0dG9uLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGljb25CdXR0b24gPSBfdGhpcy5wcm9wcy5yaWdodEljb25CdXR0b247XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChpY29uQnV0dG9uICYmIGljb25CdXR0b24ucHJvcHMub25Nb3VzZVVwKSBpY29uQnV0dG9uLnByb3BzLm9uTW91c2VVcChldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBpY29uQnV0dG9uID0gX3RoaXMucHJvcHMucmlnaHRJY29uQnV0dG9uO1xuXG4gICAgICAvLyBTdG9wIHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nIHVwIHRvIHRoZSBsaXN0LWl0ZW1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbkNsaWNrKSBpY29uQnV0dG9uLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2g6IHRydWUgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoOiB0cnVlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKExpc3RJdGVtLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiB0aGlzLnByb3BzLm9wZW4gPT09IG51bGwgPyB0aGlzLnByb3BzLmluaXRpYWxseU9wZW4gPT09IHRydWUgOiB0aGlzLnByb3BzLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29udHJvbGxlZC5cbiAgICAgIGlmIChuZXh0UHJvcHMub3BlbiAhPT0gbnVsbCkgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IG5leHRQcm9wcy5vcGVuIH0pO1xuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCAmJiB0aGlzLnN0YXRlLmhvdmVyZWQpIHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIG5lZWRlZCBieSB0aGUgYE1lbnVJdGVtYCBjb21wb25lbnQuXG5cbiAgfSwge1xuICAgIGtleTogJ2FwcGx5Rm9jdXNTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5Rm9jdXNTdGF0ZShmb2N1c1N0YXRlKSB7XG4gICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgdmFyIGJ1dHRvbkVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuYnV0dG9uKTtcblxuICAgICAgICBzd2l0Y2ggKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgIGJ1dHRvbkVsLmJsdXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvY3VzZWQnOlxuICAgICAgICAgICAgYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2tleWJvYXJkLWZvY3VzZWQnOlxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0S2V5Ym9hcmRGb2N1cygpO1xuICAgICAgICAgICAgYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRGlzYWJsZWRFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRGlzYWJsZWRFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBhZGRpdGlvbmFsUHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGUgPSBfcHJvcHMuaW5uZXJEaXZTdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuXG4gICAgICB2YXIgbWVyZ2VkRGl2U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucm9vdCwgc3R5bGVzLmlubmVyRGl2LCBpbm5lckRpdlN0eWxlLCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIGFkZGl0aW9uYWxQcm9wcywge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcyhtZXJnZWREaXZTdHlsZXMpXG4gICAgICAgIH0pLFxuICAgICAgICBjb250ZW50Q2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlTGFiZWxFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTGFiZWxFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBhZGRpdGlvbmFsUHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpbm5lckRpdlN0eWxlID0gX3Byb3BzMi5pbm5lckRpdlN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZTtcblxuXG4gICAgICB2YXIgbWVyZ2VkTGFiZWxTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZXMuaW5uZXJEaXYsIGlubmVyRGl2U3R5bGUsIHN0eWxlcy5sYWJlbCwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIGFkZGl0aW9uYWxQcm9wcywge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcyhtZXJnZWRMYWJlbFN0eWxlcylcbiAgICAgICAgfSksXG4gICAgICAgIGNvbnRlbnRDaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVUZXh0RWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50KHN0eWxlcywgZGF0YSwga2V5KSB7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGRhdGEpKSB7XG4gICAgICAgIHZhciBzdHlsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLCBkYXRhLnByb3BzLnN0eWxlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gaWYgZWxlbWVudCBpcyBhIG5hdGl2ZSBkb20gbm9kZVxuICAgICAgICAgIHN0eWxlID0gcHJlcGFyZVN0eWxlcyhzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZGF0YSwge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IGtleSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzKSB9LFxuICAgICAgICBkYXRhXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2hFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEVsZW1lbnQoY2hpbGRyZW4sIGVsZW1lbnQsIGJhc2VTdHlsZXMsIGFkZGl0aW9uYWxQcm9wcykge1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgYmFzZVN0eWxlcywgZWxlbWVudC5wcm9wcy5zdHlsZSk7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChlbGVtZW50LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICBrZXk6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICBzdHlsZTogc3R5bGVzXG4gICAgICAgIH0sIGFkZGl0aW9uYWxQcm9wcykpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvciA9IF9wcm9wczMuYXV0b0dlbmVyYXRlTmVzdGVkSW5kaWNhdG9yLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50ID0gX3Byb3BzMy5jb250YWluZXJFbGVtZW50LFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlS2V5Ym9hcmRGb2N1cyA9IF9wcm9wczMuZGlzYWJsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAgaG92ZXJDb2xvciA9IF9wcm9wczMuaG92ZXJDb2xvcixcbiAgICAgICAgICBpbml0aWFsbHlPcGVuID0gX3Byb3BzMy5pbml0aWFsbHlPcGVuLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGUgPSBfcHJvcHMzLmlubmVyRGl2U3R5bGUsXG4gICAgICAgICAgaW5zZXRDaGlsZHJlbiA9IF9wcm9wczMuaW5zZXRDaGlsZHJlbixcbiAgICAgICAgICBsZWZ0QXZhdGFyID0gX3Byb3BzMy5sZWZ0QXZhdGFyLFxuICAgICAgICAgIGxlZnRDaGVja2JveCA9IF9wcm9wczMubGVmdENoZWNrYm94LFxuICAgICAgICAgIGxlZnRJY29uID0gX3Byb3BzMy5sZWZ0SWNvbixcbiAgICAgICAgICBuZXN0ZWRJdGVtcyA9IF9wcm9wczMubmVzdGVkSXRlbXMsXG4gICAgICAgICAgbmVzdGVkTGV2ZWwgPSBfcHJvcHMzLm5lc3RlZExldmVsLFxuICAgICAgICAgIG5lc3RlZExpc3RTdHlsZSA9IF9wcm9wczMubmVzdGVkTGlzdFN0eWxlLFxuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1cyA9IF9wcm9wczMub25LZXlib2FyZEZvY3VzLFxuICAgICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzMy5pc0tleWJvYXJkRm9jdXNlZCxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk5lc3RlZExpc3RUb2dnbGUgPSBfcHJvcHMzLm9uTmVzdGVkTGlzdFRvZ2dsZSxcbiAgICAgICAgICBvblRvdWNoU3RhcnQgPSBfcHJvcHMzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMy5vbkNsaWNrLFxuICAgICAgICAgIHJpZ2h0QXZhdGFyID0gX3Byb3BzMy5yaWdodEF2YXRhcixcbiAgICAgICAgICByaWdodEljb24gPSBfcHJvcHMzLnJpZ2h0SWNvbixcbiAgICAgICAgICByaWdodEljb25CdXR0b24gPSBfcHJvcHMzLnJpZ2h0SWNvbkJ1dHRvbixcbiAgICAgICAgICByaWdodFRvZ2dsZSA9IF9wcm9wczMucmlnaHRUb2dnbGUsXG4gICAgICAgICAgcHJpbWFyeVRleHQgPSBfcHJvcHMzLnByaW1hcnlUZXh0LFxuICAgICAgICAgIHByaW1hcnlUb2dnbGVzTmVzdGVkTGlzdCA9IF9wcm9wczMucHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0LFxuICAgICAgICAgIHNlY29uZGFyeVRleHQgPSBfcHJvcHMzLnNlY29uZGFyeVRleHQsXG4gICAgICAgICAgc2Vjb25kYXJ5VGV4dExpbmVzID0gX3Byb3BzMy5zZWNvbmRhcnlUZXh0TGluZXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMywgWydhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3InLCAnY2hpbGRyZW4nLCAnY29udGFpbmVyRWxlbWVudCcsICdkaXNhYmxlZCcsICdkaXNhYmxlS2V5Ym9hcmRGb2N1cycsICdob3ZlckNvbG9yJywgJ2luaXRpYWxseU9wZW4nLCAnaW5uZXJEaXZTdHlsZScsICdpbnNldENoaWxkcmVuJywgJ2xlZnRBdmF0YXInLCAnbGVmdENoZWNrYm94JywgJ2xlZnRJY29uJywgJ25lc3RlZEl0ZW1zJywgJ25lc3RlZExldmVsJywgJ25lc3RlZExpc3RTdHlsZScsICdvbktleWJvYXJkRm9jdXMnLCAnaXNLZXlib2FyZEZvY3VzZWQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbk5lc3RlZExpc3RUb2dnbGUnLCAnb25Ub3VjaFN0YXJ0JywgJ29uQ2xpY2snLCAncmlnaHRBdmF0YXInLCAncmlnaHRJY29uJywgJ3JpZ2h0SWNvbkJ1dHRvbicsICdyaWdodFRvZ2dsZScsICdwcmltYXJ5VGV4dCcsICdwcmltYXJ5VG9nZ2xlc05lc3RlZExpc3QnLCAnc2Vjb25kYXJ5VGV4dCcsICdzZWNvbmRhcnlUZXh0TGluZXMnLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgY29udGVudENoaWxkcmVuID0gW2NoaWxkcmVuXTtcblxuICAgICAgaWYgKGxlZnRJY29uKSB7XG4gICAgICAgIHZhciBhZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICAgICAgY29sb3I6IGxlZnRJY29uLnByb3BzLmNvbG9yIHx8IHRoaXMuY29udGV4dC5tdWlUaGVtZS5saXN0SXRlbS5sZWZ0SWNvbkNvbG9yXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCBsZWZ0SWNvbiwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbnMsIHN0eWxlcy5sZWZ0SWNvbiksIGFkZGl0aW9uYWxQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodEljb24pIHtcbiAgICAgICAgdmFyIF9hZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICAgICAgY29sb3I6IHJpZ2h0SWNvbi5wcm9wcy5jb2xvciB8fCB0aGlzLmNvbnRleHQubXVpVGhlbWUubGlzdEl0ZW0ucmlnaHRJY29uQ29sb3JcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIHJpZ2h0SWNvbiwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbnMsIHN0eWxlcy5yaWdodEljb24pLCBfYWRkaXRpb25hbFByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRBdmF0YXIpIHtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIGxlZnRBdmF0YXIsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmF2YXRhcnMsIHN0eWxlcy5sZWZ0QXZhdGFyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodEF2YXRhcikge1xuICAgICAgICB0aGlzLnB1c2hFbGVtZW50KGNvbnRlbnRDaGlsZHJlbiwgcmlnaHRBdmF0YXIsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmF2YXRhcnMsIHN0eWxlcy5yaWdodEF2YXRhcikpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVmdENoZWNrYm94KSB7XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCBsZWZ0Q2hlY2tib3gsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmxlZnRDaGVja2JveCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSaWdodEljb25CdXR0b25FbGVtZW50XG4gICAgICB2YXIgaGFzTmVzdExpc3RJdGVtcyA9IG5lc3RlZEl0ZW1zLmxlbmd0aDtcbiAgICAgIHZhciBoYXNSaWdodEVsZW1lbnQgPSByaWdodEF2YXRhciB8fCByaWdodEljb24gfHwgcmlnaHRJY29uQnV0dG9uIHx8IHJpZ2h0VG9nZ2xlO1xuICAgICAgdmFyIG5lZWRzTmVzdGVkSW5kaWNhdG9yID0gaGFzTmVzdExpc3RJdGVtcyAmJiBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IgJiYgIWhhc1JpZ2h0RWxlbWVudDtcblxuICAgICAgaWYgKHJpZ2h0SWNvbkJ1dHRvbiB8fCBuZWVkc05lc3RlZEluZGljYXRvcikge1xuICAgICAgICB2YXIgcmlnaHRJY29uQnV0dG9uRWxlbWVudCA9IHJpZ2h0SWNvbkJ1dHRvbjtcbiAgICAgICAgdmFyIHJpZ2h0SWNvbkJ1dHRvbkhhbmRsZXJzID0ge1xuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25LZXlib2FyZEZvY3VzLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uVG91Y2hUYXAsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VVcCxcbiAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VVcFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5lc3RlZCBsaXN0IGluZGljYXRvciBpY29uIGlmIHdlIGRvbid0IGhhdmUgYW4gaWNvbiBvbiB0aGUgcmlnaHRcbiAgICAgICAgaWYgKG5lZWRzTmVzdGVkSW5kaWNhdG9yKSB7XG4gICAgICAgICAgcmlnaHRJY29uQnV0dG9uRWxlbWVudCA9IHRoaXMuc3RhdGUub3BlbiA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2V4cGFuZExlc3MyLmRlZmF1bHQsIG51bGwpXG4gICAgICAgICAgKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2V4cGFuZE1vcmUyLmRlZmF1bHQsIG51bGwpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByaWdodEljb25CdXR0b25IYW5kbGVycy5vbkNsaWNrID0gdGhpcy5oYW5kbGVOZXN0ZWRMaXN0VG9nZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIHJpZ2h0SWNvbkJ1dHRvbkVsZW1lbnQsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJpZ2h0SWNvbkJ1dHRvbiksIHJpZ2h0SWNvbkJ1dHRvbkhhbmRsZXJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0VG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCByaWdodFRvZ2dsZSwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucmlnaHRUb2dnbGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByaW1hcnlUZXh0KSB7XG4gICAgICAgIHZhciBwcmltYXJ5VGV4dEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRleHRFbGVtZW50KHN0eWxlcy5wcmltYXJ5VGV4dCwgcHJpbWFyeVRleHQsICdwcmltYXJ5VGV4dCcpO1xuICAgICAgICBjb250ZW50Q2hpbGRyZW4ucHVzaChwcmltYXJ5VGV4dEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Vjb25kYXJ5VGV4dCkge1xuICAgICAgICB2YXIgc2Vjb25kYXJ5VGV4dEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRleHRFbGVtZW50KHN0eWxlcy5zZWNvbmRhcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCAnc2Vjb25kYXJ5VGV4dCcpO1xuICAgICAgICBjb250ZW50Q2hpbGRyZW4ucHVzaChzZWNvbmRhcnlUZXh0RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXN0ZWRMaXN0ID0gbmVzdGVkSXRlbXMubGVuZ3RoID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9OZXN0ZWRMaXN0Mi5kZWZhdWx0LFxuICAgICAgICB7IG5lc3RlZExldmVsOiBuZXN0ZWRMZXZlbCwgb3BlbjogdGhpcy5zdGF0ZS5vcGVuLCBzdHlsZTogbmVzdGVkTGlzdFN0eWxlIH0sXG4gICAgICAgIG5lc3RlZEl0ZW1zXG4gICAgICApIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgc2ltcGxlTGFiZWwgPSAhcHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0ICYmIChsZWZ0Q2hlY2tib3ggfHwgcmlnaHRUb2dnbGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBzaW1wbGVMYWJlbCA/IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBvdGhlcikgOiBkaXNhYmxlZCA/IHRoaXMuY3JlYXRlRGlzYWJsZWRFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBvdGhlcikgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50OiBjb250YWluZXJFbGVtZW50XG4gICAgICAgICAgfSwgb3RoZXIsIHtcbiAgICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzOiBkaXNhYmxlS2V5Ym9hcmRGb2N1cyB8fCB0aGlzLnN0YXRlLnJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXNlZCxcbiAgICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzLFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG91Y2hUYXAsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuYnV0dG9uID0gbm9kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucm9vdCwgc3R5bGUpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbm5lckRpdiwgaW5uZXJEaXZTdHlsZSkpIH0sXG4gICAgICAgICAgICBjb250ZW50Q2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIG5lc3RlZExpc3RcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMaXN0SXRlbTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkxpc3RJdGVtLm11aU5hbWUgPSAnTGlzdEl0ZW0nO1xuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3I6IHRydWUsXG4gIGNvbnRhaW5lckVsZW1lbnQ6ICdzcGFuJyxcbiAgZGlzYWJsZUtleWJvYXJkRm9jdXM6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICBpbnNldENoaWxkcmVuOiBmYWxzZSxcbiAgbmVzdGVkSXRlbXM6IFtdLFxuICBuZXN0ZWRMZXZlbDogMCxcbiAgb25LZXlib2FyZEZvY3VzOiBmdW5jdGlvbiBvbktleWJvYXJkRm9jdXMoKSB7fSxcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7fSxcbiAgb25OZXN0ZWRMaXN0VG9nZ2xlOiBmdW5jdGlvbiBvbk5lc3RlZExpc3RUb2dnbGUoKSB7fSxcbiAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHt9LFxuICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydCgpIHt9LFxuICBvcGVuOiBudWxsLFxuICBwcmltYXJ5VG9nZ2xlc05lc3RlZExpc3Q6IGZhbHNlLFxuICBzZWNvbmRhcnlUZXh0TGluZXM6IDFcbn07XG5MaXN0SXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuTGlzdEl0ZW0ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgZ2VuZXJhdGUgYSBuZXN0ZWQtbGlzdC1pbmRpY2F0b3IgaWNvbiB3aGVuIG5lc3RlZCBsaXN0XG4gICAqIGl0ZW1zIGFyZSBkZXRlY3RlZC4gTm90ZSB0aGF0IGFuIGluZGljYXRvciB3aWxsIG5vdCBiZSBjcmVhdGVkXG4gICAqIGlmIGEgYHJpZ2h0SWNvbmAgb3IgYHJpZ2h0SWNvbkJ1dHRvbmAgaGFzIGJlZW4gcHJvdmlkZWQgdG9cbiAgICogdGhlIGVsZW1lbnQuXG4gICAqL1xuICBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENoaWxkcmVuIHBhc3NlZCBpbnRvIHRoZSBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRvIHVzZSBhcyB0aGUgY29udGFpbmVyIGZvciB0aGUgTGlzdEl0ZW0uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgKiB1c2UgYSBET00gZWxlbWVudCBvciBhIFJlYWN0RWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgZm9yIHdyYXBwaW5nIHRoZVxuICAgKiBMaXN0SXRlbSBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgKiB0aGF0IGl0IHBhc3NlcyBhbGwgb2YgaXRzIGdpdmVuIHByb3BzIHRocm91Z2ggdG8gdGhlIHVuZGVybHlpbmcgRE9NXG4gICAqIGVsZW1lbnQgYW5kIHJlbmRlcnMgaXRzIGNoaWxkcmVuIHByb3AgZm9yIHByb3BlciBpbnRlZ3JhdGlvbi5cbiAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIG5vdCBiZSBhYmxlIHRvIGJlIGZvY3VzZWQgYnkgdGhlIGtleWJvYXJkLlxuICAgKi9cbiAgZGlzYWJsZUtleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbm90IGJlIGNsaWNrYWJsZVxuICAgKiBhbmQgd2lsbCBub3QgZGlzcGxheSBob3ZlciBlZmZlY3RzLlxuICAgKiBUaGlzIGlzIGF1dG9tYXRpY2FsbHkgZGlzYWJsZWQgaWYgZWl0aGVyIGBsZWZ0Q2hlY2tib3hgXG4gICAqIG9yIGByaWdodFRvZ2dsZWAgaXMgc2V0LlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICogT3ZlcnJpZGUgdGhlIGhvdmVyIGJhY2tncm91bmQgY29sb3IuXG4gICovXG4gIGhvdmVyQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG5lc3RlZCBgTGlzdEl0ZW1gcyBhcmUgaW5pdGlhbGx5IGRpc3BsYXllZC5cbiAgICovXG4gIGluaXRpYWxseU9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBpbm5lciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGlubmVyRGl2U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGNoaWxkcmVuIHdpbGwgYmUgaW5kZW50ZWQgYnkgNzJweC5cbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgdGhlcmUgaXMgbm8gbGVmdCBhdmF0YXIgb3IgbGVmdCBpY29uLlxuICAgKi9cbiAgaW5zZXRDaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVXNlIHRvIGNvbnRyb2wgaWYgdGhlIGxpc3QgaXRlbSBzaG91bGQgcmVuZGVyIGFzIGtleWJvYXJkIGZvY3VzZWQuICBJZlxuICAgKiB1bmRlZmluZWQgKGRlZmF1bHQpLCB0aGlzIHdpbGwgYmUgYXV0b21hdGljYWxseSBtYW5hZ2VkLiAgSWYgcHJvdmlkZWQsXG4gICAqIGl0IHdpbGwgY2hhbmdlIHRoZSBjb21wb25lbnRzIHN0eWxlLiAgTm90ZSB0aGF0IHRoaXMgd2lsbCBub3QgY2hhbmdlIHRoZVxuICAgKiBhY3R1YWwgZm9jdXMgLSBhbmQgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aGVuIHlvdSB3YW50IHRvIHNpbXVsYXRlXG4gICAqIGtleWJvYXJkIGZvY3VzIChlZy4gaW4gYSByaWNoIHRleHQgaW5wdXQgYXV0b2NvbXBsZXRlKS5cbiAgICovXG4gIGlzS2V5Ym9hcmRGb2N1c2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgQXZhdGFyYCBlbGVtZW50IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlLlxuICAgKi9cbiAgbGVmdEF2YXRhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYENoZWNrYm94YCBlbGVtZW50IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlLlxuICAgKi9cbiAgbGVmdENoZWNrYm94OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgU3ZnSWNvbmAgb3IgYEZvbnRJY29uYCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIGxlZnQgc2lkZS5cbiAgICovXG4gIGxlZnRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBgTGlzdEl0ZW1gcyB0byBuZXN0IHVuZGVybmVhdGggdGhlIGN1cnJlbnQgYExpc3RJdGVtYC5cbiAgICovXG4gIG5lc3RlZEl0ZW1zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50KSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBkZWVwIGEgYExpc3RJdGVtYCBhcHBlYXJzLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCwgc28gbW9kaWZ5IGF0IHlvdXIgb3duIHJpc2suXG4gICAqL1xuICBuZXN0ZWRMZXZlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgbmVzdGVkIGl0ZW1zJyBgTmVzdGVkTGlzdGAuXG4gICAqL1xuICBuZXN0ZWRMaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgbGlzdCBpdGVtIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbGlzdCBpdGVtLlxuICAgKi9cbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYExpc3RJdGVtYCBpcyBmb2N1c2VkIG9yIGJsdXJyZWQgYnkgdGhlIGtleWJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgYGZvY3VzYCBvciBgYmx1cmAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBgTGlzdEl0ZW1gLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzS2V5Ym9hcmRGb2N1c2VkIElmIHRydWUsIHRoZSBgTGlzdEl0ZW1gIGlzIGZvY3VzZWQuXG4gICAqL1xuICBvbktleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYExpc3RJdGVtYCB0b2dnbGVzIGl0cyBuZXN0ZWQgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGxpc3RJdGVtIFRoZSBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgb25OZXN0ZWRMaXN0VG9nZ2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hFbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDb250cm9sIHRvZ2dsZSBzdGF0ZSBvZiBuZXN0ZWQgbGlzdC5cbiAgICovXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGJsb2NrIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgcHJpbWFyeSB0ZXh0LlxuICAgKiBJZiBhIHN0cmluZyBpcyBwYXNzZWQgaW4sIGEgZGl2IHRhZyB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgcHJpbWFyeVRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIGNsaWNraW5nIG9yIHRhcHBpbmcgdGhlIHByaW1hcnkgdGV4dCBvZiB0aGUgYExpc3RJdGVtYFxuICAgKiB0b2dnbGVzIHRoZSBuZXN0ZWQgbGlzdC5cbiAgICovXG4gIHByaW1hcnlUb2dnbGVzTmVzdGVkTGlzdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYEF2YXRhcmAgZWxlbWVudCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqL1xuICByaWdodEF2YXRhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYFN2Z0ljb25gIG9yIGBGb250SWNvbmAgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSByaWdodCBzaWRlLlxuICAgKi9cbiAgcmlnaHRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgSWNvbkJ1dHRvbmAgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSByaWdodCBzaWRlLlxuICAgKiBIb3ZlcmluZyBvdmVyIHRoaXMgYnV0dG9uIHdpbGwgcmVtb3ZlIHRoZSBgTGlzdEl0ZW1gIGhvdmVyLlxuICAgKiBBbHNvLCBjbGlja2luZyBvbiB0aGlzIGJ1dHRvbiB3aWxsIG5vdCB0cmlnZ2VyIGFcbiAgICogcmlwcGxlIG9uIHRoZSBgTGlzdEl0ZW1gOyB0aGUgZXZlbnQgd2lsbCBiZSBzdG9wcGVkIGFuZCBwcmV2ZW50ZWRcbiAgICogZnJvbSBidWJibGluZyB1cCB0byBjYXVzZSBhIGBMaXN0SXRlbWAgY2xpY2suXG4gICAqL1xuICByaWdodEljb25CdXR0b246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGBUb2dnbGVgIGVsZW1lbnQgdG8gZGlzcGxheSBvbiB0aGUgcmlnaHQgc2lkZS5cbiAgICovXG4gIHJpZ2h0VG9nZ2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBibG9jayBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHNlY29uZGFyeSB0ZXh0LlxuICAgKiBJZiBhIHN0cmluZyBpcyBwYXNzZWQgaW4sIGEgZGl2IHRhZyB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgc2Vjb25kYXJ5VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogQ2FuIGJlIDEgb3IgMi4gVGhpcyBpcyB0aGUgbnVtYmVyIG9mIHNlY29uZGFyeVxuICAgKiB0ZXh0IGxpbmVzIGJlZm9yZSBlbGxpcHNpcyB3aWxsIHNob3cuXG4gICAqL1xuICBzZWNvbmRhcnlUZXh0TGluZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWzEsIDJdKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IExpc3RJdGVtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0xpc3QvTGlzdEl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfSWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vSWNvbkJ1dHRvbicpO1xuXG52YXIgX0ljb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvbkJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9JY29uQnV0dG9uMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0ljb25CdXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfRm9udEljb24gPSByZXF1aXJlKCcuLi9Gb250SWNvbicpO1xuXG52YXIgX0ZvbnRJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvbnRJY29uKTtcblxudmFyIF9Ub29sdGlwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvVG9vbHRpcCcpO1xuXG52YXIgX1Rvb2x0aXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9vbHRpcCk7XG5cbnZhciBfY2hpbGRVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NoaWxkVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBiYXNlVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZTtcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHBhZGRpbmc6IGJhc2VUaGVtZS5zcGFjaW5nLmljb25TaXplIC8gMixcbiAgICAgIHdpZHRoOiBiYXNlVGhlbWUuc3BhY2luZy5pY29uU2l6ZSAqIDIsXG4gICAgICBoZWlnaHQ6IGJhc2VUaGVtZS5zcGFjaW5nLmljb25TaXplICogMixcbiAgICAgIGZvbnRTaXplOiAwXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGNvbG9yOiBiYXNlVGhlbWUucGFsZXR0ZS5kaXNhYmxlZENvbG9yLFxuICAgICAgZmlsbDogYmFzZVRoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvcixcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgfVxuICB9O1xufVxuXG52YXIgSWNvbkJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEljb25CdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEljb25CdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgSWNvbkJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBJY29uQnV0dG9uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShJY29uQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIC8vIE5vdCB0byBiZSBjb25mb25kZWQgd2l0aCB0aGUgdG91Y2ggcHJvcGVydHkuXG4gICAgICAvLyBUaGlzIHN0YXRlIGlzIHRvIGRldGVybWluZWQgaWYgaXQncyBhIG1vYmlsZSBkZXZpY2UuXG4gICAgICB0b3VjaDogZmFsc2UsXG4gICAgICB0b29sdGlwU2hvd246IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2hvd1Rvb2x0aXAoKTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuYnV0dG9uLmlzS2V5Ym9hcmRGb2N1c2VkKCkpIHtcbiAgICAgICAgX3RoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VPdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXNhYmxlZCkgX3RoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlT3V0KSBfdGhpcy5wcm9wcy5vbk1vdXNlT3V0KGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zaG93VG9vbHRpcCgpO1xuXG4gICAgICAvLyBDYW5jZWwgaG92ZXIgc3R5bGVzIGZvciB0b3VjaCBkZXZpY2VzXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLnRvdWNoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoOiB0cnVlIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgb25Gb2N1cyA9IF90aGlzJHByb3BzLm9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyID0gX3RoaXMkcHJvcHMub25CbHVyLFxuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1cyA9IF90aGlzJHByb3BzLm9uS2V5Ym9hcmRGb2N1cztcblxuICAgICAgaWYgKGlzS2V5Ym9hcmRGb2N1c2VkICYmICFkaXNhYmxlZCkge1xuICAgICAgICBfdGhpcy5zaG93VG9vbHRpcCgpO1xuICAgICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzS2V5Ym9hcmRGb2N1c2VkOiBpc0tleWJvYXJkRm9jdXNlZCB9KTtcbiAgICAgIGlmIChvbktleWJvYXJkRm9jdXMpIHtcbiAgICAgICAgb25LZXlib2FyZEZvY3VzKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEljb25CdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRLZXlib2FyZEZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5Ym9hcmRGb2N1cygpIHtcbiAgICAgIHRoaXMuYnV0dG9uLnNldEtleWJvYXJkRm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG93VG9vbHRpcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dUb29sdGlwKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudG9vbHRpcCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbHRpcFNob3duOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hpZGVUb29sdGlwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZVRvb2x0aXAoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50b29sdGlwKSB0aGlzLnNldFN0YXRlKHsgdG9vbHRpcFNob3duOiBmYWxzZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgaG92ZXJlZFN0eWxlID0gX3Byb3BzLmhvdmVyZWRTdHlsZSxcbiAgICAgICAgICBkaXNhYmxlVG91Y2hSaXBwbGUgPSBfcHJvcHMuZGlzYWJsZVRvdWNoUmlwcGxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGljb25DbGFzc05hbWUgPSBfcHJvcHMuaWNvbkNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB0b29sdGlwID0gX3Byb3BzLnRvb2x0aXAsXG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uUHJvcCA9IF9wcm9wcy50b29sdGlwUG9zaXRpb24sXG4gICAgICAgICAgdG9vbHRpcFN0eWxlcyA9IF9wcm9wcy50b29sdGlwU3R5bGVzLFxuICAgICAgICAgIHRvdWNoID0gX3Byb3BzLnRvdWNoLFxuICAgICAgICAgIGljb25TdHlsZSA9IF9wcm9wcy5pY29uU3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnZGlzYWJsZWQnLCAnaG92ZXJlZFN0eWxlJywgJ2Rpc2FibGVUb3VjaFJpcHBsZScsICdjaGlsZHJlbicsICdpY29uQ2xhc3NOYW1lJywgJ3N0eWxlJywgJ3Rvb2x0aXAnLCAndG9vbHRpcFBvc2l0aW9uJywgJ3Rvb2x0aXBTdHlsZXMnLCAndG91Y2gnLCAnaWNvblN0eWxlJ10pO1xuXG4gICAgICB2YXIgZm9udGljb24gPSB2b2lkIDA7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHZhciB0b29sdGlwUG9zaXRpb24gPSB0b29sdGlwUG9zaXRpb25Qcm9wLnNwbGl0KCctJyk7XG5cbiAgICAgIHZhciBob3ZlcmVkID0gKHRoaXMuc3RhdGUuaG92ZXJlZCB8fCB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSAmJiAhZGlzYWJsZWQ7XG5cbiAgICAgIHZhciBtZXJnZWRSb290U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSwgaG92ZXJlZCA/IGhvdmVyZWRTdHlsZSA6IHt9KTtcblxuICAgICAgdmFyIHRvb2x0aXBFbGVtZW50ID0gdG9vbHRpcCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Ub29sdGlwMi5kZWZhdWx0LCB7XG4gICAgICAgIGxhYmVsOiB0b29sdGlwLFxuICAgICAgICBzaG93OiB0aGlzLnN0YXRlLnRvb2x0aXBTaG93bixcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50b29sdGlwLCB0b29sdGlwU3R5bGVzKSxcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogdG9vbHRpcFBvc2l0aW9uWzBdLFxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvblsxXVxuICAgICAgfSkgOiBudWxsO1xuXG4gICAgICBpZiAoaWNvbkNsYXNzTmFtZSkge1xuICAgICAgICB2YXIgaWNvbkhvdmVyQ29sb3IgPSBpY29uU3R5bGUuaWNvbkhvdmVyQ29sb3IsXG4gICAgICAgICAgICBpY29uU3R5bGVGb250SWNvbiA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKGljb25TdHlsZSwgWydpY29uSG92ZXJDb2xvciddKTtcblxuXG4gICAgICAgIGZvbnRpY29uID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0ZvbnRJY29uMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZSxcbiAgICAgICAgICAgIGhvdmVyQ29sb3I6IGRpc2FibGVkID8gbnVsbCA6IGljb25Ib3ZlckNvbG9yLFxuICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgZGlzYWJsZWQgJiYgc3R5bGVzLmRpc2FibGVkLCBpY29uU3R5bGVGb250SWNvbiksXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5wYWxldHRlLnRleHRDb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuU3R5bGUgPSBkaXNhYmxlZCA/ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgaWNvblN0eWxlLCBzdHlsZXMuZGlzYWJsZWQpIDogaWNvblN0eWxlO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuYnV0dG9uID0gX3JlZjI7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBvdGhlciwge1xuICAgICAgICAgIGNlbnRlclJpcHBsZTogdHJ1ZSxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgc3R5bGU6IG1lcmdlZFJvb3RTdHlsZXMsXG4gICAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlOiBkaXNhYmxlVG91Y2hSaXBwbGUsXG4gICAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLmhhbmRsZU1vdXNlT3V0LFxuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzXG4gICAgICAgIH0pLFxuICAgICAgICB0b29sdGlwRWxlbWVudCxcbiAgICAgICAgZm9udGljb24sXG4gICAgICAgICgwLCBfY2hpbGRVdGlscy5leHRlbmRDaGlsZHJlbikoY2hpbGRyZW4sIHtcbiAgICAgICAgICBzdHlsZTogY2hpbGRyZW5TdHlsZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEljb25CdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5JY29uQnV0dG9uLm11aU5hbWUgPSAnSWNvbkJ1dHRvbic7XG5JY29uQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlVG91Y2hSaXBwbGU6IGZhbHNlLFxuICBpY29uU3R5bGU6IHt9LFxuICB0b29sdGlwUG9zaXRpb246ICdib3R0b20tY2VudGVyJyxcbiAgdG91Y2g6IGZhbHNlXG59O1xuSWNvbkJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuSWNvbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBwYXNzIGEgYEZvbnRJY29uYCBlbGVtZW50IGFzIHRoZSBpY29uIGZvciB0aGUgYnV0dG9uLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGhvdmVyZWQuXG4gICAqL1xuICBob3ZlcmVkU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIGljb24uIFVzZWQgZm9yIHNldHRpbmcgdGhlIGljb24gd2l0aCBhIHN0eWxlc2hlZXQuXG4gICAqL1xuICBpY29uQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqIE5vdGU6IHlvdSBjYW4gc3BlY2lmeSBpY29uSG92ZXJDb2xvciBhcyBhIFN0cmluZyBpbnNpZGUgdGhpcyBvYmplY3QuXG4gICAqL1xuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkIG9yIGJsdXJyZWQgYnkgdGhlIGtleWJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgYGZvY3VzYCBvciBgYmx1cmAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGtleWJvYXJkRm9jdXNlZCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgb25LZXlib2FyZEZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZU91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzdXBwbHkgdG8gdGhlIGVsZW1lbnQncyB0b29sdGlwLlxuICAgKi9cbiAgdG9vbHRpcDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsIHBvc2l0aW9ucywgcmVzcGVjdGl2ZWx5LCBvZiB0aGUgZWxlbWVudCdzIHRvb2x0aXAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6IFwiYm90dG9tLWNlbnRlclwiLCBcInRvcC1jZW50ZXJcIiwgXCJib3R0b20tcmlnaHRcIiwgXCJ0b3AtcmlnaHRcIixcbiAgICogXCJib3R0b20tbGVmdFwiLCBhbmQgXCJ0b3AtbGVmdFwiLlxuICAgKi9cbiAgdG9vbHRpcFBvc2l0aW9uOiBfcHJvcFR5cGVzNC5kZWZhdWx0LmNvcm5lcnNBbmRDZW50ZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdG9vbHRpcCBlbGVtZW50LlxuICAgKi9cbiAgdG9vbHRpcFN0eWxlczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBpbmNyZWFzZSB0aGUgdG9vbHRpcCBlbGVtZW50J3Mgc2l6ZS4gVXNlZnVsIGZvciBpbmNyZWFzaW5nIHRvb2x0aXBcbiAgICogcmVhZGFiaWxpdHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqL1xuICB0b3VjaDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBJY29uQnV0dG9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0ljb25CdXR0b24vSWNvbkJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9Gb250SWNvbiA9IHJlcXVpcmUoJy4vRm9udEljb24nKTtcblxudmFyIF9Gb250SWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb250SWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Gb250SWNvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9Gb250SWNvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3I7XG4gIHZhciBiYXNlVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZTtcblxuICB2YXIgb2ZmQ29sb3IgPSBjb2xvciB8fCBiYXNlVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3I7XG4gIHZhciBvbkNvbG9yID0gaG92ZXJDb2xvciB8fCBvZmZDb2xvcjtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGNvbG9yOiBzdGF0ZS5ob3ZlcmVkID8gb25Db2xvciA6IG9mZkNvbG9yLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBmb250U2l6ZTogYmFzZVRoZW1lLnNwYWNpbmcuaWNvblNpemUsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9XG4gIH07XG59XG5cbnZhciBGb250SWNvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEZvbnRJY29uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGb250SWNvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBGb250SWNvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBGb250SWNvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRm9udEljb24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gaG92ZXIgaXMgbmVlZGVkIG9ubHkgd2hlbiBhIGhvdmVyQ29sb3IgaXMgZGVmaW5lZFxuICAgICAgaWYgKF90aGlzLnByb3BzLmhvdmVyQ29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGhvdmVyIGlzIG5lZWRlZCBvbmx5IHdoZW4gYSBob3ZlckNvbG9yIGlzIGRlZmluZWRcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5ob3ZlckNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShGb250SWNvbiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBob3ZlckNvbG9yID0gX3Byb3BzLmhvdmVyQ29sb3IsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3Byb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2hvdmVyQ29sb3InLCAnb25Nb3VzZUxlYXZlJywgJ29uTW91c2VFbnRlcicsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSlcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZvbnRJY29uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRm9udEljb24ubXVpTmFtZSA9ICdGb250SWNvbic7XG5Gb250SWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge30sXG4gIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge31cbn07XG5Gb250SWNvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRm9udEljb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZm9udCBjb2xvciBvZiB0aGUgZm9udCBpY29uLiBJZiBub3Qgc3BlY2lmaWVkLFxuICAgKiB0aGlzIGNvbXBvbmVudCB3aWxsIGRlZmF1bHQgdG8gbXVpVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3IuXG4gICAqL1xuICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBpY29uIGNvbG9yIHdoZW4gdGhlIG1vdXNlIGhvdmVycyBvdmVyIHRoZSBpY29uLlxuICAgKi9cbiAgaG92ZXJDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZvbnRJY29uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL0ZvbnRJY29uL0ZvbnRJY29uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIHZlcnRpY2FsUG9zaXRpb24gPSBwcm9wcy52ZXJ0aWNhbFBvc2l0aW9uO1xuICB2YXIgaG9yaXpvbnRhbFBvc2l0aW9uID0gcHJvcHMuaG9yaXpvbnRhbFBvc2l0aW9uO1xuICB2YXIgdG91Y2hNYXJnaW5PZmZzZXQgPSBwcm9wcy50b3VjaCA/IDEwIDogMDtcbiAgdmFyIHRvdWNoT2Zmc2V0VG9wID0gcHJvcHMudG91Y2ggPyAtMjAgOiAtMTA7XG4gIHZhciBvZmZzZXQgPSB2ZXJ0aWNhbFBvc2l0aW9uID09PSAnYm90dG9tJyA/IDE0ICsgdG91Y2hNYXJnaW5PZmZzZXQgOiAtMTQgLSB0b3VjaE1hcmdpbk9mZnNldDtcblxuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgekluZGV4ID0gX2NvbnRleHQkbXVpVGhlbWUuekluZGV4LFxuICAgICAgdG9vbHRpcCA9IF9jb250ZXh0JG11aVRoZW1lLnRvb2x0aXAsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfY29udGV4dCRtdWlUaGVtZS5ib3JkZXJSYWRpdXM7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgIHpJbmRleDogekluZGV4LnRvb2x0aXAsXG4gICAgICBjb2xvcjogdG9vbHRpcC5jb2xvcixcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRvcDogLTEwMDAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcmlnaHQ6IGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2xlZnQnID8gMTIgOiBudWxsLFxuICAgICAgbGVmdDogaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJyA/IChzdGF0ZS5vZmZzZXRXaWR0aCAtIDQ4KSAvIDIgKiAtMSA6IGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ3JpZ2h0JyA/IDEyIDogbnVsbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAndG9wJywgJzQ1MG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ3RyYW5zZm9ybScsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnb3BhY2l0eScsICcwbXMnKVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LFxuICAgIHJpcHBsZToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiBob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInID8gJzUwJScgOiBob3Jpem9udGFsUG9zaXRpb24gPT09ICdsZWZ0JyA/ICcxMDAlJyA6ICcwJScsXG4gICAgICB0b3A6IHZlcnRpY2FsUG9zaXRpb24gPT09ICdib3R0b20nID8gMCA6ICcxMDAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzBtcycsICd3aWR0aCcsICc0NTBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnaGVpZ2h0JywgJzQ1MG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ2JhY2tncm91bmRDb2xvcicsICcwbXMnKVxuICAgIH0sXG4gICAgcm9vdFdoZW5TaG93bjoge1xuICAgICAgdG9wOiB2ZXJ0aWNhbFBvc2l0aW9uID09PSAndG9wJyA/IHRvdWNoT2Zmc2V0VG9wIDogMzYsXG4gICAgICBvcGFjaXR5OiB0b29sdGlwLm9wYWNpdHksXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAnICsgb2Zmc2V0ICsgJ3B4KScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ3RvcCcsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAndHJhbnNmb3JtJywgJzBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICdvcGFjaXR5JywgJzBtcycpXG4gICAgfSxcbiAgICByb290V2hlblRvdWNoZWQ6IHtcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gICAgICBwYWRkaW5nOiAnMCAxNnB4J1xuICAgIH0sXG4gICAgcmlwcGxlV2hlblNob3duOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRvb2x0aXAucmlwcGxlQmFja2dyb3VuZENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ3dpZHRoJywgJzBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICdoZWlnaHQnLCAnMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ2JhY2tncm91bmRDb2xvcicsICcwbXMnKVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRvb2x0aXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXAoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVG9vbHRpcCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUb29sdGlwLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUb29sdGlwKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvZmZzZXRXaWR0aDogbnVsbFxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUb29sdGlwLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFJpcHBsZVNpemUoKTtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnNldFRvb2x0aXBQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuc2V0UmlwcGxlU2l6ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFJpcHBsZVNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSaXBwbGVTaXplKCkge1xuICAgICAgdmFyIHJpcHBsZSA9IHRoaXMucmVmcy5yaXBwbGU7XG4gICAgICB2YXIgdG9vbHRpcCA9IHRoaXMucmVmcy50b29sdGlwO1xuICAgICAgdmFyIHRvb2x0aXBXaWR0aCA9IHBhcnNlSW50KHRvb2x0aXAub2Zmc2V0V2lkdGgsIDEwKSAvICh0aGlzLnByb3BzLmhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgPyAyIDogMSk7XG4gICAgICB2YXIgdG9vbHRpcEhlaWdodCA9IHBhcnNlSW50KHRvb2x0aXAub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cbiAgICAgIHZhciByaXBwbGVEaWFtZXRlciA9IE1hdGguY2VpbChNYXRoLnNxcnQoTWF0aC5wb3codG9vbHRpcEhlaWdodCwgMikgKyBNYXRoLnBvdyh0b29sdGlwV2lkdGgsIDIpKSAqIDIpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgICByaXBwbGUuc3R5bGUuaGVpZ2h0ID0gcmlwcGxlRGlhbWV0ZXIgKyAncHgnO1xuICAgICAgICByaXBwbGUuc3R5bGUud2lkdGggPSByaXBwbGVEaWFtZXRlciArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaXBwbGUuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcmlwcGxlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFRvb2x0aXBQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRvb2x0aXBQb3NpdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvZmZzZXRXaWR0aDogdGhpcy5yZWZzLnRvb2x0aXAub2Zmc2V0V2lkdGggfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gX3Byb3BzLmhvcml6b250YWxQb3NpdGlvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBzaG93ID0gX3Byb3BzLnNob3csXG4gICAgICAgICAgdG91Y2ggPSBfcHJvcHMudG91Y2gsXG4gICAgICAgICAgdmVydGljYWxQb3NpdGlvbiA9IF9wcm9wcy52ZXJ0aWNhbFBvc2l0aW9uLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2hvcml6b250YWxQb3NpdGlvbicsICdsYWJlbCcsICdzaG93JywgJ3RvdWNoJywgJ3ZlcnRpY2FsUG9zaXRpb24nXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgcmVmOiAndG9vbHRpcCcsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCB0aGlzLnByb3BzLnNob3cgJiYgc3R5bGVzLnJvb3RXaGVuU2hvd24sIHRoaXMucHJvcHMudG91Y2ggJiYgc3R5bGVzLnJvb3RXaGVuVG91Y2hlZCwgdGhpcy5wcm9wcy5zdHlsZSkpXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogJ3JpcHBsZScsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yaXBwbGUsIHRoaXMucHJvcHMuc2hvdyAmJiBzdHlsZXMucmlwcGxlV2hlblNob3duKSlcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5sYWJlbCkgfSxcbiAgICAgICAgICBsYWJlbFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVG9vbHRpcDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRvb2x0aXAuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRvb2x0aXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBob3Jpem9udGFsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcbiAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0b3VjaDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB2ZXJ0aWNhbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9vbHRpcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9pbnRlcm5hbC9Ub29sdGlwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRlbmRDaGlsZHJlbiA9IGV4dGVuZENoaWxkcmVuO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGV4dGVuZENoaWxkcmVuKGNoaWxkcmVuLCBleHRlbmRlZFByb3BzLCBleHRlbmRlZENoaWxkcmVuKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIV9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICB2YXIgbmV3UHJvcHMgPSB0eXBlb2YgZXh0ZW5kZWRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IGV4dGVuZGVkUHJvcHMoY2hpbGQpIDogZXh0ZW5kZWRQcm9wcztcblxuICAgIHZhciBuZXdDaGlsZHJlbiA9IHR5cGVvZiBleHRlbmRlZENoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gZXh0ZW5kZWRDaGlsZHJlbihjaGlsZCkgOiBleHRlbmRlZENoaWxkcmVuID8gZXh0ZW5kZWRDaGlsZHJlbiA6IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld1Byb3BzLCBuZXdDaGlsZHJlbik7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3V0aWxzL2NoaWxkVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wdXJlID0gcmVxdWlyZSgncmVjb21wb3NlL3B1cmUnKTtcblxudmFyIF9wdXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B1cmUpO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuLi8uLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5hdmlnYXRpb25FeHBhbmRMZXNzID0gZnVuY3Rpb24gTmF2aWdhdGlvbkV4cGFuZExlc3MocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTEyIDhsLTYgNiAxLjQxIDEuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0eicgfSlcbiAgKTtcbn07XG5OYXZpZ2F0aW9uRXhwYW5kTGVzcyA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoTmF2aWdhdGlvbkV4cGFuZExlc3MpO1xuTmF2aWdhdGlvbkV4cGFuZExlc3MuZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvbkV4cGFuZExlc3MnO1xuTmF2aWdhdGlvbkV4cGFuZExlc3MubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkV4cGFuZExlc3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vZXhwYW5kLWxlc3MuanNcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wdXJlID0gcmVxdWlyZSgncmVjb21wb3NlL3B1cmUnKTtcblxudmFyIF9wdXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B1cmUpO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuLi8uLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5hdmlnYXRpb25FeHBhbmRNb3JlID0gZnVuY3Rpb24gTmF2aWdhdGlvbkV4cGFuZE1vcmUocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTE2LjU5IDguNTlMMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNnonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbkV4cGFuZE1vcmUgPSAoMCwgX3B1cmUyLmRlZmF1bHQpKE5hdmlnYXRpb25FeHBhbmRNb3JlKTtcbk5hdmlnYXRpb25FeHBhbmRNb3JlLmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25FeHBhbmRNb3JlJztcbk5hdmlnYXRpb25FeHBhbmRNb3JlLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5hdmlnYXRpb25FeHBhbmRNb3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2V4cGFuZC1tb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX0xpc3QgPSByZXF1aXJlKCcuL0xpc3QnKTtcblxudmFyIF9MaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmVzdGVkTGlzdCA9IGZ1bmN0aW9uIE5lc3RlZExpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG5lc3RlZExldmVsID0gcHJvcHMubmVzdGVkTGV2ZWwsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG5cbiAgaWYgKCFvcGVuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX0xpc3QyLmRlZmF1bHQsXG4gICAgeyBzdHlsZTogc3R5bGUgfSxcbiAgICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkgPyAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgbmVzdGVkTGV2ZWw6IG5lc3RlZExldmVsICsgMVxuICAgICAgfSkgOiBjaGlsZDtcbiAgICB9KVxuICApO1xufTtcblxuTmVzdGVkTGlzdC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG5lc3RlZExldmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmVzdGVkTGlzdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9MaXN0L05lc3RlZExpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RleHRGaWVsZDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vRW5oYW5jZWRUZXh0YXJlYScpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRUZXh0YXJlYSk7XG5cbnZhciBfVGV4dEZpZWxkSGludCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkSGludCcpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkSGludCk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwgPSByZXF1aXJlKCcuL1RleHRGaWVsZExhYmVsJyk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkTGFiZWwpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZSA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkVW5kZXJsaW5lJyk7XG5cbnZhciBfVGV4dEZpZWxkVW5kZXJsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZFVuZGVybGluZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgX2NvbnRleHQkbXVpVGhlbWUkdGV4ID0gX2NvbnRleHQkbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgZmxvYXRpbmdMYWJlbENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZm9jdXNDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC50ZXh0Q29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5kaXNhYmxlZFRleHRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmVycm9yQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgIHdpZHRoOiBwcm9wcy5mdWxsV2lkdGggPyAnMTAwJScgOiAyNTYsXG4gICAgICBoZWlnaHQ6IChwcm9wcy5yb3dzIC0gMSkgKiAyNCArIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDcyIDogNDgpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMjAwbXMnLCAnaGVpZ2h0JyksXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdhdXRvJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm90dG9tOiAyLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgY29sb3I6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyBkaXNhYmxlZFRleHRDb2xvciA6IGZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIFdlYmtpdE9wYWNpdHk6IDEsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknIC8vIFJlbW92ZSBtb2JpbGUgY29sb3IgZmxhc2hpbmcgKGRlcHJlY2F0ZWQgc3R5bGUpLlxuICAgIH0sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnIC8vIEltcHJvdmUgdHlwZSBzZWFyY2ggc3R5bGUuXG4gICAgfVxuICB9O1xuXG4gIHN0eWxlcy50ZXh0YXJlYSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmlucHV0LCB7XG4gICAgbWFyZ2luVG9wOiBwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDM2IDogMTIsXG4gICAgbWFyZ2luQm90dG9tOiBwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IC0zNiA6IC0xMixcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmb250OiAnaW5oZXJpdCdcbiAgfSk7XG5cbiAgLy8gRG8gbm90IGFzc2lnbiBhIGhlaWdodCB0byB0aGUgdGV4dGFyZWEgYXMgaGUgaGFuZGxlcyBpdCBvbiBoaXMgb3duLlxuICBzdHlsZXMuaW5wdXQuaGVpZ2h0ID0gJzEwMCUnO1xuXG4gIGlmIChzdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICBzdHlsZXMuZmxvYXRpbmdMYWJlbC5jb2xvciA9IGZvY3VzQ29sb3I7XG4gIH1cblxuICBpZiAocHJvcHMuZmxvYXRpbmdMYWJlbFRleHQpIHtcbiAgICBzdHlsZXMuaW5wdXQuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gICAgaWYgKCFwcm9wcy5tdWx0aUxpbmUpIHtcbiAgICAgIHN0eWxlcy5pbnB1dC5tYXJnaW5Ub3AgPSAxNDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZXJyb3JUZXh0KSB7XG4gICAgICBzdHlsZXMuZXJyb3IuYm90dG9tID0gIXByb3BzLm11bHRpTGluZSA/IHN0eWxlcy5lcnJvci5mb250U2l6ZSArIDMgOiAzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5lcnJvclRleHQpIHtcbiAgICBpZiAoc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgICBzdHlsZXMuZmxvYXRpbmdMYWJlbC5jb2xvciA9IHN0eWxlcy5lcnJvci5jb2xvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIHZhbGlkIHRvIGJlIGRpc3BsYXllZCBpbnNpZGUgYW4gaW5wdXQuXG4gKlxuICogQHBhcmFtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0cmluZyBwcm92aWRlZCBpcyB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG59XG5cbnZhciBUZXh0RmllbGQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUZXh0RmllbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRleHRGaWVsZCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBUZXh0RmllbGQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gVGV4dEZpZWxkLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUZXh0RmllbGQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgICBlcnJvclRleHQ6IHVuZGVmaW5lZCxcbiAgICAgIGhhc1ZhbHVlOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZUlucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaGFzVmFsdWU6IGlzVmFsaWQoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IHRydWUgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGhlaWdodCkge1xuICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodCArIDI0O1xuICAgICAgaWYgKF90aGlzLnByb3BzLmZsb2F0aW5nTGFiZWxUZXh0KSB7XG4gICAgICAgIG5ld0hlaWdodCArPSAyNDtcbiAgICAgIH1cbiAgICAgIF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcykuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0ICsgJ3B4JztcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVGV4dEZpZWxkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG5hbWUgPSBfcHJvcHMubmFtZSxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wcy5oaW50VGV4dCxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dCA9IF9wcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBpZCA9IF9wcm9wcy5pZDtcblxuXG4gICAgICB2YXIgcHJvcHNMZWFmID0gY2hpbGRyZW4gPyBjaGlsZHJlbi5wcm9wcyA6IHRoaXMucHJvcHM7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlcnJvclRleHQ6IHRoaXMucHJvcHMuZXJyb3JUZXh0LFxuICAgICAgICBoYXNWYWx1ZTogaXNWYWxpZChwcm9wc0xlYWYudmFsdWUpIHx8IGlzVmFsaWQocHJvcHNMZWFmLmRlZmF1bHRWYWx1ZSlcbiAgICAgIH0pO1xuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKG5hbWUgfHwgaGludFRleHQgfHwgZmxvYXRpbmdMYWJlbFRleHQgfHwgaWQsICdNYXRlcmlhbC1VSTogV2UgZG9uXFwndCBoYXZlIGVub3VnaCBpbmZvcm1hdGlvblxcbiAgICAgIHRvIGJ1aWxkIGEgcm9idXN0IHVuaXF1ZSBpZCBmb3IgdGhlIFRleHRGaWVsZCBjb21wb25lbnQuIFBsZWFzZSBwcm92aWRlIGFuIGlkIG9yIGEgbmFtZS4nKSA6IHZvaWQgMDtcblxuICAgICAgdmFyIHVuaXF1ZUlkID0gbmFtZSArICctJyArIGhpbnRUZXh0ICsgJy0nICsgZmxvYXRpbmdMYWJlbFRleHQgKyAnLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweEZGRkYpO1xuICAgICAgdGhpcy51bmlxdWVJZCA9IHVuaXF1ZUlkLnJlcGxhY2UoL1teQS1aYS16MC05LV0vZ2ksICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRQcm9wcy5lcnJvclRleHQgIT09IHRoaXMucHJvcHMuZXJyb3JUZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yVGV4dDogbmV4dFByb3BzLmVycm9yVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAmJiBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMpIHtcbiAgICAgICAgbmV4dFByb3BzID0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IGlzVmFsaWQobmV4dFByb3BzLnZhbHVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdibHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPyB0aGlzLmdldElucHV0Tm9kZSgpLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IHRoaXMucHJvcHMubXVsdGlMaW5lID8gdGhpcy5pbnB1dC5nZXRJbnB1dE5vZGUoKSA6IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmlucHV0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaXNDb250cm9sbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ29udHJvbGxlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBlcnJvclN0eWxlID0gX3Byb3BzMi5lcnJvclN0eWxlLFxuICAgICAgICAgIGVycm9yVGV4dCA9IF9wcm9wczIuZXJyb3JUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRm9jdXNTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzMi5mdWxsV2lkdGgsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMyLmhpbnRUZXh0LFxuICAgICAgICAgIGhpbnRTdHlsZSA9IF9wcm9wczIuaGludFN0eWxlLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3Byb3BzMi5pbnB1dFN0eWxlLFxuICAgICAgICAgIG11bHRpTGluZSA9IF9wcm9wczIubXVsdGlMaW5lLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wczIub25CbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZSxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzMi5vbkZvY3VzLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgICB0eXBlID0gX3Byb3BzMi50eXBlLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVTaG93ID0gX3Byb3BzMi51bmRlcmxpbmVTaG93LFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICByb3dzID0gX3Byb3BzMi5yb3dzLFxuICAgICAgICAgIHJvd3NNYXggPSBfcHJvcHMyLnJvd3NNYXgsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wczIudGV4dGFyZWFTdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Vycm9yU3R5bGUnLCAnZXJyb3JUZXh0JywgJ2Zsb2F0aW5nTGFiZWxGaXhlZCcsICdmbG9hdGluZ0xhYmVsRm9jdXNTdHlsZScsICdmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFN0eWxlJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2Z1bGxXaWR0aCcsICdoaW50VGV4dCcsICdoaW50U3R5bGUnLCAnaWQnLCAnaW5wdXRTdHlsZScsICdtdWx0aUxpbmUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnc3R5bGUnLCAndHlwZScsICd1bmRlcmxpbmVEaXNhYmxlZFN0eWxlJywgJ3VuZGVybGluZUZvY3VzU3R5bGUnLCAndW5kZXJsaW5lU2hvdycsICd1bmRlcmxpbmVTdHlsZScsICdyb3dzJywgJ3Jvd3NNYXgnLCAndGV4dGFyZWFTdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBpbnB1dElkID0gaWQgfHwgdGhpcy51bmlxdWVJZDtcblxuICAgICAgdmFyIGVycm9yVGV4dEVsZW1lbnQgPSB0aGlzLnN0YXRlLmVycm9yVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5lcnJvciwgZXJyb3JTdHlsZSkpIH0sXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50ID0gZmxvYXRpbmdMYWJlbFRleHQgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UZXh0RmllbGRMYWJlbDIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuZmxvYXRpbmdMYWJlbCwgZmxvYXRpbmdMYWJlbFN0eWxlLCB0aGlzLnN0YXRlLmlzRm9jdXNlZCA/IGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlIDogbnVsbCksXG4gICAgICAgICAgc2hyaW5rU3R5bGU6IGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBodG1sRm9yOiBpbnB1dElkLFxuICAgICAgICAgIHNocmluazogdGhpcy5zdGF0ZS5oYXNWYWx1ZSB8fCB0aGlzLnN0YXRlLmlzRm9jdXNlZCB8fCBmbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgaWQ6IGlucHV0SWQsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0ID0gZWxlbTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBjaGlsZFN0eWxlTWVyZ2VkID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dCwgaW5wdXRTdHlsZSk7XG5cbiAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaW5wdXRFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgaW5wdXRQcm9wcywgY2hpbGRyZW4ucHJvcHMsIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGNoaWxkU3R5bGVNZXJnZWQsIGNoaWxkcmVuLnByb3BzLnN0eWxlKVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBtdWx0aUxpbmUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRW5oYW5jZWRUZXh0YXJlYTIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkU3R5bGVNZXJnZWQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50ZXh0YXJlYSwgc3R5bGVzLmlucHV0TmF0aXZlLCB0ZXh0YXJlYVN0eWxlKSxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgICAgICAgaGludFRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgb25IZWlnaHRDaGFuZ2U6IHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlXG4gICAgICAgIH0pKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dE5hdGl2ZSwgY2hpbGRTdHlsZU1lcmdlZCkpXG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290UHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIHJvb3RQcm9wcyA9IG90aGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCByb290UHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0RWxlbWVudCxcbiAgICAgICAgaGludFRleHQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkSGludDIuZGVmYXVsdCwge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc2hvdzogISh0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IGZsb2F0aW5nTGFiZWxUZXh0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkgfHwgIXRoaXMuc3RhdGUuaGFzVmFsdWUgJiYgZmxvYXRpbmdMYWJlbFRleHQgJiYgZmxvYXRpbmdMYWJlbEZpeGVkICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCxcbiAgICAgICAgICBzdHlsZTogaGludFN0eWxlLFxuICAgICAgICAgIHRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICB1bmRlcmxpbmVTaG93ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RleHRGaWVsZFVuZGVybGluZTIuZGVmYXVsdCwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlOiB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JUZXh0LFxuICAgICAgICAgIGVycm9yU3R5bGU6IGVycm9yU3R5bGUsXG4gICAgICAgICAgZm9jdXM6IHRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIGZvY3VzU3R5bGU6IHVuZGVybGluZUZvY3VzU3R5bGUsXG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogdW5kZXJsaW5lU3R5bGVcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBlcnJvclRleHRFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGV4dEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGV4dEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmbG9hdGluZ0xhYmVsRml4ZWQ6IGZhbHNlLFxuICBtdWx0aUxpbmU6IGZhbHNlLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICB0eXBlOiAndGV4dCcsXG4gIHVuZGVybGluZVNob3c6IHRydWUsXG4gIHJvd3M6IDFcbn07XG5UZXh0RmllbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRleHRGaWVsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBzdHJpbmcgdG8gdXNlIGZvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgdGV4dCBmaWVsZCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBlcnJvciBzdHlsZXMuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBlcnJvciBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBlcnJvclRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmbG9hdGluZyBsYWJlbCB3aWxsIGZsb2F0IGV2ZW4gd2hlbiB0aGVyZSBpcyBubyB2YWx1ZS5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gZm9jdXNlZC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcyB3aGVuIHNocnVuay5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgdG8gdXNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmllbGQgcmVjZWl2ZXMgdGhlIHByb3BlcnR5IHdpZHRoIDEwMCUuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyBoaW50IHRleHQgZWxlbWVudC5cbiAgICovXG4gIGhpbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGlkIHByb3AgZm9yIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIGZhbHNlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBXaGVuIG11bHRpTGluZSBpcyB0cnVlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBjb250YWluZXIgb2YgdGhlIHRleHRhcmVhLlxuICAgKi9cbiAgaW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogVGhlIHRleHRhcmVhIGFsc28gZ3Jvd3MgYW5kIHNocmlua3MgYWNjb3JkaW5nIHRvIHRoZSBudW1iZXIgb2YgbGluZXMuXG4gICAqL1xuICBtdWx0aUxpbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE5hbWUgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gICAqL1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHRleHRmaWVsZCdzIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBDaGFuZ2UgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlblxuICAgKiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIHRleHRhcmVhIGVsZW1lbnQuXG4gICAqIFRoZSBUZXh0RmllbGQgdXNlIGVpdGhlciBhIHRleHRhcmVhIG9yIGFuIGlucHV0LFxuICAgKiB0aGlzIHByb3BlcnR5IGhhcyBlZmZlY3RzIG9ubHkgd2hlbiBtdWx0aUxpbmUgaXMgdHJ1ZS5cbiAgICovXG4gIHRleHRhcmVhU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGlucHV0IHRvIGRpc3BsYXlcbiAgICogc3VjaCBhcyBcInBhc3N3b3JkXCIgb3IgXCJ0ZXh0XCIuXG4gICAqL1xuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZVxuICAgKiBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGRpc2FibGVkLlxuICAgKi9cbiAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3NcbiAgICogdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiBmb2N1c3NlZC5cbiAgICovXG4gIHVuZGVybGluZUZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgc2hvd3MgdGhlIHVuZGVybGluZSBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB1bmRlcmxpbmVTaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdW5kZXJsaW5lIGVsZW1lbnQuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyID0gcmVxdWlyZSgncmVhY3QtZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RFdmVudExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJvd3NIZWlnaHQgPSAyNDtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnIC8vIGJlY2F1c2UgdGhlIHNoYWRvdyBoYXMgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHRleHRhcmVhOiB7XG4gICAgICBoZWlnaHQ6IHN0YXRlLmhlaWdodCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICByZXNpemU6ICdub25lJyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0J1xuICAgIH0sXG4gICAgc2hhZG93OiB7XG4gICAgICByZXNpemU6ICdub25lJyxcbiAgICAgIC8vIE92ZXJmbG93IGFsc28gbmVlZGVkIHRvIGhlcmUgdG8gcmVtb3ZlIHRoZSBleHRyYSByb3dcbiAgICAgIC8vIGFkZGVkIHRvIHRleHRhcmVhcyBpbiBGaXJlZm94LlxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgLy8gVmlzaWJpbGl0eSBuZWVkZWQgdG8gaGlkZSB0aGUgZXh0cmEgdGV4dCBhcmVhIG9uIGlwYWRzXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICB9XG4gIH07XG59XG5cbnZhciBFbmhhbmNlZFRleHRhcmVhID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRW5oYW5jZWRUZXh0YXJlYSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRW5oYW5jZWRUZXh0YXJlYSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBFbmhhbmNlZFRleHRhcmVhKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEVuaGFuY2VkVGV4dGFyZWEuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlaWdodDogbnVsbFxuICAgIH0sIF90aGlzLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coX3RoaXMucHJvcHMudmFsdWUsIGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgX3RoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZUxpbmsnKSkge1xuICAgICAgICBfdGhpcy5wcm9wcy52YWx1ZUxpbmsucmVxdWVzdENoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMucm93cyAqIHJvd3NIZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHRoaXMucHJvcHMudmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fCBuZXh0UHJvcHMucm93c01heCAhPT0gdGhpcy5wcm9wcy5yb3dzTWF4KSB7XG4gICAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3cobmV4dFByb3BzLnZhbHVlLCBudWxsLCBuZXh0UHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMuaW5wdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3luY0hlaWdodFdpdGhTaGFkb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzeW5jSGVpZ2h0V2l0aFNoYWRvdyhuZXdWYWx1ZSwgZXZlbnQsIHByb3BzKSB7XG4gICAgICB2YXIgc2hhZG93ID0gdGhpcy5yZWZzLnNoYWRvdztcbiAgICAgIHZhciBkaXNwbGF5VGV4dCA9IHRoaXMucHJvcHMuaGludFRleHQgJiYgKG5ld1ZhbHVlID09PSAnJyB8fCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1ZhbHVlID09PSBudWxsKSA/IHRoaXMucHJvcHMuaGludFRleHQgOiBuZXdWYWx1ZTtcblxuICAgICAgaWYgKGRpc3BsYXlUZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2hhZG93LnZhbHVlID0gZGlzcGxheVRleHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdIZWlnaHQgPSBzaGFkb3cuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICAvLyBHdWFyZGluZyBmb3IganNkb20sIHdoZXJlIHNjcm9sbEhlaWdodCBpc24ndCBwcmVzZW50LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90bXB2YXIvanNkb20vaXNzdWVzLzEwMTNcbiAgICAgIGlmIChuZXdIZWlnaHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICBwcm9wcyA9IHByb3BzIHx8IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChwcm9wcy5yb3dzTWF4ID49IHByb3BzLnJvd3MpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4ocHJvcHMucm93c01heCAqIHJvd3NIZWlnaHQsIG5ld0hlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KG5ld0hlaWdodCwgcm93c0hlaWdodCk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5pbnB1dDtcbiAgICAgICAgdmFyIGN1cnNvclBvc2l0aW9uID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3JQb3NpdGlvbiwgY3Vyc29yUG9zaXRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcbiAgICAgIHZhciBwcm9wcyA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWVMaW5rJykpIHtcbiAgICAgICAgb3RoZXIudmFsdWUgPSB2YWx1ZUxpbmsudmFsdWU7XG4gICAgICAgIHByb3BzLnZhbHVlTGluayA9IHZhbHVlTGluaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhyb290U3R5bGVzKSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RFdmVudExpc3RlbmVyMi5kZWZhdWx0LCB7IHRhcmdldDogJ3dpbmRvdycsIG9uUmVzaXplOiB0aGlzLmhhbmRsZVJlc2l6ZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgcmVmOiAnc2hhZG93JyxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzaGFkb3dTdHlsZXMpLFxuICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgIHJvd3M6IHRoaXMucHJvcHMucm93cyxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgIH0sIHByb3BzKSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgcmVmOiAnaW5wdXQnLFxuICAgICAgICAgIHJvd3M6IHRoaXMucHJvcHMucm93cyxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyh0ZXh0YXJlYVN0eWxlcyksXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlXG4gICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEVuaGFuY2VkVGV4dGFyZWE7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5FbmhhbmNlZFRleHRhcmVhLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm93czogMVxufTtcbkVuaGFuY2VkVGV4dGFyZWEuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkVuaGFuY2VkVGV4dGFyZWEucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkhlaWdodENoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICByb3dzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgcm93c01heDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNoYWRvd1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRleHRhcmVhU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHZhbHVlTGluazogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuaGFuY2VkVGV4dGFyZWE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMpIHtcbiAgdmFyIGhpbnRDb2xvciA9IHByb3BzLm11aVRoZW1lLnRleHRGaWVsZC5oaW50Q29sb3IsXG4gICAgICBzaG93ID0gcHJvcHMuc2hvdztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiBzaG93ID8gMSA6IDAsXG4gICAgICBjb2xvcjogaGludENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJvdHRvbTogMTJcbiAgICB9XG4gIH07XG59XG5cbnZhciBUZXh0RmllbGRIaW50ID0gZnVuY3Rpb24gVGV4dEZpZWxkSGludChwcm9wcykge1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IHByb3BzLm11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdGV4dCA9IHByb3BzLnRleHQ7XG5cblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHByb3BzKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICB0ZXh0XG4gICk7XG59O1xuXG5UZXh0RmllbGRIaW50LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGhpbnQgdGV4dCBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICovXG4gIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCB0ZXh0IGRpc3BsYXllZC5cbiAgICovXG4gIHRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufSA6IHt9O1xuXG5UZXh0RmllbGRIaW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkSGludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkSGludC5qc1xuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcykge1xuICB2YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgdG9wOiAzOCxcbiAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgIHpJbmRleDogMSwgLy8gTmVlZGVkIHRvIGRpc3BsYXkgbGFiZWwgYWJvdmUgQ2hyb21lJ3MgYXV0b2NvbXBsZXRlIGZpZWxkIGJhY2tncm91bmRcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGUoMCwgMCknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnXG4gIH07XG5cbiAgdmFyIHNocmlua1N0eWxlcyA9IHByb3BzLnNocmluayA/ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC43NSkgdHJhbnNsYXRlKDAsIC0yOHB4KScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sIHByb3BzLnNocmlua1N0eWxlKSA6IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoZGVmYXVsdFN0eWxlcywgcHJvcHMuc3R5bGUsIHNocmlua1N0eWxlcylcbiAgfTtcbn1cblxudmFyIFRleHRGaWVsZExhYmVsID0gZnVuY3Rpb24gVGV4dEZpZWxkTGFiZWwocHJvcHMpIHtcbiAgdmFyIG11aVRoZW1lID0gcHJvcHMubXVpVGhlbWUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgaHRtbEZvciA9IHByb3BzLmh0bWxGb3IsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljaztcbiAgdmFyIHByZXBhcmVTdHlsZXMgPSBtdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZXMocHJvcHMpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnbGFiZWwnLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnJvb3QpLFxuICAgICAgaHRtbEZvcjogaHRtbEZvcixcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICB9LFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG5UZXh0RmllbGRMYWJlbC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgY29udGVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGxhYmVsIGlmIHNldCB0byB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCB0aGlzIGxhYmVsIHNob3VsZCByZWZlciB0by5cbiAgICovXG4gIGh0bWxGb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIHdoZW4gdGhlIGxhYmVsIGlzIHNlbGVjdGVkIHZpYSBhIHRvdWNoIHRhcC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgdGV4dCBmaWVsZCBsYWJlbC5cbiAgICovXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGZsb2F0aW5nIGxhYmVsIHNob3VsZCBzaHJpbmsuXG4gICAqL1xuICBzaHJpbms6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQgd2hlbiBzaHJ1bmsuXG4gICAqL1xuICBzaHJpbmtTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cblRleHRGaWVsZExhYmVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBzaHJpbms6IGZhbHNlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0RmllbGRMYWJlbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDI2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSB3aGVuIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZFN0eWxlOiB7fSxcbiAgZXJyb3I6IGZhbHNlLFxuICBlcnJvclN0eWxlOiB7fSxcbiAgZm9jdXM6IGZhbHNlLFxuICBmb2N1c1N0eWxlOiB7fSxcbiAgc3R5bGU6IHt9XG59O1xuXG52YXIgVGV4dEZpZWxkVW5kZXJsaW5lID0gZnVuY3Rpb24gVGV4dEZpZWxkVW5kZXJsaW5lKHByb3BzKSB7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRTdHlsZSA9IHByb3BzLmRpc2FibGVkU3R5bGUsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3JTdHlsZSA9IHByb3BzLmVycm9yU3R5bGUsXG4gICAgICBmb2N1cyA9IHByb3BzLmZvY3VzLFxuICAgICAgZm9jdXNTdHlsZSA9IHByb3BzLmZvY3VzU3R5bGUsXG4gICAgICBtdWlUaGVtZSA9IHByb3BzLm11aVRoZW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIGVycm9yU3R5bGVDb2xvciA9IGVycm9yU3R5bGUuY29sb3I7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIF9tdWlUaGVtZSR0ZXh0RmllbGQgPSBtdWlUaGVtZS50ZXh0RmllbGQsXG4gICAgICBib3JkZXJDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX211aVRoZW1lJHRleHRGaWVsZC5lcnJvckNvbG9yLFxuICAgICAgZm9jdXNDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZm9jdXNDb2xvcjtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZScsXG4gICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXG4gICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogMSxcbiAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgIGJvdHRvbTogOCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJyxcbiAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAyLFxuICAgICAgYm9yZGVyQ29sb3I6IGRpc2FibGVkVGV4dENvbG9yXG4gICAgfSxcbiAgICBmb2N1czoge1xuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJCb3R0b21XaWR0aDogMixcbiAgICAgIGJvcmRlckNvbG9yOiBmb2N1c0NvbG9yLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBib3JkZXJDb2xvcjogZXJyb3JTdHlsZUNvbG9yID8gZXJyb3JTdHlsZUNvbG9yIDogZXJyb3JDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgdmFyIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmZvY3VzLCBmb2N1c1N0eWxlKTtcblxuICBpZiAoZGlzYWJsZWQpIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdW5kZXJsaW5lLCBzdHlsZXMuZGlzYWJsZWQsIGRpc2FibGVkU3R5bGUpO1xuICBpZiAoZm9jdXMpIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGZvY3VzZWRVbmRlcmxpbmUsIHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyB9KTtcbiAgaWYgKGVycm9yKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCBzdHlsZXMuZXJyb3IpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyh1bmRlcmxpbmUpIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhmb2N1c2VkVW5kZXJsaW5lKSB9KVxuICApO1xufTtcblxuVGV4dEZpZWxkVW5kZXJsaW5lLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVGV4dEZpZWxkVW5kZXJsaW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkVW5kZXJsaW5lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRVbmRlcmxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9