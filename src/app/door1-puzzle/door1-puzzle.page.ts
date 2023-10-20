import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-door1-puzzle',
  templateUrl: './door1-puzzle.page.html',
  styleUrls: ['./door1-puzzle.page.scss'],
})
export class Door1PuzzlePage implements OnInit {
  showDot1 = false
  showDot2 = false
  showDot3 = false
  showDot4 = false
  showDot5 = false
  counter = 0

  constructor(private modalCtrl: ModalController,private alertController: AlertController) { }

  ngOnInit() {

  }

  cancel() {
    return this.modalCtrl.dismiss();
  }

  dot1() {
    this.showDot1 = true
    this.showCode()
  }

  dot2(){
    this.showDot2 = true
    this.showCode()
  }

  dot3(){
    this.showDot3 = true
    this.showCode()
  }
  dot4(){
    this.showDot4 = true
    this.showCode()
  }
  dot5(){
    this.showDot5 = true
    this.showCode()
  }

  async showCode(){
 if(this.showDot1 && this.showDot2 && this.showDot3 && this.showDot4 && this.showDot5){
  this.cancel()
  const alert = await this.alertController.create({
    header: 'Here is your passcode',
    subHeader: '7975',
    // message: 'This is an alert!',
    buttons: ['close'],
  });

  await alert.present();
 }
  }

}
