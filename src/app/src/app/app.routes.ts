import { Routes } from '@angular/router';
import { WorkExperienceComponent } from './shared/components/work-experience/work-experience.component';
import { ContentComponent } from './shared/components/content/content.component';

export const routes: Routes = [
    {
        path: '',  component: ContentComponent
    },
    {
        path: 'experience', component: WorkExperienceComponent
    }
];
