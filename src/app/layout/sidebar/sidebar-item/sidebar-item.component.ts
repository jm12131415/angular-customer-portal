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

  getMenuClass() {
    return (
      !this.separator &&
      clsx(
        'relative h-[48px] flex justify-start items-center rounded-r-[8px] cursor-pointer text-blueGray-400 font-bold text-[14px]',
        {
          group: !this.active,
          'hover:bg-red-100': !this.active,
          'bg-red-100': this.active,
        }
      )
    );
  }

  getMenuBarClass() {
    return (
      !this.separator &&
      clsx(
        'absolute left-0 top-0 w-[6px] h-full bg-red-500 rounded-[10px] transform -translate-x-1/2',
        {
          'hidden group-hover:block': !this.active,
        }
      )
    );
  }

  ngOnInit(): void {}
}
