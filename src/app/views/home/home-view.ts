import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-view',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home-view.html',
  styleUrl: './home-view.scss'
})
export class HomeView {

}
