import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {


  @Input() img: string = "valor inicial"
  @Output() loaded = new EventEmitter<string>();
  ImageDefault = './assets/img/164456527857.gif'

  constructor() { }

  ngOnInit(): void {
  }
  imgError()
  {
    this.img = this.ImageDefault
  }
  imgLoad()
  {
    console.log('loaded hijo')
    this.loaded.emit(this.img);
  }
}
