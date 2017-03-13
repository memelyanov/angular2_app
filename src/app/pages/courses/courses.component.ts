import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseItem } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./courses.styles.scss')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {
	// Set our default values
	public localState = { value: '' };

	private courseList: CourseItem[];
	private isLoading: boolean = false;

	constructor() {
		console.log('Courses page constructor');

		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Courses page init');

		this.isLoading = true;
		this.courseList[0] = new CourseItem(1, 'title 1', new Date('01/01/2012'), 100, 'description 1');
		this.courseList[1] = new CourseItem(2, 'title 2', new Date('01/01/2012'), 100, 'description 2');
		this.isLoading = false;
	}

	public ngOnDestroy() {
	}

	public submitState(value: string) {
		console.log('submitState', value);
		this.localState.value = '';
	}
	public addCourse() {
		console.log('addCourse');
	}
}
