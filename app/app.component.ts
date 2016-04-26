import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { PubComponent } from './pub.component';
import { PubAdvComponent } from './pub-adv.component';
import { PubAdvService } from './pub-adv.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [PubComponent, PubAdvComponent],
    providers: [
        HTTP_PROVIDERS,
        PubAdvService
    ]
})
export class AppComponent implements OnInit {
    title = 'domainhold_RON';

    constructor() {

    }

    ngOnInit() {
        initChart();
    }

    private initChart(): void {
        console.log('x');

        
    }
}
