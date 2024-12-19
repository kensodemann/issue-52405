import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  constructor(private loadingController: LoadingController) {}

  async ngOnInit(): Promise<void> {
    const l = await this.loadingController.create();
    await l.present();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    l.dismiss();
  }
}
