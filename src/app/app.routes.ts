import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RopaComponent } from './ropa/ropa.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { ProdBellezaComponent } from './prod-belleza/prod-belleza.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Nosotros', component: AboutComponent},
    {path: 'Ropa', component: RopaComponent},
    {path: 'Accesorios',component: AccesoriosComponent},
    {path: 'ProdBelleza', component: ProdBellezaComponent},
    {path: 'inicio-sesion', component: InicioSesionComponent},
];
