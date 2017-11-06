import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time;
  setDateTime(zone){
    this.time = new Date();
    if (zone === 'PST'){
      this.time.setHours(this.time.getHours());
    }
    else if (zone === 'MST'){
      this.time.setHours(this.time.getHours()+1);
    }
    else if (zone === 'CST'){
      this.time.setHours(this.time.getHours()+2);
    }
    else if (zone === 'EST'){
      this.time.setHours(this.time.getHours()+3);
    }
  }
  clear_time(){
    this.time = null;
  }
}
