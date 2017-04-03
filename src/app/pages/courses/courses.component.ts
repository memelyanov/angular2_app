import { Component, NgZone, ViewEncapsulation, OnInit, OnDestroy,
		ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from '../../core/services';
import { CourseItem } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [],
	styles: [require('./courses.styles.scss')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {
	// Set our default values
	public localCourse  = { value: '' };
	private courseServiceSubscription: Subscription;
	private courseList: CourseItem[];
	private isLoading: boolean = false;

	constructor(
		private courseService: CourseService,
		private changeDetectorRef: ChangeDetectorRef
		) {
		console.log('Courses page constructor');

		this.courseList = [];
	}

	public ngOnInit() {
		console.log('Courses page init');

		this.isLoading = true;

		this.courseServiceSubscription =
			this.courseService.getObsItems().subscribe((res: CourseItem[]) => {
				this.courseList = res;
				this.isLoading = false;
				console.log('Courses loaded');
				// required to repaint list with onpush
				this.changeDetectorRef.markForCheck();
			});
	}

	public ngOnDestroy() {
	}

	public findCourse(value: string) {
		console.log('CoursesComponent.findCourse: ', value);
		let course = this.courseService.getItem(value);
		console.log('Found: ', course);
	}

	public addCourse() {
		console.log('CoursesComponent.addCourse');
		this.courseService.createCourse();
		this.changeDetectorRef.markForCheck();
	}

	public deleteCourse($event) {
		console.log('CoursesComponent.deleteCourse: ', $event);
		let isDelete = confirm('Вы действительно хотите удалить курс ?');
		if (isDelete) {
			this.courseService.removeItem($event.value);
			// this.changeDetectorRef.markForCheck();
		}
	}

	public lastChanged(): Date {
		return new Date();
	}

	public isEmptyList(): Boolean {
		return (!this.isLoading && this.courseList.length === 0);
	}
}
