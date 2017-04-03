import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {
	public dayMilliSec: number = 24 * 60 * 60 * 1000;

	private courseList: CourseItem[];
	private count: number = 0;
	private myObservable: Observable<CourseItem[]>;

	constructor() {
		this.courseList = [];
		// Now
		this.createCourse ();
		// Old
		let cD: number = new Date().getTime() - 20 * this.dayMilliSec;
		this.createCourse (new Date(cD), true);
		// Future
		cD = new Date().getTime() + 10 * this.dayMilliSec;
		this.createCourse (new Date(cD), true);
	}

	public getObsItems (): Observable<CourseItem[]> {
		console.log('CourseService.getObsItems()');

		this.myObservable = new Observable(
			(observer) => {
				setTimeout(() => { observer.next(this.courseList); }, 1000);
				setTimeout(() => { observer.complete(); }, 3000);
			}
		);
		return this.myObservable;
	}

	public getItems (): CourseItem[] {
		console.log('CourseService.getItems()');

		return this.courseList;
	}

	public createCourse (cDate: Date = null, top: boolean = false) {
		let newId = this.count++;

		if (cDate === null) {
			cDate = new Date();
		}

		console.log('CourseService.createCourse() : ', newId);

		this.courseList.push(new CourseItem(newId,
											'title ' + newId,
											cDate,
											newId * 10 + 41,
			'This training is about Angular 2 directives and pipes. It covers pipes purpose,'
			+ ' build-in pipes usage and custom pipes creation. Participants will know about'
			+ ' built in directives and how to write custom directives.',
											top));
	}

	public getItem (title): CourseItem {
		console.log('CourseService.getItem(' + title + ')');

		let res = this.courseList.filter( (course) => {
			return (course.title === title);
		});
		return (res.length > 0) ? res[0] : null;
	}

	public updateItem (courseId) {
		console.log('CourseService.updateItem(' + courseId + ')');
	}

	public removeItem (courseId) {
		console.log('CourseService.removeItem(' + courseId + ')');

		let res = this.courseList.filter( (course) => {
			return (course.id !== courseId);
		});
		this.courseList = res;
	}
}
