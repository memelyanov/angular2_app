import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'myOrderBy'
})

export class OrderBy implements PipeTransform {
	public transform(value: number, args: string[]): any {
		console.log('OrderBy.transform()');

		if (!value) {
			return value;
		}

		return value;
	}
}
