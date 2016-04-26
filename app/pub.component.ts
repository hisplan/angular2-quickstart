import { Component } from 'angular2/core';

@Component({
    selector: 'pub',
    template: '<h2>{{publisherName}}</h2>'
})
export class PubComponent {

    publisherName = 'bloomberg';

    constructor() {
        console.log('test');
    }
}