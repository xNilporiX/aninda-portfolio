import { Routes } from '@angular/router';
import { WorkExperienceComponent } from './shared/components/work-experience/work-experience.component';
import { ContentComponent } from './shared/components/content/content.component';
import { ProjectsPageComponent } from './shared/components/projects-page/projects-page.component';

export const routes: Routes = [
    {
        path: '',  component: ContentComponent
    },
    {
        path: 'experience', component: WorkExperienceComponent
    },
    {
        path: 'projects', component: ProjectsPageComponent
    }
];
