import { Component, Input, OnInit } from '@angular/core';
import { ISongs } from 'src/app/utils/interfaces/songs.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() songs: ISongs[] = [];
  @Input() autoPlay: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  playSong(audioId: string) {
    const songs = document.querySelectorAll<HTMLAudioElement>('.songs');
    songs.forEach((song) => song.id !== audioId && song.pause());
  }
}
