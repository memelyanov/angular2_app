import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseItemComponent {
	@Input() public course: CourseItem;
	@Output('change') public courseDelete = new EventEmitter();

	constructor() {
	}

	public editItem() {
		console.log('CourseItemComponent.editItem');
	}

	public deleteItem() {
		console.log('CourseItemComponent.deleteItem');
		this.courseDelete.emit({
			value: this.course.id
		});
	}
}
