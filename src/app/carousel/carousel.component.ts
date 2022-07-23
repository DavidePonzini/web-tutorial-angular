import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() carouselId : string = "carousel";
  @Input() img1 : string = "";
  @Input() img2 : string = "";
  @Input() img3 : string = "";
}
