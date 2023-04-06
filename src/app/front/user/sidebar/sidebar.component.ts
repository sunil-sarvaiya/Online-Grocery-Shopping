import { Component } from '@angular/core';
import { FrontService } from 'src/app/shared/services/front.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private user:FrontService){
 

    }
    logout(){
      this.user.logout()
    }


  }


