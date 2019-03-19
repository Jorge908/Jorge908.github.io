(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <img src=\"assets/imagem.JPG\" alt=\"some text\" width=300 height=200>\n  <br>\n    <h1> Biografia </h1>\n</div>\n\n<app-informacoes></app-informacoes>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'about-me';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./informacoes/informacoes.component */ "./src/app/informacoes/informacoes.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _informacoes_informacoes_component__WEBPACK_IMPORTED_MODULE_5__["InformacoesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/informacoes/informacoes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/informacoes/informacoes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWFjb2VzL2luZm9ybWFjb2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/informacoes/informacoes.component.html":
/*!********************************************************!*\
  !*** ./src/app/informacoes/informacoes.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    {{biografia}}\n  <h2> Dados Pessoais </h2>\n  <ul>  \n    <li>Nome: {{informacoesPessoais.nome}}</li>\n    <li>Sexo: {{informacoesPessoais.sexo}}</li>\n    <li>Email: {{informacoesPessoais.email}}</li>\n    <li>Profissão: {{informacoesPessoais.profissao}}</li>\n    <li>Estado Civil: {{informacoesPessoais.estadoCivil}}</li>\n    <li>Cidade: {{informacoesPessoais.cidade}}</li>\n    <li>Estado: {{informacoesPessoais.estado}}</li>\n  </ul>\n</body>\n\n<body>\n  <h2> Informações Acadêmicas </h2>\n  <ul>  \n    <li>Universidade: {{informacoesAcademicas.universidade}}</li>\n    <li>Curso: {{informacoesAcademicas.curso}}</li>\n  </ul>\n<table>\n  <tbody>\n    <th> Disciplinas do 1º Período </th>\n    <tr *ngFor = \"let disc of primeiro\">\n      <td> <li>{{disc.nome}}</li> </td>\n    </tr>\n    <th> Disciplinas do 2º Período </th>\n    <tr *ngFor = \"let disc of segundo\">\n      <td> <li>{{disc.nome}}</li> </td>\n    </tr>\n    <th> Disciplinas do 3º Período </th>\n    <tr *ngFor = \"let disc of terceiro\">\n      <td> <li>{{disc.nome}}</li> </td>\n    </tr>\n    <th> Disciplinas do 4º Período </th>\n    <tr *ngFor = \"let disc of quarto\">\n      <td> <li>{{disc.nome}}</li> </td>\n    </tr>\n    <th> Disciplinas do 5º Período </th>\n    <tr *ngFor = \"let disc of quinto\">\n      <td> <li>{{disc.nome}}</li> </td>\n    </tr>\n  </tbody>\n </table>\n\n"

/***/ }),

/***/ "./src/app/informacoes/informacoes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/informacoes/informacoes.component.ts ***!
  \******************************************************/
/*! exports provided: InformacoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesComponent", function() { return InformacoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformacoesComponent = /** @class */ (function () {
    function InformacoesComponent() {
        this.informacoesPessoais = { nome: 'Jorge Wilson Cunha da Silva', sexo: 'Masculino', email: 'jorgewilsc@gmail.com',
            profissao: 'Estudante', estadoCivil: 'Solteiro', cidade: 'Palmas', estado: 'Tocantins' };
        this.informacoesAcademicas = { universidade: 'Centro Universitário Luterano de Palmas', curso: 'Engenharia de Software' };
        this.primeiro = [{ nome: 'Algoritmos e Programação I' },
            { nome: 'Fundamentos de Matemática' },
            { nome: 'Introdução a Computação' }];
        this.segundo = [{ nome: 'Algoritmos e Programação II' },
            { nome: 'Comunicação e Expressão' },
            { nome: 'Cultura Religiosa' },
            { nome: 'Logica de Predicados' }];
        this.terceiro = [{ nome: 'Banco de Dados I' },
            { nome: 'Engenharia de Software I' },
            { nome: 'Estrutura de Dados I' },
            { nome: 'Linguagem de Programação Orientada a Objetos I' }];
        this.quarto = [{ nome: 'Arquitetura e Organização de Computadores I' },
            { nome: 'Banco de Dados II' },
            { nome: 'Engenharia de Software II' },
            { nome: 'Linguagem de Programação Comercial I' },
            { nome: 'Sistemas de Informação I' },
            { nome: 'Sociedade e Contemporaneidade' }];
        this.quinto = [{ nome: 'Linguagem de Programação para a WEB' },
            { nome: 'Testes de Software' },
            { nome: 'Instrumentalização Cientifica' },
            { nome: 'Fundamentos de Sistemas de Informação' },
            { nome: 'Engenharia de Software II' }];
        this.informacoesProfissionais = 'Estudante';
        this.biografia = 'Nasci no dia vinte e sete de setembro de mil novecentos e noventa e nove em Barra do Corda-MA, onde vivi durante dezesseis anos com minha mãe (Maria de Lourdes de Sousa Cunha) e meu pai (Antonio Edmilson da Silva). Após o termino do ensino médio, decidi ingressar no curso de Ciência da Computação na ULBRA, mas por não ter afinidade com matérias de calculo, tomei a decisão de trocar de curso, e atualmente estou cursando o quinto periodo de Engenharia de Software.';
    }
    InformacoesComponent.prototype.ngOnInit = function () {
    };
    InformacoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informacoes',
            template: __webpack_require__(/*! ./informacoes.component.html */ "./src/app/informacoes/informacoes.component.html"),
            styles: [__webpack_require__(/*! ./informacoes.component.css */ "./src/app/informacoes/informacoes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformacoesComponent);
    return InformacoesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jorge Wilson\about-me\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map