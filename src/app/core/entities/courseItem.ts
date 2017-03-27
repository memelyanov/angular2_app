export interface ICourseItem {
	id: number;
	title: string;
	creationDate: Date;
	duration: number;
	description: string;
}

export class CourseItem implements ICourseItem {
	constructor (
		public id: number,
		public title: string,
		public creationDate: Date,
		public duration: number,
		public description: string) {
	}

	public lastChanged(): Date {
		return new Date();
	}
}
