import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showimg=true;
  token='';
  imgrta='';
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private fileservice: FilesService
  ){

  }

  onLoaded(img: string){
    console.log('log padre', img);
  }
  toggleimg(){
    this.showimg= !this.showimg;
  }

  createUser(){
    this.userService.create({
      name:'alexis',
      email:'alexis@fdfds.com',
      password:'sadsad'
    })
    .subscribe(rta=>{
      console.log(rta);
    })
  }

  login(){
    this.authService.login('alexis@fdfds.com','sadsad')
    .subscribe(rta=>{
      console.log(rta.access_token);
      this.token= rta.access_token;
    });
  }

  getProfile(){
    this.authService.profile()
    .subscribe(profile=>{
      console.log(profile)
    });
  }

  // downloadpdf(){
  //   this.fileservice.getfile('my.pdf','https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
  //   .subscribe()
  // }

  onUpload(event: Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file){
      this.fileservice.uploadFile(file)
    .subscribe(rta=>{
      this.imgrta = rta.location;
    })
    }
    
  }
}
