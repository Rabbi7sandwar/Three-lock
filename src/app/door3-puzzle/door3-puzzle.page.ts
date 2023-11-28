import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-door3-puzzle',
  templateUrl: './door3-puzzle.page.html',
  styleUrls: ['./door3-puzzle.page.scss'],
})
export class Door3PuzzlePage implements OnInit {

  puzzle: (string | null)[][] = [
    ['F', 'R', 'I', 'E', 'N', 'D'],
    ['U', null, null, null, null, 'A'],
    ['N', null,null,null, null, 'T'],
    [null, null, null, null, null, 'E'],
    // [null, null, null, null, 'D', 'I', 'L'],
  ];

  // puzzle: (string | null)[][] = [
  //   [null,null,null,null,null,'P',null],
  //   [null,null,'P','Y','A','R','I'],
  //   ['M','E','R','I',null,'A',null],
  //   [null, null,'A',null,null,'B',null],
  //   [null, null,'B',null,null,'H',null],
  //   [null, null,'H',null,null,'L',null],
  //   [null, null,'L',null,null,'E',null],
  //   [null, null,'E',null,null,'E',null],
  //   [null, null,'E',null,null,'N',null],
  //   [null, null,'N',null,null,null,null],
  // ]

  //   puzzles: (string | null)[][] = [
  //   [null,null,'M',null,null,null,null,null,null,null],
  //   [null,null,'P','Y','A','R','I'],
  //   ['M','E','R','I',null,'A',null],
  //   [null, null,'A',null,null,'B',null],
  //   [null, null,'B',null,null,'H',null],
  //   [null, null,'H',null,null,'L',null],
  //   [null, null,'L',null,null,'E',null],
  //   [null, null,'E',null,null,'E',null],
  //   [null, null,'E',null,null,'N',null],
  //   [null, null,'N',null,null,null,null],
  // ]

  // userInput: string[][] = Array.from({ length: 4 }, () => Array(6).fill(''));
  
  userInput: string[][] = [
    ['F', '', '', '', '', 'D'],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', 'T'],
    ['', '', '', '', '', ''],
  ];

  constructor(private modalCtrl: ModalController, private alertController: AlertController) {}

  ngOnInit(): void {}

  // checkCorrectness(row: number, col: number): any {
  
  //   // return this.userInput[row][col].toUpperCase() === this.puzzle[row][col];
   
  // }
  isPuzzleCompleted: boolean = false;
  checkCorrectness(row: number, col: number): boolean {
    const isCorrect = this.userInput[row][col]?.toUpperCase() === this.puzzle[row][col];

    if (!this.isPuzzleCompleted && this.isPuzzleComplete()) {
      this.isPuzzleCompleted = true;
      this.showCode();
    }

    return isCorrect;
  }

  isPuzzleComplete(): boolean {
    for (let i = 0; i < this.puzzle.length; i++) {
      for (let j = 0; j < this.puzzle[i].length; j++) {
        if (this.puzzle[i][j] !== null && this.userInput[i][j].toUpperCase() !== this.puzzle[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  cancel(door:any) {
    return this.modalCtrl.dismiss(door);
  }

  async showCode() {
    this.cancel("door3")
    const alert = await this.alertController.create({
      header: 'Here is your passcode',
      subHeader: '2923',
      // message: 'This is an alert!',
      buttons: ['close'],
      backdropDismiss: false
    });
    await alert.present();
  }


  // async showCompletionAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Congratulations!',
  //     message: 'You have completed the crossword puzzle!',
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }

}
