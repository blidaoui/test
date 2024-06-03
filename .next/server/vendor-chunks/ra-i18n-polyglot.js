"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ra-i18n-polyglot";
exports.ids = ["vendor-chunks/ra-i18n-polyglot"];
exports.modules = {

/***/ "(ssr)/./node_modules/ra-i18n-polyglot/dist/cjs/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ra-i18n-polyglot/dist/cjs/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar node_polyglot_1 = __importDefault(__webpack_require__(/*! node-polyglot */ \"(ssr)/./node_modules/node-polyglot/index.js\"));\n/**\n * Build a polyglot-based i18nProvider based on a function returning the messages for a locale\n *\n * @example\n *\n * import { Admin, Resource, polyglotI18nProvider } from 'react-admin';\n * import englishMessages from 'ra-language-english';\n * import frenchMessages from 'ra-language-french';\n *\n * const messages = {\n *     fr: frenchMessages,\n *     en: englishMessages,\n * };\n * const i18nProvider = polyglotI18nProvider(\n *     locale => messages[locale],\n *     'en',\n *     [{ locale: 'en', name: 'English' }, { locale: 'fr', name: 'Français' }]\n * )\n */\nexports[\"default\"] = (function (getMessages, initialLocale, availableLocales, polyglotOptions) {\n    if (initialLocale === void 0) { initialLocale = 'en'; }\n    if (availableLocales === void 0) { availableLocales = [{ locale: 'en', name: 'English' }]; }\n    if (polyglotOptions === void 0) { polyglotOptions = {}; }\n    var locale = initialLocale;\n    var messages = getMessages(initialLocale);\n    if (messages instanceof Promise) {\n        throw new Error(\"The i18nProvider returned a Promise for the messages of the default locale (\".concat(initialLocale, \"). Please update your i18nProvider to return the messages of the default locale in a synchronous way.\"));\n    }\n    var availableLocalesFinal, polyglotOptionsFinal;\n    if (Array.isArray(availableLocales)) {\n        // third argument is an array of locales\n        availableLocalesFinal = availableLocales;\n        polyglotOptionsFinal = polyglotOptions;\n    }\n    else {\n        // third argument is the polyglotOptions\n        availableLocalesFinal = [{ locale: 'en', name: 'English' }];\n        polyglotOptionsFinal = availableLocales;\n    }\n    var polyglot = new node_polyglot_1.default(__assign({ locale: locale, phrases: __assign({ '': '' }, messages) }, polyglotOptionsFinal));\n    var translate = polyglot.t.bind(polyglot);\n    return {\n        translate: function (key, options) {\n            if (options === void 0) { options = {}; }\n            return translate(key, options);\n        },\n        changeLocale: function (newLocale) {\n            // We systematically return a Promise for the messages because\n            // getMessages may return a Promise\n            return Promise.resolve(getMessages(newLocale)).then(function (messages) {\n                locale = newLocale;\n                var newPolyglot = new node_polyglot_1.default(__assign({ locale: newLocale, phrases: __assign({ '': '' }, messages) }, polyglotOptions));\n                translate = newPolyglot.t.bind(newPolyglot);\n            });\n        },\n        getLocale: function () { return locale; },\n        getLocales: function () { return availableLocalesFinal; },\n    };\n});\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmEtaTE4bi1wb2x5Z2xvdC9kaXN0L2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0NBQXNDLG1CQUFPLENBQUMsa0VBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0NBQXdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQkFBK0IsSUFBSSxnQ0FBZ0M7QUFDN0U7QUFDQTtBQUNBLGtCQUFlO0FBQ2Ysb0NBQW9DO0FBQ3BDLHVDQUF1QyxzQkFBc0IsK0JBQStCO0FBQzVGLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQkFBK0I7QUFDbEU7QUFDQTtBQUNBLDBEQUEwRCxvQ0FBb0MsUUFBUSxhQUFhO0FBQ25IO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLHVDQUF1QyxRQUFRLGFBQWE7QUFDckk7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULGlDQUFpQyxnQkFBZ0I7QUFDakQsa0NBQWtDLCtCQUErQjtBQUNqRTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvcmEtaTE4bi1wb2x5Z2xvdC9kaXN0L2Nqcy9pbmRleC5qcz9kNzk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBub2RlX3BvbHlnbG90XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5vZGUtcG9seWdsb3RcIikpO1xuLyoqXG4gKiBCdWlsZCBhIHBvbHlnbG90LWJhc2VkIGkxOG5Qcm92aWRlciBiYXNlZCBvbiBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgbWVzc2FnZXMgZm9yIGEgbG9jYWxlXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQgeyBBZG1pbiwgUmVzb3VyY2UsIHBvbHlnbG90STE4blByb3ZpZGVyIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xuICogaW1wb3J0IGVuZ2xpc2hNZXNzYWdlcyBmcm9tICdyYS1sYW5ndWFnZS1lbmdsaXNoJztcbiAqIGltcG9ydCBmcmVuY2hNZXNzYWdlcyBmcm9tICdyYS1sYW5ndWFnZS1mcmVuY2gnO1xuICpcbiAqIGNvbnN0IG1lc3NhZ2VzID0ge1xuICogICAgIGZyOiBmcmVuY2hNZXNzYWdlcyxcbiAqICAgICBlbjogZW5nbGlzaE1lc3NhZ2VzLFxuICogfTtcbiAqIGNvbnN0IGkxOG5Qcm92aWRlciA9IHBvbHlnbG90STE4blByb3ZpZGVyKFxuICogICAgIGxvY2FsZSA9PiBtZXNzYWdlc1tsb2NhbGVdLFxuICogICAgICdlbicsXG4gKiAgICAgW3sgbG9jYWxlOiAnZW4nLCBuYW1lOiAnRW5nbGlzaCcgfSwgeyBsb2NhbGU6ICdmcicsIG5hbWU6ICdGcmFuw6dhaXMnIH1dXG4gKiApXG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoZ2V0TWVzc2FnZXMsIGluaXRpYWxMb2NhbGUsIGF2YWlsYWJsZUxvY2FsZXMsIHBvbHlnbG90T3B0aW9ucykge1xuICAgIGlmIChpbml0aWFsTG9jYWxlID09PSB2b2lkIDApIHsgaW5pdGlhbExvY2FsZSA9ICdlbic7IH1cbiAgICBpZiAoYXZhaWxhYmxlTG9jYWxlcyA9PT0gdm9pZCAwKSB7IGF2YWlsYWJsZUxvY2FsZXMgPSBbeyBsb2NhbGU6ICdlbicsIG5hbWU6ICdFbmdsaXNoJyB9XTsgfVxuICAgIGlmIChwb2x5Z2xvdE9wdGlvbnMgPT09IHZvaWQgMCkgeyBwb2x5Z2xvdE9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBsb2NhbGUgPSBpbml0aWFsTG9jYWxlO1xuICAgIHZhciBtZXNzYWdlcyA9IGdldE1lc3NhZ2VzKGluaXRpYWxMb2NhbGUpO1xuICAgIGlmIChtZXNzYWdlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGkxOG5Qcm92aWRlciByZXR1cm5lZCBhIFByb21pc2UgZm9yIHRoZSBtZXNzYWdlcyBvZiB0aGUgZGVmYXVsdCBsb2NhbGUgKFwiLmNvbmNhdChpbml0aWFsTG9jYWxlLCBcIikuIFBsZWFzZSB1cGRhdGUgeW91ciBpMThuUHJvdmlkZXIgdG8gcmV0dXJuIHRoZSBtZXNzYWdlcyBvZiB0aGUgZGVmYXVsdCBsb2NhbGUgaW4gYSBzeW5jaHJvbm91cyB3YXkuXCIpKTtcbiAgICB9XG4gICAgdmFyIGF2YWlsYWJsZUxvY2FsZXNGaW5hbCwgcG9seWdsb3RPcHRpb25zRmluYWw7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXZhaWxhYmxlTG9jYWxlcykpIHtcbiAgICAgICAgLy8gdGhpcmQgYXJndW1lbnQgaXMgYW4gYXJyYXkgb2YgbG9jYWxlc1xuICAgICAgICBhdmFpbGFibGVMb2NhbGVzRmluYWwgPSBhdmFpbGFibGVMb2NhbGVzO1xuICAgICAgICBwb2x5Z2xvdE9wdGlvbnNGaW5hbCA9IHBvbHlnbG90T3B0aW9ucztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHRoaXJkIGFyZ3VtZW50IGlzIHRoZSBwb2x5Z2xvdE9wdGlvbnNcbiAgICAgICAgYXZhaWxhYmxlTG9jYWxlc0ZpbmFsID0gW3sgbG9jYWxlOiAnZW4nLCBuYW1lOiAnRW5nbGlzaCcgfV07XG4gICAgICAgIHBvbHlnbG90T3B0aW9uc0ZpbmFsID0gYXZhaWxhYmxlTG9jYWxlcztcbiAgICB9XG4gICAgdmFyIHBvbHlnbG90ID0gbmV3IG5vZGVfcG9seWdsb3RfMS5kZWZhdWx0KF9fYXNzaWduKHsgbG9jYWxlOiBsb2NhbGUsIHBocmFzZXM6IF9fYXNzaWduKHsgJyc6ICcnIH0sIG1lc3NhZ2VzKSB9LCBwb2x5Z2xvdE9wdGlvbnNGaW5hbCkpO1xuICAgIHZhciB0cmFuc2xhdGUgPSBwb2x5Z2xvdC50LmJpbmQocG9seWdsb3QpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zbGF0ZTogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlTG9jYWxlOiBmdW5jdGlvbiAobmV3TG9jYWxlKSB7XG4gICAgICAgICAgICAvLyBXZSBzeXN0ZW1hdGljYWxseSByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgbWVzc2FnZXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gZ2V0TWVzc2FnZXMgbWF5IHJldHVybiBhIFByb21pc2VcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0TWVzc2FnZXMobmV3TG9jYWxlKSkudGhlbihmdW5jdGlvbiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBuZXdMb2NhbGU7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BvbHlnbG90ID0gbmV3IG5vZGVfcG9seWdsb3RfMS5kZWZhdWx0KF9fYXNzaWduKHsgbG9jYWxlOiBuZXdMb2NhbGUsIHBocmFzZXM6IF9fYXNzaWduKHsgJyc6ICcnIH0sIG1lc3NhZ2VzKSB9LCBwb2x5Z2xvdE9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUgPSBuZXdQb2x5Z2xvdC50LmJpbmQobmV3UG9seWdsb3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldExvY2FsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbG9jYWxlOyB9LFxuICAgICAgICBnZXRMb2NhbGVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhdmFpbGFibGVMb2NhbGVzRmluYWw7IH0sXG4gICAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ra-i18n-polyglot/dist/cjs/index.js\n");

/***/ })

};
;