import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonInput, IonTitle, IonToolbar, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonInput, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  constructor(private loadingController: LoadingController) {}

  async ngOnInit(): Promise<void> {
    const l = await this.loadingController.create();
    await l.present();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    l.dismiss();
  }

  focusEventTriggered(value: string) {
    console.log(`Focus event occured: ${value}`);
  }

  blurEventTriggered(value: string) {
    console.log(`Blur event occured: ${value}`);
  }
}
