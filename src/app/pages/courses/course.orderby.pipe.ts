import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../core/entities';

@Pipe({
	name: 'myOrderBy'
})

export class OrderBy implements PipeTransform {
	public transform(value: CourseItem[], args: string[]): CourseItem[] {
		console.log('OrderBy.transform(%s)', value);

		if (!value) {
			return value;
		}

		value.sort((a: CourseItem, b: CourseItem) => {
			if (a.creationDate < b.creationDate) {
				return -1;
			} else if (a.creationDate > b.creationDate) {
				return 1;
			} else {
				return 0;
			}
		});

		return value;
	}
}
