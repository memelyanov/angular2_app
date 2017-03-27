import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	private courseList: CourseItem[];
	private count: number = 0;
	private myObservable: Observable<CourseItem[]>;

	constructor() {
		this.courseList = [];
		for (let i = 0; i < 3; i++) {
			this.createCourse ();
		}
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

	public createCourse () {
		let newId = this.count++;

		console.log('CourseService.createCourse() : ', newId);

		this.courseList.push(new CourseItem(newId,
											'title ' + newId,
											new Date(),
											newId + 1,
											'description ' + newId));
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
