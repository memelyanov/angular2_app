// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './course-detail.routes';

// custom components
import { СourseDetailComponent } from './course-detail.component';

@NgModule({
	declarations: [
		СourseDetailComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class СourseDetailModule {
	constructor() {
	}
}
