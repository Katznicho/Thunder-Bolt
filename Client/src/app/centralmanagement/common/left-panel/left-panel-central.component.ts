import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-central.component.html',
  styleUrls: ['./left-panel-central.component.scss']
})
export class LeftPanelCentralComponent implements OnInit {
  asidebarHeight: number;

  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  imageurl = '../../../../assets/avatar3.jpg';
  title: any;
  menuList: any;
  selected: any;
  userName: any;
  constructor(private layoutService: LayoutService) {}

  isActive(item) {
    return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = this.selected === item ? item : item;
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = this.selected === item ? item : item;
  }

  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
    this.asidebarHeight = window.innerHeight;
  }

  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(
      setSidebarHeight => (this.asidebarHeight = setSidebarHeight)
    );

    this.title = 'Navigation';

    this.menuList = [
      {
        name: this.userName,
        icon: 'far fa-user-circle',
        url: '/none',
        image: this.imageurl
      },
      {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        url: '/centralmanagement/dashboard'
      },
      {
        name: 'Areas',
        icon: 'fas fa-tachometer-alt',
        url: '/centralmanagement/areas'
      },
      {
        name: 'Towns',
        icon: 'fas fa-tachometer-alt',
        url: '/centralmanagement/towns'
      },
      {
        name: 'Stations',
        icon: 'fas fa-tachometer-alt',
        url: '/centralmanagement/stations'
      },
      {
        name: 'Clusters',
        icon: 'fas fa-tachometer-alt',
        url: '/centralmanagement/clusters'
      },
      {
        name: 'Settings',
        icon: 'fas fa-user-cog',
        url: '/centralmanagement/profile'
      }
    ];
  }
}
