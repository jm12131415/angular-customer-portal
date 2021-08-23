import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input() separator: boolean;
  @Input() active: boolean;

  constructor() {
    this.separator = false;
    this.active = false;
  }

  ngOnInit(): void {}
}
