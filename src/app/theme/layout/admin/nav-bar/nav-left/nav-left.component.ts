// Angular import
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  // public props
  @Output() NavCollapsedMob = new EventEmitter();

}
