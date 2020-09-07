/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fisher-yates/index.js":
/*!********************************************!*\
  !*** ./node_modules/fisher-yates/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function shuffle (array, rng) {\n  rng = rng || Math.random\n\n  var result = []\n\n  for (var i = 0; i < array.length; ++i) {\n    var j = Math.floor(rng() * (i + 1))\n\n    if (j !== i) {\n      result[i] = result[j]\n    }\n\n    result[j] = array[i]\n  }\n\n  return result\n}\n\n\n//# sourceURL=webpack:///./node_modules/fisher-yates/index.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"react-dom\"));\nconst ComputerEntropySource_1 = __webpack_require__(/*! ./ComputerEntropySource */ \"./src/ComputerEntropySource.ts\");\nconst Entropy_1 = __webpack_require__(/*! ./Entropy */ \"./src/Entropy.tsx\");\nconst Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/Menu.tsx\");\nconst Phrase_1 = __webpack_require__(/*! ./Phrase */ \"./src/Phrase.tsx\");\nconst wb = __importStar(__webpack_require__(/*! ./wordbanks */ \"./src/wordbanks.ts\"));\nclass App extends React.PureComponent {\n    constructor(props) {\n        super(props);\n        this.addPhrasePart = (type) => {\n            this.setState((state) => ({\n                isGenerated: false,\n                phraseParts: state.phraseParts.concat({ key: this.state.phraseParts.length, type }),\n            }));\n        };\n        this.generatePlaintext = () => {\n            this.setState((state) => ({\n                isGenerated: true,\n                phraseParts: state.phraseParts.map((part) => (Object.assign(Object.assign({}, part), { plaintext: wb.dictionary[part.type][this.state.entropySource.getBits(wb.partTypeProps[part.type].entropyReqBits)] }))),\n            }));\n        };\n        this.reset = () => {\n            this.setState((state) => ({\n                isGenerated: false,\n                phraseParts: [],\n            }));\n        };\n        this.state = {\n            entropySource: new ComputerEntropySource_1.ComputerEntropySource(),\n            isGenerated: false,\n            phraseParts: [],\n        };\n    }\n    render() {\n        return React.createElement(\"div\", null,\n            React.createElement(Phrase_1.Phrase, { isGenerated: this.state.isGenerated, parts: this.state.phraseParts }),\n            React.createElement(Menu_1.Menu, { addPhrasePart: this.addPhrasePart, generatePlaintext: this.generatePlaintext, isGenerated: this.state.isGenerated, reset: this.reset }),\n            React.createElement(Entropy_1.Entropy, { sourceName: this.state.entropySource.name, bitsAvailable: this.state.entropySource.bitsAvailable() }));\n    }\n}\nReactDOM.render(React.createElement(App, null), document.getElementById(\"app-root\"));\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/ComputerEntropySource.ts":
/*!**************************************!*\
  !*** ./src/ComputerEntropySource.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ComputerEntropySource = void 0;\nconst BINARY_BASE = 2;\nconst MAX_BITS = 32;\nclass ComputerEntropySource {\n    constructor() {\n        this.name = \"your computer\";\n        this.bitsAvailable = () => (-1);\n        this.getBits = (qty) => {\n            if (qty > MAX_BITS) {\n                throw new Error(\"More than UInt32Array's worth of random bits is not supported\");\n            }\n            // This is wasteful with bits, but it is simple and maybe even bugfree.\n            const modulus = Math.pow(BINARY_BASE, qty);\n            const randomData = window.crypto.getRandomValues(new Uint32Array(1))[0];\n            return randomData % modulus;\n        };\n    }\n}\nexports.ComputerEntropySource = ComputerEntropySource;\n\n\n//# sourceURL=webpack:///./src/ComputerEntropySource.ts?");

/***/ }),

/***/ "./src/Entropy.tsx":
/*!*************************!*\
  !*** ./src/Entropy.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Entropy = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nclass Entropy extends react_1.default.PureComponent {\n    render() {\n        const entropyDetails = this.props.bitsAvailable > 0\n            ? react_1.default.createElement(\"span\", null,\n                \"Bits available: \",\n                this.props.bitsAvailable,\n                \".\")\n            : undefined;\n        return react_1.default.createElement(\"div\", { id: \"entropy\" },\n            \"Entropy source: \",\n            this.props.sourceName,\n            \".\",\n            entropyDetails);\n    }\n}\nexports.Entropy = Entropy;\n\n\n//# sourceURL=webpack:///./src/Entropy.tsx?");

/***/ }),

/***/ "./src/Menu.tsx":
/*!**********************!*\
  !*** ./src/Menu.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Menu = void 0;\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst wordbanks_1 = __webpack_require__(/*! ./wordbanks */ \"./src/wordbanks.ts\");\nconst menuData = {\n    [wordbanks_1.PartType.english]: {\n        name: \"simple english\",\n    },\n    [wordbanks_1.PartType.digit]: {\n        name: \"digit\",\n    },\n    [wordbanks_1.PartType.usstate]: {\n        name: \"US state abbr\",\n    },\n    [wordbanks_1.PartType.color]: {\n        name: \"color\",\n    },\n    [wordbanks_1.PartType.symbol]: {\n        name: \"symbol\",\n    },\n    [wordbanks_1.PartType.musicalnote]: {\n        name: \"musical note\",\n    },\n};\nclass Menu extends React.PureComponent {\n    render() {\n        if (this.props.isGenerated) {\n            return React.createElement(\"div\", { id: \"main-action\" },\n                React.createElement(\"button\", { type: \"button\", onClick: () => { this.props.reset(); } }, \"start over\"));\n        }\n        const menuItems = wordbanks_1.partTypeList.map((menuItem) => {\n            const lengthStr = wordbanks_1.partTypeProps[menuItem].minLength === wordbanks_1.partTypeProps[menuItem].maxLength\n                ? `${wordbanks_1.partTypeProps[menuItem].minLength}`\n                : `${wordbanks_1.partTypeProps[menuItem].minLength}-${wordbanks_1.partTypeProps[menuItem].maxLength}`;\n            return React.createElement(\"button\", { type: \"button\", key: menuItem, onClick: () => { this.props.addPhrasePart(menuItem); } },\n                React.createElement(\"span\", { className: \"callToAction\" },\n                    \"+ \",\n                    menuData[menuItem].name),\n                \" (\",\n                wordbanks_1.partTypeProps[menuItem].entropyReqBits,\n                \" bits, length \",\n                lengthStr,\n                \")\");\n        });\n        return React.createElement(\"div\", { id: \"menu\" },\n            React.createElement(\"div\", { id: \"add-components\" }, menuItems),\n            React.createElement(\"div\", { id: \"main-action\" },\n                React.createElement(\"button\", { type: \"button\", onClick: () => { this.props.generatePlaintext(); } },\n                    React.createElement(\"span\", { className: \"callToAction\" }, \"generate!\"))));\n    }\n}\nexports.Menu = Menu;\n\n\n//# sourceURL=webpack:///./src/Menu.tsx?");

/***/ }),

/***/ "./src/Phrase.tsx":
/*!************************!*\
  !*** ./src/Phrase.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Phrase = void 0;\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst pp = __importStar(__webpack_require__(/*! ./PhrasePart */ \"./src/PhrasePart.tsx\"));\nconst wb = __importStar(__webpack_require__(/*! ./wordbanks */ \"./src/wordbanks.ts\"));\nclass Phrase extends React.PureComponent {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        if (this.props.parts.length === 0) {\n            return React.createElement(\"div\", { id: \"welcome\" },\n                React.createElement(\"h1\", null, \"welcome to phrase shop\"),\n                React.createElement(\"p\", null, \"Build your memorable and secure passphrase!\"));\n        }\n        const len = this.props.parts.reduce((acc, pprops) => ({\n            max: acc.max + (pprops.plaintext === undefined\n                ? wb.partTypeProps[pprops.type].maxLength\n                : pprops.plaintext.length),\n            min: acc.min + (pprops.plaintext === undefined\n                ? wb.partTypeProps[pprops.type].minLength\n                : pprops.plaintext.length),\n        }), { max: 0, min: 0 });\n        const lengthText = len.min === len.max ? `${len.min}` : `${len.min}-${len.max}`;\n        const bitsOfEntropy = this.props.parts.reduce((acc, pprops) => (acc + wb.partTypeProps[pprops.type].entropyReqBits), 0);\n        return React.createElement(\"div\", null,\n            React.createElement(\"p\", null,\n                \"This passphrase \",\n                this.props.isGenerated ? \"is\" : \"will be\",\n                \" \",\n                lengthText,\n                \" characters in length and \",\n                this.props.isGenerated ? \"has\" : \"will have\",\n                \" \",\n                bitsOfEntropy,\n                \" bits of entropy:\"),\n            React.createElement(\"div\", { id: \"phrase\" }, this.props.parts.map((part) => React.createElement(\"span\", { key: part.key },\n                React.createElement(pp.PhrasePart, Object.assign({}, part))))));\n    }\n}\nexports.Phrase = Phrase;\n\n\n//# sourceURL=webpack:///./src/Phrase.tsx?");

/***/ }),

/***/ "./src/PhrasePart.tsx":
/*!****************************!*\
  !*** ./src/PhrasePart.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PhrasePart = void 0;\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst wordbanks_1 = __webpack_require__(/*! ./wordbanks */ \"./src/wordbanks.ts\");\nclass PhrasePart extends React.PureComponent {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        return React.createElement(\"span\", { className: `part type-${wordbanks_1.PartType[this.props.type]} ${this.props.plaintext !== undefined ? \"plain\" : \"unset\"}` }, this.props.plaintext !== undefined ? this.props.plaintext : `{${wordbanks_1.PartType[this.props.type]}}`);\n    }\n}\nexports.PhrasePart = PhrasePart;\n\n\n//# sourceURL=webpack:///./src/PhrasePart.tsx?");

/***/ }),

/***/ "./src/wordbanks.ts":
/*!**************************!*\
  !*** ./src/wordbanks.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.partTypeProps = exports.dictionary = exports.partTypeList = exports.PartType = void 0;\nconst fisher_yates_1 = __importDefault(__webpack_require__(/*! fisher-yates */ \"./node_modules/fisher-yates/index.js\"));\nvar PartType;\n(function (PartType) {\n    PartType[PartType[\"english\"] = 0] = \"english\";\n    PartType[PartType[\"digit\"] = 1] = \"digit\";\n    PartType[PartType[\"usstate\"] = 2] = \"usstate\";\n    PartType[PartType[\"color\"] = 3] = \"color\";\n    PartType[PartType[\"symbol\"] = 4] = \"symbol\";\n    PartType[PartType[\"musicalnote\"] = 5] = \"musicalnote\";\n})(PartType = exports.PartType || (exports.PartType = {}));\n// This exists because iterating over an enum appears to be discouraged in TypeScript.\nexports.partTypeList = [\n    PartType.english,\n    PartType.digit,\n    PartType.usstate,\n    PartType.color,\n    PartType.symbol,\n    PartType.musicalnote,\n];\n// The following exists to try to satisfy TSLint.  Ideally I could convince\n// TSLint that `shuffle` is safe, but I have not been able to, so I at least\n// centralize its usage and disable warnings on this line.\nconst typedShuffle = (things) => fisher_yates_1.default(things); // tslint:disable-line\nconst BINARY_BASE = 2;\nconst ENGLISH_ENTROPY_BITS = 9;\n/**\n * The dictionary works in one of two ways:\n *\n *   For English, I start with Ogden's Basic English, which has 850 words.  I want a whole number\n *   of entropy bits, so I round down to 512 words, so I need to eliminate 338 words.  I choose to\n *   eliminate the longest words, so I sort the original word list ascending by word length and take\n *   the first (the shortest) 512 words.\n *\n *   For all other parts, I want a whole number of entropy bits without permanently eliminating\n *   any particular value.  Each time the app starts, it shuffles the full set so that the bottom\n *   2^n elements of the resulting list are different each time the program runs.\n */\nexports.dictionary = {\n    [PartType.english]: [\n        // operations (100 words)\n        \"come\", \"get\", \"give\", \"go\", \"keep\", \"let\", \"make\", \"put\", \"seem\", \"take\", \"be\", \"do\", \"have\", \"say\", \"see\", \"send\",\n        \"may\", \"will\", \"about\", \"across\", \"after\", \"against\", \"among\", \"at\", \"before\", \"between\", \"by\", \"down\", \"from\",\n        \"in\", \"off\", \"on\", \"over\", \"through\", \"to\", \"under\", \"up\", \"with\", \"as\", \"for\", \"of\", \"till\", \"than\", \"a\", \"the\",\n        \"all\", \"any\", \"every\", \"little\", \"much\", \"no\", \"other\", \"some\", \"such\", \"that\", \"this\", \"I\", \"he\", \"you\", \"who\",\n        \"and\", \"because\", \"but\", \"or\", \"if\", \"though\", \"while\", \"how\", \"when\", \"where\", \"why\", \"again\", \"ever\", \"far\",\n        \"forward\", \"here\", \"near\", \"now\", \"out\", \"still\", \"then\", \"there\", \"together\", \"well\", \"almost\", \"enough\", \"even\",\n        \"not\", \"only\", \"quite\", \"so\", \"very\", \"tomorrow\", \"yesterday\", \"north\", \"south\", \"east\", \"west\", \"please\", \"yes\",\n        // general things (400 words)\n        \"account\", \"act\", \"addition\", \"adjustment\", \"advertisement\", \"agreement\", \"air\", \"amount\", \"amusement\", \"animal\",\n        \"answer\", \"apparatus\", \"approval\", \"argument\", \"art\", \"attack\", \"attempt\", \"attention\", \"attraction\", \"authority\",\n        \"back\", \"balance\", \"base\", \"behavior\", \"belief\", \"birth\", \"bit\", \"bite\", \"blood\", \"blow\", \"body\", \"brass\", \"bread\",\n        \"breath\", \"brother\", \"building\", \"burn\", \"burst\", \"business\", \"butter\", \"canvas\", \"care\", \"cause\", \"chalk\",\n        \"chance\", \"change\", \"cloth\", \"coal\", \"color\", \"comfort\", \"committee\", \"company\", \"comparison\", \"competition\",\n        \"condition\", \"connection\", \"control\", \"cook\", \"copper\", \"copy\", \"cork\", \"cotton\", \"cough\", \"country\", \"cover\",\n        \"crack\", \"credit\", \"crime\", \"crush\", \"cry\", \"current\", \"curve\", \"damage\", \"danger\", \"daughter\", \"day\", \"death\",\n        \"debt\", \"decision\", \"degree\", \"design\", \"desire\", \"destruction\", \"detail\", \"development\", \"digestion\", \"direction\",\n        \"discovery\", \"discussion\", \"disease\", \"disgust\", \"distance\", \"distribution\", \"division\", \"doubt\", \"drink\",\n        \"driving\", \"dust\", \"earth\", \"edge\", \"education\", \"effect\", \"end\", \"error\", \"event\", \"example\", \"exchange\",\n        \"existence\", \"expansion\", \"experience\", \"expert\", \"fact\", \"fall\", \"family\", \"father\", \"fear\", \"feeling\", \"fiction\",\n        \"field\", \"fight\", \"fire\", \"flame\", \"flight\", \"flower\", \"fold\", \"food\", \"force\", \"form\", \"friend\", \"front\", \"fruit\",\n        \"glass\", \"gold\", \"government\", \"grain\", \"grass\", \"grip\", \"group\", \"growth\", \"guide\", \"harbor\", \"harmony\", \"hate\",\n        \"hearing\", \"heat\", \"help\", \"history\", \"hole\", \"hope\", \"hour\", \"humor\", \"ice\", \"idea\", \"impulse\", \"increase\",\n        \"industry\", \"ink\", \"insect\", \"instrument\", \"insurance\", \"interest\", \"invention\", \"iron\", \"jelly\", \"join\", \"journey\",\n        \"judge\", \"jump\", \"kick\", \"kiss\", \"knowledge\", \"land\", \"language\", \"laugh\", \"law\", \"lead\", \"learning\", \"leather\",\n        \"letter\", \"level\", \"lift\", \"light\", \"limit\", \"linen\", \"liquid\", \"list\", \"look\", \"loss\", \"love\", \"machine\", \"man\",\n        \"manager\", \"mark\", \"market\", \"mass\", \"meal\", \"measure\", \"meat\", \"meeting\", \"memory\", \"metal\", \"middle\", \"milk\",\n        \"mind\", \"mine\", \"minute\", \"mist\", \"money\", \"month\", \"morning\", \"mother\", \"motion\", \"mountain\", \"move\", \"music\",\n        \"name\", \"nation\", \"need\", \"news\", \"night\", \"noise\", \"note\", \"number\", \"observation\", \"offer\", \"oil\", \"operation\",\n        \"opinion\", \"order\", \"organization\", \"ornament\", \"owner\", \"page\", \"pain\", \"paint\", \"paper\", \"part\", \"paste\",\n        \"payment\", \"peace\", \"person\", \"place\", \"plant\", \"play\", \"pleasure\", \"point\", \"poison\", \"polish\", \"porter\",\n        \"position\", \"powder\", \"power\", \"price\", \"print\", \"process\", \"produce\", \"profit\", \"property\", \"prose\", \"protest\",\n        \"pull\", \"punishment\", \"purpose\", \"push\", \"quality\", \"question\", \"rain\", \"range\", \"rate\", \"ray\", \"reaction\",\n        \"reading\", \"reason\", \"record\", \"regret\", \"relation\", \"religion\", \"representative\", \"request\", \"respect\", \"rest\",\n        \"reward\", \"rhythm\", \"rice\", \"river\", \"road\", \"roll\", \"room\", \"rub\", \"rule\", \"run\", \"salt\", \"sand\", \"scale\",\n        \"science\", \"sea\", \"seat\", \"secretary\", \"selection\", \"self\", \"sense\", \"servant\", \"sex\", \"shade\", \"shake\", \"shame\",\n        \"shock\", \"side\", \"sign\", \"silk\", \"silver\", \"sister\", \"size\", \"sky\", \"sleep\", \"slip\", \"slope\", \"smash\", \"smell\",\n        \"smile\", \"smoke\", \"sneeze\", \"snow\", \"soap\", \"society\", \"son\", \"song\", \"sort\", \"sound\", \"soup\", \"space\", \"stage\",\n        \"start\", \"statement\", \"steam\", \"steel\", \"step\", \"stitch\", \"stone\", \"stop\", \"story\", \"stretch\", \"structure\",\n        \"substance\", \"sugar\", \"suggestion\", \"summer\", \"support\", \"surprise\", \"swim\", \"system\", \"talk\", \"taste\", \"tax\",\n        \"teaching\", \"tendency\", \"test\", \"theory\", \"thing\", \"thought\", \"thunder\", \"time\", \"tin\", \"top\", \"touch\", \"trade\",\n        \"transport\", \"trick\", \"trouble\", \"turn\", \"twist\", \"unit\", \"use\", \"value\", \"verse\", \"vessel\", \"view\", \"voice\",\n        \"walk\", \"war\", \"wash\", \"waste\", \"water\", \"wave\", \"wax\", \"way\", \"weather\", \"week\", \"weight\", \"wind\", \"wine\",\n        \"winter\", \"woman\", \"wood\", \"wool\", \"word\", \"work\", \"wound\", \"writing \", \"year\",\n        // picturable things (200 words)\n        \"angle\", \"ant\", \"apple\", \"arch\", \"arm\", \"army\", \"baby\", \"bag\", \"ball\", \"band\", \"basin\", \"basket\", \"bath\", \"bed\",\n        \"bee\", \"bell\", \"berry\", \"bird\", \"blade\", \"board\", \"boat\", \"bone\", \"book\", \"boot\", \"bottle\", \"box\", \"boy\", \"brain\",\n        \"brake\", \"branch\", \"brick\", \"bridge\", \"brush\", \"bucket\", \"bulb\", \"button\", \"cake\", \"camera\", \"card\", \"cart\",\n        \"carriage\", \"cat\", \"chain\", \"cheese\", \"chest\", \"chin\", \"church\", \"circle\", \"clock\", \"cloud\", \"coat\", \"collar\",\n        \"comb\", \"cord\", \"cow\", \"cup\", \"curtain\", \"cushion\", \"dog\", \"door\", \"drain\", \"drawer\", \"dress\", \"drop\", \"ear\",\n        \"egg\", \"engine\", \"eye\", \"face\", \"farm\", \"feather\", \"finger\", \"fish\", \"flag\", \"floor\", \"fly\", \"foot\", \"fork\", \"fowl\",\n        \"frame\", \"garden\", \"girl\", \"glove\", \"goat\", \"gun\", \"hair\", \"hammer\", \"hand\", \"hat\", \"head\", \"heart\", \"hook\", \"horn\",\n        \"horse\", \"hospital\", \"house\", \"island\", \"jewel\", \"kettle\", \"key\", \"knee\", \"knife\", \"knot\", \"leaf\", \"leg\", \"library\",\n        \"line\", \"lip\", \"lock\", \"map\", \"match\", \"monkey\", \"moon\", \"mouth\", \"muscle\", \"nail\", \"neck\", \"needle\", \"nerve\",\n        \"net\", \"nose\", \"nut\", \"office\", \"orange\", \"oven\", \"parcel\", \"pen\", \"pencil\", \"picture\", \"pig\", \"pin\", \"pipe\",\n        \"plane\", \"plate\", \"plough/plow\", \"pocket\", \"pot\", \"potato\", \"prison\", \"pump\", \"rail\", \"rat\", \"receipt\", \"ring\",\n        \"rod\", \"roof\", \"root\", \"sail\", \"school\", \"scissors\", \"screw\", \"seed\", \"sheep\", \"shelf\", \"ship\", \"shirt\", \"shoe\",\n        \"skin\", \"skirt\", \"snake\", \"sock\", \"spade\", \"sponge\", \"spoon\", \"spring\", \"square\", \"stamp\", \"star\", \"station\",\n        \"stem\", \"stick\", \"stocking\", \"stomach\", \"store\", \"street\", \"sun\", \"table\", \"tail\", \"thread\", \"throat\", \"thumb\",\n        \"ticket\", \"toe\", \"tongue\", \"tooth\", \"town\", \"train\", \"tray\", \"tree\", \"trousers\", \"umbrella\", \"wall\", \"watch\",\n        \"wheel\", \"whip\", \"whistle\", \"window\", \"wing\", \"wire\", \"worm\",\n        // qualities (100 words)\n        \"able\", \"acid\", \"angry\", \"automatic\", \"beautiful\", \"black\", \"boiling\", \"bright\", \"broken\", \"brown\", \"cheap\",\n        \"chemical\", \"chief\", \"clean\", \"clear\", \"common\", \"complex\", \"conscious\", \"cut\", \"deep\", \"dependent\", \"early\",\n        \"elastic\", \"electric\", \"equal\", \"fat\", \"fertile\", \"first\", \"fixed\", \"flat\", \"free\", \"frequent\", \"full\", \"general\",\n        \"good\", \"great\", \"grey/gray\", \"hanging\", \"happy\", \"hard\", \"healthy\", \"high\", \"hollow\", \"important\", \"kind\", \"like\",\n        \"living\", \"long\", \"male\", \"married\", \"material\", \"medical\", \"military\", \"natural\", \"necessary\", \"new\", \"normal\",\n        \"open\", \"parallel\", \"past\", \"physical\", \"political\", \"poor\", \"possible\", \"present\", \"private\", \"probable\", \"quick\",\n        \"quiet\", \"ready\", \"red\", \"regular\", \"responsible\", \"right\", \"round\", \"same\", \"second\", \"separate\", \"serious\",\n        \"sharp\", \"smooth\", \"sticky\", \"stiff\", \"straight\", \"strong\", \"sudden\", \"sweet\", \"tall\", \"thick\", \"tight\", \"tired\",\n        \"true\", \"violent\", \"waiting\", \"warm\", \"wet\", \"wide\", \"wise\", \"yellow\", \"young\",\n        // opposite qualities (50 words)\n        \"awake\", \"bad\", \"bent\", \"bitter\", \"blue\", \"certain\", \"cold\", \"complete\", \"cruel\", \"dark\", \"dead\", \"dear\",\n        \"delicate\", \"different\", \"dirty\", \"dry\", \"false\", \"feeble\", \"female\", \"foolish\", \"future\", \"green\", \"ill\", \"last\",\n        \"late\", \"left\", \"loose\", \"loud\", \"low\", \"mixed\", \"narrow\", \"old\", \"opposite\", \"public\", \"rough\", \"sad\", \"safe\",\n        \"secret\", \"short\", \"shut\", \"simple\", \"slow\", \"small\", \"soft\", \"solid\", \"special\", \"strange\", \"thin\", \"white\",\n        \"wrong\",\n    ]\n        .sort((a, b) => a.length - b.length)\n        .slice(0, Math.pow(BINARY_BASE, ENGLISH_ENTROPY_BITS)),\n    [PartType.digit]: typedShuffle([\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\"]),\n    [PartType.usstate]: typedShuffle([\n        \"AL\", \"AK\", \"AZ\", \"AR\", \"CA\", \"CO\", \"CT\", \"DE\", \"FL\", \"GA\",\n        \"HI\", \"ID\", \"IL\", \"IN\", \"IA\", \"KS\", \"KY\", \"LA\", \"ME\", \"MD\",\n        \"MA\", \"MI\", \"MN\", \"MS\", \"MO\", \"MT\", \"NE\", \"NV\", \"NH\", \"NJ\",\n        \"NM\", \"NY\", \"NC\", \"ND\", \"OH\", \"OK\", \"OR\", \"PA\", \"RI\", \"SC\",\n        \"SD\", \"TN\", \"TX\", \"UT\", \"VT\", \"VA\", \"WA\", \"WV\", \"WI\", \"WY\"\n    ]),\n    [PartType.color]: typedShuffle([\n        \"black\", \"maroon\", \"green\", \"olive\",\n        \"navy\", \"purple\", \"teal\", \"silver\",\n        \"gray\", \"red\", \"lime\", \"yellow\",\n        \"blue\", \"fuchsia\", \"aqua\", \"white\",\n    ]),\n    [PartType.symbol]: typedShuffle([\"`\", \"~\", \"!\", \"@\", \"#\", \"$\", \"%\", \"^\", \"&\", \"*\", \"(\", \")\", \"-\", \"_\", \"_\", \"+\"]),\n    [PartType.musicalnote]: typedShuffle([\n        \"A\", \"Ab\", \"A#\",\n        \"B\", \"Bb\", \"B#\",\n        \"C\", \"Cb\", \"C#\",\n        \"D\", \"Db\", \"D#\",\n        \"E\", \"Eb\", \"E#\",\n        \"F\", \"Fb\", \"F#\",\n        \"G\", \"Gb\", \"G#\"\n    ]),\n};\nexports.partTypeProps = {\n    [PartType.english]: {\n        entropyReqBits: ENGLISH_ENTROPY_BITS,\n        maxLength: Math.max(...exports.dictionary[PartType.english].map((entry) => entry.length)),\n        minLength: Math.min(...exports.dictionary[PartType.english].map((entry) => entry.length)),\n    },\n    [PartType.digit]: {\n        entropyReqBits: 3,\n        maxLength: 1,\n        minLength: 1,\n    },\n    [PartType.usstate]: {\n        entropyReqBits: 5,\n        maxLength: 2,\n        minLength: 2,\n    },\n    [PartType.color]: {\n        entropyReqBits: 4,\n        maxLength: Math.max(...exports.dictionary[PartType.color].map((entry) => entry.length)),\n        minLength: Math.min(...exports.dictionary[PartType.color].map((entry) => entry.length)),\n    },\n    [PartType.symbol]: {\n        entropyReqBits: 4,\n        maxLength: 1,\n        minLength: 1,\n    },\n    [PartType.musicalnote]: {\n        entropyReqBits: 4,\n        maxLength: 2,\n        minLength: 1,\n    },\n};\n\n\n//# sourceURL=webpack:///./src/wordbanks.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });