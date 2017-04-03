import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../core/entities';

@Pipe({
	name: 'myFilterCourseItem'
})

export class FilterCourseItem implements PipeTransform {
	public transform(courseList: CourseItem[], title: string): CourseItem[] {
		console.log('FilterCourseItem.transform(%s)', courseList);

		if (!courseList || !title) {
			return courseList;
		}

		let res = courseList.filter( (course) => {
			return (course.title === title);
		});
		return res;
	}
}
