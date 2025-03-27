import { Routes } from '@angular/router';
import { HeaderComponent } from './pagina-inicial/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent, // Esta é a sua página inicial
    pathMatch: 'full'
  },
  // Outras rotas podem ser configuradas aqui
];

