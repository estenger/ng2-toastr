System.registerDynamic("ng2-toastr/src/toast-container.component", ["@angular/core", "./toast-options"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('@angular/core');
  var toast_options_1 = $__require('./toast-options');
  var ToastContainer = (function() {
    function ToastContainer(options) {
      this.position = 'fixed';
      this.messageClass = 'toast-message';
      this.titleClass = 'toast-title';
      this.positionClass = 'toast-top-right';
      this.toasts = [];
      this.maxShown = 5;
      this.autoDismiss = true;
      if (options) {
        Object.assign(this, options);
      }
    }
    ToastContainer.prototype.addToast = function(toast) {
      if (this.positionClass.indexOf('top') > 0) {
        this.toasts.push(toast);
        if (this.toasts.length > this.maxShown) {
          this.toasts.splice(0, (this.toasts.length - this.maxShown));
        }
      } else {
        this.toasts.unshift(toast);
        if (this.toasts.length > this.maxShown) {
          this.toasts.splice(this.maxShown, (this.toasts.length - this.maxShown));
        }
      }
    };
    ToastContainer.prototype.removeToast = function(toastId) {
      this.toasts = this.toasts.filter(function(toast) {
        return toast.id !== toastId;
      });
    };
    ToastContainer.prototype.dismiss = function(toast) {
      if (!this.autoDismiss) {
        this.removeToast(toast.id);
      }
    };
    ToastContainer.prototype.anyToast = function() {
      return this.toasts.length > 0;
    };
    ToastContainer.prototype.findToast = function(toastId) {
      for (var _i = 0,
          _a = this.toasts; _i < _a.length; _i++) {
        var toast = _a[_i];
        if (toast.id === toastId) {
          return toast;
        }
      }
      return null;
    };
    ToastContainer = __decorate([core_1.Component({
      selector: 'toast-container',
      template: "\n    <div id=\"toast-container\" [style.position]=\"position\" class=\"{{positionClass}}\">\n      <div *ngFor=\"let toast of toasts\" class=\"toast-{{toast.type}}\" (click)=\"dismiss(toast)\">\n        <div *ngIf=\"toast.title\" class=\"{{titleClass}}\">{{toast.title}}</div>\n        <div class=\"{{messageClass}}\">{{toast.message}}</div>\n      </div>\n    </div>\n    "
    }), __param(0, core_1.Optional()), __param(0, core_1.Inject(toast_options_1.ToastOptions)), __metadata('design:paramtypes', [Object])], ToastContainer);
    return ToastContainer;
  }());
  exports.ToastContainer = ToastContainer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast-options", ["@angular/core"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var ToastOptions = (function() {
    function ToastOptions(options) {
      Object.assign(this, options);
    }
    ToastOptions = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [Object])], ToastOptions);
    return ToastOptions;
  }());
  exports.ToastOptions = ToastOptions;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var Toast = (function() {
    function Toast(type, message, title) {
      this.type = type;
      this.message = message;
      this.title = title;
    }
    return Toast;
  }());
  exports.Toast = Toast;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast-manager", ["@angular/core", "./toast-container.component", "./toast-options", "./toast"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var __param = (this && this.__param) || function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
  var core_1 = $__require('@angular/core');
  var toast_container_component_1 = $__require('./toast-container.component');
  var toast_options_1 = $__require('./toast-options');
  var toast_1 = $__require('./toast');
  var ToastsManager = (function() {
    function ToastsManager(componentFactoryResolver, appRef, injector, options) {
      this.componentFactoryResolver = componentFactoryResolver;
      this.appRef = appRef;
      this.injector = injector;
      this.options = {
        autoDismiss: true,
        toastLife: 3000
      };
      this.index = 0;
      if (options) {
        Object.assign(this.options, options);
      }
    }
    ToastsManager.prototype.show = function(toast) {
      if (!this.container) {
        var rootComponent = this.appRef.componentTypes[0];
        var appContainer = this.injector.get(rootComponent).viewContainerRef;
        var providers = core_1.ReflectiveInjector.resolve([{
          provide: toast_options_1.ToastOptions,
          useValue: this.options
        }]);
        var toastFactory = this.componentFactoryResolver.resolveComponentFactory(toast_container_component_1.ToastContainer);
        var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, appContainer.parentInjector);
        this.container = appContainer.createComponent(toastFactory, appContainer.length, childInjector);
        this.setupToast(toast);
      } else {
        this.setupToast(toast);
      }
    };
    ToastsManager.prototype.createTimeout = function(toastId) {
      var _this = this;
      setTimeout(function() {
        _this.clearToast(toastId);
      }, this.options.toastLife);
    };
    ToastsManager.prototype.setupToast = function(toast) {
      toast.id = ++this.index;
      this.container.instance.addToast(toast);
      if (this.options.autoDismiss) {
        this.createTimeout(toast.id);
      }
    };
    ToastsManager.prototype.clearToast = function(toastId) {
      if (this.container) {
        var instance = this.container.instance;
        instance.removeToast(toastId);
        if (!instance.anyToast()) {
          this.dispose();
        }
      }
    };
    ToastsManager.prototype.dispose = function() {
      this.container.destroy();
      this.container = null;
    };
    ToastsManager.prototype.error = function(message, title) {
      var toast = new toast_1.Toast('error', message, title);
      this.show(toast);
    };
    ToastsManager.prototype.info = function(message, title) {
      var toast = new toast_1.Toast('info', message, title);
      this.show(toast);
    };
    ToastsManager.prototype.success = function(message, title) {
      var toast = new toast_1.Toast('success', message, title);
      this.show(toast);
    };
    ToastsManager.prototype.warning = function(message, title) {
      var toast = new toast_1.Toast('warning', message, title);
      this.show(toast);
    };
    ToastsManager = __decorate([core_1.Injectable(), __param(3, core_1.Optional()), __param(3, core_1.Inject(toast_options_1.ToastOptions)), __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ApplicationRef, core_1.Injector, Object])], ToastsManager);
    return ToastsManager;
  }());
  exports.ToastsManager = ToastsManager;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/src/toast.module", ["@angular/core", "@angular/common", "./toast-container.component", "./toast-manager"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var common_1 = $__require('@angular/common');
  var toast_container_component_1 = $__require('./toast-container.component');
  var toast_manager_1 = $__require('./toast-manager');
  var ToastModule = (function() {
    function ToastModule() {}
    ToastModule = __decorate([core_1.NgModule({
      imports: [common_1.CommonModule],
      declarations: [toast_container_component_1.ToastContainer],
      exports: [toast_container_component_1.ToastContainer],
      providers: [toast_manager_1.ToastsManager]
    }), __metadata('design:paramtypes', [])], ToastModule);
    return ToastModule;
  }());
  exports.ToastModule = ToastModule;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("ng2-toastr/ng2-toastr", ["./src/toast", "./src/toast-manager", "./src/toast-container.component", "./src/toast-options", "./src/toast.module"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('./src/toast'));
  __export($__require('./src/toast-manager'));
  __export($__require('./src/toast-container.component'));
  __export($__require('./src/toast-options'));
  __export($__require('./src/toast.module'));
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=ng2-toastr.js.map