export interface ICourseItem {
	id: number;
	length: number;
	description: string;
	date: Date;
}

export class CourseItem implements ICourseItem {
	constructor (
		public id: number,
		public length: number, 
		public description: string,
		public date: Date) {

	}
}
