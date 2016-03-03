///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Logger} from './services/logger.service'
import {GoogleApi} from './services/googleapi.service'
import {Component} from 'angular2/core';

//import {VideoPlayer} from './landing.video-player';
import {AppMasthead} from './landing.masthead';
import {ProductMenu} from './landing.prodMenu';
import {AppFooter} from './coffee.footer'


@Component({
    selector: 'rl-ka-coffee',
    templateUrl: 'app/views/app.view.html',
    directives: [AppMasthead, ProductMenu, AppFooter]
})
class AppComponent {
    
 }

bootstrap(AppComponent, [HTTP_PROVIDERS, Logger, GoogleApi])