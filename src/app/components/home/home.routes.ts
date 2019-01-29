import { Routes } from '@angular/router';

import { FormularioTemplateComponent } from '../formulario-template/formulario-template.component';
import { FormularioDataComponent } from '../formulario-data/formulario-data.component';

export const HOME_ROUTES: Routes = [
    {  path: 'template', component: FormularioTemplateComponent },
    {  path: 'data', component: FormularioDataComponent },
    {  path: '**', redirectTo: 'template' }
]