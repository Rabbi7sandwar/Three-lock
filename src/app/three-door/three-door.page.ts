import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Door1PuzzlePage } from '../door1-puzzle/door1-puzzle.page';
import { Router } from '@angular/router';
import { Door2PuzzlePage } from '../door2-puzzle/door2-puzzle.page';
import { Door3PuzzlePage } from '../door3-puzzle/door3-puzzle.page';

@Component({
  selector: 'app-three-door',
  templateUrl: './three-door.page.html',
  styleUrls: ['./three-door.page.scss'],
})
export class ThreeDoorPage implements OnInit {

  doorImage1 = "../../assets/images/closedDoors.jpg"
  doorImage2 = "../../assets/images/closedDoors.jpg"
  doorImage3 = "../../assets/images/closedDoors.jpg"
  door2 = false
  door1 = false
  play = true
  door3 = true
doorImage = "../../assets/images/closedDoors.jpg";
finalDoor = true
inputValue = ""
inputValue1 = ""
inputValue2 = ""
second = false
third = false
  constructor(private modalCtrl: ModalController, private router: Router, private alertController: AlertController) {
    this.gameRule()
  }

  async openModal(puzzleDoor: any) {
    const modal = await this.modalCtrl.create({
      component: puzzleDoor,
      backdropDismiss: true
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (data == "door1") {
      this.door3 = true
     
      this.doorImage1 = "../../assets/images/openDoor.jpg"
      this.final()
    }
    else if (data == "door2") {
      this.door1 = true
      this.doorImage2 = "../../assets/images/openDoor.jpg"
    }
    else if (data == "door3") {
      this.doorImage3 = "../../assets/images/openDoor.jpg"
      this.door2 = true
    } else {

    }
 

  }

  ngOnInit() {
  }

  final() {
   this.play = false
  }
  door1Puzzle() {
    this.openModal(Door1PuzzlePage)
  }

  door2Puzzle() {
    this.openModal(Door2PuzzlePage)
  }

  door3Puzzle() {
    this.openModal(Door3PuzzlePage)
  }

  cancel() {
    this.router.navigate(['/home'])
  }

  async gameRule() {
    const alert = await this.alertController.create({
      header: 'Game rules',
      message: `
   
         Tap on the door to begin.
    
     
        Solve the puzzle to progress to the next room.
     
       Retrieve the passcode during the puzzle-solving process.
     
         Remember the passcodes in order to reach your final room.
      `,
      buttons: ['start'],
      backdropDismiss: false,
      cssClass: 'custom-alert'
    });
    await alert.present();
  }

  enter(){
    this.finalDoor = false
  }

  onInput(){
   if(this.inputValue == "2923"){
    this.second = true
   }
    if(this.inputValue1 == "2911"){
    console.log("dddd, ==", this.inputValue1)
    this.third = true
   }
    if(this.inputValue2 == "7597"){
    console.log("dddd, ==", this.inputValue2)
    this.router.navigate(['/rewards'])
   }

  }

}
