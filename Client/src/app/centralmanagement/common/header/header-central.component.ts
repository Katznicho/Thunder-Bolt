import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-central.component.html',
  styleUrls: ['./header-central.component.scss']
})
export class HeaderCentralComponent implements OnInit {
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() leftHeaderColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  @Input() headerHeight: number;
  @Input() collapsedLeftHeader: boolean;

  constructor( private layoutService: LayoutService) { }

  ngOnInit() {

  }

  changeTheToggleStatus() {
    this.layoutService.getToggleStatus();
  }

}
