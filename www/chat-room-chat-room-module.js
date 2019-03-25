(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-room-chat-room-module"],{

/***/ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <p><strong>Room name: </strong> <span>{{ data.room.room_name }}</span></p>\n\n  <div *ngIf=\"condition; else option\">\n    <p><strong>Created by: </strong> <span>{{ data.room.host.display }}</span></p>\n    <p class=\"m-0\"><strong>Created: </strong> <span>{{ data.room.timestamp | timestamp }}</span></p>\n  </div>\n\n  <ng-template #option>\n    <p class=\"m-0\"><strong>Created by: </strong> <span>{{ data.room.host.display }}</span></p>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 50vw; }\n"

/***/ }),

/***/ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RoomDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailsDialogComponent", function() { return RoomDetailsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var RoomDetailsDialogComponent = /** @class */ (function () {
    function RoomDetailsDialogComponent(data) {
        this.data = data;
    }
    RoomDetailsDialogComponent.prototype.ngOnInit = function () {
        this.condition = this.data.room.num_participants !== Infinity;
    };
    RoomDetailsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room-details-dialog',
            template: __webpack_require__(/*! ./room-details-dialog.component.html */ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.html"),
            styles: [__webpack_require__(/*! ./room-details-dialog.component.scss */ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], RoomDetailsDialogComponent);
    return RoomDetailsDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/pipes/timestamp.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/shared/pipes/timestamp.pipe.ts ***!
  \*******************************************************/
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

/***/ "./src/app/dashboard/chat-room/chat-room-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/chat-room/chat-room-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatRoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomRoutingModule", function() { return ChatRoomRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_room_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-room.resolver */ "./src/app/dashboard/chat-room/chat-room.resolver.ts");
/* harmony import */ var _chat_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-room.component */ "./src/app/dashboard/chat-room/chat-room.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _chat_room_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomComponent"], resolve: { room: _chat_room_resolver__WEBPACK_IMPORTED_MODULE_2__["ChatRoomResolver"] }, children: [
            { path: '', loadChildren: './participants/participants.module#ParticipantsModule' }
        ] }
];
var ChatRoomRoutingModule = /** @class */ (function () {
    function ChatRoomRoutingModule() {
    }
    ChatRoomRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChatRoomRoutingModule);
    return ChatRoomRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/chat-room/chat-room.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/chat-room/chat-room.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\n\n  <mat-drawer #drawer>\n\n    <router-outlet></router-outlet>\n\n  </mat-drawer>\n\n\n  <div id=\"drawer-content\">\n\n    <div id=\"content-toolbar\">\n\n      <mat-toolbar>\n        <span id=\"menu\">\n          <button mat-icon-button (click)=\"drawer.toggle()\">\n            <mat-icon>menu</mat-icon>\n          </button>\n        </span>\n\n        <div *ngIf=\"roomDetails.room_name !== 'Public Room'; else default\">\n          <span>{{ roomDetails.room_name }}'s room</span>\n        </div>\n\n        <ng-template #default>\n          <span>{{ roomDetails.room_name }}</span>\n        </ng-template>\n\n        <span id=\"details\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n            <mat-icon>settings</mat-icon>\n          </button>\n        </span>\n      </mat-toolbar>\n\n    </div>\n\n    <div id=\"content-container\">\n\n      <div id=\"chat-container\">\n        <div id=\"chat\" #content>\n\n          <div *ngFor=\"let message of (messages | async); let i = index\" id=\"loop\">\n            <div [ngClass]=\"{ 'you': auth.uid !== message?.uid, 'others': auth.uid === message?.uid }\" id=\"element\">\n              <div id=\"message-content\">\n\n                <div id=\"img\" *ngIf=\"auth.uid !== message?.uid\">\n                  <img src=\"{{ message?.url }}\" alt=\"god-madara-uchiha\" width=\"50\" height=\"50\" (click)=\"onShowProfile(message)\">\n                </div>\n                <div id=\"message\">\n                  <p>{{ message?.message }}</p>\n                </div>\n                <div id=\"img\" *ngIf=\"auth.uid === message?.uid\">\n                  <img src=\"{{ message?.url }}\" alt=\"god-madara-uchiha\" width=\"50\" height=\"50\" (click)=\"onShowProfile(message)\">\n                </div>\n              </div>\n              <div id=\"message-action\">\n                <span>{{ message?.timestamp | timestamp }}</span>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <div id=\"chat-textbox\">\n\n        <div class=\"w-100\">\n          <mat-form-field color=\"accent\" class=\"w-100\">\n            <textarea #message matInput placeholder=\"Type a message.\" matTextareaAutosize matAutosizeMaxRows=\"1\" maxLength=\"500\" [(ngModel)]=\"textarea\"></textarea>\n            <mat-hint align=\"end\">{{message.value.length}} / 500</mat-hint>\n          </mat-form-field>\n        </div>\n\n        <div id=\"send\">\n          <button mat-icon-button (click)=\"onSubmit()\">\n            <mat-icon>send</mat-icon>\n          </button>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</mat-drawer-container>\n\n<mat-menu #menu>\n  <button mat-menu-item (click)=\"seeRoomDetails()\">\n    <mat-icon>info</mat-icon>\n    Room details\n  </button>\n  <button mat-menu-item [routerLink]=\"['/', 'dashboard']\">\n    <mat-icon>close</mat-icon>\n    Leave room\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/dashboard/chat-room/chat-room.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/chat-room/chat-room.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-drawer {\n  width: 70vw; }\n\n#drawer-content {\n  height: 100vh; }\n\n#drawer-content .mat-toolbar {\n    display: flex; }\n\n#drawer-content .mat-toolbar span {\n      display: flex; }\n\n#drawer-content .mat-toolbar #menu {\n      margin-right: 5px; }\n\n#drawer-content .mat-toolbar #details {\n      margin-left: auto; }\n\n#drawer-content #content-container #chat-container {\n    height: 79vh; }\n\n#drawer-content #content-container #chat-container #chat {\n      height: 100%;\n      width: 100vw;\n      overflow: auto; }\n\n#drawer-content #content-container #chat-container #chat #loop {\n        display: flex;\n        flex-flow: column nowrap; }\n\n#drawer-content #content-container #chat-textbox {\n    height: 12vh;\n    display: flex; }\n\n#drawer-content #content-container #chat-textbox .mat-form-field {\n      flex-grow: 1;\n      border: 1px solid white;\n      border-radius: 10px;\n      padding: 5px;\n      margin-left: 3vw; }\n\n#drawer-content #content-container #chat-textbox #send {\n      display: flex;\n      width: 18vw; }\n\n#drawer-content #content-container #chat-textbox #send .mat-icon-button {\n        margin: auto auto auto 2vw; }\n\n#drawer-content #content-container #chat-textbox .mat-icon {\n      font-size: 2.5em; }\n\n.you {\n  padding: 1vh 2vh;\n  width: 90vw;\n  align-self: flex-start; }\n\n.you #message-content {\n    display: flex; }\n\n.you #message-content img {\n      border-radius: 100%;\n      margin-right: 2vw; }\n\n.you #message-content #message {\n      background: #050505;\n      padding: 1vh 2vh;\n      border-radius: 3%;\n      font-size: 0.8em;\n      width: 100%; }\n\n.you #message-content #message p {\n        margin: 0; }\n\n.you span {\n    float: right;\n    color: #707070;\n    font-size: 0.8em; }\n\n.others {\n  padding: 1vh 2vh;\n  width: 90vw;\n  align-self: flex-end; }\n\n.others #message-content {\n    display: flex; }\n\n.others #message-content img {\n      border-radius: 100%;\n      margin-left: 2vw; }\n\n.others #message-content #message {\n      background: #050505;\n      padding: 1vh 2vh;\n      border-radius: 3%;\n      font-size: 0.8em;\n      width: 100%; }\n\n.others #message-content #message p {\n        margin: 0; }\n\n.others span {\n    color: #707070;\n    font-size: 0.8em; }\n"

/***/ }),

/***/ "./src/app/dashboard/chat-room/chat-room.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/chat-room/chat-room.component.ts ***!
  \************************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
/* harmony import */ var _common_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/services/auth.service */ "./src/app/common/core/services/auth.service.ts");
/* harmony import */ var _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/services/shared.service */ "./src/app/common/core/services/shared.service.ts");
/* harmony import */ var _common_shared_components_room_details_dialog_room_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/shared/components/room-details-dialog/room-details-dialog.component */ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent(router, route, dialog, firestore, auth, sharedService) {
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.firestore = firestore;
        this.auth = auth;
        this.sharedService = sharedService;
        this.textarea = '';
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialog.closeAll();
        this.route.data.subscribe(function (data) {
            _this.roomDetails = data.room;
        });
        this.condition = this.roomDetails.num_participants === Infinity;
        this.sharedService.modeValue = true;
        this.messages = this.firestore.messages(this.roomDetails.room_name);
        this.element = this.content.nativeElement;
        setTimeout(function () { return _this.scrollToBottom(); }, 700);
    };
    ChatRoomComponent.prototype.scrollToBottom = function () {
        this.element.scrollTop = this.element.scrollHeight;
    };
    ChatRoomComponent.prototype.seeRoomDetails = function () {
        this.dialog.open(_common_shared_components_room_details_dialog_room_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RoomDetailsDialogComponent"], { data: { room: this.roomDetails } });
    };
    ChatRoomComponent.prototype.onShowProfile = function (message) {
        this.firestore.profile(message.uid);
    };
    ChatRoomComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.textarea.length < 1) {
            alert('Empty field');
            return;
        }
        this.firestore.newMessage(this.textarea, this.roomDetails.room_name)
            .then(function () {
            _this.scrollToBottom();
        });
        this.textarea = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"])
    ], ChatRoomComponent.prototype, "drawer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatRoomComponent.prototype, "content", void 0);
    ChatRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/dashboard/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.scss */ "./src/app/dashboard/chat-room/chat-room.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _common_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/chat-room/chat-room.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/chat-room/chat-room.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatRoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomModule", function() { return ChatRoomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_room_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-room-routing.module */ "./src/app/dashboard/chat-room/chat-room-routing.module.ts");
/* harmony import */ var _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/modules/material2.module */ "./src/app/common/core/modules/material2.module.ts");
/* harmony import */ var _chat_room_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-room.resolver */ "./src/app/dashboard/chat-room/chat-room.resolver.ts");
/* harmony import */ var _chat_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-room.component */ "./src/app/dashboard/chat-room/chat-room.component.ts");
/* harmony import */ var _common_shared_components_room_details_dialog_room_details_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/shared/components/room-details-dialog/room-details-dialog.component */ "./src/app/common/shared/components/room-details-dialog/room-details-dialog.component.ts");
/* harmony import */ var _common_shared_pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shared/pipes/timestamp.pipe */ "./src/app/common/shared/pipes/timestamp.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChatRoomModule = /** @class */ (function () {
    function ChatRoomModule() {
    }
    ChatRoomModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _chat_room_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoomRoutingModule"],
                _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__["Material2Module"]
            ],
            declarations: [
                _chat_room_component__WEBPACK_IMPORTED_MODULE_6__["ChatRoomComponent"],
                _common_shared_components_room_details_dialog_room_details_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RoomDetailsDialogComponent"],
                _common_shared_pipes_timestamp_pipe__WEBPACK_IMPORTED_MODULE_8__["TimestampPipe"]
            ],
            entryComponents: [
                _common_shared_components_room_details_dialog_room_details_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RoomDetailsDialogComponent"]
            ],
            providers: [
                _chat_room_resolver__WEBPACK_IMPORTED_MODULE_5__["ChatRoomResolver"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ChatRoomModule);
    return ChatRoomModule;
}());



/***/ }),

/***/ "./src/app/dashboard/chat-room/chat-room.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/chat-room/chat-room.resolver.ts ***!
  \***********************************************************/
/*! exports provided: ChatRoomResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomResolver", function() { return ChatRoomResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/core/services/shared.service */ "./src/app/common/core/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatRoomResolver = /** @class */ (function () {
    function ChatRoomResolver(sharedService) {
        this.sharedService = sharedService;
    }
    ChatRoomResolver.prototype.resolve = function (route, state) {
        return this.sharedService.roomChanged.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    };
    ChatRoomResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_core_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
    ], ChatRoomResolver);
    return ChatRoomResolver;
}());



/***/ })

}]);
//# sourceMappingURL=chat-room-chat-room-module.js.map