import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { CourseHighlightDirective } from './course.highlight.directive';

@NgModule({
	declarations: [
		CourseItemComponent,
		CourseHighlightDirective],
	imports: [
		CommonModule
	],
	exports: [
		CourseItemComponent
	]
})
export class CourseItemModule {
	constructor() {
	}
}
