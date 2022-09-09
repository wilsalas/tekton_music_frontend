import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { SongsService } from 'src/app/services/songs.service';
import { ICategories } from 'src/app/utils/interfaces/categories.interface';
import { ISongs } from 'src/app/utils/interfaces/songs.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected categories: ICategories[] = [];
  protected songs: ISongs[] = [];
  protected loading: boolean = true;
  protected search: string = '';
  protected autoPlay: boolean = false;

  constructor(
    private categoryService: CategoriesService,
    private songService: SongsService
  ) {}

  ngOnInit(): void {
    this.categoryService
      .categories()
      .subscribe({ next: (categories) => (this.categories = categories) });

    this.songService.songs().subscribe({
      next: (songs) => {
        this.songs = songs;
        this.loading = false;
      },
    });
  }

  applyFilter(search: string = '', surpriseMe: boolean = false) {
    this.loading = true;
    this.autoPlay = false;
    const categorySelections = this.categories.filter(
      (category) => category.checked
    );
    this.songService
      .songsByFilter(
        search,
        surpriseMe,
        Array.from(categorySelections, (category) => category.id)
      )
      .subscribe({
        next: (songs) => {
          this.songs = songs;
          this.loading = false;
          if (surpriseMe) this.autoPlay = true;
        },
      });
  }
}
