import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'course-detail',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./course-detail.component.scss')],
	template: require('./course-detail.component.html')
})
export class СourseDetailComponent implements OnInit, OnDestroy {
	constructor() {
		console.log('CourseDetail Page constructor');
	}

	public ngOnInit() {
		console.log('CourseDetail Page init');
	}

	public ngOnDestroy() {
		// unsubscribe here
	}
}
