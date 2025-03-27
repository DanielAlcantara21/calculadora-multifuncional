import { RenderMode, ServerRoute } from '@angular/ssr';
import { HeaderComponent } from './pagina-inicial/header/header.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender, // Isto indica que a página deve ser pré-renderizada
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Página de fallback
  }
];
