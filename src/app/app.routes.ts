import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OperatorComponent } from './operator/operator.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'operator', component: OperatorComponent}
];
