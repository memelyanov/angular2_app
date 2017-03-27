import { Component, ViewEncapsulation,
		Input, Output, EventEmitter,
		ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: 'course-item.component.html',
	styles: [require('./course-item.component.scss')],
	providers: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class CourseItemComponent {
	@Input() public course: CourseItem;
	@Output('change') public change = new EventEmitter();

	constructor(
		private changeDetectorRef: ChangeDetectorRef
	) {
	}

	public editItem() {
		console.log('CourseItemComponent.editItem');
		this.course.creationDate = new Date();
		// this.changeDetectorRef.markForCheck();
	}

	public deleteItem() {
		console.log('CourseItemComponent.deleteItem');
		this.change.emit({
			action: 'delete',
			value: this.course.id
		});
	}
}
