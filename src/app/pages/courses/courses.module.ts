// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './courses.routes';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseItemModule } from './course-item/course-item.module';
import { OrderBy } from './course.orderby.pipe';

@NgModule({
	declarations: [
		CoursesComponent,
		OrderBy
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		CourseItemModule
	],
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
