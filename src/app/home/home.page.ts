import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  start = false
  tileContents: (number | null)[] = [1, 2,3,4 ,5 ];

  constructor(private alertController: AlertController,private router: Router) { }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  play(){
    this.start = true
    this.shuffleArray(this.tileContents);
  }

  result(index:any){
  
    if(index == 2){
      this.router.navigate(['/three-door'])
    }
    else if(index != 2 && index !=4){
     this.presentAlert("","Loser","Start Again")
     this.play();
    }
    else if(index == 4){
      this.presentAlert("","","Try Again")
    }
  }

  async presentAlert(header:any,message:any, btn:any) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [btn],
    });

    await alert.present();
  }
 
}
