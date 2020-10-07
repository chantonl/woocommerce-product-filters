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
/******/ 	return __webpack_require__(__webpack_require__.s = 227);
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
/* 9 */
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
                projection: this.app.objectContainer.get('Editor/Projection/Prototypes'),
                panelLayout: this.app.objectContainer.get('Editor/PanelLayout/Prototypes'),
                panel: this.app.objectContainer.get('Editor/Panel/Prototypes'),
                component: this.app.objectContainer.get('Editor/Component/Prototypes'),
                control: this.app.objectContainer.get('Editor/Control/Prototypes'),
                controlSource: this.app.objectContainer.get('Editor/Control/Source/Prototypes')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "register", {
        get: function () {
            return {
                panelStructures: this.app.objectContainer.get('Editor/Panel/Structures'),
                components: this.app.objectContainer.get('Editor/Components'),
                entityTypes: this.app.objectContainer.get('Entity/Register'),
                componentPresets: this.app.objectContainer.get('Editor/Component/Presets'),
                controlRulesOperations: this.app.objectContainer.get('Editor/Control/RulesOperation')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "builders", {
        get: function () {
            return {
                control: this.app.componentRegister.get('Editor/Builder/Control'),
                panel: this.app.componentRegister.get('Editor/Builder/Panel'),
                panelLayout: this.app.componentRegister.get('Editor/Builder/PanelLayout'),
                projection: this.app.componentRegister.get('Editor/Builder/Projection'),
                component: this.app.componentRegister.get('Editor/Builder/Component')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "projectEditorComponent", {
        get: function () {
            return this.app.objectContainer.get('Editor/ProjectComponent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "projectEntity", {
        get: function () {
            return this.app.objectContainer.get('Editor/ProjectEntity');
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
    Object.defineProperty(ComponentAbstract.prototype, "editorPackage", {
        get: function () {
            return this.app.packageRegister.get('Editor/Package');
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
    Object.defineProperty(ComponentAbstract.prototype, "panelManager", {
        get: function () {
            return this.app.componentRegister.get('Editor/PanelManager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "projectionManager", {
        get: function () {
            return this.app.componentRegister.get('Editor/ProjectionManager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentAbstract.prototype, "templateLoader", {
        get: function () {
            return this.app.componentRegister.get('TemplateLoader');
        },
        enumerable: true,
        configurable: true
    });
    return ComponentAbstract;
}(ComponentAbstract_1.default));
exports.default = ComponentAbstract;


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
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
/* 37 */
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
var BaseControl_1 = __webpack_require__(56);
var AbstractInputControl = (function (_super) {
    __extends(AbstractInputControl, _super);
    function AbstractInputControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAttached = false;
        return _this;
    }
    Object.defineProperty(AbstractInputControl.prototype, "controlElement", {
        get: function () {
            return this.componentElement.find('.control-element');
        },
        enumerable: true,
        configurable: true
    });
    AbstractInputControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
        this.isAttached = true;
    };
    AbstractInputControl.prototype.restoreDefaultOptionValue = function (needCheckValue) {
        _super.prototype.restoreDefaultOptionValue.call(this, needCheckValue);
        if (!this.isAttached && this.optionValue) {
            this.setElementValue(this.optionValue);
        }
    };
    AbstractInputControl.prototype.onValueChangedEvent = function (args) {
        this.setElementValue(args.value);
    };
    AbstractInputControl.prototype.restoreOptionValue = function () {
        _super.prototype.restoreOptionValue.call(this);
        this.setElementValue(this.optionValueProp);
    };
    AbstractInputControl.prototype.updateValueFromElement = function () {
        this.optionValue = this.getElementValue();
    };
    return AbstractInputControl;
}(BaseControl_1.default));
exports.default = AbstractInputControl;


/***/ }),
/* 38 */
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
var BaseProjection_1 = __webpack_require__(141);
var FieldProjection = (function (_super) {
    __extends(FieldProjection, _super);
    function FieldProjection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FieldProjection.prototype, "titleElement", {
        get: function () {
            return this.componentElement.find('.entity-title');
        },
        enumerable: true,
        configurable: true
    });
    FieldProjection.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        this.addElementHandler('click', '.actions-wrapper .edit-action', this.onEditClick);
        this.addElementHandler('click', '.actions-wrapper .remove-action', this.onRemoveClick);
        manager.addSystemHandler(this.editorComponent.titleChangedEvent, this.onTitleChanged);
    };
    FieldProjection.prototype.onRemoveClick = function (event) {
        this.projectionManager.removeProjection(this.editorComponent, true);
    };
    FieldProjection.prototype.onEditClick = function (event) {
        this.panelManager.openPanel(this.editorComponent.entityKey, {}, this.editorComponent.entityId);
    };
    FieldProjection.prototype.onTitleChanged = function (args) {
        this.titleElement.html(args.title);
    };
    FieldProjection.prototype.getTemplateContext = function () {
        return {
            entity: this.entity
        };
    };
    return FieldProjection;
}(BaseProjection_1.default));
exports.default = FieldProjection;


/***/ }),
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
/* 44 */,
/* 45 */,
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
/* 56 */
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
var ElementComponent_1 = __webpack_require__(76);
var ApplicationEvent_1 = __webpack_require__(16);
var ArrayCompare_1 = __webpack_require__(75);
var Compare_1 = __webpack_require__(67);
var PanelStatus_1 = __webpack_require__(68);
var BaseControl = (function (_super) {
    __extends(BaseControl, _super);
    function BaseControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parentControl = null;
        _this.contextControls = new Map();
        _this.valueChangedEvent = new ApplicationEvent_1.default();
        return _this;
    }
    Object.defineProperty(BaseControl.prototype, "panel", {
        get: function () {
            return this.panelLayout.panel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseControl.prototype, "controlKey", {
        get: function () {
            return this.controlStructure.controlKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseControl.prototype, "controlLabel", {
        get: function () {
            return this.controlStructure.controlLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseControl.prototype, "optionKey", {
        get: function () {
            return this.controlStructure.optionKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseControl.prototype, "optionValue", {
        get: function () {
            return this.optionValueProp;
        },
        set: function (value) {
            var oldValue = this.optionValueProp, isEqual = true;
            this.optionValueProp = value;
            if (typeof oldValue != typeof value) {
                isEqual = false;
            }
            else if (oldValue && Array.isArray(oldValue) && !ArrayCompare_1.default(oldValue, value)) {
                isEqual = false;
            }
            else if (oldValue && !Array.isArray(oldValue) && typeof oldValue == 'object' && !Compare_1.default(oldValue, value)) {
                isEqual = false;
            }
            else if (typeof oldValue != 'object' && oldValue != value) {
                isEqual = false;
            }
            if (!isEqual) {
                this.valueChangedEvent.trigger({
                    oldValue: oldValue,
                    value: value,
                    control: this
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseControl.prototype, "isActiveControl", {
        get: function () {
            return !this.componentElement.hasClass('control-inactive');
        },
        set: function (isActive) {
            if (isActive) {
                this.componentElement.removeClass('control-inactive');
                this.showControlElement();
            }
            else {
                this.componentElement.addClass('control-inactive');
                this.hideControlElement();
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseControl.prototype.showControlElement = function () {
        this.componentElement.slideDown(400);
    };
    BaseControl.prototype.hideControlElement = function () {
        this.componentElement.slideUp(400);
    };
    BaseControl.prototype.getEmptyValue = function () {
        return null;
    };
    BaseControl.prototype.saveOptionValue = function () {
        this.controlSource.saveValue();
    };
    BaseControl.prototype.restoreOptionValue = function () {
        this.optionValueProp = this.controlSource.getValue();
    };
    BaseControl.prototype.initialProperties = function () {
        this.restoreOptionValue();
        if (this.panel.status != PanelStatus_1.default.None) {
            this.initializeDisplayRules();
        }
    };
    BaseControl.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.panel.statusChangedEvent, this.onPanelStatusChanged);
    };
    BaseControl.prototype.restoreDefaultOptionValue = function (needCheckValue) {
        if (this.controlStructure.defaultValue && ((needCheckValue && this.optionValue == undefined) || !needCheckValue)) {
            this.optionValue = this.controlStructure.defaultValue;
        }
    };
    BaseControl.prototype.initializeDisplayRules = function () {
        if (typeof this.controlStructure.displayRules == 'object' && Object.keys(this.controlStructure.displayRules).length) {
            this.attachObserversAccordingToRules(this.controlStructure.displayRules);
            this.checkDisplayRules();
        }
        else {
            this.restoreDefaultOptionValue(true);
        }
    };
    BaseControl.prototype.onPanelStatusChanged = function (args) {
        if (args.status == PanelStatus_1.default.Launched) {
            this.initializeDisplayRules();
        }
    };
    BaseControl.prototype.attachObserversAccordingToRules = function (rules) {
        if ((rules.hasOwnProperty('relation') && rules.length - 1 === 0)
            || (!rules.hasOwnProperty('relation') && rules.length === 0)) {
            return;
        }
        for (var i in rules) {
            var rule = rules[i];
            if (i == 'relation') {
                continue;
            }
            if (rule.hasOwnProperty('relation')
                || !rule.hasOwnProperty('optionKey')) {
                this.attachObserversAccordingToRules(rule);
            }
            else {
                var control = this.getControlByOptionKey(rule.optionKey);
                if (!control) {
                    continue;
                }
                this.eventManager.addSystemHandler(control.valueChangedEvent, this.checkDisplayRules);
            }
        }
    };
    BaseControl.prototype.checkDisplayRules = function () {
        this.isActiveControl = this.checkRules(this.controlStructure.displayRules);
        if (this.isActiveControl) {
            this.restoreDefaultOptionValue(true);
        }
    };
    BaseControl.prototype.checkRules = function (rules) {
        var relation = 'AND', rulesLength = Object.keys(rules).length;
        if (rules.hasOwnProperty('relation')) {
            relation = rules.relation;
            rulesLength--;
        }
        if (!rulesLength) {
            return true;
        }
        for (var i in rules) {
            if (i == 'relation') {
                continue;
            }
            var rule = rules[i], resultOperation = null;
            if (rule.hasOwnProperty('relation')
                || !rule.hasOwnProperty('optionKey')) {
                resultOperation = this.checkRules(rule);
            }
            else {
                var control = this.getControlByOptionKey(rule.optionKey);
                if (!control) {
                    continue;
                }
                var controlValue = control.optionValue, operation = rule.operation;
                if (!this.register.controlRulesOperations.has(operation)) {
                    continue;
                }
                var operationHandler = this.register.controlRulesOperations.get(operation);
                resultOperation = operationHandler(controlValue, rule);
            }
            if (relation == 'AND' && !resultOperation) {
                return false;
            }
            else if (relation == 'OR' && resultOperation) {
                return true;
            }
        }
        return relation == 'AND';
    };
    BaseControl.prototype.getControlByOptionKey = function (optionKey) {
        if (this.contextControls.has(optionKey)) {
            return this.contextControls.get(optionKey);
        }
        if (this.parentControl instanceof BaseControl) {
            var parent_1 = this.parentControl, resultControl = null;
            while (parent_1) {
                resultControl = parent_1.getControlByOptionKey(optionKey);
                if (resultControl instanceof BaseControl) {
                    return resultControl;
                }
                if (parent_1.parentControl instanceof BaseControl) {
                    parent_1 = parent_1.parentControl;
                }
                else {
                    break;
                }
            }
        }
        if (this.panelLayout.controls.has(optionKey)) {
            return this.panelLayout.controls.get(optionKey);
        }
        return null;
    };
    return BaseControl;
}(ElementComponent_1.default));
exports.default = BaseControl;


/***/ }),
/* 57 */
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
var ValidationPanel_1 = __webpack_require__(276);
var EditorComponentPanel = (function (_super) {
    __extends(EditorComponentPanel, _super);
    function EditorComponentPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorComponentPanel.prototype.createOptionsRepository = function () {
        return this.editorComponent.options;
    };
    return EditorComponentPanel;
}(ValidationPanel_1.default));
exports.default = EditorComponentPanel;


/***/ }),
/* 58 */
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
var EditorComponentPanel_1 = __webpack_require__(57);
var ExtendObject_1 = __webpack_require__(15);
var FieldListPanel = (function (_super) {
    __extends(FieldListPanel, _super);
    function FieldListPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldListPanel.prototype.getValidatorOptions = function () {
        return ExtendObject_1.default(_super.prototype.getValidatorOptions.call(this), {
            rules: {
                entityTitle: {
                    required: true,
                    minlength: 2
                },
                optionKey: {
                    required: true,
                    filterKeyText: true,
                    filterKeyUniquer: true,
                    minlength: 2
                },
                itemsSource: {
                    required: true
                },
                itemsSourceAttribute: {
                    requiredIfActiveControl: true
                },
                itemsSourceCategory: {
                    requiredIfActiveControl: true
                },
                itemsSourceTaxonomy: {
                    requiredIfActiveControl: true
                },
                itemsDisplay: {
                    requiredIfActiveControl: true
                },
                queryType: {
                    requiredIfActiveControl: true
                },
                titleItemReset: {
                    requiredIfActiveControl: true,
                    minlength: 2
                },
            }
        });
    };
    return FieldListPanel;
}(EditorComponentPanel_1.default));
exports.default = FieldListPanel;


/***/ }),
/* 59 */
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
var FieldComponent_1 = __webpack_require__(107);
var FieldListComponent = (function (_super) {
    __extends(FieldListComponent, _super);
    function FieldListComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldListComponent.prototype.getFilterKeys = function () {
        return [this.options.get('optionKey')];
    };
    return FieldListComponent;
}(FieldComponent_1.default));
exports.default = FieldListComponent;


/***/ }),
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
/* 66 */,
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PanelStatus;
(function (PanelStatus) {
    PanelStatus[PanelStatus["Launched"] = 0] = "Launched";
    PanelStatus[PanelStatus["Active"] = 1] = "Active";
    PanelStatus[PanelStatus["Inactive"] = 2] = "Inactive";
    PanelStatus[PanelStatus["Destroyed"] = 3] = "Destroyed";
    PanelStatus[PanelStatus["None"] = 4] = "None";
})(PanelStatus || (PanelStatus = {}));
exports.default = PanelStatus;


/***/ }),
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
/* 76 */
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
                projection: this.app.objectContainer.get('Editor/Projection/Prototypes'),
                panelLayout: this.app.objectContainer.get('Editor/PanelLayout/Prototypes'),
                panel: this.app.objectContainer.get('Editor/Panel/Prototypes'),
                component: this.app.objectContainer.get('Editor/Component/Prototypes'),
                control: this.app.objectContainer.get('Editor/Control/Prototypes'),
                controlSource: this.app.objectContainer.get('Editor/Control/Source/Prototypes')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "register", {
        get: function () {
            return {
                panelStructures: this.app.objectContainer.get('Editor/Panel/Structures'),
                components: this.app.objectContainer.get('Editor/Components'),
                entityTypes: this.app.objectContainer.get('Entity/Register'),
                componentPresets: this.app.objectContainer.get('Editor/Component/Presets'),
                controlRulesOperations: this.app.objectContainer.get('Editor/Control/RulesOperation')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "builders", {
        get: function () {
            return {
                control: this.app.componentRegister.get('Editor/Builder/Control'),
                panel: this.app.componentRegister.get('Editor/Builder/Panel'),
                panelLayout: this.app.componentRegister.get('Editor/Builder/PanelLayout'),
                projection: this.app.componentRegister.get('Editor/Builder/Projection'),
                component: this.app.componentRegister.get('Editor/Builder/Component')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "projectEditorComponent", {
        get: function () {
            return this.app.objectContainer.get('Editor/ProjectComponent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "projectEntity", {
        get: function () {
            return this.app.objectContainer.get('Editor/ProjectEntity');
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
    Object.defineProperty(ElementComponent.prototype, "editorPackage", {
        get: function () {
            return this.app.packageRegister.get('Editor/Package');
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
    Object.defineProperty(ElementComponent.prototype, "panelManager", {
        get: function () {
            return this.app.componentRegister.get('Editor/PanelManager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "projectionManager", {
        get: function () {
            return this.app.componentRegister.get('Editor/ProjectionManager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementComponent.prototype, "templateLoader", {
        get: function () {
            return this.app.componentRegister.get('TemplateLoader');
        },
        enumerable: true,
        configurable: true
    });
    return ElementComponent;
}(ElementComponent_1.default));
exports.default = ElementComponent;


/***/ }),
/* 77 */
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
var PanelStatus_1 = __webpack_require__(68);
function ReloadControl(target) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.needReloadControl = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "controlLoader", {
            get: function () {
                return this.app.componentRegister.get('Editor/Control/ControlLoader');
            },
            enumerable: true,
            configurable: true
        });
        class_1.prototype.initialProperties = function () {
            _super.prototype.initialProperties.call(this);
            if (this.panel.status != PanelStatus_1.default.None) {
                this.initializeReloadRules();
            }
        };
        class_1.prototype.checkDisplayRules = function () {
            _super.prototype.checkDisplayRules.call(this);
            if (this.needReloadControl && this.isActiveControl) {
                this.controlLoader.reloadControl(this);
                this.needReloadControl = false;
            }
        };
        class_1.prototype.onPanelStatusChanged = function (args) {
            _super.prototype.onPanelStatusChanged.call(this, args);
            if (args.status == PanelStatus_1.default.Launched) {
                this.initializeReloadRules();
            }
        };
        class_1.prototype.initializeReloadRules = function () {
            var _this = this;
            var e_1, _a;
            var structure = this.controlStructure;
            if (structure.reloadAfterInit) {
                if (this.checkRules(this.controlStructure.displayRules)) {
                    this.controlLoader.reloadControl(this, function () {
                        _this.restoreOptionValue();
                    });
                }
                else {
                    this.needReloadControl = true;
                }
            }
            if (structure.optionsDepends) {
                try {
                    for (var _b = __values(structure.optionsDepends.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var dependOption = _c.value;
                        var dependControl = this.getControlByOptionKey(dependOption);
                        if (!dependControl) {
                            continue;
                        }
                        this.eventManager.addSystemHandler(dependControl.valueChangedEvent, function () {
                            if (_this.checkRules(_this.controlStructure.displayRules)) {
                                _this.controlLoader.reloadControl(_this, function () {
                                    if ('afterReloadDependentOption' in _this) {
                                        _this.afterReloadDependentOption();
                                    }
                                    else {
                                        _this.optionValue = _this.getEmptyValue();
                                    }
                                });
                                _this.needReloadControl = false;
                            }
                            else {
                                _this.needReloadControl = true;
                            }
                        });
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
            if ('initializeReloadRules' in target.prototype) {
                _super.prototype.initializeReloadRules.call(this);
            }
        };
        return class_1;
    }(target));
}
exports.default = ReloadControl;


/***/ }),
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObjectToArray(object) {
    var list = [];
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            list.push(object[i]);
        }
    }
    return list;
}
exports.default = ObjectToArray;


/***/ }),
/* 103 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var SourceAbstract = (function (_super) {
    __extends(SourceAbstract, _super);
    function SourceAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SourceAbstract.prototype, "panel", {
        get: function () {
            return this.control.panel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceAbstract.prototype, "optionKey", {
        get: function () {
            return this.control.optionKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceAbstract.prototype, "optionValue", {
        get: function () {
            return this.control.optionValue;
        },
        enumerable: true,
        configurable: true
    });
    SourceAbstract.prototype.attachEvents = function (manager) { };
    return SourceAbstract;
}(ComponentAbstract_1.default));
exports.default = SourceAbstract;


/***/ }),
/* 104 */
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
var SelectiveComponent_1 = __webpack_require__(265);
var SelectiveComponent = (function (_super) {
    __extends(SelectiveComponent, _super);
    function SelectiveComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectiveComponent.prototype, "prototypes", {
        get: function () {
            return {
                projection: this.app.objectContainer.get('Editor/Projection/Prototypes'),
                panelLayout: this.app.objectContainer.get('Editor/PanelLayout/Prototypes'),
                panel: this.app.objectContainer.get('Editor/Panel/Prototypes'),
                component: this.app.objectContainer.get('Editor/Component/Prototypes'),
                control: this.app.objectContainer.get('Editor/Control/Prototypes'),
                controlSource: this.app.objectContainer.get('Editor/Control/Source/Prototypes')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "register", {
        get: function () {
            return {
                panelStructures: this.app.objectContainer.get('Editor/Panel/Structures'),
                components: this.app.objectContainer.get('Editor/Components'),
                entityTypes: this.app.objectContainer.get('Entity/Register'),
                componentPresets: this.app.objectContainer.get('Editor/Component/Presets'),
                controlRulesOperations: this.app.objectContainer.get('Editor/Control/RulesOperation')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "builders", {
        get: function () {
            return {
                control: this.app.componentRegister.get('Editor/Builder/Control'),
                panel: this.app.componentRegister.get('Editor/Builder/Panel'),
                panelLayout: this.app.componentRegister.get('Editor/Builder/PanelLayout'),
                projection: this.app.componentRegister.get('Editor/Builder/Projection'),
                component: this.app.componentRegister.get('Editor/Builder/Component')
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "projectEditorComponent", {
        get: function () {
            return this.app.objectContainer.get('Editor/ProjectComponent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "projectEntity", {
        get: function () {
            return this.app.objectContainer.get('Editor/ProjectEntity');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "componentBuilder", {
        get: function () {
            return this.app.objectContainer.get('ComponentBuilder');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "entityCollector", {
        get: function () {
            return this.app.componentRegister.get('Entity/Collector');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "editorPackage", {
        get: function () {
            return this.app.packageRegister.get('Editor/Package');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "localizedMessages", {
        get: function () {
            return this.app.objectContainer.get('Messages');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "panelManager", {
        get: function () {
            return this.app.componentRegister.get('Editor/PanelManager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "projectionManager", {
        get: function () {
            return this.app.componentRegister.get('Editor/ProjectionManager');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectiveComponent.prototype, "templateLoader", {
        get: function () {
            return this.app.componentRegister.get('TemplateLoader');
        },
        enumerable: true,
        configurable: true
    });
    return SelectiveComponent;
}(SelectiveComponent_1.default));
exports.default = SelectiveComponent;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateElement_1 = __webpack_require__(8);
function ScrollPage(positionY, animationDuration) {
    var htmlElement = CreateElement_1.default('html,body');
    htmlElement.animate({
        scrollTop: positionY
    }, animationDuration);
}
exports.default = ScrollPage;


/***/ }),
/* 106 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var ApplicationEvent_1 = __webpack_require__(16);
var ObjectRepository_1 = __webpack_require__(42);
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super.call(this) || this;
        _this.options = new ObjectRepository_1.default();
        _this.titleChangedEvent = new ApplicationEvent_1.default();
        _this.parentChangedEvent = new ApplicationEvent_1.default();
        _this.statusChangedEvent = new ApplicationEvent_1.default();
        _this.orderChangedEvent = new ApplicationEvent_1.default();
        return _this;
    }
    Object.defineProperty(BaseComponent.prototype, "entityId", {
        get: function () {
            return this.entity.entityId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "entityKey", {
        get: function () {
            return this.entity.entityKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "entityTitle", {
        get: function () {
            return this.entity.title;
        },
        set: function (value) {
            var oldValue = this.entity.title;
            this.entity.title = value;
            this.titleChangedEvent.trigger({
                title: value,
                oldTitle: oldValue,
                entity: this.entity,
                editorComponent: this
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "entityParentId", {
        get: function () {
            return this.entity.parentId;
        },
        set: function (value) {
            var oldValue = this.entity.parentId;
            this.entity.parentId = value;
            this.parentChangedEvent.trigger({
                parent: value,
                oldParent: oldValue,
                entity: this.entity,
                editorComponent: this
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "entityStatus", {
        get: function () {
            return this.entity.status;
        },
        set: function (value) {
            var oldStatus = this.entity.status;
            this.entity.status = value;
            this.statusChangedEvent.trigger({
                status: value,
                oldStatus: oldStatus,
                entity: this.entity,
                editorComponent: this
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "entityOrder", {
        get: function () {
            return this.entity.order;
        },
        set: function (value) {
            var oldOrder = this.entity.order;
            this.entity.order = value;
            this.orderChangedEvent.trigger({
                order: value,
                oldOrder: oldOrder,
                entity: this.entity,
                editorComponent: this
            });
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent.prototype.initialProperties = function () {
        this.options.container = this.entity.options;
    };
    BaseComponent.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.parentChangedEvent, this.moveEntityWhenParentChange);
    };
    BaseComponent.prototype.moveEntityWhenParentChange = function (args) {
        var _this = this;
        if (!this.register.components.has(args.oldParent)
            || !this.register.components.has(args.parent)) {
            return;
        }
        var oldEditorComponent = this.register.components.get(args.oldParent), oldEntityContainer = oldEditorComponent.entity, newEditorComponent = this.register.components.get(args.parent), newEntityContainer = newEditorComponent.entity;
        oldEntityContainer.childEntities = oldEntityContainer.childEntities.filter(function (item) {
            return item.entityId != _this.entityId;
        });
        newEntityContainer.childEntities.push(this.entity);
    };
    return BaseComponent;
}(ComponentAbstract_1.default));
exports.default = BaseComponent;


/***/ }),
/* 107 */
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
var BaseComponent_1 = __webpack_require__(106);
var FieldComponent = (function (_super) {
    __extends(FieldComponent, _super);
    function FieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panels = new Set();
        _this.projection = null;
        return _this;
    }
    return FieldComponent;
}(BaseComponent_1.default));
exports.default = FieldComponent;


/***/ }),
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
/* 134 */,
/* 135 */,
/* 136 */
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
var ElementComponent_1 = __webpack_require__(76);
var ApplicationEvent_1 = __webpack_require__(16);
var PanelLayoutAbstract = (function (_super) {
    __extends(PanelLayoutAbstract, _super);
    function PanelLayoutAbstract() {
        var _this = _super.call(this) || this;
        _this.isControlsSavedProp = true;
        _this.controls = new Map();
        _this.isControlsSavedChangedEvent = new ApplicationEvent_1.default();
        return _this;
    }
    Object.defineProperty(PanelLayoutAbstract.prototype, "isControlsSaved", {
        get: function () {
            return this.isControlsSavedProp;
        },
        set: function (value) {
            var oldValue = this.isControlsSavedProp;
            this.isControlsSavedProp = value;
            if (oldValue != value) {
                this.isControlsSavedChangedEvent.trigger({
                    panelLayout: this,
                    value: value
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelLayoutAbstract.prototype, "controlBuilder", {
        get: function () {
            return this.app.componentRegister.get('Editor/Control/Builder');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelLayoutAbstract.prototype, "panelAutoSave", {
        get: function () {
            return this.panelStructure.panelAutoSave;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelLayoutAbstract.prototype, "panelId", {
        get: function () {
            return this.panelStructure.panelId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelLayoutAbstract.prototype, "panelTitle", {
        get: function () {
            return this.panelStructure.panelTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelLayoutAbstract.prototype, "controlElements", {
        get: function () {
            return this.componentElement.find('.control[data-control-type]');
        },
        enumerable: true,
        configurable: true
    });
    PanelLayoutAbstract.prototype.createControl = function (structure) {
        var control = this.builders.control.createControl(structure, this), controlElement = this.getControlElement(structure.controlKey, structure.optionKey);
        if (!controlElement.length) {
            throw new Error("Element for option '" + structure.optionKey + "' not found");
        }
        control.componentElement = controlElement;
        this.componentBuilder.implementation(control.controlSource, this.package);
        this.componentBuilder.implementation(control, this.package);
        this.eventManager.addSystemHandler(control.valueChangedEvent, this.onControlValueChanged);
        this.controls.set(control.optionKey, control);
        return control;
    };
    PanelLayoutAbstract.prototype.getControlElement = function (controlType, optionKey) {
        return this.controlElements.filter("[data-control-type=\"" + controlType + "\"][data-option-key=\"" + optionKey + "\"]");
    };
    PanelLayoutAbstract.prototype.onControlValueChanged = function (args) {
        if (this.panelAutoSave) {
            args.control.controlSource.saveValue();
            this.isControlsSaved = true;
        }
        else {
            this.isControlsSaved = false;
        }
    };
    PanelLayoutAbstract.prototype.attachEvents = function (manager) { };
    return PanelLayoutAbstract;
}(ElementComponent_1.default));
exports.default = PanelLayoutAbstract;


/***/ }),
/* 137 */
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
var InputControlAbstract_1 = __webpack_require__(37);
var RadioListControl = (function (_super) {
    __extends(RadioListControl, _super);
    function RadioListControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioListControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addPageElementHandler('change', '.control-element', this.updateValueFromElement);
    };
    RadioListControl.prototype.getEmptyValue = function () {
        return [];
    };
    RadioListControl.prototype.setElementValue = function (value) {
        var checkedElement = this.controlElement.filter(':checked');
        checkedElement.prop('checked', false);
        if (typeof value != 'string') {
            return;
        }
        var selectedElement = this.controlElement.filter("[value=\"" + value + "\"]");
        selectedElement.prop('checked', true);
    };
    RadioListControl.prototype.getElementValue = function () {
        var checkedElement = this.controlElement.filter(':checked');
        if (checkedElement.length) {
            return checkedElement.val();
        }
        return undefined;
    };
    return RadioListControl;
}(InputControlAbstract_1.default));
exports.default = RadioListControl;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(74);
function FindEntityById(id, root) {
    if (root.entityId == id) {
        return root;
    }
    var result = null, groupedList = [];
    for (var i in root.childEntities) {
        var item = root.childEntities[i];
        if (item.childEntities.length) {
            groupedList.push(item);
        }
        if (item.entityId == id) {
            result = item;
            break;
        }
    }
    if (result == null) {
        for (var i in groupedList) {
            var item = groupedList[i], itemResult = FindEntityById(id, item);
            if (itemResult instanceof Entity_1.default) {
                result = itemResult;
                break;
            }
        }
    }
    return result;
}
exports.default = FindEntityById;


/***/ }),
/* 139 */
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
var ElementComponent_1 = __webpack_require__(76);
var ApplicationEvent_1 = __webpack_require__(16);
var Context_1 = __webpack_require__(24);
var ObjectRepository_1 = __webpack_require__(42);
var PanelStatus_1 = __webpack_require__(68);
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super.call(this) || this;
        _this.optionsContainer = {};
        _this.statusProp = PanelStatus_1.default.None;
        _this.statusChangedEvent = new ApplicationEvent_1.default();
        return _this;
    }
    Object.defineProperty(BasePanel.prototype, "options", {
        get: function () {
            return this.optionsRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanel.prototype, "status", {
        get: function () {
            return this.statusProp;
        },
        set: function (value) {
            var oldStatus = this.statusProp;
            this.statusProp = value;
            if (oldStatus != value) {
                this.statusChangedEvent.trigger({
                    panel: this,
                    oldStatus: oldStatus,
                    status: this.statusProp
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanel.prototype, "isControlsSaved", {
        get: function () {
            return this.panelLayout.isControlsSaved;
        },
        set: function (value) {
            this.panelLayout.isControlsSaved = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanel.prototype, "formElement", {
        get: function () {
            return this.componentElement.find('form.panel-form');
        },
        enumerable: true,
        configurable: true
    });
    BasePanel.prototype.initialProperties = function () {
        this.optionsRepository = this.createOptionsRepository();
    };
    BasePanel.prototype.createOptionsRepository = function () {
        return new ObjectRepository_1.default(this.optionsContainer);
    };
    BasePanel.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.statusChangedEvent, this.onStatusChanged);
        if (!this.panelLayout.panelAutoSave) {
            manager.addSystemHandler(this.panelLayout.isControlsSavedChangedEvent, this.onIsControlsSavedChanged);
            this.addElementHandler('click', '.panel-navigation .reset-panel-button', this.resetValuesOfControls);
            this.addElementHandler('click', '.panel-navigation .apply-panel-button', this.saveValuesOfControls);
        }
        manager.addElementHandler(this.formElement, 'submit', this.onFormSubmit);
    };
    BasePanel.prototype.onFormSubmit = function (event) {
        event.preventDefault();
    };
    BasePanel.prototype.onStatusChanged = function (args) {
        var handlers = new Map([
            [PanelStatus_1.default.Active, 'onActive'],
            [PanelStatus_1.default.Inactive, 'onInactive'],
            [PanelStatus_1.default.Launched, 'onLaunched'],
            [PanelStatus_1.default.Destroyed, 'onDestroyed']
        ]);
        if (handlers.has(args.status) && handlers.get(args.status) in args.panel) {
            var func = args.panel[handlers.get(args.status)];
            func = Context_1.default(func, this);
            func();
        }
    };
    BasePanel.prototype.onIsControlsSavedChanged = function () {
        var resetButton = this.componentElement.find('.panel-navigation .reset-panel-button'), applyButton = this.componentElement.find('.panel-navigation .apply-panel-button');
        if (this.panelLayout.isControlsSaved) {
            resetButton.addClass('disabled');
            applyButton.addClass('disabled');
        }
        else {
            resetButton.removeClass('disabled');
            applyButton.removeClass('disabled');
        }
    };
    BasePanel.prototype.saveValuesOfControls = function () {
        var e_1, _a;
        if (this.panelLayout.isControlsSaved) {
            return;
        }
        try {
            for (var _b = __values(this.panelLayout.controls.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                control.saveOptionValue();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.panelLayout.isControlsSaved = true;
    };
    BasePanel.prototype.resetValuesOfControls = function () {
        var e_2, _a;
        if (this.panelLayout.isControlsSaved) {
            return;
        }
        try {
            for (var _b = __values(this.panelLayout.controls.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                control.restoreOptionValue();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.panelLayout.isControlsSaved = true;
    };
    BasePanel.prototype.getTemplateContext = function (panelContext) {
        return {};
    };
    return BasePanel;
}(ElementComponent_1.default));
exports.default = BasePanel;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChildProjectionDirection;
(function (ChildProjectionDirection) {
    ChildProjectionDirection[ChildProjectionDirection["inside"] = 0] = "inside";
    ChildProjectionDirection[ChildProjectionDirection["outside"] = 1] = "outside";
    ChildProjectionDirection[ChildProjectionDirection["same"] = 2] = "same";
})(ChildProjectionDirection || (ChildProjectionDirection = {}));
exports.default = ChildProjectionDirection;


/***/ }),
/* 141 */
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
var ElementComponent_1 = __webpack_require__(76);
var ApplicationEvent_1 = __webpack_require__(16);
var BaseProjection = (function (_super) {
    __extends(BaseProjection, _super);
    function BaseProjection() {
        var _this = _super.call(this) || this;
        _this.moveProjectionEvent = new ApplicationEvent_1.default();
        return _this;
    }
    BaseProjection.prototype.attachEvents = function (manager) { };
    BaseProjection.prototype.initialProjection = function () { };
    Object.defineProperty(BaseProjection.prototype, "entity", {
        get: function () {
            return this.editorComponent.entity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseProjection.prototype, "entityOptions", {
        get: function () {
            return this.editorComponent.options;
        },
        enumerable: true,
        configurable: true
    });
    BaseProjection.prototype.getTemplateContext = function () {
        return {};
    };
    return BaseProjection;
}(ElementComponent_1.default));
exports.default = BaseProjection;


/***/ }),
/* 142 */
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
var BaseComponent_1 = __webpack_require__(106);
var LayoutComponent = (function (_super) {
    __extends(LayoutComponent, _super);
    function LayoutComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panels = new Set();
        _this.projection = null;
        return _this;
    }
    return LayoutComponent;
}(BaseComponent_1.default));
exports.default = LayoutComponent;


/***/ }),
/* 143 */
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
var GroupProjectionAbstract_1 = __webpack_require__(305);
var LayoutProjectionAbstract = (function (_super) {
    __extends(LayoutProjectionAbstract, _super);
    function LayoutProjectionAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayoutProjectionAbstract.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        this.addElementHandler('click', ".actions-wrapper.entity-id-" + this.editorComponent.entityId + " .remove-action", this.onRemoveClick);
        this.addElementHandler('click', ".actions-wrapper.entity-id-" + this.editorComponent.entityId + " .edit-action", this.onEditClick);
    };
    LayoutProjectionAbstract.prototype.onRemoveClick = function (event) {
        this.projectionManager.removeProjection(this.editorComponent, true);
    };
    LayoutProjectionAbstract.prototype.onEditClick = function (event) {
        this.panelManager.openPanel(this.editorComponent.entityKey, {}, this.editorComponent.entityId);
    };
    LayoutProjectionAbstract.prototype.getTemplateContext = function () {
        return {
            entity: this.entity
        };
    };
    return LayoutProjectionAbstract;
}(GroupProjectionAbstract_1.default));
exports.default = LayoutProjectionAbstract;


/***/ }),
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
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
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
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Application_1 = __webpack_require__(228);
var adminApp = new Application_1.default();
adminApp.initialization();
window.wcpfAdminApp = adminApp;


/***/ }),
/* 228 */
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
var Package_2 = __webpack_require__(229);
var Package_3 = __webpack_require__(231);
var Package_4 = __webpack_require__(271);
var Package_5 = __webpack_require__(273);
var Package_6 = __webpack_require__(278);
var Package_7 = __webpack_require__(300);
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Application.prototype.initialization = function () {
        var packageBuilder = new PackageBuilder_1.default(), componentBuilder = new ComponentBuilder_1.default();
        this.objectContainer.set('ComponentBuilder', componentBuilder);
        packageBuilder.build(new Package_2.default(), this);
        packageBuilder.build(new Package_1.default(), this);
        packageBuilder.build(new Package_3.default(), this);
        packageBuilder.build(new Package_4.default(), this);
        packageBuilder.build(new Package_5.default(), this);
        packageBuilder.build(new Package_6.default(), this);
        packageBuilder.build(new Package_7.default(), this);
    };
    return Application;
}(Application_1.default));
exports.default = Application;


/***/ }),
/* 229 */
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
var Loader_1 = __webpack_require__(230);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Loader_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 230 */
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
var Loader = (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.initialProperties = function () {
        this.options = {
            evaluate: /<#([\s\S]+?)#>/g,
            interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
            escape: /\{\{([^\}]+?)\}\}(?!\})/g,
            variable: 'data'
        };
        this.app.componentRegister.set('TemplateLoader', this);
    };
    Loader.prototype.attachEvents = function (eventManager) { };
    Loader.prototype.loadTemplate = function (template, data) {
        if (data == undefined) {
            data = {};
        }
        var templateObject = window._.template(template, this.options);
        return templateObject(data);
    };
    return Loader;
}(ComponentAbstract_1.default));
exports.default = Loader;


/***/ }),
/* 231 */
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
var Package_1 = __webpack_require__(232);
var Package_2 = __webpack_require__(233);
var Package_3 = __webpack_require__(234);
var Package_4 = __webpack_require__(237);
var Package_5 = __webpack_require__(238);
var Package_6 = __webpack_require__(254);
var Package_7 = __webpack_require__(260);
var Dispatcher_1 = __webpack_require__(264);
var PanelManager_1 = __webpack_require__(268);
var ProjectionManager_1 = __webpack_require__(269);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initEditorEvent = new ApplicationEvent_1.default();
        _this.projectLoadedEvent = new ApplicationEvent_1.default();
        return _this;
    }
    Package.prototype.initialProperties = function () {
        this.app.packageRegister.set('Editor/Package', this);
        this.app.objectContainer.set('Editor/ProjectEntity', null);
        this.app.objectContainer.set('Editor/ProjectComponent', null);
        this.app.objectContainer.set('Editor/Components', new Map());
    };
    Package.prototype.getInitialSubpackages = function () {
        return [
            new Package_1.default(),
            new Package_2.default(),
            new Package_3.default(),
            new Package_4.default(),
            new Package_5.default(),
            new Package_6.default(),
            new Package_7.default()
        ];
    };
    Package.prototype.getInitialComponents = function () {
        return [
            new Dispatcher_1.default(),
            new ProjectionManager_1.default(),
            new PanelManager_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 232 */
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
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('Editor/Component/Prototypes', new Map());
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 233 */
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
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('Editor/Panel/Prototypes', new Map());
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 234 */
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
var TabsLayout_1 = __webpack_require__(235);
var ListLayout_1 = __webpack_require__(236);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('Editor/PanelLayout/Prototypes', new Map([
            ['Tabs', TabsLayout_1.default],
            ['List', ListLayout_1.default]
        ]));
        this.app.objectContainer.set('Editor/Panel/Structures', new Map());
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 235 */
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
var PanelLayoutAbstract_1 = __webpack_require__(136);
var CreateElement_1 = __webpack_require__(8);
var CreateElementByEvent_1 = __webpack_require__(55);
var TabsLayout = (function (_super) {
    __extends(TabsLayout, _super);
    function TabsLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsLayout.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.componentElement, 'click', '.tabs-heading-wrapper .tab-heading:not(.active-tab)', this.onTabClick);
        if ('validate' in this.panel && this.panel.hasOwnProperty('validateEvent')) {
            manager.addSystemHandler(this.panel.validateEvent, this.onValidatePanel);
        }
    };
    TabsLayout.prototype.onValidatePanel = function () {
        var _this = this;
        this.componentElement.find('.tab-content').each(function (index, domElement) {
            var e_1, _a;
            var contentElement = CreateElement_1.default(domElement), tabCode = contentElement.data('tab-id'), titleElement = _this.componentElement.find(".tab-heading[data-tab-id=\"" + tabCode + "\"]"), existsErrors = false;
            try {
                for (var _b = __values(contentElement.find('.error:not(.control-element)')), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var errorDomElement = _c.value;
                    var errorElement = CreateElement_1.default(errorDomElement);
                    if (errorElement.html().length) {
                        existsErrors = true;
                        break;
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
            if (existsErrors) {
                titleElement.addClass('exists-errors');
            }
            else {
                titleElement.removeClass('exists-errors');
            }
        });
    };
    TabsLayout.prototype.onTabClick = function (event) {
        var headingElement = CreateElementByEvent_1.default(event), tabId = headingElement.data('tab-id');
        this.componentElement.find('.tab-heading.active-tab,.tab-content.active-tab')
            .removeClass('active-tab');
        headingElement.addClass('active-tab');
        this.componentElement.find(".tab-content[data-tab-id=\"" + tabId + "\"]")
            .addClass('active-tab');
    };
    TabsLayout.prototype.assembleControls = function (structure) {
        var tabs = structure.tabs;
        for (var i in tabs) {
            var tabControls = tabs[i];
            if (!tabControls.length) {
                continue;
            }
            for (var j in tabControls) {
                var tabControl = tabControls[j];
                this.createControl(tabControl);
            }
        }
    };
    return TabsLayout;
}(PanelLayoutAbstract_1.default));
exports.default = TabsLayout;


/***/ }),
/* 236 */
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
var PanelLayoutAbstract_1 = __webpack_require__(136);
var ListLayout = (function (_super) {
    __extends(ListLayout, _super);
    function ListLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListLayout.prototype.assembleControls = function (structure) {
        var e_1, _a;
        var controls = structure.controls;
        try {
            for (var controls_1 = __values(controls), controls_1_1 = controls_1.next(); !controls_1_1.done; controls_1_1 = controls_1.next()) {
                var control = controls_1_1.value;
                this.createControl(control);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (controls_1_1 && !controls_1_1.done && (_a = controls_1.return)) _a.call(controls_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return ListLayout;
}(PanelLayoutAbstract_1.default));
exports.default = ListLayout;


/***/ }),
/* 237 */
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
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('Editor/Projection/Prototypes', new Map());
    };
    Package.prototype.getInitialComponents = function () {
        return [];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 238 */
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
var SelectControl_1 = __webpack_require__(239);
var TextControl_1 = __webpack_require__(240);
var RadioListControl_1 = __webpack_require__(137);
var TextSizeControl_1 = __webpack_require__(241);
var SwitchControl_1 = __webpack_require__(242);
var CheckListControl_1 = __webpack_require__(243);
var RepeaterControl_1 = __webpack_require__(244);
var ColorPickerControl_1 = __webpack_require__(245);
var ImageControl_1 = __webpack_require__(246);
var ColorListControl_1 = __webpack_require__(247);
var RulesBuilderControl_1 = __webpack_require__(248);
var OptionSource_1 = __webpack_require__(249);
var EntitySource_1 = __webpack_require__(250);
var ContainerSource_1 = __webpack_require__(251);
var DefaultRules_1 = __webpack_require__(252);
var ControlLoader_1 = __webpack_require__(253);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.initialProperties = function () {
        this.app.objectContainer.set('Editor/Control/Prototypes', new Map([
            ['Select', SelectControl_1.default],
            ['Text', TextControl_1.default],
            ['RadioList', RadioListControl_1.default],
            ['TextSize', TextSizeControl_1.default],
            ['Switch', SwitchControl_1.default],
            ['CheckList', CheckListControl_1.default],
            ['Repeater', RepeaterControl_1.default],
            ['ColorPicker', ColorPickerControl_1.default],
            ['Image', ImageControl_1.default],
            ['ColorList', ColorListControl_1.default],
            ['RulesBuilder', RulesBuilderControl_1.default]
        ]));
        this.app.objectContainer.set('Editor/Control/Source/Prototypes', new Map([
            ['options', OptionSource_1.default],
            ['entity', EntitySource_1.default],
            ['container', ContainerSource_1.default]
        ]));
        this.app.objectContainer.set('Editor/Control/RulesOperation', new Map());
    };
    Package.prototype.getInitialComponents = function () {
        return [
            new DefaultRules_1.default(),
            new ControlLoader_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 239 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReloadControl_1 = __webpack_require__(77);
var InputControlAbstract_1 = __webpack_require__(37);
var SelectControl = (function (_super) {
    __extends(SelectControl, _super);
    function SelectControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.componentElement, 'change', '.control-element', this.updateValueFromElement);
    };
    SelectControl.prototype.getEmptyValue = function () {
        return '';
    };
    SelectControl.prototype.setElementValue = function (value) {
        if (typeof value != 'string') {
            value = '';
        }
        this.controlElement.val(value);
    };
    SelectControl.prototype.getElementValue = function () {
        return this.controlElement.val();
    };
    SelectControl.prototype.reloadControl = function (props) {
        var newInput = props.controlElement.find('.control-element');
        this.controlElement.html(newInput.html());
    };
    SelectControl = __decorate([
        ReloadControl_1.default
    ], SelectControl);
    return SelectControl;
}(InputControlAbstract_1.default));
exports.default = SelectControl;


/***/ }),
/* 240 */
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
var InputControlAbstract_1 = __webpack_require__(37);
var TextControl = (function (_super) {
    __extends(TextControl, _super);
    function TextControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.controlElement, 'change paste keyup', this.updateValueFromElement);
    };
    TextControl.prototype.getEmptyValue = function () {
        return '';
    };
    TextControl.prototype.setElementValue = function (value) {
        if (typeof value != 'string') {
            value = '';
        }
        this.controlElement.val(value);
    };
    TextControl.prototype.getElementValue = function () {
        return this.controlElement.val();
    };
    return TextControl;
}(InputControlAbstract_1.default));
exports.default = TextControl;


/***/ }),
/* 241 */
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
var InputControlAbstract_1 = __webpack_require__(37);
var TextSizeControl = (function (_super) {
    __extends(TextSizeControl, _super);
    function TextSizeControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextSizeControl.prototype, "unitSelectElement", {
        get: function () {
            return this.componentElement.find('.select-unit');
        },
        enumerable: true,
        configurable: true
    });
    TextSizeControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.controlElement, 'change paste keyup', this.updateValueFromElement);
        manager.addElementHandler(this.unitSelectElement, 'change', this.updateValueFromElement);
    };
    TextSizeControl.prototype.updateValueFromElement = function () {
        var value = this.controlElement.val();
        value = value.replace(/[^0-9\.]/g, '');
        this.controlElement.val(value);
        _super.prototype.updateValueFromElement.call(this);
    };
    TextSizeControl.prototype.setElementValue = function (value) {
        if (typeof value == 'number') {
            value = value + '';
        }
        if (typeof value != 'string' || !value.length) {
            this.controlElement.val('');
            this.unitSelectElement.val('');
        }
        else {
            var parseValue = this.parseUnit(value);
            if ((typeof parseValue[0] == 'string' || typeof parseValue[0] == 'number') && !isNaN(parseValue[0])) {
                this.controlElement.val(parseValue[0]);
            }
            this.unitSelectElement.val(parseValue[1]);
        }
    };
    TextSizeControl.prototype.getElementValue = function () {
        var size = this.controlElement.val(), unit = this.unitSelectElement.val();
        if (size.length) {
            size = parseFloat(size);
        }
        return size + unit;
    };
    TextSizeControl.prototype.parseUnit = function (value) {
        if (typeof value != 'string') {
            return [0, ''];
        }
        return [
            parseFloat(value),
            value.match(/[\d.\-\+]*\s*(.*)/)[1] || ''
        ];
    };
    return TextSizeControl;
}(InputControlAbstract_1.default));
exports.default = TextSizeControl;


/***/ }),
/* 242 */
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
var InputControlAbstract_1 = __webpack_require__(37);
var SwitchControl = (function (_super) {
    __extends(SwitchControl, _super);
    function SwitchControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SwitchControl.prototype, "firstOption", {
        get: function () {
            return this.controlStructure.firstOption;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchControl.prototype, "secondOption", {
        get: function () {
            return this.controlStructure.secondOption;
        },
        enumerable: true,
        configurable: true
    });
    SwitchControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.controlElement, 'change', this.updateValueFromElement);
    };
    SwitchControl.prototype.setElementValue = function (value) {
        if (value == this.firstOption.value) {
            this.controlElement.prop('checked', true);
        }
        else {
            this.controlElement.prop('checked', false);
        }
    };
    SwitchControl.prototype.getElementValue = function () {
        return this.controlElement.prop('checked') ? this.firstOption.value : this.secondOption.value;
    };
    return SwitchControl;
}(InputControlAbstract_1.default));
exports.default = SwitchControl;


/***/ }),
/* 243 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var InputControlAbstract_1 = __webpack_require__(37);
var ReloadControl_1 = __webpack_require__(77);
var CreateElement_1 = __webpack_require__(8);
var ObjectToArray_1 = __webpack_require__(102);
var CheckListControl = (function (_super) {
    __extends(CheckListControl, _super);
    function CheckListControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckListControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.componentElement, 'change', '.control-element', this.updateValueFromElement);
    };
    CheckListControl.prototype.getEmptyValue = function () {
        return [];
    };
    CheckListControl.prototype.setElementValue = function (value) {
        var e_1, _a;
        if (value == undefined || value == null) {
            value = [];
        }
        else if (typeof value == 'string') {
            value = [value];
        }
        else if (!Array.isArray(value) && typeof value == 'object') {
            value = ObjectToArray_1.default(value);
        }
        var checkedElement = this.controlElement.filter(':checked');
        checkedElement.prop('checked', false);
        if (Array.isArray(value)) {
            try {
                for (var _b = __values(value.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var selectedElement = this.controlElement.filter("[value=\"" + item + "\"]");
                    selectedElement.prop('checked', true);
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
    };
    CheckListControl.prototype.getElementValue = function () {
        var values = [];
        this.controlElement.filter(':checked').map(function (index, domElement) {
            var checkboxElement = CreateElement_1.default(domElement);
            values.push(checkboxElement.val());
        });
        return values;
    };
    CheckListControl.prototype.reloadControl = function (props) {
        var newList = props.controlElement.find('.check-box-list');
        this.componentElement.find('.check-box-list').html(newList.html());
    };
    CheckListControl = __decorate([
        ReloadControl_1.default
    ], CheckListControl);
    return CheckListControl;
}(InputControlAbstract_1.default));
exports.default = CheckListControl;


/***/ }),
/* 244 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var BaseControl_1 = __webpack_require__(56);
var ReloadControl_1 = __webpack_require__(77);
var PanelStatus_1 = __webpack_require__(68);
var RadioListControl_1 = __webpack_require__(137);
var CreateElement_1 = __webpack_require__(8);
var ObjectToArray_1 = __webpack_require__(102);
var CloneVariable_1 = __webpack_require__(43);
var ArrayCompare_1 = __webpack_require__(75);
var RepeaterControl = (function (_super) {
    __extends(RepeaterControl, _super);
    function RepeaterControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childControls = [];
        _this.reloadControlsQueue = [];
        return _this;
    }
    Object.defineProperty(RepeaterControl.prototype, "controlLoader", {
        get: function () {
            return this.app.componentRegister.get('Editor/Control/ControlLoader');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RepeaterControl.prototype, "itemsElement", {
        get: function () {
            return this.listElement.find('> .repeater-item');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RepeaterControl.prototype, "listElement", {
        get: function () {
            return this.componentElement.find('.repeater-list:first');
        },
        enumerable: true,
        configurable: true
    });
    RepeaterControl.prototype.initialProperties = function () {
        var _this = this;
        _super.prototype.initialProperties.call(this);
        this.listElement.sortable({
            items: '> .repeater-item',
            handle: '.sorting-repeater-item-handle',
            update: function (event, ui) {
                _this.onItemMove();
            }
        });
    };
    RepeaterControl.prototype.restoreOptionValue = function () {
        var value = this.controlSource.getValue();
        if (typeof value != 'object') {
            value = [];
        }
        this.optionValueProp = value;
        this.changeValue(value);
    };
    RepeaterControl.prototype.initializeReloadRules = function () {
        var e_1, _a;
        var itemOptionsDepends = this.controlStructure.itemOptionsDepends, usedDepends = [];
        if (!Object.keys(itemOptionsDepends).length) {
            return;
        }
        for (var controlIndex in itemOptionsDepends) {
            var optionsDepends = itemOptionsDepends[controlIndex];
            try {
                for (var _b = __values(optionsDepends.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dependIndex = _c.value;
                    if (usedDepends.indexOf(dependIndex) !== -1) {
                        continue;
                    }
                    usedDepends.push(dependIndex);
                    var dependControl = this.getControlByOptionKey(dependIndex);
                    if (!dependControl) {
                        continue;
                    }
                    this.eventManager.addSystemHandler(dependControl.valueChangedEvent, this.onItemDependChange);
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
    };
    RepeaterControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        if (this.panel.hasOwnProperty('afterInitValidationEvent')) {
            manager.addSystemHandler(this.panel.afterInitValidationEvent, this.addRulesToRepeaterItems);
        }
        manager.addElementHandler(this.componentElement, 'click', '.repeater-bottom-navigation .add-item', this.onAddItemClick);
        manager.addElementHandler(this.componentElement, 'click', ".navigation-repeater-item[data-repeater-key=\"" + this.optionKey + "\"] .add-empty-item", this.onAddBeforeItemClick);
        manager.addElementHandler(this.componentElement, 'click', ".navigation-repeater-item[data-repeater-key=\"" + this.optionKey + "\"] .remove-item", this.onRemoveItemClick);
        manager.addSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
    };
    RepeaterControl.prototype.onItemMove = function () {
        var _this = this;
        var newOptionValue = [], newChildControls = [];
        this.itemsElement.each(function (indexElement, domElement) {
            var itemElement = CreateElement_1.default(domElement), itemIndex = itemElement.attr('data-index');
            if (itemElement.hasClass('ui-sortable-placeholder')) {
                return;
            }
            newOptionValue.push(_this.optionValue[itemIndex]);
            newChildControls.push(_this.childControls[itemIndex]);
        });
        this.childControls = newChildControls;
        this.optionValue = CloneVariable_1.default(newOptionValue);
    };
    RepeaterControl.prototype.onValueChangedEvent = function (args) {
        this.changeValue(args.value);
    };
    RepeaterControl.prototype.onRemoveItemClick = function (event) {
        var buttonElement = CreateElement_1.default(event.currentTarget), itemElement = buttonElement.parents('.repeater-item:first'), itemIndex = parseInt(itemElement.attr('data-index')), oldValue = CloneVariable_1.default(this.optionValue);
        itemElement.remove();
        this.optionValue.splice(itemIndex, 1);
        this.childControls.splice(itemIndex, 1);
        this.refreshIndexes();
        this.changeEventWithoutProcessing({
            oldValue: oldValue,
            newValue: this.optionValue
        });
    };
    RepeaterControl.prototype.onAddBeforeItemClick = function (event) {
        var buttonElement = CreateElement_1.default(event.currentTarget), itemElement = buttonElement.parents('.repeater-item:first'), itemIndex = parseInt(itemElement.attr('data-index')), oldValue = CloneVariable_1.default(this.optionValue);
        this.optionValue.splice(itemIndex, 0, {});
        this.childControls.splice(itemIndex, 0, {});
        this.createItem(itemIndex, {
            refreshIndexes: true
        });
        this.changeEventWithoutProcessing({
            oldValue: oldValue,
            newValue: this.optionValue
        });
    };
    RepeaterControl.prototype.onAddItemClick = function (event) {
        this.createItem(-1);
    };
    RepeaterControl.prototype.changeValue = function (value) {
        var e_2, _a;
        if (value == undefined || value == null) {
            value = [];
        }
        else if (!Array.isArray(value) && typeof value == 'object') {
            value = ObjectToArray_1.default(value);
            this.optionValueProp = value;
        }
        if (!Array.isArray(value)) {
            return;
        }
        if (value.length < this.childControls.length) {
            for (var i = value.length; i < this.childControls.length; i++) {
                var firstControlIndex = Object.keys(this.childControls[i])[0], firstControl = this.childControls[i][firstControlIndex], repeaterItemElement = firstControl.componentElement.parents('.repeater-item:first');
                repeaterItemElement.remove();
            }
            this.childControls.splice(value.length);
        }
        this.refreshIndexes();
        try {
            for (var _b = __values(value.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], values = _d[1];
                if (this.childControls.length - 1 >= index) {
                    for (var itemIndex in this.childControls[index]) {
                        var itemControl = this.childControls[index][itemIndex];
                        if (values.hasOwnProperty(itemIndex)) {
                            itemControl.optionValue = values[itemIndex];
                        }
                        else {
                            if (itemControl.controlStructure.defaultValue) {
                                itemControl.optionValue = itemControl.controlStructure.defaultValue;
                            }
                            else {
                                itemControl.optionValue = itemControl.getEmptyValue();
                            }
                        }
                    }
                }
                else {
                    this.createItem(index, {
                        reloadAfterInit: false
                    });
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
        if (this.reloadControlsQueue.length) {
            this.controlLoader.reloadControls(this.reloadControlsQueue, function (controls) {
                var e_3, _a;
                try {
                    for (var controls_1 = __values(controls), controls_1_1 = controls_1.next(); !controls_1_1.done; controls_1_1 = controls_1.next()) {
                        var control = controls_1_1.value;
                        control.restoreOptionValue();
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (controls_1_1 && !controls_1_1.done && (_a = controls_1.return)) _a.call(controls_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
            this.reloadControlsQueue = [];
        }
    };
    RepeaterControl.prototype.refreshIndexes = function () {
        var e_4, _a;
        try {
            for (var _b = __values(this.optionValue.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], values = _d[1];
                var repeaterItemElement = this.itemsElement.eq(index);
                repeaterItemElement.attr('data-index', index);
                repeaterItemElement.find(".sorting-repeater-item-handle[data-repeater-key=\"" + this.optionKey + "\"] .index")
                    .html((index + 1) + '');
                for (var itemIndex in this.childControls[index]) {
                    var itemControl = this.childControls[index][itemIndex], oldOptionKey = itemControl.optionKey, newOptionKey = this.optionKey + '.' + index + '.' + itemIndex;
                    itemControl.componentElement.attr('data-option-key', newOptionKey);
                    itemControl.controlStructure.optionKey = newOptionKey;
                    itemControl.controlSource.optionKey = index + '.' + itemIndex;
                    itemControl.componentElement.find("[name=\"" + oldOptionKey + "\"]").attr('name', newOptionKey);
                    if (itemControl instanceof RadioListControl_1.default) {
                        itemControl.setElementValue(itemControl.optionValue);
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var validator = this.panel.formElement.data('validator');
        if (validator && Object.keys(validator.invalid).length) {
            for (var invalidFieldId in validator.invalid) {
                this.panel.formElement.find("[id=\"" + invalidFieldId + "-error\"]").remove();
            }
        }
    };
    RepeaterControl.prototype.reloadControl = function (props) {
        var needResetValue = this.controlStructure.resetValueOnReload;
        if (needResetValue) {
            this.optionValue = [];
        }
        var newItemTemplate = props.controlElement.find('> .control-content > .repeater-item-template');
        this.componentElement.find('> .control-content > .repeater-item-template').html(newItemTemplate.html());
        if (!needResetValue) {
            this.changeValue(this.optionValue);
        }
    };
    RepeaterControl.prototype.renderRepeaterItem = function (index) {
        return "\n            <div class=\"repeater-item\" data-index=\"" + index + "\">\n                <div class=\"repeater-item-handle sorting-repeater-item-handle\" data-repeater-key=\"" + this.optionKey + "\">\n                    <span class=\"index\">" + (index + 1) + "</span>\n                </div>\n                <div class=\"repeater-item-controls\"></div>\n                <div class=\"repeater-item-handle navigation-repeater-item\" data-repeater-key=\"" + this.optionKey + "\">\n                    <div class=\"add-empty-item\"></div>\n                    <div class=\"remove-item\"></div>\n                </div>\n            </div>\n        ";
    };
    RepeaterControl.prototype.addRulesToRepeaterItems = function () {
        var formValidator = this.panel.formElement.data('validator');
        if (!formValidator) {
            return;
        }
        var rules = formValidator.settings.rules, repeaterRules = false;
        if (rules.hasOwnProperty(this.optionKey)) {
            repeaterRules = rules[this.optionKey];
        }
        else {
            for (var ruleOptionKey in rules) {
                if (ruleOptionKey.indexOf('*') !== -1) {
                    continue;
                }
                var ruleTemplate = ruleOptionKey.replace(/\./g, '\\.').split('*').join('([a-zA-Z\\d]+)'), ruleRegEx = new RegExp(ruleTemplate);
                if (ruleRegEx.test(this.optionKey)) {
                    repeaterRules = rules[ruleOptionKey];
                    break;
                }
            }
        }
        if (!repeaterRules
            || typeof repeaterRules != 'object'
            || !repeaterRules.hasOwnProperty('repeaterItem')
            || typeof repeaterRules.repeaterItem != 'object') {
            return;
        }
        for (var index in this.childControls) {
            for (var controlIndex in this.childControls[index]) {
                var control = this.childControls[index][controlIndex];
                if (repeaterRules.repeaterItem.hasOwnProperty(controlIndex)) {
                    rules[control.optionKey] = repeaterRules.repeaterItem[controlIndex];
                }
            }
        }
    };
    RepeaterControl.prototype.createItem = function (index, props) {
        props = Object.assign({
            reloadAfterInit: true,
            refreshIndexes: false
        }, props);
        if (index == -1) {
            index = this.childControls.length;
        }
        this.childControls[index] = {};
        var contextControls = new Map(), structures = this.controlStructure.controlStructures, repeaterItemElement = CreateElement_1.default(this.renderRepeaterItem(index)), controlsElement = repeaterItemElement.find('.repeater-item-controls'), nextItemElement = this.componentElement.find('.repeater-list > .repeater-item').eq(index);
        if (index != this.childControls.length && nextItemElement.length) {
            nextItemElement.before(repeaterItemElement);
        }
        else {
            this.componentElement.find('.repeater-list').append(repeaterItemElement);
        }
        if (props.refreshIndexes) {
            this.refreshIndexes();
        }
        for (var itemStructureIndex in structures) {
            var itemStructure = Object.assign({}, structures[itemStructureIndex]), itemOptionKey = this.optionKey + '.' + index + '.' + itemStructureIndex, originalKey = itemStructure.optionKey;
            itemStructure.optionKey = itemOptionKey;
            itemStructure.controlSource = 'container';
            var itemControl = this.builders.control.createControl(itemStructure, this.panelLayout), itemControlElement = this.componentElement.find(".repeater-item-template .control[data-control-type=\"" + itemStructure.controlKey + "\"][data-option-key=\"" + originalKey + "\"]");
            if (!itemControlElement.length) {
                continue;
            }
            if (!props.reloadAfterInit && itemStructure.hasOwnProperty('reloadAfterInit') && itemStructure.reloadAfterInit) {
                itemStructure.reloadAfterInit = false;
                this.reloadControlsQueue.push(itemControl);
            }
            contextControls.set(this.optionKey + '.repeaterItem.' + itemStructureIndex, itemControl);
            contextControls.set('repeaterItem.' + itemStructureIndex, itemControl);
            itemControl.contextControls = contextControls;
            itemControlElement = itemControlElement.clone();
            itemControlElement.attr('data-option-key', itemOptionKey);
            itemControlElement.find("[name=\"" + originalKey + "\"]")
                .attr('name', itemOptionKey);
            itemControl.parentControl = this;
            itemControl.componentElement = itemControlElement;
            itemControl.controlSource.optionsContainer = this.optionValueProp;
            itemControl.controlSource.optionKey = index + '.' + itemStructureIndex;
            controlsElement.append(itemControlElement);
            this.componentBuilder.implementation(itemControl.controlSource, this.package);
            this.eventManager.addSystemHandler(itemControl.valueChangedEvent, this.onChildControlValueChanged);
            this.childControls[index][itemStructureIndex] = itemControl;
        }
        for (var controlIndex in this.childControls[index]) {
            var control = this.childControls[index][controlIndex];
            this.componentBuilder.implementation(control, this.package);
        }
        if (this.panel.status == PanelStatus_1.default.Active) {
            this.addRulesToRepeaterItems();
        }
    };
    RepeaterControl.prototype.onChildControlValueChanged = function (args) {
        var oldValue = CloneVariable_1.default(this.optionValue), controlSource = args.control.controlSource, oldOptionContainer = controlSource.optionsContainer;
        if (!Array.isArray(oldValue)) {
            oldValue = ObjectToArray_1.default(this.optionValue);
        }
        var newValue = CloneVariable_1.default(oldValue);
        controlSource.optionsContainer = newValue;
        controlSource.saveValue();
        this.optionValueProp = newValue;
        controlSource.optionsContainer = oldOptionContainer;
        if (!ArrayCompare_1.default(oldValue, this.optionValue)) {
            this.changeEventWithoutProcessing({
                oldValue: oldValue,
                newValue: this.optionValue
            });
        }
    };
    RepeaterControl.prototype.changeEventWithoutProcessing = function (params) {
        this.eventManager.removeSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
        this.valueChangedEvent.trigger({
            oldValue: params.oldValue,
            value: params.newValue,
            control: this
        });
        this.eventManager.addSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
    };
    RepeaterControl.prototype.onItemDependChange = function (args) {
        var e_5, _a, e_6, _b;
        var itemOptionsDepends = this.controlStructure.itemOptionsDepends, controlOptionKey = args.control.optionKey, reloadControlIndexes = [], reloadControls = [];
        if (Object.keys(itemOptionsDepends).length) {
            for (var controlIndex in itemOptionsDepends) {
                var optionsDepends = itemOptionsDepends[controlIndex];
                if (optionsDepends.indexOf(controlOptionKey) !== -1) {
                    reloadControlIndexes.push(controlIndex);
                    continue;
                }
            }
        }
        try {
            for (var _c = __values(reloadControlIndexes.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var reloadControlIndex = _d.value;
                try {
                    for (var _e = __values(this.childControls.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var _g = __read(_f.value, 2), itemIndex = _g[0], itemControls = _g[1];
                        if (itemControls.hasOwnProperty(reloadControlIndex)) {
                            reloadControls.push(itemControls[reloadControlIndex]);
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (!reloadControls.length) {
            return;
        }
        this.controlLoader.reloadControls(reloadControls, function (controls) {
            var e_7, _a;
            try {
                for (var controls_2 = __values(controls), controls_2_1 = controls_2.next(); !controls_2_1.done; controls_2_1 = controls_2.next()) {
                    var control = controls_2_1.value;
                    control.optionValue = control.getEmptyValue();
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (controls_2_1 && !controls_2_1.done && (_a = controls_2.return)) _a.call(controls_2);
                }
                finally { if (e_7) throw e_7.error; }
            }
        });
    };
    RepeaterControl = __decorate([
        ReloadControl_1.default
    ], RepeaterControl);
    return RepeaterControl;
}(BaseControl_1.default));
exports.default = RepeaterControl;


/***/ }),
/* 245 */
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
var InputControlAbstract_1 = __webpack_require__(37);
var ColorPickerControl = (function (_super) {
    __extends(ColorPickerControl, _super);
    function ColorPickerControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerControl.prototype.showControlElement = function () {
        this.componentElement.show();
    };
    ColorPickerControl.prototype.hideControlElement = function () {
        this.componentElement.hide();
    };
    Object.defineProperty(ColorPickerControl.prototype, "colorPickerElement", {
        get: function () {
            return this.componentElement.find('.color-picker-element');
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerControl.prototype.initialProperties = function () {
        var _this = this;
        var changeHandler = function () {
            _this.updateValueFromElement();
        };
        this.colorPickerElement.wpColorPicker({
            hide: true,
            change: changeHandler,
            clear: changeHandler
        });
        _super.prototype.initialProperties.call(this);
    };
    ColorPickerControl.prototype.setElementValue = function (value) {
        if (typeof value != 'string') {
            value = '';
        }
        if (value.length) {
            this.colorPickerElement.wpColorPicker('color', value);
        }
        else {
            this.colorPickerElement.iris('color', '');
        }
    };
    ColorPickerControl.prototype.getElementValue = function () {
        return this.colorPickerElement.wpColorPicker('color');
    };
    return ColorPickerControl;
}(InputControlAbstract_1.default));
exports.default = ColorPickerControl;


/***/ }),
/* 246 */
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
var BaseControl_1 = __webpack_require__(56);
var Context_1 = __webpack_require__(24);
var ImageControl = (function (_super) {
    __extends(ImageControl, _super);
    function ImageControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAttached = false;
        _this.attachmentQuery = null;
        return _this;
    }
    ImageControl.prototype.initialProperties = function () {
        _super.prototype.initialProperties.call(this);
        this.mediaFrame = wp.media({
            multiple: false,
            library: {
                type: 'image'
            }
        });
    };
    ImageControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
        manager.addElementHandler(this.componentElement, 'click', '.upload-container .upload-image', this.onUpdateButtonClick);
        manager.addElementHandler(this.componentElement, 'click', '.image-container .delete-image', this.onRemoveButtonClick);
        this.mediaFrame.on('select', Context_1.default(this.onSelectImage, this));
    };
    ImageControl.prototype.onRemoveButtonClick = function () {
        this.optionValue = null;
    };
    ImageControl.prototype.onUpdateButtonClick = function () {
        this.mediaFrame.open();
    };
    ImageControl.prototype.onSelectImage = function () {
        var attachment = this.mediaFrame.state().get('selection').first().toJSON();
        this.optionValue = attachment.id;
        this.eventManager.removeSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
        this.updateOptionValue({
            id: attachment.id,
            url: attachment.url
        });
        this.eventManager.addSystemHandler(this.valueChangedEvent, this.onValueChangedEvent);
    };
    ImageControl.prototype.restoreDefaultOptionValue = function (needCheckValue) {
        _super.prototype.restoreDefaultOptionValue.call(this, needCheckValue);
        if (!this.isAttached && this.optionValue) {
            this.updateOptionValue({
                id: this.optionValue
            });
        }
    };
    ImageControl.prototype.onValueChangedEvent = function (args) {
        this.updateOptionValue({
            id: args.value
        });
    };
    ImageControl.prototype.restoreOptionValue = function () {
        _super.prototype.restoreOptionValue.call(this);
        this.updateOptionValue({
            id: this.optionValueProp
        });
    };
    ImageControl.prototype.updateOptionValue = function (props) {
        var _this = this;
        var attachmentId = props.id, inputElement = this.componentElement.find('.control-input-element'), updateContainerElement = this.componentElement.find('.upload-container'), imageContainerElement = this.componentElement.find('.image-container');
        if (this.attachmentQuery) {
            this.attachmentQuery.abort();
        }
        if (!attachmentId) {
            inputElement.val('');
            this.updatePreviewImage('');
            updateContainerElement.removeClass('hidden');
            imageContainerElement.addClass('hidden');
            return;
        }
        else {
            updateContainerElement.addClass('hidden');
            imageContainerElement.removeClass('hidden');
        }
        if (props.hasOwnProperty('url')) {
            this.updatePreviewImage(props.url);
        }
        else {
            var attachmentEntity = wp.media.attachment(attachmentId);
            this.attachmentQuery = attachmentEntity.sync('read');
            this.attachmentQuery.done(function (data) {
                _this.updatePreviewImage(data.url);
            }).fail(function () {
                _this.updatePreviewImage('');
            });
        }
        inputElement.val(attachmentId);
    };
    ImageControl.prototype.updatePreviewImage = function (imageUrl) {
        this.componentElement.find('.image-element').attr('src', imageUrl);
    };
    return ImageControl;
}(BaseControl_1.default));
exports.default = ImageControl;


/***/ }),
/* 247 */
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseControl_1 = __webpack_require__(56);
var ReloadControl_1 = __webpack_require__(77);
var Context_1 = __webpack_require__(24);
var CloneVariable_1 = __webpack_require__(43);
var ColorListControl = (function (_super) {
    __extends(ColorListControl, _super);
    function ColorListControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRestoredOption = false;
        _this.images = {};
        _this.attachmentQuery = {};
        return _this;
    }
    Object.defineProperty(ColorListControl.prototype, "controlLoader", {
        get: function () {
            return this.app.componentRegister.get('Editor/Control/ControlLoader');
        },
        enumerable: true,
        configurable: true
    });
    ColorListControl.prototype.initialProperties = function () {
        _super.prototype.initialProperties.call(this);
        this.mediaFrame = wp.media({
            multiple: false,
            library: {
                type: 'image'
            }
        });
        this.mediaFrame.on('select', Context_1.default(this.onSelectImage, this));
    };
    ColorListControl.prototype.getEmptyValue = function () {
        return {};
    };
    ColorListControl.prototype.restoreOptionValue = function () {
        _super.prototype.restoreOptionValue.call(this);
        var taxonomiesColors = this.controlStructure.taxonomiesColors;
        if (Array.isArray(this.optionValue) || typeof this.optionValue != 'object') {
            if (taxonomiesColors.hasOwnProperty(this.optionKey)) {
                this.optionValueProp = CloneVariable_1.default(taxonomiesColors[this.optionKey]);
            }
            else {
                this.optionValueProp = {};
                return;
            }
        }
        else if (!Array.isArray(this.optionValue)
            && typeof this.optionValue == 'object'
            && taxonomiesColors.hasOwnProperty(this.optionKey)) {
            var baseColors = CloneVariable_1.default(taxonomiesColors[this.optionKey]);
            this.optionValueProp = jQuery.extend(baseColors, this.optionValueProp);
        }
        this.isRestoredOption = true;
        for (var term in this.optionValue) {
            var colorOption = this.optionValue[term], colorElement = this.componentElement.find(".color-item[data-term=" + term + "]");
            if (colorOption.image && colorElement.find('.image-element').attr('src')) {
                this.images[colorOption.image] = colorElement.find('.image-element').attr('src');
            }
            this.changeMarkerStyleSwitch(colorOption.term, colorOption.markerStyle);
            this.changeTypeSwitch(colorOption.term, colorOption.type);
            this.changeBorderColorElement(colorOption.term, colorOption.borderColor, true);
            this.changeColorElement(colorOption.term, colorOption.color, true);
            this.changeImageElement(colorOption.term, colorOption.image);
        }
        this.isRestoredOption = false;
    };
    ColorListControl.prototype.onSelectImage = function () {
        var term = this.mediaFrame.$el.data('term'), attachment = this.mediaFrame.state().get('selection').first().toJSON();
        this.images[attachment.id] = attachment.url;
        this.changeImageElement(term, attachment.id);
    };
    ColorListControl.prototype.changeImageElement = function (term, value) {
        var _this = this;
        var colorElement = this.componentElement.find(".color-item[data-term=" + term + "]"), imageContainer = colorElement.find('.image-container');
        if (this.attachmentQuery.hasOwnProperty(term) && this.attachmentQuery[term]) {
            this.attachmentQuery[term].abort();
        }
        this.changeColorOption(term, 'image', value);
        imageContainer.find('.image-element').attr('src', '');
        if (value && !this.images.hasOwnProperty(value)) {
            var attachmentEntity = wp.media.attachment(value);
            this.attachmentQuery[term] = attachmentEntity.sync('read');
            this.attachmentQuery[term].done(function (data) {
                _this.images[value] = data.url;
                imageContainer.find('.image-element').attr('src', data.url);
            }).always(function () {
                _this.updatePreviewColor(term);
            });
        }
        else if (value && this.images.hasOwnProperty(value)) {
            imageContainer.find('.image-element').attr('src', this.images[value]);
        }
        this.updatePreviewColor(term);
    };
    ColorListControl.prototype.changeColorElement = function (term, value, updateColorPicker) {
        if (updateColorPicker === void 0) { updateColorPicker = false; }
        var colorElement = this.componentElement.find(".color-item[data-term=" + term + "]"), colorInputElement = colorElement.find('.color-picker-element'), previewElement = colorElement.find('.preview-color');
        if (updateColorPicker) {
            colorInputElement.wpColorPicker('color', value);
            if (!value || !value.length) {
                var pickerContainer = colorInputElement.parents('.wp-picker-container');
                pickerContainer.find('.wp-color-result').css('background-color', '');
            }
        }
        if (this.optionValue[term].type == 'color') {
            previewElement.css('background', value);
        }
        this.changeColorOption(term, 'color', value);
    };
    ColorListControl.prototype.changeBorderColorElement = function (term, value, updateColorPicker) {
        if (updateColorPicker === void 0) { updateColorPicker = false; }
        var colorElement = this.componentElement.find(".color-item[data-term=" + term + "]"), colorInputElement = colorElement.find('.border-picker-element'), previewElement = colorElement.find('.preview-color');
        if (updateColorPicker) {
            colorInputElement.wpColorPicker('color', value);
            if (!value || !value.length) {
                var pickerContainer = colorInputElement.parents('.wp-picker-container');
                pickerContainer.find('.wp-color-result').css('background-color', '');
            }
        }
        previewElement.css('border-color', value);
        this.changeColorOption(term, 'borderColor', value);
    };
    ColorListControl.prototype.changeMarkerStyleSwitch = function (term, value) {
        var colorElement = this.componentElement.find(".color-item[data-term=" + term + "]"), switchElement = colorElement.find('.switch-element[data-name="marker"]');
        this.changeSwitchElement(switchElement, value);
        this.changeColorOption(term, 'markerStyle', value);
    };
    ColorListControl.prototype.changeTypeSwitch = function (term, value) {
        var colorElement = this.componentElement.find(".color-item[data-term=" + term + "]"), switchElement = colorElement.find('.switch-element[data-name="type"]');
        this.changeSwitchElement(switchElement, value);
        if (value == 'color') {
            colorElement.find('.image-container').hide();
            colorElement.find('.color-picker-container').show();
        }
        else if (value == 'image') {
            colorElement.find('.image-container').show();
            colorElement.find('.color-picker-container').hide();
        }
        this.changeColorOption(term, 'type', value);
        this.updatePreviewColor(term);
    };
    ColorListControl.prototype.updatePreviewColor = function (term) {
        var colorElement = this.componentElement.find(".color-item[data-term=" + term + "]"), previewElement = colorElement.find('.preview-color'), imageId = this.optionValue[term].image;
        if (this.optionValue[term].type == 'color') {
            previewElement.css('background-image', '');
            previewElement.css('background', this.optionValue[term].color);
        }
        else if (this.optionValue[term].type == 'image') {
            var previewImage = colorElement.find('.image-container .preview-image-container'), uploadImage = colorElement.find('.image-container .upload-container');
            previewElement.css('background', '');
            if (imageId && this.images.hasOwnProperty(imageId)) {
                previewElement.css('background-image', "url(" + this.images[imageId] + ")");
                previewImage.removeClass('hidden');
                uploadImage.addClass('hidden');
            }
            else {
                previewElement.css('background-image', '');
                previewImage.addClass('hidden');
                uploadImage.removeClass('hidden');
            }
        }
    };
    ColorListControl.prototype.changeSwitchElement = function (switchElement, value) {
        switchElement.find('.option.active')
            .removeClass('active');
        switchElement.find(".option[data-value=\"" + value + "\"]")
            .addClass('active');
    };
    ColorListControl.prototype.reloadControl = function (props) {
        this.componentElement.find('.control-content').html(props.controlElement.find('.control-content').html());
        this.initialElementProperties();
        this.attachElementEvents(this.eventManager);
    };
    ColorListControl.prototype.afterReloadDependentOption = function () {
        this.restoreOptionValue();
    };
    ColorListControl.prototype.initialElementProperties = function () {
        var _this = this;
        var colorHandler = function (event) {
            setTimeout(function () {
                var colorInput = jQuery(event.target), colorItem = colorInput.parents('.color-item:first'), color = colorInput.hasClass('wp-picker-clear') ? '' : colorInput.val();
                _this.changeColorElement(colorItem.data('term'), color);
            }, 1);
        }, borderHandler = function (event) {
            setTimeout(function () {
                var colorInput = jQuery(event.target), colorItem = colorInput.parents('.color-item:first'), color = colorInput.hasClass('wp-picker-clear') ? '' : colorInput.val();
                _this.changeBorderColorElement(colorItem.data('term'), color);
            }, 1);
        };
        this.componentElement.find('.color-picker-element').wpColorPicker({
            hide: true,
            palettes: true,
            change: colorHandler,
            clear: colorHandler
        });
        this.componentElement.find('.border-picker-element').wpColorPicker({
            hide: true,
            palettes: true,
            change: borderHandler,
            clear: borderHandler
        });
    };
    ColorListControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.componentElement, 'click', '.image-container .upload-container .upload-image', this.onUpdateImageClick);
        manager.addElementHandler(this.componentElement, 'click', '.image-container .delete-image', this.onRemoveImageClick);
        manager.addElementHandler(this.componentElement, 'mouseenter', '.switch-element[data-name="marker"] .option', this.onMarkerMouseEnter);
        manager.addElementHandler(this.componentElement, 'mouseleave', '.switch-element[data-name="marker"] .option', this.onMouseLeaveEnter);
    };
    ColorListControl.prototype.attachElementEvents = function (manager) {
        manager.addElementHandler(this.componentElement.find('.switch-element'), 'click', '.option:not(.active)', this.onSwitchClick);
    };
    ColorListControl.prototype.onMarkerMouseEnter = function (event) {
        var optionElement = jQuery(event.currentTarget), colorItem = optionElement.parents('.color-item:first');
        colorItem.addClass('marker-preview')
            .addClass("marker-preview-" + optionElement.data('value'));
    };
    ColorListControl.prototype.onMouseLeaveEnter = function (event) {
        var optionElement = jQuery(event.currentTarget), colorItem = optionElement.parents('.color-item:first');
        colorItem.removeClass('marker-preview')
            .removeClass("marker-preview-" + optionElement.data('value'));
    };
    ColorListControl.prototype.onRemoveImageClick = function (event) {
        var buttonElement = jQuery(event.currentTarget), colorItem = buttonElement.parents('.color-item:first');
        this.changeImageElement(colorItem.data('term'), '');
    };
    ColorListControl.prototype.onUpdateImageClick = function (event) {
        var buttonElement = jQuery(event.currentTarget), colorItem = buttonElement.parents('.color-item:first');
        this.mediaFrame.open(colorItem);
        this.mediaFrame.$el.data('term', colorItem.data('term'));
    };
    ColorListControl.prototype.onSwitchClick = function (event) {
        var optionElement = jQuery(event.currentTarget), colorItem = optionElement.parents('.color-item:first'), switchName = optionElement.parents('.switch-element').data('name'), option = optionElement.data('value');
        if (switchName == 'type') {
            this.changeTypeSwitch(colorItem.data('term'), option);
        }
        else if (switchName == 'marker') {
            this.changeMarkerStyleSwitch(colorItem.data('term'), option);
        }
    };
    ColorListControl.prototype.changeColorOption = function (term, optionName, optionValue) {
        if (this.optionValue[term][optionName] == optionValue) {
            return;
        }
        var prevOption = CloneVariable_1.default(this.optionValue);
        this.optionValue[term][optionName] = optionValue;
        if (!this.isRestoredOption) {
            this.valueChangedEvent.trigger({
                oldValue: prevOption,
                value: this.optionValue,
                control: this
            });
        }
    };
    ColorListControl = __decorate([
        ReloadControl_1.default
    ], ColorListControl);
    return ColorListControl;
}(BaseControl_1.default));
exports.default = ColorListControl;


/***/ }),
/* 248 */
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
var BaseControl_1 = __webpack_require__(56);
var CloneVariable_1 = __webpack_require__(43);
var RulesBuilderControl = (function (_super) {
    __extends(RulesBuilderControl, _super);
    function RulesBuilderControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRestoredOption = false;
        return _this;
    }
    RulesBuilderControl.prototype.getEmptyValue = function () {
        return [];
    };
    RulesBuilderControl.prototype.getGroupPosition = function (groupId) {
        for (var index in this.optionValue) {
            var group = this.optionValue[index];
            if (group.id == groupId) {
                return index;
            }
        }
        return -1;
    };
    RulesBuilderControl.prototype.getRulePosition = function (groupId, ruleId) {
        var rules = this.getGroupOption(groupId).rules;
        for (var index in rules) {
            var rule = rules[index];
            if (rule.id == ruleId) {
                return index;
            }
        }
        return -1;
    };
    RulesBuilderControl.prototype.getGroupOption = function (groupId) {
        for (var index in this.optionValue) {
            var group = this.optionValue[index];
            if (group.id == groupId) {
                return group;
            }
        }
        return null;
    };
    RulesBuilderControl.prototype.getRuleOption = function (groupId, ruleId) {
        var index = this.getRulePosition(groupId, ruleId), group = this.getGroupOption(groupId);
        if (index !== -1) {
            return group.rules[index];
        }
        return null;
    };
    RulesBuilderControl.prototype.setRuleOption = function (groupId, ruleId, options, position) {
        var index = this.getRulePosition(groupId, ruleId), group = this.getGroupOption(groupId);
        if (index !== -1) {
            group.rules[index] = {
                id: ruleId,
                rule: options
            };
        }
        else {
            if (position) {
                group.rules.splice(position, 0, {
                    id: ruleId,
                    rule: options
                });
            }
            else {
                group.rules.push({
                    id: ruleId,
                    rule: options
                });
            }
        }
    };
    RulesBuilderControl.prototype.hasRuleOption = function (groupId, ruleId) {
        var rules = this.getGroupOption(groupId).rules;
        for (var index in rules) {
            var rule = rules[index];
            if (rule.id == ruleId) {
                return true;
            }
        }
        return false;
    };
    RulesBuilderControl.prototype.hasGroupOption = function (groupId) {
        for (var index in this.optionValue) {
            var group = this.optionValue[index];
            if (group.id == groupId) {
                return true;
            }
        }
        return false;
    };
    RulesBuilderControl.prototype.deleteRuleOption = function (groupId, ruleId) {
        var group = this.getGroupOption(groupId), position = this.getRulePosition(groupId, ruleId);
        if (position !== -1) {
            group.rules.splice(position, 1);
        }
    };
    RulesBuilderControl.prototype.deleteGroupOption = function (groupId) {
        var position = this.getGroupPosition(groupId);
        if (position !== -1) {
            this.optionValue.splice(position, 1);
        }
    };
    RulesBuilderControl.prototype.restoreOptionValue = function () {
        var _this = this;
        this.isRestoredOption = true;
        _super.prototype.restoreOptionValue.call(this);
        if (typeof this.optionValue != 'object'
            || !this.optionValue
            || !this.hasGroupOption('group_0')
            || !this.hasRuleOption('group_0', 'rule_0')) {
            if (typeof this.optionValue != 'object' || !this.optionValue) {
                this.optionValueProp = [];
            }
            if (!this.hasGroupOption('group_0')) {
                this.optionValueProp.push({
                    id: 'group_0',
                    rules: []
                });
            }
            var defaultGroup = this.getGroupOption('group_0');
            defaultGroup.rules.push({
                id: 'rule_0',
                rule: {
                    param: this.controlStructure.useEntries[0],
                    operator: '==',
                    value: null
                }
            });
        }
        var preGroupElement = null;
        for (var groupIndex in this.optionValue) {
            var group = this.optionValue[groupIndex], groupElement = this.getGroupElement(group.id);
            if (!groupElement.length && group.rules) {
                this.createEmptyGroup(group.id, preGroupElement);
                groupElement = this.getGroupElement(group.id);
            }
            else if (groupElement.length && !group.rules) {
                this.deleteGroupOption(group.id);
                continue;
            }
            var prevRuleElement = null;
            for (var ruleIndex in group.rules) {
                var rule = group.rules[ruleIndex], ruleElement = this.getRuleElement(group.id, rule.id);
                if (!ruleElement.length) {
                    this.createEmptyRule(group.id, rule.id, prevRuleElement);
                    ruleElement = this.getRuleElement(group.id, rule.id);
                }
                this.setRuleOptions(group.id, rule.id, rule.rule);
                prevRuleElement = ruleElement;
            }
            preGroupElement = groupElement;
        }
        this.componentElement.find('.rule-group[data-id]').each(function (groupIndex, groupDomElement) {
            var groupElement = jQuery(groupDomElement), groupId = groupElement.data('id');
            if (!_this.hasGroupOption(groupId)) {
                groupElement.remove();
                return;
            }
            groupElement.find('.rule-row[data-id]').each(function (ruleIndex, ruleDomElement) {
                var ruleElement = jQuery(ruleDomElement), ruleId = ruleElement.data('id');
                if (!_this.hasRuleOption(groupId, ruleId)) {
                    ruleElement.remove();
                    return;
                }
            });
        });
        this.initSelect2();
        this.isRestoredOption = false;
    };
    RulesBuilderControl.prototype.initSelect2 = function () {
        this.componentElement.find('.value-select').select2({
            width: '100%',
            closeOnSelect: true
        });
    };
    RulesBuilderControl.prototype.setRuleOptions = function (groupId, ruleId, options, position) {
        var ruleElement = this.getRuleElement(groupId, ruleId);
        ruleElement.find('.operator-select').val(options.operator);
        ruleElement.find('.param-select').val(options.param);
        var prevOption = CloneVariable_1.default(this.optionValue);
        this.setRuleOption(groupId, ruleId, options, position);
        if (!this.isRestoredOption) {
            this.valueChangedEvent.trigger({
                oldValue: prevOption,
                value: this.optionValue,
                control: this
            });
        }
        this.reloadEntries(groupId, ruleId);
    };
    RulesBuilderControl.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addElementHandler(this.componentElement, 'change', '.rule-row .param-select', this.onParamChange);
        manager.addElementHandler(this.componentElement, 'change', '.rule-row .operator-select', this.onOperatorChange);
        manager.addElementHandler(this.componentElement, 'change', '.rule-row .value-select', this.onEntryValueChange);
        manager.addElementHandler(this.componentElement, 'click', '.rule-row .add-rule.button', this.onAddRuleButtonClick);
        manager.addElementHandler(this.componentElement, 'click', '.rule-row .remove-rule.button', this.onRemoveRuleButtonClick);
        manager.addElementHandler(this.componentElement, 'click', '.rule-groups .add-rule-group.button', this.onAddGroupButtonClick);
    };
    RulesBuilderControl.prototype.compileTemplate = function (html, context) {
        var template = window._.template(html, {
            evaluate: /<#([\s\S]+?)#>/g,
            interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
            escape: /\{\{([^\}]+?)\}\}(?!\})/g,
            variable: 'data'
        });
        return template(context);
    };
    RulesBuilderControl.prototype.getRuleElement = function (groupId, ruleId) {
        return this.componentElement.find(".rule-group[data-id=\"" + groupId + "\"] .rule-row[data-id=\"" + ruleId + "\"]");
    };
    RulesBuilderControl.prototype.getGroupElement = function (groupId) {
        return this.componentElement.find(".rule-group[data-id=\"" + groupId + "\"]");
    };
    RulesBuilderControl.prototype.generateUniqueId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    RulesBuilderControl.prototype.onRemoveRuleButtonClick = function (event) {
        var buttonElement = jQuery(event.currentTarget), ruleElement = buttonElement.parents('.rule-row:first'), ruleId = ruleElement.data('id'), groupId = ruleElement.parents('.rule-group:first').data('id'), rulesContainerElement = ruleElement.parents('.rules-table-body');
        var prevOption = CloneVariable_1.default(this.optionValue);
        if (ruleId == 'rule_0' && groupId == 'group_0') {
            return;
        }
        if (rulesContainerElement.find('.rule-row').length <= 1 && groupId != 'group_0') {
            this.getGroupElement(groupId).remove();
            this.deleteGroupOption(groupId);
        }
        else {
            ruleElement.remove();
            this.deleteRuleOption(groupId, ruleId);
        }
        this.valueChangedEvent.trigger({
            oldValue: prevOption,
            value: this.optionValue,
            control: this
        });
    };
    RulesBuilderControl.prototype.onAddGroupButtonClick = function (event) {
        var newGroupId = this.generateUniqueId(), groupHtml = this.compileTemplate(this.controlStructure.groupRuleTemplateHtml, {
            groupId: newGroupId
        }), groupElement = jQuery(groupHtml), newRuleId = this.generateUniqueId();
        if (this.componentElement.find('.rule-group').length) {
            groupElement.insertAfter(this.componentElement.find('.rule-group:last'));
        }
        else {
            this.componentElement.find('.rule-groups').prepend(groupElement);
        }
        var ruleOption = {
            param: this.controlStructure.useEntries[0],
            operator: '==',
            value: null
        };
        this.optionValue.push({
            id: newGroupId,
            rules: []
        });
        this.createEmptyRule(newGroupId, newRuleId);
        this.setRuleOptions(newGroupId, newRuleId, ruleOption);
    };
    RulesBuilderControl.prototype.createEmptyGroup = function (newGroupId, prevGroupElement) {
        var groupHtml = this.compileTemplate(this.controlStructure.groupRuleTemplateHtml, {
            groupId: newGroupId
        }), groupElement = jQuery(groupHtml);
        if (prevGroupElement) {
            groupElement.insertAfter(prevGroupElement);
        }
        else {
            if (this.componentElement.find('.rule-group').length) {
                groupElement.insertAfter(this.componentElement.find('.rule-group:last'));
            }
            else {
                this.componentElement.find('.rule-groups').prepend(groupElement);
            }
        }
    };
    RulesBuilderControl.prototype.createEmptyRule = function (groupId, newRuleId, prevRuleElement) {
        var ruleHtml = this.compileTemplate(this.controlStructure.ruleTemplateHtml, {
            groupId: groupId,
            ruleId: newRuleId
        }), ruleElement = jQuery(ruleHtml);
        if (prevRuleElement) {
            ruleElement.insertAfter(prevRuleElement);
        }
        else {
            this.getGroupElement(groupId).find('.rules-table-body').append(ruleElement);
        }
        this.initSelect2();
    };
    RulesBuilderControl.prototype.onAddRuleButtonClick = function (event) {
        var buttonElement = jQuery(event.currentTarget), ruleId = buttonElement.parents('.rule-row:first').data('id'), groupId = buttonElement.parents('.rule-group:first').data('id'), prevRuleElement = this.getRuleElement(groupId, ruleId), newRuleId = this.generateUniqueId();
        this.createEmptyRule(groupId, newRuleId, prevRuleElement);
        var group = this.getGroupOption(groupId), pevPosition = this.getRulePosition(groupId, ruleId), options = {
            param: this.controlStructure.useEntries[0],
            operator: '==',
            value: null
        };
        group.rules.splice(pevPosition + 1, 0, {
            id: newRuleId,
            rule: options
        });
        this.setRuleOptions(groupId, newRuleId, options, pevPosition + 1);
    };
    RulesBuilderControl.prototype.onEntryValueChange = function (event) {
        var selectElement = jQuery(event.currentTarget), ruleId = selectElement.parents('.rule-row:first').data('id'), groupId = selectElement.parents('.rule-group:first').data('id'), operator = selectElement.val();
        this.changeRuleOption(groupId, ruleId, 'value', operator);
    };
    RulesBuilderControl.prototype.onOperatorChange = function (event) {
        var selectElement = jQuery(event.currentTarget), ruleId = selectElement.parents('.rule-row:first').data('id'), groupId = selectElement.parents('.rule-group:first').data('id'), operator = selectElement.val();
        this.changeRuleOption(groupId, ruleId, 'operator', operator);
    };
    RulesBuilderControl.prototype.onParamChange = function (event) {
        var selectElement = jQuery(event.currentTarget), ruleId = selectElement.parents('.rule-row:first').data('id'), groupId = selectElement.parents('.rule-group:first').data('id'), param = selectElement.val();
        this.changeRuleOption(groupId, ruleId, 'param', param);
        this.reloadEntries(groupId, ruleId);
    };
    RulesBuilderControl.prototype.reloadEntries = function (groupId, ruleId) {
        var _this = this;
        var param = this.getRuleOption(groupId, ruleId).rule.param, optionElement = this.getValueElementByRule(groupId, ruleId);
        optionElement.data('wcpf-loaded-options', false);
        optionElement.parents('td:first').block();
        if (RulesBuilderControl.optionsElements.hasOwnProperty(param)) {
            this.updateElementsWithParams(param);
        }
        else if (!RulesBuilderControl.optionsQueries.hasOwnProperty(param)
            || (RulesBuilderControl.optionsQueries[param].readyState == 4 && RulesBuilderControl.optionsQueries[param].status != 200)) {
            RulesBuilderControl.optionsQueries[param] = wp.ajax.send('wcpf_editor_rules_builder_get_options', {
                type: 'POST',
                dataType: 'json',
                data: {
                    param: param
                }
            }).done(function (data) {
                if (data && data.hasOwnProperty('optionsHtml')) {
                    RulesBuilderControl.optionsElements[param] = jQuery(data.optionsHtml);
                    _this.updateElementsWithParams(param);
                }
                else if (RulesBuilderControl.optionsQueries.hasOwnProperty(param)) {
                    delete RulesBuilderControl.optionsQueries[param];
                }
            });
        }
    };
    RulesBuilderControl.prototype.updateElementsWithParams = function (param) {
        if (typeof this.optionValue != 'object' || !this.optionValue) {
            return;
        }
        for (var groupIndex in this.optionValue) {
            var group = this.optionValue[groupIndex];
            for (var ruleIndex in group.rules) {
                var ruleItem = group.rules[ruleIndex];
                if (ruleItem.rule.param != param) {
                    continue;
                }
                var valueElement = this.getValueElementByRule(group.id, ruleItem.id);
                if (!valueElement.data('wcpf-loaded-options')) {
                    valueElement.html(RulesBuilderControl.optionsElements[param].html());
                    valueElement.data('wcpf-loaded-options', true);
                    valueElement.parents('td:first').unblock();
                }
                this.isRestoredOption = true;
                valueElement.val(ruleItem.rule.value);
                valueElement.trigger('change');
                this.isRestoredOption = false;
            }
        }
    };
    RulesBuilderControl.prototype.getValueElementByRule = function (groupId, ruleId) {
        return this.componentElement.find(".rule-group[data-id=\"" + groupId + "\"] .rule-row[data-id=\"" + ruleId + "\"] .value-select");
    };
    RulesBuilderControl.prototype.changeRuleOption = function (groupId, ruleId, optionName, optionValue) {
        if (!this.optionValue || typeof this.optionValue != 'object') {
            this.optionValueProp = [];
        }
        var ruleItem = this.getRuleOption(groupId, ruleId);
        if (ruleItem && ruleItem.rule[optionName] == optionValue) {
            return;
        }
        var prevOption = CloneVariable_1.default(this.optionValue);
        ruleItem.rule[optionName] = optionValue;
        if (!this.isRestoredOption) {
            this.valueChangedEvent.trigger({
                oldValue: prevOption,
                value: this.optionValue,
                control: this
            });
        }
    };
    RulesBuilderControl.optionsElements = {};
    RulesBuilderControl.optionsQueries = {};
    return RulesBuilderControl;
}(BaseControl_1.default));
exports.default = RulesBuilderControl;


/***/ }),
/* 249 */
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
var SourceAbstract_1 = __webpack_require__(103);
var CloneVariable_1 = __webpack_require__(43);
var OptionSource = (function (_super) {
    __extends(OptionSource, _super);
    function OptionSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionSource.prototype.saveValue = function () {
        var option = this.optionValue;
        if (typeof option == 'object') {
            option = CloneVariable_1.default(option);
        }
        this.panel.options.set(this.optionKey, option);
    };
    OptionSource.prototype.getValue = function () {
        var option = this.panel.options.has(this.optionKey) ? CloneVariable_1.default(this.panel.options.get(this.optionKey)) : undefined;
        if (typeof option == 'object') {
            option = CloneVariable_1.default(option);
        }
        return option;
    };
    return OptionSource;
}(SourceAbstract_1.default));
exports.default = OptionSource;


/***/ }),
/* 250 */
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
var SourceAbstract_1 = __webpack_require__(103);
var EntitySource = (function (_super) {
    __extends(EntitySource, _super);
    function EntitySource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntitySource.prototype.saveValue = function () {
        if (this.panel.hasOwnProperty('editorComponent')) {
            var editorComponent = this.panel.editorComponent;
            if (editorComponent.hasOwnProperty(this.optionKey) || this.optionKey in editorComponent) {
                editorComponent[this.optionKey] = this.optionValue;
            }
        }
    };
    EntitySource.prototype.getValue = function () {
        if (this.panel.hasOwnProperty('editorComponent')) {
            var editorComponent = this.panel.editorComponent;
            if (editorComponent.hasOwnProperty(this.optionKey) || this.optionKey in editorComponent) {
                return editorComponent[this.optionKey];
            }
        }
        return undefined;
    };
    return EntitySource;
}(SourceAbstract_1.default));
exports.default = EntitySource;


/***/ }),
/* 251 */
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
var SourceAbstract_1 = __webpack_require__(103);
var ObjectRepository_1 = __webpack_require__(42);
var ContainerSource = (function (_super) {
    __extends(ContainerSource, _super);
    function ContainerSource(container) {
        var _this = _super.call(this) || this;
        _this.optionKeyProp = null;
        _this.optionsRepository = new ObjectRepository_1.default();
        if (container) {
            _this.optionsRepository.container = container;
        }
        return _this;
    }
    Object.defineProperty(ContainerSource.prototype, "optionsContainer", {
        get: function () {
            return this.optionsRepository.container;
        },
        set: function (container) {
            this.optionsRepository.container = container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerSource.prototype, "optionKey", {
        get: function () {
            return this.optionKeyProp ? this.optionKeyProp : this.control.optionKey;
        },
        set: function (key) {
            this.optionKeyProp = key;
        },
        enumerable: true,
        configurable: true
    });
    ContainerSource.prototype.saveValue = function () {
        this.optionsRepository.set(this.optionKey, this.optionValue);
    };
    ContainerSource.prototype.getValue = function () {
        return this.optionsRepository.has(this.optionKey) ? this.optionsRepository.get(this.optionKey) : undefined;
    };
    return ContainerSource;
}(SourceAbstract_1.default));
exports.default = ContainerSource;


/***/ }),
/* 252 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var Compare_1 = __webpack_require__(67);
var ExtendObject_1 = __webpack_require__(15);
var DefaultRules = (function (_super) {
    __extends(DefaultRules, _super);
    function DefaultRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultRules.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    DefaultRules.prototype.initEditor = function (prototypes) {
        var container = this.register.controlRulesOperations;
        container.set('==', this.isEqualToOperator);
        container.set('!=', this.isNotEqualToOperator);
        container.set('>', this.greaterThanOperator);
        container.set('<', this.lessThanOperator);
        container.set('>=', this.greaterThanOrEqualToOperator);
        container.set('<=', this.lessThanOrEqualToOperator);
        container.set('in', this.inOperator);
        container.set('inControl', this.inControlOperator);
        container.set('notIn', this.notInOperator);
        container.set('notInControl', this.notInControlOperator);
    };
    DefaultRules.prototype.isEqualToOperator = function (controlValue, rule) {
        if (Array.isArray(controlValue)) {
            controlValue = ExtendObject_1.default({}, controlValue);
            return Compare_1.default(controlValue, rule.value);
        }
        return controlValue == rule.value;
    };
    DefaultRules.prototype.isNotEqualToOperator = function (controlValue, rule) {
        return !this.isEqualToOperator(controlValue, rule);
    };
    DefaultRules.prototype.greaterThanOperator = function (controlValue, rule) {
        return controlValue > rule.value;
    };
    DefaultRules.prototype.lessThanOperator = function (controlValue, rule) {
        return !this.greaterThanOperator(controlValue, rule);
    };
    DefaultRules.prototype.greaterThanOrEqualToOperator = function (controlValue, rule) {
        return controlValue >= rule.value;
    };
    DefaultRules.prototype.lessThanOrEqualToOperator = function (controlValue, rule) {
        return controlValue <= rule.value;
    };
    DefaultRules.prototype.inOperator = function (controlValue, rule) {
        return rule.value.indexOf(controlValue) !== -1;
    };
    DefaultRules.prototype.inControlOperator = function (controlValue, rule) {
        if (Array.isArray(controlValue)) {
            return controlValue.indexOf(rule.value) !== -1;
        }
        else if (typeof controlValue == 'object' && 'hasOwnProperty' in controlValue) {
            return controlValue.hasOwnProperty(rule.value);
        }
        return false;
    };
    DefaultRules.prototype.notInOperator = function (controlValue, rule) {
        return !this.inOperator(controlValue, rule);
    };
    DefaultRules.prototype.notInControlOperator = function (controlValue, rule) {
        return !this.inControlOperator(controlValue, rule);
    };
    return DefaultRules;
}(ComponentAbstract_1.default));
exports.default = DefaultRules;


/***/ }),
/* 253 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var BaseControl_1 = __webpack_require__(56);
var ObjectRepository_1 = __webpack_require__(42);
var CreateElement_1 = __webpack_require__(8);
var ControlLoader = (function (_super) {
    __extends(ControlLoader, _super);
    function ControlLoader() {
        var _this = _super.call(this) || this;
        _this.controlRequests = new Map();
        return _this;
    }
    ControlLoader.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/Control/ControlLoader', this);
    };
    ControlLoader.prototype.attachEvents = function (manager) { };
    ControlLoader.prototype.reloadControls = function (controls, callback) {
        var e_1, _a;
        var props = [];
        try {
            for (var _b = __values(controls.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                props.push(this.collectControlProps(control));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.reloadRequest(props, controls, callback);
    };
    ControlLoader.prototype.reloadControl = function (control, callback) {
        this.reloadRequest([this.collectControlProps(control)], [control], callback);
    };
    ControlLoader.prototype.collectControlProps = function (control) {
        var e_2, _a, e_3, _b, e_4, _c;
        var valuesRepository = new ObjectRepository_1.default({});
        try {
            for (var _d = __values(control.panelLayout.controls.values()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var childControl = _e.value;
                valuesRepository.set(childControl.optionKey, childControl.optionValue);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var parentsContext = {}, context = {}, controls = [control], path = [], parentControl = control.parentControl, entity = {};
        if (control.panel.hasOwnProperty('editorComponent')) {
            entity = control.panel.editorComponent.entity;
        }
        while (parentControl instanceof BaseControl_1.default) {
            controls.push(parentControl);
            parentControl = parentControl.parentControl;
        }
        controls.reverse();
        try {
            for (var _f = __values(controls.values()), _g = _f.next(); !_g.done; _g = _f.next()) {
                var childControl = _g.value;
                path.push(childControl.optionKey);
                try {
                    for (var _h = __values(childControl.contextControls.entries()), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var _k = __read(_j.value, 2), contextControlIndex = _k[0], contextControlItem = _k[1];
                        context[contextControlIndex] = contextControlItem.optionValue;
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                parentsContext[childControl.optionKey] = Object.assign({}, context);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return {
            options: valuesRepository.container,
            context: context,
            optionKey: control.optionKey,
            panelKey: control.panel.panelKey,
            controlPath: path,
            parentsContext: parentsContext,
            entity: entity
        };
    };
    ControlLoader.prototype.reloadRequest = function (props, controls, callback) {
        var e_5, _a, e_6, _b;
        try {
            for (var _c = __values(controls.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var control = _d.value;
                if (this.controlRequests.has(control)) {
                    this.controlRequests.get(control).abort();
                }
                control.componentElement.block();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var request = wp.ajax.send('wcpf_editor_control_reload', {
            type: 'POST',
            dataType: 'json',
            data: {
                controls: JSON.stringify(props)
            }
        }).done(function (data) {
            var e_7, _a;
            if (data.items && Array.isArray(data.items)) {
                try {
                    for (var _b = __values(data.items.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = __read(_c.value, 2), itemIndex = _d[0], itemData = _d[1];
                        if (typeof itemData != 'object') {
                            continue;
                        }
                        var control = controls[itemIndex], reloadProps = {
                            prevStructure: control.controlStructure,
                            structure: itemData.structure,
                            controlHtml: itemData.controlHtml,
                            controlElement: CreateElement_1.default(itemData.controlHtml)
                        };
                        control.controlStructure = itemData.structure;
                        if ('reloadControl' in control) {
                            control.reloadControl(reloadProps);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                if (callback) {
                    callback(controls);
                }
            }
        }).always(function () {
            var e_8, _a;
            try {
                for (var _b = __values(controls.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var control = _c.value;
                    control.componentElement.unblock();
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
        });
        try {
            for (var _e = __values(controls.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
                var control = _f.value;
                this.controlRequests.set(control, request);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    return ControlLoader;
}(ComponentAbstract_1.default));
exports.default = ControlLoader;


/***/ }),
/* 254 */
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
var ControlBuilder_1 = __webpack_require__(255);
var PanelBuilder_1 = __webpack_require__(256);
var PanelLayoutBuilder_1 = __webpack_require__(257);
var ProjectionBuilder_1 = __webpack_require__(258);
var ComponentBuilder_1 = __webpack_require__(259);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new ControlBuilder_1.default(),
            new PanelBuilder_1.default(),
            new PanelLayoutBuilder_1.default(),
            new ProjectionBuilder_1.default(),
            new ComponentBuilder_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 255 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var Builder = (function (_super) {
    __extends(Builder, _super);
    function Builder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Builder.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/Builder/Control', this);
    };
    Builder.prototype.attachEvents = function (manager) { };
    Builder.prototype.createControl = function (structure, panelLayout) {
        if (!this.prototypes.control.has(structure.controlKey)) {
            throw new Error("Control class not found by type '" + structure.controlKey + "'");
        }
        var controlPrototype = this.prototypes.control.get(structure.controlKey), control = this.componentBuilder.build(controlPrototype);
        if (!this.prototypes.controlSource.has(structure.controlSource)) {
            throw new Error("Control source by key '" + structure.controlSource + "' not found");
        }
        var sourcePrototype = this.prototypes.controlSource.get(structure.controlSource), controlSource = this.componentBuilder.build(sourcePrototype);
        controlSource.control = control;
        control.controlSource = controlSource;
        if (panelLayout) {
            control.panelLayout = panelLayout;
        }
        control.controlStructure = structure;
        return control;
    };
    return Builder;
}(ComponentAbstract_1.default));
exports.default = Builder;


/***/ }),
/* 256 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var Builder = (function (_super) {
    __extends(Builder, _super);
    function Builder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Builder.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/Builder/Panel', this);
    };
    Builder.prototype.attachEvents = function (manager) { };
    Builder.prototype.createPanel = function (key, context, entityId) {
        if (!this.prototypes.panel.has(key)) {
            throw new Error("Panel controller with id '" + key + "' not found");
        }
        if (entityId && !this.register.components.has(entityId)) {
            throw new Error("Editor element with id '" + entityId + "' not found");
        }
        var panelPrototype = this.prototypes.panel.get(key), panel = this.componentBuilder.build(panelPrototype);
        panel.panelKey = key;
        panel.panelContext = context;
        if (!entityId && panel.hasOwnProperty('editorComponent')) {
            throw new Error("For controller of '" + key + "' panel, need entity");
        }
        if (entityId) {
            var editorComponent = this.register.components.get(entityId);
            panel.editorComponent = editorComponent;
            if (editorComponent.hasOwnProperty('panels')) {
                editorComponent.panels.add(panel);
            }
        }
        return panel;
    };
    return Builder;
}(ComponentAbstract_1.default));
exports.default = Builder;


/***/ }),
/* 257 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var Builder = (function (_super) {
    __extends(Builder, _super);
    function Builder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Builder.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/Builder/PanelLayout', this);
    };
    Builder.prototype.attachEvents = function (manager) { };
    Builder.prototype.createPanelLayout = function (key) {
        if (!this.register.panelStructures.has(key)) {
            throw new Error("Panel structure with id '" + key + "' not found");
        }
        var panelStructure = this.register.panelStructures.get(key), panelLayoutPrototype = this.prototypes.panelLayout.get(panelStructure.panelLayoutKey), panelLayout = this.componentBuilder.build(panelLayoutPrototype);
        panelLayout.panelStructure = panelStructure;
        return panelLayout;
    };
    return Builder;
}(ComponentAbstract_1.default));
exports.default = Builder;


/***/ }),
/* 258 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var FindEntityById_1 = __webpack_require__(138);
var Builder = (function (_super) {
    __extends(Builder, _super);
    function Builder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Builder.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/Builder/Projection', this);
    };
    Builder.prototype.attachEvents = function (manager) { };
    Builder.prototype.createProjectionByEntityId = function (entityId) {
        var entity = FindEntityById_1.default(entityId, this.projectEntity);
        if (entity == null) {
            throw new Error("Entity by id '" + entityId + "' not found");
        }
        return this.createProjectionByEntity(entity);
    };
    Builder.prototype.createProjectionByEntity = function (entity) {
        if (!this.register.components.has(entity.entityId)) {
            throw new Error("Element by entity id '" + entity.entityId + "' not found");
        }
        return this.createProjectionByComponent(this.register.components.get(entity.entityId));
    };
    Builder.prototype.createProjectionByComponent = function (editorComponent) {
        return this.createProjectionByKey(editorComponent.entityKey, editorComponent);
    };
    Builder.prototype.createProjectionByKey = function (key, editorComponent) {
        if (!editorComponent.hasOwnProperty('projection')) {
            throw new Error("Element '#" + editorComponent.entityId + " - " + editorComponent.entityTitle + "' does not have projection support");
        }
        if (!this.prototypes.projection.has(key)) {
            throw new Error("Projection controller prototype by key '" + key + "' not found");
        }
        var prototype = this.prototypes.projection.get(key), projection = this.componentBuilder.build(prototype);
        if (editorComponent) {
            projection.editorComponent = editorComponent;
            editorComponent.projection = projection;
        }
        projection.projectionKey = key;
        projection.package = this.package;
        return projection;
    };
    return Builder;
}(ComponentAbstract_1.default));
exports.default = Builder;


/***/ }),
/* 259 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var FindEntityById_1 = __webpack_require__(138);
var Builder = (function (_super) {
    __extends(Builder, _super);
    function Builder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Builder.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/Builder/Component', this);
    };
    Builder.prototype.attachEvents = function (manager) { };
    Builder.prototype.createComponentByEntityId = function (entityId) {
        var entity = FindEntityById_1.default(entityId, this.projectEntity);
        if (entity == null) {
            throw new Error("Entity by id '" + entityId + "' not found");
        }
        return this.createComponentByEntity(entity);
    };
    Builder.prototype.createComponentByEntity = function (entity) {
        if (!this.prototypes.component.has(entity.entityKey)) {
            throw new Error("Element prototype by entity key '" + entity.entityKey + "' not found");
        }
        if (this.isNumeric(entity.entityId)) {
            entity.entityId = parseFloat(entity.entityId);
        }
        if (this.isNumeric(entity.parentId)) {
            entity.parentId = parseFloat(entity.parentId);
        }
        var componentPrototype = this.prototypes.component.get(entity.entityKey), editorComponent = this.componentBuilder.build(componentPrototype);
        editorComponent.entity = entity;
        this.register.components.set(entity.entityId, editorComponent);
        this.componentBuilder.implementation(editorComponent, this.package);
        if (entity.childEntities.length) {
            for (var i in entity.childEntities) {
                var itemEntity = entity.childEntities[i];
                this.createComponentByEntity(itemEntity);
            }
        }
        return editorComponent;
    };
    Builder.prototype.isNumeric = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return Builder;
}(ComponentAbstract_1.default));
exports.default = Builder;


/***/ }),
/* 260 */
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
var Registration_1 = __webpack_require__(261);
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
/* 261 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var EditorPanel_1 = __webpack_require__(262);
var ElementListControl_1 = __webpack_require__(263);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.panel.set('AddElement', EditorPanel_1.default);
        prototypes.control.set('ElementList', ElementListControl_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 262 */
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
var BasePanel_1 = __webpack_require__(139);
var ExtendObject_1 = __webpack_require__(15);
var EditorPanel = (function (_super) {
    __extends(EditorPanel, _super);
    function EditorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPanel.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        this.options.observable.add('field', this.onElementSelect, this);
        this.options.observable.add('preset', this.onElementSelect, this);
        this.options.observable.add('layout', this.onElementSelect, this);
    };
    EditorPanel.prototype.onElementSelect = function (value) {
        var elementCode = value.elementCode, defaultState = value.defaultState;
        if (!this.register.entityTypes.has(elementCode)) {
            return;
        }
        var entity = this.entityCollector.collectVirtualEntityByKey(elementCode);
        if (typeof defaultState == 'object') {
            entity = ExtendObject_1.default(entity, defaultState);
        }
        entity.parentId = this.projectEntity.entityId;
        this.projectEntity.childEntities.push(entity);
        var editorComponent = this.builders.component.createComponentByEntity(entity);
        if (editorComponent.hasOwnProperty('projection')) {
            this.projectionManager.addProjection(editorComponent);
        }
        if (this.prototypes.panel.has(entity.entityKey)) {
            this.panelManager.openPanel(entity.entityKey, entity.entityId);
        }
        else {
            this.panelManager.backPanel();
            if (editorComponent.hasOwnProperty('projection')) {
                this.projectionManager.scrollToProjection(editorComponent);
            }
        }
    };
    return EditorPanel;
}(BasePanel_1.default));
exports.default = EditorPanel;


/***/ }),
/* 263 */
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
var InputControlAbstract_1 = __webpack_require__(37);
var CreateElementByEvent_1 = __webpack_require__(55);
var ElementListControl = (function (_super) {
    __extends(ElementListControl, _super);
    function ElementListControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementListControl.prototype.attachEvents = function (manager) {
        manager.addElementHandler(this.componentElement, 'click', '.element-item[data-element-code]', this.onItemClick);
    };
    ElementListControl.prototype.onItemClick = function (event) {
        var itemElement = CreateElementByEvent_1.default(event);
        this.setElementValue({
            elementCode: itemElement.data('element-code'),
            defaultState: itemElement.data('default-state')
        });
        this.updateValueFromElement();
    };
    ElementListControl.prototype.setElementValue = function (value) {
        var selectedElement = this.componentElement.find('.element-item[data-element-code].selected');
        selectedElement.removeClass('selected');
        if (typeof value != 'object') {
            return;
        }
        var itemElement = this.componentElement.find(".element-item[data-element-code=\"" + value.elementCode + "\"]");
        itemElement.addClass('selected');
    };
    ElementListControl.prototype.getElementValue = function () {
        var selectedElement = this.componentElement.find('.element-item[data-element-code].selected');
        if (selectedElement.length) {
            return {
                elementCode: selectedElement.data('element-code'),
                defaultState: selectedElement.data('default-state')
            };
        }
        return null;
    };
    return ElementListControl;
}(InputControlAbstract_1.default));
exports.default = ElementListControl;


/***/ }),
/* 264 */
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
var SelectiveComponent_1 = __webpack_require__(104);
var ScrollPage_1 = __webpack_require__(105);
var CreateElementByEvent_1 = __webpack_require__(55);
var EntityStatus_1 = __webpack_require__(65);
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootSelector = '.woocommerce-product-filter-manage-project-wrapper';
        _this.rowModeWidth = 1140;
        return _this;
    }
    Dispatcher.prototype.initialProperties = function () {
        if (jQuery.hasOwnProperty('blockUI')) {
            jQuery.blockUI.defaults.message = null;
        }
    };
    Dispatcher.prototype.attachEvents = function (manager) {
        manager.addWindowHandler('load', this.onWindowLoaded);
        manager.addComponentHandler('click', '.editor-panel .navigation .save-project', this.saveProject);
        manager.addComponentHandler('click', '.editor-panel .navigation .add-element', this.onAddElementClick);
        manager.addComponentHandler('click', '.panel.projections-panel .view-mode-toggle .view-mode', this.onViewModeClick);
        manager.addWindowHandler('resize', this.onWindowResize);
    };
    Dispatcher.prototype.onViewModeClick = function (event) {
        var modeElement = CreateElementByEvent_1.default(event), mode = modeElement.data('mode');
        this.setMode(mode);
    };
    Dispatcher.prototype.setMode = function (mode) {
        this.rootElement.find('.panel.editor-panel').attr('data-panel-mode', mode);
        this.rootElement.find('.panel.projections-panel .view-mode-toggle .view-mode.active')
            .removeClass('active');
        this.rootElement.find(".panel.projections-panel .view-mode-toggle .view-mode[data-mode=\"" + mode + "\"]")
            .addClass('active');
    };
    Dispatcher.prototype.getMode = function () {
        var mode = this.rootElement.find('.panel.editor-panel').attr('data-panel-mode');
        return mode ? mode : (window.innerWidth < this.rowModeWidth ? 'row' : 'column');
    };
    Dispatcher.prototype.onWindowResize = function (event) {
        if (window.innerWidth < this.rowModeWidth) {
            this.setMode('row');
        }
    };
    Dispatcher.prototype.onWindowLoaded = function (event) {
        if (!window.hasOwnProperty('ProductFilterData')) {
            return;
        }
        if (window.innerWidth < this.rowModeWidth) {
            this.setMode('row');
        }
        else {
            this.setMode('column');
        }
        var editorData = window.ProductFilterData, editorComponentBuilder = this.builders.component, projectEntity = null;
        if (editorData.pageAction != 'edit' && editorData.pageAction != 'new') {
            return;
        }
        this.app.objectContainer.set('PageLinks', {
            listProject: editorData.pageLinks.list_project,
            newProject: editorData.pageLinks.new_project,
            editProject: editorData.pageLinks.edit_project,
        });
        this.app.objectContainer.set('Messages', editorData.messages);
        for (var panelId in editorData.editor.panels) {
            var structure = editorData.editor.panels[panelId];
            this.register.panelStructures.set(panelId, structure);
        }
        for (var entryIndex in editorData.registerEntities) {
            var entryData = editorData.registerEntities[entryIndex];
            this.register.entityTypes.set(entryIndex, {
                id: entryData.id,
                label: entryData.label,
                isGrouped: entryData.is_grouped,
                defaultOptions: entryData.default_options
            });
        }
        this.editorPackage.initEditorEvent.trigger(this.prototypes);
        if (window.hasOwnProperty('ProductFilterProjectData')) {
            var projectStructure = window.ProductFilterProjectData;
            projectEntity = this.entityCollector.collectEntityByStructure(projectStructure);
        }
        else {
            projectEntity = this.entityCollector.collectVirtualEntityByKey('Project');
        }
        if (editorData.pageAction == 'new' && editorData.postId) {
            projectEntity.entityId = editorData.postId;
            projectEntity.status = EntityStatus_1.default.published;
        }
        var projectEditorComponent = this.builders.component.createComponentByEntity(projectEntity);
        this.app.objectContainer.set('Editor/ProjectEntity', projectEntity);
        this.app.objectContainer.set('Editor/ProjectComponent', projectEditorComponent);
        this.editorPackage.projectLoadedEvent.trigger(this.register);
        this.panelManager.openPanel(projectEntity.entityKey, projectEntity.entityId);
        if (this.panelManager.activePanels.length) {
            var projectPanel = this.panelManager.activePanels[0];
            this.panelManager.checkCorrectnessOfOptions(projectPanel);
        }
        if (editorData.pageAction == 'new') {
            projectEditorComponent.titleChangedEvent.trigger({
                title: projectEditorComponent.entityTitle,
                oldTitle: projectEditorComponent.entityTitle,
                entity: projectEditorComponent.entity,
                editorComponent: projectEditorComponent
            });
        }
    };
    Dispatcher.prototype.saveProject = function () {
        var _this = this;
        var e_1, _a;
        var contentElement = this.app.bodyElement.find('#wpcontent'), activePanels = this.panelManager.activePanels, noticeContainerElement = this.app.bodyElement.find('.wcpf-notices-container');
        if (activePanels.length) {
            try {
                for (var activePanels_1 = __values(activePanels), activePanels_1_1 = activePanels_1.next(); !activePanels_1_1.done; activePanels_1_1 = activePanels_1.next()) {
                    var panel = activePanels_1_1.value;
                    if (!this.panelManager.checkCorrectnessOfOptions(panel)) {
                        return;
                    }
                    this.panelManager.modalToSaveOptions(panel);
                    if (!this.panelManager.checkCorrectnessOfOptions(panel)) {
                        return;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (activePanels_1_1 && !activePanels_1_1.done && (_a = activePanels_1.return)) _a.call(activePanels_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        contentElement.block();
        wp.ajax.send('wcpf_save_project', {
            type: 'POST',
            dataType: 'json',
            data: {
                projectEntity: JSON.stringify(this.projectEntity)
            }
        }).fail(function (data) {
            var e_2, _a;
            noticeContainerElement.html('');
            if (data.hasOwnProperty('messages') && data.messages.length) {
                try {
                    for (var _b = __values(data.messages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var message = _c.value;
                        noticeContainerElement.append(_this.getMessageTemplate(message));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                ScrollPage_1.default(noticeContainerElement.offset().top - (window.innerHeight / 2), 400);
            }
        }).done(function (data) {
            noticeContainerElement.html('');
            if (data.hasOwnProperty('projectId')) {
                var pageLinks = _this.app.objectContainer.get('PageLinks'), editLink = pageLinks.editProject;
                editLink = editLink.replace(/\%project_id\%/g, data.projectId);
                location.href = editLink;
            }
        }).always(function () {
            contentElement.unblock();
        });
    };
    Dispatcher.prototype.onAddElementClick = function () {
        this.panelManager.openPanel('AddElement');
    };
    Dispatcher.prototype.getMessageTemplate = function (message) {
        return "<div class=\"" + message.level + " " + message.level + "-level-message\">\n                <p class=\"text\">" + message.text + "</p>\n            </div>";
    };
    return Dispatcher;
}(SelectiveComponent_1.default));
exports.default = Dispatcher;


/***/ }),
/* 265 */
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
var HasProperty_1 = __webpack_require__(266);
var GetEntityElement_1 = __webpack_require__(267);
var SelectiveComponent = (function (_super) {
    __extends(SelectiveComponent, _super);
    function SelectiveComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootSelector = '';
        return _this;
    }
    Object.defineProperty(SelectiveComponent.prototype, "rootElement", {
        get: function () {
            return GetEntityElement_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    SelectiveComponent.prototype.getParentEntity = function () {
        if (HasProperty_1.default(this.package, 'rootSelector')) {
            return this.package;
        }
        return null;
    };
    SelectiveComponent.prototype.getEntityElement = function (endSelector) {
        return GetEntityElement_1.default(this, endSelector);
    };
    return SelectiveComponent;
}(ComponentAbstract_1.default));
exports.default = SelectiveComponent;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function HasProperty(object, index) {
    return object && object.hasOwnProperty(index);
}
exports.default = HasProperty;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GetEntitySelector_1 = __webpack_require__(73);
function GetEntityElement(entity, endSelector) {
    var selector = GetEntitySelector_1.default(entity, endSelector);
    if (!selector) {
        return null;
    }
    return jQuery(selector);
}
exports.default = GetEntityElement;


/***/ }),
/* 268 */
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
var SelectiveComponent_1 = __webpack_require__(104);
var CreateElement_1 = __webpack_require__(8);
var Compare_1 = __webpack_require__(67);
var ScrollPage_1 = __webpack_require__(105);
var ExtendObject_1 = __webpack_require__(15);
var PanelStatus_1 = __webpack_require__(68);
var PanelManager = (function (_super) {
    __extends(PanelManager, _super);
    function PanelManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootSelector = '.page-editor-container .panel.options-panel';
        _this.activePanels = [];
        return _this;
    }
    PanelManager.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/PanelManager', this);
    };
    PanelManager.prototype.attachEvents = function (manager) {
        manager.addComponentHandler('click', '.action-back-panel-on-click', this.backPanel);
    };
    PanelManager.prototype.checkIfPanelIsOpen = function (key, context, entityId) {
        for (var i in this.activePanels) {
            var panelItem = this.activePanels[i];
            if (entityId && panelItem.hasOwnProperty('editorComponent')) {
                if (panelItem.editorComponent.entityId == entityId
                    && panelItem.panelKey == key
                    && Compare_1.default(context, panelItem.panelContext)) {
                    return true;
                }
            }
            else {
                if (panelItem.panelKey == key
                    && Compare_1.default(context, panelItem.panelContext)) {
                    return true;
                }
            }
        }
        return false;
    };
    PanelManager.prototype.getCurrentPanel = function () {
        if (this.activePanels.length) {
            return this.activePanels[this.activePanels.length - 1];
        }
        return null;
    };
    PanelManager.prototype.openPanel = function (key, context, entityId) {
        if (typeof context == 'string' || typeof context == 'number') {
            entityId = context;
            context = {};
        }
        if (!key.length) {
            throw new Error('Parameter panel key is empty');
        }
        if (!context) {
            context = {};
        }
        if (this.checkIfPanelIsOpen(key, context, entityId)) {
            return;
        }
        if (this.activePanels.length) {
            var prevPanel = this.activePanels[this.activePanels.length - 1];
            if (!this.checkCorrectnessOfOptions(prevPanel)) {
                return;
            }
            this.modalToSaveOptions(prevPanel);
            if (!this.checkCorrectnessOfOptions(prevPanel)) {
                return;
            }
        }
        var template = this.getTemplate(key);
        if (template == null) {
            throw new Error("Panel template with id '" + key + "' not found");
        }
        var panelLayout = this.builders.panelLayout.createPanelLayout(key), panel = this.builders.panel.createPanel(key, context, entityId);
        panelLayout.panel = panel;
        panel.panelLayout = panelLayout;
        panel.package = this.package;
        panel.initialProperties();
        var domElement = CreateElement_1.default(template(panel.getTemplateContext(panel.panelContext)));
        domElement.hide();
        this.rootElement.append(domElement);
        panel.componentElement = panelLayout.componentElement = domElement;
        this.componentBuilder.implementation(panelLayout, this.package);
        panelLayout.assembleControls(panelLayout.panelStructure);
        panel.attachEvents(panel.eventManager);
        panel.status = PanelStatus_1.default.Launched;
        if (this.activePanels.length) {
            var prevPanel = this.activePanels[this.activePanels.length - 1], prevDomElement = prevPanel.componentElement;
            prevPanel.status = PanelStatus_1.default.Inactive;
            if (this.activePanels.length > 1) {
                prevPanel.status = PanelStatus_1.default.Destroyed;
                if (prevPanel.hasOwnProperty('editorComponent')) {
                    var prevEditorComponent = prevPanel.editorComponent;
                    if (prevEditorComponent.hasOwnProperty('panels')) {
                        prevEditorComponent.panels.delete(prevPanel);
                    }
                }
                this.activePanels.pop();
                this.animationOpen(prevDomElement, domElement, function (prev, next) {
                    prev.remove();
                });
            }
            else {
                this.animationOpen(prevDomElement, domElement);
            }
        }
        else {
            domElement.show();
            domElement.addClass('status-active');
        }
        panel.status = PanelStatus_1.default.Active;
        this.activePanels.push(panel);
    };
    PanelManager.prototype.backPanel = function (args) {
        if (!args) {
            args = {};
        }
        args = ExtendObject_1.default({
            ignoreValidation: false
        }, args);
        if (this.activePanels.length <= 1) {
            return;
        }
        var prevPanel = this.activePanels[this.activePanels.length - 1], prevDomElement = prevPanel.componentElement;
        if (!args.ignoreValidation) {
            if (!this.checkCorrectnessOfOptions(prevPanel)) {
                return;
            }
        }
        this.modalToSaveOptions(prevPanel);
        if (!args.ignoreValidation) {
            if (!this.checkCorrectnessOfOptions(prevPanel)) {
                return;
            }
        }
        var nextPanel = this.activePanels[this.activePanels.length - 2], nextDomElement = nextPanel.componentElement;
        prevPanel.status = PanelStatus_1.default.Inactive;
        nextPanel.status = PanelStatus_1.default.Active;
        prevPanel.status = PanelStatus_1.default.Destroyed;
        if (prevPanel.hasOwnProperty('editorComponent')) {
            var prevEditorComponent = prevPanel.editorComponent;
            if (prevEditorComponent.hasOwnProperty('panels')) {
                prevEditorComponent.panels.delete(prevPanel);
            }
        }
        this.activePanels.pop();
        this.animationBack(prevDomElement, nextDomElement, function (prev, next) {
            prev.remove();
        });
    };
    PanelManager.prototype.checkCorrectnessOfOptions = function (panel) {
        if ('validate' in panel) {
            return panel.validate();
        }
        return true;
    };
    PanelManager.prototype.modalToSaveOptions = function (panel) {
        if (!panel.isControlsSaved) {
            var message = this.localizedMessages.panel.shouldSaveOptionsOnPanel;
            message = message.replace(/--panel-title/g, panel.panelLayout.panelTitle);
            if (confirm(message)) {
                panel.saveValuesOfControls();
            }
            else {
                panel.resetValuesOfControls();
            }
        }
    };
    PanelManager.prototype.scrollToPanelElement = function (panelElement) {
        var adminBarElement = CreateElement_1.default('#wpadminbar'), panelTop = panelElement.offset().top, difference = window.scrollY - panelTop;
        if (difference > 200 || difference < -200) {
            var topPosition = panelTop - 20;
            if (adminBarElement.css('position') == 'fixed') {
                topPosition -= adminBarElement.height();
            }
            ScrollPage_1.default(topPosition, 500);
        }
    };
    PanelManager.prototype.animationOpen = function (prevElement, nextElement, callback) {
        nextElement.addClass('status-launched');
        nextElement.show();
        prevElement.removeClass('status-active')
            .addClass('status-inactive');
        nextElement.addClass('status-active');
        setTimeout(function () {
            nextElement.removeClass('status-launched');
            if (callback) {
                callback(prevElement, nextElement);
            }
        }, 600);
        this.scrollToPanelElement(nextElement);
    };
    PanelManager.prototype.animationBack = function (prevElement, nextElement, callback) {
        prevElement.removeClass('status-active')
            .addClass('status-destroyed');
        nextElement.removeClass('status-inactive')
            .addClass('status-active');
        setTimeout(function () {
            if (callback) {
                callback(prevElement, nextElement);
            }
        }, 600);
    };
    PanelManager.prototype.getTemplate = function (key) {
        var templateElement = this.app.bodyElement.find(".wcpf-panel-template[data-panel-key=" + key + "]");
        if (!templateElement.length) {
            return null;
        }
        var id = templateElement.attr('id');
        if (!id || id.indexOf('tmpl-') !== 0) {
            return null;
        }
        return wp.template(id.slice(5));
    };
    return PanelManager;
}(SelectiveComponent_1.default));
exports.default = PanelManager;


/***/ }),
/* 269 */
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
var SelectiveComponent_1 = __webpack_require__(104);
var Context_1 = __webpack_require__(24);
var CreateElement_1 = __webpack_require__(8);
var ScrollPage_1 = __webpack_require__(105);
var ExtendObject_1 = __webpack_require__(15);
var EntitiesWalk_1 = __webpack_require__(270);
var EntityStatus_1 = __webpack_require__(65);
var ChildProjectionDirection_1 = __webpack_require__(140);
var ProjectionManager = (function (_super) {
    __extends(ProjectionManager, _super);
    function ProjectionManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootSelector = '.page-editor-container .panel.projections-panel';
        _this.activeProjectionsProp = [];
        _this.sortableOptions = {};
        _this.sortingIsInitialized = false;
        return _this;
    }
    Object.defineProperty(ProjectionManager.prototype, "activeProjections", {
        get: function () {
            return this.activeProjectionsProp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectionManager.prototype, "containerElement", {
        get: function () {
            return this.rootElement.find('.projections-container');
        },
        enumerable: true,
        configurable: true
    });
    ProjectionManager.prototype.initialProperties = function () {
        this.app.componentRegister.set('Editor/ProjectionManager', this);
        this.sortableSelectors = [
            '.projections-container',
            '.sort-list'
        ];
        this.sortableRootSelectors = this.sortableSelectors.map(function (selector) {
            return '.page-editor-container .projections-panel ' + selector;
        }).join(',');
        this.sortableOptions = {
            items: '.sort-item',
            acceptFrom: this.sortableSelectors.join(', '),
            placeholder: "<div class=\"projection projection-placeholder\"></div>",
            forcePlaceholderSize: false
        };
    };
    ProjectionManager.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.projectLoadedEvent, this.onProjectLoaded);
        manager.addWindowHandler('load', this.onWindowLoad);
    };
    ProjectionManager.prototype.onWindowLoad = function (event) {
        this.attachSortableEvents();
        sortable(this.sortableRootSelectors, this.sortableOptions);
        this.sortingIsInitialized = true;
    };
    ProjectionManager.prototype.reloadSortable = function () {
        if (!this.sortingIsInitialized) {
            return;
        }
        sortable(this.sortableRootSelectors, 'destroy');
        sortable(this.sortableRootSelectors, this.sortableOptions);
        this.attachSortableEvents();
        var serializeSortable = sortable(this.sortableRootSelectors, 'serialize');
        for (var serializeIndex in serializeSortable) {
            var serializeItem = serializeSortable[serializeIndex];
            for (var index in serializeItem.items) {
                var item = serializeItem.items[index], itemDomElement = CreateElement_1.default(item.node), itemId = itemDomElement.data('entity-id');
                if (!this.register.components.has(itemId)) {
                    continue;
                }
                var itemComponent = this.register.components.get(itemId);
                itemComponent.entityOrder = index;
            }
        }
    };
    ProjectionManager.prototype.attachSortableEvents = function () {
        var _this = this;
        var containerElements = this.app.bodyElement.find(this.sortableRootSelectors), flagKey = 'wcpf-is-attached-sortable-events';
        containerElements.each(function (index, containerDomElement) {
            var containerElement = CreateElement_1.default(containerDomElement);
            if (!containerElement.data(flagKey)) {
                containerDomElement.addEventListener('sortupdate', Context_1.default(_this.onSortUpdate, _this));
                containerElement.data(flagKey, true);
            }
        });
    };
    ProjectionManager.prototype.onSortUpdate = function (event) {
        var e_1, _a, e_2, _b;
        var prevContainer = {
            node: event.detail.origin.container,
            items: event.detail.origin.items,
        }, currentContainer = {
            node: event.detail.destination.container,
            items: event.detail.destination.items,
        }, elementItem = {
            node: event.detail.item,
        }, isSameContainer = false;
        try {
            for (var _c = __values([currentContainer, prevContainer, elementItem]), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                item.editorComponent = null;
                item.projection = null;
                item.element = CreateElement_1.default(item.node);
                if (item.element.hasClass('sort-list')) {
                    item.element = item.element.parents('.sort-item:first');
                }
                if (item.element.hasClass('projections-container')) {
                    item.entityId = this.projectEntity.entityId;
                }
                else {
                    item.entityId = item.element.data('entity-id');
                }
                if (this.register.components.has(item.entityId)) {
                    item.editorComponent = this.register.components.get(item.entityId);
                    if (item.editorComponent && item.editorComponent.hasOwnProperty('projection')) {
                        item.projection = item.editorComponent.projection;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (currentContainer.element.get(0).isSameNode(prevContainer.element.get(0))) {
            isSameContainer = true;
        }
        var eventArgs = {
            editorComponent: elementItem.editorComponent,
            nextContainerComponent: currentContainer.editorComponent,
            prevContainerComponent: prevContainer.editorComponent
        };
        if (elementItem.editorComponent) {
            if (currentContainer.editorComponent) {
                elementItem.editorComponent.entityParentId = currentContainer.editorComponent.entityId;
            }
            else {
                elementItem.editorComponent.entityParentId = this.projectEntity.entityId;
            }
        }
        if (elementItem.projection) {
            elementItem.projection.moveProjectionEvent.trigger(ExtendObject_1.default({
                isSameContainer: isSameContainer
            }, eventArgs));
        }
        if (isSameContainer) {
            if (currentContainer.projection
                && currentContainer.projection.hasOwnProperty('moveChildProjectionEvent')) {
                currentContainer.projection.moveChildProjectionEvent.trigger(ExtendObject_1.default({
                    direction: ChildProjectionDirection_1.default.same
                }, eventArgs));
            }
        }
        else {
            if (currentContainer.projection
                && currentContainer.projection.hasOwnProperty('moveChildProjectionEvent')) {
                currentContainer.projection.moveChildProjectionEvent.trigger(ExtendObject_1.default({
                    direction: ChildProjectionDirection_1.default.inside
                }, eventArgs));
            }
            if (prevContainer.projection
                && prevContainer.projection.hasOwnProperty('moveChildProjectionEvent')) {
                prevContainer.projection.moveChildProjectionEvent.trigger(ExtendObject_1.default({
                    direction: ChildProjectionDirection_1.default.outside
                }, eventArgs));
            }
        }
        try {
            for (var _e = __values(isSameContainer ? [currentContainer] : [prevContainer, currentContainer]), _f = _e.next(); !_f.done; _f = _e.next()) {
                var container = _f.value;
                for (var index in container.items) {
                    var itemElement = CreateElement_1.default(container.items[index]), itemId = 0;
                    itemId = itemElement.data('entity-id');
                    if (this.register.components.has(itemId)) {
                        var itemEditorComponent = this.register.components.get(itemId);
                        itemEditorComponent.entityOrder = index;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ProjectionManager.prototype.onProjectLoaded = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.register.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var editorComponent = _c.value;
                if (!this.prototypes.projection.has(editorComponent.entityKey)
                    || !editorComponent.hasOwnProperty('projection')) {
                    continue;
                }
                this.addProjection(editorComponent);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    ProjectionManager.prototype.hasProjection = function (editorComponent) {
        for (var i in this.activeProjections) {
            var projectionItem = this.activeProjections[i];
            if (projectionItem.editorComponent.entityId == editorComponent.entityId) {
                return true;
            }
        }
        return false;
    };
    ProjectionManager.prototype.addProjection = function (editorComponent) {
        if (this.hasProjection(editorComponent)) {
            return;
        }
        if (!this.prototypes.projection.has(editorComponent.entityKey)) {
            throw new Error("Projection controller prototype with id '" + editorComponent.entityKey + "' not found");
        }
        if (!editorComponent.hasOwnProperty('projection')) {
            throw new Error("Element '#" + editorComponent.entityId + " - " + editorComponent.entityTitle + "' does not have projection support");
        }
        var projection = this.builders.projection.createProjectionByComponent(editorComponent), template = this.getTemplate(projection.projectionKey);
        if (template == null) {
            throw new Error("Projection template with id '" + projection.projectionKey + "' not found");
        }
        this.activeProjectionsProp.push(projection);
        projection.initialProperties();
        var domElement = CreateElement_1.default(template(projection.getTemplateContext()));
        projection.componentElement = domElement;
        var needInsertInContainer = true;
        if (editorComponent.entityParentId && this.register.components.has(editorComponent.entityParentId)) {
            var parentComponentItem = this.register.components.get(editorComponent.entityParentId), parentIsProjectionSupport = false;
            while (true) {
                if (parentComponentItem.hasOwnProperty('projection')) {
                    parentIsProjectionSupport = true;
                    break;
                }
                if (this.register.components.has(parentComponentItem.entityParentId)) {
                    parentComponentItem = this.register.components.get(parentComponentItem.entityParentId);
                }
                else {
                    break;
                }
            }
            if (parentIsProjectionSupport) {
                if (!parentComponentItem.projection
                    && this.prototypes.projection.has(parentComponentItem.entityKey)) {
                    this.addProjection(parentComponentItem);
                }
                var parentProjection = parentComponentItem.projection;
                if (parentProjection && 'insertChildComponentElement' in parentProjection) {
                    parentProjection.insertChildComponentElement(domElement, editorComponent);
                    needInsertInContainer = false;
                }
            }
        }
        if (needInsertInContainer) {
            this.containerElement.append(domElement);
        }
        projection.initialProjection();
        projection.attachEvents(projection.eventManager);
        if (editorComponent.entity.childEntities.length) {
            for (var i in editorComponent.entity.childEntities) {
                var childEntity = editorComponent.entity.childEntities[i], childComponent = this.register.components.get(childEntity.entityId);
                if (childComponent && childComponent.hasOwnProperty('projection')) {
                    this.addProjection(childComponent);
                }
            }
        }
        this.reloadSortable();
        this.triggerZoneState();
    };
    ProjectionManager.prototype.moveProjection = function (moveEditorComponent, containerEditorComponent) {
        if (!moveEditorComponent.hasOwnProperty('projection')) {
            throw new Error("Element '#" + moveEditorComponent.entityId + " - " + moveEditorComponent.entityTitle + "' does not have projection support");
        }
        var needInsertInProjectContainer = true, moveProjection = moveEditorComponent.projection, originDomElement = this.containerElement, destinationDomElement = this.containerElement;
        if (this.register.components.has(moveEditorComponent.entity.parentId)) {
            var originComponent = this.register.components.get(moveEditorComponent.entity.parentId);
            if (originComponent.hasOwnProperty('projection')
                && originComponent.projection) {
                originDomElement = originComponent.projection.componentElement;
            }
        }
        if (containerEditorComponent.hasOwnProperty('projection')) {
            var containerProjection = containerEditorComponent.projection;
            if (containerProjection && 'insertChildComponentElement' in containerProjection) {
                containerProjection.insertChildComponentElement(moveEditorComponent.projection.componentElement, moveEditorComponent);
                destinationDomElement = containerProjection.componentElement;
                needInsertInProjectContainer = false;
            }
        }
        if (needInsertInProjectContainer) {
            this.containerElement.append(moveEditorComponent.projection.componentElement);
        }
        var childSelectors = '> ' + this.sortableSelectors.join(', > ');
        this.onSortUpdate({
            detail: {
                origin: {
                    container: originDomElement.get(0),
                    items: originDomElement.find(childSelectors).toArray()
                },
                destination: {
                    container: destinationDomElement.get(0),
                    items: destinationDomElement.find(childSelectors).toArray()
                },
                item: moveEditorComponent.projection.componentElement.get(0)
            }
        });
    };
    ProjectionManager.prototype.removeProjection = function (editorComponent, needRemoveComponent) {
        var _this = this;
        var e_4, _a, e_5, _b;
        if (!editorComponent.hasOwnProperty('projection')) {
            throw new Error("Element '#" + editorComponent.entityId + " - " + editorComponent.entityTitle + "' does not have projection support");
        }
        if (!confirm(this.localizedMessages.projection['shouldRemoveElement'])) {
            return;
        }
        var projection = editorComponent.projection;
        if (!projection) {
            return;
        }
        if (editorComponent.entity.childEntities.length) {
            try {
                for (var _c = __values(editorComponent.entity.childEntities), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var childEntity = _d.value;
                    if (this.register.components.has(childEntity.entityId)) {
                        this.moveProjection(this.register.components.get(childEntity.entityId), this.projectEditorComponent);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        if (needRemoveComponent === undefined || needRemoveComponent) {
            editorComponent.entityStatus = EntityStatus_1.default.remove;
            if (editorComponent.entity.childEntities.length) {
                EntitiesWalk_1.default(editorComponent.entity, function (entity) {
                    var component = _this.register.components.get(entity.entityId);
                    component.status = EntityStatus_1.default.remove;
                });
            }
        }
        try {
            for (var _e = __values(this.panelManager.activePanels), _f = _e.next(); !_f.done; _f = _e.next()) {
                var panel = _f.value;
                if (panel.hasOwnProperty('editorComponent')
                    && panel.editorComponent.entityId == editorComponent.entityId) {
                    this.panelManager.backPanel({
                        ignoreValidation: true
                    });
                    break;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_5) throw e_5.error; }
        }
        projection.componentElement.remove();
        this.activeProjectionsProp = this.activeProjectionsProp.filter(function (item) { return item.editorComponent.entityId != editorComponent.entityId; });
        editorComponent.projection = null;
        this.reloadSortable();
        this.triggerZoneState();
    };
    ProjectionManager.prototype.scrollToProjection = function (editorComponent) {
        if (!editorComponent.hasOwnProperty('projection')) {
            return;
        }
        var projectionElement = editorComponent.projection.componentElement, topPosition = projectionElement.offset().top - (window.innerHeight / 2);
        ScrollPage_1.default(topPosition, 500);
    };
    ProjectionManager.prototype.triggerZoneState = function () {
        var zoneElement = this.rootElement.find('.projections-zone');
        if (this.activeProjections.length) {
            zoneElement.removeClass('empty-state');
        }
        else {
            zoneElement.addClass('empty-state');
        }
    };
    ProjectionManager.prototype.getTemplate = function (key) {
        var templateElement = this.app.bodyElement.find(".wcpf-projection-template[data-projection-key=" + key + "]");
        if (!templateElement.length) {
            return null;
        }
        var id = templateElement.attr('id');
        if (!id || id.indexOf('tmpl-') !== 0) {
            return null;
        }
        return wp.template(id.slice(5));
    };
    return ProjectionManager;
}(SelectiveComponent_1.default));
exports.default = ProjectionManager;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function EntitiesWalk(root, callback) {
    for (var i in root.childEntities) {
        var item = root.childEntities[i];
        callback(item);
        if (item.childEntities.length) {
            EntitiesWalk(item, callback);
        }
    }
}
exports.default = EntitiesWalk;


/***/ }),
/* 271 */
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
var Bootstrap_1 = __webpack_require__(272);
var Package = (function (_super) {
    __extends(Package, _super);
    function Package() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Package.prototype.getInitialComponents = function () {
        return [
            new Bootstrap_1.default()
        ];
    };
    return Package;
}(PackageAbstract_1.default));
exports.default = Package;


/***/ }),
/* 272 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var CreateElement_1 = __webpack_require__(8);
var Context_1 = __webpack_require__(24);
var Bootstrap = (function (_super) {
    __extends(Bootstrap, _super);
    function Bootstrap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Bootstrap.prototype, "validator", {
        get: function () {
            return jQuery.validator;
        },
        enumerable: true,
        configurable: true
    });
    Bootstrap.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Bootstrap.prototype.initEditor = function () {
        this.validator.setDefaults({
            debug: true,
            ignore: '.control-inactive,*:not([name])',
            errorPlacement: Context_1.default(this.errorPlacement, this)
        });
        var messages = {
            filterKeyText: '',
            filterKeyUniquer: '',
            requiredIfActiveControl: this.validator.messages.required
        };
        if (this.localizedMessages.hasOwnProperty('validatorErrors')) {
            for (var index in this.localizedMessages.validatorErrors) {
                var message = this.localizedMessages.validatorErrors[index];
                messages[index] = this.validator.format(message);
            }
        }
        this.validator.addMethod('requiredIfActiveControl', Context_1.default(this.requiredIfActiveControlMethod, this), messages.requiredIfActiveControl);
        this.validator.addMethod('requiredUnit', Context_1.default(this.requiredUnit, this), this.validator.messages.required);
        this.validator.addMethod('filterKeyText', Context_1.default(this.filterKeyTextMethod, this), messages.filterKeyText);
        this.validator.addMethod('filterKeyUniquer', Context_1.default(this.filterKeyUniquerMethod, this), messages.filterKeyUniquer);
        this.validator.addMethod('filterKeyUniquerDepends', Context_1.default(this.filterKeyUniquerDependsMethod, this), messages.filterKeyUniquer);
    };
    Bootstrap.prototype.requiredUnit = function (place, domElement) {
        var element = CreateElement_1.default(domElement), form = element.parents('form.panel-form');
        var handler = Context_1.default(this.validator.methods.required, form.data('validator'));
        return handler(place, domElement, function (unitDomElement) {
            var unitElement = CreateElement_1.default(unitDomElement), containerElement = unitElement.parents('.control-inputs-container:first'), textElement = containerElement.find('.text-size');
            return textElement.val().length > 0;
        });
    };
    Bootstrap.prototype.errorPlacement = function (place, element) {
        var controlElement = element.parents('.control:first'), errorContainerElement = controlElement.find('.validation-errors-container:first');
        if (errorContainerElement.length) {
            errorContainerElement.append(place);
        }
        else {
            place.insertAfter(element.get(0));
        }
    };
    Bootstrap.prototype.requiredIfActiveControlMethod = function (value, domElement, params) {
        var element = CreateElement_1.default(domElement), control = element.parents('.control:first'), form = element.parents('form.panel-form');
        if (!control.hasClass('control-inactive') && form.data('validator')) {
            var handler = Context_1.default(this.validator.methods.required, form.data('validator'));
            return handler(value, domElement, params);
        }
        return true;
    };
    Bootstrap.prototype.filterKeyTextMethod = function (value, element) {
        var template = /^[\w\d0-9\-\_]*$/;
        return template.test(value);
    };
    Bootstrap.prototype.filterKeyUniquerMethod = function (value, element, params) {
        var e_1, _a;
        var panel = this.panelManager.getCurrentPanel(), entityInPanel = null;
        if (panel.hasOwnProperty('editorComponent')) {
            entityInPanel = panel.editorComponent.entityId;
        }
        try {
            for (var _b = __values(this.register.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), entityId = _d[0], editorComponent = _d[1];
                if (entityInPanel == editorComponent.entityId || editorComponent.entityStatus == 'remove') {
                    continue;
                }
                if ('getFilterKeys' in editorComponent && editorComponent.getFilterKeys().indexOf(value) != -1) {
                    return false;
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
        return true;
    };
    Bootstrap.prototype.filterKeyUniquerDependsMethod = function (value, element, params) {
        var e_2, _a;
        var panel = this.panelManager.getCurrentPanel();
        if (Array.isArray(params)) {
            try {
                for (var params_1 = __values(params), params_1_1 = params_1.next(); !params_1_1.done; params_1_1 = params_1.next()) {
                    var field = params_1_1.value;
                    var control = panel.panelLayout.controls.get(field);
                    if (!control) {
                        continue;
                    }
                    if (control.optionValue == value) {
                        return false;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (params_1_1 && !params_1_1.done && (_a = params_1.return)) _a.call(params_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return true;
    };
    return Bootstrap;
}(ComponentAbstract_1.default));
exports.default = Bootstrap;


/***/ }),
/* 273 */
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
var Registration_1 = __webpack_require__(274);
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
/* 274 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var EditorPanel_1 = __webpack_require__(275);
var EditorComponent_1 = __webpack_require__(277);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.panel.set('Project', EditorPanel_1.default);
        prototypes.component.set('Project', EditorComponent_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 275 */
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
var EditorComponentPanel_1 = __webpack_require__(57);
var EditorPanel = (function (_super) {
    __extends(EditorPanel, _super);
    function EditorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPanel.prototype.getValidatorOptions = function () {
        return {
            rules: {
                entityTitle: {
                    required: true,
                    minlength: 2
                },
                filteringStarts: {
                    required: true
                },
                productsContainerSelector: {
                    requiredIfActiveControl: true
                },
                paginationSelector: {
                    requiredIfActiveControl: true
                },
                resultCountSelector: {
                    requiredIfActiveControl: true
                },
                sortingSelector: {
                    requiredIfActiveControl: true
                }
            }
        };
    };
    return EditorPanel;
}(EditorComponentPanel_1.default));
exports.default = EditorPanel;


/***/ }),
/* 276 */
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
var ApplicationEvent_1 = __webpack_require__(16);
var ExtendObject_1 = __webpack_require__(15);
var BasePanel_1 = __webpack_require__(139);
var ValidationPanel = (function (_super) {
    __extends(ValidationPanel, _super);
    function ValidationPanel() {
        var _this = _super.call(this) || this;
        _this.afterInitValidationEvent = new ApplicationEvent_1.default();
        _this.validateEvent = new ApplicationEvent_1.default();
        return _this;
    }
    ValidationPanel.prototype.attachEvents = function (manager) {
        var e_1, _a;
        _super.prototype.attachEvents.call(this, manager);
        try {
            for (var _b = __values(this.panelLayout.controls.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                manager.addSystemHandler(control.valueChangedEvent, this.validate);
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
    ValidationPanel.prototype.onLaunched = function () {
        var options = this.getValidatorOptions();
        var validator = this.formElement.validate(options);
        if (validator && validator.hasOwnProperty('settings')) {
            validator.settings = ExtendObject_1.default(validator.settings, options);
        }
        this.afterInitValidationEvent.trigger({
            panel: this,
            formElement: this.formElement,
            options: options
        });
    };
    ValidationPanel.prototype.onFormSubmit = function (event) {
        _super.prototype.onFormSubmit.call(this, event);
        this.saveValuesOfControls();
    };
    ValidationPanel.prototype.validate = function () {
        var isValid = this.formElement.valid();
        this.validateEvent.trigger({
            isValid: isValid,
            panel: this
        });
        return isValid;
    };
    ValidationPanel.prototype.saveValuesOfControls = function () {
        if (this.validate()) {
            _super.prototype.saveValuesOfControls.call(this);
        }
    };
    ValidationPanel.prototype.resetValuesOfControls = function () {
        var isControlsSaved = this.panelLayout.isControlsSaved;
        _super.prototype.resetValuesOfControls.call(this);
        if (!isControlsSaved) {
            this.validate();
        }
    };
    ValidationPanel.prototype.getValidatorOptions = function () {
        return {};
    };
    return ValidationPanel;
}(BasePanel_1.default));
exports.default = ValidationPanel;


/***/ }),
/* 277 */
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
var BaseComponent_1 = __webpack_require__(106);
var EditorComponent = (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panels = new Set();
        return _this;
    }
    EditorComponent.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addSystemHandler(this.titleChangedEvent, this.onTitleChanged);
    };
    EditorComponent.prototype.onTitleChanged = function (args) {
        var projectNameElement = this.app.bodyElement.find('.wp-heading-inline .project-name');
        projectNameElement.html(args.title);
    };
    return EditorComponent;
}(BaseComponent_1.default));
exports.default = EditorComponent;


/***/ }),
/* 278 */
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
var Package_1 = __webpack_require__(279);
var Package_2 = __webpack_require__(281);
var Package_3 = __webpack_require__(283);
var Package_4 = __webpack_require__(285);
var Package_5 = __webpack_require__(288);
var Package_6 = __webpack_require__(292);
var Package_7 = __webpack_require__(295);
var Package_8 = __webpack_require__(297);
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
/* 279 */
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
var Registration_1 = __webpack_require__(280);
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
/* 280 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var FieldListPanel_1 = __webpack_require__(58);
var FieldListComponent_1 = __webpack_require__(59);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('CheckBoxListField', FieldListComponent_1.default);
        prototypes.panel.set('CheckBoxListField', FieldListPanel_1.default);
        prototypes.projection.set('CheckBoxListField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 281 */
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
var Registration_1 = __webpack_require__(282);
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
/* 282 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var FieldListPanel_1 = __webpack_require__(58);
var FieldListComponent_1 = __webpack_require__(59);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        var editorPackage = this.app.packageRegister.get('Editor/Package');
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('RadioListField', FieldListComponent_1.default);
        prototypes.panel.set('RadioListField', FieldListPanel_1.default);
        prototypes.projection.set('RadioListField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 283 */
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
var Registration_1 = __webpack_require__(284);
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
/* 284 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var FieldListPanel_1 = __webpack_require__(58);
var FieldListComponent_1 = __webpack_require__(59);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('DropDownListField', FieldListComponent_1.default);
        prototypes.panel.set('DropDownListField', FieldListPanel_1.default);
        prototypes.projection.set('DropDownListField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 285 */
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
var Registration_1 = __webpack_require__(286);
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
/* 286 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var EditorPanel_1 = __webpack_require__(287);
var FieldComponent_1 = __webpack_require__(107);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('ButtonField', FieldComponent_1.default);
        prototypes.panel.set('ButtonField', EditorPanel_1.default);
        prototypes.projection.set('ButtonField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 287 */
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
var EditorComponentPanel_1 = __webpack_require__(57);
var ExtendObject_1 = __webpack_require__(15);
var PanelController = (function (_super) {
    __extends(PanelController, _super);
    function PanelController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelController.prototype.getValidatorOptions = function () {
        return ExtendObject_1.default(_super.prototype.getValidatorOptions.call(this), {
            rules: {
                entityTitle: {
                    required: true,
                    minlength: 2
                },
                action: {
                    required: true
                }
            }
        });
    };
    return PanelController;
}(EditorComponentPanel_1.default));
exports.default = PanelController;


/***/ }),
/* 288 */
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
var Registration_1 = __webpack_require__(289);
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
/* 289 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var EditorPanel_1 = __webpack_require__(290);
var EditorComponent_1 = __webpack_require__(291);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('PriceSliderField', EditorComponent_1.default);
        prototypes.panel.set('PriceSliderField', EditorPanel_1.default);
        prototypes.projection.set('PriceSliderField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 290 */
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
var EditorComponentPanel_1 = __webpack_require__(57);
var ExtendObject_1 = __webpack_require__(15);
var PanelController = (function (_super) {
    __extends(PanelController, _super);
    function PanelController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelController.prototype.getValidatorOptions = function () {
        return ExtendObject_1.default(_super.prototype.getValidatorOptions.call(this), {
            rules: {
                entityTitle: {
                    required: true,
                    minlength: 2
                },
                optionKey: {
                    requiredIfActiveControl: true,
                    filterKeyText: true,
                    filterKeyUniquer: true,
                    minlength: 2
                },
                minPriceOptionKey: {
                    requiredIfActiveControl: true,
                    filterKeyText: true,
                    filterKeyUniquer: true,
                    minlength: 2
                },
                maxPriceOptionKey: {
                    requiredIfActiveControl: true,
                    filterKeyText: true,
                    filterKeyUniquer: true,
                    filterKeyUniquerDepends: ['minPriceOptionKey'],
                    minlength: 2
                }
            }
        });
    };
    return PanelController;
}(EditorComponentPanel_1.default));
exports.default = PanelController;


/***/ }),
/* 291 */
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
var FieldComponent_1 = __webpack_require__(107);
var EditorComponent = (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorComponent.prototype.getFilterKeys = function () {
        var keys = [];
        if (this.options.get('optionKeyFormat') == 'dash') {
            keys.push(this.options.get('optionKey'));
        }
        else if (this.options.get('optionKeyFormat') == 'two') {
            keys.push(this.options.get('minPriceOptionKey'));
            keys.push(this.options.get('maxPriceOptionKey'));
        }
        return keys;
    };
    return EditorComponent;
}(FieldComponent_1.default));
exports.default = EditorComponent;


/***/ }),
/* 292 */
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
var Registration_1 = __webpack_require__(293);
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
/* 293 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var EditorPanel_1 = __webpack_require__(294);
var FieldListComponent_1 = __webpack_require__(59);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('BoxListField', FieldListComponent_1.default);
        prototypes.panel.set('BoxListField', EditorPanel_1.default);
        prototypes.projection.set('BoxListField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 294 */
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
var FieldListPanel_1 = __webpack_require__(58);
var ExtendObject_1 = __webpack_require__(15);
var EditorPanel = (function (_super) {
    __extends(EditorPanel, _super);
    function EditorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPanel.prototype.getValidatorOptions = function () {
        var options = _super.prototype.getValidatorOptions.call(this);
        options.rules = ExtendObject_1.default(options.rules, {
            boxSize: {
                required: true,
                number: true,
                min: 1
            },
            boxSizeUnit: {
                requiredUnit: true
            }
        });
        return options;
    };
    return EditorPanel;
}(FieldListPanel_1.default));
exports.default = EditorPanel;


/***/ }),
/* 295 */
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
var Registration_1 = __webpack_require__(296);
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
/* 296 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var FieldListPanel_1 = __webpack_require__(58);
var FieldListComponent_1 = __webpack_require__(59);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('TextListField', FieldListComponent_1.default);
        prototypes.panel.set('TextListField', FieldListPanel_1.default);
        prototypes.projection.set('TextListField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 297 */
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
var Registration_1 = __webpack_require__(298);
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
/* 298 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var EditorPanel_1 = __webpack_require__(299);
var FieldListComponent_1 = __webpack_require__(59);
var FieldProjection_1 = __webpack_require__(38);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('ColorListField', FieldListComponent_1.default);
        prototypes.panel.set('ColorListField', EditorPanel_1.default);
        prototypes.projection.set('ColorListField', FieldProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 299 */
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
var FieldListPanel_1 = __webpack_require__(58);
var ExtendObject_1 = __webpack_require__(15);
var EditorPanel = (function (_super) {
    __extends(EditorPanel, _super);
    function EditorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPanel.prototype.getValidatorOptions = function () {
        var options = _super.prototype.getValidatorOptions.call(this);
        options.rules = ExtendObject_1.default(options.rules, {
            colors: {
                repeaterItem: {
                    type: {
                        required: true
                    },
                    term: {
                        required: true
                    },
                    markerStyle: {
                        required: true
                    },
                    color: {
                        requiredIfActiveControl: true
                    }
                }
            }
        });
        return options;
    };
    return EditorPanel;
}(FieldListPanel_1.default));
exports.default = EditorPanel;


/***/ }),
/* 300 */
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
var Package_1 = __webpack_require__(301);
var Package_2 = __webpack_require__(306);
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
/* 301 */
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
var Registration_1 = __webpack_require__(302);
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
/* 302 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var ColumnPanel_1 = __webpack_require__(303);
var LayoutComponent_1 = __webpack_require__(142);
var EditorProjection_1 = __webpack_require__(304);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('ColumnsLayout', LayoutComponent_1.default);
        prototypes.panel.set('ColumnsLayoutItem', ColumnPanel_1.default);
        prototypes.projection.set('ColumnsLayout', EditorProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 303 */
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
var EditorComponentPanel_1 = __webpack_require__(57);
var ObjectRepository_1 = __webpack_require__(42);
var ColumnPanel = (function (_super) {
    __extends(ColumnPanel, _super);
    function ColumnPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnPanel.prototype.createOptionsRepository = function () {
        var entityOptions = this.editorComponent.entity.options, optionsContainer = entityOptions.columns[this.panelContext.columnIndex].options;
        return new ObjectRepository_1.default(optionsContainer);
    };
    ColumnPanel.prototype.getValidatorOptions = function () {
        return {
            rules: {
                width: {
                    required: true,
                    number: true,
                    min: 1
                },
                widthUnit: {
                    requiredUnit: true
                }
            }
        };
    };
    return ColumnPanel;
}(EditorComponentPanel_1.default));
exports.default = ColumnPanel;


/***/ }),
/* 304 */
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
var LayoutProjectionAbstract_1 = __webpack_require__(143);
var CreateElementByEvent_1 = __webpack_require__(55);
var CreateElement_1 = __webpack_require__(8);
var ObjectToArray_1 = __webpack_require__(102);
var ChildProjectionDirection_1 = __webpack_require__(140);
var EditorProjection = (function (_super) {
    __extends(EditorProjection, _super);
    function EditorProjection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EditorProjection.prototype, "columns", {
        get: function () {
            return this.entityOptions.get('columns');
        },
        set: function (value) {
            this.entityOptions.set('columns', value);
        },
        enumerable: true,
        configurable: true
    });
    EditorProjection.prototype.initialProjection = function () {
        _super.prototype.initialProjection.call(this);
        if (!Array.isArray(this.columns)) {
            this.columns = ObjectToArray_1.default(this.columns);
        }
        for (var i = 0; i < this.columns.length; i++) {
            if (!Array.isArray(this.columns[i].entities)) {
                this.columns[i].entities = ObjectToArray_1.default(this.columns[i].entities);
            }
            if (Array.isArray(this.columns[i].options)) {
                this.columns[i].options = Object.assign({}, this.columns[i].options);
            }
            this.createColumnElement(i);
        }
    };
    EditorProjection.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addSystemHandler(this.moveChildProjectionEvent, this.onMoveChildProjection);
        this.addElementHandler('click', ".actions-wrapper.entity-id-" + this.editorComponent.entityId + " .add-column-action", this.onAddColumnClick);
        this.addElementHandler('click', ".column-item .actions.entity-id-" + this.editorComponent.entityId + " .remove-action", this.onRemoveColumnClick);
        this.addElementHandler('click', ".column-item .actions.entity-id-" + this.editorComponent.entityId + " .edit-action", this.onEditColumnClick);
    };
    EditorProjection.prototype.onEditColumnClick = function (event) {
        var editButton = CreateElementByEvent_1.default(event), columnItem = editButton.parents('.column-item:first'), columnIndex = columnItem.data('column-index');
        this.panelManager.openPanel('ColumnsLayoutItem', {
            columnIndex: columnIndex
        }, this.editorComponent.entityId);
    };
    EditorProjection.prototype.onRemoveColumnClick = function (event) {
        var removeButton = CreateElementByEvent_1.default(event), columnItem = removeButton.parents('.column-item:first'), columnIndex = columnItem.data('column-index');
        this.removeColumn(columnIndex);
    };
    EditorProjection.prototype.onAddColumnClick = function (event) {
        var columnIndex = this.createEmptyColumn();
        this.panelManager.openPanel('ColumnsLayoutItem', {
            columnIndex: columnIndex
        }, this.editorComponent.entityId);
    };
    EditorProjection.prototype.onMoveChildProjection = function (args) {
        if (!args.editorComponent.hasOwnProperty('projection')) {
            return;
        }
        if (args.direction == ChildProjectionDirection_1.default.same) {
            this.outsideChild(args.editorComponent);
            this.insideChild(args.editorComponent);
        }
        else if (args.direction == ChildProjectionDirection_1.default.inside) {
            this.insideChild(args.editorComponent);
        }
        else if (args.direction == ChildProjectionDirection_1.default.outside) {
            this.outsideChild(args.editorComponent);
        }
    };
    EditorProjection.prototype.insideChild = function (editorComponent) {
        var moveProjectionElement = editorComponent.projection.componentElement, columnSelector = ".column-item.entity-id-" + this.editorComponent.entityId, columnElement = moveProjectionElement.parents(columnSelector), newColumnIndex = columnElement.data('column-index');
        var columns = this.columns;
        columns[newColumnIndex].entities.push(editorComponent.entityId);
        this.columns = columns;
    };
    EditorProjection.prototype.outsideChild = function (editorComponent) {
        var e_1, _a;
        var oldColumnIndex = 0, columns = this.columns;
        for (var i in columns) {
            var column = columns[i];
            try {
                for (var _b = __values(column.entities), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var j = _c.value;
                    if (j == editorComponent.entityId) {
                        oldColumnIndex = i;
                        break;
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
        }
        columns[oldColumnIndex].entities = columns[oldColumnIndex].entities.filter(function (entityId) {
            return entityId != editorComponent.entityId;
        });
        this.columns = columns;
    };
    EditorProjection.prototype.insertChildComponentElement = function (domElement, editorComponent) {
        var e_2, _a;
        var columns = this.columns, indexColumn = 0;
        for (var i in columns) {
            var column = columns[i];
            try {
                for (var _b = __values(column.entities), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var j = _c.value;
                    if (j == editorComponent.entityId) {
                        indexColumn = i;
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
        }
        this.getColumnContentElement(indexColumn).append(domElement);
    };
    EditorProjection.prototype.createEmptyColumn = function () {
        var columns = this.columns;
        columns.push({
            entities: [],
            options: {}
        });
        this.columns = columns;
        var index = columns.length - 1;
        this.createColumnElement(index);
        return index;
    };
    EditorProjection.prototype.createColumnElement = function (index) {
        var columnElement = CreateElement_1.default("\n            <div class=\"column-item column-item-" + index + " entity-id-" + this.editorComponent.entityId + "\"\n                data-column-index=\"" + index + "\">\n                <div class=\"column-header\">\n                    <div class=\"column-title\">\n                        <span class=\"text\">" + this.localizedMessages.columnsLayout.column + " " + index + "</span>\n                    </div>\n                    <div class=\"actions entity-id-" + this.editorComponent.entityId + "\">\n                        <div class=\"button-link edit-action\">\n                            <span class=\"text\">" + this.localizedMessages.columnsLayout.edit + "</span>\n                        </div>\n                        <div class=\"button-link remove-action\">\n                            <span class=\"text\">" + this.localizedMessages.columnsLayout.remove + "</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"sort-list column-content entity-id-" + this.editorComponent.entityId + "\"></div>\n            </div>\n        ");
        this.componentElement.find('.body-container:first').append(columnElement);
        this.projectionManager.reloadSortable();
        return columnElement;
    };
    EditorProjection.prototype.removeColumn = function (index) {
        var e_3, _a;
        if (index == 0) {
            return;
        }
        var columns = this.columns;
        if (columns.length > index && 0 <= index) {
            var entitiesInColumn = columns[index].entities;
            columns.splice(index, 1);
            this.columns = columns;
            try {
                for (var entitiesInColumn_1 = __values(entitiesInColumn), entitiesInColumn_1_1 = entitiesInColumn_1.next(); !entitiesInColumn_1_1.done; entitiesInColumn_1_1 = entitiesInColumn_1.next()) {
                    var entityId = entitiesInColumn_1_1.value;
                    if (!this.register.components.has(entityId)) {
                        continue;
                    }
                    this.projectionManager.moveProjection(this.register.components.get(entityId), this.editorComponent);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (entitiesInColumn_1_1 && !entitiesInColumn_1_1.done && (_a = entitiesInColumn_1.return)) _a.call(entitiesInColumn_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this.removeColumnElement(index);
            for (var i = index + 1; i <= columns.length; i++) {
                var newIndex = i - 1, columnItem = this.getColumnElement(i);
                columnItem.removeClass("column-item-" + i)
                    .addClass("column-item-" + newIndex)
                    .attr('data-column-index', newIndex);
                columnItem.find('> .column-header .column-title .text')
                    .html(this.localizedMessages.columnsLayout.column + ' ' + newIndex);
            }
        }
    };
    EditorProjection.prototype.removeColumnElement = function (index) {
        this.getColumnElement(index).remove();
        this.projectionManager.reloadSortable();
    };
    EditorProjection.prototype.getColumnElement = function (index) {
        return this.componentElement.find(".column-item.column-item-" + index + ".entity-id-" + this.editorComponent.entityId);
    };
    EditorProjection.prototype.getColumnContentElement = function (index) {
        return this.componentElement.find(".column-item.column-item-" + index + " .column-content.entity-id-" + this.editorComponent.entityId);
    };
    return EditorProjection;
}(LayoutProjectionAbstract_1.default));
exports.default = EditorProjection;


/***/ }),
/* 305 */
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
var ApplicationEvent_1 = __webpack_require__(16);
var BaseProjection_1 = __webpack_require__(141);
var GroupProjectionAbstract = (function (_super) {
    __extends(GroupProjectionAbstract, _super);
    function GroupProjectionAbstract() {
        var _this = _super.call(this) || this;
        _this.moveChildProjectionEvent = new ApplicationEvent_1.default();
        return _this;
    }
    return GroupProjectionAbstract;
}(BaseProjection_1.default));
exports.default = GroupProjectionAbstract;


/***/ }),
/* 306 */
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
var Registration_1 = __webpack_require__(307);
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
/* 307 */
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
var ComponentAbstract_1 = __webpack_require__(9);
var LayoutComponent_1 = __webpack_require__(142);
var EditorProjection_1 = __webpack_require__(308);
var EditorPanel_1 = __webpack_require__(309);
var Registration = (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Registration.prototype.attachEvents = function (manager) {
        manager.addSystemHandler(this.editorPackage.initEditorEvent, this.initEditor);
    };
    Registration.prototype.initEditor = function (prototypes) {
        prototypes.component.set('SimpleBoxLayout', LayoutComponent_1.default);
        prototypes.panel.set('SimpleBoxLayout', EditorPanel_1.default);
        prototypes.projection.set('SimpleBoxLayout', EditorProjection_1.default);
    };
    return Registration;
}(ComponentAbstract_1.default));
exports.default = Registration;


/***/ }),
/* 308 */
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
var LayoutProjectionAbstract_1 = __webpack_require__(143);
var EditorProjection = (function (_super) {
    __extends(EditorProjection, _super);
    function EditorProjection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EditorProjection.prototype, "titleElement", {
        get: function () {
            return this.componentElement.find(".title-container.entity-id-" + this.editorComponent.entityId + " .entity-title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorProjection.prototype, "containerElement", {
        get: function () {
            return this.componentElement.find(".sort-list.entity-id-" + this.editorComponent.entityId);
        },
        enumerable: true,
        configurable: true
    });
    EditorProjection.prototype.attachEvents = function (manager) {
        _super.prototype.attachEvents.call(this, manager);
        manager.addSystemHandler(this.editorComponent.titleChangedEvent, this.onTitleChanged);
    };
    EditorProjection.prototype.onTitleChanged = function (args) {
        this.titleElement.html(args.title);
    };
    EditorProjection.prototype.insertChildComponentElement = function (domElement, editorComponent) {
        this.containerElement.append(domElement);
    };
    return EditorProjection;
}(LayoutProjectionAbstract_1.default));
exports.default = EditorProjection;


/***/ }),
/* 309 */
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
var EditorComponentPanel_1 = __webpack_require__(57);
var EditorPanel = (function (_super) {
    __extends(EditorPanel, _super);
    function EditorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorPanel.prototype.getValidatorOptions = function () {
        return {
            rules: {
                entityTitle: {
                    required: true,
                    minlength: 2
                },
                defaultToggleState: {
                    requiredIfActiveControl: true
                }
            }
        };
    };
    return EditorPanel;
}(EditorComponentPanel_1.default));
exports.default = EditorPanel;


/***/ })
/******/ ]);
//# sourceMappingURL=admin.js.map