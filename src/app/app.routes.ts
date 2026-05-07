import { Routes } from '@angular/router';

/*
  Aquí defino el arreglo de rutas que actúa como el mapa de navegación
  de toda mi aplicación. Cada vez que el usuario hace clic en un ítem
  del menú lateral, el enrutador de Angular consulta este arreglo para
  decidir qué módulo de página debe cargar.

  Decidí usar carga perezosa (lazy loading) en cada ruta porque eso
  permite que el código de cada página solo se descargue cuando el
  usuario la solicita, mejorando el tiempo inicial de carga de la app.
*/

export const routes: Routes = [
  {
    // Cuando la URL está vacía, redirijo a 'inicio' para que la usuaria
    // nunca vea una pantalla en blanco al abrir la aplicación.
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    // Ruta de la página de Inicio. Carga perezosa.
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    // Ruta de la página de Información Personal.
    path: 'informacion-personal',
    loadComponent: () => import('./informacion-personal/informacion-personal.page').then( m => m.InformacionPersonalPage)
  },
  {
    // Ruta de la página de Contacto.
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage)
  },
];
