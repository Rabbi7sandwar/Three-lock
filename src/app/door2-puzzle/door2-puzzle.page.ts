import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-door2-puzzle',
  templateUrl: './door2-puzzle.page.html',
  styleUrls: ['./door2-puzzle.page.scss'],
})
export class Door2PuzzlePage implements OnInit {
  firstSet = [4, 2, 4, 3]
  secondSet = [1, 2, 8, 4]
  thirdSet = [5, 4, 3, 6, 1, 5]
  currentIndex = 0;
  currentElement: number | null = null;
  optForSet = [4243, 4342, 4432]
  value: any
  optShow = false

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }


  ngOnInit() {
setTimeout(() => {
  this.displayElementsAtInterval(this.firstSet);
}, 500);
  }

  displayElementsAtInterval(SetName: any) {

    const interval = 1000;
    const displayNextElement = () => {
      if (this.currentIndex < SetName.length) {
        this.currentElement = SetName[this.currentIndex];
        this.currentIndex++;
        setTimeout(displayNextElement, interval);
      } else {
        this.currentElement = null;
        this.optShow = true

      }
    };
    displayNextElement()


  }




  onChange(e: any) {
    this.value = e.target.value;
    this.currentIndex = 0
    // console.log(this.value)
    if (this.value == 4243) {
      this.displayElementsAtInterval(this.secondSet)
      this.optShow = false
      this.optForSet = [1124, 1284, 1424]
    } else if (this.value == 1284) {
      this.displayElementsAtInterval(this.thirdSet)
      this.optShow = false
      this.optForSet = [543151, 543615, 543112]
    } else if (this.value == 543615) {
      this.showCode()
    }
    else {
      this.startAgain();
    }


  }

  cancel(door:any) {
    return this.modalCtrl.dismiss(door);
  }

  async showCode() {
    this.cancel("door2")
    const alert = await this.alertController.create({
      header: 'Here is your passcode',
      subHeader: '2911',
      // message: 'This is an alert!',
      buttons: ['close'],
      backdropDismiss: false
    });
    await alert.present();
  }

  async startAgain() {
    this.cancel("cancel")
    const alert = await this.alertController.create({
      header: 'OOPS!!! wrong answer',
      // subHeader: '2911',
      // message: 'This is an alert!',
      buttons: ['Tap to Enter Again'],
      backdropDismiss: false
    });
    await alert.present();
  }

}
