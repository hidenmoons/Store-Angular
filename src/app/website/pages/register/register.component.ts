import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Onexit } from '../../../guards/exit.guard';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements Onexit {

  constructor() { }

 onexit()
 {
    const rta = confirm('logica desde comp, tas seguro de salirt ');
    return rta;
 }

}
