import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang = 'de';

  constructor(public translate: TranslateService) {
    translate.use(this.lang);
  }

  update() {
    this.translate.use(this.lang);
  }
}
