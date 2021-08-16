import { Component, Input, OnInit } from '@angular/core';
import clsx from 'clsx';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input('separator') separator: boolean;
  @Input('active') active: boolean;

  constructor() {
    this.separator = false;
    this.active = false;
  }

  ngOnInit(): void {}
}
