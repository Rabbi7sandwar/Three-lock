import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  doorImage1 = "../../assets/images/closedDoor.jpg"
  doorImage2 = "../../assets/images/closedDoor.jpg"
  doorImage3 = "../../assets/images/closedDoor.jpg"

  constructor(private modalCtrl: ModalController,private router: Router) { }

  async openModal(puzzleDoor: any) {
    const modal = await this.modalCtrl.create({
      component: puzzleDoor,
      backdropDismiss: false
    });
    modal.present();

    // const { data, role } = await modal.onWillDismiss();

   
  }

  ngOnInit() {
  }

  door1Puzzle(){
    this.openModal(Door1PuzzlePage)
    // this.router.navigate(['/door1-puzzle'])
  }
  
  door2Puzzle(){
    this.openModal(Door2PuzzlePage)
    // this.router.navigate(['/door2-puzzle'])
  }

  door3Puzzle(){
    this.openModal(Door3PuzzlePage)
    // this.router.navigate(['/door3-puzzle'])
  }

  cancel(){
    this.router.navigate(['/home'])
  }


}
