(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["adonis"] = factory(require("react"));
	else
		root["adonis"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_33__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _exports = __webpack_require__(1);

	Object.keys(_exports).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _exports[key];
	    }
	  });
	});

	var _exports2 = _interopRequireDefault(_exports);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _exports2.default)({
	  noInjection: ("true"),
	  noObjectStyles: (undefined)
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.preRenderCSS = exports.withTheme = exports.ThemeProvider = exports.css = exports.StyleSheet = exports.StyleSheetServer = undefined;

	var _adonis = __webpack_require__(2);

	var _adonis2 = _interopRequireDefault(_adonis);

	var _themeProvider = __webpack_require__(38);

	var _themeProvider2 = _interopRequireDefault(_themeProvider);

	var _withTheme = __webpack_require__(39);

	var _withTheme2 = _interopRequireDefault(_withTheme);

	var _prerenderCss = __webpack_require__(40);

	var _prerenderCss2 = _interopRequireDefault(_prerenderCss);

	var _globals = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _adonis2.default;
	exports.StyleSheetServer = _globals.StyleSheetServer;
	exports.StyleSheet = _globals.StyleSheet;
	exports.css = _globals.css;
	exports.ThemeProvider = _themeProvider2.default;
	exports.withTheme = _withTheme2.default;
	exports.preRenderCSS = _prerenderCss2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _globals = __webpack_require__(3);

	var _domElements = __webpack_require__(31);

	var _domElements2 = _interopRequireDefault(_domElements);

	var _adonisComponent = __webpack_require__(32);

	var _baseStyles = __webpack_require__(37);

	var _baseStyles2 = _interopRequireDefault(_baseStyles);

	var _utils = __webpack_require__(35);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function () {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  options = _utils2.default.defaults(options, {
	    noInjection: false,
	    noObjectStyles: false
	  });

	  var adonis = function adonis(base) {
	    if (base instanceof _baseStyles2.default) {
	      var _ret = function () {
	        var factory = {};
	        _domElements2.default.forEach(function (tagName) {
	          factory[tagName] = function (styles, variations) {
	            return (0, _adonisComponent.create)(adonis, tagName, styles, variations, base);
	          };
	        });
	        return {
	          v: factory
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    return function (styles, variations) {
	      return (0, _adonisComponent.create)(adonis, base, styles, variations);
	    };
	  };

	  _domElements2.default.forEach(function (tagName) {
	    adonis[tagName] = function (styles, variations) {
	      return (0, _adonisComponent.create)(adonis, tagName, styles, variations);
	    };
	  });

	  adonis.css = function (styles, variations) {
	    return new _baseStyles2.default(styles, variations);
	  };

	  adonis.enablePreRenderInjection = function (theme) {
	    adonis.preRenderInjection = true;
	    adonis.preRenderTheme = theme;
	  };

	  adonis.disablePreRenderInjection = function () {
	    adonis.preRenderInjection = true;
	  };

	  adonis.disableInjection = function () {
	    _globals.StyleSheetTestUtils.suppressStyleInjection();
	  };

	  if (options.noInjection && !options.noObjectStyles) {
	    adonis.disableInjection();
	  }

	  adonis.preRenderTheme = null;
	  adonis.preRenderInjection = false;
	  return adonis;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StyleSheetTestUtils = exports.StyleSheetServer = exports.css = exports.StyleSheet = undefined;

	var _noImportant = __webpack_require__(4);

	var _immediateChild = __webpack_require__(30);

	var _immediateChild2 = _interopRequireDefault(_immediateChild);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ExtendedStyleSheet = _noImportant.StyleSheet.extend([_immediateChild2.default]);

	// Extensions
	var StyleSheet = ExtendedStyleSheet.StyleSheet,
	    css = ExtendedStyleSheet.css,
	    StyleSheetServer = ExtendedStyleSheet.StyleSheetServer,
	    StyleSheetTestUtils = ExtendedStyleSheet.StyleSheetTestUtils;
	exports.StyleSheet = StyleSheet;
	exports.css = css;
	exports.StyleSheetServer = StyleSheetServer;
	exports.StyleSheetTestUtils = StyleSheetTestUtils;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Module with the same interface as the core aphrodite module,
	// except that styles injected do not automatically have !important
	// appended to them.
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _generate = __webpack_require__(6);

	var _exports2 = __webpack_require__(26);

	var _exports3 = _interopRequireDefault(_exports2);

	var useImportant = false; // Don't add !important to style definitions
	exports['default'] = (0, _exports3['default'])(useImportant, _generate.defaultSelectorHandlers);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _inlineStylePrefixerStatic = __webpack_require__(7);

	var _inlineStylePrefixerStatic2 = _interopRequireDefault(_inlineStylePrefixerStatic);

	var _util = __webpack_require__(25);

	/**
	 * `selectorHandlers` are functions which handle special selectors which act
	 * differently than normal style definitions. These functions look at the
	 * current selector and can generate CSS for the styles in their subtree by
	 * calling the callback with a new selector.
	 *
	 * For example, when generating styles with a base selector of '.foo' and the
	 * following styles object:
	 *
	 *   {
	 *     ':nth-child(2n)': {
	 *       ':hover': {
	 *         color: 'red'
	 *       }
	 *     }
	 *   }
	 *
	 * when we reach the ':hover' style, we would call our selector handlers like
	 *
	 *   handler(':hover', '.foo:nth-child(2n)', callback)
	 *
	 * Since our `pseudoSelectors` handles ':hover' styles, that handler would call
	 * the callback like
	 *
	 *   callback('.foo:nth-child(2n):hover')
	 *
	 * to generate its subtree `{ color: 'red' }` styles with a
	 * '.foo:nth-child(2n):hover' selector. The callback would return CSS like
	 *
	 *   '.foo:nth-child(2n):hover{color:red !important;}'
	 *
	 * and the handler would then return that resulting CSS.
	 *
	 * `defaultSelectorHandlers` is the list of default handlers used in a call to
	 * `generateCSS`.
	 *
	 * @name SelectorHandler
	 * @function
	 * @param {string} selector: The currently inspected selector. ':hover' in the
	 *     example above.
	 * @param {string} baseSelector: The selector of the parent styles.
	 *     '.foo:nth-child(2n)' in the example above.
	 * @param {function} generateSubtreeStyles: A function which can be called to
	 *     generate CSS for the subtree of styles corresponding to the selector.
	 *     Accepts a new baseSelector to use for generating those styles.
	 * @returns {?string} The generated CSS for this selector, or null if we don't
	 *     handle this selector.
	 */
	var defaultSelectorHandlers = [
	// Handle pseudo-selectors, like :hover and :nth-child(3n)
	function pseudoSelectors(selector, baseSelector, generateSubtreeStyles) {
	    if (selector[0] !== ":") {
	        return null;
	    }
	    return generateSubtreeStyles(baseSelector + selector);
	},

	// Handle media queries (or font-faces)
	function mediaQueries(selector, baseSelector, generateSubtreeStyles) {
	    if (selector[0] !== "@") {
	        return null;
	    }
	    // Generate the styles normally, and then wrap them in the media query.
	    var generated = generateSubtreeStyles(baseSelector);
	    return selector + '{' + generated + '}';
	}];

	exports.defaultSelectorHandlers = defaultSelectorHandlers;
	/**
	 * Generate CSS for a selector and some styles.
	 *
	 * This function handles the media queries, pseudo selectors, and descendant
	 * styles that can be used in aphrodite styles.
	 *
	 * @param {string} selector: A base CSS selector for the styles to be generated
	 *     with.
	 * @param {Object} styleTypes: A list of properties of the return type of
	 *     StyleSheet.create, e.g. [styles.red, styles.blue].
	 * @param {Array.<SelectorHandler>} selectorHandlers: A list of selector
	 *     handlers to use for handling special selectors. See
	 *     `defaultSelectorHandlers`.
	 * @param stringHandlers: See `generateCSSRuleset`
	 * @param useImportant: See `generateCSSRuleset`
	 *
	 * To actually generate the CSS special-construct-less styles are passed to
	 * `generateCSSRuleset`.
	 *
	 * For instance, a call to
	 *
	 *     generateCSS(".foo", {
	 *       color: "red",
	 *       "@media screen": {
	 *         height: 20,
	 *         ":hover": {
	 *           backgroundColor: "black"
	 *         }
	 *       },
	 *       ":active": {
	 *         fontWeight: "bold",
	 *         ">>bar": {
	 *           _names: { "foo_bar": true },
	 *           height: 10,
	 *         }
	 *       }
	 *     });
	 *
	 * with the default `selectorHandlers` will make 5 calls to
	 * `generateCSSRuleset`:
	 *
	 *     generateCSSRuleset(".foo", { color: "red" }, ...)
	 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
	 *     generateCSSRuleset(".foo:active .foo_bar", { height: 10 }, ...)
	 *     // These 2 will be wrapped in @media screen {}
	 *     generateCSSRuleset(".foo", { height: 20 }, ...)
	 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
	 */
	var generateCSS = function generateCSS(selector, styleTypes) {
	    var selectorHandlers = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	    var stringHandlers = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	    var useImportant = arguments.length <= 4 || arguments[4] === undefined ? true : arguments[4];

	    var merged = styleTypes.reduce(_util.recursiveMerge);

	    var plainDeclarations = {};
	    var generatedStyles = "";

	    Object.keys(merged).forEach(function (key) {
	        // For each key, see if one of the selector handlers will handle these
	        // styles.
	        var foundHandler = selectorHandlers.some(function (handler) {
	            var result = handler(key, selector, function (newSelector) {
	                return generateCSS(newSelector, [merged[key]], selectorHandlers, stringHandlers, useImportant);
	            });
	            if (result != null) {
	                // If the handler returned something, add it to the generated
	                // CSS and stop looking for another handler.
	                generatedStyles += result;
	                return true;
	            }
	        });
	        // If none of the handlers handled it, add it to the list of plain
	        // style declarations.
	        if (!foundHandler) {
	            plainDeclarations[key] = merged[key];
	        }
	    });

	    return generateCSSRuleset(selector, plainDeclarations, stringHandlers, useImportant, selectorHandlers) + generatedStyles;
	};

	exports.generateCSS = generateCSS;
	/**
	 * Helper method of generateCSSRuleset to facilitate custom handling of certain
	 * CSS properties. Used for e.g. font families.
	 *
	 * See generateCSSRuleset for usage and documentation of paramater types.
	 */
	var runStringHandlers = function runStringHandlers(declarations, stringHandlers, selectorHandlers) {
	    var result = {};

	    Object.keys(declarations).forEach(function (key) {
	        // If a handler exists for this particular key, let it interpret
	        // that value first before continuing
	        if (stringHandlers && stringHandlers.hasOwnProperty(key)) {
	            // TODO(emily): Pass in a callback which generates CSS, similar to
	            // how our selector handlers work, instead of passing in
	            // `selectorHandlers` and have them make calls to `generateCSS`
	            // themselves. Right now, this is impractical because our string
	            // handlers are very specialized and do complex things.
	            result[key] = stringHandlers[key](declarations[key], selectorHandlers);
	        } else {
	            result[key] = declarations[key];
	        }
	    });

	    return result;
	};

	/**
	 * Generate a CSS ruleset with the selector and containing the declarations.
	 *
	 * This function assumes that the given declarations don't contain any special
	 * children (such as media queries, pseudo-selectors, or descendant styles).
	 *
	 * Note that this method does not deal with nesting used for e.g.
	 * psuedo-selectors or media queries. That responsibility is left to  the
	 * `generateCSS` function.
	 *
	 * @param {string} selector: the selector associated with the ruleset
	 * @param {Object} declarations: a map from camelCased CSS property name to CSS
	 *     property value.
	 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
	 *     property name to a function which will map the given value to the value
	 *     that is output.
	 * @param {bool} useImportant: A boolean saying whether to append "!important"
	 *     to each of the CSS declarations.
	 * @returns {string} A string of raw CSS.
	 *
	 * Examples:
	 *
	 *    generateCSSRuleset(".blah", { color: "red" })
	 *    -> ".blah{color: red !important;}"
	 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
	 *    -> ".blah{color: red}"
	 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
	 *    -> ".blah{color: RED}"
	 *    generateCSSRuleset(".blah:hover", { color: "red" })
	 *    -> ".blah:hover{color: red}"
	 */
	var generateCSSRuleset = function generateCSSRuleset(selector, declarations, stringHandlers, useImportant, selectorHandlers) {
	    var handledDeclarations = runStringHandlers(declarations, stringHandlers, selectorHandlers);

	    var prefixedDeclarations = (0, _inlineStylePrefixerStatic2['default'])(handledDeclarations);

	    var prefixedRules = (0, _util.flatten)((0, _util.objectToPairs)(prefixedDeclarations).map(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var key = _ref2[0];
	        var value = _ref2[1];

	        if (Array.isArray(value)) {
	            var _ret = (function () {
	                // inline-style-prefix-all returns an array when there should be
	                // multiple rules, we will flatten to single rules

	                var prefixedValues = [];
	                var unprefixedValues = [];

	                value.forEach(function (v) {
	                    if (v.indexOf('-') === 0) {
	                        prefixedValues.push(v);
	                    } else {
	                        unprefixedValues.push(v);
	                    }
	                });

	                prefixedValues.sort();
	                unprefixedValues.sort();

	                return {
	                    v: prefixedValues.concat(unprefixedValues).map(function (v) {
	                        return [key, v];
	                    })
	                };
	            })();

	            if (typeof _ret === 'object') return _ret.v;
	        }
	        return [[key, value]];
	    }));

	    var rules = prefixedRules.map(function (_ref3) {
	        var _ref32 = _slicedToArray(_ref3, 2);

	        var key = _ref32[0];
	        var value = _ref32[1];

	        var stringValue = (0, _util.stringifyValue)(key, value);
	        var ret = (0, _util.kebabifyStyleName)(key) + ':' + stringValue + ';';
	        return useImportant === false ? ret : (0, _util.importantify)(ret);
	    }).join("");

	    if (rules) {
	        return selector + '{' + rules + '}';
	    } else {
	        return "";
	    }
	};
	exports.generateCSSRuleset = generateCSSRuleset;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8)


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;

	var _prefixProps = __webpack_require__(9);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _capitalizeString = __webpack_require__(10);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _sortPrefixedStyle = __webpack_require__(11);

	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

	var _position = __webpack_require__(13);

	var _position2 = _interopRequireDefault(_position);

	var _calc = __webpack_require__(14);

	var _calc2 = _interopRequireDefault(_calc);

	var _cursor = __webpack_require__(17);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _flex = __webpack_require__(18);

	var _flex2 = _interopRequireDefault(_flex);

	var _sizing = __webpack_require__(19);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _gradient = __webpack_require__(20);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _transition = __webpack_require__(21);

	var _transition2 = _interopRequireDefault(_transition);

	var _flexboxIE = __webpack_require__(23);

	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

	var _flexboxOld = __webpack_require__(24);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// special flexbox specifications


	var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });

	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });

	  return (0, _sortPrefixedStyle2.default)(styles);
	}

	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings

	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortPrefixedStyle;

	var _isPrefixedProperty = __webpack_require__(12);

	var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function sortPrefixedStyle(style) {
	  return Object.keys(style).sort(function (left, right) {
	    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
	      return -1;
	    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
	      return 1;
	    }
	    return 0;
	  }).reduce(function (sortedStyle, prop) {
	    sortedStyle[prop] = style[prop];
	    return sortedStyle;
	  }, {});
	}
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (property) {
	  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	};

	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return { position: ['-webkit-sticky', 'sticky'] };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;

	var _joinPrefixedValue = __webpack_require__(15);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(16);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// returns a style object with a single concated prefixed value string

	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;

	var _joinPrefixedValue = __webpack_require__(15);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;

	var _joinPrefixedValue = __webpack_require__(15);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _joinPrefixedValue = __webpack_require__(15);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(16);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;

	var _hyphenateStyleName = __webpack_require__(22);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _capitalizeString = __webpack_require__(10);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _isPrefixedValue = __webpack_require__(16);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	var _prefixProps = __webpack_require__(9);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	// {K1: V1, K2: V2, ...} -> [[K1, V1], [K2, V2]]
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var objectToPairs = function objectToPairs(obj) {
	    return Object.keys(obj).map(function (key) {
	        return [key, obj[key]];
	    });
	};

	exports.objectToPairs = objectToPairs;
	// [[K1, V1], [K2, V2]] -> {K1: V1, K2: V2, ...}
	var pairsToObject = function pairsToObject(pairs) {
	    var result = {};
	    pairs.forEach(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 2);

	        var key = _ref2[0];
	        var val = _ref2[1];

	        result[key] = val;
	    });
	    return result;
	};

	var mapObj = function mapObj(obj, fn) {
	    return pairsToObject(objectToPairs(obj).map(fn));
	};

	exports.mapObj = mapObj;
	// Flattens an array one level
	// [[A], [B, C, [D]]] -> [A, B, C, [D]]
	var flatten = function flatten(list) {
	    return list.reduce(function (memo, x) {
	        return memo.concat(x);
	    }, []);
	};

	exports.flatten = flatten;
	var flattenDeep = function flattenDeep(list) {
	    return list.reduce(function (memo, x) {
	        return memo.concat(Array.isArray(x) ? flattenDeep(x) : x);
	    }, []);
	};

	exports.flattenDeep = flattenDeep;
	var UPPERCASE_RE = /([A-Z])/g;
	var MS_RE = /^ms-/;

	var kebabify = function kebabify(string) {
	    return string.replace(UPPERCASE_RE, '-$1').toLowerCase();
	};
	var kebabifyStyleName = function kebabifyStyleName(string) {
	    return kebabify(string).replace(MS_RE, '-ms-');
	};

	exports.kebabifyStyleName = kebabifyStyleName;
	var recursiveMerge = function recursiveMerge(a, b) {
	    // TODO(jlfwong): Handle malformed input where a and b are not the same
	    // type.

	    if (typeof a !== 'object') {
	        return b;
	    }

	    var ret = _extends({}, a);

	    Object.keys(b).forEach(function (key) {
	        if (ret.hasOwnProperty(key)) {
	            ret[key] = recursiveMerge(a[key], b[key]);
	        } else {
	            ret[key] = b[key];
	        }
	    });

	    return ret;
	};

	exports.recursiveMerge = recursiveMerge;
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 * Taken from React's CSSProperty.js
	 */
	var isUnitlessNumber = {
	    animationIterationCount: true,
	    borderImageOutset: true,
	    borderImageSlice: true,
	    borderImageWidth: true,
	    boxFlex: true,
	    boxFlexGroup: true,
	    boxOrdinalGroup: true,
	    columnCount: true,
	    flex: true,
	    flexGrow: true,
	    flexPositive: true,
	    flexShrink: true,
	    flexNegative: true,
	    flexOrder: true,
	    gridRow: true,
	    gridColumn: true,
	    fontWeight: true,
	    lineClamp: true,
	    lineHeight: true,
	    opacity: true,
	    order: true,
	    orphans: true,
	    tabSize: true,
	    widows: true,
	    zIndex: true,
	    zoom: true,

	    // SVG-related properties
	    fillOpacity: true,
	    floodOpacity: true,
	    stopOpacity: true,
	    strokeDasharray: true,
	    strokeDashoffset: true,
	    strokeMiterlimit: true,
	    strokeOpacity: true,
	    strokeWidth: true
	};

	/**
	 * Taken from React's CSSProperty.js
	 *
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 * Taken from React's CSSProperty.js
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	// Taken from React's CSSProperty.js
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	    prefixes.forEach(function (prefix) {
	        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	    });
	});

	var stringifyValue = function stringifyValue(key, prop) {
	    if (typeof prop === "number") {
	        if (isUnitlessNumber[key]) {
	            return "" + prop;
	        } else {
	            return prop + "px";
	        }
	    } else {
	        return prop;
	    }
	};

	exports.stringifyValue = stringifyValue;
	/**
	 * JS Implementation of MurmurHash2
	 *
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 *
	 * @param {string} str ASCII only
	 * @return {string} Base 36 encoded hash result
	 */
	function murmurhash2_32_gc(str) {
	    var l = str.length;
	    var h = l;
	    var i = 0;
	    var k = undefined;

	    while (l >= 4) {
	        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

	        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	        k ^= k >>> 24;
	        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

	        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

	        l -= 4;
	        ++i;
	    }

	    /* eslint-disable no-fallthrough */ // forgive existing code
	    switch (l) {
	        case 3:
	            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	        case 2:
	            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	        case 1:
	            h ^= str.charCodeAt(i) & 0xff;
	            h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    }
	    /* eslint-enable no-fallthrough */

	    h ^= h >>> 13;
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    h ^= h >>> 15;

	    return (h >>> 0).toString(36);
	}

	// Hash a javascript object using JSON.stringify. This is very fast, about 3
	// microseconds on my computer for a sample object:
	// http://jsperf.com/test-hashfnv32a-hash/5
	//
	// Note that this uses JSON.stringify to stringify the objects so in order for
	// this to produce consistent hashes browsers need to have a consistent
	// ordering of objects. Ben Alpert says that Facebook depends on this, so we
	// can probably depend on this too.
	var hashObject = function hashObject(object) {
	    return murmurhash2_32_gc(JSON.stringify(object));
	};

	exports.hashObject = hashObject;
	var IMPORTANT_RE = /^([^:]+:.*?)( !important)?;$/;

	// Given a single style rule string like "a: b;", adds !important to generate
	// "a: b !important;".
	var importantify = function importantify(string) {
	    return string.replace(IMPORTANT_RE, function (_, base) {
	        return base + " !important;";
	    });
	};
	exports.importantify = importantify;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _util = __webpack_require__(25);

	var _inject = __webpack_require__(27);

	var StyleSheet = {
	    create: function create(sheetDefinition) {
	        return (0, _util.mapObj)(sheetDefinition, function (_ref) {
	            var _ref2 = _slicedToArray(_ref, 2);

	            var key = _ref2[0];
	            var val = _ref2[1];

	            return [key, {
	                // TODO(emily): Make a 'production' mode which doesn't prepend
	                // the class name here, to make the generated CSS smaller.
	                _name: key + '_' + (0, _util.hashObject)(val),
	                _definition: val
	            }];
	        });
	    },

	    rehydrate: function rehydrate() {
	        var renderedClassNames = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	        (0, _inject.addRenderedClassNames)(renderedClassNames);
	    }
	};

	/**
	 * Utilities for using Aphrodite server-side.
	 */
	var StyleSheetServer = {
	    renderStatic: function renderStatic(renderFunc) {
	        (0, _inject.reset)();
	        (0, _inject.startBuffering)();
	        var html = renderFunc();
	        var cssContent = (0, _inject.flushToString)();

	        return {
	            html: html,
	            css: {
	                content: cssContent,
	                renderedClassNames: (0, _inject.getRenderedClassNames)()
	            }
	        };
	    }
	};

	/**
	 * Utilities for using Aphrodite in tests.
	 *
	 * Not meant to be used in production.
	 */
	var StyleSheetTestUtils = {
	    /**
	     * Prevent styles from being injected into the DOM.
	     *
	     * This is useful in situations where you'd like to test rendering UI
	     * components which use Aphrodite without any of the side-effects of
	     * Aphrodite happening. Particularly useful for testing the output of
	     * components when you have no DOM, e.g. testing in Node without a fake DOM.
	     *
	     * Should be paired with a subsequent call to
	     * clearBufferAndResumeStyleInjection.
	     */
	    suppressStyleInjection: function suppressStyleInjection() {
	        (0, _inject.reset)();
	        (0, _inject.startBuffering)();
	    },

	    /**
	     * Opposite method of preventStyleInject.
	     */
	    clearBufferAndResumeStyleInjection: function clearBufferAndResumeStyleInjection() {
	        (0, _inject.reset)();
	    }
	};

	/**
	 * Generate the Aphrodite API exports, with given `selectorHandlers` and
	 * `useImportant` state.
	 */
	var makeExports = function makeExports(useImportant, selectorHandlers) {
	    return {
	        StyleSheet: _extends({}, StyleSheet, {

	            /**
	             * Returns a version of the exports of Aphrodite (i.e. an object
	             * with `css` and `StyleSheet` properties) which have some
	             * extensions included.
	             *
	             * @param {Array.<Object>} extensions: An array of extensions to
	             *     add to this instance of Aphrodite. Each object should have a
	             *     single property on it, defining which kind of extension to
	             *     add.
	             * @param {SelectorHandler} [extensions[].selectorHandler]: A
	             *     selector handler extension. See `defaultSelectorHandlers` in
	             *     generate.js.
	             *
	             * @returns {Object} An object containing the exports of the new
	             *     instance of Aphrodite.
	             */
	            extend: function extend(extensions) {
	                var extensionSelectorHandlers = extensions
	                // Pull out extensions with a selectorHandler property
	                .map(function (extension) {
	                    return extension.selectorHandler;
	                })
	                // Remove nulls (i.e. extensions without a selectorHandler
	                // property).
	                .filter(function (handler) {
	                    return handler;
	                });

	                return makeExports(useImportant, selectorHandlers.concat(extensionSelectorHandlers));
	            }
	        }),

	        StyleSheetServer: StyleSheetServer,
	        StyleSheetTestUtils: StyleSheetTestUtils,

	        css: function css() {
	            for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
	                styleDefinitions[_key] = arguments[_key];
	            }

	            return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions, selectorHandlers);
	        }
	    };
	};

	module.exports = makeExports;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _asap = __webpack_require__(28);

	var _asap2 = _interopRequireDefault(_asap);

	var _generate = __webpack_require__(6);

	var _util = __webpack_require__(25);

	// The current <style> tag we are inserting into, or null if we haven't
	// inserted anything yet. We could find this each time using
	// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
	// faster.
	var styleTag = null;

	// Inject a string of styles into a <style> tag in the head of the document. This
	// will automatically create a style tag and then continue to use it for
	// multiple injections. It will also use a style tag with the `data-aphrodite`
	// tag on it if that exists in the DOM. This could be used for e.g. reusing the
	// same style tag that server-side rendering inserts.
	var injectStyleTag = function injectStyleTag(cssContents) {
	    if (styleTag == null) {
	        // Try to find a style tag with the `data-aphrodite` attribute first.
	        styleTag = document.querySelector("style[data-aphrodite]");

	        // If that doesn't work, generate a new style tag.
	        if (styleTag == null) {
	            // Taken from
	            // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
	            var head = document.head || document.getElementsByTagName('head')[0];
	            styleTag = document.createElement('style');

	            styleTag.type = 'text/css';
	            styleTag.setAttribute("data-aphrodite", "");
	            head.appendChild(styleTag);
	        }
	    }

	    if (styleTag.styleSheet) {
	        styleTag.styleSheet.cssText += cssContents;
	    } else {
	        styleTag.appendChild(document.createTextNode(cssContents));
	    }
	};

	// Custom handlers for stringifying CSS values that have side effects
	// (such as fontFamily, which can cause @font-face rules to be injected)
	var stringHandlers = {
	    // With fontFamily we look for objects that are passed in and interpret
	    // them as @font-face rules that we need to inject. The value of fontFamily
	    // can either be a string (as normal), an object (a single font face), or
	    // an array of objects and strings.
	    fontFamily: function fontFamily(val) {
	        if (Array.isArray(val)) {
	            return val.map(fontFamily).join(",");
	        } else if (typeof val === "object") {
	            injectStyleOnce(val.src, "@font-face", [val], false);
	            return '"' + val.fontFamily + '"';
	        } else {
	            return val;
	        }
	    },

	    // With animationName we look for an object that contains keyframes and
	    // inject them as an `@keyframes` block, returning a uniquely generated
	    // name. The keyframes object should look like
	    //  animationName: {
	    //    from: {
	    //      left: 0,
	    //      top: 0,
	    //    },
	    //    '50%': {
	    //      left: 15,
	    //      top: 5,
	    //    },
	    //    to: {
	    //      left: 20,
	    //      top: 20,
	    //    }
	    //  }
	    // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
	    // to use `animationName` here. Improve that so we can call this
	    // `animation` instead of `animationName`.
	    animationName: function animationName(val, selectorHandlers) {
	        if (Array.isArray(val)) {
	            return val.map(function (v) {
	                return animationName(v, selectorHandlers);
	            }).join(",");
	        } else if (typeof val === "object") {
	            // Generate a unique name based on the hash of the object. We can't
	            // just use the hash because the name can't start with a number.
	            // TODO(emily): this probably makes debugging hard, allow a custom
	            // name?
	            var _name = 'keyframe_' + (0, _util.hashObject)(val);

	            // Since keyframes need 3 layers of nesting, we use `generateCSS` to
	            // build the inner layers and wrap it in `@keyframes` ourselves.
	            var finalVal = '@keyframes ' + _name + '{';
	            Object.keys(val).forEach(function (key) {
	                finalVal += (0, _generate.generateCSS)(key, [val[key]], selectorHandlers, stringHandlers, false);
	            });
	            finalVal += '}';

	            injectGeneratedCSSOnce(_name, finalVal);

	            return _name;
	        } else {
	            return val;
	        }
	    }
	};

	// This is a map from Aphrodite's generated class names to `true` (acting as a
	// set of class names)
	var alreadyInjected = {};

	// This is the buffer of styles which have not yet been flushed.
	var injectionBuffer = "";

	// A flag to tell if we are already buffering styles. This could happen either
	// because we scheduled a flush call already, so newly added styles will
	// already be flushed, or because we are statically buffering on the server.
	var isBuffering = false;

	var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
	    if (!alreadyInjected[key]) {
	        if (!isBuffering) {
	            // We should never be automatically buffering on the server (or any
	            // place without a document), so guard against that.
	            if (typeof document === "undefined") {
	                throw new Error("Cannot automatically buffer without a document");
	            }

	            // If we're not already buffering, schedule a call to flush the
	            // current styles.
	            isBuffering = true;
	            (0, _asap2['default'])(flushToStyleTag);
	        }

	        injectionBuffer += generatedCSS;
	        alreadyInjected[key] = true;
	    }
	};

	var injectStyleOnce = function injectStyleOnce(key, selector, definitions, useImportant, selectorHandlers) {
	    if (!alreadyInjected[key]) {
	        var generated = (0, _generate.generateCSS)(selector, definitions, selectorHandlers, stringHandlers, useImportant);

	        injectGeneratedCSSOnce(key, generated);
	    }
	};

	exports.injectStyleOnce = injectStyleOnce;
	var reset = function reset() {
	    injectionBuffer = "";
	    alreadyInjected = {};
	    isBuffering = false;
	    styleTag = null;
	};

	exports.reset = reset;
	var startBuffering = function startBuffering() {
	    if (isBuffering) {
	        throw new Error("Cannot buffer while already buffering");
	    }
	    isBuffering = true;
	};

	exports.startBuffering = startBuffering;
	var flushToString = function flushToString() {
	    isBuffering = false;
	    var ret = injectionBuffer;
	    injectionBuffer = "";
	    return ret;
	};

	exports.flushToString = flushToString;
	var flushToStyleTag = function flushToStyleTag() {
	    var cssContent = flushToString();
	    if (cssContent.length > 0) {
	        injectStyleTag(cssContent);
	    }
	};

	exports.flushToStyleTag = flushToStyleTag;
	var getRenderedClassNames = function getRenderedClassNames() {
	    return Object.keys(alreadyInjected);
	};

	exports.getRenderedClassNames = getRenderedClassNames;
	var addRenderedClassNames = function addRenderedClassNames(classNames) {
	    classNames.forEach(function (className) {
	        alreadyInjected[className] = true;
	    });
	};

	exports.addRenderedClassNames = addRenderedClassNames;
	/**
	 * Inject styles associated with the passed style definition objects, and return
	 * an associated CSS class name.
	 *
	 * @param {boolean} useImportant If true, will append !important to generated
	 *     CSS output. e.g. {color: red} -> "color: red !important".
	 * @param {(Object|Object[])[]} styleDefinitions style definition objects, or
	 *     arbitrarily nested arrays of them, as returned as properties of the
	 *     return value of StyleSheet.create().
	 */
	var injectAndGetClassName = function injectAndGetClassName(useImportant, styleDefinitions, selectorHandlers) {
	    styleDefinitions = (0, _util.flattenDeep)(styleDefinitions);

	    // Filter out falsy values from the input, to allow for
	    // `css(a, test && c)`
	    var validDefinitions = styleDefinitions.filter(function (def) {
	        return def;
	    });

	    // Break if there aren't any valid styles.
	    if (validDefinitions.length === 0) {
	        return "";
	    }

	    var className = validDefinitions.map(function (s) {
	        return s._name;
	    }).join("-o_O-");
	    injectStyleOnce(className, '.' + className, validDefinitions.map(function (d) {
	        return d._definition;
	    }), useImportant, selectorHandlers);

	    return className;
	};
	exports.injectAndGetClassName = injectAndGetClassName;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(29);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  selectorHandler: function selectorHandler(selector, baseSelector, generateSubtreeStyles) {
	    if (selector[0] !== '>') {
	      return null;
	    }
	    return generateSubtreeStyles(baseSelector + ' ' + selector + ' ');
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.create = create;

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(34);

	var _styles2 = _interopRequireDefault(_styles);

	var _stylesManager = __webpack_require__(36);

	var _stylesManager2 = _interopRequireDefault(_stylesManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseAdonisComponent = function (_Component) {
	  _inherits(BaseAdonisComponent, _Component);

	  function BaseAdonisComponent() {
	    _classCallCheck(this, BaseAdonisComponent);

	    return _possibleConstructorReturn(this, (BaseAdonisComponent.__proto__ || Object.getPrototypeOf(BaseAdonisComponent)).apply(this, arguments));
	  }

	  return BaseAdonisComponent;
	}(_react.Component);

	BaseAdonisComponent.contextTypes = {
	  theme: _react.PropTypes.object
	};

	var getTargetStyles = function getTargetStyles(target) {
	  var styles = [target._adonisStyles, target._adonisBaseStyles];

	  // Adonis target styled adonis target
	  if (target._adonisTarget && typeof target._adonisTarget !== 'string') {
	    styles = styles.concat(getTargetStyles(target._adonisTarget));
	  }

	  // Adonis target styled a react component
	  if (target.RootElement) {
	    styles = styles.concat(getTargetStyles(target.RootElement));
	  }

	  // React component extends a react component with root element
	  var proto = Object.getPrototypeOf(target);
	  if (proto) {
	    styles = styles.concat(getTargetStyles(proto));
	  }
	  return styles.filter(function (style) {
	    return !!style;
	  });
	};

	function create(adonis, target, stylesObject) {
	  var variations = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var baseStylesObject = arguments[4];

	  var isTag = typeof target === 'string';
	  var isAdonisComponent = target.prototype instanceof BaseAdonisComponent;
	  var isComponent = !isAdonisComponent && target.prototype instanceof _react.Component;

	  var styles = new _styles2.default(target, stylesObject, variations);
	  var baseStyles = baseStylesObject && new _styles2.default('baseStyles', baseStylesObject.styles, baseStylesObject.variations);

	  var targetStyles = [];
	  if (adonis.preRenderInjection) {
	    if (isComponent) {
	      if (target.RootElement) {
	        targetStyles = getTargetStyles(target);
	      } else {
	        console.log('Warning: Trying to pre-render CSS for React Component styled via adonis(Component).');
	        console.log('         Due to the way that styles are inherited in aphrodite, it\'s possible that');
	        console.log('         the rendered CSS is incomplete.');
	      }
	    } else {
	      targetStyles = getTargetStyles(target);
	    }
	  }

	  var allStyles = [baseStyles].concat(targetStyles).concat([styles]).filter(function (s) {
	    return !!s;
	  });

	  var stylesManager = new _stylesManager2.default(adonis, allStyles);
	  if (adonis.preRenderInjection) {
	    stylesManager.createStyleSheets(adonis.preRenderTheme);
	  } else {
	    stylesManager.createStyleSheetsIfPossible();
	  }

	  if (adonis.preRenderInjection) {
	    stylesManager.prepareVariations(Object.keys(variations));
	  }

	  var AdonisComponent = function (_BaseAdonisComponent) {
	    _inherits(AdonisComponent, _BaseAdonisComponent);

	    function AdonisComponent() {
	      _classCallCheck(this, AdonisComponent);

	      return _possibleConstructorReturn(this, (AdonisComponent.__proto__ || Object.getPrototypeOf(AdonisComponent)).apply(this, arguments));
	    }

	    _createClass(AdonisComponent, [{
	      key: '_cloneProps',

	      /**
	       * Returns a shallow clone of this component's props
	       * @return {Object}
	       * @private
	       */
	      value: function _cloneProps() {
	        var _this3 = this;

	        var elementProps = {};
	        Object.keys(this.props).forEach(function (prop) {
	          elementProps[prop] = _this3.props[prop];
	        });
	        return elementProps;
	      }

	      /**
	       * Returns an array containing the active variations for this component
	       * @return {String[]}
	       * @private
	       */

	    }, {
	      key: '_getActiveVariations',
	      value: function _getActiveVariations() {
	        var _this4 = this;

	        return Object.keys(variations).filter(function (variation) {
	          return !!_this4.props[variation];
	        });
	      }

	      /**
	       * Renders the component
	       * @return {React.Element|React.Component}
	       */

	    }, {
	      key: 'render',
	      value: function render() {
	        stylesManager.createStyleSheets(this.context.theme);

	        var activeVariations = this._getActiveVariations();
	        var elementProps = this._cloneProps();

	        // If an available variation is passed in as a property, we add the styles to the class and
	        // remove the prop from the props we pass to our target element
	        Object.keys(variations).forEach(function (variation) {
	          delete elementProps[variation];
	        });

	        // Apply and pass styles

	        var _stylesManager$getCla = stylesManager.getClassName(activeVariations, this.props.styles),
	            aphroStyles = _stylesManager$getCla.styles,
	            className = _stylesManager$getCla.className;

	        elementProps.className = className;
	        elementProps.styles = aphroStyles;

	        // Pass ref
	        var _props = this.props,
	            children = _props.children,
	            innerRef = _props.innerRef;

	        if (innerRef) {
	          if (isComponent || isTag) {
	            elementProps.ref = innerRef;
	          } else if (isAdonisComponent) {
	            elementProps.innerRef = innerRef;
	          }
	        }

	        // We don't want to pass invalid props to tags
	        if (isTag) {
	          delete elementProps.styles;
	          delete elementProps.innerRef;
	        }

	        return _react2.default.createElement(target, elementProps, children);
	      }
	    }]);

	    return AdonisComponent;
	  }(BaseAdonisComponent);

	  AdonisComponent.contextTypes = BaseAdonisComponent.contextTypes;
	  AdonisComponent._adonisTarget = target;
	  AdonisComponent._adonisStyles = styles;
	  AdonisComponent._adonisBaseStyles = baseStyles;

	  return AdonisComponent;
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(35);

	var _utils2 = _interopRequireDefault(_utils);

	var _globals = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Styles = function () {
	  function Styles(target, stylesObject) {
	    var variationsObject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    _classCallCheck(this, Styles);

	    this._target = target;
	    this._stylesObject = stylesObject;
	    this._variationsObject = variationsObject;
	    this._defaultStyleName = _utils2.default.generateStyleNameForTarget(target);

	    this._createCombinedStylesObject();
	  }

	  /**
	   * Creates an object containing both the default style and the variations
	   * @private
	   */


	  _createClass(Styles, [{
	    key: '_createCombinedStylesObject',
	    value: function _createCombinedStylesObject() {
	      this._combinedStyles = _defineProperty({}, this._defaultStyleName, this._stylesObject);

	      for (var prop in this._variationsObject) {
	        this._combinedStyles[prop] = this._variationsObject[prop];
	      }

	      this._needsProcessing = _utils2.default.objectHasFunctions(this._combinedStyles);
	    }

	    /**
	     * Walks through the combined object and calls every function it finds,
	     * passing the theme
	     * @param  {Object} theme
	     * @private
	     */

	  }, {
	    key: '_processStyles',
	    value: function _processStyles(theme) {
	      var processObject = function processObject(obj) {
	        var newObject = {};

	        for (var prop in obj) {
	          var value = obj[prop];
	          var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	          if (valueType === 'object') {
	            newObject[prop] = processObject(value);
	          } else if (valueType === 'function') {
	            newObject[prop] = value(theme);
	          } else {
	            newObject[prop] = value;
	          }
	        }

	        return newObject;
	      };
	      this._processedStyles = processObject(this._combinedStyles);
	    }

	    /**
	     * Injects the stylesheet after it has been processed
	     * @param  {Object} theme
	     * @private
	     */

	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(theme) {
	      if (!this._styleSheet) {
	        if (this._needsProcessing && theme) {
	          this._processStyles(theme);
	        }

	        this._styleSheet = _globals.StyleSheet.create(this._processedStyles || this._combinedStyles);
	      }
	    }

	    /**
	     * Checks if the stylesheet can be injected before the first render has been called
	     * @return {Boolean}
	     */

	  }, {
	    key: 'canInjectBeforeRender',
	    value: function canInjectBeforeRender() {
	      return !this._needsProcessing;
	    }

	    /**
	     * Returns the default style sheet
	     * @return {Object}
	     */

	  }, {
	    key: 'getDefaultStylesheet',
	    value: function getDefaultStylesheet() {
	      return this._styleSheet[this._defaultStyleName];
	    }

	    /**
	     * Returns the stylesheet for the given variation
	     * @param  {String} variation
	     * @return {Object}
	     */

	  }, {
	    key: 'getVariationStylesheet',
	    value: function getVariationStylesheet(variation) {
	      return this._styleSheet[variation];
	    }
	  }]);

	  return Styles;
	}();

	exports.default = Styles;

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Utils = {
	  /**
	   * Generates a random string
	   * @param  {Number} length = 10
	   * @return {String}
	   */
	  generateClassName: function generateClassName() {
	    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

	    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	    var className = '';
	    for (var i = 0; i < length; i++) {
	      className += chars[Math.floor(Math.random() * chars.length)];
	    }
	    return className;
	  },


	  /**
	   * Generates a name for the given target (tag name, class name or random string)
	   * @param  {Object} target
	   * @return {String}
	   */
	  generateStyleNameForTarget: function generateStyleNameForTarget(target) {
	    if (typeof target === 'string') {
	      return target;
	    } else {
	      return target.name ? target.name : Utils.generateClassName();
	    }
	  },


	  /**
	   * Checks if the given object has any functions deep inside of it
	   * @param  {Object} obj
	   * @return {Boolean}
	   */
	  objectHasFunctions: function objectHasFunctions(obj) {
	    for (var prop in obj) {
	      var value = obj[prop];
	      var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	      if (valueType === 'object') {
	        if (Utils.objectHasFunctions(value)) {
	          return true;
	        }
	      } else if (valueType === 'function') {
	        return true;
	      }
	    }
	    return false;
	  },


	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object for all destination properties that resolve to undefined. Once a
	   * property is set, additional values of the same property are ignored.
	   * @param  {Object} object
	   * @param  {Object} ...sources
	   * @return {Object}
	   */
	  defaults: function defaults(object) {
	    // Shallow clone
	    var newObject = {};
	    for (var key in object) {
	      newObject[key] = object[key];
	    }

	    // Clone sources

	    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      sources[_key - 1] = arguments[_key];
	    }

	    for (var i = 0; i < sources.length; i++) {
	      var source = sources[i];
	      for (var _key2 in source) {
	        if (typeof newObject[_key2] === 'undefined') {
	          newObject[_key2] = source[_key2];
	        }
	      }
	    }

	    return newObject;
	  },


	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object for all destination properties and their properties that resolve to
	   * undefined. Once a property is set, additional value sof the same property
	   * are ignored.
	   * @param  {Object} object
	   * @param  {Object} ...sources
	   * @return {Object}
	   */
	  deepDefaults: function deepDefaults(object) {
	    // Shallow clone
	    var newObject = {};
	    for (var key in object) {
	      newObject[key] = object[key];
	    }

	    // Clone sources

	    for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
	      sources[_key3 - 1] = arguments[_key3];
	    }

	    for (var i = 0; i < sources.length; i++) {
	      var source = sources[i];
	      for (var _key4 in source) {
	        if (Utils.isExtendable(newObject[_key4]) && Utils.isExtendable(source[_key4])) {
	          newObject[_key4] = Utils.deepDefaults(newObject[_key4], source[_key4]);
	        } else if (typeof newObject[_key4] === 'undefined') {
	          newObject[_key4] = source[_key4];
	        }
	      }
	    }

	    return newObject;
	  },


	  /**
	   * Assigns own enumerable properties of source object(s) to the destination
	   * object. Subsequent sources overwrite property assignments of previous
	   * sources.
	   * @param {Object} object
	   * @param {Object} ...sources
	   * @return {Object}
	   */
	  extend: function extend(object) {
	    // Shallow clone
	    var newObject = {};
	    for (var key in object) {
	      newObject[key] = object[key];
	    }

	    // Extend sources

	    for (var _len3 = arguments.length, sources = Array(_len3 > 1 ? _len3 - 1 : 0), _key5 = 1; _key5 < _len3; _key5++) {
	      sources[_key5 - 1] = arguments[_key5];
	    }

	    for (var i = 0; i < sources.length; i++) {
	      var source = sources[i];
	      for (var _key6 in source) {
	        newObject[_key6] = source[_key6];
	      }
	    }

	    return newObject;
	  },


	  /**
	   * Checks if this value is extendable / can have keys
	   * @param  {*}  val
	   * @return {Boolean}
	   */
	  isExtendable: function isExtendable(val) {
	    return typeof val !== 'undefined' && val !== null && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function');
	  },


	  /**
	   * JS Implementation of MurmurHash2
	   *
	   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	   * @see http://github.com/garycourt/murmurhash-js
	   * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	   * @see http://sites.google.com/site/murmurhash/
	   *
	   * @param {Object}
	   * @return {String} Base 36 encoded hash result
	   */
	  hashObject: function hashObject(object) {
	    var str = JSON.stringify(object);
	    var l = str.length;
	    var h = l;
	    var i = 0;
	    var k = void 0;

	    while (l >= 4) {
	      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

	      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	      k ^= k >>> 24;
	      k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

	      l -= 4;
	      ++i;
	    }

	    /* eslint-disable no-fallthrough */ // forgive existing code
	    switch (l) {
	      case 3:
	        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	      case 2:
	        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	      case 1:
	        h ^= str.charCodeAt(i) & 0xff;
	        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    }
	    /* eslint-enable no-fallthrough */

	    h ^= h >>> 13;
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    h ^= h >>> 15;

	    return (h >>> 0).toString(36);
	  }
	};

	exports.default = Utils;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _globals = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StylesManager = function () {
	  function StylesManager(adonis, styles) {
	    _classCallCheck(this, StylesManager);

	    this._styles = styles.filter(function (style) {
	      return !!style;
	    });

	    this._variationCombinations = {};
	  }

	  _createClass(StylesManager, [{
	    key: 'createStyleSheets',
	    value: function createStyleSheets(theme) {
	      this._styles.forEach(function (style) {
	        return style.createStyleSheet(theme);
	      });
	    }
	  }, {
	    key: 'createStyleSheetsIfPossible',
	    value: function createStyleSheetsIfPossible() {
	      this._styles.forEach(function (style) {
	        return style.canInjectBeforeRender() && style.createStyleSheet();
	      });
	    }
	  }, {
	    key: '_getPossibleCombinations',
	    value: function _getPossibleCombinations(set) {
	      return function acc(xs, set) {
	        var x = xs[0];

	        if (typeof x === 'undefined') {
	          return set;
	        }

	        for (var i = 0, l = set.length; i < l; ++i) {
	          set.push(set[i].concat(x));
	        }
	        return acc(xs.slice(1), set);
	      }(set, [[]]).slice(1);
	    }
	  }, {
	    key: 'prepareVariations',
	    value: function prepareVariations(variations) {
	      var _this = this;

	      var possibleCombinations = this._getPossibleCombinations(variations);

	      // Default
	      this.getClassName([]);

	      possibleCombinations.forEach(function (variations) {
	        variations = variations.sort();
	        _this._variationCombinations[variations.join(',')] = _this.getClassName(variations);
	      });
	    }

	    /**
	     * Returns the class name for the given variations and additional styles
	     * @param  {String[]} variations
	     * @param  {Object[]} additionalStyles
	     * @return {Object}
	     */

	  }, {
	    key: 'getClassName',
	    value: function getClassName(variations, additionalStyles) {
	      var aphroStyles = [];

	      this._styles.forEach(function (styles) {
	        if (!styles) return;

	        aphroStyles.push(styles.getDefaultStylesheet());
	        variations.sort().forEach(function (variation) {
	          aphroStyles.push(styles.getVariationStylesheet(variation));
	        });
	      });

	      if (additionalStyles) {
	        aphroStyles = aphroStyles.concat(additionalStyles);
	      }

	      return { styles: aphroStyles, className: _globals.css.apply(null, aphroStyles) };
	    }
	  }]);

	  return StylesManager;
	}();

	exports.default = StylesManager;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BaseStyles = function BaseStyles(styles) {
	  var variations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  _classCallCheck(this, BaseStyles);

	  this.styles = styles;
	  this.variations = variations;
	};

	exports.default = BaseStyles;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ThemeProvider = function (_Component) {
	  _inherits(ThemeProvider, _Component);

	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);

	    return _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).apply(this, arguments));
	  }

	  _createClass(ThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var context = {};
	      for (var prop in this.context) {
	        context[prop] = this.context;
	      }
	      context.theme = this.props.theme;
	      return context;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) {
	        return null;
	      }
	      return _react2.default.Children.only(this.props.children);
	    }
	  }]);

	  return ThemeProvider;
	}(_react.Component);

	exports.default = ThemeProvider;


	ThemeProvider.childContextTypes = {
	  theme: _react.PropTypes.object.isRequired
	};

	ThemeProvider.contextTypes = {
	  theme: _react.PropTypes.object
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(33);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	exports.default = function (Component) {
	  var ComponentWithTheme = function (_React$Component) {
	    _inherits(ComponentWithTheme, _React$Component);

	    function ComponentWithTheme() {
	      _classCallCheck(this, ComponentWithTheme);

	      return _possibleConstructorReturn(this, (ComponentWithTheme.__proto__ || Object.getPrototypeOf(ComponentWithTheme)).apply(this, arguments));
	    }

	    _createClass(ComponentWithTheme, [{
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(Component, this.props);
	      }
	    }]);

	    return ComponentWithTheme;
	  }(_react2.default.Component);

	  ComponentWithTheme.contextTypes = {
	    theme: _react2.default.PropTypes.object
	  };

	  return ComponentWithTheme;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (theme, renderFunction) {
	  if (typeof renderFunction === 'undefined') {
	    renderFunction = theme;
	    theme = null;
	  }

	  _adonis2.default.enablePreRenderInjection(theme);

	  var _StyleSheetServer$ren = _globals.StyleSheetServer.renderStatic(function () {
	    renderFunction();
	    _adonis2.default.disablePreRenderInjection();
	  }),
	      css = _StyleSheetServer$ren.css;

	  return css;
	};

	var _globals = __webpack_require__(3);

	var _adonis = __webpack_require__(2);

	var _adonis2 = _interopRequireDefault(_adonis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
/******/ ])
});
;