import { Routes } from '@angular/router';
import { ContentComponent } from './shared/components/content/content.component';
import { ProjectsPageComponent } from './shared/components/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContentComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/:id', component: ProjectsPageComponent },
];
