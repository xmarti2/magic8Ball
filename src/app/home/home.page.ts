import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cssClass: string;
  private answers = ['Whataburger', 'Po-Boy Express', 'Aztecas',
             'Sushi Masa', 'TJ Ribs', 'Subway',
             'Olive Garden', 'Frankies Dawg House', 'Chick Fil A',
             'Walk Ons', 'Pluckers', 'Burger Smith',
             'Bon Temps', 'Ichiban',
             'Gattis Pizza', "Smoothie King", 'Tokyo Grill',
             'BRQ', 'Texas Roadhouse', 'Jasons Deli']

  constructor(private toastCtrl: ToastController) {}

  giveAnswer() {
    this.cssClass = "animated shake";
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    // this.presentToast(answer);

    var temp = this;
    setTimeout(function(){
      temp.presentToast(answer);
    }, 2000)
  }

  async presentToast(answer) {
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss().then(() => {
      console.log('toast dismissed');
      this.cssClass = "";
    });
    toast.present();
  }

}
