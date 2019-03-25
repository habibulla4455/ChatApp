(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preferences-preferences-module"],{

/***/ "./src/app/common/core/services/preference.service.ts":
/*!************************************************************!*\
  !*** ./src/app/common/core/services/preference.service.ts ***!
  \************************************************************/
/*! exports provided: PreferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceService", function() { return PreferenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firestore.service */ "./src/app/common/core/services/firestore.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DocumentChangeType, DocumentChange, QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore-types';


// interface DocumentChangeAction { type: DocumentChangeType; payload: DocumentChange; }
var PreferenceService = /** @class */ (function () {
    function PreferenceService(dialog, auth, firestore, storage) {
        this.dialog = dialog;
        this.auth = auth;
        this.firestore = firestore;
        this.storage = storage;
    }
    PreferenceService.prototype.updateDisplay = function (form) {
        var _this = this;
        this.auth.auth.currentUser.updateProfile({
            displayName: form.display,
            photoURL: ''
        }).then(function () { return (_this.firestoreChange('display', form.display)); });
    };
    PreferenceService.prototype.updateEmailI = function (form) {
        var _this = this;
        var email = this.auth.auth.currentUser.email;
        var password = form.password;
        this.auth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            user.updateEmail(form.email).then(function () { return (_this.firestoreChange('email', form.email)); });
        }).catch(function (e) {
            alert(e.message);
            _this.dialog.closeAll();
        });
    };
    PreferenceService.prototype.updatePassword = function (form) {
        var _this = this;
        var email = this.auth.auth.currentUser.email;
        var password = form.currentPassword;
        this.auth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            user.updatePassword(form.password).then(function () { return (_this.firestoreChange('password', form.password)); });
        }).catch(function (e) {
            alert(e.message);
            _this.dialog.closeAll();
        });
    };
    PreferenceService.prototype.updateAvatar = function (form, newUrl) {
        newUrl === '' ? this.firestoreFromFile(form) : this.firestoreFromLink(newUrl);
    };
    PreferenceService.prototype.firestoreFromFile = function (upload) {
        var _this = this;
        var uploadTask = this.storage.ref("avatars/" + upload.file.name).put(upload.file);
        uploadTask.snapshotChanges().map(function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }).subscribe(function () { });
        uploadTask.task
            .then(function (snapshot) {
            snapshot.ref.getDownloadURL()
                .then(function (url) {
                upload.totalBytes = snapshot.totalBytes;
                upload.url = url;
                upload.fileName = snapshot.metadata.name;
                upload.contentType = snapshot.metadata.contentType;
                upload.timeCreated = snapshot.metadata.timeCreated;
                delete upload.file;
                console.log({ avatar: __assign({}, upload) });
                _this.firestoreChange('avatar', { avatar: __assign({}, upload) });
            });
        });
    };
    PreferenceService.prototype.firestoreFromLink = function (newUrl) {
        var _this = this;
        this.firestore.usersRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).map(function (action) {
            var uid = _this.auth.auth.currentUser.uid;
            return action.map(function (change) {
                var document = change.payload.doc;
                if (document.get('uid') === uid) {
                    var avatar = { avatar: { url: newUrl } };
                    document.ref.set(avatar, { merge: true });
                }
                return document.data();
            });
        }).subscribe(function () {
            alert("Successfully changed your avatar.");
            _this.dialog.closeAll();
        });
    };
    PreferenceService.prototype.firestoreChange = function (option, form) {
        var _this = this;
        this.firestore.usersRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).map(function (action) {
            var uid = _this.auth.auth.currentUser.uid;
            return action.map(function (change) {
                var document = change.payload.doc;
                if (option === 'avatar') {
                    document.get('uid') === uid ? document.ref.set(form, { merge: true }) : 0;
                }
                else {
                    document.get('uid') === uid ? document.ref.update(option, form) : 0;
                }
                return document.data();
            });
        }).subscribe(function () {
            switch (option) {
                case 'display':
                    alert("Display name successfully changed to " + form + ".");
                    break;
                case 'email':
                    alert("Email address successfully changed to " + form + ".");
                    break;
                case 'password':
                    alert("Password successfully changed.");
                    break;
                case 'avatar':
                    alert("Successfully changed your avatar.");
                    break;
                default: break;
            }
            _this.dialog.closeAll();
        });
    };
    PreferenceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
    ], PreferenceService);
    return PreferenceService;
}());



/***/ }),

/***/ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"urlForm\">\n    <mat-form-field color=\"accent\">\n      <mat-label>Image url</mat-label>\n      <input matInput type=\"text\" formControlName=\"url\">\n      <mat-error *ngIf=\"this.urlForm.get('url').invalid\">\n        <mat-error *ngIf=\"url.required\">This is required.</mat-error>\n        <mat-error *ngIf=\"url.pattern\">Invalid url.</mat-error>\n      </mat-error>\n    </mat-form-field>\n    <button mat-raised-button>SELECT</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 50vw; }\n  #container .mat-raised-button {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CloudQueueDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudQueueDialogComponent", function() { return CloudQueueDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var URL_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
var CloudQueueDialogComponent = /** @class */ (function () {
    function CloudQueueDialogComponent(fb, data, dialogRef) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.urlForm = fb.group({
            'url': ['https://i.pinimg.com/originals/dd/5f/c6/dd5fc62d91748e581b3101101be9bf65.gif', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(URL_PATTERN)]],
        });
    }
    CloudQueueDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CloudQueueDialogComponent.prototype, "url", {
        get: function () {
            return this.urlForm.get('url').errors;
        },
        enumerable: true,
        configurable: true
    });
    CloudQueueDialogComponent.prototype.onSubmit = function () {
        if (this.urlForm.invalid)
            return;
        this.dialogRef.close(this.urlForm.value);
    };
    CloudQueueDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cloud-queue-dialog',
            template: __webpack_require__(/*! ./cloud-queue-dialog.component.html */ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.html"),
            styles: [__webpack_require__(/*! ./cloud-queue-dialog.component.scss */ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], CloudQueueDialogComponent);
    return CloudQueueDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"passwordForm\">\n    <mat-form-field color=\"accent\">\n      <mat-label>Password</mat-label>\n      <input matInput type=\"password\" formControlName=\"password\">\n      <mat-error *ngIf=\"passwordForm.invalid\">This is required.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button>LOGIN</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 50vw; }\n  #container .mat-raised-button {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ReauthDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReauthDialogComponent", function() { return ReauthDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var ReauthDialogComponent = /** @class */ (function () {
    function ReauthDialogComponent(fb, dialogRef) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.passwordForm = fb.group({
            'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ReauthDialogComponent.prototype.ngOnInit = function () {
    };
    ReauthDialogComponent.prototype.onSubmit = function () {
        var password = this.passwordForm.value.password;
        this.dialogRef.close(password);
    };
    ReauthDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reauth-dialog',
            template: __webpack_require__(/*! ./reauth-dialog.component.html */ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.html"),
            styles: [__webpack_require__(/*! ./reauth-dialog.component.scss */ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ReauthDialogComponent);
    return ReauthDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <div id=\"container\">\n      <p>Save changes?</p>\n\n      <base href=\"#\" target=\"_blank\">\n\n      <button mat-raised-button color=\"warn\" (click)=\"onCancel()\" id=\"cancel\">CANCEL</button>\n      <button mat-raised-button color=\"accent\" (click)=\"onUpdate()\" id=\"update\">UPDATE</button>\n    </div>\n  </mat-card-content>\n  <mat-card-footer *ngIf=\"isShow\">\n    <mat-progress-bar mode=\"indeterminate\" [color]=\"color\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin: -24px; }\n\np {\n  font-size: 1.25em;\n  text-align: center; }\n\n#cancel {\n  margin-right: 2vw; }\n\n#update {\n  margin-left: 2vw; }\n"

/***/ }),

/***/ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UpdateConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateConfirmationDialogComponent", function() { return UpdateConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_preference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/preference.service */ "./src/app/common/core/services/preference.service.ts");
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



var UpdateConfirmationDialogComponent = /** @class */ (function () {
    function UpdateConfirmationDialogComponent(data, dialogRef, preferenceService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.preferenceService = preferenceService;
        this.isShow = false;
    }
    UpdateConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    UpdateConfirmationDialogComponent.prototype.onCancel = function () {
        this.dialogRef.close();
    };
    UpdateConfirmationDialogComponent.prototype.onUpdate = function () {
        this.isShow = true;
        switch (this.data.option) {
            case 'display':
                this.updateDisplay();
                break;
            case 'email':
                this.updateEmailI();
                break;
            case 'password':
                this.updatePassword();
                break;
            case 'avatar':
                this.updateAvatar();
                break;
            default: break;
        }
    };
    UpdateConfirmationDialogComponent.prototype.updateDisplay = function () {
        var form = this.data.form;
        this.preferenceService.updateDisplay(form);
    };
    UpdateConfirmationDialogComponent.prototype.updateEmailI = function () {
        var form = this.data.form;
        this.preferenceService.updateEmailI(form);
    };
    UpdateConfirmationDialogComponent.prototype.updatePassword = function () {
        var form = this.data.form;
        this.preferenceService.updatePassword(form);
    };
    UpdateConfirmationDialogComponent.prototype.updateAvatar = function () {
        var form = this.data.form;
        var newUrl = this.data.newUrl;
        this.preferenceService.updateAvatar(form, newUrl);
    };
    UpdateConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-confirmation-dialog',
            template: __webpack_require__(/*! ./update-confirmation-dialog.component.html */ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./update-confirmation-dialog.component.scss */ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _core_services_preference_service__WEBPACK_IMPORTED_MODULE_2__["PreferenceService"]])
    ], UpdateConfirmationDialogComponent);
    return UpdateConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/preferences/preferences-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/preferences/preferences-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PreferencesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesRoutingModule", function() { return PreferencesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _preferences_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preferences.component */ "./src/app/dashboard/preferences/preferences.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _preferences_component__WEBPACK_IMPORTED_MODULE_2__["PreferencesComponent"] }
];
var PreferencesRoutingModule = /** @class */ (function () {
    function PreferencesRoutingModule() {
    }
    PreferencesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PreferencesRoutingModule);
    return PreferencesRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/preferences/preferences.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/preferences/preferences.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <div id=\"accordion-container\">\n    <form [formGroup]=\"preferencesForm\">\n      <mat-accordion [displayMode]=\"'default'\" [multi]=\"false\">\n\n        <mat-expansion-panel #display>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Update display name</mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n\n            <div formGroupName=\"updateDisplay\">\n              <mat-form-field appearance=\"outline\" color=\"accent\">\n                <mat-label>New display name</mat-label>\n                <input matInput type=\"text\" formControlName=\"display\">\n                <mat-error *ngIf=\"this.preferencesForm.get('updateDisplay').get('display').invalid\">\n                  <mat-error *ngIf=\"displayError.required; else error\">This is required.</mat-error>\n                  <ng-template #error>\n                    <mat-error *ngIf=\"displayError.minlength; else error2\">Display name too short.</mat-error>\n                    <ng-template #error2>\n                      <mat-error *ngIf=\"displayError.containsAlpha && !display.containsNone\">Must contain atleast 1 lowercase character.</mat-error>\n                    </ng-template>\n                  </ng-template>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <mat-action-row>\n              <button mat-button color=\"accent\" type=\"button\" (click)=\"onSubmit('display')\">UPDATE</button>\n            </mat-action-row>\n\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #email>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Update email address</mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n\n            <div formGroupName=\"updateEmail\">\n              <mat-form-field appearance=\"outline\" color=\"accent\">\n                <mat-label>New email address</mat-label>\n                <input matInput type=\"text\" formControlName=\"email\">\n                <mat-error *ngIf=\"this.preferencesForm.get('updateEmail').get('email').invalid\">\n                  <mat-error *ngIf=\"emailError.required\">This is required.</mat-error>\n                  <mat-error *ngIf=\"emailError.pattern\">Not a valid email address.</mat-error>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <mat-action-row>\n              <button mat-button color=\"accent\" type=\"button\" (click)=\"onSubmit('email')\">UPDATE</button>\n            </mat-action-row>\n\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #password>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Update password</mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n\n            <div formGroupName=\"updatePassword\">\n              <mat-form-field appearance=\"outline\" color=\"accent\">\n                <mat-label>New password</mat-label>\n                <input matInput type=\"password\" formControlName=\"password\">\n                <mat-error *ngIf=\"this.preferencesForm.get('updatePassword').get('password').invalid\">\n                  <mat-error *ngIf=\"passwordError.required\">This is required.</mat-error>\n                  <mat-error *ngIf=\"passwordError.minlength\">Password too short.</mat-error>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" color=\"accent\">\n                <mat-label>Repeat new password</mat-label>\n                <input matInput type=\"password\" formControlName=\"confirm\">\n                <mat-error *ngIf=\"this.preferencesForm.get('updatePassword').get('confirm').invalid\">\n                  <mat-error *ngIf=\"confirmError.required\">This is required.</mat-error>\n                  <mat-error *ngIf=\"confirmError.isNotMatched\">Password not matched.</mat-error>\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <mat-action-row>\n              <button mat-button color=\"accent\" type=\"button\" (click)=\"onSubmit('password')\">UPDATE</button>\n            </mat-action-row>\n\n          </ng-template>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel #avatar>\n          <mat-expansion-panel-header>\n            <mat-panel-title>Change avatar</mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n\n            <div>\n              <div *ngIf=\"newUrl === ''; else url\" id=\"img-container\">\n                <img src=\"{{ upload?.url || (user | async)?.avatar?.url }}\" alt=\"god-madara-uchiha\" width=\"200\" height=\"200\">\n              </div>\n              <ng-template #url>\n                <div id=\"img-container\">\n                  <img src=\"{{ newUrl }}\" alt=\"god-madara-uchiha\" width=\"200\" height=\"200\" (load)=\"showClear = true\">\n                </div>\n              </ng-template>\n            </div>\n\n            <div id=\"btn-container\">\n              <div class=\"m-auto\">\n                <input type=\"file\" #file class=\"d-none\" (change)=\"onChange($event)\">\n                <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"file.click()\">\n                  <mat-icon>photo</mat-icon>\n                </button>\n                <button mat-icon-button type=\"button\" color=\"accent\" (click)=\"cloudQueue()\">\n                  <mat-icon>cloud_queue</mat-icon>\n                </button>\n              </div>\n              <div class=\"m-auto\">\n                <span *ngIf=\"upload?.url?.length > 0\">{{ upload?.name }}</span>\n                <button mat-icon-button button1 color=\"accent\" (click)=\"onClear()\" *ngIf=\"upload?.url?.length > 0 || showClear\"><mat-icon>clear</mat-icon></button>\n              </div>\n            </div>\n\n            <mat-action-row>\n              <button mat-button color=\"accent\" type=\"button\" (click)=\"onSubmit('avatar')\">UPDATE</button>\n            </mat-action-row>\n\n          </ng-template>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/preferences/preferences.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/preferences/preferences.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container #accordion-container {\n  width: 80vw;\n  margin: auto; }\n  #container #accordion-container .mat-form-field {\n    width: 100%; }\n  #container #accordion-container #img-container {\n    width: 100%;\n    display: flex; }\n  #container #accordion-container #img-container img {\n      margin: 0 auto; }\n  #container #accordion-container #btn-container {\n    display: flex;\n    flex-flow: column wrap; }\n  #container #accordion-container #btn-container button {\n      margin: 0 1vw; }\n  #container #accordion-container #btn-container span {\n      text-align: center; }\n  #container #accordion-container .mat-action-row {\n    padding-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/dashboard/preferences/preferences.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/preferences/preferences.component.ts ***!
  \****************************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_shared_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/shared/models/model */ "./src/app/common/shared/models/model.ts");
/* harmony import */ var _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/services/firestore.service */ "./src/app/common/core/services/firestore.service.ts");
/* harmony import */ var _common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component */ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.ts");
/* harmony import */ var _common_shared_components_cloud_queue_dialog_cloud_queue_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component */ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.ts");
/* harmony import */ var _common_shared_components_reauth_dialog_reauth_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/shared/components/reauth-dialog/reauth-dialog.component */ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.ts");
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
var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent(fb, dialog, firestore) {
        this.fb = fb;
        this.dialog = dialog;
        this.firestore = firestore;
        this.showClear = false;
        this.newUrl = '';
        this.preferencesForm = fb.group({
            updateDisplay: fb.group({
                'display': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), CustomValidator.containAlpha]]
            }),
            updateEmail: fb.group({
                'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(EMAILPATTERN)]]
            }),
            updatePassword: fb.group({
                'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                'confirm': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.confirmCheck.bind(this)]]
            }),
        });
    }
    PreferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.displayPanel.open();
        this.avatarPanel.open();
        this.user = this.firestore.currentUser;
        this.current = this.preferencesForm.value['updatePassword'].password;
        this.preferencesForm.valueChanges.subscribe(function (response) {
            var password = response['updatePassword'].password;
            _this.current = password;
        });
        this.displayPanel.opened.subscribe(function () { return _this.preferencesForm.reset(); });
        this.emailPanel.opened.subscribe(function () { return _this.preferencesForm.reset(); });
        this.passwordPanel.opened.subscribe(function () { return _this.preferencesForm.reset(); });
        this.avatarPanel.opened.subscribe(function () { return _this.preferencesForm.reset(); });
    };
    Object.defineProperty(PreferencesComponent.prototype, "displayError", {
        get: function () {
            return this.preferencesForm.get('updateDisplay').get('display').errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferencesComponent.prototype, "emailError", {
        get: function () {
            return this.preferencesForm.get('updateEmail').get('email').errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferencesComponent.prototype, "passwordError", {
        get: function () {
            return this.preferencesForm.get('updatePassword').get('password').errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreferencesComponent.prototype, "confirmError", {
        get: function () {
            return this.preferencesForm.get('updatePassword').get('confirm').errors;
        },
        enumerable: true,
        configurable: true
    });
    PreferencesComponent.prototype.confirmCheck = function (control) {
        var condition = control.value === this.current;
        return condition ? null : { isNotMatched: true };
    };
    PreferencesComponent.prototype.onClear = function () {
        this.showClear = false;
        this.newUrl = '';
        try {
            this.upload['url'] = '';
        }
        catch (e) { }
    };
    PreferencesComponent.prototype.onChange = function (event) {
        var _this = this;
        try {
            this.targetFiles = event.target['files'];
            this.upload = this.targetFiles[0];
            if (this.upload.type.includes('image'))
                this.file = new _common_shared_models_model__WEBPACK_IMPORTED_MODULE_3__["Upload"](this.upload);
            var reader_1 = new FileReader();
            reader_1.onload = function () { return (_this.upload['url'] = reader_1.result); };
            reader_1.readAsDataURL(this.upload);
        }
        catch (e) { }
    };
    PreferencesComponent.prototype.cloudQueue = function () {
        var _this = this;
        this.cloudRef = this.dialog.open(_common_shared_components_cloud_queue_dialog_cloud_queue_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CloudQueueDialogComponent"], { data: {} });
        this.cloudRef.beforeClose().subscribe(function (data) {
            try {
                _this.newUrl = data.url;
            }
            catch (e) { }
        });
        this.cloudRef.backdropClick().subscribe(function () { return (_this.newUrl = ''); });
        this.cloudRef.keydownEvents().subscribe(function () { return (_this.newUrl = ''); });
    };
    PreferencesComponent.prototype.onSubmit = function (option) {
        var _this = this;
        switch (option) {
            case 'display': {
                var control = this.preferencesForm.get('updateDisplay').get('display').invalid;
                if (control) {
                    alert('Form invalid');
                    return;
                }
                var form = this.preferencesForm.value['updateDisplay'];
                this.confirmationRef = this.dialog.open(_common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateConfirmationDialogComponent"], { data: { form: form, option: 'display' } });
                break;
            }
            case 'email': {
                var control = this.preferencesForm.get('updateEmail').get('email').invalid;
                if (control) {
                    alert('Form invalid');
                    return;
                }
                this.reauthRef = this.dialog.open(_common_shared_components_reauth_dialog_reauth_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ReauthDialogComponent"]);
                this.reauthRef.beforeClose().subscribe(function (password) {
                    var form = _this.preferencesForm.value['updateEmail'];
                    form['password'] = password;
                    _this.confirmationRef = _this.dialog.open(_common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateConfirmationDialogComponent"], { data: { form: form, option: 'email' } });
                });
                break;
            }
            case 'password': {
                var control = this.preferencesForm.get('updatePassword').get('confirm').invalid;
                if (control) {
                    alert('Form invalid');
                    return;
                }
                this.reauthRef = this.dialog.open(_common_shared_components_reauth_dialog_reauth_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ReauthDialogComponent"]);
                this.reauthRef.beforeClose().subscribe(function (password) {
                    var form = _this.preferencesForm.value['updatePassword'];
                    form['currentPassword'] = password;
                    _this.confirmationRef = _this.dialog.open(_common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateConfirmationDialogComponent"], { data: { form: form, option: 'password' } });
                });
                break;
            }
            case 'avatar': {
                var form = this.file;
                try {
                    if (this.newUrl.length > 0) {
                        this.dialog.open(_common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateConfirmationDialogComponent"], { data: { form: form, option: 'avatar', newUrl: this.newUrl } });
                    }
                    else if (this.upload['url']) {
                        this.dialog.open(_common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UpdateConfirmationDialogComponent"], { data: { form: form, option: 'avatar', newUrl: this.newUrl } });
                    }
                }
                catch (e) { }
                break;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('display'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], PreferencesComponent.prototype, "displayPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('email'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], PreferencesComponent.prototype, "emailPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('password'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], PreferencesComponent.prototype, "passwordPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('avatar'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"])
    ], PreferencesComponent.prototype, "avatarPanel", void 0);
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/dashboard/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.scss */ "./src/app/dashboard/preferences/preferences.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _common_core_services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
    ], PreferencesComponent);
    return PreferencesComponent;
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

/***/ "./src/app/dashboard/preferences/preferences.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/preferences/preferences.module.ts ***!
  \*************************************************************/
/*! exports provided: PreferencesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesModule", function() { return PreferencesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _preferences_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preferences-routing.module */ "./src/app/dashboard/preferences/preferences-routing.module.ts");
/* harmony import */ var _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/modules/material2.module */ "./src/app/common/core/modules/material2.module.ts");
/* harmony import */ var _common_core_services_preference_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/services/preference.service */ "./src/app/common/core/services/preference.service.ts");
/* harmony import */ var _preferences_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preferences.component */ "./src/app/dashboard/preferences/preferences.component.ts");
/* harmony import */ var _common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component */ "./src/app/common/shared/components/update-confirmation-dialog/update-confirmation-dialog.component.ts");
/* harmony import */ var _common_shared_components_cloud_queue_dialog_cloud_queue_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component */ "./src/app/common/shared/components/cloud-queue-dialog/cloud-queue-dialog.component.ts");
/* harmony import */ var _common_shared_components_reauth_dialog_reauth_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/shared/components/reauth-dialog/reauth-dialog.component */ "./src/app/common/shared/components/reauth-dialog/reauth-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PreferencesModule = /** @class */ (function () {
    function PreferencesModule() {
    }
    PreferencesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _preferences_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreferencesRoutingModule"],
                _common_core_modules_material2_module__WEBPACK_IMPORTED_MODULE_4__["Material2Module"]
            ],
            declarations: [
                _preferences_component__WEBPACK_IMPORTED_MODULE_6__["PreferencesComponent"],
                _common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UpdateConfirmationDialogComponent"],
                _common_shared_components_cloud_queue_dialog_cloud_queue_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CloudQueueDialogComponent"],
                _common_shared_components_reauth_dialog_reauth_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ReauthDialogComponent"]
            ],
            entryComponents: [
                _common_shared_components_update_confirmation_dialog_update_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UpdateConfirmationDialogComponent"],
                _common_shared_components_cloud_queue_dialog_cloud_queue_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CloudQueueDialogComponent"],
                _common_shared_components_reauth_dialog_reauth_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ReauthDialogComponent"]
            ],
            providers: [
                _common_core_services_preference_service__WEBPACK_IMPORTED_MODULE_5__["PreferenceService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], PreferencesModule);
    return PreferencesModule;
}());



/***/ })

}]);
//# sourceMappingURL=preferences-preferences-module.js.map