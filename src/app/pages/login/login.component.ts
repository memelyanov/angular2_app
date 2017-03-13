import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.component.scss')],
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	constructor() {
		console.log('Login Page constructor');
	}

	public ngOnInit() {
		console.log('Login Page init');
	}

	public ngOnDestroy() {
		// unsubscribe here
	}
}
