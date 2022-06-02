import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = "valor inicial"

  @Input()
  set changeimg(newimg: string) {
    this.img = newimg;
    console.log('imagen cambio', this.img);
  }

  @Output() loaded = new EventEmitter<string>();
  ImageDefault = './assets/img/164456527857.gif'
  //counter = 0;
  //counterfg: number | undefined;


  constructor() {
    //before render
    //NO async
    console.log('constructor ', 'imgvalue =>', this.img);
  }

  ngOnInit(): void {
    //before render - during
    // async- fetch - apis-- once time
    console.log('ngOnInit ', 'imgvalue =>', this.img);

    // this.counterfg= window.setInterval(()=>{
    //  this.counter +=1;
    //console.log('run counter')
    //},1000);

  }

  ngOnChanges(changes: SimpleChanges): void {
    //before render
    //changes inputs--times
    console.log('ngOnChanges ', 'imgvalue =>', this.img);
    console.log('changes ', changes)
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit ');

  }

  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy ');
    //window.clearInterval(this.counterfg);

  }


  imgError() {
    this.img = this.ImageDefault
  }

  imgLoad() {
    console.log('loaded hijo')
    this.loaded.emit(this.img);
  }
}
