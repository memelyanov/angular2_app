import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent }    from './courses.component';
import { СourseDetailComponent } from '../course-detail';

// Route Configuration
const coursesRoutes: Routes = [
	{ path: 'courses', component: CoursesComponent },
	{ path: 'course-detail', component: СourseDetailComponent },
];

export const routes = RouterModule.forChild(coursesRoutes);
