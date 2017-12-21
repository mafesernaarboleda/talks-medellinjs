webpackJsonp([1,4],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TalkService = (function () {
    function TalkService(http) {
        this.http = http;
    }
    TalkService.prototype.getTalks = function () {
        return this.http.get('https://safe-savannah-59407.herokuapp.com/talks')
            .map(function (res) {
            console.log('getTalks', res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    TalkService.prototype.saveTalk = function (data) {
        return this.http.post('https://safe-savannah-59407.herokuapp.com/talks', data)
            .map(function (res) {
            console.log('saveTalk', res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    TalkService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log('handleError', errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    TalkService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TalkService);
    return TalkService;
    var _a;
}());
//# sourceMappingURL=talk.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeakerService = (function () {
    function SpeakerService(http) {
        this.http = http;
    }
    // saveSpeaker(): Observable<any> {
    //   // const headers = new Headers()
    //   const options = '';
    //   return this.http.post('http://localhost:8081/talks', options)
    //     .map( (res: Response) => {
    //       console.log(res.json());
    //       return res.json();
    //     })
    //     .catch(this.handleError);
    // }
    SpeakerService.prototype.saveSpeaker = function (data) {
        return this.http.post('https://safe-savannah-59407.herokuapp.com/speakers', data)
            .map(function (res) {
            console.log('saveSpeakers', res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    SpeakerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log('handleError', errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SpeakerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], SpeakerService);
    return SpeakerService;
    var _a;
}());
//# sourceMappingURL=speaker.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_speaker_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_talk_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
function ratingRange(min, max) {
    return function (c) {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        ;
        return null;
    };
}
var TalkRegisterComponent = (function () {
    function TalkRegisterComponent(fb, talkService, speakerService) {
        this.fb = fb;
        this.talkService = talkService;
        this.speakerService = speakerService;
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    Object.defineProperty(TalkRegisterComponent.prototype, "addresses", {
        get: function () {
            return this.talkForm.get('addresses');
        },
        enumerable: true,
        configurable: true
    });
    TalkRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.talkForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
            }, { validator: emailMatcher }),
            twitterId: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]],
            titleTalk: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)]],
            duration: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]],
            shirtSize: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]],
            talkDescription: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)]],
            speakerDescription: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3)]],
            necessaryResources: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required]]
        });
        var emailControl = this.talkForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
    };
    TalkRegisterComponent.prototype.populateTestData = function () {
        this.talkForm.patchValue({
            firstName: 'Jack',
            lastName: 'white',
            titleTalk: 'Title Talk',
            twitterId: '@Harkness',
            emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' },
            duration: '1',
            shirtSize: 'S',
            talkDescription: 'Description of',
            speakerDescription: 'Developer',
            necessaryResources: 'IMac!!!',
        });
    };
    TalkRegisterComponent.prototype.save = function () {
        console.log('Saved: ' + JSON.stringify(this.talkForm.value));
        this.saveSpeakers(this.talkForm.value);
    };
    TalkRegisterComponent.prototype.saveSpeakers = function (data) {
        var _this = this;
        this.speakerService.saveSpeaker(this.jsonSpeaker(this.talkForm.value))
            .subscribe(function (result) { return _this.saveTalks(result._id); }, function (error) { return _this.errorMessage = error; });
    };
    TalkRegisterComponent.prototype.saveTalks = function (id) {
        var _this = this;
        this.talkService.saveTalk(this.jsonTalk(this.talkForm.value, id)).subscribe(function () { }, function (error) { return _this.errorMessage = error; });
    };
    TalkRegisterComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    TalkRegisterComponent.prototype.jsonSpeaker = function (data) {
        return {
            'name': data.firstName + " " + data.lastName,
            'email': data.emailGroup.email,
            'twitterUser': data.twitterId,
            'description': data.speakerDescription,
            'size': data.shirtSize,
        };
    };
    TalkRegisterComponent.prototype.jsonTalk = function (data, id) {
        return {
            'speakers': [{ '_id': id }],
            'title': data.titleTalk,
            'duration': data.duration,
            'description': data.talkDescription,
            'sources': data.necessaryResources
        };
    };
    TalkRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-talk-register-component',
            template: __webpack_require__(521),
            styles: [__webpack_require__(518)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_talk_service__["a" /* TalkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_talk_service__["a" /* TalkService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_speaker_service__["a" /* SpeakerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_speaker_service__["a" /* SpeakerService */]) === 'function' && _c) || Object])
    ], TalkRegisterComponent);
    return TalkRegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=talk-register.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_talk_service__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalkTableComponent = (function () {
    function TalkTableComponent(talkService) {
        this.talkService = talkService;
        this.pageTitle = 'List Of Talks';
    }
    Object.defineProperty(TalkTableComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredTals = this.listFilter ? this.performFilter(this.listFilter) : this.talk;
        },
        enumerable: true,
        configurable: true
    });
    TalkTableComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.talk.filter(function (talk) {
            return talk.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    TalkTableComponent.prototype.ngOnInit = function () {
        this.getListOfTalks();
    };
    TalkTableComponent.prototype.getListOfTalks = function () {
        var _this = this;
        this.talkService.getTalks()
            .subscribe(function (talk) { return _this.talk = talk.map(_this.matchResultToFront.bind(_this)); }, function (error) { return _this.errorMessage = error; });
    };
    TalkTableComponent.prototype.matchResultToFront = function (result) {
        return {
            firstName: result.speakers[0].name,
            lastName: result.speakers[0].name,
            email: result.speakers[0].email,
            twitterUser: result.speakers[0].twitterUser,
            titleTalk: result.title,
            duration: result.duration,
            shirtSize: result.size,
            talkDescription: result.description,
            speakerDescription: result.speakers[0].description,
            necessaryResources: result.sources,
        };
    };
    TalkTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-talk-table',
            template: __webpack_require__(522),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_talk_service__["a" /* TalkService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_talk_service__["a" /* TalkService */]) === 'function' && _a) || Object])
    ], TalkTableComponent);
    return TalkTableComponent;
    var _a;
}());
//# sourceMappingURL=talk-table.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(463);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__talk_register_talk_register_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__talk_table_talk_table_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__talk_register_talk_register_component__["a" /* TalkRegisterComponent */] },
    { path: 'table', component: __WEBPACK_IMPORTED_MODULE_3__talk_table_talk_table_component__["a" /* TalkTableComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__talk_register_talk_register_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__talk_table_talk_table_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_talk_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_speaker_service__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__talk_register_talk_register_component__["a" /* TalkRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__talk_table_talk_table_component__["a" /* TalkTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_services_talk_service__["a" /* TalkService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_speaker_service__["a" /* SpeakerService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\n  <div class=\"panel-body\">\n    <form class=\"form-horizontal\" novalidate (ngSubmit)=\"save()\" [formGroup]=\"talkForm\">\n      <fieldset>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('firstName').touched ||\n                                            talkForm.get('firstName').dirty) &&\n                                            !talkForm.get('firstName').valid }\">\n          <label class=\"col-md-2 control-label\" for=\"firstNameId\">First Name</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"firstNameId\" type=\"text\" formControlName=\"firstName\"/>\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('firstName').touched ||\n                                                       talkForm.get('firstName').dirty) &&\n                                                       talkForm.get('firstName').errors\">\n              <span *ngIf=\"talkForm.get('firstName').errors.required\">Please enter your first name.</span>\n              <span *ngIf=\"talkForm.get('firstName').errors.minlength\">The first name must be longer than 3 characters.</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('lastName').touched || talkForm.get('lastName').dirty) && !talkForm.get('lastName').valid }\">\n          <label class=\"col-md-2 control-label\" for=\"lastNameId\">Last Name</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"lastNameId\" type=\"text\" formControlName=\"lastName\" />\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('lastName').touched || talkForm.get('lastName').dirty) && talkForm.get('lastName').errors\">\n              <span *ngIf=\"talkForm.get('lastName').errors.required\">Please enter your last name.</span>\n              <span *ngIf=\"talkForm.controls.lastName.errors.maxlength\">The last name must be less than 50 characters.</span>\n            </span>\n          </div>\n        </div>\n\n        <div formGroupName=\"emailGroup\" [ngClass]=\"{'has-error': talkForm.get('emailGroup').errors }\">\n          <div class=\"form-group\" [ngClass]=\"{'has-error': emailMessage}\">\n            <label class=\"col-md-3 control-label\" for=\"emailId\">Email</label>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" id=\"emailId\" type=\"email\" formControlName=\"email\" />\n              <span class=\"help-block\" *ngIf=\"emailMessage\">{{ emailMessage }}</span>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('emailGroup.confirmEmail').touched ||\n                                                talkForm.get('emailGroup.confirmEmail').dirty) &&\n                                                !talkForm.get('emailGroup.confirmEmail').valid }\">\n            <label class=\"col-md-2 control-label\" for=\"confirmEmailId\">Confirm Email</label>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" id=\"confirmEmailId\" type=\"email\" formControlName=\"confirmEmail\"/>\n              <span class=\"help-block\" *ngIf=\"(talkForm.get('emailGroup.confirmEmail').touched ||\n                                                          talkForm.get('emailGroup.confirmEmail').dirty) &&\n                                                          (talkForm.get('emailGroup.confirmEmail').errors ||\n                                                           talkForm.get('emailGroup').errors)\">\n                <span *ngIf=\"talkForm.get('emailGroup.confirmEmail').errors?.required\">Please confirm your email address.</span>\n                <span *ngIf=\"talkForm.get('emailGroup').errors?.match\">The confirmation does not match the email address.</span>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': !talkForm.get('twitterId').valid }\">\n          <label class=\"col-md-2 control-label\" for=\"twitterId\">Twitter user</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"twitterId\" type=\"tel\" formControlName=\"twitterId\" />\n            <span class=\"help-block\" *ngIf=\"talkForm.get('twitterId').errors\">\n              <span *ngIf=\"talkForm.get('twitterId').errors.required\">Please enter your twiter User.</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('titleTalk').touched ||\n                                              talkForm.get('titleTalk').dirty) &&\n                                              !talkForm.get('titleTalk').valid }\">\n          <label class=\"col-md-2 control-label\" for=\"titleTalkId\">Title of the talk</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"titleTalkId\" type=\"text\" formControlName=\"titleTalk\"/>\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('titleTalk').touched ||\n                                                talkForm.get('titleTalk').dirty) &&\n                                                talkForm.get('titleTalk').errors\">\n              <span *ngIf=\"talkForm.get('titleTalk').errors.required\">Please enter the title of the talk.</span>\n              <span *ngIf=\"talkForm.get('titleTalk').errors.minlength\">The title of the talk must be longer than 3 characters.</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('duration').touched ||\n                                                talkForm.get('duration').dirty) &&\n                                                !talkForm.get('duration').valid }\">\n          <label class=\"col-md-2 control-label\" for=\"durationId\">Approximate duration</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" id=\"durationId\" type=\"text\" formControlName=\"duration\"/>\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('duration').touched ||\n                                                talkForm.get('duration').dirty) &&\n                                                talkForm.get('duration').errors\">\n              <span *ngIf=\"talkForm.get('duration').errors.required\">Please enter a approximate duration.</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\" attr.for=\"{{'cityId' + i}}\">Shirt size</label>\n          <div class=\"col-md-8\">\n            <select class=\"form-control\" id=\"{{'shirtSizeId' + i}}\" formControlName=\"shirtSize\">\n                <option value=\"S\">S</option>\n                <option value=\"M\">M</option>\n                <option value=\"L\">L</option>\n                <option value=\"XL\">XL</option>\n                <option value=\"XL\">XXL</option>\n            </select>\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('shirtSize').touched ||\n                                                  talkForm.get('shirtSize').dirty) &&\n                                                  talkForm.get('shirtSize').errors\">\n              <span *ngIf=\"talkForm.get('shirtSize').errors?.required\">Please confirm your shirt size.</span>\n            </span>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('talkDescription').touched ||\n                                                  talkForm.get('talkDescription').dirty) &&\n                                                  !talkForm.get('talkDescription').valid }\">\n          <label class=\"col-md-12 control-label\" for=\"talkDescriptionId\">Small description of the talk</label>\n          <div class=\"col-md-8\">\n            <textarea class=\"form-control\" id=\"talkDescriptionId\" type=\"text\" formControlName=\"talkDescription\"></textarea>\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('talkDescription').touched ||\n                                                  talkForm.get('talkDescription').dirty) &&\n                                                  talkForm.get('talkDescription').errors\">\n              <span *ngIf=\"talkForm.get('talkDescription').errors.required\">Please enter a small description of the talk.</span>\n              <span *ngIf=\"talkForm.get('talkDescription').errors.minlength\">The description must be longer than 3 characters.</span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('speakerDescription').touched ||\n                                                  talkForm.get('speakerDescription').dirty) &&\n                                                  !talkForm.get('speakerDescription').valid }\">\n          <label class=\"col-md-12 control-label\" for=\"speakerDescriptionId\">Small description about you (career, occupation, etc.)</label>\n          <div class=\"col-md-8\">\n            <textarea class=\"form-control\" id=\"speakerDescriptionId\" type=\"text\" formControlName=\"speakerDescription\"></textarea>\n            <span class=\"help-block\" *ngIf=\"(talkForm.get('speakerDescription').touched ||\n                                                  talkForm.get('speakerDescription').dirty) &&\n                                                  talkForm.get('speakerDescription').errors\">\n              <span *ngIf=\"talkForm.get('speakerDescription').errors.required\">Please enter a small description about you.</span>\n              <span *ngIf=\"talkForm.get('speakerDescription').errors.minlength\">The description must be longer than 3 characters.</span>\n            </span>\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (talkForm.get('necessaryResources').touched ||\n                                                talkForm.get('necessaryResources').dirty) &&\n                                                !talkForm.get('necessaryResources').valid }\">\n          <label class=\"col-md-2 control-label\" for=\"necessaryResourcesId\">Necessary resources</label>\n          <div class=\"col-md-8\">\n          <textarea class=\"form-control\" id=\"necessaryResourcesId\" type=\"text\" formControlName=\"necessaryResources\"></textarea>\n          <span class=\"help-block\" *ngIf=\"(talkForm.get('necessaryResources').touched ||\n                                                talkForm.get('necessaryResources').dirty) &&\n                                                talkForm.get('necessaryResources').errors\">\n          </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-md-4 col-md-offset-2\">\n              <span>\n                  <button class=\"btn btn-primary\"\n                          type=\"submit\"\n                          [disabled]=\"!talkForm.valid\">\n                      Save\n                  </button>\n              </span>\n              <span>\n                  <button class=\"btn btn-default\"\n                          type=\"button\"\n                          (click)=\"populateTestData()\">\n                      Test Data\n                  </button>\n              </span>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n</div>\n<br>Dirty: {{ talkForm.dirty }}\n<br>Touched: {{ talkForm.touched }}\n<br>Valid: {{ talkForm.valid }}\n<br>Value: {{ talkForm.value | json }}\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\n  <div class='panel-heading'>\n    {{pageTitle | uppercase}}\n  </div>\n  <div class='panel-body'>\n    <div class='table-responsive'>\n      <table class='table'>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Twitter User</th>\n            <th>Title Talk</th>\n            <th>Duration</th>\n            <th>Shirt Size</th>\n            <th>Talk Description</th>\n            <th>Speaker Description</th>\n            <th>Necessary Resources</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor='let item of talk'>\n            <td>{{ item.firstName }}</td>\n            <td>{{ item.email }}</td>\n            <td>{{ item.twitterUser }}</td>\n            <td>{{ item.titleTalk }}</td>\n            <td>{{ item.duration }}</td>\n            <td>{{ item.shirtSize }}</td>\n            <td>{{ item.talkDescription }}</td>\n            <td>{{ item.speakerDescription }}</td>\n            <td>{{ item.necessaryResources }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div *ngIf='errorMessage' class='alert alert-danger'>\n  Error: {{ errorMessage }}\n</div>"

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[572]);
//# sourceMappingURL=main.bundle.js.map