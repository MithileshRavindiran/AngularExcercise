/**
 * Created by x073880 on 12/17/2016.
 */
import {Component} from 'angular2/core';    

@Component({
    selector:'switches',
    template:`
    <ul class="nav nav-pills">
      <li><a [class.active]="viewMode == 'map'"  (click)="viewMode = 'map'">Map View</a></li>
      <li><a [class.active]="viewMode == 'list'" (click)="viewMode = 'list'">List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
     <template [ngSwitchWhen]="'map'">Map View Content</template>
     <template [ngSwitchWhen]="'list'">List View Content</template>
   </div>
    `
})
export class SwitchComponent {
viewMode='map';
}