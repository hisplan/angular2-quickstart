System.register(['angular2/core', './pub-adv.service', "./pub", "./adv", './pub-adv'], function(exports_1, context_1) {
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
    var core_1, core_2, pub_adv_service_1, pub_1, adv_1, pub_adv_1;
    var PubAdvComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (pub_adv_service_1_1) {
                pub_adv_service_1 = pub_adv_service_1_1;
            },
            function (pub_1_1) {
                pub_1 = pub_1_1;
            },
            function (adv_1_1) {
                adv_1 = adv_1_1;
            },
            function (pub_adv_1_1) {
                pub_adv_1 = pub_adv_1_1;
            }],
        execute: function() {
            PubAdvComponent = (function () {
                function PubAdvComponent(_pubAdvService) {
                    this._pubAdvService = _pubAdvService;
                    this.data = new pub_adv_1.PubAdv();
                    this.data.pub = new pub_1.Pub();
                    this.data.adv = new adv_1.Adv();
                }
                PubAdvComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit');
                    // this.getData();
                };
                PubAdvComponent.prototype.getData = function () {
                    var _this = this;
                    this._pubAdvService.getPubAdvData(10720, 73396).subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
                };
                PubAdvComponent = __decorate([
                    core_1.Component({
                        selector: 'pub-adv',
                        template: '<h2>Pub-Adv</h2><div>{{data.pub.name}}</div>'
                    }),
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [pub_adv_service_1.PubAdvService])
                ], PubAdvComponent);
                return PubAdvComponent;
            }());
            exports_1("PubAdvComponent", PubAdvComponent);
        }
    }
});
//# sourceMappingURL=pub-adv.component.js.map