/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
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
var import0 = require("@angular/core");
var import1 = require("./toast.module");
var import2 = require("@angular/common");
var import3 = require("./toast-container.component.ngfactory");
var ToastModuleInjector = (function (_super) {
    __extends(ToastModuleInjector, _super);
    function ToastModuleInjector(parent) {
        return _super.call(this, parent, [import3.ToastContainerNgFactory], []) || this;
    }
    Object.defineProperty(ToastModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    ToastModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ToastModule_1 = new import1.ToastModule();
        return this._ToastModule_1;
    };
    ToastModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.ToastModule)) {
            return this._ToastModule_1;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    ToastModuleInjector.prototype.destroyInternal = function () {
    };
    return ToastModuleInjector;
}(import0.ɵNgModuleInjector));
exports.ToastModuleNgFactory = new import0.NgModuleFactory(ToastModuleInjector, import1.ToastModule);
//# sourceMappingURL=toast.module.ngfactory.js.map