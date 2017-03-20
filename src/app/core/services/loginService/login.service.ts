import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	public isAuthenticated: boolean = false;
	public user: string;
	private password: string;

	constructor() {
	}

	public login(user: string, password: string) {
		console.log('LoginService.login(%s, %s)', user, password);

		this.user = user;
		this.password = password;
		this.isAuthenticated = true;
	}

	public logout() {
		console.log('LoginService.logout()');

		this.user = '';
		this.password = '';
		this.isAuthenticated = false;
	}

	public getUserInfo(): string {
		console.log('LoginService.getUserInfo(%s)', this.user);

		return this.user;
	}

	public isAuth(): boolean {
		// console.log('LoginService.isAuth(%s)', this.isAuthenticated);

		return this.isAuthenticated;
	}
}
