import { Component, OnInit } from '@angular/core';
import { FrontService } from 'src/app/shared/services/front.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  constructor(private user:FrontService){
 

    }
  ngOnInit(){
    window.scrollBy(0, 0);  
  }
    logout(){
      this.user.logout()
    }


  }


