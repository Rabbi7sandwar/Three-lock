import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-door2-puzzle',
  templateUrl: './door2-puzzle.page.html',
  styleUrls: ['./door2-puzzle.page.scss'],
})
export class Door2PuzzlePage implements OnInit {
  displayFigure = ''
  showBox = 'showBox'

  constructor(private modalCtrl: ModalController,private alertController: AlertController) { }


  ngOnInit() {
    setTimeout(() => {
      this.displayFigure = 'show'
    }, 5000);
  }

  cancel() {
    return this.modalCtrl.dismiss();
  }

}
