System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var PubAdvService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            PubAdvService = (function () {
                function PubAdvService(http) {
                    this.http = http;
                    console.log('tr');
                }
                PubAdvService.prototype.getPubAdvData = function (pubId, advId) {
                    var date = '2016-04-25';
                    var fileName = "/data/" + date + ".pub-" + pubId + ".adv-" + advId + ".json";
                    return this.http.get(fileName)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                PubAdvService.prototype.extractData = function (response) {
                    if (response.status < 200 || response.status >= 300) {
                        throw new Error('Bad response status: ' + response.status);
                    }
                    var body = response.json();
                    console.log(body);
                    return body || {};
                };
                PubAdvService.prototype.handleError = function (error) {
                    var errMsg = error.text || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                PubAdvService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PubAdvService);
                return PubAdvService;
            }());
            exports_1("PubAdvService", PubAdvService);
        }
    }
});
//# sourceMappingURL=pub-adv.service.js.map