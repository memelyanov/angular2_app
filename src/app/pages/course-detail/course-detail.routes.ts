import { Routes, RouterModule } from '@angular/router';
import { СourseDetailComponent }    from './course-detail.component';

// Route Configuration
const courseDetailRoutes: Routes = [
	{ path: 'pageone', component: СourseDetailComponent },
];

export const routes = RouterModule.forChild(courseDetailRoutes);
