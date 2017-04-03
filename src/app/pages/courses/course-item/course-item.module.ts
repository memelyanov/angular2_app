import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { CourseHighlightDirective } from './course.highlight.directive';
import { DurationPipe } from './course.duration.pipe';

@NgModule({
	declarations: [
		CourseItemComponent,
		CourseHighlightDirective,
		DurationPipe
	],
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
