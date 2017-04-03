import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'durationPipe'
})

export class DurationPipe implements PipeTransform {
	transform(value: number, args: string[]): any {
		if (!value) return value;
		// let h = (value - value % 60) / 60;
		let h = Math.floor(value / 60);
		let m = value - 60*h;

		if (h > 0) {
			return h + 'h ' + m + 'min';
		}
		return m + 'min';
	}
}
