import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'home-view',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home-view.html',
  styleUrl: './home-view.scss'
})
export class HomeView {
    currentRoute: string | null = null;

    constructor(private router: Router) {
        this.router.events.subscribe(() => {
            const urlSegments = this.router.url.split('/');
            this.currentRoute = urlSegments[1] || null;
        });
    }

    handleClick(route: string, event: Event): void {
      if (this.currentRoute === route) {
        event.preventDefault();
        this.router.navigate([''])
      }
    }
}
