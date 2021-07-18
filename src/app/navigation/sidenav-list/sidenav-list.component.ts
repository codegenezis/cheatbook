import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onclose(){
    this.closeSidenav.emit();
    // whenever this onclose function called, it emits the event
  }

  github(){
    let url: string ="https://github.com/codegenezis/cheatbook"
    window.open(url, '_blank')
    this.onclose();
  }


}
