import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {
  //crear nuevo listado
  //componentes: any[] = [];
  componentes: Componente[] = [
    {
      icon: 'earth-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'chatbox-ellipses-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'document-text-outline',
      name: 'Input',
      redirectTo: '/input',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
