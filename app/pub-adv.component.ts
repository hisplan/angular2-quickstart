import { Component, OnInit } from 'angular2/core';
import { Injectable } from 'angular2/core';

import { PubAdvService } from './pub-adv.service';
import { Pub } from "./pub";
import { Adv } from "./adv";
import { PubAdv } from './pub-adv';

@Component({
    selector: 'pub-adv',
    template: '<h2>Pub-Adv</h2><div>{{data.pub.name}}</div>'
})
@Injectable()
export class PubAdvComponent implements OnInit {

    data: PubAdv;
    errorMessage: string;


    constructor(private _pubAdvService: PubAdvService) {
        this.data = new PubAdv();
        this.data.pub = new Pub();
        this.data.adv = new Adv();
    }

    ngOnInit() {
        console.log('ngOnInit');
        // this.getData();
    }

    getData() {
        this._pubAdvService.getPubAdvData(10720, 73396).subscribe(
            data => this.data = data,
            error => this.errorMessage = <any>error
        );
    }
}
