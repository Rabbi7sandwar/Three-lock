import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {
  happy = "../../assets/images/happy.jpeg"
  private audio: HTMLAudioElement;
  playAudio = true
  constructor(private router: Router) {
    this.audio = new Audio();
    this.audio.src = '../../assets/images/happyBirthday.mp3'; // Replace with the path to your audio file
    this.audio.loop = false;
   }

  ngOnInit() {
    this.audio.play();
    setTimeout(() => {
      this.happy= "../../assets/images/imagecol.jpg"
    }, 8000);
    setTimeout(() => {
      this.pause()
      this.playAudio = false
      this.router.navigate(['/home'])
    }, 20000);
  }

  pause() {
    this.audio.pause();
  }
}
