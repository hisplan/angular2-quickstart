import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PubAdvService {

    constructor(private http: Http) {
        console.log('tr');
     }

    getPubAdvData(pubId, advId) {
        let date = '2016-04-25';
        let fileName = `/data/${date}.pub-${pubId}.adv-${advId}.json`;
        
        return this.http.get(fileName)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }
        let body = response.json();
        console.log(body);
        return body || {};
    }

    private handleError(error: Response) {
        let errMsg = error.text || 'Server error';
        console.error(errMsg);

        return Observable.throw(errMsg);
    }

}
