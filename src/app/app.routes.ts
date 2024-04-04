import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OperatorComponent } from './operator/operator.component';
import { AddOperatorComponent } from './add-operator/add-operator.component';
import { DeleteOperatorComponent } from './delete-operator/delete-operator.component';
import { AtmComponent } from './atm/atm.component';
import { AddAtmComponent } from './add-atm/add-atm.component';
import { DeleteAtmComponent } from './delete-atm/delete-atm.component';
import { SearchAtmComponent } from './search-atm/search-atm.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MessageGeneratorComponent } from './message-generator/message-generator.component';

export const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'service', component: MainComponent},
    {path: 'operator', component: OperatorComponent},
    {path: 'operator/add', component: AddOperatorComponent},
    {path: 'operator/delete', component: DeleteOperatorComponent},
    {path: 'atm', component: AtmComponent},
    {path: 'atm/add', component: AddAtmComponent},
    {path: 'atm/delete', component: DeleteAtmComponent},
    {path: 'atm/search', component: SearchAtmComponent},
    {path: 'message', component: MessageGeneratorComponent}
];
