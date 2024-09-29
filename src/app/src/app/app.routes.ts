import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { WorkExperienceComponent } from './shared/components/work-experience/work-experience.component';

export const routes: Routes = [
    {
        path: '',  component: HeaderComponent
    },
    {
        path: 'experience', component: WorkExperienceComponent
    }
];
