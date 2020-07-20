import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  openedChange(isOpened: boolean): void {

  }

  goTo(destination: string): void {
    switch (destination) {
      case 'contacts':
      // this.router.navigate(['/home/contacts']);
    }
  }
}
