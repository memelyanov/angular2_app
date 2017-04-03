import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'myDurationPipe'
})

export class DurationPipe implements PipeTransform {
	public transform(value: number, args: string[]): any {
		console.log('DurationPipe.transform()');

		if (!value) {
			return value;
		}
		// let h = (value - value % 60) / 60;
		let h = Math.floor(value / 60);
		let m = value - 60 * h;

		if (h > 0) {
			return h + 'h ' + m + 'min';
		}
		return m + 'min';
	}
}
