/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	ViewEncapsulation,
	NgZone
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./styles/vendors.scss'),
		require('./styles/index.scss'),
		require('./app.styles.scss')
	],
	template: require('./app.template.html')
})
export class AppComponent implements OnInit {
	constructor(
		private ngZone: NgZone
	) {
	}

	public ngOnInit() {
		this.ngZone.onStable.subscribe(this.onZoneStable);
		this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
		this.ngZone.onError.subscribe(this.onZoneError);
	}

	public onZoneStable() {
		console.log('We are stable: %s', Date.now());
	}

	public onZoneUnstable() {
		console.log('We are unstable: %s', Date.now());
	}

	public onZoneError(error) {
		console.error('Error', error instanceof Error ? error.message : error.toString());
	}
}
