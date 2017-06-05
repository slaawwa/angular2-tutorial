import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './my-hero-detail.component.html',
  styleUrls: ['./my-hero-detail.component.css'],
})
export class MyHeroDetailComponent {
  @Input()
  hero: Hero;

  constructor(
    private router: Router,
  ) { }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.hero.id]);
  }
}
