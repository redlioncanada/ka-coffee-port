///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Logger} from './services/logger.service';
import {GoogleApi} from './services/googleapi.service';
import {Component} from 'angular2/core';
import {Analytics} from './services/analytics.service'
import {AppMasthead} from './landing.masthead';
import {ProductMenu} from './landing.prodMenu';
import {AppFooter} from './coffee.footer';
import {WhatIntro} from './what.intro';
import {IconRow} from './what.icon.row';
import {RoastRow} from './what.roast.row';
import {BrewMethod} from './what.brew.method';
import {VideoPlayer} from './landing.videoPlayer';
import {VideoPlayerSide} from './landing.videoPlayer-side';
import {GrindRow} from './what.grind';


@Component({
	selector: 'ka-coffee-port-what',
    templateUrl: 'app/views/app.view.html',
    directives: [AppMasthead, ProductMenu, AppFooter, WhatIntro, IconRow, RoastRow, BrewMethod, VideoPlayer, VideoPlayerSide, GrindRow]
})
class AppComponent {
    constructor(analytics: Analytics) {
		analytics.bind('language', function(str) {
			return window.location.href.indexOf('fr_CA/') > -1 ? 'FR' : 'EN'
		})
    }
 }

bootstrap(AppComponent, [HTTP_PROVIDERS, Logger, GoogleApi, Analytics])