import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-standalone',
  template: `<ion-button>Standalone Button</ion-button>`,
  imports: [IonicModule],
  standalone: true
})
export class StandaloneComponent { }
