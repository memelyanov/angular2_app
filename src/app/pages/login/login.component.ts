import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from '../../core/services';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.component.scss')],
	template: require('./login.component.html')
})
export class LoginComponent implements OnInit, OnDestroy {
	public show: boolean = false;

	// public user: string = '';

	constructor(private loginService: LoginService) {
		console.log('LoginPage.constructor()');
	}

	public clicked() {
		this.show = !this.show;
	}

	public ngOnInit() {
		console.log('LoginPage.ngOnInit()');
		// this.user = this.loginService.getUserInfo();
	}

	public ngOnDestroy() {
		console.log('LoginPage.ngOnDestroy()');
	}

	public doLogin(user: string, password: string) {
		this.loginService.login(user, password);
	}

	public doLogout() {
		this.loginService.logout();
	}
}
