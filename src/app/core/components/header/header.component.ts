import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from '../../services';

@Component({
	selector: 'main-header',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./header.component.scss')],
	template: require('./header.component.html')
})
export class HeaderComponent {
	constructor(private loginService: LoginService) {
		console.log('HeaderComponent.constructor()');
	}
}
