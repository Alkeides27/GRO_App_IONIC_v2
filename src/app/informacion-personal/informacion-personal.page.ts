import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCard, IonCardContent, IonChip, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

/*
  Página de Información Personal con interactividad agregada:
  - Chips de stack tecnológico que disparan un toast con descripción al hacer tap.
  - Tarjetas de proyecto expandibles con descripción detallada.

  Las descripciones del stack se almacenan en un Record para facilitar
  la mantenibilidad: si se agrega una tecnología nueva, solo hay que
  agregar una entrada al objeto. Se usó Record<string, string> en vez
  de Map porque es más conciso y serializable.

  Para los proyectos, se usa un Set<number> para rastrear cuáles están
  expandidos porque ofrece operaciones O(1) para has/add/delete,
  lo cual es ideal para toggle de estado sin re-renderizar innecesariamente.
*/
@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.page.html',
  styleUrls: ['./informacion-personal.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButtons, IonMenuButton, IonCard, IonCardContent,
    IonChip, IonLabel, IonIcon
  ]
})
export class InformacionPersonalPage implements OnInit {

  // Descripciones de cada tecnología del stack (máx 90 caracteres cada una)
  stackDescriptions: Record<string, string> = {
    'Angular': 'Framework frontend basado en TypeScript, mantenido por Google.',
    'Ionic': 'Framework UI para apps híbridas multiplataforma.',
    'React Native': 'Framework para apps nativas multiplataforma con React.',
    'Django': 'Framework backend Python para web apps robustas y escalables.'
  };

  // Proyectos con descripción extendida
  projects = [
    {
      tag: 'PST III',
      name: 'CANTV-APP',
      desc: 'Desarrollo de Aplicación Móvil de Gestión de Combustible en los Motogeneradores Eléctricos en CANTV Lara, Región Occidente.',
      // PRD-AMBIGUITY: El PRD indica inventar 2-3 líneas plausibles por proyecto.
      // Se agregó una descripción extendida ficticia pero coherente con el contexto.
      extendedDesc: 'Tecnologías utilizadas: Django, Ionic, SQLite. Rol: desarrolladora frontend y backend. Estado: en producción interna para CANTV Lara.'
    }
  ];

  // Set para rastrear qué proyectos están expandidos (O(1) lookup)
  expandedProjects = new Set<number>();

  constructor(private toastCtrl: ToastController) {
    addIcons({ chevronDownOutline, chevronUpOutline });
  }

  ngOnInit() { }

  // Muestra un toast con la descripción de la tecnología tocada
  async showStackInfo(tech: string) {
    const description = this.stackDescriptions[tech] || 'Sin descripción disponible.';
    const toast = await this.toastCtrl.create({
      message: description,
      duration: 1500,
      position: 'top',
      color: 'medium'
    });
    await toast.present();
  }

  // Toggle expandir/colapsar descripción extendida de un proyecto
  toggleProject(index: number) {
    if (this.expandedProjects.has(index)) {
      this.expandedProjects.delete(index);
    } else {
      this.expandedProjects.add(index);
    }
  }
}
