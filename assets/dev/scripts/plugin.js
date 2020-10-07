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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 183);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationEvent_1 = __webpack_require__(16);
var PackageAbstract = (function () {
    function PackageAbstract() {
        this.componentList = new Set();
        this.subpackageList = new Set();
        this.collectAfter = new ApplicationEvent_1.default();
    }
    PackageAbstract.prototype.initialProperties = function () { };
    PackageAbstract.prototype.getInitialSubpackages = function () {
        return [];
    };
    return PackageAbstract;
}());
exports.default = PackageAbstract;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateElement(option) {
    return jQuery(option);
}
exports.default = CreateElement;


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(34);
var ComponentAbstract = (function (_super) {
    __extends(ComponentAbstract, _super);
    function ComponentAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComponentAbstract.prototype, "prototypes", {
        get: function () {
            return {
                component: this.app.objectContainer.get('Filter/Component/Prototypes'),
                urlNavigation: this.app.objectContainer.get('Project/URLNavigation/Prototypes')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "register", {
        get: function () {
            return {
                components: this.app.objectContainer.get('Filter/Components'),
                entityTypes: this.app.objectContainer.get('Entity/Register'),
                productsQueryVars: this.app.objectContainer.get('ProductsQueryVars'),
                productsLoopProperties: this.app.objectContainer.get('ProductsLoopProperties')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "builders", {
        get: function () {
            return {
                component: this.app.componentRegister.get('Filter/Builder/Component')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "componentBuilder", {
        get: function () {
            return this.app.objectContainer.get('ComponentBuilder');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "entityCollector", {
        get: function () {
            return this.app.componentRegister.get('Entity/Collector');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "localizedMessages", {
        get: function () {
            return this.app.objectContainer.get('Messages');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "appSelectors", {
        get: function () {
            return this.app.objectContainer.get('Selectors');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "filterPackage", {
        get: function () {
            return this.app.packageRegister.get('Filter/Package');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "wooData", {
        get: function () {
            return this.app.objectContainer.get('WooData');
        },
        enumerable: true,
        configurable: true
    });
    return ComponentAbstract;
}(ComponentAbstract_1.default));
exports.default = ComponentAbstract;


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ExtendObject(object1, object2) {
    return jQuery.extend(object1, object2);
}
exports.default = ExtendObject;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationEvent = (function () {
    function ApplicationEvent() {
        this.defaultContext = null;
        this.callbacks = [];
    }
    ApplicationEvent.prototype.subscribe = function (callback, subscriber) {
        if (!subscriber && this.defaultContext) {
            subscriber = this.defaultContext;
        }
        if (!subscriber) {
            subscriber = callback;
        }
        var that = this, entry = {
            callback: callback,
            event: that,
            unsubscribe: function () {
                that.unsubscribe(callback);
            }
        };
        this.callbacks.push({
            callback: callback,
            subscriber: subscriber
        });
        return entry;
    };
    ApplicationEvent.prototype.unsubscribe = function (callback, subscriber) {
        if (!subscriber && this.defaultContext) {
            subscriber = this.defaultContext;
        }
        if (!subscriber) {
            subscriber = callback;
        }
        var filteredList = [];
        for (var i = 0; i < this.callbacks.length; i++) {
            if (this.callbacks[i].callback !== callback && this.callbacks[i].subscriber !== subscriber) {
                filteredList.push(this.callbacks[i]);
            }
        }
        this.callbacks = filteredList;
    };
    ApplicationEvent.prototype.trigger = function (arg, context) {
        for (var i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i].callback.apply(this.callbacks[i].subscriber, [
                arg,
                context
            ]);
        }
    };
    return ApplicationEvent;
}());
exports.default = ApplicationEvent;


/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Context(callback, context) {
    return jQuery.proxy(callback, context);
}
exports.default = Context;


/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventManager_1 = __webpack_require__(98);
var ComponentAbstract = (function () {
    function ComponentAbstract(eventManager) {
        if (eventManager) {
            this.eventManager = eventManager;
        }
        else {
            this.eventManager = new EventManager_1.default(this);
        }
    }
    Object.defineProperty(ComponentAbstract.prototype, "app", {
        get: function () {
            return this.package.app;
        },
        enumerable: true,
        configurable: true
    });
    ComponentAbstract.prototype.initialProperties = function () { };
    return ComponentAbstract;
}());
exports.default = ComponentAbstract;


/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(100);
var ObjectIndex_1 = __webpack_require__(101);
var ObjectRepository = (function () {
    function ObjectRepository(containerObject) {
        this.observable = new Observable_1.default();
        if (containerObject) {
            this.container = containerObject;
        }
    }
    ObjectRepository.prototype.has = function (key) {
        return ObjectIndex_1.default(this.container, key) !== undefined;
    };
    ObjectRepository.prototype.get = function (key) {
        return ObjectIndex_1.default(this.container, key);
    };
    ObjectRepository.prototype.set = function (key, value) {
        var oldValue = this.has(key) ? this.get(key) : null;
        ObjectIndex_1.default(this.container, key, value);
        if (typeof key == 'string' && key.split('.').length) {
            key = key.split('.')[0];
        }
        this.observable.notify(key, value, oldValue);
    };
    return ObjectRepository;
}());
exports.default = ObjectRepository;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CloneVariable(variable) {
    return JSON.parse(JSON.stringify(variable));
}
exports.default = CloneVariable;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FilteringComponentAbstract_1 = __webpack_require__(199);
var CreateElement_1 = __webpack_require__(8);
var FieldComponentAbstract = (function (_super) {
    __extends(FieldComponentAbstract, _super);
    function FieldComponentAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldComponentAbstract.prototype.getFieldKey = function () {
        return this.getFilterKeys().field;
    };
    FieldComponentAbstract.prototype.getFilterKeys = function () {
        return {
            field: this.options.get('optionKey')
        };
    };
    FieldComponentAbstract.prototype.updateValueFromElement = function (param) {
        var filterKey = this.getFieldKey();
        if (typeof param == "string") {
            filterKey = param;
        }
        var fieldValue = this.getDocumentElementValue(filterKey);
        if ((Array.isArray(fieldValue) && !fieldValue.length)
            || fieldValue == null
            || (typeof fieldValue == 'string' && !fieldValue.length)) {
            this.removeFilterValue(filterKey);
        }
        else {
            this.applyFilterValue(filterKey, fieldValue);
        }
    };
    FieldComponentAbstract.prototype.resetDocumentElementValue = function (filterKey) {
        this.setDocumentElementValue(filterKey, null);
    };
    FieldComponentAbstract.prototype.initialPropertiesOfElement = function () {
        var _this = this;
        _super.prototype.initialPropertiesOfElement.call(this);
        if (this.componentState.has('box')) {
            if (this.componentState.get('box') == 'hide') {
                this.componentElement.addClass('wcpf-box-hide');
                this.componentElement.find('.wcpf-content').slideUp(0);
            }
            else {
                this.componentElement.removeClass('wcpf-box-hide');
                this.componentElement.find('.wcpf-content').slideDown(0);
            }
        }
        else if (this.componentElement.hasClass('wcpf-box-style') && this.componentElement.hasClass('wcpf-box-hide')) {
            this.componentElement.find('.wcpf-content').slideUp(300);
        }
        if (this.componentElement.hasClass('wcpf-hierarchical-collapsed')) {
            this.componentElement.find('.wcpf-item-hierarchical-collapsed')
                .each(function (index, itemDomElement) {
                var itemElement = jQuery(itemDomElement), boxIndex = 'boxItem_' + itemElement.data('item-key'), isItemHidden = itemElement.hasClass('wcpf-item-box-hide');
                if (_this.componentState.has(boxIndex)
                    && _this.componentState.get(boxIndex) != 'hide'
                    && isItemHidden) {
                    itemElement.removeClass('wcpf-item-box-hide');
                    itemElement.find('.wcpf-item-children-container:first').slideDown(0);
                }
                else {
                    itemElement.find('.wcpf-item-children-container:first').css({
                        display: isItemHidden ? 'none' : 'block'
                    });
                }
            });
        }
        if (this.componentElement.hasClass('wcpf-scrollbar')) {
            this.componentElement.each(function (index, componentDomElement) {
                var componentElement = jQuery(componentDomElement), contentElement = componentElement.find('.wcpf-content'), maxHeightIndex = 'maxHeight_' + index;
                if (_this.componentState.has(maxHeightIndex)) {
                    contentElement.css({
                        maxHeight: _this.componentState.get(maxHeightIndex) + 'px'
                    });
                }
                else {
                    var heightOfVisibleContent = _this.options.get('heightOfVisibleContent');
                    if (!heightOfVisibleContent || heightOfVisibleContent <= 0) {
                        heightOfVisibleContent = 12;
                    }
                    var firstLabelElement = componentElement.find('.wcpf-item-label:first'), maxHeight = firstLabelElement.actual('height') * heightOfVisibleContent;
                    maxHeight += 2;
                    contentElement.css({
                        maxHeight: maxHeight + 'px'
                    });
                    _this.componentState.set(maxHeightIndex, maxHeight);
                }
            });
        }
        else if (this.componentElement.hasClass('wcpf-contain-more-button') && !this.componentState.get('showMoreContent')) {
            this.componentElement.each(function (index, componentDomElement) {
                var componentElement = jQuery(componentDomElement), heightOfVisibleContent = _this.options.get('heightOfVisibleContent'), itemsElements = componentElement.find('.wcpf-item'), moreButtonElement = componentElement.find('.wcpf-more-button');
                if (!heightOfVisibleContent || heightOfVisibleContent <= 0) {
                    heightOfVisibleContent = 12;
                }
                var currentItem = 1;
                itemsElements.each(function (itemIndex, itemDomElement) {
                    var itemElement = jQuery(itemDomElement);
                    if (itemElement.parents('.wcpf-item.wcpf-item-box-hide').length) {
                        return;
                    }
                    if (currentItem > heightOfVisibleContent) {
                        itemElement.addClass('wcpf-more-item wcpf-item-hide');
                    }
                    currentItem++;
                });
                if (currentItem > heightOfVisibleContent) {
                    moreButtonElement.addClass('wcpf-status-active');
                }
            });
        }
    };
    FieldComponentAbstract.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        if (this.componentElement.hasClass('wcpf-box-style')) {
            manager.addElementHandler(this.componentElement, 'click', '.wcpf-heading-label', this.onBoxToggleClick);
        }
        if (this.componentElement.hasClass('wcpf-hierarchical-collapsed')) {
            manager.addElementHandler(this.componentElement.find([
                '.wcpf-item-hierarchical-collapsed > .wcpf-item-inner > .wcpf-item-label .wcpf-title-container',
                '.wcpf-item-hierarchical-collapsed > .wcpf-item-inner > .wcpf-item-label .box-item-toggle'
            ].join(',')), 'click', this.onItemBoxToggleClick);
        }
        if (this.componentElement.hasClass('wcpf-contain-more-button')) {
            manager.addElementHandler(this.componentElement.find('.wcpf-more-button'), 'click', this.onMoreButtonClick);
        }
    };
    FieldComponentAbstract.prototype.onMoreButtonClick = function (event) {
        var moreButtonElement = jQuery(event.currentTarget), componentElement = moreButtonElement.parents('.wcpf-front-element:first'), moreItemsElements = componentElement.find('.wcpf-more-item');
        if (componentElement.hasClass('wcpf-hide-more-items')) {
            moreItemsElements.addClass('wcpf-item-hide');
        }
        else {
            moreItemsElements.removeClass('wcpf-item-hide');
        }
        componentElement.toggleClass('wcpf-hide-more-items');
        this.componentState.set('showMoreContent', componentElement.hasClass('wcpf-hide-more-items'));
    };
    FieldComponentAbstract.prototype.onItemBoxToggleClick = function (event) {
        var titleElement = CreateElement_1.default(event.currentTarget), itemElement = titleElement.parents('.wcpf-item-hierarchical-collapsed:first'), boxIndex = 'boxItem_' + itemElement.data('item-key');
        if (!itemElement.hasClass('wcpf-item-box-hide')) {
            itemElement.find('.wcpf-item-children-container:first').slideUp(300);
            this.componentState.set(boxIndex, 'hide');
        }
        else {
            itemElement.find('.wcpf-item-children-container:first').slideDown(300);
            this.componentState.set(boxIndex, 'show');
        }
        itemElement.toggleClass('wcpf-item-box-hide');
    };
    FieldComponentAbstract.prototype.onBoxToggleClick = function (event) {
        this.componentElement.toggleClass('wcpf-box-hide');
        if (this.componentElement.hasClass('wcpf-box-hide')) {
            this.componentElement.find('.wcpf-content').slideUp(300);
            this.componentState.set('box', 'hide');
        }
        else {
            this.componentElement.find('.wcpf-content').slideDown(300);
            this.componentState.set('box', 'show');
        }
    };
    return FieldComponentAbstract;
}(FilteringComponentAbstract_1.default));
exports.default = FieldComponentAbstract;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entry = (function () {
    function Entry(props) {
        this.mark = '';
        if (props) {
            if (props.hasOwnProperty('filterComponent')) {
                this.filterComponent = props.filterComponent;
            }
            if (props.hasOwnProperty('filterValue')) {
                this.filterValue = props.filterValue;
            }
            if (props.hasOwnProperty('text')) {
                this.text = props.text;
            }
            if (props.hasOwnProperty('mark')) {
                this.mark = props.mark;
            }
        }
    }
    return Entry;
}());
exports.default = Entry;


/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function CreateElementByEvent(event) {
    return jQuery(event.currentTarget);
}
exports.default = CreateElementByEvent;


/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EntityStatus;
(function (EntityStatus) {
    EntityStatus["remove"] = "remove";
    EntityStatus["virtual"] = "virtual";
    EntityStatus["published"] = "published";
})(EntityStatus || (EntityStatus = {}));
exports.default = EntityStatus;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementComponent_1 = __webpack_require__(135);
var ObjectRepository_1 = __webpack_require__(42);
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super.call(this) || this;
        _this.options = new ObjectRepository_1.default();
        _this.childFilterComponents = [];
        _this.componentState = new Map();
        return _this;
    }
    BaseComponent.prototype.initialProperties = function () {
        this.options.container = this.entity.options;
        this.initialPropertiesOfElement();
    };
    BaseComponent.prototype.attachEvents = function (manager) {
        this.attachElementEvents(manager);
    };
    BaseComponent.prototype.initialPropertiesOfElement = function () { };
    BaseComponent.prototype.attachElementEvents = function (manager) { };
    Object.defineProperty(BaseComponent.prototype, "activeComponentElement", {
        get: function () {
            if (this.componentElement.length > 1) {
                var activeElement_1 = this.componentElement.filter(':visible');
                activeElement_1.each(function (index, domElement) {
                    var itemElement = jQuery(domElement);
                    if (itemElement.css('visibility') == 'visible') {
                        activeElement_1 = itemElement;
                        return false;
                    }
                });
                return activeElement_1;
            }
            return this.componentElement;
        },
        enumerable: true,
        configurable: true
    });
    return BaseComponent;
}(ElementComponent_1.default));
exports.default = BaseComponent;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Compare(obj1, obj2) {
    for (var prop in obj1) {
        if (obj1.hasOwnProperty(prop) !== obj2.hasOwnProperty(prop)) {
            return false;
        }
        var type = typeof obj1[prop];
        if (type == 'object') {
            if (!Compare(obj1[prop], obj2[prop])) {
                return false;
            }
        }
        else if (type == 'function') {
            if (typeof obj2[prop] == 'undefined' || (obj1[prop].toString() != obj2[prop].toString())) {
                return false;
            }
        }
        else {
            if (obj1[prop] != obj2[prop]) {
                return false;
            }
        }
    }
    for (var prop in obj2) {
        if (typeof obj1[prop] == 'undefined') {
            return false;
        }
    }
    return true;
}
exports.default = Compare;


/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function GetEntitySelector(entity, endSelector) {
    var selector = '';
    while (true) {
        var parentEntity = entity.getParentEntity();
        if (!entity.rootSelector) {
            if (!parentEntity) {
                break;
            }
            else {
                entity = parentEntity;
                continue;
            }
        }
        if (selector.length == 0) {
            selector = entity.rootSelector;
        }
        else {
            selector = entity.rootSelector + ' ' + selector;
        }
        if (!parentEntity) {
            break;
        }
        entity = parentEntity;
    }
    if (endSelector) {
        if (selector.length == 0) {
            selector = endSelector;
        }
        else {
            selector += ' ' + endSelector;
        }
    }
    return selector;
}
exports.default = GetEntitySelector;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entity = (function () {
    function Entity() {
    }
    return Entity;
}());
exports.default = Entity;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ArrayCompare(firstArray, secondArray) {
    if (Object.getPrototypeOf(firstArray) !== Object.getPrototypeOf(secondArray)) {
        return false;
    }
    if (firstArray.length === undefined || firstArray.length !== secondArray.length) {
        return false;
    }
    return Array.prototype.every.call(firstArray, function (x, i) { return x === secondArray[i]; });
}
exports.default = ArrayCompare;


/***/ }),
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
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateElement_1 = __webpack_require__(8);
var Application = (function () {
    function Application() {
        this.objectContainer = new Map();
        this.componentRegister = new Map();
        this.packageRegister = new Map();
    }
    Object.defineProperty(Application.prototype, "bodyElement", {
        get: function () {
            return CreateElement_1.default(document.body);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Application.prototype, "windowElement", {
        get: function () {
            return CreateElement_1.default(window);
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.initialization = function () { };
    return Application;
}());
exports.default = Application;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var PackageBuilder = (function () {
    function PackageBuilder() {
    }
    PackageBuilder.prototype.buildByClass = function (packageClass, app, parent) {
        var packageObject = this.createPackageByClass(packageClass, app, parent);
        return this.build(packageObject, app, parent);
    };
    PackageBuilder.prototype.build = function (packageObject, app, parent) {
        packageObject.app = app;
        packageObject.parentPackage = parent;
        this.createInteraction(packageObject, app, parent);
        this.afterInteractionBuilding(packageObject, app);
        this.packageInitialProperties(packageObject);
        this.packageAttachEvents(packageObject);
        packageObject.collectAfter.trigger(packageObject);
        return packageObject;
    };
    PackageBuilder.prototype.packageAttachEvents = function (packageObject) {
        var _this = this;
        packageObject.componentList.forEach(function (componentItem) {
            componentItem.attachEvents(componentItem.eventManager);
        });
        packageObject.subpackageList.forEach(function (packageItem) {
            _this.packageAttachEvents(packageItem);
        });
    };
    PackageBuilder.prototype.packageInitialProperties = function (packageObject) {
        var _this = this;
        packageObject.initialProperties();
        packageObject.componentList.forEach(function (componentItem) {
            componentItem.initialProperties();
        });
        packageObject.subpackageList.forEach(function (packageItem) {
            _this.packageInitialProperties(packageItem);
        });
    };
    PackageBuilder.prototype.createInteraction = function (packageObject, app, parent) {
        var _this = this;
        var subpackgeList = packageObject.getInitialSubpackages(), componentList = packageObject.getInitialComponents();
        if (componentList) {
            componentList.forEach(function (componentItem) {
                componentItem.package = packageObject;
                packageObject.componentList.add(componentItem);
            });
        }
        if (subpackgeList) {
            subpackgeList.forEach(function (packageClassItem) {
                var packageItem = null;
                if (packageClassItem instanceof PackageAbstract_1.default) {
                    packageItem = packageClassItem;
                    packageItem.app = app;
                    packageItem.parentPackage = packageObject;
                }
                else {
                    packageItem = _this.createPackageByClass(packageClassItem, packageObject.app, packageObject);
                }
                packageObject.subpackageList.add(packageItem);
            });
            packageObject.subpackageList.forEach(function (packageItem) {
                _this.createInteraction(packageItem, packageItem.app, packageItem.parentPackage);
            });
        }
    };
    PackageBuilder.prototype.createPackageByClass = function (packageClass, app, parent) {
        if (!(packageClass.prototype instanceof PackageAbstract_1.default)) {
            throw new TypeError('Сlass does not implement class "PackageAbstract"');
        }
        var packageObject = new packageClass();
        packageObject.app = app;
        packageObject.parentPackage = parent;
        return packageObject;
    };
    PackageBuilder.prototype.afterInteractionBuilding = function (packageObject, app) {
        var _this = this;
        if (packageObject.afterInteractionBuilding) {
            packageObject.afterInteractionBuilding(app);
        }
        if (packageObject.componentList.size) {
            packageObject.componentList.forEach(function (componentItem) {
                if (componentItem.afterInteractionBuilding) {
                    componentItem.afterInteractionBuilding(app);
                }
            });
        }
        if (packageObject.subpackageList.size) {
            packageObject.subpackageList.forEach(function (subpackageItem) {
                _this.afterInteractionBuilding(subpackageItem, app);
            });
        }
    };
    return PackageBuilder;
}());
exports.default = PackageBuilder;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBuilder = (function () {
    function ComponentBuilder() {
    }
    ComponentBuilder.prototype.build = function (componentType, pack) {
        var component = new componentType();
        if (pack) {
            this.implementation(component, pack);
        }
        return component;
    };
    ComponentBuilder.prototype.implementation = function (component, pack) {
        component.package = pack;
        component.initialProperties();
        component.attachEvents(component.eventManager);
    };
    return ComponentBuilder;
}());
exports.default = ComponentBuilder;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Collector_1 = __webpack_require__(97);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        var registerEntities = new Map();
        this.app.objectContainer.set('Entity/Register', registerEntities);
    };
    Package.prototype.getInitialComponents = function () {
        return [
            new Collector_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(34);
var ExtendObject_1 = __webpack_require__(15);
var Entity_1 = __webpack_require__(74);
var EntityStatus_1 = __webpack_require__(65);
var Collector = (function (_super) {
    __extends(Collector, _super);
    function Collector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Collector.prototype, "register", {
        get: function () {
            return this.app.objectContainer.get('Entity/Register');
        },
        enumerable: true,
        configurable: true
    });
    Collector.prototype.initialProperties = function () {
        this.app.componentRegister.set('Entity/Collector', this);
    };
    Collector.prototype.attachEvents = function (eventManager) { };
    Collector.prototype.collectVirtualEntityByKey = function (entityKey) {
        var entity = null;
        if (!this.register.has(entityKey)) {
            throw new Error("Entry by key '" + entityKey + "' in register not found");
        }
        var entry = this.register.get(entityKey);
        entity = new Entity_1.default();
        entity.status = EntityStatus_1.default.virtual;
        entity.entityId = this.createUniqueID();
        entity.parentId = 0;
        entity.entityKey = entry.id;
        entity.order = 0;
        entity.options = ExtendObject_1.default({}, entry.defaultOptions);
        entity.title = entry.label;
        entity.childEntities = [];
        return entity;
    };
    Collector.prototype.collectEntityByStructure = function (structure) {
        var entity = null;
        entity = new Entity_1.default();
        entity.status = EntityStatus_1.default.published;
        entity.entityId = structure.entityId;
        entity.parentId = structure.parentId;
        entity.entityKey = structure.entityKey;
        entity.order = Number(structure.order);
        entity.options = ExtendObject_1.default({}, structure.options);
        entity.title = structure.title;
        entity.childEntities = [];
        if (structure.childEntities
            && structure.childEntities.hasOwnProperty('length')
            && structure.childEntities.length) {
            for (var i in structure.childEntities) {
                var itemStructure = structure.childEntities[i];
                var itemEntity = this.collectEntityByStructure(itemStructure);
                entity.childEntities.push(itemEntity);
            }
        }
        return entity;
    };
    Collector.prototype.createUniqueID = function () {
        var chr4 = function () {
            return Math.random().toString(16).slice(-4);
        };
        return 'virtual-' + chr4() + chr4() +
            '-' + chr4() +
            '-' + chr4() +
            '-' + chr4() +
            '-' + chr4() + chr4() + chr4();
    };
    return Collector;
}(ComponentAbstract_1.default));
exports.default = Collector;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateElement_1 = __webpack_require__(8);
var GetEntitySelector_1 = __webpack_require__(73);
var Context_1 = __webpack_require__(24);
var EventManager = (function () {
    function EventManager(component) {
        this.component = component;
        this.rootElement = CreateElement_1.default(document.documentElement);
    }
    EventManager.prototype.addWindowHandler = function (event, eventHandler, context) {
        this.applyElementHandler(true, {
            element: CreateElement_1.default(window),
            event: event,
            eventSelector: null,
            eventHandler: eventHandler,
            context: context
        });
    };
    EventManager.prototype.removeWindowHandler = function (event, eventHandler, context) {
        this.applyElementHandler(false, {
            element: CreateElement_1.default(window),
            event: event,
            eventSelector: null,
            eventHandler: eventHandler,
            context: context
        });
    };
    EventManager.prototype.addSystemHandler = function (event, eventHandler, context) {
        context = this.getContext(context);
        event.subscribe(eventHandler, context);
    };
    EventManager.prototype.removeSystemHandler = function (event, eventHandler, context) {
        context = this.getContext(context);
        event.unsubscribe(eventHandler, context);
    };
    EventManager.prototype.addElementHandler = function (element, event, eventSelector, eventHandler, context) {
        this.applyElementHandler(true, {
            element: element,
            event: event,
            eventSelector: eventSelector,
            eventHandler: eventHandler,
            context: context
        });
    };
    EventManager.prototype.removeElementHandler = function (element, event, eventSelector, eventHandler, context) {
        this.applyElementHandler(false, {
            element: element,
            event: event,
            eventSelector: eventSelector,
            eventHandler: eventHandler,
            context: context
        });
    };
    EventManager.prototype.applyElementHandler = function (isActivated, options) {
        options.context = this.getContext(options.context);
        if (options.eventSelector instanceof Function && !options.eventHandler) {
            options.eventHandler = options.eventSelector;
            options.eventSelector = '';
        }
        if (options.context) {
            options.eventHandler = Context_1.default(options.eventHandler, options.context);
        }
        if (options.element instanceof Element) {
            options.element = jQuery(options.element);
        }
        if (isActivated) {
            if (options.eventSelector) {
                options.element.on(options.event, options.eventSelector, options.eventHandler);
            }
            else {
                options.element.on(options.event, options.eventHandler);
            }
        }
        else {
            if (options.eventSelector) {
                options.element.off(options.event, options.eventSelector, options.eventHandler);
            }
            else {
                options.element.off(options.event, options.eventHandler);
            }
        }
    };
    EventManager.prototype.getContext = function (context) {
        if (!context && this.component) {
            context = this.component;
        }
        return context;
    };
    EventManager.prototype.addEntityHandler = function (entity, event, eventHandlerOrSelector, contextOrHanlder, context) {
        var endSelector = '', eventHandler = eventHandlerOrSelector;
        if (typeof eventHandlerOrSelector == 'string' && contextOrHanlder instanceof Function) {
            endSelector = eventHandlerOrSelector;
            eventHandler = contextOrHanlder;
        }
        if (!context && contextOrHanlder && !(contextOrHanlder instanceof Function)) {
            context = contextOrHanlder;
        }
        context = this.getContext(context);
        if (context) {
            eventHandler = Context_1.default(eventHandler, context);
        }
        var selector = GetEntitySelector_1.default(entity, endSelector);
        this.rootElement.on(event, selector, eventHandler);
    };
    EventManager.prototype.removeEntityHandler = function (entity, event, eventHandlerOrSelector, contextOrHanlder, context) {
        var endSelector = '', eventHandler = eventHandlerOrSelector;
        if (typeof eventHandlerOrSelector == 'string' && contextOrHanlder instanceof Function) {
            endSelector = eventHandlerOrSelector;
            eventHandler = contextOrHanlder;
        }
        if (!context && contextOrHanlder && !(contextOrHanlder instanceof Function)) {
            context = contextOrHanlder;
        }
        context = this.getContext(context);
        if (context) {
            eventHandler = Context_1.default(eventHandler, context);
        }
        var selector = GetEntitySelector_1.default(entity, endSelector);
        this.rootElement.off(event, selector, eventHandler);
    };
    EventManager.prototype.addComponentHandler = function (event, eventHandlerOrSelector, contextOrHandler, context) {
        this.addEntityHandler(this.component, event, eventHandlerOrSelector, contextOrHandler, context);
    };
    EventManager.prototype.removeComponentHandler = function (event, eventHandlerOrSelector, contextOrHandler, context) {
        this.removeEntityHandler(this.component, event, eventHandlerOrSelector, contextOrHandler, context);
    };
    EventManager.prototype.addPackageHandler = function (event, eventHandlerOrSelector, contextOrHandler, context) {
        this.addEntityHandler(this.component.package, event, eventHandlerOrSelector, contextOrHandler, context);
    };
    EventManager.prototype.removePackageHandler = function (event, eventHandlerOrSelector, contextOrHandler, context) {
        this.removeEntityHandler(this.component.package, event, eventHandlerOrSelector, contextOrHandler, context);
    };
    EventManager.prototype.addPageElementHandler = function (event, eventSelector, eventHandler, context) {
        this.applyElementHandler(true, {
            element: this.rootElement,
            event: event,
            eventSelector: eventSelector,
            eventHandler: eventHandler,
            context: context
        });
    };
    EventManager.prototype.removePageElementHandler = function (event, eventSelector, eventHandler, context) {
        this.applyElementHandler(false, {
            element: this.rootElement,
            event: event,
            eventSelector: eventSelector,
            eventHandler: eventHandler,
            context: context
        });
    };
    return EventManager;
}());
exports.default = EventManager;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(34);
var ElementComponent = (function (_super) {
    __extends(ElementComponent, _super);
    function ElementComponent(element) {
        var _this = _super.call(this) || this;
        if (element) {
            if (element instanceof Element) {
                element = jQuery(element);
            }
            _this.componentElement = element;
        }
        return _this;
    }
    ElementComponent.prototype.addElementHandler = function (event, eventSelector, eventHandler, context) {
        this.eventManager.addElementHandler(this.componentElement, event, eventSelector, eventHandler, context);
    };
    ElementComponent.prototype.removeElementHandler = function (event, eventSelector, eventHandler, context) {
        this.eventManager.removeElementHandler(this.componentElement, event, eventSelector, eventHandler, context);
    };
    return ElementComponent;
}(ComponentAbstract_1.default));
exports.default = ElementComponent;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = __webpack_require__(24);
var Observable = (function () {
    function Observable() {
        this.observers = new Map();
    }
    Observable.prototype.add = function (optionKey, observer, context) {
        if (!this.observers.has(optionKey)) {
            this.observers.set(optionKey, []);
        }
        observer = context ? Context_1.default(observer, context) : observer;
        this.observers.get(optionKey).push(observer);
    };
    Observable.prototype.remove = function (optionKey, observer, context) {
        if (!this.observers.has(optionKey)) {
            return;
        }
        observer = context ? context : Context_1.default(observer, this);
        this.observers.get(optionKey).filter(function (handler) {
            return handler !== observer;
        });
    };
    Observable.prototype.notify = function (optionKey, value, oldValue) {
        if (this.observers.has(optionKey)) {
            this.observers.get(optionKey).forEach(function (callbacks) {
                callbacks(value, oldValue, optionKey);
            });
        }
    };
    return Observable;
}());
exports.default = Observable;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CloneVariable_1 = __webpack_require__(43);
function ObjectIndex(repository, path, value) {
    if (typeof path == 'string') {
        return ObjectIndex(repository, path.split('.'), value);
    }
    else if (path.length == 1 && value !== undefined) {
        return repository[path[0]] = value;
    }
    else if (path.length == 0) {
        return CloneVariable_1.default(repository);
    }
    else {
        if (!repository.hasOwnProperty(path[0])) {
            if (value !== undefined) {
                repository[path[0]] = {};
            }
            else {
                return undefined;
            }
        }
        return ObjectIndex(repository[path[0]], path.slice(1), value);
    }
}
exports.default = ObjectIndex;


/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var NavigationAbstract_1 = __webpack_require__(188);
var QueryNavigation = (function (_super) {
    __extends(QueryNavigation, _super);
    function QueryNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryNavigation.prototype.initialProperties = function () {
        _super.prototype.initialProperties.call(this);
        this.urlParams = new Map();
        this.updateUrlParams();
    };
    QueryNavigation.prototype.updateUrlParams = function () {
        this.urlParams.clear();
        var url = location.search.substring(1), pairs = url.split('&');
        if (!url.length) {
            return;
        }
        for (var i in pairs) {
            var pair = pairs[i].split('=');
            this.urlParams.set(pair[0], (pair.length > 1 ? this.decode(pair[1]) : undefined));
        }
    };
    QueryNavigation.prototype.hasAttribute = function (key) {
        return this.urlParams.has(key);
    };
    QueryNavigation.prototype.getAttribute = function (key) {
        return this.urlParams.get(key);
    };
    QueryNavigation.prototype.setAttribute = function (key, value) {
        this.updateUrlParams();
        this.urlParams.set(key, value);
        this.updateUrl();
    };
    QueryNavigation.prototype.removeAttribute = function (key) {
        this.updateUrlParams();
        this.urlParams.delete(key);
        this.updateUrl();
    };
    QueryNavigation.prototype.updateUrl = function () {
        var e_1, _a;
        var params = [];
        try {
            for (var _b = __values(this.urlParams.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value == undefined) {
                    params.push(this.encode(key));
                }
                else {
                    params.push(this.encode(key) + '=' + this.encode(value));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var newUrl = location.pathname + location.hash;
        if (params.length) {
            newUrl = '?' + params.join('&');
        }
        window.history.replaceState({}, document.title, newUrl);
    };
    QueryNavigation.prototype.decode = function (value) {
        value = decodeURIComponent(value);
        if (value.indexOf(',') !== -1) {
            return value.split(',');
        }
        return value;
    };
    QueryNavigation.prototype.encode = function (value) {
        if (Array.isArray(value)) {
            return value.join(',');
        }
        return value;
    };
    QueryNavigation.prototype.setAllAttributesToUrl = function (url, attributes) {
        var search = '';
        if (url.indexOf('?') != -1) {
            search = url.slice(url.indexOf('?') + 1);
            url = url.slice(0, url.indexOf('?'));
        }
        var params = {}, pairs = search.indexOf('&') != -1 ? search.split('&') : [], urlNewParams = [];
        for (var i in pairs) {
            var pair = pairs[i].split('=');
            params[pair[0]] = this.decode(pair[1]);
        }
        for (var i in attributes) {
            params[i] = attributes[i];
        }
        for (var key in params) {
            var value = params[key];
            urlNewParams.push(this.encode(key) + '=' + this.encode(value));
        }
        if (urlNewParams.length) {
            url += '?' + urlNewParams.join('&');
        }
        return url;
    };
    QueryNavigation.prototype.removeAllAttributesFromUrl = function (url, attributes) {
        if (url.indexOf('?') == -1) {
            return url;
        }
        var search = url.slice(url.indexOf('?') + 1);
        if (!search.length) {
            return url;
        }
        url = url.slice(0, url.indexOf('?'));
        var params = {}, pairs = search.split('&'), urlNewParams = [];
        for (var i in pairs) {
            var pair = pairs[i].split('=');
            params[pair[0]] = this.decode(pair[1]);
        }
        for (var i in attributes) {
            var item = attributes[i];
            if (params.hasOwnProperty(item)) {
                delete params[item];
            }
        }
        for (var key in params) {
            var value = params[key];
            urlNewParams.push(this.encode(key) + '=' + this.encode(value));
        }
        if (urlNewParams.length) {
            url += '?' + urlNewParams.join('&');
        }
        return url;
    };
    QueryNavigation.prototype.getAllAttributes = function () {
        var e_2, _a;
        this.updateUrlParams();
        var paris = {};
        try {
            for (var _b = __values(this.urlParams.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                paris[key] = value;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return paris;
    };
    return QueryNavigation;
}(NavigationAbstract_1.default));
exports.default = QueryNavigation;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementComponent_1 = __webpack_require__(99);
var ElementComponent = (function (_super) {
    __extends(ElementComponent, _super);
    function ElementComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ElementComponent.prototype, "prototypes", {
        get: function () {
            return {
                component: this.app.objectContainer.get('Filter/Component/Prototypes'),
                urlNavigation: this.app.objectContainer.get('Project/URLNavigation/Prototypes')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "register", {
        get: function () {
            return {
                components: this.app.objectContainer.get('Filter/Components'),
                entityTypes: this.app.objectContainer.get('Entity/Register'),
                productsQueryVars: this.app.objectContainer.get('ProductsQueryVars'),
                productsLoopProperties: this.app.objectContainer.get('ProductsLoopProperties')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "builders", {
        get: function () {
            return {
                component: this.app.componentRegister.get('Filter/Builder/Component')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "componentBuilder", {
        get: function () {
            return this.app.objectContainer.get('ComponentBuilder');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "entityCollector", {
        get: function () {
            return this.app.componentRegister.get('Entity/Collector');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "localizedMessages", {
        get: function () {
            return this.app.objectContainer.get('Messages');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "appSelectors", {
        get: function () {
            return this.app.objectContainer.get('Selectors');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "filterPackage", {
        get: function () {
            return this.app.packageRegister.get('Filter/Package');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "wooData", {
        get: function () {
            return this.app.objectContainer.get('WooData');
        },
        enumerable: true,
        configurable: true
    });
    return ElementComponent;
}(ElementComponent_1.default));
exports.default = ElementComponent;


/***/ }),
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
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __webpack_require__(184);
var frontApp = new Application_1.default();
frontApp.initialization();
window.wcpfFrontApp = frontApp;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __webpack_require__(93);
var PackageBuilder_1 = __webpack_require__(94);
var ComponentBuilder_1 = __webpack_require__(95);
var Package_1 = __webpack_require__(96);
var Package_2 = __webpack_require__(185);
var Package_3 = __webpack_require__(195);
var Package_4 = __webpack_require__(221);
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Application.prototype.initialization = function () {
        var packageBuilder = new PackageBuilder_1.default(), componentBuilder = new ComponentBuilder_1.default();
        this.objectContainer.set('ComponentBuilder', componentBuilder);
        packageBuilder.build(new Package_1.default(), this);
        packageBuilder.build(new Package_2.default(), this);
        packageBuilder.build(new Package_3.default(), this);
        packageBuilder.build(new Package_4.default(), this);
    };
    return Application;
}(Application_1.default));
exports.default = Application;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var ApplicationEvent_1 = __webpack_require__(16);
var Package_1 = __webpack_require__(186);
var Dispatcher_1 = __webpack_require__(192);
var ComponentBuilder_1 = __webpack_require__(194);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initFilterEvent = new ApplicationEvent_1.default();
        return _this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('ProductsQueryVars', new Map());
        this.app.objectContainer.set('ProductsLoopProperties', new Map());
        this.app.packageRegister.set('Filter/Package', this);
        this.app.objectContainer.set('Filter/Components', new Map());
        this.app.objectContainer.set('Filter/Component/Prototypes', new Map());
    };
    Package.prototype.getInitialSubpackages = function () {
        return [
            new Package_1.default()
        ];
    };
    Package.prototype.getInitialComponents = function () {
        return [
            new Dispatcher_1.default(),
            new ComponentBuilder_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Package_1 = __webpack_require__(187);
var Registration_1 = __webpack_require__(189);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.packageRegister.set('Project/Package', this);
    };
    Package.prototype.getInitialSubpackages = function () {
        return [
            new Package_1.default()
        ];
    };
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var QueryNavigation_1 = __webpack_require__(134);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('Project/URLNavigation/Prototypes', new Map([
            ['query', QueryNavigation_1.default]
        ]));
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var NavigationAbstract = (function (_super) {
    __extends(NavigationAbstract, _super);
    function NavigationAbstract() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navigationOptions = {};
        return _this;
    }
    NavigationAbstract.prototype.attachEvents = function (manager) { };
    return NavigationAbstract;
}(ComponentAbstract_1.default));
exports.default = NavigationAbstract;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(190);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('Project', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = __webpack_require__(66);
var CreateElement_1 = __webpack_require__(8);
var Notes_1 = __webpack_require__(191);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterComponent.prototype.initialProperties = function () {
        _super.prototype.initialProperties.call(this);
        this.productsElement = null;
        var notesElement = this.getNotesElement();
        if (notesElement) {
            this.filterNotes = this.componentBuilder.build(Notes_1.default);
            this.filterNotes.project = this.project;
            this.filterNotes.componentElement = this.getNotesElement();
            this.componentBuilder.implementation(this.filterNotes, this.package);
        }
    };
    FilterComponent.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addSystemHandler(this.project.beforeLoadingProductPageEvent, this.beforeLoadingProductPage);
        manager.addSystemHandler(this.project.afterLoadingProductPageEvent, this.afterLoadingProductPage);
        manager.addSystemHandler(this.project.productPageLoadedEvent, this.onProductPageLoaded);
        this.attachEventsToPageParts(manager);
    };
    FilterComponent.prototype.attachEventsToPageParts = function (manager) {
        if (this.options.get('paginationAjax')
            && this.options.get('useComponents').indexOf('pagination') != -1
            && this.getPaginationElement()) {
            manager.addElementHandler(this.getPaginationElement(), 'click', 'a', this.onPaginationClick);
        }
        if (this.options.get('sortingAjax')
            && this.options.get('useComponents').indexOf('sorting') != -1
            && this.getSortingElement()) {
            manager.addElementHandler(this.getSortingElement(), 'submit', this.onSortingSubmit);
            manager.addElementHandler(this.getSortingElement(), 'change', '.orderby', this.onSortingChange);
        }
    };
    FilterComponent.prototype.getThemePartSelector = function (part) {
        if (!this.app.objectContainer.has('ThemeSelectors')) {
            return null;
        }
        if (this.app.objectContainer.get('ThemeSelectors').hasOwnProperty(part)) {
            return this.app.objectContainer.get('ThemeSelectors')[part];
        }
        return null;
    };
    FilterComponent.prototype.getBreadcrumbSelectors = function () {
        return [
            this.options.get('breadcrumbSelector'),
            this.appSelectors.breadcrumb
        ];
    };
    FilterComponent.prototype.getSortingSelectors = function () {
        var selectors = [
            this.options.get('sortingSelector'),
            this.appSelectors.sorting
        ];
        if (this.getThemePartSelector('sorting')) {
            selectors.push(this.getThemePartSelector('sorting'));
        }
        return selectors;
    };
    FilterComponent.prototype.getResultCountSelectors = function () {
        var selectors = [
            this.options.get('resultCountSelector'),
            this.appSelectors.resultCount
        ];
        if (this.getThemePartSelector('resultCount')) {
            selectors.push(this.getThemePartSelector('resultCount'));
        }
        return selectors;
    };
    FilterComponent.prototype.getPaginationSelectors = function () {
        var selectors = [
            this.options.get('paginationSelector'),
            this.appSelectors.paginationContainer
        ];
        if (this.getThemePartSelector('paginationContainer')) {
            selectors.push(this.getThemePartSelector('paginationContainer'));
        }
        return selectors;
    };
    FilterComponent.prototype.getProductsSelectors = function () {
        var selectors = [
            ".wcpf-products-container-" + this.entity.entityId,
            this.options.get('productsContainerSelector'),
            this.appSelectors.productsContainer
        ];
        if (this.options.get('multipleContainersForProducts')) {
            selectors[0] += ',' + this.options.get('productsContainerSelector');
        }
        return selectors;
    };
    FilterComponent.prototype.getNotesSelectors = function () {
        return [
            ".wcpf-filter-notes-" + this.entity.entityId,
            ".wcpf-filter-notes-default"
        ];
    };
    FilterComponent.prototype.getPageTitleSelectors = function () {
        return [
            this.options.get('pageTitleSelector'),
            this.appSelectors.pageTitle
        ];
    };
    FilterComponent.prototype.getBreadcrumbElement = function () {
        return this.findElementBySelectors(this.getBreadcrumbSelectors());
    };
    FilterComponent.prototype.getNotesElement = function () {
        return this.findElementBySelectors(this.getNotesSelectors());
    };
    FilterComponent.prototype.getPaginationElement = function () {
        return this.findElementBySelectors(this.getPaginationSelectors());
    };
    FilterComponent.prototype.getSortingElement = function () {
        return this.findElementBySelectors(this.getSortingSelectors());
    };
    FilterComponent.prototype.getResultCountElement = function () {
        return this.findElementBySelectors(this.getResultCountSelectors());
    };
    FilterComponent.prototype.getPageTitleElement = function () {
        return this.findElementBySelectors(this.getPageTitleSelectors());
    };
    FilterComponent.prototype.getProductsElement = function () {
        if (this.productsElement) {
            return this.productsElement;
        }
        return this.findElementBySelectors(this.getProductsSelectors());
    };
    FilterComponent.prototype.setProductsElement = function (productsElement) {
        this.productsElement = productsElement;
    };
    FilterComponent.prototype.beforeLoadingProductPage = function () {
        jQuery.blockUI({
            message: null
        });
    };
    FilterComponent.prototype.afterLoadingProductPage = function () {
        jQuery.unblockUI();
    };
    FilterComponent.prototype.prepareComponentElement = function (componentKey, prevElement, newElement) {
        if (componentKey == 'pagination') {
            if (prevElement.attr('style') && !newElement.attr('style')) {
                newElement.attr('style', prevElement.attr('style'));
            }
        }
    };
    FilterComponent.prototype.onProductPageLoaded = function (args) {
        var e_1, _a;
        var documentElement = CreateElement_1.default(args.page.documentElement), useComponents = this.options.get('useComponents'), components = [{
                selectors: this.getPaginationSelectors(),
                componentKey: 'pagination',
                element: this.getPaginationElement()
            }, {
                selectors: this.getResultCountSelectors(),
                componentKey: 'results-count',
                element: this.getResultCountElement()
            }, {
                selectors: this.getSortingSelectors(),
                componentKey: 'sorting',
                element: this.getSortingElement()
            }, {
                selectors: this.getPageTitleSelectors(),
                componentKey: 'page-title',
                element: this.getPageTitleElement()
            }, {
                selectors: this.getBreadcrumbSelectors(),
                componentKey: 'breadcrumb',
                element: this.getBreadcrumbElement()
            }];
        try {
            for (var _b = __values(components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                if (useComponents.indexOf(component.componentKey) == -1 || !component.element) {
                    continue;
                }
                component.element.html('');
                if (component.selectors[0].indexOf(',') != -1) {
                    var componentSelectors = component.selectors[0].split(',');
                    for (var i in componentSelectors) {
                        var newComponentElement = this.findElementBySelectors([
                            componentSelectors[i]
                        ], documentElement), currentComponentElement = this.findElementBySelectors([
                            componentSelectors[i]
                        ]);
                        if (currentComponentElement && newComponentElement) {
                            this.prepareComponentElement(component.componentKey, currentComponentElement, newComponentElement.first());
                            currentComponentElement.replaceWith(newComponentElement.first());
                        }
                    }
                }
                else {
                    var newComponentElement = this.findElementBySelectors(component.selectors, documentElement);
                    if (newComponentElement) {
                        this.prepareComponentElement(component.componentKey, component.element, newComponentElement.first());
                        component.element.replaceWith(newComponentElement.first());
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var productsElement = this.getProductsElement();
        if (!productsElement || !productsElement.length) {
            productsElement = this.findContainerElementForProducts(this.app.bodyElement);
        }
        if (productsElement) {
            var newProductsElement = this.findElementBySelectors(this.getProductsSelectors(), documentElement);
            if (!newProductsElement || !newProductsElement.length) {
                newProductsElement = this.findContainerElementForProducts(documentElement);
            }
            if (newProductsElement) {
                if (this.options.get('multipleContainersForProducts')
                    && newProductsElement.length > 1
                    && newProductsElement.length == productsElement.length) {
                    newProductsElement.each(function (index, newProductsDom) {
                        jQuery(productsElement.get(index)).replaceWith(jQuery(newProductsDom));
                    });
                }
                else {
                    newProductsElement = newProductsElement.first();
                    productsElement.replaceWith(newProductsElement);
                }
                this.setProductsElement(newProductsElement);
                this.updateImageHeightForSafari();
            }
            else {
                productsElement.html('');
            }
        }
        this.attachEventsToPageParts(this.eventManager);
        var scrollTop = window.WCPFData.scrollTop;
        if (scrollTop == 'yes' && this.productsElement) {
            jQuery('html,body').stop().animate({
                scrollTop: this.productsElement.offset().top - (jQuery(window).height() / 3.5)
            }, 500, 'swing');
        }
    };
    FilterComponent.prototype.findContainerElementForProducts = function (rootElement) {
        var containerElements = [], entityElements = [
            rootElement.find('.product.type-product').filter('[class^="post-"],[class*=" post-"]'),
            rootElement.find('.product-category.product')
        ];
        for (var entityIndex in entityElements) {
            var itemsElements = entityElements[entityIndex];
            if (!itemsElements.length) {
                continue;
            }
            itemsElements.each(function (index, itemDomElement) {
                var itemElement = jQuery(itemDomElement), containerElement = itemElement.parent(), exists = false;
                for (var i in containerElements) {
                    if (jQuery(containerElements[i]).is(containerElement)) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    containerElements.push(containerElement.get(0));
                }
            });
        }
        if (containerElements.length) {
            return jQuery(containerElements);
        }
        return null;
    };
    FilterComponent.prototype.updateImageHeightForSafari = function () {
        var productsElement = this.getProductsElement();
        if (productsElement) {
            productsElement.find('img').each(function (index, imageDomElement) {
                imageDomElement.outerHTML = imageDomElement.outerHTML;
            });
        }
    };
    FilterComponent.prototype.onPaginationClick = function (event) {
        event.preventDefault();
        var linkElement = CreateElement_1.default(event.currentTarget), pageLink = linkElement.attr('href');
        if (pageLink) {
            this.project.goToPageNumberByUrl(pageLink);
        }
    };
    FilterComponent.prototype.onSortingChange = function (event) {
        var sortingElement = CreateElement_1.default(event.currentTarget), sorting = sortingElement.val();
        if (sorting) {
            this.project.applySortingToProducts(sorting);
        }
    };
    FilterComponent.prototype.onSortingSubmit = function (event) {
        event.preventDefault();
    };
    FilterComponent.prototype.findElementBySelectors = function (selectors, rootElement) {
        var e_2, _a;
        try {
            for (var _b = __values(selectors.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selector = _c.value;
                var elements = rootElement ? rootElement.find(selector) : CreateElement_1.default(selector);
                if (elements.length) {
                    return elements;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    };
    return FilterComponent;
}(BaseComponent_1.default));
exports.default = FilterComponent;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementComponent_1 = __webpack_require__(135);
var Compare_1 = __webpack_require__(67);
var ArrayCompare_1 = __webpack_require__(75);
var CreateElement_1 = __webpack_require__(8);
var CreateElementByEvent_1 = __webpack_require__(55);
var Notes = (function (_super) {
    __extends(Notes, _super);
    function Notes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Notes.prototype, "notesListElement", {
        get: function () {
            return this.componentElement.find('.wcpf-note-list');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notes.prototype, "notesItemsElement", {
        get: function () {
            return this.notesListElement.find('.wcpf-note-item');
        },
        enumerable: true,
        configurable: true
    });
    Notes.prototype.attachEvents = function (manager) {
        manager.addElementHandler(this.componentElement, 'click', '.remove-filter', this.onRemoveFilterClick);
        this.eventManager.addSystemHandler(this.project.applyFilterValueEvent, this.onApplyFilterValue);
        this.eventManager.addSystemHandler(this.project.removeFilterValueEvent, this.onRemoveFilterValue);
    };
    Notes.prototype.onRemoveFilterValue = function (props) {
        var filterComponent = props.filterComponent;
        this.notesItemsElement.each(function (index, domElement) {
            var noteElement = CreateElement_1.default(domElement), noteEntry = noteElement.data('wcpf-note-entry');
            if (filterComponent.entity.entityId == noteEntry.filterComponent.entity.entityId) {
                noteElement.remove();
            }
        });
    };
    Notes.prototype.onApplyFilterValue = function (props) {
        var e_1, _a;
        var filterComponent = props.filterComponent;
        if ('collectFilterNotes' in filterComponent) {
            var newEntries_1 = filterComponent.collectFilterNotes(props.value, props.filterKey), isEmptyEntries_1 = !newEntries_1.length;
            this.notesItemsElement.each(function (index, domElement) {
                var e_2, _a;
                var noteElement = CreateElement_1.default(domElement), noteEntry = noteElement.data('wcpf-note-entry'), indexNoteInFilters = -1;
                if (filterComponent.entity.entityId != noteEntry.filterComponent.entity.entityId) {
                    return;
                }
                try {
                    for (var _b = __values(newEntries_1.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), i = _d[0], newEntry = _d[1];
                        var valueEquals = false;
                        if (typeof newEntry.filterValue != typeof noteEntry.filterValue) {
                            continue;
                        }
                        else if (Array.isArray(newEntry.filterValue)
                            && ArrayCompare_1.default(newEntry.filterValue, noteEntry.filterValue)) {
                            valueEquals = true;
                        }
                        else if (typeof newEntry.filterValue == 'object'
                            && Compare_1.default(newEntry.filterValue, noteEntry.filterValue)) {
                            valueEquals = true;
                        }
                        else {
                            valueEquals = newEntry.filterValue == noteEntry.filterValue;
                        }
                        if (valueEquals && newEntry.mark == noteEntry.mark) {
                            indexNoteInFilters = i;
                            break;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                if (indexNoteInFilters == -1 || isEmptyEntries_1) {
                    noteElement.remove();
                }
                else {
                    newEntries_1.splice(indexNoteInFilters, 1);
                }
            });
            if (newEntries_1.length) {
                try {
                    for (var _b = __values(newEntries_1.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var entry = _c.value;
                        this.addEntry(entry);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
    };
    Notes.prototype.onRemoveFilterClick = function (event) {
        var targetElement = CreateElementByEvent_1.default(event), noteElement = targetElement.parents('.wcpf-note-item:first'), noteEntry = noteElement.data('wcpf-note-entry');
        if (noteEntry && noteEntry.filterComponent && 'removeFilterValueByFilterNote' in noteEntry.filterComponent) {
            noteEntry.filterComponent.removeFilterValueByFilterNote(noteEntry);
        }
    };
    Notes.prototype.addEntry = function (entry) {
        var templateElement = CreateElement_1.default("\n            <div class=\"wcpf-note-item\">\n                <span class=\"note-text\">" + entry.text + "</span>\n                <span class=\"remove-filter\"></span>\n            </div>\n        ");
        templateElement.data('wcpf-note-entry', entry);
        this.notesListElement.append(templateElement);
    };
    return Notes;
}(ElementComponent_1.default));
exports.default = Notes;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var Project_1 = __webpack_require__(193);
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dispatcher.prototype.initialProperties = function () {
        this.app.componentRegister.set('Filter/Dispatcher', this);
    };
    Dispatcher.prototype.attachEvents = function (manager) {
        manager.addWindowHandler('load', this.onWindowLoaded);
    };
    Dispatcher.prototype.expansionSupport = function () {
        if (Array.prototype.hasOwnProperty('compare')) {
            var compare = Array.prototype.compare;
            delete Array.prototype.compare;
            Object.defineProperty(Array.prototype, 'compare', {
                value: compare,
                enumerable: false
            });
        }
    };
    Dispatcher.prototype.onWindowLoaded = function (event) {
        this.expansionSupport();
        var filterData = window.WCPFData;
        this.app.objectContainer.set('IsPaged', filterData.isPaged);
        this.app.objectContainer.set('Messages', filterData.messages);
        this.app.objectContainer.set('Selectors', filterData.selectors);
        this.app.objectContainer.set('PageUrl', filterData.pageUrl);
        this.app.objectContainer.set('WooData', {
            priceFormat: filterData.priceFormat
        });
        for (var entryIndex in filterData.registerEntities) {
            var entryData = filterData.registerEntities[entryIndex];
            this.register.entityTypes.set(entryIndex, {
                id: entryData.id,
                label: entryData.label,
                isGrouped: entryData.is_grouped,
                defaultOptions: entryData.default_options
            });
        }
        this.filterPackage.initFilterEvent.trigger(this.prototypes);
    };
    Dispatcher.prototype.loadProject = function (projectStructure) {
        var projectEntity = this.entityCollector.collectEntityByStructure(projectStructure);
        if (this.register.components.has(projectStructure.entityId)) {
            return;
        }
        var project = new Project_1.default();
        project.projectComponent = this.builders.component.createComponent(projectEntity, project);
        this.assignDocumentElementForFilterComponent(project.projectComponent);
        this.builders.component.implementationComponent(project.projectComponent);
        this.componentBuilder.implementation(project, this.package);
        project.initEvent.trigger(project);
    };
    Dispatcher.prototype.assignDocumentElementForFilterComponent = function (filterComponent) {
        filterComponent.componentElement = this.app.bodyElement.find(".wcpf-front-element-" + filterComponent.entity.entityId);
        for (var i in filterComponent.childFilterComponents) {
            this.assignDocumentElementForFilterComponent(filterComponent.childFilterComponents[i]);
        }
    };
    return Dispatcher;
}(ComponentAbstract_1.default));
exports.default = Dispatcher;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var ApplicationEvent_1 = __webpack_require__(16);
var ExtendObject_1 = __webpack_require__(15);
var CreateElement_1 = __webpack_require__(8);
var QueryNavigation_1 = __webpack_require__(134);
var Project = (function (_super) {
    __extends(Project, _super);
    function Project() {
        var _this = _super.call(this) || this;
        _this.initEvent = new ApplicationEvent_1.default();
        _this.productPageLoadedEvent = new ApplicationEvent_1.default();
        _this.beforeLoadingProductPageEvent = new ApplicationEvent_1.default();
        _this.afterLoadingProductPageEvent = new ApplicationEvent_1.default();
        _this.applyFilterValueEvent = new ApplicationEvent_1.default();
        _this.removeFilterValueEvent = new ApplicationEvent_1.default();
        _this.productPageRequest = null;
        _this.activeFilters = {};
        _this.componentKeys = new Map();
        return _this;
    }
    Object.defineProperty(Project.prototype, "projectId", {
        get: function () {
            return this.projectComponent.entity.entityId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectOptions", {
        get: function () {
            return this.projectComponent.options;
        },
        enumerable: true,
        configurable: true
    });
    Project.prototype.initialProperties = function () {
        this.pageUrl = this.app.objectContainer.get('PageUrl');
        this.urlNavigator = this.componentBuilder.build(QueryNavigation_1.default, this.package);
        this.urlNavigator.navigationOptions = ExtendObject_1.default(this.urlNavigator.navigationOptions, this.projectOptions.get('urlNavigationOptions'));
    };
    Project.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.initEvent, this.onInit);
        if (this.app.objectContainer.get('IsPaged')) {
            this.eventManager.addSystemHandler(this.beforeLoadingProductPageEvent, this.resetPaginationUrl);
        }
    };
    Project.prototype.resetPaginationUrl = function () {
        var attributes = this.urlNavigator.getAllAttributes();
        if (attributes && attributes.hasOwnProperty('product-page')) {
            delete attributes['product-page'];
        }
        if (attributes && attributes.hasOwnProperty('paged')) {
            delete attributes['paged'];
        }
        var newUrl = this.urlNavigator.setAllAttributesToUrl(this.pageUrl, attributes);
        this.replacePageUrl(newUrl);
        this.eventManager.removeSystemHandler(this.beforeLoadingProductPageEvent, this.resetPaginationUrl);
    };
    Project.prototype.onInit = function () {
        var _this = this;
        this.eachComponents(function (filterComponent) {
            var e_1, _a;
            if (!('getFilterKeys' in filterComponent)) {
                return;
            }
            var keys = filterComponent.getFilterKeys();
            try {
                for (var _b = __values(Object.values(keys)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var filterKey = _c.value;
                    if (_this.urlNavigator.hasAttribute(filterKey)) {
                        var filterValue = _this.urlNavigator.getAttribute(filterKey);
                        _this.activeFilters[filterKey] = filterValue;
                        _this.applyFilterValueEvent.trigger({
                            filterComponent: filterComponent,
                            filterKey: filterKey,
                            value: filterValue
                        });
                    }
                    _this.componentKeys.set(filterKey, filterComponent);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        var urlAttributes = Object.keys(this.activeFilters);
        urlAttributes.push('product-page');
        urlAttributes.push('paged');
        this.pageUrl = this.urlNavigator.removeAllAttributesFromUrl(this.pageUrl, urlAttributes);
    };
    Project.prototype.removeFilterValue = function (filterComponent, filterKey) {
        if (!this.activeFilters.hasOwnProperty(filterKey)) {
            return;
        }
        delete this.activeFilters[filterKey];
        this.removeFilterValueEvent.trigger({
            filterComponent: filterComponent,
            filterKey: filterKey
        });
        if (this.projectOptions.get('filteringStarts') == 'auto') {
            this.urlNavigator.removeAttribute(filterKey);
            this.applyFilters();
        }
    };
    Project.prototype.applyFilterValue = function (filterComponent, filterKey, value) {
        this.activeFilters[filterKey] = value;
        this.applyFilterValueEvent.trigger({
            filterComponent: filterComponent,
            filterKey: filterKey,
            value: value
        });
        if (this.projectOptions.get('filteringStarts') == 'auto') {
            this.urlNavigator.setAttribute(filterKey, value);
            this.applyFilters();
        }
    };
    Project.prototype.resetFilters = function () {
        for (var filterKey in this.activeFilters) {
            this.urlNavigator.removeAttribute(filterKey);
            if (this.componentKeys.has(filterKey)) {
                this.removeFilterValueEvent.trigger({
                    filterComponent: this.componentKeys.get(filterKey),
                    filterKey: filterKey
                });
            }
        }
        this.activeFilters = {};
        this.applyFilters();
    };
    Project.prototype.applyFilters = function (properties) {
        var _this = this;
        properties = ExtendObject_1.default({
            updateFiltersElements: true,
            applyAttributes: true
        }, typeof properties == 'object' ? properties : {});
        if (this.projectOptions.get('filteringStarts') != 'auto' && properties.applyAttributes) {
            for (var attribute in this.urlNavigator.getAllAttributes()) {
                if (this.componentKeys.has(attribute) && !this.activeFilters.hasOwnProperty(attribute)) {
                    this.urlNavigator.removeAttribute(attribute);
                }
            }
            for (var filterKey in this.activeFilters) {
                this.urlNavigator.setAttribute(filterKey, this.activeFilters[filterKey]);
            }
        }
        if (this.productPageRequest) {
            this.productPageRequest.abort();
        }
        this.beforeLoadingProductPageEvent.trigger({
            filters: this.activeFilters,
            project: this
        });
        this.app.windowElement.trigger('wcpf_before_ajax_filtering');
        this.productPageRequest = jQuery.ajax({
            url: location.href,
            type: 'GET'
        }).done(function (responseHtml) {
            var responsePage = document.implementation.createHTMLDocument(document.title);
            responsePage.documentElement.innerHTML = responseHtml;
            if (properties.updateFiltersElements) {
                _this.updateComponentElementsFromPage(responsePage);
            }
            _this.productPageLoadedEvent.trigger({
                page: responsePage,
                filters: _this.activeFilters,
                project: _this
            });
            _this.app.windowElement.trigger('wcpf_update_products');
            var scriptAfterProductsUpdate = window.WCPFData.scriptAfterProductsUpdate;
            if (scriptAfterProductsUpdate && scriptAfterProductsUpdate.length) {
                eval(scriptAfterProductsUpdate);
            }
        }).always(function () {
            _this.afterLoadingProductPageEvent.trigger({
                filters: _this.activeFilters,
                project: _this
            });
            _this.app.windowElement.trigger('wcpf_after_ajax_filtering');
        });
    };
    Project.prototype.goToPageNumberByUrl = function (url) {
        this.eventManager.removeSystemHandler(this.beforeLoadingProductPageEvent, this.resetPaginationUrl);
        this.replacePageUrl(url);
        this.applyFilters({
            updateFiltersElements: false,
            applyAttributes: false
        });
        this.eventManager.addSystemHandler(this.beforeLoadingProductPageEvent, this.resetPaginationUrl);
    };
    Project.prototype.applySortingToProducts = function (sorting) {
        this.urlNavigator.setAttribute('orderby', sorting);
        this.applyFilters({
            updateFiltersElements: false,
            applyAttributes: false
        });
    };
    Project.prototype.replacePageUrl = function (url) {
        window.history.replaceState({}, document.title, url);
    };
    Project.prototype.eachComponents = function (handler) {
        var each = function (filterComponent) {
            handler(filterComponent);
            for (var i in filterComponent.childFilterComponents) {
                each(filterComponent.childFilterComponents[i]);
            }
        };
        each(this.projectComponent);
    };
    Project.prototype.updateComponentElementsFromPage = function (page) {
        var _this = this;
        var documentElement = CreateElement_1.default(page.documentElement), projectComponentElement = documentElement.find(".wcpf-front-element-" + this.projectId);
        this.projectComponent.componentElement.replaceWith(projectComponentElement.first());
        this.projectComponent.componentElement = this.app.bodyElement.find(".wcpf-front-element-" + this.projectId);
        this.eachComponents(function (filterComponent) {
            if (filterComponent.entity.entityId == _this.projectId) {
                return;
            }
            filterComponent.componentElement = _this.projectComponent.componentElement.find(".wcpf-front-element-" + filterComponent.entity.entityId);
        });
        this.eachComponents(function (filterComponent) {
            if (!filterComponent.componentElement.length) {
                return;
            }
            filterComponent.initialPropertiesOfElement();
            filterComponent.attachElementEvents(filterComponent.eventManager);
        });
    };
    return Project;
}(ComponentAbstract_1.default));
exports.default = Project;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var ComponentBuilder = (function (_super) {
    __extends(ComponentBuilder, _super);
    function ComponentBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentBuilder.prototype.initialProperties = function () {
        this.app.componentRegister.set('Filter/Builder/Component', this);
    };
    ComponentBuilder.prototype.attachEvents = function (manager) { };
    ComponentBuilder.prototype.createComponent = function (entity, project) {
        if (!this.prototypes.component.has(entity.entityKey)) {
            throw new Error("Component prototype by entity key '" + entity.entityKey + "' not found");
        }
        var componentPrototype = this.prototypes.component.get(entity.entityKey), filterComponent = this.componentBuilder.build(componentPrototype);
        filterComponent.entity = entity;
        filterComponent.project = project;
        for (var i in entity.childEntities) {
            var childEntity = entity.childEntities[i];
            filterComponent.childFilterComponents.push(this.createComponent(childEntity, project));
        }
        this.register.components.set(entity.entityId, filterComponent);
        return filterComponent;
    };
    ComponentBuilder.prototype.implementationComponent = function (filterComponent) {
        this.componentBuilder.implementation(filterComponent, this.package);
        for (var i in filterComponent.childFilterComponents) {
            this.implementationComponent(filterComponent.childFilterComponents[i]);
        }
    };
    return ComponentBuilder;
}(ComponentAbstract_1.default));
exports.default = ComponentBuilder;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Package_1 = __webpack_require__(196);
var Package_2 = __webpack_require__(200);
var Package_3 = __webpack_require__(203);
var Package_4 = __webpack_require__(206);
var Package_5 = __webpack_require__(209);
var Package_6 = __webpack_require__(212);
var Package_7 = __webpack_require__(215);
var Package_8 = __webpack_require__(218);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialSubpackages = function () {
        return [
            new Package_1.default(),
            new Package_2.default(),
            new Package_3.default(),
            new Package_4.default(),
            new Package_5.default(),
            new Package_6.default(),
            new Package_7.default(),
            new Package_8.default()
        ];
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(197);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(198);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('CheckBoxListField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var CreateElement_1 = __webpack_require__(8);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "itemElements", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-checkbox-item');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        var trigger_selectors = [];
        if (this.componentElement.hasClass('wcpf-hierarchical-collapsed')) {
            trigger_selectors.push('.wcpf-checkbox-item.wcpf-item-hierarchical-collapsed:not(.disabled) > .wcpf-item-inner > .wcpf-item-label .wcpf-input-container');
            trigger_selectors.push('.wcpf-checkbox-item:not(.disabled,.wcpf-item-hierarchical-collapsed)> .wcpf-item-inner > .wcpf-item-label');
        }
        else {
            trigger_selectors.push('.wcpf-checkbox-item:not(.disabled) .wcpf-checkbox-label');
        }
        manager.addElementHandler(this.componentElement.find(trigger_selectors.join(',')), 'click', this.onLabelClick);
    };
    FilterComponent.prototype.onLabelClick = function (event) {
        var labelElement = CreateElement_1.default(event.currentTarget), itemElement = labelElement.parents('.wcpf-checkbox-item:first');
        itemElement.toggleClass('checked');
        labelElement.find('.wcpf-input')
            .prop('checked', itemElement.hasClass('checked'));
        itemElement.parents('.wcpf-checkbox-item.checked').each(this.uncheckElement);
        itemElement.find('.wcpf-checkbox-item.checked').each(this.uncheckElement);
        this.updateValueFromElement(this.getFieldKey());
    };
    FilterComponent.prototype.uncheckElement = function (elementIndex, domElement) {
        var element = jQuery(domElement), key = element.data('item-key');
        element.removeClass('checked');
        element.find(".wcpf-input[value=\"" + key + "\"]")
            .prop('checked', false);
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        var e_1, _a;
        if (value == null) {
            value = '';
        }
        this.itemElements.find('.wcpf-input')
            .prop('checked', false);
        this.itemElements.filter('.checked')
            .removeClass('checked');
        if (typeof value == 'string') {
            value = [value];
        }
        if (Array.isArray(value)) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    var inputElement = this.itemElements.find(".wcpf-input[value=\"" + item + "\"]"), itemElement = inputElement.parents('.wcpf-checkbox-item:first');
                    inputElement.prop('checked', true);
                    itemElement.addClass('checked');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        var list = [];
        this.itemElements.filter('.checked').each(function (index, domElement) {
            var itemElement = CreateElement_1.default(domElement);
            list.push(itemElement.data('item-key'));
        });
        return list;
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        var values = this.getDocumentElementValue(this.getFieldKey()), itemIndex = values.indexOf(noteEntry.filterValue);
        if (itemIndex != -1) {
            values.splice(itemIndex, 1);
            this.setDocumentElementValue(this.getFieldKey(), values);
            if (values.length) {
                this.applyFilterValue(this.getFieldKey(), values);
            }
            else {
                this.removeFilterValue(this.getFieldKey());
            }
        }
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var e_2, _a;
        var entries = [];
        if (typeof filterValue == 'string') {
            filterValue = [filterValue];
        }
        if (Array.isArray(filterValue)) {
            try {
                for (var _b = __values(filterValue.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var itemElement = this.itemElements.filter("[data-item-key=\"" + item + "\"]"), labelElement = itemElement.find('.wcpf-checkbox-label:first');
                    if (itemElement.length && labelElement.length) {
                        entries.push(new Entry_1.default({
                            filterComponent: this,
                            filterValue: item,
                            text: labelElement.find('.wcpf-title').html()
                        }));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = __webpack_require__(66);
var FilteringComponentAbstract = (function (_super) {
    __extends(FilteringComponentAbstract, _super);
    function FilteringComponentAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilteringComponentAbstract.prototype.getFilterKeysList = function () {
        return Object.values(this.getFilterKeys());
    };
    FilteringComponentAbstract.prototype.getFilterKeyByIndex = function (filterIndex) {
        var keys = this.getFilterKeys();
        if (keys.hasOwnProperty(filterIndex)) {
            return keys[filterIndex];
        }
        return null;
    };
    FilteringComponentAbstract.prototype.applyFilterValue = function (filterKey, value) {
        this.project.applyFilterValue(this, filterKey, value);
    };
    FilteringComponentAbstract.prototype.removeFilterValue = function (filterKey) {
        this.project.removeFilterValue(this, filterKey);
    };
    return FilteringComponentAbstract;
}(BaseComponent_1.default));
exports.default = FilteringComponentAbstract;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(201);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(202);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('RadioListField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var CreateElement_1 = __webpack_require__(8);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "itemElements", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-radio-item');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.initialProperties = function () {
        _super.prototype.initialProperties.call(this);
    };
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        var trigger_selectors = [];
        if (this.componentElement.hasClass('wcpf-hierarchical-collapsed')) {
            trigger_selectors.push('.wcpf-radio-item.wcpf-item-hierarchical-collapsed:not(.disabled) > .wcpf-item-inner > .wcpf-item-label .wcpf-input-container');
            trigger_selectors.push('.wcpf-radio-item:not(.disabled,.wcpf-item-hierarchical-collapsed)> .wcpf-item-inner > .wcpf-item-label');
        }
        else {
            trigger_selectors.push('.wcpf-radio-item:not(.disabled) .wcpf-radio-label');
        }
        manager.addElementHandler(this.componentElement.find(trigger_selectors.join(',')), 'click', this.onLabelClick);
    };
    FilterComponent.prototype.onLabelClick = function (event) {
        var labelElement = CreateElement_1.default(event.currentTarget), itemElement = labelElement.parents('.wcpf-radio-item:first');
        this.itemElements.find('.wcpf-input')
            .prop('checked', false);
        this.itemElements.filter('.checked')
            .removeClass('checked');
        labelElement.find('.wcpf-input')
            .prop('checked', true);
        itemElement.addClass('checked');
        this.updateValueFromElement(this.getFieldKey());
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        if (value == null) {
            value = '';
        }
        this.itemElements.find('.wcpf-input')
            .prop('checked', false);
        this.itemElements.filter('.checked')
            .removeClass('checked');
        var itemElement = this.itemElements.filter("[data-item-key=\"" + value + "\"]"), inputElement = itemElement.find(".wcpf-input:first");
        inputElement.prop('checked', true);
        itemElement.addClass('checked');
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        return this.itemElements.filter('.checked').data('item-key');
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        this.resetDocumentElementValue(this.getFieldKey());
        this.removeFilterValue(this.getFieldKey());
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var entries = [];
        if (filterValue != null && typeof filterValue == 'string') {
            var itemElement = this.itemElements.filter("[data-item-key=\"" + filterValue + "\"]"), labelElement = itemElement.find('.wcpf-radio-label:first');
            if (!itemElement.length) {
                return entries;
            }
            entries.push(new Entry_1.default({
                filterComponent: this,
                filterValue: filterValue,
                text: labelElement.find('.wcpf-title').html()
            }));
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(204);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(205);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('DropDownListField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "inputElement", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-input');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.initialPropertiesOfElement = function () {
        var _this = this;
        _super.prototype.initialPropertiesOfElement.call(this);
        var wcDropDownElements = this.componentElement.find('.wcpf-drop-down-style-woocommerce');
        if (jQuery.fn.hasOwnProperty('selectWoo')) {
            wcDropDownElements.selectWoo({
                minimumResultsForSearch: 5,
                width: '100%',
                allowClear: false,
                placeholder: this.options.get('titleItemReset'),
                language: {
                    noResults: function () {
                        return _this.localizedMessages.selectNoMatchesFound;
                    }
                }
            });
        }
    };
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        manager.addElementHandler(this.componentElement.find('.wcpf-input'), 'change', this.updateValueFromElement);
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        if (value == null) {
            value = '';
        }
        this.inputElement.val(value);
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        return this.inputElement.val();
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        this.resetDocumentElementValue(this.getFieldKey());
        this.removeFilterValue(this.getFieldKey());
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var entries = [];
        if (filterValue != null && typeof filterValue == 'string') {
            var optionElement = this.inputElement.find("option[value=\"" + filterValue + "\"]");
            if (!optionElement.length) {
                return entries;
            }
            entries.push(new Entry_1.default({
                filterComponent: this,
                filterValue: filterValue,
                text: optionElement.data('title')
            }));
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(207);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(208);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('ButtonField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = __webpack_require__(66);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        manager.addElementHandler(this.componentElement, 'click', '.wcpf-button', this.onButtonClick);
    };
    FilterComponent.prototype.onButtonClick = function (event) {
        var action = this.options.get('action');
        if (action == 'filter') {
            this.project.applyFilters();
        }
        else if (action == 'reset') {
            this.project.resetFilters();
        }
    };
    return FilterComponent;
}(BaseComponent_1.default));
exports.default = FilterComponent;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(210);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(211);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('PriceSliderField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var Context_1 = __webpack_require__(24);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "minInputElement", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-min-input');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "maxInputElement", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-max-input');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "sliderElement", {
        get: function () {
            return this.componentElement.find('.priceSliderInput');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterComponent.prototype, "labelElement", {
        get: function () {
            return this.componentElement.find('.priceLabel');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.getFilterKeys = function () {
        var filterKeys = {};
        if (this.options.get('optionKeyFormat') == 'dash') {
            filterKeys.price = this.options.get('optionKey');
        }
        else if (this.options.get('optionKeyFormat') == 'two') {
            filterKeys.minPrice = this.options.get('minPriceOptionKey');
            filterKeys.maxPrice = this.options.get('maxPriceOptionKey');
        }
        return filterKeys;
    };
    FilterComponent.prototype.initialPropertiesOfElement = function () {
        _super.prototype.initialPropertiesOfElement.call(this);
        this.sliderElement.show();
        if (this.componentElement.hasClass('wcpf-display-price-label')) {
            this.labelElement.show();
        }
        var min = parseFloat(this.minInputElement.data('min')), max = parseFloat(this.maxInputElement.data('max')), minValue = parseFloat(this.minInputElement.val()), maxValue = parseFloat(this.maxInputElement.val());
        this.sliderElement.slider({
            range: true,
            animate: true,
            min: min,
            max: max,
            values: [minValue, maxValue],
            stop: Context_1.default(this.onSlideStop, this),
            slide: Context_1.default(this.onSlideMove, this)
        });
        this.setPriceLabel(minValue, maxValue);
        if (this.componentElement.hasClass('wcpf-box-style') && this.componentElement.hasClass('wcpf-box-hide')) {
            this.componentElement.find('.wcpf-content').slideUp(300);
        }
    };
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        this.attachMinMaxInputEvents();
        this.eventManager.addElementHandler(this.componentElement, 'keypress keyup blur', '.wcpf-price-slider-min-max-inputs .wcpf-input', this.onMinMaxInputKeyChange);
    };
    FilterComponent.prototype.attachMinMaxInputEvents = function () {
        this.eventManager.addElementHandler(this.componentElement, 'change', '.wcpf-price-slider-min-max-inputs .wcpf-input', this.onMinMaxInputChange);
    };
    FilterComponent.prototype.detachMinMaxInputEvents = function () {
        this.eventManager.removeElementHandler(this.componentElement, 'change', '.wcpf-price-slider-min-max-inputs .wcpf-input', this.onMinMaxInputChange);
    };
    FilterComponent.prototype.resetDocumentElementValue = function (filterKey) {
        var min = parseFloat(this.minInputElement.data('min')), max = parseFloat(this.maxInputElement.data('max'));
        if (this.getFilterKeyByIndex('price') == filterKey) {
            this.setDocumentElementValue(filterKey, min + '-' + max);
        }
        else if (this.getFilterKeyByIndex('minPrice') == filterKey) {
            this.setDocumentElementValue(filterKey, min);
        }
        else if (this.getFilterKeyByIndex('maxPrice') == filterKey) {
            this.setDocumentElementValue(filterKey, max);
        }
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        this.detachMinMaxInputEvents();
        if (this.getFilterKeyByIndex('price') == filterKey) {
            var items = value.split('-');
            this.minInputElement.val(items[0]);
            if (items.length > 1) {
                this.maxInputElement.val(items[1]);
            }
        }
        else if (this.getFilterKeyByIndex('minPrice') == filterKey) {
            this.minInputElement.val(value);
        }
        else if (this.getFilterKeyByIndex('maxPrice') == filterKey) {
            this.maxInputElement.val(value);
        }
        this.updateSliderRangeValue();
        this.attachMinMaxInputEvents();
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        var min = this.getMinValue(), max = this.getMaxValue();
        if (this.getFilterKeyByIndex('price') == filterKey) {
            return min + '-' + max;
        }
        else if (this.getFilterKeyByIndex('minPrice') == filterKey) {
            return min;
        }
        else if (this.getFilterKeyByIndex('maxPrice') == filterKey) {
            return max;
        }
        return '';
    };
    FilterComponent.prototype.updateSliderRangeValue = function () {
        var min = parseFloat(this.minInputElement.val()), max = parseFloat(this.maxInputElement.val());
        this.sliderElement.slider('values', [min, max]);
        this.setPriceLabel(min, max);
    };
    FilterComponent.prototype.onMinMaxInputKeyChange = function (event) {
        var inputElement = jQuery(event.currentTarget), value = inputElement.val();
        this.detachMinMaxInputEvents();
        inputElement.val(value.replace(/[^\d].+/, ''));
        if (event.which < 48 || event.which > 57) {
            event.preventDefault();
        }
        this.attachMinMaxInputEvents();
    };
    FilterComponent.prototype.onMinMaxInputChange = function (event) {
        var inputElement = jQuery(event.currentTarget), filterKey = null;
        if (this.options.get('optionKeyFormat') == 'dash') {
            filterKey = this.getFilterKeyByIndex('price');
        }
        else if (this.options.get('optionKeyFormat') == 'two') {
            filterKey = inputElement.hasClass('wcpf-min-input')
                ? this.getFilterKeyByIndex('minPrice')
                : this.getFilterKeyByIndex('maxPrice');
        }
        this.updateSliderRangeValue();
        if (filterKey) {
            this.applyFilterValue(filterKey, this.getDocumentElementValue(filterKey));
        }
    };
    FilterComponent.prototype.onSlideMove = function (event, ui) {
        this.minInputElement.val(ui.values[0]);
        this.maxInputElement.val(ui.values[1]);
        this.updateSliderRangeValue();
    };
    FilterComponent.prototype.onSlideStop = function (event, ui) {
        var filterKey = null;
        if (this.options.get('optionKeyFormat') == 'dash') {
            filterKey = this.getFilterKeyByIndex('price');
        }
        else if (this.options.get('optionKeyFormat') == 'two') {
            var isMaxHandle = jQuery(ui.handle).is(':last-child');
            filterKey = isMaxHandle ? this.getFilterKeyByIndex('maxPrice') : this.getFilterKeyByIndex('minPrice');
        }
        if (filterKey) {
            this.applyFilterValue(filterKey, this.getDocumentElementValue(filterKey));
        }
    };
    FilterComponent.prototype.getPriceText = function (min) {
        return window.accounting.formatMoney(min, {
            symbol: this.wooData.priceFormat.currencyFormatSymbol,
            decimal: this.wooData.priceFormat.currencyFormatDecimalSep,
            thousand: this.wooData.priceFormat.currencyFormatThousandSep,
            precision: this.wooData.priceFormat.currencyFormatNumDecimals,
            format: this.wooData.priceFormat.currencyFormat
        });
    };
    FilterComponent.prototype.setPriceLabel = function (min, max) {
        var accounting = window.accounting;
        this.labelElement.find('.from').html(this.getPriceText(min));
        this.labelElement.find('.to').html(this.getPriceText(max));
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        var e_1, _a;
        try {
            for (var _b = __values(this.getFilterKeysList()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var filterKey = _c.value;
                this.resetDocumentElementValue(filterKey);
                this.removeFilterValue(filterKey);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    FilterComponent.prototype.getMaxValue = function () {
        var maxValue = this.maxInputElement.val();
        if (maxValue == '') {
            maxValue = this.maxInputElement.data('max');
        }
        return maxValue;
    };
    FilterComponent.prototype.getMinValue = function () {
        var minValue = this.minInputElement.val();
        if (minValue == '') {
            minValue = this.minInputElement.data('min');
        }
        return minValue;
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var entries = [];
        if (filterValue != null && typeof filterValue == 'string') {
            var min = this.getMinValue(), max = this.getMaxValue();
            entries.push(new Entry_1.default({
                filterComponent: this,
                filterValue: filterValue,
                text: this.getPriceText(min) + ' - ' + this.getPriceText(max)
            }));
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(213);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(214);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('BoxListField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var CreateElement_1 = __webpack_require__(8);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "itemElements", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-box-item');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        manager.addElementHandler(this.componentElement.find('.wcpf-box-item:not(.disabled)'), 'click', this.onClickItem);
    };
    FilterComponent.prototype.onClickItem = function (event) {
        var itemElement = CreateElement_1.default(event.currentTarget);
        if (!this.options.get('multiSelect')) {
            this.itemElements
                .filter('.selected')
                .not("[data-value=\"" + itemElement.data('value') + "\"]")
                .removeClass('selected');
        }
        itemElement.toggleClass('selected');
        this.updateValueFromElement(this.getFieldKey());
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        var e_1, _a;
        if (value == null) {
            value = '';
        }
        this.itemElements.filter('.selected').removeClass('selected');
        if (typeof value == 'string') {
            value = [value];
        }
        if (Array.isArray(value)) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    this.itemElements.filter("[data-value=\"" + item + "\"]").addClass('selected');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        var list = [];
        this.itemElements.filter('.selected').each(function (index, domElement) {
            var itemElement = CreateElement_1.default(domElement);
            list.push(itemElement.data('value'));
        });
        return list;
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        var values = this.getDocumentElementValue(this.getFieldKey()), itemIndex = values.indexOf(noteEntry.filterValue);
        if (itemIndex != -1) {
            values.splice(itemIndex, 1);
            this.setDocumentElementValue(this.getFieldKey(), values);
            if (values.length) {
                this.applyFilterValue(this.getFieldKey(), values);
            }
            else {
                this.removeFilterValue(this.getFieldKey());
            }
        }
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var e_2, _a;
        var entries = [];
        if (typeof filterValue == 'string') {
            filterValue = [filterValue];
        }
        if (Array.isArray(filterValue)) {
            try {
                for (var _b = __values(filterValue.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var boxElement = this.itemElements.filter("[data-value=\"" + item + "\"]"), titleElement = boxElement.find('.wcpf-title');
                    if (boxElement.length && titleElement.length) {
                        entries.push(new Entry_1.default({
                            filterComponent: this,
                            filterValue: item,
                            text: titleElement.html()
                        }));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(216);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(217);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('TextListField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var CreateElement_1 = __webpack_require__(8);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "itemElements", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-text-item');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        manager.addElementHandler(this.componentElement.find('.wcpf-text-item:not(.disabled) .wcpf-text-label'), 'click', this.onLabelClick);
    };
    FilterComponent.prototype.onLabelClick = function (event) {
        var labelElement = jQuery(event.currentTarget), itemElement = labelElement.parents('.wcpf-text-item:first');
        if (!this.options.get('multiSelect')) {
            this.itemElements
                .filter('.selected')
                .not("[data-value=\"" + itemElement.data('value') + "\"]")
                .removeClass('selected');
        }
        itemElement.toggleClass('selected');
        itemElement.parents('.wcpf-text-item.selected').each(this.uncheckElement);
        itemElement.find('.wcpf-text-item.selected').each(this.uncheckElement);
        this.updateValueFromElement(this.getFieldKey());
    };
    FilterComponent.prototype.uncheckElement = function (elementIndex, domElement) {
        var element = jQuery(domElement), key = element.data('value');
        element.removeClass('selected');
        element.find(".wcpf-input[value=\"" + key + "\"]")
            .prop('checked', false);
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        var e_1, _a;
        if (value == null) {
            value = '';
        }
        this.itemElements.filter('.selected')
            .removeClass('selected');
        if (typeof value == 'string') {
            value = [value];
        }
        if (Array.isArray(value)) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    this.itemElements.filter("[data-value=\"" + item + "\"]").addClass('selected');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        var list = [];
        this.itemElements.filter('.selected').each(function (index, domElement) {
            var itemElement = CreateElement_1.default(domElement);
            list.push(itemElement.data('value'));
        });
        return list;
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        var values = this.getDocumentElementValue(this.getFieldKey()), itemIndex = values.indexOf(noteEntry.filterValue);
        if (itemIndex != -1) {
            values.splice(itemIndex, 1);
            this.setDocumentElementValue(this.getFieldKey(), values);
            if (values.length) {
                this.applyFilterValue(this.getFieldKey(), values);
            }
            else {
                this.removeFilterValue(this.getFieldKey());
            }
        }
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var e_2, _a;
        var entries = [];
        if (typeof filterValue == 'string') {
            filterValue = [filterValue];
        }
        if (Array.isArray(filterValue)) {
            try {
                for (var _b = __values(filterValue.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var boxElement = this.itemElements.filter("[data-value=\"" + item + "\"]"), titleElement = boxElement.find('.wcpf-title');
                    if (titleElement.length && boxElement.length) {
                        entries.push(new Entry_1.default({
                            filterComponent: this,
                            filterValue: item,
                            text: titleElement.html()
                        }));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(219);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(220);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('ColorListField', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FieldComponentAbstract_1 = __webpack_require__(44);
var Entry_1 = __webpack_require__(45);
var CreateElement_1 = __webpack_require__(8);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "itemElements", {
        get: function () {
            return this.activeComponentElement.find('.wcpf-color-item');
        },
        enumerable: true,
        configurable: true
    });
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        manager.addElementHandler(this.componentElement.find('.wcpf-color-item:not(.disabled)').filter(':not(.disabled)'), 'click', this.onClickItem);
    };
    FilterComponent.prototype.onClickItem = function (event) {
        var itemElement = CreateElement_1.default(event.currentTarget);
        if (!this.options.get('multiSelect')) {
            this.itemElements
                .filter('.selected')
                .not("[data-value=\"" + itemElement.data('value') + "\"]")
                .removeClass('selected');
        }
        itemElement.toggleClass('selected');
        this.updateValueFromElement(this.getFieldKey());
    };
    FilterComponent.prototype.setDocumentElementValue = function (filterKey, value) {
        var e_1, _a;
        if (value == null) {
            value = '';
        }
        this.itemElements.filter('.selected').removeClass('selected');
        if (typeof value == 'string') {
            value = [value];
        }
        if (Array.isArray(value)) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    this.itemElements.filter("[data-value=\"" + item + "\"]").addClass('selected');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    FilterComponent.prototype.getDocumentElementValue = function (filterKey) {
        var list = [];
        this.itemElements.filter('.selected').each(function (index, domElement) {
            var itemElement = CreateElement_1.default(domElement);
            list.push(itemElement.data('value'));
        });
        return list;
    };
    FilterComponent.prototype.removeFilterValueByFilterNote = function (noteEntry) {
        var values = this.getDocumentElementValue(this.getFieldKey()), itemIndex = values.indexOf(noteEntry.filterValue);
        if (itemIndex != -1) {
            values.splice(itemIndex, 1);
            this.setDocumentElementValue(this.getFieldKey(), values);
            if (values.length) {
                this.applyFilterValue(this.getFieldKey(), values);
            }
            else {
                this.removeFilterValue(this.getFieldKey());
            }
        }
    };
    FilterComponent.prototype.collectFilterNotes = function (filterValue, filterKey) {
        var e_2, _a;
        var entries = [];
        if (typeof filterValue == 'string') {
            filterValue = [filterValue];
        }
        if (Array.isArray(filterValue)) {
            try {
                for (var _b = __values(filterValue.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var boxElement = this.itemElements.filter("[data-value=\"" + item + "\"]"), title = boxElement.data('title');
                    if (boxElement.length && title) {
                        entries.push(new Entry_1.default({
                            filterComponent: this,
                            filterValue: item,
                            text: title
                        }));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return entries;
    };
    return FilterComponent;
}(FieldComponentAbstract_1.default));
exports.default = FilterComponent;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Package_1 = __webpack_require__(222);
var Package_2 = __webpack_require__(224);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialSubpackages = function () {
        return [
            new Package_1.default(),
            new Package_2.default()
        ];
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(223);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var BaseComponent_1 = __webpack_require__(66);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('ColumnsLayout', BaseComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PackageAbstract_1 = __webpack_require__(1);
var Registration_1 = __webpack_require__(225);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Registration_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentAbstract_1 = __webpack_require__(13);
var FilterComponent_1 = __webpack_require__(226);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.filterPackage.initFilterEvent, this.initFilter);
    };
    Registration.prototype.initFilter = function (prototypes) {
        prototypes.component.set('SimpleBoxLayout', FilterComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = __webpack_require__(66);
var FilterComponent = (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterComponent.prototype.initialPropertiesOfElement = function () {
        _super.prototype.initialPropertiesOfElement.call(this);
        if (this.componentState.has('box')) {
            if (this.componentState.get('box') == 'hide') {
                this.componentElement.addClass('wcpf-box-hide');
                this.componentElement.find('.wcpf-content:first').slideUp(0);
            }
            else {
                this.componentElement.removeClass('wcpf-box-hide');
                this.componentElement.find('.wcpf-content:first').slideDown(0);
            }
        }
        else if (this.componentElement.hasClass('wcpf-box-style') && this.componentElement.hasClass('wcpf-box-hide')) {
            this.componentElement.find('.wcpf-content:first').slideUp(300);
        }
    };
    FilterComponent.prototype.attachElementEvents = function (manager) {
        _super.prototype.attachElementEvents.call(this, manager);
        if (this.componentElement.hasClass('wcpf-box-style')) {
            manager.addElementHandler(this.componentElement, 'click', '.wcpf-heading-label:first', this.onBoxToggleClick);
        }
    };
    FilterComponent.prototype.onBoxToggleClick = function (event) {
        this.componentElement.toggleClass('wcpf-box-hide');
        if (this.componentElement.hasClass('wcpf-box-hide')) {
            this.componentElement.find('.wcpf-content:first').slideUp(300);
            this.componentState.set('box', 'hide');
        }
        else {
            this.componentElement.find('.wcpf-content:first').slideDown(300);
            this.componentState.set('box', 'show');
        }
    };
    return FilterComponent;
}(BaseComponent_1.default));
exports.default = FilterComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=plugin.js.map