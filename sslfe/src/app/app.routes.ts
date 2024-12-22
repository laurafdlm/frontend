import { Routes } from '@angular/router';
import { GestorListasComponent } from './gestor-listas/gestor-listas.component';
import { DetalleListasComponent } from './detalle-listas/detalle-listas.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';

export const routes: Routes = [
    {path: 'DetalleLista',  component : DetalleListasComponent},
    { path: 'Login', component: Login1Component },
    { path: 'Register', component: Register1Component }, 
    {path: 'GestorListas', component: GestorListasComponent}

];
