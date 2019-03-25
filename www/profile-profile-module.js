(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/common/shared/pipes/timestamp3.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/common/shared/pipes/timestamp3.pipe.ts ***!
  \********************************************************/
/*! exports provided: TimestampPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampPipe", function() { return TimestampPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimestampPipe = /** @class */ (function () {
    function TimestampPipe() {
    }
    TimestampPipe.prototype.transform = function (unix, args) {
        var newDate = new Date(unix * 1000);
        ;
        var timestamp = moment__WEBPACK_IMPORTED_MODULE_1__(newDate).fromNow();
        return timestamp;
    };
    TimestampPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timestamp'
        })
    ], TimestampPipe);
    return TimestampPipe;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/profile/profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ "./src/app/dashboard/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <div id=\"img-container\">\n    <img src=\"{{ (user | async)?.avatar?.url }}\" alt=\"god-madara-uchiha\" width=\"170\" height=\"170\">\n  </div>\n\n  <mat-card>\n    <mat-card-content>\n      <p id=\"display\">{{ (user | async)?.display }}</p>\n      <p id=\"email\">{{ (user | async)?.email }}</p>\n      <p id=\"timestamp\">Joined {{ (user | async)?.timestamp | timestamp }}</p>\n    </mat-card-content>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  display: flex; }\n  #container #img-container {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    display: flex; }\n  #container #img-container img {\n      margin: auto;\n      margin-top: 0;\n      margin-bottom: 0;\n      border-radius: 100%; }\n  #container .mat-card {\n    margin: auto;\n    margin-top: 12.5vh;\n    padding-top: 14vh;\n    width: 80vw; }\n  #container .mat-card #display {\n      font-size: 2em;\n      text-align: center;\n      margin: 0; }\n  #container .mat-card #email {\n      font-size: 1.5em;\n      text-align: center;\n      margin: 0; }\n  #container .mat-card #timestamp {\n      font-size: 1em;\n      text-align: center;\n      margin: 1vh 0 0 0;\n      color: #7c7c7c; }\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(firestore) {
        this.firestore = firestore;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.firestore.currentUser;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/dashboard/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/profile/profile.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/dashboard/profile/profile-routing.module.ts");
/* harmony import */ var _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/core/modules/material2.module */ "./src/app/common/core/modules/material2.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _common_shared_pipes_timestamp3_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shared/pipes/timestamp3.pipe */ "./src/app/common/shared/pipes/timestamp3.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProfileRoutingModule"],
                _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_3__["Material2Module"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _common_shared_pipes_timestamp3_pipe__WEBPACK_IMPORTED_MODULE_5__["TimestampPipe"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map