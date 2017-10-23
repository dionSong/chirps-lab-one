import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  log: string[];
  name:string;
  chirps: number;
  favoriteShow: 'GOT';
  email: 'martinezdaniel082014@gmail.com';
  phone: "(863)-399-1249";

  constructor() {
    this.log = [];
    this.name ='Daniel';
    this.chirps = 0;
    this.favoriteShow = 'GOT';
    this.email = 'martinezdaniel082014@gmail.com';
    this.phone = "(863)-399-1249";
    console.log(this.name);
    
   }
    
  ngOnInit() {
    
  }
  writeMessage(message){
    


    this.log.push(message);
    this.chirps++;
    console.log(this.log);

    document.forms['form'].reset(); 
    return false;
    
    
    
  }

}

// interface IUser{
//   name:'Daniel',
//   chirps: 0,
//   favoriteShow: 'GOT';
//   email: 'martinezdaniel082014@gmail.com';
//   phone: "(863)-399-1249";
// }