import { Component, VERSION } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ngVersion = VERSION.full;

  constructor(private modalCtrl: ModalController) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ExploreContainerComponent
    });
    await modal.present();
  }

}
