webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n    text-align: center;\n    color: #4056A1;\n}\nform {\n    max-width: 40%;\n    text-align: center;    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n  <h3>Add a new Book</h3>\n    <div class=\"form-group row\">\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Author</label>\n      <div class=\"col-sm-10\">\n        <input #bookAuthor type=\"name\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Author\" required formControlName=\"author\">\n       <!-- ngClass=\"{ 'has-error': !form.get('author').valid && form.get('author').touched,\n       'has-feedback': !form.get('author').valid && form.get('author').touched}\" -->\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Date</label>\n      <div class=\"col-sm-10\">\n        <input #publishDate type=\"date\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Publish Date\" formControlName=\"date\" required>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Title</label>\n      <div class=\"col-sm-10\">\n        <input #bookTitle type=\"title\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Title\" formControlName=\"title\" required>\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Image</label>\n      <div class=\"col-sm-10\">\n        <input #bookImage type=\"title\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Image\" formControlName=\"src\" required>\n        <input type=\"file\" name=\"img\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button (click)=\"add(); bookAuthor.value=''; publishDate.value=''; bookTitle.value=''; bookImage.value=''\" class=\"btn btn-success\">\n          <fa name=\"plus\"></fa>\n        </button>\n        <button routerLink=\"/books\" type=\"button\" class=\"btn btn-primary\">\n          <fa name=\"undo\"></fa>\n        </button>\n      </div>\n    </div>\n  </form>"

/***/ }),

/***/ "../../../../../src/app/add-book/add-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Book__ = __webpack_require__("../../../../../src/app/models/Book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = (function () {
    function AddBookComponent(bookService, formBuilder) {
        this.bookService = bookService;
        this.formBuilder = formBuilder;
        this.book = new __WEBPACK_IMPORTED_MODULE_1__models_Book__["a" /* Book */]();
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.books = this.bookService.getBooks(),
            this.form = this.formBuilder.group({
                author: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern("[a-zA-Z0-9_.-]*")]],
                title: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(8)]],
                src: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
                date: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            });
    };
    AddBookComponent.prototype.add = function () {
        var _this = this;
        console.log(this.form.value);
        this.book = this.form.value;
        this.bookService.addBook(this.book)
            .subscribe(function (book) {
            console.log(book);
            _this.books = _this.bookService.getBooks(),
                console.log(_this.books);
        });
    };
    AddBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-book',
            template: __webpack_require__("../../../../../src/app/add-book/add-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__book_service__["a" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__ = __webpack_require__("../../../../../src/app/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_search_book_search_component__ = __webpack_require__("../../../../../src/app/book-search/book-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_3__books_books_component__["a" /* BooksComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_5__book_detail_book_detail_component__["a" /* BookDetailComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_6__add_book_add_book_component__["a" /* AddBookComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_7__book_search_book_search_component__["a" /* BookSearchComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/dashboard\">Books R Us</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/dashboard\"><fa name=\"home\"></fa>Home</a></li>\n        <li><a routerLink=\"/books\"><fa name=\"book\"></fa>Books</a></li>\n        <li><a routerLink=\"/add\"><fa name=\"plus-circle\"></fa>Add</a></li>\n        <li><a routerLink=\"/search\"><fa name=\"search\"></fa>Search</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_book_add_book_component__ = __webpack_require__("../../../../../src/app/add-book/add-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__book_search_book_search_component__ = __webpack_require__("../../../../../src/app/book-search/book-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // <-- NgModel lives here









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_6__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__add_book_add_book_component__["a" /* AddBookComponent */],
                __WEBPACK_IMPORTED_MODULE_15__book_search_book_search_component__["a" /* BookSearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false }),
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__book_service__["a" /* BookService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    text-align: center;\n}\nimg {\n    width: 200px;\n    height: 300px;\n}\nh2 {\n    color: #4056A1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"book\">\n  <h2>{{ book.title | uppercase }} Details</h2>\n  <div>\n    <span>Author: </span>{{book.author}}\n  </div>\n  <div>\n    <span>Date: </span>{{book.date}}\n  </div>\n  <div>\n    <img src=\"{{book.src}}\" alt=\"book image\">\n  </div>\n  <div>\n    <label>Title:\n      <input [(ngModel)]=\"book.title\" placeholder=\"Title\" />\n    </label>\n    <button (click)=\"save()\" type=\"button\" class=\"btn btn-success\"><fa name=\"check\"></fa></button>\n    <button (click)=\"goBack()\" type=\"button\" class=\"btn btn-primary\"><fa name=\"undo\"></fa></button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Book__ = __webpack_require__("../../../../../src/app/models/Book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookDetailComponent = (function () {
    function BookDetailComponent(bookService, route, location) {
        this.bookService = bookService;
        this.route = route;
        this.location = location;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBook();
    };
    BookDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookDetailComponent.prototype.save = function () {
        var _this = this;
        this.bookService.updateBook(this.book)
            .subscribe(function () { return _this.goBack(); });
    };
    BookDetailComponent.prototype.getBook = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.bookService.getBook(id)
            .subscribe(function (book) { return _this.book = book; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Book__["a" /* Book */])
    ], BookDetailComponent.prototype, "book", void 0);
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-detail/book-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book-search/book-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n.container {\n    margin: 0 auto;\n    max-width: 40%;\n}\nli {\n    list-style-type: none;\n    cursor: pointer;\n}\n.list-group {\n    width: 100%;\n}\nlabel {\n    color: #4056A1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-search/book-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-group\">\n    <label for=\"usr\">Search for a book by it's title:</label>\n    <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" type=\"text\" class=\"form-control\" placeholder=\"Type in a title\">\n  </div>\n  <div class=\"list-group\">\n    <a *ngFor=\"let book of books$ | async\" routerLink=\"/detail/{{book.id}}\" class=\"list-group-item\">\n      {{book.title}}\n    </a>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/book-search/book-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookSearchComponent = (function () {
    function BookSearchComponent(bookService) {
        this.bookService = bookService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    BookSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    BookSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* switchMap */])(function (term) { return _this.bookService.searchBooks(term); }));
    };
    BookSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-search',
            template: __webpack_require__("../../../../../src/app/book-search/book-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/book-search/book-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__book_service__["a" /* BookService */]])
    ], BookSearchComponent);
    return BookSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.books = [];
        this.booksUrl = 'api/books';
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    BookService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            console.log(operation + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('getBooks', [])));
    };
    BookService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("getBook id=" + id)));
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this.booksUrl, book, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('updateBook')));
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.booksUrl, book, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('addBook')));
    };
    BookService.prototype.deleteBook = function (book) {
        var id = typeof book === 'number' ? book : book.id;
        var url = this.booksUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('deleteBook')));
    };
    BookService.prototype.searchBooks = function (term) {
        if (!term.trim()) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/books/?title=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('searchBooks', [])));
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.books {\n  list-style-type: none;\n}\n.card-img-top {\n  width: 200px;\n  height: 300px;\n  overflow: hidden;\n}\n.content {\n  margin: 0 auto;\n}\n.content :hover {\n  cursor: pointer;\n}\n.card {\n  text-align: center;\n  margin-bottom: 2em;\n}\n.card :hover {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"books\">\n    <div class=\"row\">\n    <li *ngFor=\"let book of books\">\n      <div class=\"col-md-4\">\n        <div class=\"card\">\n          <div class=\"content\" routerLink=\"/detail/{{book.id}}\">\n            <img class=\"card-img-top\" src='{{book.src}}' alt=\"Card image\">\n            <h5 class=\"card-title\">{{ book.title }}</h5>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{book.author}}</h6>\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{ book.date | date:'longDate'}}</h6>\n          </div>\n          <button routerLink=\"/detail/{{book.id}}\" type=\"button\" class=\"btn btn-primary\"><fa name=\"pencil\"></fa></button>\n          <button (click)=\"delete(book)\" type=\"button\" class=\"btn btn-danger\"><fa name=\"trash-o\"></fa></button>\n        </div>\n      </div>\n    </li>\n    </div>\n  </ul>\n</div>\n<!-- <app-book-detail [book]=\"selectedBook\"></app-book-detail> -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(bookService) {
        this.bookService = bookService;
    }
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; });
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    BooksComponent.prototype.delete = function (book) {
        if (!confirm("Are you sure?")) {
            return;
        }
        else {
            this.books = this.books.filter(function (b) { return b !== book; });
            this.bookService.deleteBook(book).subscribe();
        }
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("../../../../../src/app/books/books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n  [class*='col-']:last-of-type {\n    padding-right: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n  *, *:after, *:before {\n    box-sizing: border-box;\n  }\n  h3 {\n    text-align: center; margin-bottom: 0;\n  }\n  h4 {\n    position: relative;\n  }\n  .grid {\n    margin: 0;\n  }\n  .col-1-4 {\n    width: 25%;\n  }\n  .module {\n    padding: 20px;\n    text-align: center;\n    font-weight: bold;\n    color: #4056A1;\n    min-width: 120px;\n    border-radius: 2px;\n  }\n  .module:hover {\n    background-color: #C5CBE3;\n    cursor: pointer;\n    color: #F7882F;\n  }\n  .grid-pad {\n    padding: 10px 0;\n  }\n  .grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n  @media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n  @media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }\n\n/* my input */\n.module img {\n  min-width: 120px;\n  height: 300px;\n  overflow: hidden;\n}\nh2{\n  color: #4056A1;\n  text-align: center; \n  margin-bottom: 0;\n}\nul {\n  list-style-type: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Top Books</h2>\n<div class=\"grid grid-pad\">\n  <ul class=\"books\">\n    <div class=\"row\">\n      <li *ngFor=\"let book of books\" class=\"col-1-4\" routerLink=\"/detail/{{book.id}}\">\n        <div class=\"module book\">\n          <img class=\"card-img-top\" src='{{book.src}}' alt=\"Card image\">\n          <h5 class=\"card-title\">{{ book.title }}</h5>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{book.author}}</h6>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{ book.date }}</h6>\n        </div>\n      </li>\n    </div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(bookService) {
        this.bookService = bookService;
        this.books = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    DashboardComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [
            { id: 1, author: 'Adam Freeman', date: ' March 2014', title: 'Pro AngularJS', src: 'https://blog.mariusschulz.com/content/images/pro_angularjs.jpg' },
            { id: 2, author: 'Kyle Simpson', date: 'May 2000', title: 'You Don\'t Know JS', src: 'https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/up%20%26%20going/cover.jpg' },
            { id: 3, author: 'Bonnie Eisenman', date: 'December 2015', title: 'Learning React Native', src: 'https://images-na.ssl-images-amazon.com/images/I/514Oh3JZ2mL._SX383_BO1,204,203,200_.jpg' },
            { id: 4, author: 'Simon Holmes', date: 'November 2015', title: 'Getting MEAN', src: 'https://images-na.ssl-images-amazon.com/images/I/51ZwZCpn5dL._SX392_BO1,204,203,200_.jpg' },
            { id: 5, author: 'Nathan Rozentals', date: 'April 2015', title: 'Mastering TypeScript', src: 'https://images-na.ssl-images-amazon.com/images/I/512hCH-UDoL._SX258_BO1,204,203,200_.jpg' },
            { id: 6, author: 'Matt Frisbie', date: '2017', title: 'Angular 2 Cookbook', src: 'https://images-na.ssl-images-amazon.com/images/I/51DtZXPd5BL._SX258_BO1,204,203,200_.jpg' },
            { id: 7, author: 'Leslie Kaminoff, Amy Matthews ', date: '2014', title: 'Yoga Anatomy', src: 'http://www.humankinetics.com/AcuCustom/Sitename/DAM/128/9781492504290_dflt.jpg' },
            { id: 8, author: 'Emily Blunt', date: 'October 2017', title: 'The Girl On The Train', src: 'https://1645110239.rsc.cdn77.org/image/f660x940/q80/mm/been/movies16108/posters/the-girl-on-the-train-1.20170225023010.jpg' },
            { id: 9, author: 'Chloe Benjamin', date: 'September 2018', title: 'The Immortalists', src: 'https://prodimage.images-bn.com/pimages/9780735213180_p0_v4_s550x406.jpg' }
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/models/Book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map