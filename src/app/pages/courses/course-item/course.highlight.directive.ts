import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[courseHighlight]'
})

export class CourseHighlightDirective {
	@Input() public highlightDate: Date;
	public dayMilliSec: number = 24 * 60 * 60 * 1000;

	constructor(private el: ElementRef) {
		console.log('CourseHighlightDirective.constructor()');
	}

	@HostListener('mouseenter') public onMouseEnter() {
		console.log('CourseHighlightDirective.onMouseEnter()');
		this.highlight();
	}

	@HostListener('mouseleave') public onMouseLeave() {
		console.log('CourseHighlightDirective.onMouseLeave()');
		this.highlight(null);
	}

	private highlight(color: string = '') {
		if (color === '' && this.highlightDate.getTime() < new Date().getTime()
			&&	this.highlightDate.getTime() > (new Date().getTime() - 14 * this.dayMilliSec)) {
			color = 'green';
		}

		if (color === '' && this.highlightDate.getTime() > new Date().getTime()) {
			color = 'blue';
		}

		console.log('CourseHighlightDirective.highlight(%s)', color);
		this.el.nativeElement.style.backgroundColor = color;
	}
}
