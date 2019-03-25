(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/observable/interval.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/interval.js ***!
  \***************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"]; });


//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"confirmationForm\">\n    <mat-form-field color=\"accent\">\n      <mat-label>Password</mat-label>\n      <input matInput type=\"text\" formControlName=\"password\">\n      <mat-error *ngIf=\"confirmationForm.invalid\">This is required.</mat-error>\n    </mat-form-field>\n\n    <button mat-raised-button>JOIN ROOM</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 50vw; }\n  #container .mat-form-field {\n    width: 100%; }\n  #container .mat-raised-button {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: JoinRoomConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinRoomConfirmationDialogComponent", function() { return JoinRoomConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
/* harmony import */ var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/shared.service */ "./src/app/common/core/services/shared.service.ts");
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






var JoinRoomConfirmationDialogComponent = /** @class */ (function () {
    function JoinRoomConfirmationDialogComponent(fb, router, route, dialog, data, dialogRef, firestore, sharedService) {
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.data = data;
        this.dialogRef = dialogRef;
        this.firestore = firestore;
        this.sharedService = sharedService;
        this.confirmationForm = fb.group({
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    JoinRoomConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    JoinRoomConfirmationDialogComponent.prototype.onSubmit = function () {
        if (this.confirmationForm.invalid)
            return;
        var roomPassword = this.data.room.room_password;
        var enteredPassword = this.confirmationForm.value.password;
        if (roomPassword === enteredPassword) {
            this.dialogRef.close(true);
        }
        else {
            alert('wrong password');
            this.confirmationForm.patchValue({ 'password': '' });
        }
    };
    JoinRoomConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-room-confirmation-dialog',
            template: __webpack_require__(/*! ./join-room-confirmation-dialog.component.html */ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./join-room-confirmation-dialog.component.scss */ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"], _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], JoinRoomConfirmationDialogComponent);
    return JoinRoomConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"newRoomForm\">\n    <mat-form-field color=\"accent\">\n      <mat-label>Room name</mat-label>\n      <input matInput type=\"text\" formControlName=\"room_name\">\n      <mat-error *ngIf=\"room_name !== null\">\n        <mat-error *ngIf=\"room_name.required\">This is required.</mat-error>\n        <mat-error *ngIf=\"room_name.maxlength\">Room name must be less than 17 characters.</mat-error>\n        <mat-error *ngIf=\"room_name.minlength\">Room name must be greater than 5 characters.</mat-error>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field color=\"accent\">\n      <mat-label>Number of participants</mat-label>\n      <input matInput type=\"number\" formControlName=\"num_participants\">\n      <mat-error *ngIf=\"num_participants !== null\">\n        <mat-error *ngIf=\"num_participants.required\">This is required.</mat-error>\n        <mat-error *ngIf=\"num_participants.max\">Participants must be less than 51.</mat-error>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field color=\"accent\">\n      <mat-label>Room password</mat-label>\n      <input matInput type=\"text\" formControlName=\"room_password\">\n      <mat-error *ngIf=\"room_password !== null\">\n        <mat-error *ngIf=\"room_password.required\">This is required.</mat-error>\n        <mat-error *ngIf=\"room_password.maxlength\">Room name must be less than 7 characters.</mat-error>\n        <mat-error *ngIf=\"room_password.minlength\">Room name must be greater than 2 characters.</mat-error>\n      </mat-error>\n    </mat-form-field>\n    <button mat-raised-button>CREATE ROOM</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 50vw; }\n  #container .mat-form-field {\n    width: 100%; }\n  #container .mat-raised-button {\n    margin-top: 3vh;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NewRoomDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRoomDialogComponent", function() { return NewRoomDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
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




var NewRoomDialogComponent = /** @class */ (function () {
    function NewRoomDialogComponent(fb, dialog, firestore) {
        this.fb = fb;
        this.dialog = dialog;
        this.firestore = firestore;
        this.newRoomForm = fb.group({
            'room_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(17), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            'num_participants': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(50)]],
            'room_password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
        });
    }
    NewRoomDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(NewRoomDialogComponent.prototype, "room_name", {
        get: function () {
            return this.newRoomForm.controls.room_name.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoomDialogComponent.prototype, "num_participants", {
        get: function () {
            return this.newRoomForm.controls.num_participants.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewRoomDialogComponent.prototype, "room_password", {
        get: function () {
            return this.newRoomForm.controls.room_password.errors;
        },
        enumerable: true,
        configurable: true
    });
    NewRoomDialogComponent.prototype.onSubmit = function () {
        if (this.newRoomForm.invalid)
            return;
        this.firestore.createNewRoom(this.newRoomForm.value);
        this.dialog.closeAll();
    };
    NewRoomDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-room-dialog',
            template: __webpack_require__(/*! ./new-room-dialog.component.html */ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-room-dialog.component.scss */ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _core_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], NewRoomDialogComponent);
    return NewRoomDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/pipes/timestamp4.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/common/shared/pipes/timestamp4.pipe.ts ***!
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

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/dashboard/main/main.component.ts");
/* harmony import */ var _dashboard_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.resolver */ "./src/app/dashboard/dashboard.resolver.ts");
/* harmony import */ var _common_core_services_route_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/core/services/route-guard.service */ "./src/app/common/core/services/route-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], resolve: { user: _dashboard_resolver__WEBPACK_IMPORTED_MODULE_4__["DashboardResolver"] }, children: [
            { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
            { path: 'room', loadChildren: './chat-room/chat-room.module#ChatRoomModule', canActivate: [_common_core_services_route_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoomGuard"]] },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesModule' },
        ] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\n\n  <mat-drawer #drawer>\n\n    <div *ngIf=\"isDrawerOpened\">\n      <app-drawer-content></app-drawer-content>\n    </div>\n\n  </mat-drawer>\n\n  <div id=\"drawer-content\">\n\n    <mat-toolbar *ngIf=\"!isChatMode\">\n\n      <span>\n        <button mat-icon-button (click)=\"drawer.toggle()\" id=\"menu\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </span>\n\n      <span [routerLink]=\"['/', 'dashboard']\">Dark Messenger</span>\n\n      <span [ngClass]=\"{ 'add': !inOtherRoute }\">\n        <button mat-icon-button (click)=\"newRoom()\"[ngStyle]=\"{ 'display': inOtherRoute ? 'none' : 'block' }\" [disabled]=\"isAnonymous\">\n          <mat-icon>add_box</mat-icon>\n        </button>\n      </span>\n\n      <span [ngClass]=\"{ 'add': inOtherRoute }\">\n        <button mat-icon-button [routerLink]=\"['/', 'dashboard']\" [ngStyle]=\"{ 'display': !inOtherRoute ? 'none' : 'block' }\" [disabled]=\"isAnonymous\">\n          <mat-icon>dashboard</mat-icon>\n        </button>\n      </span>\n\n      <span>\n        <button mat-icon-button [matMenuTriggerFor]=\"settings\" id=\"settings\">\n          <mat-icon>settings</mat-icon>\n        </button>\n      </span>\n\n    </mat-toolbar>\n\n    <div id=\"content-container\" [ngStyle]=\"{ 'padding-top': !isChatMode ? '11vh' : '0' }\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n\n</mat-drawer-container>\n\n<mat-menu #settings>\n  <button mat-menu-item (click)=\"onProfile()\" [disabled]=\"isAnonymous\">\n    <mat-icon>face</mat-icon>\n    Profile\n  </button>\n  <button mat-menu-item (click)=\"onPreferences()\" [disabled]=\"isAnonymous\">\n    <mat-icon>account_circle</mat-icon>\n    Preferences\n  </button>\n  <button mat-menu-item (click)=\"onSignout()\">\n    <mat-icon>power_settings_new</mat-icon>\n    Logout\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-drawer {\n  width: 70vw; }\n\n#drawer-content {\n  height: 100vh; }\n\n#drawer-content .mat-toolbar {\n    position: fixed;\n    display: flex;\n    z-index: 2; }\n\n#drawer-content .mat-toolbar span {\n      display: flex; }\n\n#drawer-content .mat-toolbar #menu {\n      margin-right: 5px; }\n\n#drawer-content .mat-toolbar .add {\n      margin-left: auto; }\n\n#drawer-content .mat-toolbar #settings {\n      margin-left: 1vw; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/core/services/auth.service */ "./src/app/common/core/services/auth.service.ts");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
/* harmony import */ var _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/core/services/shared.service */ "./src/app/common/core/services/shared.service.ts");
/* harmony import */ var _common_shared_components_new_room_dialog_new_room_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/shared/components/new-room-dialog/new-room-dialog.component */ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dialog, route, authService, firestore, auth, sharedService) {
        this.router = router;
        this.dialog = dialog;
        this.route = route;
        this.authService = authService;
        this.firestore = firestore;
        this.auth = auth;
        this.sharedService = sharedService;
        this.inOtherRoute = false;
        this.isChatMode = false;
        this.isDrawerOpened = false;
        this.isAnonymous = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isChatMode = false;
        this.router.events.filter(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (response) {
            var route = response.urlAfterRedirects.split('/').slice(1);
            var isinRoom = route.includes('room');
            _this.isChatMode = isinRoom ? true : false;
        });
        this.sharedService.modeChanged.subscribe(function (response) {
            setTimeout(function () { return (_this.isChatMode = response); }, 50);
        });
        this.router.events.filter(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (response) {
            var route = response.urlAfterRedirects.split('/').slice(1);
            var isinRoom = route.includes('room');
            var a = route.includes('room');
            var b = route.includes('profile');
            var c = route.includes('preferences');
            _this.inOtherRoute = a || b || c;
        });
        this.drawer.openedStart.subscribe(function () {
            _this.isDrawerOpened = true;
        });
        this.drawer.closedStart.subscribe(function () {
            _this.isDrawerOpened = false;
        });
        this.route.data.subscribe(function (data) {
            _this.isAnonymous = data.user;
        });
        // this.firestore.removeAnonymousData();
    };
    DashboardComponent.prototype.onProfile = function () {
        this.router.navigate(['profile'], { relativeTo: this.route });
    };
    DashboardComponent.prototype.onPreferences = function () {
        this.router.navigate(['preferences'], { relativeTo: this.route });
    };
    DashboardComponent.prototype.newRoom = function () {
        this.newRoomDialogComponent = this.dialog.open(_common_shared_components_new_room_dialog_new_room_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewRoomDialogComponent"], {
            data: {}
        });
    };
    DashboardComponent.prototype.onSignout = function () {
        this.firestore.setUserStatus(false, false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"])
    ], DashboardComponent.prototype, "drawer", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _common_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"], _common_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/core/modules/material2.module */ "./src/app/common/core/modules/material2.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/dashboard/main/main.component.ts");
/* harmony import */ var _drawer_content_drawer_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drawer-content/drawer-content.component */ "./src/app/dashboard/drawer-content/drawer-content.component.ts");
/* harmony import */ var _common_shared_components_new_room_dialog_new_room_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/shared/components/new-room-dialog/new-room-dialog.component */ "./src/app/common/shared/components/new-room-dialog/new-room-dialog.component.ts");
/* harmony import */ var _common_shared_components_join_room_confirmation_dialog_join_room_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component */ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.ts");
/* harmony import */ var _common_shared_pipes_timestamp4_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/shared/pipes/timestamp4.pipe */ "./src/app/common/shared/pipes/timestamp4.pipe.ts");
/* harmony import */ var _dashboard_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard.resolver */ "./src/app/dashboard/dashboard.resolver.ts");
/* harmony import */ var _common_core_services_route_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/core/services/route-guard.service */ "./src/app/common/core/services/route-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__["Material2Module"]
            ],
            entryComponents: [
                _common_shared_components_new_room_dialog_new_room_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NewRoomDialogComponent"],
                _common_shared_components_join_room_confirmation_dialog_join_room_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["JoinRoomConfirmationDialogComponent"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _drawer_content_drawer_content_component__WEBPACK_IMPORTED_MODULE_7__["DrawerContentComponent"],
                _common_shared_components_new_room_dialog_new_room_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NewRoomDialogComponent"],
                _common_shared_components_join_room_confirmation_dialog_join_room_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_9__["JoinRoomConfirmationDialogComponent"],
                _common_shared_pipes_timestamp4_pipe__WEBPACK_IMPORTED_MODULE_10__["TimestampPipe"]
            ],
            providers: [
                _dashboard_resolver__WEBPACK_IMPORTED_MODULE_11__["DashboardResolver"],
                _common_core_services_route_guard_service__WEBPACK_IMPORTED_MODULE_12__["RoomGuard"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/drawer-content/drawer-content.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/drawer-content/drawer-content.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n\n  <h3 mat-subheader>Online Users</h3>\n  <mat-list-item *ngFor=\"let onlineUser of (onlineUsers | async); last as isLast\">\n    <img mat-list-avatar src=\"{{ onlineUser?.url }}\">\n    <h4 mat-line *ngIf=\"onlineUser?.metadata?.status === 'online'\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/d/dc/Button-Green.svg\" alt=\"\" width=\"10\"> {{ onlineUser?.display }}</h4>\n    <h4 mat-line *ngIf=\"onlineUser?.metadata?.status === 'offline'\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/2000px-Location_dot_grey.svg.png\" alt=\"\" width=\"10\"> {{ onlineUser?.display }}</h4>\n    <p mat-line>\n      <span *ngIf=\"onlineUser?.metadata?.status === 'online'\">Online -- </span>\n      <span *ngIf=\"onlineUser?.metadata?.status === 'offline'\">Offline -- </span>\n      <span class=\"demo-secondary-text\">{{ onlineUser?.metadata?.timestamp | timestamp }}</span>\n    </p>\n    <mat-divider inset *ngIf=\"!isLast\"></mat-divider>\n  </mat-list-item>\n\n</mat-list>\n"

/***/ }),

/***/ "./src/app/dashboard/drawer-content/drawer-content.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/drawer-content/drawer-content.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/drawer-content/drawer-content.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/drawer-content/drawer-content.component.ts ***!
  \**********************************************************************/
/*! exports provided: DrawerContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContentComponent", function() { return DrawerContentComponent; });
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


var DrawerContentComponent = /** @class */ (function () {
    function DrawerContentComponent(firestore) {
        this.firestore = firestore;
    }
    DrawerContentComponent.prototype.ngOnInit = function () {
        this.onlineUsers = this.firestore.onlineUsers;
    };
    DrawerContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawer-content',
            template: __webpack_require__(/*! ./drawer-content.component.html */ "./src/app/dashboard/drawer-content/drawer-content.component.html"),
            styles: [__webpack_require__(/*! ./drawer-content.component.scss */ "./src/app/dashboard/drawer-content/drawer-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"]])
    ], DrawerContentComponent);
    return DrawerContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/main/main.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/main/main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <div>\n      <span>Public Room</span><br>\n    </div>\n    <button mat-icon-button color=\"accent\" (click)=\"onEnterPublic()\">\n      <mat-icon>keyboard_arrow_right</mat-icon>\n    </button>\n  </mat-card-content>\n</mat-card>\n\n<hr>\n\n<div *ngFor=\"let room of (rooms | async)\">\n  <mat-card>\n    <mat-card-content>\n      <div>\n        <span>{{ room.room_name }}</span><br>\n      </div>\n      <button mat-icon-button color=\"accent\" (click)=\"onEnterRoom(room)\" [disabled]=\"isAnonymous\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/main/main.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/main/main.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  display: flex; }\n\nhr {\n  width: 80vw;\n  background: #6c6c6c; }\n\n.mat-card {\n  width: 80vw;\n  margin: auto;\n  margin-bottom: 3vh; }\n\n.mat-card .mat-card-content {\n    display: flex;\n    justify-content: space-between; }\n\n.mat-card .mat-card-content div {\n      display: flex; }\n\n.mat-card .mat-card-content div span {\n        margin: auto; }\n\n.mat-card .mat-card-content .mat-raised-button {\n      height: auto; }\n\n.mat-card .mat-card-content .mat-raised-button span {\n        line-height: normal; }\n"

/***/ }),

/***/ "./src/app/dashboard/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/interval */ "./node_modules/rxjs-compat/_esm5/observable/interval.js");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
/* harmony import */ var _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/services/shared.service */ "./src/app/common/core/services/shared.service.ts");
/* harmony import */ var _common_shared_components_join_room_confirmation_dialog_join_room_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component */ "./src/app/common/shared/components/join-room-confirmation-dialog/join-room-confirmation-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(router, route, dialog, firestore, sharedService) {
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.firestore = firestore;
        this.sharedService = sharedService;
        this.isAnonymous = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.setEnter = false;
        this.rooms = this.firestore.rooms;
        this.route.data.subscribe(function (data) {
            _this.isAnonymous = data.user;
        });
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.interval === undefined)
            return;
        this.interval.unsubscribe();
    };
    MainComponent.prototype.onEnterRoom = function (room) {
        var _this = this;
        this.sharedService.setEnter = true;
        var i = 0;
        this.joinRoomConfirmationDialog = this.dialog.open(_common_shared_components_join_room_confirmation_dialog_join_room_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["JoinRoomConfirmationDialogComponent"], { data: { room: room } });
        this.joinRoomConfirmationDialog.afterClosed().subscribe(function (response) {
            if (response !== true)
                return;
            _this.interval = Object(rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_3__["interval"])(1).subscribe(function () {
                _this.routeToRoom(room);
            });
            _this.router.events.filter(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (response) {
                var route = response.urlAfterRedirects.split('/').slice(1);
                var isinRoom = route.includes('room');
                _this.interval.unsubscribe();
                if (isinRoom && i === 0) {
                    _this.firestore.currentUser.subscribe(function (user) {
                        _this.firestore.newRoomParticipant(user, room);
                    });
                    i++;
                }
            });
        });
    };
    MainComponent.prototype.onEnterPublic = function () {
        var _this = this;
        this.sharedService.setEnter = true;
        var publicRoom = { host: { display: "Admin", email: "q@a.com", uid: "DuEEQD2s9cbYol48a0xcfxVyE1Z2" }, num_participants: Infinity, room_name: "Public Room" };
        this.sharedService.roomDetails = publicRoom;
        this.interval = Object(rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_3__["interval"])(1).subscribe(function () {
            _this.routeToRoom(publicRoom);
        });
        var i = 0;
        this.router.events.filter(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (response) {
            var route = response.urlAfterRedirects.split('/').slice(1);
            var isinRoom = route.includes('room');
            _this.interval.unsubscribe();
            if (isinRoom && i === 0) {
                _this.firestore.currentUser.subscribe(function (user) {
                    _this.firestore.newRoomParticipant(user, publicRoom);
                });
                i++;
            }
        });
    };
    MainComponent.prototype.routeToRoom = function (room) {
        this.sharedService.roomDetails = room;
        this.router.navigate(['room'], { relativeTo: this.route });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/dashboard/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/dashboard/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"], _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map