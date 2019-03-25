(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./src/app/landing-page/registration/registration-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/landing-page/registration/registration-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.component */ "./src/app/landing-page/registration/registration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing-page/registration/registration.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page/registration/registration.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <mat-card>\n    <mat-card-content>\n\n      <div>\n        <p id=\"header\">Registration</p>\n      </div>\n\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"signupForm\">\n        <mat-form-field color=\"accent\">\n          <mat-label>Email</mat-label>\n          <input matInput type=\"text\" formControlName=\"email\">\n          <mat-error *ngIf=\"signupForm.get('email').invalid\">\n            <mat-error *ngIf=\"email.required\">This is required.</mat-error>\n            <mat-error *ngIf=\"email.pattern\">Not a valid email address.</mat-error>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n          <mat-label>Password</mat-label>\n          <input matInput type=\"password\" formControlName=\"password\">\n          <mat-error *ngIf=\"signupForm.get('password').invalid\">\n            <mat-error *ngIf=\"password.required\">This is required.</mat-error>\n            <mat-error *ngIf=\"password.minlength\">Password too short.</mat-error>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n          <mat-label>Confirm assword</mat-label>\n          <input matInput type=\"password\" formControlName=\"confirm\">\n          <mat-error *ngIf=\"signupForm.get('confirm').invalid\">\n            <mat-error *ngIf=\"confirm.isNotMatched\">Password not matched.</mat-error>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field color=\"accent\">\n          <mat-label>Display name</mat-label>\n          <input matInput type=\"text\" formControlName=\"display\">\n          <mat-error *ngIf=\"signupForm.get('display').invalid\">\n            <mat-error *ngIf=\"display.required\">This is required.</mat-error>\n            <mat-error *ngIf=\"display.minlength\">Display name too short.</mat-error>\n            <mat-error *ngIf=\"display.containsAlpha && !display.containsNone\">Must contain atleast 1 lowercase character.</mat-error>\n          </mat-error>\n        </mat-form-field>\n\n        <button mat-raised-button>CREATE ACCOUNT</button>\n      </form>\n\n    </mat-card-content>\n    <mat-card-footer *ngIf=\"isSigningin\">\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </mat-card-footer>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/registration/registration.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/landing-page/registration/registration.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  display: flex;\n  height: 100vh; }\n  #container .mat-card {\n    width: 80vw;\n    margin: 20vh auto auto;\n    padding-bottom: 0; }\n  #container .mat-card #header {\n      font-size: 2em;\n      margin-bottom: 10px; }\n  #container .mat-card .mat-form-field {\n      width: 100%; }\n  #container .mat-card .mat-raised-button {\n      float: right;\n      margin-bottom: 24px; }\n"

/***/ }),

/***/ "./src/app/landing-page/registration/registration.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/landing-page/registration/registration.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegistrationComponent, CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EMAILPATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, firestoreService) {
        this.fb = fb;
        this.firestoreService = firestoreService;
        // this.signupForm = fb.group({
        //   'email': [ 'q@q.com', [ Validators.required, Validators.pattern(EMAILPATTERN), CustomValidator.containsNone ] ],
        //   'password': [ '123123', [ Validators.required, Validators.minLength(6), CustomValidator.containsNone ] ],
        //   'confirm': [ '123123', [ this.confirmCheck.bind(this), CustomValidator.containsNone ] ],
        //   'display': [ 'madara', [ Validators.required, Validators.minLength(6), CustomValidator.containAlpha, CustomValidator.containsNone ] ]
        // })
        this.signupForm = fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAILPATTERN), CustomValidator.containsNone]],
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), CustomValidator.containsNone]],
            'confirm': ['', [this.confirmCheck.bind(this), CustomValidator.containsNone]],
            'display': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), CustomValidator.containAlpha, CustomValidator.containsNone]]
        });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSigningin = false;
        this.current = this.signupForm.value.password;
        this.signupForm.valueChanges.subscribe(function (response) {
            var password = response.password;
            _this.current = password;
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "email", {
        get: function () {
            return this.signupForm.get('email').errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "password", {
        get: function () {
            return this.signupForm.get('password').errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "confirm", {
        get: function () {
            return this.signupForm.get('confirm').errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "display", {
        get: function () {
            return this.signupForm.get('display').errors;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.confirmCheck = function (control) {
        var condition = control.value === this.current;
        return condition ? null : { isNotMatched: true };
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signupForm.invalid) {
            alert('Input invalid. Please try again.');
            return;
        }
        this.isSigningin = true;
        this.firestoreService.createNewUser(this.signupForm.value)
            .catch(function (e) {
            _this.isSigningin = false;
            var email = _this.signupForm.value.email;
            _this.signupForm.reset();
            _this.signupForm.patchValue({ email: email });
            alert(e.message);
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/landing-page/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/landing-page/registration/registration.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());

var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    CustomValidator.containAlpha = function (control) {
        var CONTAIN_LOWERCASE_REGEXP = /[a-z]/;
        return CONTAIN_LOWERCASE_REGEXP.test(control.value) ? null : { containsAlpha: true };
    };
    CustomValidator.containsNone = function (control) {
        var condition = String(control.value).length !== 0;
        return condition ? null : { containsNone: true };
    };
    return CustomValidator;
}());



/***/ }),

/***/ "./src/app/landing-page/registration/registration.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/landing-page/registration/registration.module.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/landing-page/registration/registration-routing.module.ts");
/* harmony import */ var _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/modules/material2.module */ "./src/app/common/core/modules/material2.module.ts");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration.component */ "./src/app/landing-page/registration/registration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegistrationRoutingModule"],
                _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__["Material2Module"]
            ],
            declarations: [
                _registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map