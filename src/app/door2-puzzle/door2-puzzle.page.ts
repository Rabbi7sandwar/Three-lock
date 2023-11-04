import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-door2-puzzle',
  templateUrl: './door2-puzzle.page.html',
  styleUrls: ['./door2-puzzle.page.scss'],
})
export class Door2PuzzlePage implements OnInit {
  firstSet = [4, 2, 4, 3]
  secondSet = [1, 2, 2, 4, 5]
  thirdSet = [5, 4, 3, 1, 1, 5, 2]
  currentIndex = 0;
  currentElement: number | null = null;

  constructor(private modalCtrl: ModalController, private alertController: AlertController) { }


  ngOnInit() {
    this.displayElementsAtInterval();
  }

  displayElementsAtInterval() {
    const interval = 1000;
    const displayNextElement = () => {
      if (this.currentIndex < this.firstSet.length) {
        this.currentElement = this.firstSet[this.currentIndex];
        this.currentIndex++;
        setTimeout(displayNextElement, interval);
      } else {
        this.currentElement = null;
      }
    };
    displayNextElement();
  }

  cancel() {
    return this.modalCtrl.dismiss();
  }

}
