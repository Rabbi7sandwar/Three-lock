import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-door1-puzzle',
  templateUrl: './door1-puzzle.page.html',
  styleUrls: ['./door1-puzzle.page.scss'],
})
export class Door1PuzzlePage implements OnInit {
  // showDot1 = false
  // showDot2 = false
  // showDot3 = false
  // showDot4 = false
  // showDot5 = false
  // counter = 0
  riddle = `I'm a tie that binds, not with ropes or chains,
Through sunny days and when it rains.
Not family by blood, but a connection so deep,
In secrets and laughter, my secrets you keep.
What am I, in this life's gripping clip?`
  inputValue = "";

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }

  ngOnInit() {

  }

  onInput(){
    console.log(this.inputValue)
    if(this.inputValue == "Friendship" || this.inputValue == "friendShip" || this.inputValue == "dosti" || this.inputValue == "friendship" || this.inputValue == "FriendShip"){
      this.showCode()
    }
  }
  cancel(door: any) {
    return this.modalCtrl.dismiss(door);
  }

  //   dot1() {
  //     this.showDot1 = true
  //     this.showCode()
  //   }

  //   dot2(){
  //     this.showDot2 = true
  //     this.showCode()
  //   }

  //   dot3(){
  //     this.showDot3 = true
  //     this.showCode()
  //   }
  //   dot4(){
  //     this.showDot4 = true
  //     this.showCode()
  //   }
  //   dot5(){
  //     this.showDot5 = true
  //     this.showCode()
  //   }

  //   async showCode(){
  //  if(this.showDot1 && this.showDot2 && this.showDot3 && this.showDot4 && this.showDot5){
  //   this.cancel("door1")
  //   const alert = await this.alertController.create({
  //     header: 'Here is your passcode',
  //     subHeader: '7975',
  //     // message: 'This is an alert!',
  //     buttons: ['close'],
  //     backdropDismiss: false
  //   });

  //   await alert.present();
  //  }
  //   }

  // inputValue1: string = '';
  // inputValue2: string = '';
  // nextInput = false
  // onInput() {
  //   // Remove non-numeric characters and limit to 4 digits
  //   this.inputValue1 = this.inputValue1.replace(/\D/g, '').substr(0, 4);
  //   if (this.inputValue1 == "2923") {
  //     this.nextInput = true
  //     this.inputValue2 = this.inputValue2.replace(/\D/g, '').substr(0, 4);
  //     if(this.inputValue2 == "2911"){
  //       this.showCode()
  //     }
  //   }
  // }

  async showCode() {
    this.cancel("door1")
    const alert = await this.alertController.create({
      header: 'Here is your passcode',
      subHeader: '7597',
      // message: 'This is an alert!',
      buttons: ['close'],
      backdropDismiss: false
    });
    await alert.present();
  }
}
