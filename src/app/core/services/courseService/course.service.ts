import { Injectable } from '@angular/core';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	private courseList: CourseItem[];
	private count: number = 0;

	constructor() {
		this.courseList = [];
		for (let i = 0; i < 5; i++) {
			this.createCourse ();
		}
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
											new Date('01/01/2012'),
											100,
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
