import {HttpClient} from "@angular/common/http";
import {TranslateLoader} from "@ngx-translate/core";
import "rxjs/add/operator/map";
import {environment} from '../../environments/environment'

export class TranslateHttpLoader implements TranslateLoader {
    constructor(private http: HttpClient) {}

    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    public getTranslation(lang: string): any {
        return this.http.get(environment.translateUrl(lang));
    }
}