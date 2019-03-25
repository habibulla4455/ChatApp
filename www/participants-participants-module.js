(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["participants-participants-module"],{

/***/ "./src/app/common/shared/pipes/timestamp2.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/common/shared/pipes/timestamp2.pipe.ts ***!
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

/***/ "./src/app/dashboard/chat-room/participants/participants-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/chat-room/participants/participants-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ParticipantsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsRoutingModule", function() { return ParticipantsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _participants_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participants.component */ "./src/app/dashboard/chat-room/participants/participants.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _participants_component__WEBPACK_IMPORTED_MODULE_2__["ParticipantsComponent"] }
];
var ParticipantsRoutingModule = /** @class */ (function () {
    function ParticipantsRoutingModule() {
    }
    ParticipantsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ParticipantsRoutingModule);
    return ParticipantsRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/chat-room/participants/participants.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/chat-room/participants/participants.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n\n  <h3 mat-subheader>Room participants</h3>\n  <mat-list-item *ngFor=\"let participant of (participants | async); last as isLast\">\n    <img mat-list-avatar src=\"{{ participant?.url }}\">\n    <h4 mat-line>{{ participant?.user_name }}</h4>\n    <p mat-line>\n      <span>Joined -- </span>\n      <span class=\"demo-secondary-text\">{{ participant?.timestamp | timestamp }}</span>\n    </p>\n    <mat-divider inset *ngIf=\"!isLast\"></mat-divider>\n  </mat-list-item>\n\n</mat-list>\n"

/***/ }),

/***/ "./src/app/dashboard/chat-room/participants/participants.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/chat-room/participants/participants.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-secondary-text {\n  color: #888888; }\n"

/***/ }),

/***/ "./src/app/dashboard/chat-room/participants/participants.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/chat-room/participants/participants.component.ts ***!
  \****************************************************************************/
/*! exports provided: ParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsComponent", function() { return ParticipantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
/* harmony import */ var _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/services/shared.service */ "./src/app/common/core/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParticipantsComponent = /** @class */ (function () {
    function ParticipantsComponent(firestore, sharedService) {
        this.firestore = firestore;
        this.sharedService = sharedService;
    }
    ParticipantsComponent.prototype.ngOnInit = function () {
        var room_name = this.sharedService.room.room_name;
        this.participants = this.firestore.participants(room_name);
    };
    ParticipantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-participants',
            template: __webpack_require__(/*! ./participants.component.html */ "./src/app/dashboard/chat-room/participants/participants.component.html"),
            styles: [__webpack_require__(/*! ./participants.component.scss */ "./src/app/dashboard/chat-room/participants/participants.component.scss")],
        }),
        __metadata("design:paramtypes", [_common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"], _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ParticipantsComponent);
    return ParticipantsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/chat-room/participants/participants.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/chat-room/participants/participants.module.ts ***!
  \*************************************************************************/
/*! exports provided: ParticipantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsModule", function() { return ParticipantsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _participants_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./participants-routing.module */ "./src/app/dashboard/chat-room/participants/participants-routing.module.ts");
/* harmony import */ var _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/modules/material2.module */ "./src/app/common/core/modules/material2.module.ts");
/* harmony import */ var _participants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participants.component */ "./src/app/dashboard/chat-room/participants/participants.component.ts");
/* harmony import */ var _common_shared_pipes_timestamp2_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/shared/pipes/timestamp2.pipe */ "./src/app/common/shared/pipes/timestamp2.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ParticipantsModule = /** @class */ (function () {
    function ParticipantsModule() {
    }
    ParticipantsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _participants_routing_module__WEBPACK_IMPORTED_MODULE_2__["ParticipantsRoutingModule"],
                _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_3__["Material2Module"]
            ],
            declarations: [
                _participants_component__WEBPACK_IMPORTED_MODULE_4__["ParticipantsComponent"],
                _common_shared_pipes_timestamp2_pipe__WEBPACK_IMPORTED_MODULE_5__["TimestampPipe"]
            ]
        })
    ], ParticipantsModule);
    return ParticipantsModule;
}());



/***/ })

}]);
//# sourceMappingURL=participants-participants-module.js.map