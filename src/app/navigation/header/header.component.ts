import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  ontoggleSidenav(){
    this.sidenavToggle.emit();  
    // Now we emit an event whenever the toggle button is clicked
  }

}
