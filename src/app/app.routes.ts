import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';
import { CoursesComponent } from './pages/courses';
import { СourseDetailComponent } from './pages/course-detail';

export const ROUTES: Routes = [
	{path: '', component: CoursesComponent},
	{path: 'courses', component: CoursesComponent},
	{path: 'course-detail', component: СourseDetailComponent},
	{path: 'login', component: LoginComponent},
	{path: '**', component: NoContentComponent},
];
